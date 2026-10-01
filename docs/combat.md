# Combat and injuries

!!! success "Cob's brief (2026-10-01)"
    Very skill based and survival strained. Per-body-part damage is part of it: a broken hand means a weaker weapon, both hands broken means occasional missed swings, legs make you slower, feet make you stumble, and a head injury causes random blackouts or needing more food.

**Decided by Cob (2026-10-01):**

1. Hunger is a draining meter: you need food. Food lives on inventory layer 1.
2. Broken bones carry into the next round, not into the next match.
3. At 0 HP you get revived only if you have a human companion that can heal.
4. Swings are directional.
5. The penalties are harsh enough for now.

Everything else on this page is <span class="tag draft">Draft</span>: numbers are starting points for playtests.

## Health model

![Body damage](assets/img/combat/body_damage.jpg)

- One HP bar (100) decides life and death. Ten zones: head, torso, 2 arms, 2 hands, 2 legs, 2 feet (the R15 parts, grouped).
- A hit takes HP times the zone multiplier and adds the same amount to that zone's injury meter.
- A meter half full is **Hurt**, full is **Broken**.
- Armor protects only its own zone, cuts damage there, and stops blades from breaking that zone while it holds.

| Zone | HP multiplier | Injury meter |
|-|-|-|
| Head | x2 | 30 |
| Torso | x1 | 60 |
| Arm | x0.75 | 35 |
| Hand | x0.5 | 20 |
| Leg | x0.75 | 40 |
| Foot | x0.5 | 20 |

**Damage types:** slash causes bleeding on bare zones; blunt does 1.5x injury and breaks through armor; pierce does x2.5 to the head and ignores 30% of armor.

## Injury effects

| Zone | Hurt | Broken | Both broken |
|-|-|-|-|
| Head | Edges darken, hunger 1.5x | Blackouts of ~1 s every 30 to 60 s, hunger 2x, minimap flickers | n/a; a heavy blunt hit = 2 s knockdown |
| Torso | Stamina regen -25% | Max stamina -40%, sprint cough you can hear | n/a |
| Arm | That arm 15% slower, blocks cost more | Can't block with it, two-handers 40% slower | No blocking, light one-handers only |
| Hand | Weapon -15% damage | Weapon -40% damage, no shield or bow in it | 1 in 5 swings miss, items 2x slower |
| Leg | Walk -10% | Walk -30%, no sprint, dodge becomes a sidestep | Crawl at 25% speed, no dodge |
| Foot | Loud footsteps | 15% stumble (0.6 s) on sprint, dodge or hard turn | 30% stumble, no sprint |

Loud footsteps also widen how far enemies hear you.

## Treatment and hunger

![Healing and hunger](assets/img/combat/healing_hunger.jpg)

| Treatment | Effect |
|-|-|
| Rest while Fed | A Hurt zone heals after 45 s out of combat |
| Bandage | Stops bleeding and heals one Hurt zone (2 s) |
| Splint | Broken becomes Splinted (4 s, standing; a companion can apply it) |
| Potion | HP only |
| Heal shrine | 5 s channel, full heal, once per player per shrine |
| Shop bonesetter | Gold, fixes one Broken zone |
| Stairs | Heal Hurt zones; Broken and Splinted zones carry into the next round |
| Surviving the match | Heals everything <span class="tag decided">Decided</span> |

**Hunger** runs 0 to 100, full to empty in about 6 minutes of normal play, faster when sprinting, fighting or head-injured.

| State | Food | Effect |
|-|-|-|
| Fed | over 60 | Natural healing works |
| Peckish | 30 to 60 | No natural healing |
| Starving | under 30 | Half stamina regen |
| Empty | 0 | -1 HP every 2 s |

Food: bread +30, dried meat +50, hearty stew +80 with 2x healing (shop), monster meat +40 with a 25% chance of getting sick. Food takes space on [inventory](inventory.md) layer 1, so every ration competes with armor.

## Downed at 0 HP

- **With a human companion that can heal:** you go down for 20 s (crawl only, can't fight). The companion runs to you and revives you at 25 HP with your zones unchanged. If it is downed or dead first, or 20 s pass, it's a hard death.
- **With a pet or no companion:** instant hard death.
- <span class="tag assumed">Assumed</span> every human companion can heal (Porter and Squire), using a bandage from its own grid; without one it can't revive.

## Fighting skill

![Fighting skill](assets/img/combat/fighting_skill.jpg)

- **Swing direction picks the zone:** a slash targets that side's arm, hand or torso, a low sweep targets the legs and feet, a thrust hits whatever is under the crosshair, and an overhead targets the head or chest. **Overheads only come from the Q high guard toggle**, which turns every swing into an overhead, so you never look at the ceiling to swing high (Cob, 2026-10-01). Flick down for a low sweep, left or right to slash, keep still to thrust; a flick up falls back to the nearest slash or a thrust. In the prototype the direction is read from the mouse flick in the 0.14 s before the click, under 8 px of movement is a thrust, and a release within 0.35 s is a light hit <span class="tag draft">Prototype values</span>. Hold to charge a heavy and release to strike (in the prototype the charge pose holds for as long as the button is down): +60% damage, 2x injury, but parryable.
- **Desktop:** flick the mouse and click to swing (see [Controls](controls.md#fighting)), click with a still mouse to thrust, Q for the high guard; hold right mouse to block; Space plus a direction to dodge.
- **Mobile:** an attack pad. Tap to thrust, swipe off it for a directional swing, hold for a heavy. Block and dodge buttons. Thrusts snap to the nearest zone in a small cone.
- **Enemy swing timing:** 0.45 s wind-up with a glint, 0.15 s hit, 0.40 s recovery. A **parry** is block pressed in the 0.2 s before impact: no damage, no stamina, and the attacker is staggered for 0.8 s.
- Block stops 80% from the front; the rest chips the shield arm. Dodge has 0.25 s of invincibility.
- **Stamina** 100, refills 20/s after 0.8 s idle. Light swing 10 to 15, heavy 30, blocked hit 15, dodge 25, sprint 8/s, parry free. Empty stamina means no block or dodge and swings 30% slower.
- Enemies and the boss use the same zones.

### Enemy guard <span class="tag decided">In prototype</span> { #enemy-guard }

Enemies can raise a guard. The tell is obvious: the weapon comes up across the body, a steel-white outline appears and a soft clink plays. The guard lasts about 0.7 to 0.9 s.

| You hit the guard with | What happens |
|-|-|
| A light swing | You get parried: pushed back, no swings for 0.8 s, and the enemy gets a free counter |
| A heavy (hold left click, then release) | The guard breaks: the enemy reels and takes 1.5x damage for a moment |

The timings and multiplier are prototype values from the Studio build and may change.

### Parries and disarms <span class="tag decided">In prototype</span> { #disarms }

!!! success "Cob, 2026-10-01"
    Parried enemies reel, and a parry can randomly knock the weapon out of their hands. It works both ways. A dropped weapon goes back into the same inventory slot when picked up, or the player is told they don't have room.

| You parry | The enemy | Disarm chance |
|-|-|-|
| A light attack | Reels for 0.8 s | 10% |
| A heavy attack | Reels for 1.2 s and takes 1.5x damage while reeling | 35% |

- **It works both ways:** if an enemy's guard parries your light swing, there's a 10% chance you lose your sword.
- A disarmed weapon flies **4 to 6 studs**. Until you pick it up you can only dodge.
- **Walk over the weapon** to pick it up. It goes back into the **same pack slot**. If something filled that slot in the meantime, you see "No room" and the weapon stays on the floor.
- Pickup animations are wanted <span class="tag draft">Planned</span>.

All numbers are prototype values.

### Enemy tells and behaviour <span class="tag decided">In prototype</span>

| Tell | What it means |
|-|-|
| Ember glow and a soft growl, about 0.8 s wind-up | **Heavy.** It smashes through a plain block, so parry or dodge it |
| The glint holds longer than usual | **Delayed swing.** Wait for it before you parry |
| A quick glint with no gold parry ring | **Feint.** Don't commit your parry |

- Enemies run a small **learning brain** that adapts to each player's habits during a match.
- **Weaker enemies back off when hurt.**

Timings are prototype values.

## Open

??? question "Which human companions can heal?"
    The draft says all of them, using a bandage from their grid. A dedicated Medic class is the alternative.
