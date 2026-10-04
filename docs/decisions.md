# Decisions log

Everything confirmed, newest first. Drafts and assumptions are not here until they are confirmed.

## 2026-10-04

### Controls
- **Gamepad support** is in the prototype: RT attacks (tap light, hold heavy), LT guards and parries, the D-pad sets the stance, B dodges, A jumps, Y is the ability, X interacts, RB swaps melee and ranged, LB opens the bag. The bag and the respite use a gold ring cursor. See [Controls](controls.md#gamepad).

## 2026-10-02 (evening)

### Combat
- **Special abilities:** each class has one powerful ability, charged by parrying (the Resolve bar), on **X** (Y on a pad): Knight Bastion, Nobleman Gilded Reprisal, Ranger Pinning Shot, Arcanist Rune Nova, Witcher Grim Tonic. Cinematic look approved. See [Combat](combat.md#abilities).
- **Tuning:** harder to evade, enemies swing longer and hit harder, parries are easier to read, a bolder red flush.
- **Using items is animated:** a potion is drunk, a bandage wraps the arm, food is eaten, so you can't spam them.

### Enemies
- Every enemy has a **health bar** and flashes red when hit. Enemies don't stack behind each other; a blocked one strafes around.
- **Spiders walk** instead of sliding. Big web-lobbing spiders lay **eggs** that hatch Skitterlings after 30 s, counting only while a player is near.
- **Spider Slinger:** the rider sits upright and has a real fall-off animation, then fights on foot.
- **Shopkeepers and cutscene NPCs die like other NPCs** (death clip, body sinks), never fading out.

### Companions
- A companion's health **drains if you don't heal him**, and he **defends himself** while attacked instead of following. The Goblin Scout never fights; he scurries away. Hold E to patch up or revive.

### Events and shops
- **Treasure thief:** you must **capture** him. He steals your carried silver if you have any; otherwise you chase him for a drop. He never spawns silver and never tumbles.
- **Storyteller once per match**, in a random round from 1 to 3; his story plays the next round.
- **Dragon's Egg:** defend a nest and egg through waves; if it survives, the whelp goes to the best defender.
- The **Prince** is scared in the cage and relieved when freed.
- **Every shopkeeper is animated** (idle, greet, talk, sale, refuse; the early four also startle and flee). In the shop you can't move, and there are no first-person arms in shops or cutscenes.

### Map and UI
- **HUD panel** now holds Resolve and your injuries too.
- **Better-drop gleam:** floor gear that beats yours gets a slow gold rim, per player.
- **Cursor:** a custom gold arrow wherever the mouse is free; hidden in first person and cutscenes, except at the hostage choice.
- The **"Stairs taken"** banner clears once the new floor loads.

### Boss
- The boss is a **lich who portals in enemies** and is invincible until they're dead, with a **chain hook that never misses**, curves around things and is broken with Q, in a **huge room** with roof routes and one wide entryway. The design is **Morrakhet, the Hollow King**; which boss goes in is still open. See [Boss and finale](boss.md).

## 2026-10-02

### Endgame
- **Moment of respite:** after round 6 the party gets **30 seconds** to rearrange gear before the boss. Everyone sees every inventory with live changes, each character's portrait above their map, and a `30s` clock. **You can't walk** during it, and **Ready** from every living player ends it early. See [Boss and finale](boss.md#moment-of-respite).
- **Fallen teammates keep a grey seat** with an empty map (hard death loses all gear). They watch but can't act. A player who quits mid-respite shows as **Left**.

### Weapons and armour
- **More weapons and armour**, and **drops roll their own stats** so the same item rarely repeats the same numbers. See [Weapons and armour](gear.md); the lineup and numbers there are drafts.

### Combat
- **Stance combat** (15:48) replaces the attack hub. Scroll up, middle click and scroll down pick the high, middle and low stance (d-pad on a gamepad: up high, down low, left or right middle; three stance buttons on touch). Left click attacks from your stance (click light, hold heavy); right mouse guards it, timed to parry. **F** alone focuses.
- **A guard only blocks a blow from the same stance.** A red flush on the screen edge shows where an attack comes from and brightens in the parry window. Fliers and spiders have no stance, so any guard works.
- **Humanoid enemies take per-body-part injuries like players**, and repeated hits to the same limb make it worse.
- **Hurt enemy body parts flash red** (deeper red when broken).

### Companions
- **One companion slot**; your companion dies with you. Enemies treat companions like another player.
- **Survive a run and your companion survives too:** it follows you in the lobby, stands beside your preview and joins your next match. A hard death still loses it.
- A **companion portrait** sits right of the HP and stamina panel, with a red ring that drains with damage and pulses while it's down.
- **Goblin Scout** companion (approved 18:08): a small friendly goblin who runs around finding gold for you; the trail map lights up the tiles he runs over and a copper dot shows where he is.
- A healing human companion allows a downed state. "Join me" on a freed hostage recruits them. The Dragon's Egg hatches a Dragon Whelp.

### Enemies
- Some enemies are **gated by round**, not depth: fliers from round 3, Brood Sack from round 4, elite Gulpers from round 5.
- **Ranged enemies:** the Goblin Slinger from round 1 and the Hollow Bowman from round 3.

### Inventory
- Dropped items show their **3D mesh**, or a coloured orb with the item's icon above it (**red** weapons, **green** food, **blue** armor).
- Legacy items with no inventory icon are **removed** from the game.
- An **active weapon** slot sits under the bag grid: drag any weapon there, any size, to wield it. Two slots, **Active melee** and **Active ranged**; R swaps between them. Active weapons stay visible in the bag so enchants can be dragged onto them. See [Inventory](inventory.md#active-weapon).

### Shopkeepers
- **Eight shopkeepers**, each tied to certain rounds, grislier and more armoured in later rounds. Shops vary: a rolled keeper per round, rolled stock with a deal of the round, and a rolled stall placement. See [Shopkeepers](shopkeepers.md).
- Every shop takes **silverlings, goldlings or Robux**. The Iron Tithe takes goldlings or Robux only.

### Trinkets
- **21 trinkets** on layer 3 (8 for anyone, 2 per class, 3 cursed), **tiers I to IV**. Better tiers drop in later rounds, trinkets **level up while carried** (two full rounds = +1 tier), and two matching ones **fuse at a shopkeeper**. See [Trinkets](trinkets.md).

### Map and UI
- **Loading screen:** while a dungeon loads, show the title card art with the logo and a **rotating tip**, **no loading bar**. This replaces the earlier logo-only, no-tip rule.
- Dragging an item off the grid drops it at your feet **only during a round in the dungeon**, never in the lobby or on a loading screen.
- The sword's swing aid should not show while a bow is drawn.
- **Attack hub** (replaced the same day by stance combat): hold left click for a small ring around the crosshair and drag toward the attack direction (up = overhead, down = low sweep, sides = slashes, no drag = thrust). It replaced the mouse-flick swing.
- **Q high guard retired.** Q is now mashed to throw off a latched spider (in the prototype).
- **The HUD is one bottom-left panel:** body doll, then a column (HP with poison overlay, eating bar, stamina, damage and armour, coins and vault, status icons), then the companion ring. Companion buttons sit above it; the Bag hint is bottom centre.
- **The view never moves on its own in the low stance** (the camera dip is rejected).
- **Damage and armour** show under the health and stamina bars. Compared items show green with an up arrow when better and red with a down arrow when worse (weapons against your active weapon, armour against your best piece of that kind).
- **Failed pickups** show their reason under the crosshair; arrows need a quiver and bolts a bolt case.
- **Shop screen:** holding E on a keeper frames the keeper and stall; a tall card on the right shows wares above your pack. Wheel, arrows, L1/R1 or d-pad move between wares; the focused ware gets a gold chevron and compare hint. The clock keeps running.
- **Cutscenes are cinematic:** cuts with a slow push-in, close on the speaker's face, letterbox bars and typed subtitles with the name in gold (text only until audio uploads reopen 28 October).
- **Interact prompts** are our own E tags that fill while you hold E, not the Roblox popup.
- **Eating takes time:** a bite slows you and you can't attack during it, so you can't spam-eat mid-fight.

## 2026-10-01

### Game loop and progression
- Each dungeon round lasts **3 minutes**, and a match has **6 rounds**.
- A round is **one 3:00 clock**: taking the stairs to a new depth **never resets the timer or adds time**.
- Floors grow linearly: 3 x (3, 5, 7, 9, 11, 13) = **9, 15, 21, 27, 33, 39 rooms**. "3x larger" is not exponential.
- A **story** is a promise that a certain special event will happen in one room **of the next round**. Not a storyline or an extra floor.
- Dungeon **rooms are bigger and polygon-shaped**, **corridors longer**. Walls use **PBR materials**, **never intersect**, and **vary in shape** (pillars, trim) instead of plain boxes.
- The Studio rework is approved: rooms **36 to 60 studs** across with **16-stud ceilings**, octagon, hexagon, cut-corner or slanted shapes, and corridors up to about **4x longer** with their own lamps. Each round's map should **feel big, with a lot to explore**.
- Every map has **shopkeepers**, **mini events** and **hostage rescues**; rescues increase the next round's loot.
- The finale has a **boss that scales with player count and the party's total dungeon level**.
- The game is **persistent**. Surviving carries you into the next match. **Level = dungeon runs survived.**
- Death is a **hard death**: lose all loot, restart with basic gear, level resets to **zero**.
- You can **pay with gear to revive** for the next match, and a **friend can pay** that gear for you.

### Lobby and queue
- Parties of **4**.
- The in-game currency is **silverlings and goldlings**, no bronze: **10 silverlings = 1 goldling**. Smashed props occasionally drop silverlings.
- The lobby shop sells with **silverlings and goldlings, or Robux**.
- Players can **rearrange inventory** and move gear between pack and vault in the lobby before a match.
- Inventory can also be rearranged **during a 3-minute round** and **at shopkeepers**.
- Coin brought out alive sits safe in a **vault**.
- **Auto queue** matched around your level, or **launch a party** with a 5-character uppercase alphanumeric invite code.
- Leaving a match early **twice in a progression** = small coin penalty, removable with Robux.

### Inventory
- Grid inventory with **3 overlapping layers**: 1 armor, mounted things and food; 2 weapons; 3 enchants and specials that affect items beneath.
- **Layer sizes are set per class** and don't have to match. Layers can have **multiple islands**.
- Islands are **generic slots**: any armor that fits works anywhere on the armor layer.
- **Backpacks** each add an island on a layer the player chooses; players can own several.
- **Special pickups move one island** each. Effects that no longer line up silently stop working.
- Classes **Nobleman** (2 longswords, larger armor area, smaller 3rd layer) and **Witcher** (large armor, modest separated weapon slots, decent 3rd layer) join Knight, Ranger and Arcanist.

### Controls
- The bag (inventory) opens and closes with **B**. I stays as a backup key.
- **R swaps between melee and ranged.**
- **Q toggles a high guard**: every swing becomes an overhead, so you don't have to look at the ceiling. (Retired 2026-10-02: overheads came from the attack hub, now the high stance, and Q becomes the spider break-free key.)
- Swing gestures: flick **down = low sweep**, left or right = slash, still = thrust. A flick up gives no overhead. (Replaced on 2026-10-02 by the attack hub.)

### Combat
- **Parries can disarm**, both ways. A picked-up weapon returns to its **same inventory slot**, or the player is told there's no room. (Since 2026-10-02 it returns to its active weapon slot.)
- **Skill based and survival strained**, with per-body-part injuries.
- **Hunger is a draining meter**; food lives on inventory layer 1.
- **Broken bones carry into the next round**, not the next match.
- At 0 HP you are **downed only with a human companion that can heal**; otherwise hard death.
- **Directional swings.**
- The injury **penalties are harsh enough** for now.

### Companions
- **One companion**, either a **pet or a human NPC**.
- **Pets can be hostages** too.
- Companions **die with you** on a hard death.
- Each companion has its own **mini grid per class**.
- **Cave Hound** widens map reveal to 2 tiles; **Owl** points to the stairs once per floor.

### Enemies
- Depth 1 has **skeletons, slimes, orcs, goblins and some folktale creatures**.

### Map and UI
- **Dynamic trail map**: reveal radius locked at **1 tile (4 studs)**, no light through walls.
- **All UI uses the shared palette**: arcane colours mixed with earthy tones.
- **Loading cards:** 4 cards with the logo. (Replaced on 2026-10-02: see above.)

### Characters
- Mobile-first but fun on desktop; detailed heads and adornments on simpler bodies; flexible joints; per-body-part damage.
- Style **"D"**: chunky toy build, big head at original size, toy skin, fitted hair, shell-fit helmets, tiered armor. Distinct physique per class.
- Everyone wears a **tunic and trousers** under their kit.
- No attack animations in the base set: each weapon brings its own.
- The **Stagger** animation is being reworked: fall back and catch yourself, impact, recovery, feet planted.
