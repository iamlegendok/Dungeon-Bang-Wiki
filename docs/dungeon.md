# Dungeon floors

![Depth 1 floor with route, rooms and pacing](assets/img/dungeon/depth1.jpg)

Every floor is generated from a seed by a small, engine-free generator (`dungeon_gen.py`, Roblox stud units), so the same data can drive Roblox Parts later.

## Floor rules

| Rule | Value | Status |
|-|-|-|
| Rounds per match | 6 | <span class="tag decided">Decided</span> |
| Time per round | 3:00, shared by every depth reached in the round. Stairs never reset or add time | <span class="tag decided">Decided</span> |
| Rooms per floor | 9, 15, 21, 27, 33, 39 | <span class="tag decided">Decided</span> |
| Shopkeepers, mini events, hostages | On every map | <span class="tag decided">Decided</span> |
| Going deeper | Stairs take you straight to the next depth, on the same clock | <span class="tag decided">Decided</span> |
| Clock runs out | What you keep and where the next round starts | <span class="tag open">Open</span> |

!!! success "How floors grow (Cob, 2026-10-01)"
    "3x larger" means a linear base of 3, 5, 7, 9, 11, 13 rooms, multiplied by 3. It is **not** exponential growth.

## Rooms, corridors and walls <span class="tag decided">Decided</span> { #rooms-and-walls }

From Cob, 2026-10-01, while building the Roblox Studio prototype:

- **Rooms are bigger and polygon-shaped**, not plain rectangles.
- **Corridors are longer.**
- **Walls use PBR materials** (proper surface textures, not flat colours).
- **Walls never intersect** each other.
- **Walls vary in shape**, with pillars and trim, rather than being plain boxes.

!!! success "Cob, 2026-10-01, on the Studio rework"
    "Now that is a dungeon." The point is that each round's map feels big, with a lot to explore.

### Studio prototype values

These are the values Cob approved in the Roblox Studio prototype.

| Part | Value |
|-|-|
| Room size | 36 to 60 studs across (up from 20 to 32 in the blockout) |
| Ceiling | 16 studs, with lintels over doorways |
| Room shapes | Each room rolls an octagon, a hexagon, irregular cut corners or a slanted shape, with angled, mitred walls |
| Corridors | Up to about 4x longer than the blockout, each with its own lamps |
| Fastest route | About 70 s to the stairs on the biggest floor, out of the 3:00 round, which also has to cover any deeper floors |

## Building blocks <span class="tag draft">Draft</span>

- Tile grid of 4 studs per tile, 12-stud walls, 8-stud-wide corridors. These are the original Blender blockout values; the Studio prototype above has bigger rooms, taller ceilings and longer corridors.
- Rooms sit in a slot grid joined by a random tree; deeper floors add extra loops.
- Enemy tier rises from 1 to 3 with depth, and chest rarity odds improve.
- If a floor's nearest stairs is more than 75 s of walking away, extra stairs are added (`MULTI_EXIT`). At the current sizes it never triggers.

### Room roles

| Room | Where it appears |
|-|-|
| Start | Every floor |
| Fight | Most rooms |
| Treasure | Dead ends |
| Heal shrine | Depth 2 and deeper |
| Elite guard | The room guarding the stairs, depth 3 and deeper |
| Stairs | The room farthest from the start |
| Shopkeeper | One shop room per round, a 30% chance of a second from round 3. See [Shopkeepers](shopkeepers.md) |
| Mini event | About 1 per 10 rooms |
| Hostage | About 1 per 12 rooms, caged and guarded off the fast route |
| Storyteller | Once per match, in one random round from 1 to 3 <span class="tag decided">Decided</span> |
| Story room | One per floor, off the fast route, from floor 2 <span class="tag draft">Draft</span> |

![New room types](assets/img/dungeon/room_types.jpg)

### Shopkeepers, events and hostages <span class="tag decided">Decided</span> to exist, details <span class="tag draft">Draft</span>

<div class="grid" markdown>

![Shopkeeper](assets/img/dungeon/shop.jpg){ width="32%" }
![Mini event](assets/img/dungeon/event.jpg){ width="32%" }
![Hostage cage](assets/img/dungeon/hostage.jpg){ width="32%" }

</div>

- **Shopkeepers:** eight keepers, each in certain rounds, with rolled stock. They take silverlings, goldlings or Robux. See [Shopkeepers](shopkeepers.md).
- **Mini events**: Ambush, Cursed Altar, Gold Rush, Treasure Thief, Trap Gauntlet. See [Events and cutscenes](events.md) <span class="tag draft">Draft</span>.
- **Hostages** are caged people or animals. Freeing one gives +1 loot luck next round, or you can ask them to join you as a [companion](companions.md) and give up that bonus.

### Stories <span class="tag decided">Decided</span> { #stories }

!!! success "Cob, 2026-10-01"
    A **story** is a promise that a certain special event will happen in one room **of the next round**. It is not a storyline and not an extra floor.

#### How stories play out <span class="tag draft">Draft</span>

<div class="grid" markdown>

![Storyteller near the route](assets/img/dungeon/storyteller.jpg){ width="49%" }
![Story room](assets/img/dungeon/story_room.jpg){ width="49%" }

</div>

- Floors 1 to 5 each have a **storyteller** near the route who announces the next round's story.
- On the next floor, the story plays out in **one special room off the fast route**.
- Which story comes up is picked from the match seed and round, so everyone in the match gets the same one.

| Story | What happens |
|-|-|
| The Fallen Knight | A 1v1 duel for an Epic blade |
| The Collapsing Vault | 20 s to loot a vault before it caves in |
| The Prisoner Prince | A VIP hostage worth +3 loot luck |
| The Lost Caravan | A caravan that sells Legendary gear |
| The Dragon's Egg | Defend the egg until it hatches into a pet |

## Pacing <span class="tag draft">Draft</span>

In the Studio prototype, the fastest route to the stairs on the biggest floor takes about 70 s of the 3:00. In the earlier Blender blockout, a rush took about 13 s on depth 1 and about 1:30 on depth 6. A full clear (walk the whole tree, every fight, 2 s per chest) is what the timer squeezes.

In the trail-map test walk on a 21-room floor, a player reached the stairs at 2:15 having lit 26% of the floor.

![Depth 3](assets/img/dungeon/depth3.jpg)
![Depth 6](assets/img/dungeon/depth6.jpg)

## First person

![First person on depth 1 with the HUD](assets/img/dungeon/first_person.jpg)

## Open

??? question "What happens when the clock runs out?"
    The stairs take you deeper on the same 3:00 clock (decided). Still open: what you keep when the 3:00 runs out, and which depth the next round starts at.

