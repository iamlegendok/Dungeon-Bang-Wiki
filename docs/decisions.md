# Decisions log

Everything Cob has confirmed, newest first. Drafts and assumptions are not here until Cob confirms them.

## 2026-10-02

### Combat
- **Humanoid enemies take per-body-part injuries like players**, and repeated hits to the same limb make it worse.
- **Hurt enemy body parts flash red** (deeper red when broken).

### Enemies
- Some enemies are **gated by round**, not depth: fliers from round 3, Brood Sack from round 4, elite Gulpers from round 5.
- **Ranged enemies:** the Goblin Slinger from round 1 and the Hollow Bowman from round 3.

### Inventory
- Dropped items show their **3D mesh**, or a coloured orb with the item's icon above it (**red** weapons, **green** food, **blue** armor).
- Legacy items with no inventory icon are **removed** from the game.
- An **active weapon** slot sits under the bag grid: drag any weapon there, any size, to wield it. Two slots, **Active melee** and **Active ranged**; R swaps between them. See [Inventory](inventory.md#active-weapon).

### Shopkeepers
- **Eight shopkeepers**, each tied to certain rounds, grislier and more armoured in later rounds. Shops vary: a rolled keeper per round, rolled stock with a deal of the round, and a rolled stall placement. See [Shopkeepers](shopkeepers.md).
- Every shop takes **silverlings, goldlings or Robux**. The Iron Tithe takes goldlings or Robux only.

### Trinkets
- **21 trinkets** on layer 3 (8 for anyone, 2 per class, 3 cursed), **tiers I to IV**. Better tiers drop in later rounds, trinkets **level up while carried** (two full rounds = +1 tier), and two matching ones **fuse at a shopkeeper**. See [Trinkets](trinkets.md).

### Map and UI
- **Loading screen:** while a dungeon loads, show the title card art with the logo and a **rotating tip**, **no loading bar**. This replaces the earlier logo-only, no-tip rule.
- Dragging an item off the grid drops it at your feet **only during a round in the dungeon**, never in the lobby or on a loading screen.
- The sword's swing aid should not show while a bow is drawn.
- **Attack hub:** hold left click for a small ring around the crosshair and drag toward the attack direction (up = overhead, down = low sweep, sides = slashes, no drag = thrust). It replaces the mouse-flick swing.
- **Right mouse during a swing** turns the camera again while the attack hub is up; it doesn't block then.
- **Interact prompts** are our own E tags that fill while you hold E, not the Roblox popup.
- **Eating takes time:** a bite slows you and you can't attack during it, so you can't spam-eat mid-fight.

## 2026-10-01

### Game loop and progression
- Each dungeon round lasts **3 minutes**, and a match has **6 rounds**.
- A round is **one 3:00 clock**: taking the stairs to a new depth **never resets the timer or adds time**.
- Floors grow linearly: 3 x (3, 5, 7, 9, 11, 13) = **9, 15, 21, 27, 33, 39 rooms**. "3x larger" is not exponential.
- A **story** is a promise that a certain special event will happen in one room **of the next round**. Not a storyline or an extra floor.
- Dungeon **rooms are bigger and polygon-shaped**, **corridors longer**. Walls use **PBR materials**, **never intersect**, and **vary in shape** (pillars, trim) instead of plain boxes.
- Cob approved the Studio rework: rooms **36 to 60 studs** across with **16-stud ceilings**, octagon, hexagon, cut-corner or slanted shapes, and corridors up to about **4x longer** with their own lamps. Each round's map should **feel big, with a lot to explore**.
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
- **Q toggles a high guard**: every swing becomes an overhead, so you don't have to look at the ceiling. (Since 2026-10-02, dragging up on the attack hub also gives an overhead.)
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
