# Map and HUD

## Trail map

The trail map and minimap are in the Studio prototype as of 2026-10-01. The minimap sits top right and only shows inside the dungeon. See [Controls](controls.md) for the keys.

![Trail map over a real floor](assets/img/ui/trail_map.jpg)

!!! success "Cob's brief (2026-10-01)"
    A map that tracks the player as they move, but dynamic: walking lights only a small area of the real map around your track, so you can follow your own movements without seeing a room's whole layout just because you walked in.

| Rule | Value | Status |
|-|-|-|
| Reveal radius | 1 tile (4 studs) around every point you walked | <span class="tag decided">Decided</span> |
| Light through walls | Never: light spreads only across reachable floor (flood fill) | <span class="tag decided">Decided</span> |
| Walls | Drawn only where lit floor touches them | <span class="tag draft">Draft</span> |
| Stamps | Chests (rarity colour), shrines, shops, hostages and stairs only once you've been there | <span class="tag draft">Draft</span> |
| Memory | Trail lasts the round; older thread fades a little; new floor = blank map | <span class="tag draft">Draft</span> |
| Minimap | Round, heading-up, 18 tiles (72 studs) across, N marker on the rim | <span class="tag draft">Draft</span> |
| Full map | North-up. M or a click on the minimap opens it; the mouse is freed and swings pause while it's open. Timer stays visible | <span class="tag decided">In prototype</span> |
| Broken head | Map tears and dims | <span class="tag draft">Draft</span> |

A 2-tile radius was tried first: rooms came out 90 to 100% revealed, which defeats the point. In the test walk on a 21-room floor, the player reached the stairs at 2:15 with 26% of the floor lit; rooms they entered averaged 47% seen.

![Full map overlay](assets/img/ui/full_map.jpg)

## Companion map perks

![What each companion does to the map](assets/img/ui/companion_maps.jpg)

- **Cave Hound** <span class="tag decided">In prototype</span>: the trail map reveals 2 tiles around you while it is with you (test walk: 32% of floor lit, rooms entered 75% seen).
- **Owl Familiar** <span class="tag decided">In prototype</span>: once per floor, a dashed bearing toward the nearest stairs, shown in the world and on the trail map. Direction only, reveals no floor. A rim arrow tracks the stairs for 20 s <span class="tag assumed">Assumed</span>.
- **Goblin Scout** <span class="tag decided">In prototype</span>: the trail map lights up the tiles he runs over, and a copper dot shows where he is.
- **Other humans:** no map perk.

## HUD <span class="tag draft">Draft</span>

![Desktop HUD](assets/img/ui/hud_desktop.jpg)

**Desktop:** pickup feed top left, timer top centre, minimap with coin (silverlings and goldlings), luck and lit% plus the companion panel (portrait, HP, injuries, can-revive tag, orders on Z X C V) on the right, body doll with HP, stamina and food bottom left, hotbar bottom centre (a weapon slot, items 1 to 4; Q is the spider break-free key; the bag opens with B, see [Controls](controls.md)).

![Phone HUD](assets/img/ui/hud_mobile.jpg)

**Stance and threat** <span class="tag decided">In prototype</span>: melee is stance combat (Cob, 2026-10-02). A **red flush** on the screen edge shows where an enemy attack is coming from: top for high, bottom for low, left or right for side swings; it brightens in the parry window. It replaces the attack hub ring. See [Controls](controls.md#stances).

**Bottom-left panel** <span class="tag decided">In prototype</span> (Cob, 2026-10-02): the HUD is one panel in the bottom left. From left to right:

1. The **body doll**.
2. A column with **HP** (and its poison overlay), the **eating bar**, **stamina**, **Resolve** (the [special ability](combat.md#abilities) bar), **damage and armour** with the compare hint, your **coins and vault**, and your **injuries**.
3. The **companion ring** on the right.

The companion command buttons sit above the panel, and the **Bag** hint is at the bottom centre.

**Enemy health bars** <span class="tag decided">In prototype</span> (Cob, 2026-10-02): every enemy has a health bar and flashes red when hit.

**Better-drop gleam** <span class="tag decided">In prototype</span>: floor gear that beats yours gets a slow gold rim, per player.

**Cursor** <span class="tag decided">In prototype</span>: a custom gold arrow wherever the mouse is free (menus and the shop); hidden in first person and cutscenes, except at the hostage choice.

**Stairs banner:** "Stairs taken" clears once the new floor has loaded.

**Companion portrait** <span class="tag decided">In prototype</span> (Cob, 2026-10-02): a circle to the right of the HP and stamina panel shows your companion's head. A red ring around it drains as the companion takes damage, and it pulses red while the companion is down. It's hidden when you have no companion.

**Damage, armour and comparing** <span class="tag decided">In prototype</span>: your damage and armour sit in the panel's column under HP and stamina. Comparing an item shows **green with an up arrow** when it's better and **red with a down arrow** when it's worse. Weapons compare against your active weapon; armour compares against the best piece of the same kind you carry.

**Pickups:** a failed pickup shows its reason under the crosshair.

**Mobile** (landscape): body doll top left, timer top centre, minimap top right with a companion pill beside it (tap cycles orders, hold opens a 4-way wheel), hotbar low between the thumbs, and the combat cluster (attack pad, block, dodge) from [Combat](combat.md#fighting-skill).

**Timer colour:** parchment normally, amber under 30 s, red under 10 s.

## Open

??? question "Map in the finale and sharing"
    Should the map survive into the boss or PvP? Should teammates be able to share their maps?
