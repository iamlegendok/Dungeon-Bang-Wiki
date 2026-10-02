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
| **Hold** left click | A fine ring **hub** appears around the crosshair (only while attacking) and the view stops turning |
| While holding, **drag left or right** | Slash to that side: targets that side's arm, hand or torso |
| While holding, **drag up** | Overhead: targets the head or chest |
| While holding, **drag down** | Low sweep: targets the legs and feet |
| Hold without dragging | Thrust (pierce): hits whatever is under the crosshair |
| **Release quickly** | Light attack |
| **Keep holding** until the thin arc fills, then release | Heavy attack: +60% damage, double injury, staggers the enemy |
| Q | Toggle **high guard**. While it's on, every swing is an overhead whichever way you drag, and "▲ HIGH (Q)" shows in gold under the crosshair |
| Hold right mouse while the hub is up | Turn the camera again mid-swing (Cob, 2026-10-02). It doesn't block. Release right mouse to steer the hub again |
| Hold right mouse | Block |
| Right mouse just before a hit lands | **Parry.** The enemy flashes gold, a ring pulses on the crosshair, and a hum and glint play |
| Space + direction | Dodge about 10 studs, costs a quarter of your stamina |
| F or middle mouse | Focus lock on the enemy nearest the crosshair (purple outline). Press again to release |

- A **failed parry** (block pressed outside the parry window) still takes half damage, knocks you back and locks your swings for 0.6 s.
- **Jump is off.**
- The Roblox cursor is hidden in play; menus show a custom cursor.
- **Enemy guard:** when an enemy raises its weapon across its body with a steel-white outline and a soft clink, a light swing gets you parried (pushed back, no swings for 0.8 s, free counter for the enemy). A **heavy** (hold, then release) breaks the guard: the enemy reels and takes 1.5x damage for a moment. Prototype values, see [Combat](combat.md#enemy-guard).
- **Disarmed:** a parry can knock your sword 4 to 6 studs away (10% when an enemy guard parries your light). Until you get it back you can only dodge. **Walk over it** to pick it up; it returns to its active weapon slot. See [Combat](combat.md#disarms).

#### Attack hub <span class="tag decided">In prototype</span>

Cob, 2026-10-02: the attack hub replaces the old mouse-flick swing, which was hard to aim. It's a mini circular hub in the middle of the screen that you drag toward the direction you want to attack. It only shows while you hold left click, and it's hidden while a ranged weapon is out. See [Combat](combat.md#fighting-skill) for damage, stamina and timing.

### Ranged <span class="tag decided">In prototype</span>

Built in the Studio place; Cob hasn't played it yet. See [Ranged weapons](ranged.md).

| Input | Action |
|-|-|
| R | Swap between your active melee and active ranged weapon (Cob, 2026-10-01). See [Inventory](inventory.md#active-weapon) |
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
| Drag a weapon to the active slot under the grid | Wield it. Any size fits; a weapon already there swaps back to the grid |
| Drag off the panel | Drop the item at your feet. Only during a round in the dungeon; in the lobby or while a loading screen is up, the item eases back into place |
| Click food | Eat it: a bite takes **1.6 s** at **40% move speed**, and you can't attack during it. The food takes effect at the bite, extra clicks do nothing, and **Space** cancels the bite and keeps the food |
| Hold E | Take from a loot box, pick up, or open a shop. Our own **E tag** floats over the thing and fills while you hold; there's no Roblox popup (Cob, 2026-10-02) |
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
