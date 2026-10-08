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


  /* Game loop: a replayable walk through one match, lobby to lobby. */
  /* Game loop: a short replayable scene with the cast, built from layered renders
     (arms, legs, torso, head and face swaps) so they walk, blink and react. */
  var CAST = {"Knight":{"w":234,"f":["blink","happy","angry","hurt","shock","smile"],"p":[[30.7,45.2],[44.9,69.4],[60.6,69.4],[52.8,69.4],[52.8,41.7],[74.9,45.2]]},"Ranger":{"w":181,"f":["blink","happy","angry","hurt","shock","smile"],"p":[[30.7,37.3],[43.3,59.7],[59.2,59.7],[51.3,59.7],[51.3,34.3],[71.8,37.3]]},"Arcanist":{"w":158,"f":["blink","happy","angry","hurt","shock","smile"],"p":[[35.7,48.2],[45.8,68.3],[62.7,68.3],[54.2,68.3],[54.2,45.8],[72.7,48.2]]},"Witcher":{"w":209,"f":["blink","happy","angry","hurt","shock","smile"],"p":[[25.7,37.4],[45.2,62.8],[62.6,62.8],[53.9,62.8],[50.2,33.5],[76.1,37.4]]},"Nobleman":{"w":197,"f":["blink","happy","angry","hurt","shock","smile"],"p":[[38.2,38.9],[53.6,62.5],[68.0,62.5],[60.8,62.5],[60.8,35.7],[83.4,38.9]]},"Morrakhet":{"w":190,"f":["blink","rage","laugh","hurt"],"p":[[37.7,46.0],[51.9,66.6],[67.7,66.6],[59.8,66.6],[59.8,43.2],[81.9,46.0]]},"Sabeth":{"w":217,"f":["blink","wrath","scorn","sorrow"],"p":[[38.9,43.6],[51.9,65.1],[66.4,65.1],[59.2,65.1],[59.2,40.6],[79.5,43.6]]},"BonePawn":{"w":181,"f":["blink","shout"],"p":[[31.6,47.9],[46.8,68.9],[63.7,68.9],[55.3,68.9],[55.3,45.0],[78.9,47.9]]},"TowerWarden":{"w":190,"f":["blink","shout"],"p":[[45.7,47.9],[58.8,66.9],[73.4,66.9],[66.1,66.9],[66.1,45.3],[86.6,47.9]]},"MourningBishop":{"w":159,"f":["blink","shout"],"p":[[35.9,51.6],[51.4,70.5],[68.7,70.5],[60.1,70.5],[60.1,49.0],[84.3,51.6]]},"GravehorseRider":{"w":175,"f":["blink","shout"],"p":[[35.2,47.4],[51.0,68.6],[68.7,68.6],[59.8,68.6],[59.8,44.5],[84.5,47.4]]}};
  var PARTS = ["right_arm", "right_leg", "left_leg", "torso", "head", "left_arm"];
  var CAST_DIR = (function () {
    var s = document.querySelector('script[src*="assets/js/widgets.js"]');
    try { return new URL("../img/loop/cast/", s.src).href; } catch (e) { return BASE + "assets/img/loop/cast/"; }
  })();

  function rig(name, height) {
    var c = CAST[name], n = PARTS.length + c.f.length;
    var root = el("div", "dbw-rig");
    var body = el("div", "dbw-rig__body");
    root.appendChild(body);
    root.style.setProperty("--rh", height);
    root.style.aspectRatio = c.w + " / 360";
    var parts = {};
    PARTS.forEach(function (p, i) {
      var d = el("i", "dbw-rig__part");
      d.style.backgroundImage = "url(" + CAST_DIR + name.toLowerCase() + ".webp)";
      d.style.backgroundSize = n * 100 + "% 100%";
      d.style.backgroundPositionX = i / (n - 1) * 100 + "%";
      d.style.transformOrigin = c.p[i][0] + "% " + c.p[i][1] + "%";
      body.appendChild(d);
      parts[p] = d;
    });
    var seed = name.length * 977 % 2300, face = "", tint = "";
    var r = {
      el: root,
      x: 0, y: 0, s: 1, o: 1,
      face: function (k, t) {
        // blink now and then unless a face is held
        if (!k && ((t + seed) % 2600) < 130 && c.f.indexOf("blink") >= 0) k = "blink";
        if (k === face) return;
        face = k || "";
        var i = face && c.f.indexOf(face) >= 0 ? PARTS.length + c.f.indexOf(face) : PARTS.indexOf("head");
        parts.head.style.backgroundPositionX = i / (n - 1) * 100 + "%";
      },
      tint: function (k) {
        if (k === tint) return;
        tint = k || "";
        root.classList.toggle("hit", tint === "hit");
        root.classList.toggle("fallen", tint === "fallen");
      },
      // walk: phase in cycles (0 = stand), swing: 0..1 weapon arm raised
      pose: function (walk, swing, t) {
        var a = walk ? Math.sin(walk * Math.PI * 2) : 0;
        var breathe = Math.sin((t + seed) / 520) * 1.5;
        parts.left_leg.style.transform = "rotate(" + (a * 20) + "deg)";
        parts.right_leg.style.transform = "rotate(" + (-a * 20) + "deg)";
        parts.left_arm.style.transform = "rotate(" + (-a * 14 - breathe) + "deg)";
        parts.right_arm.style.transform = "rotate(" + (a * 14 + breathe + (swing || 0) * 70) + "deg)";
        var bob = walk ? Math.abs(Math.cos(walk * Math.PI * 2)) * -2.5 : breathe * .4;
        body.style.transform = "translateY(" + bob + "%)";
      },
      place: function () {
        root.style.left = r.x + "%";
        root.style.transform = "translate(-50%, " + r.y + "%) scale(" + r.s + ")";
        root.style.opacity = r.o;
      }
    };
    return r;
  }

  function loop(node) {
    var STOPS = [
      { id: "lobby", label: "Lobby" },
      { id: "queue", label: "Queue" },
      { id: "rounds", label: "Rounds 1-6" },
      { id: "respite", label: "Respite" },
      { id: "boss", label: "Boss" },
      { id: "loot", label: "Loot" },
      { id: "out", label: "Out" }
    ];
    var ROUND = 1500;
    var STEPS = [
      { stop: "lobby", bg: "lobby", big: "Lobby", line: "Pick a class, sort your pack, shop.", ms: 2800 },
      { stop: "queue", bg: "lobby", big: "Party of 4", line: "Parties of up to 4, matched by level.", ms: 2400 },
      { stop: "rounds", bg: "depths", round: true, ms: 6 * ROUND },
      { stop: "respite", bg: "respite", count: 30, line: "30s to rearrange gear. The whole party sees every move.", ms: 2800 },
      { stop: "boss", bg: "boss", big: "Boss", line: "Scales with the number of players and the party's level.", ms: 4200 },
      { stop: "loot", bg: "loot", big: "Loot", line: "Every seat, and what each survivor carried out.", ms: 2200 },
      { stop: "out", bg: "out", split: true, line: "", ms: 4200 },
      { stop: "lobby", bg: "lobby", big: "Again", line: "Back to the lobby for the next match.", ms: 2000 }
    ];
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    node.classList.add("dbw-loop");
    var track = el("div", "dbw-loop__track");
    var chips = {};
    STOPS.forEach(function (s) {
      var c = el("div", "dbw-loop__stop");
      c.appendChild(el("span", "dbw-loop__label", s.label));
      if (s.id === "rounds") {
        var pips = el("span", "dbw-loop__pips");
        for (var r = 0; r < 6; r++) pips.appendChild(el("i"));
        c.appendChild(pips);
      }
      track.appendChild(c);
      chips[s.id] = c;
    });

    var stage = el("div", "dbw-loop__stage");
    var floor = el("div", "dbw-loop__floor");
    var big = el("div", "dbw-loop__big");
    var divide = el("div", "dbw-loop__divide");
    stage.appendChild(floor); stage.appendChild(divide); stage.appendChild(big);
    var line = el("div", "dbw-loop__line");
    var split = el("div", "dbw-loop__split");
    var live = el("div", "dbw-loop__card dbw-loop__card--live");
    live.appendChild(el("strong", null, "Survive"));
    live.appendChild(el("span", null, "Keep everything. Level +1."));
    var dead = el("div", "dbw-loop__card dbw-loop__card--dead");
    dead.appendChild(el("strong", null, "Die anywhere"));
    dead.appendChild(el("span", null, "Lose your loot. Back to level 0. Vault coins stay safe."));
    split.appendChild(live); split.appendChild(dead);
    var bar = el("div", "dbw-loop__bar");
    var fill = el("i"); bar.appendChild(fill);
    var replay = el("button", "dbw-loop__replay", "Replay");
    replay.type = "button";
    node.appendChild(track); node.appendChild(stage); node.appendChild(line); node.appendChild(split);
    node.appendChild(bar); node.appendChild(replay);

    // cast
    var CLASSES = ["Ranger", "Arcanist", "Knight", "Witcher", "Nobleman"];
    var A = {};
    CLASSES.forEach(function (n) { A[n] = rig(n, 24); });
    ["BonePawn", "TowerWarden", "MourningBishop", "GravehorseRider"].forEach(function (n) { A[n] = rig(n, 25); });
    A.Morrakhet = rig("Morrakhet", 36);
    A.Sabeth = rig("Sabeth", 29);
    Object.keys(A).forEach(function (k) { A[k].el.classList.add("dbw-rig--" + k.toLowerCase()); stage.appendChild(A[k].el); });
    var PARTY = ["Ranger", "Arcanist", "Knight", "Witcher"];
    var FOES = ["BonePawn", "TowerWarden", "MourningBishop", "BonePawn", "GravehorseRider", "TowerWarden"];
    var levels = {};
    PARTY.forEach(function (n, i) {
      var b = el("span", "dbw-rig__tag");
      A[n].el.appendChild(b);
      levels[n] = b;
      var g = el("span", "dbw-rig__grid");
      for (var k = 0; k < 6; k++) g.appendChild(el("i"));
      A[n].el.appendChild(g);
      A[n].grid = g;
    });

    var total = STEPS.reduce(function (a, s) { return a + s.ms; }, 0);
    var raf = 0, t0 = 0;

    function ease(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }
    function mix(a, b, k) { return a + (b - a) * ease(k); }
    function pipsUpTo(n) {
      chips.rounds.querySelectorAll(".dbw-loop__pips i").forEach(function (p, i) { p.classList.toggle("on", i < n); });
    }
    function hideAll() {
      Object.keys(A).forEach(function (k) { var a = A[k]; a.o = 0; a.s = 1; a.y = 0; a.x = 50; a.walk = 0; a.swing = 0; a.mood = ""; a.fx = ""; });
    }
    function show(k, x, mood) { var a = A[k]; a.o = 1; a.x = x; a.mood = mood || ""; return a; }
    function partyAt(xs, mood) { PARTY.forEach(function (n, i) { show(n, xs[i], mood); }); }
    function grids(on, t) {
      PARTY.forEach(function (n, i) {
        var g = A[n].grid;
        g.classList.toggle("on", on);
        if (!on) return;
        var hop = Math.floor((t + i * 370) / 420) % 6;
        g.querySelectorAll("i").forEach(function (c, j) { c.classList.toggle("gem", j === hop); });
      });
    }
    function tags(text, on) {
      PARTY.forEach(function (n, i) {
        levels[n].classList.toggle("on", !!on);
        levels[n].textContent = typeof text === "function" ? text(i) : text;
      });
    }

    function render(step, local, t) {
      var k = local / step.ms;
      Object.keys(chips).forEach(function (c) { chips[c].classList.toggle("on", c === step.stop); });
      stage.setAttribute("data-bg", step.bg);
      split.classList.toggle("on", !!step.split);
      line.textContent = step.line || "";
      big.classList.toggle("off", !!step.split);
      hideAll(); grids(false, t); tags("", false);
      divide.classList.toggle("on", !!step.split);
      floor.style.backgroundPositionX = "0px";

      if (step === STEPS[0] || step === STEPS[7]) {
        // lobby: the five classes, the pick light moves and lands on the Knight
        big.textContent = step.big;
        var pick = step === STEPS[7] ? 2 : (k < .6 ? Math.floor(k / .6 * 5) % 5 : 2);
        CLASSES.forEach(function (n, i) {
          var a = show(n, 12 + i * 19, i === pick ? "smile" : "");
          if (i === pick) a.s = 1.08;
        });
        stage.style.setProperty("--pick", (12 + pick * 19) + "%");
        stage.classList.add("picking");
        if (step === STEPS[7]) CLASSES.forEach(function (n) { A[n].o = ease(k * 2.5); });
      } else stage.classList.remove("picking");

      if (step === STEPS[1]) {
        // queue: the Nobleman steps out, the other four close up as a party
        big.textContent = step.big;
        var from = [12, 31, 50, 69], to = [26, 42, 58, 74];
        PARTY.forEach(function (n, i) {
          var a = show(n, mix(from[i], to[i], k * 1.6), k > .55 ? "happy" : "");
          if (k < .62 && Math.abs(from[i] - to[i]) > .5) a.walk = local / 520;
        });
        var nob = show("Nobleman", mix(88, 112, k * 1.4));
        nob.walk = local / 520; nob.o = 1 - ease(k * 1.6);
        tags(function (i) { return "Lv " + [6, 4, 5, 5][i]; }, k > .55);
      }

      if (step.round) {
        var n = Math.min(5, Math.floor(local / ROUND)), rk = (local - n * ROUND) / ROUND;
        var left = Math.max(0, 180 - Math.floor(rk * 180));
        big.textContent = Math.floor(left / 60) + ":" + ("0" + left % 60).slice(-2);
        line.textContent = "Round " + (n + 1) + " of 6. One 3:00 clock; the stairs never add time.";
        pipsUpTo(n + 1);
        var marching = rk < .32 || rk > .78;
        floor.style.backgroundPositionX = -(local * .12) + "px";
        PARTY.forEach(function (p, i) {
          var a = show(p, 10 + i * 12, rk > .3 && rk < .7 ? "angry" : (rk >= .7 ? "smile" : ""));
          if (marching) a.walk = (local + i * 130) / 560;
          if (rk > .34 && rk < .66) {
            var hitPhase = ((rk - .34) / .32 * 3 + i * .25) % 1;
            a.swing = Math.sin(hitPhase * Math.PI);
            if (i === 3) a.x += a.swing * 4;
          }
        });
        var foe = show(FOES[n], 0, "");
        foe.x = mix(112, 74, rk / .3);
        if (rk < .3) foe.walk = local / 480;
        if (rk > .3 && rk < .66) { foe.mood = "shout"; foe.fx = (Math.floor(rk * 40) % 3 === 0) ? "hit" : ""; foe.swing = Math.max(0, Math.sin(rk * 18)); }
        if (rk >= .66) { foe.y = mix(0, 40, (rk - .66) / .3); foe.o = 1 - ease((rk - .7) / .26); foe.mood = "blink"; }
      } else if (STEPS.indexOf(step) > 2) pipsUpTo(6); else pipsUpTo(0);

      if (step === STEPS[3]) {
        big.textContent = Math.max(0, Math.ceil(30 * (1 - k))) + "s";
        partyAt([26, 42, 58, 74], "");
        grids(true, local);
      }

      if (step === STEPS[4]) {
        big.textContent = step.big;
        var bx = [10, 22, 34, 46];
        PARTY.forEach(function (p, i) {
          var a = show(p, bx[i], k < .3 ? "shock" : (k < .75 ? "angry" : "happy"));
          if (k > .3 && k < .75) { a.swing = Math.max(0, Math.sin(local / 160 + i)); if (i === 3) a.x += a.swing * 5; }
        });
        var m = show("Morrakhet", 72, k < .3 ? "rage" : (k < .5 ? "laugh" : (k < .75 ? "hurt" : "hurt")));
        m.y = mix(60, 0, k / .22);
        m.o = ease(k / .12);
        if (k > .3 && k < .5) m.swing = Math.max(0, Math.sin(local / 140));
        if (k > .5 && k < .75) m.fx = (Math.floor(local / 90) % 3 === 0) ? "hit" : "";
        if (k >= .75) { m.y = mix(0, 45, (k - .75) / .22); m.o = 1 - ease((k - .82) / .16); }
        var s = show("Sabeth", 89, k < .75 ? "scorn" : "sorrow");
        s.o = ease((k - .08) / .15);
      }

      if (step === STEPS[5]) {
        big.textContent = step.big;
        PARTY.forEach(function (p, i) {
          var a = show(p, [26, 42, 58, 74][i], "happy");
          a.y = -Math.abs(Math.sin(local / 300 + i * .8)) * 8;
        });
      }

      if (step.split) {
        // three walk out and level up; the fallen one greys out and sinks
        [0, 1, 2].forEach(function (i) {
          var a = show(PARTY[i], 10 + i * 13, "happy");
          a.y = -Math.abs(Math.sin(local / 320 + i)) * 5;
        });
        tags("", false);
        [0, 1, 2].forEach(function (i) { levels[PARTY[i]].classList.toggle("on", k > .25); levels[PARTY[i]].textContent = "Lv " + ([6, 4, 5][i] + 1); });
        var f = show("Witcher", 78, "hurt");
        f.fx = k > .2 ? "fallen" : "";
        f.y = mix(0, 18, (k - .25) / .4);
        levels.Witcher.classList.toggle("on", k > .45);
        levels.Witcher.classList.add("lost");
        levels.Witcher.textContent = "Lv 0";
      } else levels.Witcher.classList.remove("lost");

      Object.keys(A).forEach(function (key) {
        var a = A[key];
        if (a.o <= 0) { a.el.style.opacity = 0; return; }
        a.face(a.mood, t);
        a.tint(a.fx);
        a.pose(a.walk, a.swing, t);
        a.place();
      });
    }

    function at(t) {
      var acc = 0;
      for (var i = 0; i < STEPS.length; i++) {
        if (t < acc + STEPS[i].ms) return render(STEPS[i], t - acc, t);
        acc += STEPS[i].ms;
      }
      render(STEPS[STEPS.length - 1], STEPS[STEPS.length - 1].ms - 1, t);
      node.classList.add("done");
      return true;
    }
    function frame(now) {
      var t = now - t0;
      fill.style.width = Math.min(100, t / total * 100) + "%";
      if (at(t) !== true) raf = requestAnimationFrame(frame);
    }
    function play() {
      cancelAnimationFrame(raf);
      node.classList.remove("done");
      t0 = performance.now();
      raf = requestAnimationFrame(frame);
    }
    replay.onclick = play;
    if (reduce) {
      var acc = 0; for (var i = 0; i < 6; i++) acc += STEPS[i].ms;
      render(STEPS[6], STEPS[6].ms * .8, 0);
      fill.style.width = "100%"; node.classList.add("done"); return;
    }
    render(STEPS[0], 0, 0);
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) { io.disconnect(); play(); }
      }, { threshold: 0.4 });
      io.observe(node);
    } else play();
  }

  var WIDGETS = { trinkets: trinkets, gear: gear, parry: parry, loop: loop };
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
