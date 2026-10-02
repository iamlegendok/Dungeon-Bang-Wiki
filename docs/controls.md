# Controls

What each input does. The **In prototype** tag means it already works in the Roblox Studio prototype. The **Planned** tag means it comes from the design docs and isn't built yet.

| Tag | Meaning |
|-|-|
| <span class="tag decided">In prototype</span> | Works in the Studio prototype today |
| <span class="tag draft">Planned</span> | Designed, not built yet |
| <span class="tag open">Open</span> | Not decided |

## Desktop

### Fighting <span class="tag decided">In prototype</span> { #fighting }

| Input | Action |
|-|-|
| Flick the mouse **down**, then click | Low sweep: targets the legs and feet |
| Flick **right** or **left**, then click | Slash to that side: targets that side's arm, hand or torso |
| Flick **up**, then click | No overhead from a flick. It falls back to the nearest slash, or a thrust if there's no sideways movement |
| Click with the mouse **barely moving** | Thrust (pierce): hits whatever is under the crosshair |
| Q | Toggle **high guard**, the only way to swing overhead. While it's on, every swing is an overhead (targets the head or chest) whichever way you flick, and "▲ HIGH (Q)" shows in gold under the crosshair (Cob, 2026-10-01) |
| Click and release quickly | Light hit |
| **Hold** left click, then **release** | Heavy attack: it charges while you hold (the charge pose lasts as long as the button is down) and strikes on release. +60% damage, double injury, staggers the enemy |
| Hold right mouse | Block |
| Right mouse just before a hit lands | **Parry.** The enemy flashes gold, a ring pulses on the crosshair, and a hum and glint play |
| Space + direction | Dodge about 10 studs, costs a quarter of your stamina |
| F or middle mouse | Focus lock on the enemy nearest the crosshair (purple outline). Press again to release |

- A **failed parry** (block pressed outside the parry window) still takes half damage, knocks you back and locks your swings for 0.6 s.
- **Jump is off.**
- **Enemy guard:** when an enemy raises its weapon across its body with a steel-white outline and a soft clink, a light swing gets you parried (pushed back, no swings for 0.8 s, free counter for the enemy). A **heavy** (hold, then release) breaks the guard: the enemy reels and takes 1.5x damage for a moment. Prototype values, see [Combat](combat.md#enemy-guard).
- **Disarmed:** a parry can knock your sword 4 to 6 studs away (10% when an enemy guard parries your light). Until you get it back you can only dodge. **Walk over it** to pick it up; it returns to the same pack slot, or shows "No room" if that slot was filled. See [Combat](combat.md#disarms).

#### How a swing is picked <span class="tag draft">Prototype values</span>

- The direction comes from the mouse flick in the **0.14 s** just before the click.
- A flick under **8 px** counts as barely moving, so you thrust.
- Release within **0.35 s** for a light hit. Hold longer to charge a heavy, which strikes on release.

These numbers come from the Studio prototype's code and may change.

#### Swing guide <span class="tag decided">In prototype</span>

Five markers sit around the crosshair: low sweep at the bottom, slashes left and right, thrust in the centre, and overhead at the top (only while Q is on). The marker for the attack you'd get lights up. A line underneath reads "next: …", then LIGHT or HEAVY while you hold, then what you actually swung. See [Combat](combat.md#fighting-skill) for damage, stamina and timing.

### Ranged <span class="tag decided">In prototype</span>

Built in the Studio place; Cob hasn't played it yet. See [Ranged weapons](ranged.md).

| Input | Action |
|-|-|
| R | Swap between sword and ranged weapon (Cob, 2026-10-01) |
| Hold left click, then release | Draw, then loose. The crossbow fires on a click; throwing axes wind up while held |
| Hold right mouse | Steady your aim. Costs stamina |
| Space + direction | Dodge, which cancels a draw |
| Walk over a missed arrow, bolt or axe | Pick it up. Misses stay where they land |

### Inventory and loot <span class="tag decided">In prototype</span>

| Input | Action |
|-|-|
| B | Open or close the bag (inventory) (Cob, 2026-10-01). A key reminder sits in the bottom-left of the HUD |
| I | Backup for B. Roblox Studio catches I before the game sees it, so use B when testing in Studio; I works in a real Roblox client |
| Drag an item | Move it |
| R while dragging | Rotate the item |
| Drag off the panel | Drop the item at your feet. Only during a round in the dungeon; in the lobby or while a loading screen is up, the item eases back into place |
| Click food | Eat it |
| Hold E | Take from a loot box |
| Lobby: **Edit pack & vault** button | Rearrange your pack and move gear to or from the vault |

Tab does nothing.

### Lobby <span class="tag decided">In prototype</span>

| Input | Action |
|-|-|
| Drag the character preview left or right (touch-drag on mobile) | Rotate your character. The auto-spin pauses while you drag and resumes about 1.5 s after you let go |
| **Edit pack & vault** button | Rearrange your pack and move gear to or from the vault |

### Map <span class="tag decided">In prototype</span>

| Input | Action |
|-|-|
| M | Open or close the full map |
| Click the minimap | Open the full map |

- While the full map is open, the mouse is freed and swings are paused.
- The minimap sits top right and only shows inside the dungeon.

### Planned <span class="tag draft">Planned</span>

From the HUD design ([Map and HUD](ui.md#hud-draft)):

| Input | Action |
|-|-|
| Q | Weapon on the hotbar. Q is now the high guard toggle, so this needs another key <span class="tag open">Open</span> |
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
| Tap the minimap | Full map (clicking it already works on desktop) |
| Companion pill: tap | Cycle companion orders |
| Companion pill: hold | Open the 4-way order wheel |
