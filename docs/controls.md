# Controls

What each input does. The **In prototype** tag means it already works in the Roblox Studio prototype. The **Planned** tag means it comes from the design docs and isn't built yet.

| Tag | Meaning |
|-|-|
| <span class="tag decided">In prototype</span> | Works in the Studio prototype today |
| <span class="tag draft">Planned</span> | Designed, not built yet |
| <span class="tag open">Open</span> | Not decided |

## Desktop

### Fighting <span class="tag decided">In prototype</span>

| Input | Action |
|-|-|
| Left click while moving the mouse **down** | Overhead swing: hits head and torso |
| Left click while moving the mouse **left or right** | Side cut: hits that side's arm, hand and torso |
| Left click while moving the mouse **up** | Low sweep: hits legs and feet |
| Left click with a **still** mouse | Thrust (pierce) at the crosshair |
| **Hold** left click | Heavy attack: +60% damage, double injury, staggers the enemy |
| Hold right mouse | Block |
| Right mouse just before a hit lands | **Parry.** The enemy flashes gold, a ring pulses on the crosshair, and a hum and glint play |
| Space + direction | Dodge about 10 studs, costs a quarter of your stamina |
| F or middle mouse | Focus lock on the enemy nearest the crosshair (purple outline). Press again to release |

- A **failed parry** (block pressed outside the parry window) still takes half damage, knocks you back and locks your swings for 0.6 s.
- **Jump is off.**

Swing direction picks the body zone you hit. See [Combat](combat.md#fighting-skill) for damage, stamina and timing.

### Inventory and loot <span class="tag decided">In prototype</span>

| Input | Action |
|-|-|
| I | Open or close the inventory (Cob, 2026-10-01). A "[ I ] Pack" reminder sits in the bottom-left of the HUD |
| Drag an item | Move it |
| R while dragging | Rotate the item |
| Drag off the panel | Drop the item |
| Click food | Eat it |
| E | Take from a loot box |
| Lobby: **Edit pack & vault** button | Rearrange your pack and move gear to or from the vault |

Tab does nothing.

### Planned <span class="tag draft">Planned</span>

From the HUD design ([Map and HUD](ui.md#hud-draft)):

| Input | Action |
|-|-|
| M | Full map. You can walk but not swing while it's open; the timer stays visible |
| Q | Weapon on the hotbar |
| 1 to 4 | Hotbar items |
| Z, X, C, V | Companion orders: Follow, Hold, Fetch, Attack |

## Mobile <span class="tag draft">Planned</span>

None of the touch controls are in the prototype yet. From the combat and HUD designs:

| Input | Action |
|-|-|
| Attack pad: tap | Thrust (snaps to the nearest zone in a small cone) |
| Attack pad: swipe off it | Directional swing |
| Attack pad: hold | Heavy attack |
| Block button | Block, and parry when timed |
| Dodge button | Dodge |
| Tap the minimap | Full map |
| Companion pill: tap | Cycle companion orders |
| Companion pill: hold | Open the 4-way order wheel |
