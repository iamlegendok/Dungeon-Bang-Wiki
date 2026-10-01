# Decisions log

Everything Cob has confirmed, newest first. Drafts and assumptions are not here until Cob confirms them.

## 2026-10-01

### Game loop and progression
- Each dungeon round lasts **3 minutes**, and a match has **6 rounds**.
- Floors grow linearly: 3 x (3, 5, 7, 9, 11, 13) = **9, 15, 21, 27, 33, 39 rooms**. "3x larger" is not exponential.
- A **story** is a promise that a certain special event will happen in one room **of the next round**. Not a storyline or an extra floor.
- Every map has **shopkeepers**, **mini events** and **hostage rescues**; rescues increase the next round's loot.
- The finale has a **boss that scales with player count and the party's total dungeon level**.
- The game is **persistent**. Surviving carries you into the next match. **Level = dungeon runs survived.**
- Death is a **hard death**: lose all loot, restart with basic gear, level resets to **zero**.
- You can **pay with gear to revive** for the next match, and a **friend can pay** that gear for you.

### Lobby and queue
- Parties of **4**.
- The lobby shop sells with **Gold or Robux**.
- Players can **rearrange inventory** and move gear between pack and vault in the lobby before a match.
- Inventory can also be rearranged **during a 3-minute round** and **at shopkeepers**.
- Gold brought out alive sits safe in a **vault**.
- **Auto queue** matched around your level, or **launch a party** with a 5-character uppercase alphanumeric invite code.
- Leaving a match early **twice in a progression** = small gold penalty, removable with Robux.

### Inventory
- Grid inventory with **3 overlapping layers**: 1 armor, mounted things and food; 2 weapons; 3 enchants and specials that affect items beneath.
- **Layer sizes are set per class** and don't have to match. Layers can have **multiple islands**.
- Islands are **generic slots**: any armor that fits works anywhere on the armor layer.
- **Backpacks** each add an island on a layer the player chooses; players can own several.
- **Special pickups move one island** each. Effects that no longer line up silently stop working.
- Classes **Nobleman** (2 longswords, larger armor area, smaller 3rd layer) and **Witcher** (large armor, modest separated weapon slots, decent 3rd layer) join Knight, Ranger and Arcanist.

### Combat
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
- **Loading cards:** 4 cards, logo only, no tip or loading bar.

### Characters
- Mobile-first but fun on desktop; detailed heads and adornments on simpler bodies; flexible joints; per-body-part damage.
- Style **"D"**: chunky toy build, big head at original size, toy skin, fitted hair, shell-fit helmets, tiered armor. Distinct physique per class.
- Everyone wears a **tunic and trousers** under their kit.
- No attack animations in the base set: each weapon brings its own.
- The **Stagger** animation is being reworked: fall back and catch yourself, impact, recovery, feet planted.
