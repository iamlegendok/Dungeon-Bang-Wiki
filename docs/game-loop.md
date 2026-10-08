# Game loop

<div class="db-widget" data-widget="loop"></div>

## A match

??? info "Step by step"

    | Step | What happens | Status |
    |-|-|-|
    | Lobby | Pick a class, rearrange your pack, move gear and coin between pack and vault, shop. | <span class="tag decided">Decided</span> |
    | Queue | Auto queue near your level, or launch your own party with a 5-character invite code. Parties of up to 4. | <span class="tag decided">Decided</span> |
    | Depths 1 to 6 | Freshly generated floors, one per depth. A round is one 3:00 clock shared by every depth you reach; the stairs never reset or add time. | <span class="tag decided">Decided</span> |
    | Moment of respite | 30 s to rearrange gear before the boss. | <span class="tag decided">In prototype</span> |
    | Boss | A boss scaled to player count and the party's total level. No clock: it ends on a win or a wipe. | <span class="tag decided">In prototype</span>; formula is <span class="tag draft">Draft</span> |
    | Loot screen | All four seats and what each survivor carried out, then back to the lobby. | <span class="tag decided">In prototype</span> |
    | Out | Survivors keep everything and gain a level. There's no PvP after the boss for now. | <span class="tag decided">Decided</span> |

### Moving between floors

<span class="tag decided">Decided</span> One round is a single 3:00 clock. Taking the stairs to a new depth **does not reset the timer or add time**, so every depth you reach in a round shares that 3:00.

<span class="tag open">Open</span> What happens when the 3:00 runs out (do you keep your loot, and where does the next round start)? How the 6 depths split across rounds is also not pinned down yet.

## Persistence

![Persistent loop](assets/img/loop/persistent_loop.jpg)

<span class="tag decided">Decided</span>

- **The game is persistent.** Surviving a match carries you, your gear and your companion into the next match.
- **Level = dungeon runs survived.** Matchmaking groups players by level and the boss scales with the party's total level.
- **Hard death.** Dying anywhere means you lose all loot, restart in the basic starter gear, and your level goes back to **zero**. Your companion dies with you, pets included.
- **Coin in the vault is safe.** Silverlings and goldlings you bring out alive are banked in the vault and survive a hard death. Coin still in your pack does not.
- **Paid revive.** You can pay with gear to be revived for the next match, and a friend can pay that gear for you.
- **Leaving early.** Leaving a match early twice in one progression costs a small coin penalty, which can be cleared with Robux.

<span class="tag draft">Planned</span> Saving between sessions and levels aren't in the prototype yet.

### Inside a match

- Broken bones carry into the next round but not into the next match. Surviving a match heals everything. <span class="tag decided">Decided</span>
- At 0 HP you are only downed (and revivable) if you have a human companion that can heal. Otherwise it is a hard death. <span class="tag decided">Decided</span>
- Rescuing a hostage gives +1 loot luck on the next round. <span class="tag decided">Decided</span>

See [Lobby, queue and shop](lobby.md) for the queue rules, [Combat](combat.md) for downed and injuries, and [Companions](companions.md) for who can revive you.

## Still open

??? question "Does PvP come back?"
    The original pitch ended with players fighting each other. For now the boss ends the match and there's no PvP.

??? question "Does a surviving companion level up too?"
    The companion draft assumes it carries over and gains a level. Unconfirmed.
