# Companions

![Companion lineup](assets/img/companions/lineup.jpg)

## Decided <span class="tag decided">Decided</span>

From Cob, 2026-10-01:

- You can keep **either a pet or a human NPC** tagging along.
- **Pets can be hostages too**, just like people.
- Companions **die with you** on a hard death, pets included.
- Each companion class has its own **mini grid**.
- At 0 HP, a **human** companion that can heal lets you be revived from a downed state. With a pet or no companion, 0 HP is a hard death.
- **Cave Hound:** widens your trail-map reveal from 1 tile to 2 tiles.
- **Owl Familiar:** points toward the stairs once per floor.

From Cob, 2026-10-02:

- You have **one companion slot**, and your companion dies with you.
- **Enemies treat companions like another player.**
- **"Join me"** on a freed hostage recruits them.
- **The Dragon's Egg** (a [story](events.md#stories)) hatches a **Dragon Whelp**.
- **Survive the run and your companion survives too.** It comes back to the lobby, follows you around there and stands beside your character preview, then joins your next match. A hard death still loses it.
- A **portrait circle** next to your HP and stamina shows its head, with a red ring that drains as it takes damage and pulses while it's down. See [Map and HUD](ui.md#hud-draft).
- **Cave Hound:** the trail map reveals 2 tiles around you. **Owl:** its pointer to the stairs also shows on the trail map.

## In the prototype <span class="tag decided">In prototype</span> { #prototype }

Built in Studio 2026-10-02 because Cob asked for companions to be prototyped. Cob hasn't played them yet.

| Companion | Kind | What it does |
|-|-|-|
| **Squire** | Human, healer | Fights with a spear, starts with 2 bandages, and revives you in 3 s at 25 HP |
| **Cave Hound** | Pet | Reveals 2 trail-map tiles |
| **Owl** | Pet | Draws a dashed line toward the stairs each floor |
| **Dragon Whelp** | Pet | Hatches from the Dragon's Egg |

**Commands:** Follow, Hold, Fetch and Attack. Attack goes after the enemy you're facing <span class="tag draft">Draft</span>. See [Controls](controls.md#companions) for the keys.

### Prototype defaults <span class="tag draft">Draft</span> { #defaults }

Picked in Studio, not confirmed by Cob:

- Cages hold a **Squire 60%** of the time, a **hound 20%** and an **owl 20%**.
- With a full slot, a freed hostage goes home and you still get the loot luck bonus.
- A **downed companion** is helped up with hold E for 2 s and comes back at 30% HP. After 30 s it's gone and its pack drops.
- **While you're downed** you can crawl but not fight, and enemies ignore you. With a pet, no bandage left, or 20 s without help, it's a hard death.
- A companion that survives a run **levels up** and starts the next match at **full HP**.
- The egg's whelp goes to the **best defender** who has a free slot; otherwise the egg leaves an Epic chest.
- Enemies pull hard toward a healer who is reviving someone.

## How it works <span class="tag draft">Draft</span>

- **One companion slot.** A full slot means dismissing the current companion to take a new one.
- Drawn in the player style. Humans are 84% of player height so they never read as another player. A violet bond ring under each companion shows whose it is, to enemies in PvP too.
- **Getting one:** free a caged hostage, then pick "Join me" (takes the slot) or "Go home" (the usual +1 loot luck next round). Keeping one costs you that bonus. Pets can also be bought from shopkeepers <span class="tag assumed">Assumed</span>.
- **Commands:** Follow, Hold, Fetch (grab nearby loot), Attack (your target). In the prototype, G cycles them and the bottom-left panel has tap buttons.
- Companions have HP and body-zone hits like players. A downed companion gives you 30 s to revive it, else it's gone and its pack drops.
- **Companion dies:** its whole mini grid drops as a loot pile anyone can grab.
- **You survive:** your companion survives too and joins your next match (Cob, 2026-10-02). A paid revive can include it <span class="tag assumed">Assumed</span>.

![Companion rules](assets/img/companions/rules.jpg)

## Archetypes and mini grids <span class="tag draft">Draft</span>

Each companion class has a small 6 x 5 grid with the same three layers as the player, plus **cargo** islands that only carry loot (items there have no effect). Layer 1 holds food too. Enchants on a companion only affect its own items. You swap items with it when it is within reach and you are out of combat <span class="tag assumed">Assumed</span>.

| Class | Kind | L1 armor | L2 weapons | L3 enchants | Cargo |
|-|-|-|-|-|-|
| Porter | Human, pack mule | 1 island, 6 | none | 1 island, 1 | 2 islands, 16 |
| Squire | Human, fighter (spear and torch) | 1 island, 9 | 2 islands, 8 | 1 island, 2 (on the armor/spear seam) | 1 island, 2 |
| Cave Hound | Pet, tracker | 1 island, 8 (barding) | 1 island, 1 (fang socket) | 1 island, 2 (collar) | 2 islands, 8 (saddlebags) |
| Owl Familiar | Pet, arcane scout | 1 island, 1 | none | 3 islands, 14 (mostly standalone charms) | none |

![Companion grids](assets/img/companions/grids.jpg)

### Map perks

- **Cave Hound, keen nose** <span class="tag decided">Decided</span>: trail-map reveal radius 2 tiles (8 studs) while the hound is with you. Drops back to 1 tile while it is on Hold or downed <span class="tag assumed">Assumed</span>.
- **Owl Familiar, Owl's Call** <span class="tag decided">Decided</span>: once per floor, points toward the stairs. The draft draws a dashed bearing toward the nearest stairs (direction only, never the route) and keeps a minimap rim arrow on them for 20 s <span class="tag assumed">Assumed</span>.
- **Humans** have no map perk. They fight, carry and revive.

See [Map and HUD](ui.md#companion-map-perks) for the board.

![Companions in first person](assets/img/companions/first_person.jpg)

## Open

??? question "Pets sense, humans fight and carry?"
    Is that the right split between the two kinds?

??? question "Companions in the finale"
    Do companions fight in PvP or the boss? Can a human companion betray you or be bribed?

??? question "Does gear show on the companion?"
    Does gear in a companion's grid show on its body, like the player's armor tiers?
