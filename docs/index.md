# Dungeon Bang

<div class="hero" markdown>
![Dungeon Bang logo](assets/img/logo.png)

A first-person Roblox dungeon crawler. Parties of up to four drop into small randomized dungeons, race a 3-minute clock down through 6 depths, and carry what they find into the next match. Die and you lose it all.
</div>

## The game in one breath

1. **Queue** from the lobby, alone or with a party code. Your level is how many dungeon runs you have survived in a row.
2. **Six depths, one 3:00 clock per round.** Each depth is a fresh, seeded dungeon that grows from 9 rooms to 39, and the stairs never add time. Find the stairs, loot chests, rescue hostages, visit shopkeepers, fight.
3. **Fight with your body, not a health bar.** Swings are directional, every body part can be hurt or broken, and hunger never stops draining.
4. **Pack smart.** Your inventory is three stacked grids: armor and food, weapons, then enchants that power whatever sits beneath them.
5. **Finale.** A boss that scales with the party's size and total level. <span class="tag open">Open</span> whether the player-vs-player fight still happens too.
6. **Persistence.** Survive and everything comes with you, plus a level. Die and it is a hard death: gear gone, level back to zero, starter clothes on.

## Systems

<div class="cards" markdown>
[**Game loop** <span>Match flow, levels, hard death, revives</span>](game-loop.md)
[**Dungeon floors** <span>Generator, room counts, shops, events, hostages</span>](dungeon.md)
[**Boss and finale** <span>Party-scaled boss, PvP question</span>](boss.md)
[**Lobby, queue and shop** <span>Vault, invite codes, silverlings, goldlings and Robux</span>](lobby.md)
[**Controls** <span>Keys, mouse, gamepad and touch, what works today</span>](controls.md)
[**Combat and injuries** <span>Body zones, hunger, parries, stamina</span>](combat.md)
[**Ranged weapons** <span>Bows, crossbow, throwing axes, swaying reticle</span>](ranged.md)
[**Inventory** <span>Three layers, islands, backpacks</span>](inventory.md)
[**Trinkets** <span>21 layer-3 trinkets, tiers I to IV, cursed ones</span>](trinkets.md)
[**Shopkeepers** <span>Eight keepers by round, rolled stock, paying and robbing</span>](shopkeepers.md)
[**Events and cutscenes** <span>Safe cutscenes, event rooms, stories</span>](events.md)
[**Companions** <span>One pet or human NPC, mini grids</span>](companions.md)
[**Enemies** <span>Families by depth, elites, scaling</span>](enemies.md)
[**Map and HUD** <span>Trail map, desktop and phone HUD</span>](ui.md)
[**Classes and characters** <span>Five classes, Roblox rigs, animations</span>](characters.md)
[**Art direction** <span>Arcane over earth, shared palette, title cards</span>](art.md)
[**Decisions log** <span>Everything decided, by date</span>](decisions.md)
</div>

## How to read this wiki

Every rule carries a tag so you can tell what is settled.

| Tag | Meaning |
|-|-|
| <span class="tag decided">Decided</span> | Confirmed. Build on it. |
| <span class="tag draft">Draft</span> | Proposed by a design thread, numbers are playtest starting points. Not confirmed. |
| <span class="tag assumed">Assumed</span> | A working assumption so other systems can move. Needs an answer. |
| <span class="tag open">Open</span> | Nobody has decided yet. Listed on [Open questions](open-questions.md). |

Most of the design is still moving, so most numbers are drafts. When something is decided it lands in the [Decisions log](decisions.md) and the tag on its page changes.
