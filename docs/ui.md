# Map and HUD

## Trail map

The trail map and minimap are in the prototype. The minimap sits top right and only shows inside the dungeon. See [Controls](controls.md) for the keys.

![Trail map over a real floor](assets/img/ui/trail_map.jpg)

!!! success "Brief"
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

**Stance and threat** <span class="tag decided">In prototype</span>: melee is stance combat. A **red flush** on the screen edge shows where an enemy attack is coming from: top for high, bottom for low, left or right for side swings; it brightens in the parry window. It replaces the attack hub ring. See [Controls](controls.md#stances).

**Bottom-left panel** <span class="tag decided">In prototype</span>: the HUD is one panel in the bottom left. From left to right:

1. The **body doll**.
2. A column with **HP** (and its poison overlay), the **eating bar**, **stamina**, **Resolve** (the [special ability](combat.md#abilities) bar), **damage and armour** with the compare hint, your **coins and vault**, and your **injuries**.
3. The **companion ring** on the right.

The companion command buttons sit above the panel, and the **Bag** hint is at the bottom centre.

**Enemy health bars** <span class="tag decided">In prototype</span>: every enemy has a health bar and flashes red when hit.

**Enemy status icons** <span class="tag decided">In prototype</span>: small icons under an enemy's health bar show what's affecting it: Stunned, Reeling, Pinned, Grounded, Disarmed, Slowed, Bleeding, Burning, Poisoned, Broken Arm, Broken Leg, Concussed, Downed, Warded or Exposed. The rim colour gives the kind: amber for control, red for damage over time and injuries, arcane for wards, gold for Exposed. Above each enemy, from the top, sit a warning icon (when it has one), its name, its health bar and its status icons, so nothing overlaps.

<div class="db-status" markdown="0">
<div><img src="../assets/img/icons/status/Stunned.png" alt="Stunned"><p><b>Stunned</b>Can't move or act. Every stun on Morrakhet lasts 10 s.</p></div>
<div><img src="../assets/img/icons/status/Reeling.png" alt="Reeling"><p><b>Reeling</b>Staggered after you parry it: 0.8 s from a light, 1.2 s from a heavy.</p></div>
<div><img src="../assets/img/icons/status/Pinned.png" alt="Pinned"><p><b>Pinned</b>Held in place by the Ranger's Pinning Shot for 3 s.</p></div>
<div><img src="../assets/img/icons/status/Grounded.png" alt="Grounded"><p><b>Grounded</b>A flier knocked out of the air.</p></div>
<div><img src="../assets/img/icons/status/Disarmed.png" alt="Disarmed"><p><b>Disarmed</b>Its weapon was knocked away by a parry.</p></div>
<div><img src="../assets/img/icons/status/Slowed.png" alt="Slowed"><p><b>Slowed</b>Moving slower, from a Hexed weapon or a leg injury.</p></div>
<div><img src="../assets/img/icons/status/Bleeding.png" alt="Bleeding"><p><b>Bleeding</b>Losing health over time from a Serrated hit.</p></div>
<div><img src="../assets/img/icons/status/Burning.png" alt="Burning"><p><b>Burning</b>Losing health over time from a Searing hit or fire.</p></div>
<div><img src="../assets/img/icons/status/Poisoned.png" alt="Poisoned"><p><b>Poisoned</b>Losing health over time from poison.</p></div>
<div><img src="../assets/img/icons/status/BrokenArm.png" alt="Broken Arm"><p><b>Broken Arm</b>Weaker hits; two broken arms make some swings miss.</p></div>
<div><img src="../assets/img/icons/status/BrokenLeg.png" alt="Broken Leg"><p><b>Broken Leg</b>Moves slower; a broken foot makes it stumble.</p></div>
<div><img src="../assets/img/icons/status/Concussed.png" alt="Concussed"><p><b>Concussed</b>Dazed by a head hit.</p></div>
<div><img src="../assets/img/icons/status/Downed.png" alt="Downed"><p><b>Downed</b>On the floor at 0 HP.</p></div>
<div><img src="../assets/img/icons/status/Warded.png" alt="Warded"><p><b>Warded</b>Soaks the next hits, like the Arcanist's Rune Nova ward.</p></div>
<div><img src="../assets/img/icons/status/Exposed.png" alt="Exposed"><p><b>Exposed</b>Takes extra damage, for example after its guard breaks.</p></div>
</div>

**Better-drop gleam** <span class="tag decided">In prototype</span>: floor gear that beats yours gets a slow gold rim, per player.

**Cursor** <span class="tag decided">In prototype</span>: a custom gold arrow wherever the mouse is free (menus and the shop); hidden in first person and cutscenes, except at the hostage choice and once you skip a scene.

**Stairs banner:** "Stairs taken" clears once the new floor has loaded.

**Companion portrait** <span class="tag decided">In prototype</span>: a circle to the right of the HP and stamina panel shows your companion's head. A red ring around it drains as the companion takes damage, and it pulses red while the companion is down. It's hidden when you have no companion.

**Damage, armour and comparing** <span class="tag decided">In prototype</span>: your damage and armour sit in the panel's column under HP and stamina. Comparing an item shows **green with an up arrow** when it's better and **red with a down arrow** when it's worse. Weapons compare against your active weapon; armour compares against the best piece of the same kind you carry.

**Pickups:** a failed pickup shows its reason under the crosshair.

**Mobile** (landscape): body doll top left, timer top centre, minimap top right with a companion pill beside it (tap cycles orders, hold opens a 4-way wheel), hotbar low between the thumbs, and the combat cluster (attack pad, block, dodge) from [Combat](combat.md#fighting-skill).

**Timer colour:** parchment normally, amber under 30 s, red under 10 s.

## Open

??? question "Map in the finale and sharing"
    Should the map survive into the boss fight? Should teammates be able to share their maps?
