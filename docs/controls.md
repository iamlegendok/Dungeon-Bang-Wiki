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
| **Scroll up** | **High** stance |
| **Middle click** | **Middle** stance |
| **Scroll down** | **Low** stance |
| Left click | Attack from your stance. **Click** for a light attack, **hold** for a heavy: +60% damage, double injury, staggers the enemy |
| Hold right mouse | **Guard** your stance. A guard only blocks a blow from the **same** stance |
| Right mouse as the hit lands | **Parry.** The enemy flashes gold, a ring pulses on the crosshair, and a hum and glint play |
| Space + direction | Dodge about 10 studs, costs a quarter of your stamina |
| F | Focus lock on the enemy nearest the crosshair (purple outline). Press again to release. Middle click no longer focuses; it's the middle stance |
| X | **Special ability** when Resolve is full (Y on a gamepad). See [Combat](combat.md#abilities) |
| Mash Q | Throw off a latched spider, or tear free of a boss's hook: 6 presses every 2 s. Tap on touch, mash X on a gamepad. Space, attacks and dodge do nothing while latched. See [Enemies](enemies.md#spiders) |

- A **failed parry** (block pressed outside the parry window) still takes half damage, knocks you back and locks your swings for 0.6 s.
- **Gamepad:** see [Gamepad](#gamepad). **Touch:** three stance buttons on the right edge.
- **Q high guard is removed**; Q now throws off a latched spider.
- **Jump is off.**
- **Cursor**: a custom gold arrow in the project colours wherever the mouse is free, the shop included. It's hidden in first person and in cutscenes, except at the hostage choice.
- **Enemy guard:** when an enemy raises its weapon across its body with a steel-white outline and a soft clink, a light swing gets you parried (pushed back, no swings for 0.8 s, free counter for the enemy). A **heavy** (hold, then release) breaks the guard: the enemy reels and takes 1.5x damage for a moment. Prototype values, see [Combat](combat.md#enemy-guard).
- **Disarmed:** a parry can knock your sword 4 to 6 studs away (10% when an enemy guard parries your light). Until you get it back you can only dodge. **Walk over it** to pick it up; it returns to its active weapon slot. See [Combat](combat.md#disarms).

#### Stance combat <span class="tag decided">In prototype</span> { #stances }

Melee is **stance combat**. It replaces the attack hub ring entirely; there's no more dragging to pick a cut.

- You're always in one of three stances: **high**, **middle** or **low**. You attack from your stance and guard your stance.
- A guard only stops a blow that comes from the **same** stance.
- A **red flush** on the screen edge shows where an enemy attack is coming from: **top** for high, **bottom** for low, **left or right** for side swings. It brightens in the parry window.
- **Fliers and spiders have no stance**, so any guard works on them.

<span class="tag draft">Draft</span> Studio's defaults, not confirmed yet: a high attack is the overhead, middle attacks alternate left and right slashes, and a low attack is the low sweep. There's no thrust for now.

The view never moves on its own in the low stance. See [Combat](combat.md#fighting-skill) for damage, stamina and timing.

### Ranged <span class="tag decided">In prototype</span>

Built in the Studio place; untested in play. See [Ranged weapons](ranged.md).

| Input | Action |
|-|-|
| R | Swap between your active melee and active ranged weapon. See [Inventory](inventory.md#active-weapon) |
| Hold left click, then release | Draw, then loose. The crossbow fires on a click; throwing axes wind up while held |
| Hold right mouse | Steady your aim. Costs stamina |
| Space + direction | Dodge, which cancels a draw |
| Walk over a missed arrow, bolt or axe | Pick it up. Misses stay where they land |

### Moment of respite <span class="tag draft">Planned</span>

| Input | Action |
|-|-|
| Drag your item | Move it (your own map only) |
| R or right mouse while dragging | Rotate it |
| Double-tap an item | Rotate it in place |
| Layer chips | Show one layer at a time |
| Ready | You're done; press again to keep sorting |

See [Boss and finale](boss.md#moment-of-respite).

### Inventory and loot <span class="tag decided">In prototype</span>

| Input | Action |
|-|-|
| B | Open or close the bag (inventory). A Bag hint sits at the bottom centre of the HUD |
| I | Backup for B. Roblox Studio catches I before the game sees it, so use B when testing in Studio; I works in a real Roblox client |
| Drag an item | Move it |
| R while dragging | Rotate the item |
| Drag a weapon to the active slot under the grid | Wield it. Any size fits; a weapon already there swaps back to the grid |
| Drag off the panel | Drop the item at your feet. Only during a round in the dungeon; in the lobby or while a loading screen is up, the item eases back into place |
| Click food, a potion or a bandage | **Use** it with a real animation: food is eaten, a potion is drunk from the bottle, a bandage wraps the arm, so you can't spam them. <span class="tag draft">Draft</span>: the full clip must play, at 40% move speed; any hit, Space or click cancels it with no heal; cooldowns potion 8 s, bandage 6 s, food 4 s. See [Inventory](inventory.md#using-items) |
| Hold E | Take from a loot box, pick up, or open a shop. Our own **E tag** floats over the thing and fills while you hold; there's no Roblox popup. If a pickup fails, the reason shows under the crosshair: arrows need a quiver and bolts need a bolt case |
| Lobby: **Edit pack & vault** button | Rearrange your pack and move gear to or from the vault |

Tab does nothing.

### Companions <span class="tag decided">In prototype</span> { #companions }

| Input | Action |
|-|-|
| G | Cycle your companion's command: Follow, Hold, Fetch, Attack <span class="tag draft">Draft</span> (G is an unconfirmed default) |
| Command buttons in the bottom-left panel | Tap to pick Follow, Hold, Fetch or Attack |
| Hold E on your companion | **Patch up** a hurt companion, or **Revive** a downed one (2 s) |

See [Companions](companions.md#prototype).

### Shops <span class="tag decided">In prototype</span> { #shops }

| Input | Action |
|-|-|
| Hold E on a keeper | Open the shop. The camera eases to a framed shot of the keeper and their stall |
| Mouse wheel, Left/Right arrows, L1/R1 or d-pad | Move between wares. Scrolling past the last ware returns to the overview |

The ware in focus gets a gold chevron and the green or red compare hint. The round clock keeps running. See [Shopkeepers](shopkeepers.md#shop-screen).

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
| Hold E during a cutscene (hold X on a gamepad) | Skip it (from 1 s in). See [Events and cutscenes](events.md#cutscenes) |
| Hotbar weapon key | Weapon on the hotbar. Q is taken by the spider break-free, so this needs another key <span class="tag open">Open</span> |
| 1 to 4 | Hotbar items |

## Gamepad <span class="tag decided">In prototype</span> { #gamepad }

Built in the Studio prototype; untested in play. Buttons use Xbox names; PlayStation uses the same positions. On-screen prompts switch to pad button names while a pad is in use.

### Fighting and moving { #gamepad-fighting }

| Button | Action |
|-|-|
| RT | Attack from your stance. **Tap** for a light attack, **hold** for a heavy |
| LT | **Guard** your stance; time it to **parry** |
| D-pad | Stance: **up** high, **down** low, **left or right** middle |
| B | Dodge |
| A | Jump |
| Y | **Special ability** when Resolve is full. See [Combat](combat.md#abilities) |
| X | Interact (loot, pick up, shops, companion). **Hold** to skip a cutscene, **mash** to break free of a latched spider or a boss's hook |
| RB | Swap between melee and ranged. With a ranged weapon out, RT draws and LT steadies your aim |
| LB | Open or close the bag |
| R3 (click the right stick) | Focus lock on an enemy |
| L3 (click the left stick) | Command your companion |
| View | Open or close the trail map. In the lobby it toggles the menu cursor |

### Bag { #gamepad-bag }

A **gold ring** is the cursor in the bag. The left stick moves it freely and the D-pad moves it one cell at a time.

| Button | Action |
|-|-|
| A | Pick an item up, or set it down |
| X | Eat or drink the item under the ring |
| Y | Rotate the item you're holding |
| B | Put the held item back, or close the bag |

### Moment of respite { #gamepad-respite }

The same **gold ring** moves over your own grid: the left stick moves it freely and the D-pad moves it one cell at a time. A small line under the Ready button lists these controls.

| Button | Action |
|-|-|
| A | Pick a piece up, or set it down |
| Y | Rotate the held piece |
| B | Put the held piece back |
| X | Ready up |

### Other screens { #gamepad-screens }

Shops, the loot screen and cutscene choices use Roblox's controller cursor: the left stick moves it and **A** clicks.

## Mobile <span class="tag draft">Planned</span>

The stance buttons are in the prototype; the rest is planned, from the combat and HUD designs.

| Input | Action |
|-|-|
| Three stance buttons on the right edge | High, middle and low stance <span class="tag decided">In prototype</span> |
| Guard button | Guard your stance, and parry when timed |
| Dodge button | Dodge |
| Tap the minimap | Full map (clicking it already works on desktop) |
| Companion pill: tap | Cycle companion orders |
| Companion pill: hold | Open the 4-way order wheel |
