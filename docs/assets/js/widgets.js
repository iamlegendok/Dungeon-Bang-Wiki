/* Dungeon Bang wiki widgets: item card galleries and the parry trainer.
   A widget is an empty <div class="db-widget" data-widget="..."> in the page.
   Galleries read the Markdown table that follows the div, so the table stays
   the single source of the numbers and is kept below as "Table view". */
(function () {
  "use strict";

  var BASE = (function () {
    var s = document.querySelector('script[src*="assets/js/widgets.js"]');
    return s ? s.getAttribute("src").replace(/assets\/js\/widgets\.js.*$/, "") : "";
  })();

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function slug(name) { return name.replace(/[^A-Za-z]/g, ""); }
  function cellText(td) { return (td.textContent || "").trim(); }

  /* Read the first table after the widget into header-keyed rows. */
  function nextTable(node) {
    var n = node.nextElementSibling;
    while (n && n.tagName !== "TABLE" && !(n.querySelector && n.querySelector("table"))) n = n.nextElementSibling;
    if (!n) return null;
    return n.tagName === "TABLE" ? n : n.querySelector("table");
  }
  function readTable(table) {
    var heads = Array.prototype.map.call(table.querySelectorAll("thead th"), cellText);
    var rows = [];
    table.querySelectorAll("tbody tr").forEach(function (tr) {
      var row = {};
      tr.querySelectorAll("td").forEach(function (td, i) { row[heads[i]] = cellText(td); });
      rows.push(row);
    });
    return { heads: heads, rows: rows };
  }
  /* Keep the table, folded away under the gallery. */
  function foldTable(table, label) {
    var host = table.closest(".md-typeset__scrollwrap") || table;
    var d = el("details", "db-tableview");
    d.appendChild(el("summary", null, label || "Table view"));
    host.parentNode.insertBefore(d, host);
    d.appendChild(host);
  }

  /* An inventory footprint like "2x3" drawn as cells. */
  function footprint(size) {
    var m = /(\d+)\s*x\s*(\d+)/.exec(size || "");
    var w = m ? +m[1] : 1, h = m ? +m[2] : 1;
    var g = el("span", "db-foot");
    g.style.gridTemplateColumns = "repeat(" + w + ", 0.6rem)";
    for (var i = 0; i < w * h; i++) g.appendChild(el("i"));
    g.title = "Takes " + w + " x " + h + " cells";
    return g;
  }

  /* Rounds "2–5" drawn as six pips. */
  function roundPips(text) {
    var m = /(\d)\s*[–-]\s*(\d)/.exec(text || "");
    var a = m ? +m[1] : +(text || 1), b = m ? +m[2] : a;
    var g = el("span", "db-pips");
    for (var r = 1; r <= 6; r++) {
      var p = el("i", r >= a && r <= b ? "on" : "");
      p.textContent = r;
      g.appendChild(p);
    }
    g.title = "Drops in rounds " + a + " to " + b;
    return g;
  }

  function iconImg(src, alt, size) {
    var img = el("img", "db-icon");
    img.alt = alt;
    img.src = src;
    img.onerror = function () {
      var f = el("span", "db-icon db-icon--none");
      f.title = "No icon yet";
      f.appendChild(footprint(size));
      if (img.parentNode) img.parentNode.replaceChild(f, img);
    };
    return img;
  }

  /* Shared gallery shell: chips to filter, a card grid, one detail panel. */
  function gallery(root, items, opts) {
    root.classList.add("db-gallery");
    var bar = el("div", "db-chips");
    var grid = el("div", "db-grid");
    var panel = el("div", "db-detail");
    panel.hidden = true;
    root.appendChild(bar);
    root.appendChild(grid);
    root.appendChild(panel);

    var groups = [];
    items.forEach(function (it) { if (groups.indexOf(it.group) < 0) groups.push(it.group); });
    var active = "All";
    var chips = ["All"].concat(groups).map(function (g) {
      var c = el("button", "db-chip" + (g === "All" ? " on" : ""), g);
      c.type = "button";
      c.onclick = function () {
        active = g;
        chips.forEach(function (x) { x.classList.toggle("on", x === c); });
        cards.forEach(function (card, i) {
          card.hidden = !(g === "All" || items[i].group === g);
        });
      };
      bar.appendChild(c);
      return c;
    });
    if (groups.length < 2) bar.hidden = true;

    var openCard = null;
    var cards = items.map(function (it) {
      var card = el("button", "db-card");
      card.type = "button";
      card.appendChild(opts.icon(it));
      card.appendChild(el("span", "db-card__name", it.name));
      if (it.sub) card.appendChild(el("span", "db-card__sub", it.sub));
      card.onclick = function () {
        if (openCard === card) { close(); return; }
        if (openCard) openCard.classList.remove("on");
        openCard = card;
        card.classList.add("on");
        panel.innerHTML = "";
        opts.detail(it, panel);
        var x = el("button", "db-detail__close", "Close");
        x.type = "button";
        x.onclick = close;
        panel.appendChild(x);
        panel.hidden = false;
        panel.scrollIntoView({ block: "nearest", behavior: "smooth" });
      };
      grid.appendChild(card);
      return card;
    });
    function close() {
      panel.hidden = true;
      if (openCard) openCard.classList.remove("on");
      openCard = null;
    }
  }

  function seg(labels, current, onPick, cls) {
    var wrap = el("div", "db-seg " + (cls || ""));
    var btns = labels.map(function (l, i) {
      var b = el("button", i === current ? "on" : "", l);
      b.type = "button";
      b.onclick = function () {
        btns.forEach(function (x) { x.classList.toggle("on", x === b); });
        onPick(i);
      };
      wrap.appendChild(b);
      return b;
    });
    return wrap;
  }

  function fact(dl, k, v) {
    if (!v || v === "–") return;
    dl.appendChild(el("dt", null, k));
    var dd = el("dd");
    if (typeof v === "string") dd.textContent = v; else dd.appendChild(v);
    dl.appendChild(dd);
  }

  /* ---------- Trinkets ---------- */
  var TIERS = ["I", "II", "III", "IV"];
  var TIER_NAMES = ["Worn", "Fine", "Rare", "Relic"];

  /* "+15 / +30 / +45 / +70%" -> one value per tier, units carried over. */
  function splitTiers(text) {
    var parts = text.split(/\s*\/\s*/);
    if (parts.length !== 4) return [text, text, text, text];
    var lead = (/^[^\d+\-−.]*/.exec(parts[0]) || [""])[0];
    var tail = (/[^\d.]*$/.exec(parts[3]) || [""])[0];
    return parts.map(function (p) {
      if (lead && p.indexOf(lead) !== 0) p = lead + p;
      if (tail && !/[^\d.]$/.test(p)) p = p + tail;
      return p;
    });
  }

  function trinkets(root) {
    var items = [];
    var tables = [];
    var n = root.nextElementSibling;
    var group = null;
    while (n && !/^H2$/.test(n.tagName)) {
      if (n.tagName === "H3") group = n.textContent.replace(/¶/g, "").trim();
      var t = n.tagName === "TABLE" ? n : n.querySelector && n.querySelector("table");
      if (t) {
        tables.push(t);
        readTable(t).rows.forEach(function (r) {
          var name = r.Trinket;
          var vals = splitTiers(r["I / II / III / IV"] || "");
          items.push({
            name: name,
            id: slug(name),
            group: group === "Class trinkets" ? (r.Class || "Class") : group === "Cursed" ? "Cursed" : "Anyone",
            sub: r.Class ? r.Class + " only" : group === "Cursed" ? "Cursed" : "Any class",
            size: r.Size,
            effect: r.Effect || r.Upside,
            curse: r.Curse,
            vals: vals
          });
        });
      }
      n = n.nextElementSibling;
    }
    tables.forEach(function (t) { foldTable(t, "Table view"); });

    var tier = 0;
    var icons = [];
    gallery(root, items, {
      icon: function (it) {
        var img = iconImg(BASE + "assets/img/icons/trinkets/" + it.id + "_I.png", it.name);
        icons.push({ img: img, it: it });
        return img;
      },
      detail: function (it, panel) {
        var head = el("div", "db-detail__head");
        var big = iconImg(BASE + "assets/img/icons/trinkets/" + it.id + "_" + TIERS[tier] + ".png", it.name);
        big.classList.add("db-icon--big");
        head.appendChild(big);
        var txt = el("div");
        txt.appendChild(el("h4", null, it.name));
        txt.appendChild(el("p", "db-detail__sub", it.sub + (it.size ? " · " + it.size : "")));
        if (it.size) { var fm = el("div", "db-meta"); fm.appendChild(footprint(it.size)); txt.appendChild(fm); }
        head.appendChild(txt);
        panel.appendChild(head);

        var value = el("p", "db-value");
        var dl = el("dl", "db-facts");
        fact(dl, it.curse ? "Upside" : "Effect", it.effect);
        fact(dl, "Curse", it.curse);
        function show(t) {
          tier = t;
          big.src = BASE + "assets/img/icons/trinkets/" + it.id + "_" + TIERS[t] + ".png";
          value.textContent = "Tier " + TIERS[t] + " (" + TIER_NAMES[t] + "): " + it.vals[t];
          icons.forEach(function (x) { x.img.src = BASE + "assets/img/icons/trinkets/" + x.it.id + "_" + TIERS[t] + ".png"; });
        }
        panel.appendChild(seg(TIERS.map(function (t, i) { return t + " " + TIER_NAMES[i]; }), tier, show, "db-seg--tiers"));
        panel.appendChild(value);
        panel.appendChild(dl);
        show(tier);
      }
    });
  }

  /* ---------- Weapons and armour ---------- */
  var RARITY = [
    { name: "Common", mult: 1.0, bonuses: 0, cls: "common" },
    { name: "Uncommon", mult: 1.08, bonuses: 1, cls: "uncommon" },
    { name: "Rare", mult: 1.17, bonuses: 2, cls: "rare" },
    { name: "Epic", mult: 1.28, bonuses: 2, cls: "epic" },
    { name: "Legendary", mult: 1.4, bonuses: 3, cls: "legendary" }
  ];

  function gear(root) {
    var bonusInfo = {};
    document.querySelectorAll(".md-typeset table").forEach(function (t) {
      var d = readTable(t);
      if (d.heads[0] === "Bonus") d.rows.forEach(function (r) { bonusInfo[r.Bonus] = r; });
    });
    var items = [];
    var tables = [];
    var n = root.nextElementSibling;
    var stop = root.getAttribute("data-until") || "Bonuses";
    var group = null;
    while (n) {
      if (n.tagName === "H2" && n.textContent.indexOf(stop) === 0) break;
      if (n.tagName === "H3") group = n.textContent.replace(/¶/g, "").trim();
      var t = n.tagName === "TABLE" ? n : n.querySelector && n.querySelector("table");
      if (t) {
        var d = readTable(t);
        if (d.heads[0] === "Item") {
          tables.push(t);
          var statKey = d.heads.indexOf("Damage") >= 0 ? "Damage" : "Armour";
          d.rows.forEach(function (r) {
            items.push({
              name: r.Item, id: slug(r.Item), group: group, sub: r.Size,
              size: r.Size, rounds: r.Rounds, statKey: statKey, stat: r[statKey],
              base: parseFloat(r[statKey]) || 0, bonus: r["Built-in bonus"], look: r.Look
            });
          });
        }
      }
      n = n.nextElementSibling;
    }
    tables.forEach(function (t) { foldTable(t, "Table view"); });

    var rarity = 0, round = 1;
    gallery(root, items, {
      icon: function (it) {
        var box = el("span", "db-iconbox");
        box.appendChild(iconImg(BASE + "assets/img/icons/gear/" + it.id + ".png", it.name, it.size));
        return box;
      },
      detail: function (it, panel) {
        var head = el("div", "db-detail__head");
        var big = el("span", "db-iconbox db-iconbox--big");
        big.appendChild(iconImg(BASE + "assets/img/icons/gear/" + it.id + ".png", it.name, it.size));
        head.appendChild(big);
        var txt = el("div");
        var title = el("h4", null, it.name);
        txt.appendChild(title);
        txt.appendChild(el("p", "db-detail__sub", it.look || ""));
        var meta = el("div", "db-meta");
        meta.appendChild(footprint(it.size));
        meta.appendChild(roundPips(it.rounds));
        txt.appendChild(meta);
        head.appendChild(txt);
        panel.appendChild(head);

        var value = el("p", "db-value");
        var dl = el("dl", "db-facts");
        if (it.bonus && it.bonus !== "–") {
          var b = bonusInfo[it.bonus];
          fact(dl, "Built-in bonus", it.bonus + (b ? ": " + b.Effect.toLowerCase() + " (" + b["Uncommon range"] + ")" : ""));
        }
        fact(dl, "Listed " + it.statKey.toLowerCase(), it.stat + " (round 1, Common)");

        var roundRow = el("label", "db-range");
        roundRow.appendChild(el("span", null, "Round"));
        var slider = el("input");
        slider.type = "range"; slider.min = 1; slider.max = 6; slider.value = round;
        var rn = el("b", null, String(round));
        roundRow.appendChild(slider);
        roundRow.appendChild(rn);

        function show() {
          var r = RARITY[rarity];
          var mid = it.base * Math.pow(1.14, round - 1) * r.mult;
          var lo = Math.round(mid * 0.85), hi = Math.round(mid * 1.15);
          panel.className = "db-detail db-rarity--" + r.cls;
          value.textContent = r.name + ", round " + round + ": " + it.statKey.toLowerCase() + " " + lo + " to " + hi +
            (r.bonuses ? ", plus " + r.bonuses + (rarity === 3 ? " stronger" : "") + " rolled bonus" + (r.bonuses > 1 ? "es" : "") : ", no rolled bonuses") +
            (rarity === 4 ? " and a name" : "");
          rn.textContent = String(round);
        }
        slider.oninput = function () { round = +slider.value; show(); };
        panel.appendChild(seg(RARITY.map(function (r) { return r.name; }), rarity, function (i) { rarity = i; show(); }, "db-seg--rarity"));
        panel.appendChild(roundRow);
        panel.appendChild(value);
        panel.appendChild(dl);
        panel.appendChild(el("p", "db-note", "Stat range from the drop rules on this page: ±15% around the midpoint, +14% per round, times the rarity."));
        show();
      }
    });
  }

  /* ---------- Parry trainer ---------- */
  var MODES = [
    { name: "Easy", window: 0.8, lead: [1.2, 1.8], gap: [1.2, 2.0] },
    { name: "Game", window: 0.4, lead: [0.6, 1.1], gap: [0.9, 1.6] }
  ];
  var STANCES = ["high", "mid", "low"];

  function parry(root) {
    root.classList.add("db-parry");
    var mode = 0;
    var top = el("div", "db-parry__top");
    top.appendChild(seg(MODES.map(function (m) { return m.name + " (" + m.window + " s)"; }), 0, function (i) { mode = i; }, ""));
    var startBtn = el("button", "db-btn db-btn--gold", "Start");
    startBtn.type = "button";
    top.appendChild(startBtn);
    root.appendChild(top);

    var screen = el("div", "db-parry__screen");
    screen.tabIndex = 0;
    ["top", "bottom", "left", "right"].forEach(function (s) { screen.appendChild(el("div", "db-flush db-flush--" + s)); });
    var stanceCol = el("div", "db-parry__stances");
    var stanceEls = STANCES.map(function (s) { var e = el("span", null, s === "mid" ? "MID" : s.toUpperCase()); stanceCol.appendChild(e); return e; });
    screen.appendChild(stanceCol);
    screen.appendChild(el("div", "db-parry__cross"));
    var shield = el("div", "db-parry__guard", "GUARD");
    screen.appendChild(shield);
    var pop = el("div", "db-parry__pop");
    screen.appendChild(pop);
    var hint = el("div", "db-parry__hint");
    screen.appendChild(hint);
    var help = el("div", "db-parry__help", "Press Start. Match the stance to the red edge, then guard as it brightens.");
    screen.appendChild(help);
    root.appendChild(screen);

    var hud = el("div", "db-parry__hud");
    var hpBar = el("span", "db-bar db-bar--hp"); hpBar.appendChild(el("i"));
    var rsBar = el("span", "db-bar db-bar--resolve"); rsBar.appendChild(el("i"));
    var score = el("span", "db-parry__score");
    hud.appendChild(el("b", null, "HP")); hud.appendChild(hpBar);
    hud.appendChild(el("b", null, "Resolve")); hud.appendChild(rsBar);
    hud.appendChild(score);
    root.appendChild(hud);

    var pad = el("div", "db-parry__pad");
    var padBtns = {};
    [["high", "High"], ["mid", "Mid"], ["low", "Low"], ["guard", "Guard (hold)"], ["ability", "Bastion"]].forEach(function (p) {
      var b = el("button", "db-btn", p[1]);
      b.type = "button";
      padBtns[p[0]] = b;
      pad.appendChild(b);
    });
    root.appendChild(pad);
    root.appendChild(el("p", "db-note", "Keys while the screen is selected: W or ↑ high, A, D, ← or → middle, S or ↓ low. Mouse wheel up and down and middle click set the stance like in game. Hold right mouse, Space or K to guard. X fires Bastion when Resolve is full."));

    var st = { run: false, stance: "mid", guard: false, guardAt: -9, hp: 100, resolve: 0, parries: 0, blocks: 0, hits: 0, bastion: 0, atk: null, next: 0 };

    function now() { return performance.now() / 1000; }
    function rand(a) { return a[0] + Math.random() * (a[1] - a[0]); }
    function setStance(s) { st.stance = s; stanceEls.forEach(function (e, i) { e.classList.toggle("on", STANCES[i] === s); }); }
    function guard(down) {
      if (down && !st.guard) st.guardAt = now();
      st.guard = down;
      shield.classList.toggle("on", down);
    }
    function popup(text, cls) {
      pop.textContent = text;
      pop.className = "db-parry__pop show " + cls;
      clearTimeout(pop._t);
      pop._t = setTimeout(function () { pop.className = "db-parry__pop"; }, 650);
    }
    function draw() {
      hpBar.firstChild.style.width = st.hp + "%";
      rsBar.firstChild.style.width = st.resolve + "%";
      score.textContent = "Parries " + st.parries + " · Blocks " + st.blocks + " · Hits " + st.hits;
      var t = now();
      if (st.bastion > t) hint.textContent = "HOLD RIGHT CLICK TO GUARD";
      else if (st.resolve >= 100) hint.textContent = "PRESS X · BASTION READY";
      else hint.textContent = "";
      hint.hidden = !hint.textContent;
      padBtns.ability.disabled = !(st.resolve >= 100 && st.bastion <= t);
    }
    function fire() {
      if (st.resolve < 100 || !st.run) return;
      st.resolve = 0;
      st.bastion = now() + 8;
      popup("BASTION", "gold");
    }

    function newAttack(t) {
      var s = STANCES[Math.floor(Math.random() * 3)];
      var side = s === "mid" ? (Math.random() < 0.5 ? "left" : "right") : s === "high" ? "top" : "bottom";
      st.atk = { stance: s, side: side, impact: t + rand(MODES[mode].lead) };
    }
    function land(t) {
      var a = st.atk, w = MODES[mode].window;
      var stanceOk = st.stance === a.stance || st.bastion > t;
      var timed = st.guardAt >= a.impact - w && st.guardAt <= a.impact;
      if (stanceOk && (timed || (st.bastion > t && st.guard))) {
        st.parries++; st.resolve = Math.min(100, st.resolve + 25); popup("PARRY", "gold");
      } else if (stanceOk && st.guard) {
        st.blocks++; st.resolve = Math.min(100, st.resolve + 8); popup("Blocked", "steel");
      } else {
        st.hits++; st.hp = Math.max(0, st.hp - 22);
        popup(st.guard ? "Wrong stance" : "Hit", "red");
        screen.classList.add("hurt");
        setTimeout(function () { screen.classList.remove("hurt"); }, 200);
      }
      st.atk = null;
      st.next = t + rand(MODES[mode].gap);
      if (st.hp <= 0) stop("Down. Parries: " + st.parries + ". Press Start to go again.");
    }
    function tick() {
      if (!st.run) return;
      var t = now();
      if (!st.atk && t >= st.next) newAttack(t);
      screen.querySelectorAll(".db-flush").forEach(function (f) { f.style.opacity = 0; f.classList.remove("hot"); });
      if (st.atk) {
        var f = screen.querySelector(".db-flush--" + st.atk.side);
        var left = st.atk.impact - t;
        var hot = left <= MODES[mode].window;
        f.style.opacity = hot ? 1 : 0.45;
        f.classList.toggle("hot", hot);
        if (left <= 0) land(t);
      }
      draw();
      requestAnimationFrame(tick);
    }
    function start() {
      st.run = true; st.hp = 100; st.resolve = 0; st.parries = st.blocks = st.hits = 0; st.bastion = 0;
      st.atk = null; st.next = now() + 1;
      help.hidden = true;
      startBtn.textContent = "Stop";
      screen.focus({ preventScroll: true });
      requestAnimationFrame(tick);
    }
    function stop(msg) {
      st.run = false; st.atk = null;
      startBtn.textContent = "Start";
      help.textContent = msg || "Stopped. Parries: " + st.parries + ".";
      help.hidden = false;
      screen.querySelectorAll(".db-flush").forEach(function (f) { f.style.opacity = 0; });
      draw();
    }
    startBtn.onclick = function () { st.run ? stop() : start(); };

    var KEYS = { ArrowUp: "high", KeyW: "high", ArrowDown: "low", KeyS: "low", ArrowLeft: "mid", ArrowRight: "mid", KeyA: "mid", KeyD: "mid" };
    screen.addEventListener("keydown", function (e) {
      if (KEYS[e.code]) { setStance(KEYS[e.code]); e.preventDefault(); }
      else if (e.code === "Space" || e.code === "KeyK") { if (!e.repeat) guard(true); e.preventDefault(); }
      else if (e.code === "KeyX") { fire(); e.preventDefault(); }
    });
    screen.addEventListener("keyup", function (e) {
      if (e.code === "Space" || e.code === "KeyK") { guard(false); e.preventDefault(); }
    });
    screen.addEventListener("blur", function () { guard(false); });
    screen.addEventListener("wheel", function (e) {
      setStance(e.deltaY < 0 ? "high" : "low");
      e.preventDefault();
    }, { passive: false });
    screen.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    screen.addEventListener("pointerdown", function (e) {
      screen.focus({ preventScroll: true });
      if (e.button === 2) { guard(true); e.preventDefault(); }
      if (e.button === 1) { setStance("mid"); e.preventDefault(); }
    });
    window.addEventListener("pointerup", function (e) { if (e.button === 2) guard(false); });
    ["high", "mid", "low"].forEach(function (s) { padBtns[s].onclick = function () { setStance(s); }; });
    var gb = padBtns.guard;
    gb.addEventListener("pointerdown", function (e) { guard(true); gb.setPointerCapture(e.pointerId); e.preventDefault(); });
    gb.addEventListener("pointerup", function () { guard(false); });
    gb.addEventListener("pointercancel", function () { guard(false); });
    gb.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    padBtns.ability.onclick = fire;
    setStance("mid");
    draw();
  }

  var WIDGETS = { trinkets: trinkets, gear: gear, parry: parry };
  function init() {
    document.querySelectorAll(".db-widget[data-widget]").forEach(function (node) {
      if (node.dataset.ready) return;
      node.dataset.ready = "1";
      var f = WIDGETS[node.getAttribute("data-widget")];
      if (f) f(node);
    });
  }
  if (window.document$ && window.document$.subscribe) window.document$.subscribe(init);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
