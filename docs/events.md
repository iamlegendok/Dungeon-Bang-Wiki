# Events and cutscenes

Everything on this page is <span class="tag draft">Draft</span> (v0.2, 2026-10-02) except the cinematic look, which is decided. NPCs never attack you during a cutscene. The defaults below are not confirmed yet. Each round's events sit in the special rooms described on [Dungeon floors](dungeon.md).

## Safe cutscenes <span class="tag draft">Draft</span> { #cutscenes }

A cutscene is a short scripted camera moment: letterbox bars and a subtitle or two. While it plays you are **Sheltered**.

### While you're Sheltered

- **Nothing can hurt you.** Every hit on you is thrown away: melee, arrows, rocks, traps, poison and bleed ticks.
- **Nothing targets you.** Enemies can't pick you as a target.
- **Enemies near you freeze.** Any enemy within 40 studs of you or the scene's focus is *Held*: it stops and idles warily. Fliers hover. A swing already in motion finishes but can't hit.
- **Shots in flight fizzle.** An arrow or rock heading for you drops harmlessly; a missed arrow can still be picked up.
- **You can't act.** Stances, attacks, guard, dodge, ranged, bag and eating are locked. A meal in progress pauses and picks up where it left off.
- **The 3:00 clock pauses** for the whole party, like on the loading screen. Everything that runs on the round clock pauses with it: food aging, poison, moldy food's bonus HP and the 45 s Hurt-part heal. At most **30 s** of cutscene pause per round; after that scenes stay safe but the clock keeps running.

### Getting out

- **Skip:** hold **E** for 0.6 s (phone: hold the Skip button), from 1 s in.
- **Steady:** when the camera comes back you get control at once but stay Sheltered for **1.5 s**. Enemies closer than 8 studs step back to 8 studs, and Held enemies wake when Steady ends. Swinging, shooting or throwing ends Steady early.
- **Hard stop:** a scene always ends at its length + 2 s, if the player leaves, or when the round ends.

### Not an escape button

- **Not mid-fight.** A scene only starts when nobody has hit, swung at or aimed at you in the last 2 s and no enemy within 12 studs is mid-attack. Otherwise it waits: a cage says "Not while fighting", and a room scene plays as soon as you're clear.
- **Once each.** Every scene plays once per player per match.
- **Round end wins.** Clock at 0 or taking the stairs ends any scene.
- **No cutscenes in the finale fight**, except the boss or PvP intro, where everyone is Sheltered.

### How it looks <span class="tag decided">Decided</span> { #cinematic }

Cutscenes are **cinematic**: shots cut and slowly push in, the camera closes on the speaker's face, and there are letterbox bars and **typed subtitles** with the speaker's name in gold. No sparkles. Two to four shots, ending back on your own view.

The Storyteller tells a two-line tale for each story, and the hostage, the Prince, the Fallen Knight, the altar and the thief speak too. It's **text only** until audio uploads reopen on 28 October.

During cutscenes and in shops there are **no first-person arms**. Shopkeepers and cutscene NPCs **die like other NPCs**: a death clip, then the body sinks; they never just fade out. The HUD hides except the clock, which shows a small pause mark. Party members outside the scene see "*Name* is watching a scene" under the clock.

## Events <span class="tag draft">Draft</span> { #events }

Each round rolls a few special rooms; violet props appear only in these. Clearing an event gives **+1 loot luck next round** (luck pushes chest rarity up, capped at +5).

| Event | From round | What happens | Reward | Cutscene |
|-|-|-|-|-|
| Hostage | 1 | A caged person or animal, guarded, off the fast route. Hold E to free once the guards are dead | "Join me" (takes your companion slot) or "Go home" (+1 loot luck) | 4 s: the cage opens, thanks, then the choice (10 s; Go home if you don't pick) |
| Gold Rush | 1 | An urn bursts into silverlings that vanish after 15 s | The coins you grab (10% chance of a goldling) | 2.5 s: the urn bursts |
| Treasure Thief | 1 | A goblin who steals your carried silver if you have any; otherwise he bolts and you chase him. You must **capture** him. He never spawns silver and never tumbles. <span class="tag draft">Draft</span>: hold E for 0.5 s within 6 studs, or bring him to 0 HP; he escapes after 20 s | Your silver back, or a drop | 2.5 s: the thief spots you and runs |
| Ambush | 2 | Doors bar shut, 3 waves of this round's enemies | A bonus chest, one rarity up | 3 s: doors slam, enemies pour in after Steady |
| Cursed Altar | 2 | Offer 15 HP (needs more than 20 HP) for a roll | A random Epic or better item; 25% it's one of the 3 cursed [trinkets](trinkets.md) instead | 3 s: the altar wakes |
| Trap Gauntlet | 3 | Cross a hall of timed spikes to a key, then open the chest at the far end | Key chest | 3 s: the camera runs along the spikes |

**How many:** events = rooms / 10 (1, 1, 2, 2, 3, 3 by round) and hostages = rooms / 12 (1, 1, 1, 2, 2, 3). Hostages and the story room sit off the fast route. The old Wandering Merchant event is dropped because the [shopkeepers](shopkeepers.md) cover it. The Gaoler's hostage tip marks next round's hostage room on your trail map.

## Stories <span class="tag draft">Draft</span> { #stories }

A **Storyteller** appears **once per match**, in one random round from 1 to 3, near the route. Hold E to hear a tale that promises an event in one room of the **next round**. That room has violet props and its own 5 s entrance cutscene. The whole party gets the same story. Skipping the tale still makes the promise; it just doesn't tell you what it is.

| Story | From round | The promise |
|-|-|-|
| The Prisoner Prince | 2 | Rescue a royal hostage for +3 loot luck instead of +1. He can't join you |
| The Collapsing Vault | 2 | A vault of chests; 20 s to loot it before it seals |
| The Lost Caravan | 3 | A caravan selling Legendary gear for goldlings |
| The Dragon's Egg | 4 (Draft) | Defend a nest and egg through waves; it hatches a Dragon Whelp companion |
| The Fallen Knight | 4 | Duel a cursed knight alone (others are kept out) for his Epic blade |

### How each story plays { #story-rooms }

- **The Prisoner Prince:** he's scared in the cage and relieved when freed. 2 to 4 guards (one elite from round 3) around a royal cage. Kill them and hold E: everyone there gets +3 loot luck and he walks out.
- **The Collapsing Vault:** 3 to 5 chests, each one rarity up. You have 20 s, with rumbles at 10 and 5. When it seals, anyone inside is shoved out and takes 15 damage; unopened chests are lost.
- **The Lost Caravan:** 3 Legendary items (Epic if the round has none), goldlings only, at 1.5x shop price. It leaves after 60 s.
- **The Dragon's Egg**: defend a nest and its egg through waves. <span class="tag draft">Draft</span>: round 4, the doors bar, the egg has 160 to 320 HP and cracks at 66% and 33%. Three waves come, and most of each wave goes for the egg. It hatches if it survives. The whelp goes to the best defender with a free companion slot; if nobody has one, the egg leaves an Epic chest. See [Companions](companions.md#prototype).
- **The Fallen Knight:** the first player in duels him alone behind a barrier (420 to 640 HP, parries like an elite). Win and you get an Epic weapon. Lose and he kneels back down, and nobody else may try.

## Loot luck <span class="tag draft">Draft</span> { #loot-luck }

Luck you earn this round pays out **next round** (capped at +5) and counts for the chests you open. With no luck in round 1, chests roll 50% common, 30% uncommon, 14% rare, 5% epic and 1% legendary. Each point of luck moves the odds about as much as 0.8 of a round. It's the same formula as the Blender prototype.

## Open

- Should cutscenes pause the 3:00 clock (current default) or keep it running?
- Should Steady push enemies back, or let them wake where they stood?
- More event ideas?
