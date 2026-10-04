# Boss and finale

![Boss fight](assets/img/boss/boss_fight.jpg)

!!! success "Decided"
    The match ends with a boss that scales with **how many players** are in it **and the total dungeon level of the whole party**. Bring friends, and better gear.

## Moment of respite <span class="tag decided">Decided</span> { #moment-of-respite }

![Moment of respite](assets/img/boss/respite.jpg)

!!! success "Decided"
    After round 6 the boss chamber seals and the party gets **30 seconds** to rearrange gear before the boss. Everyone sees **every inventory**, and every change shows up live.

- **The clock** reads `30s`, `29s`… inside a ring of beads that empties as time runs out, and turns red at 10 s.
- **One seat per player**: their portrait (a live head shot of their character) sits above their class map, with their name, class, level and a pill showing Sorting, Moving, Ready or Fallen.
- **Your gear only.** Drag to move it, R or right-click while dragging to rotate, double-tap to rotate in place. The usual [inventory](inventory.md) rules apply: an item stays inside one island of its own layer.
- **Teammates' moves glide in live** with their name tag, and each one lands in a Party moves feed ("Wren moved Frost Sigil onto Leather Vest").
- **Enchants glow** on whatever they cover, and each map lists the links ("Fire Rune on Iron Chestplate"), so you can watch a teammate's combo land.
- **Layer chips** (All, Armour & food, Weapons, Enchants) fade the other layers so stacked items are easy to grab.
- **You can't walk** while the screen is open.
- **Ready** ends it early once every *living* player has pressed it.
- **Fallen teammates keep their seat**: grey portrait with a skull badge, name struck through, a red Fallen tag and an empty map ("Hard death in round 5. All gear lost."). They watch but can't act, and don't hold up Ready.
- **A player who quits** mid-respite shows as **Left** and stops counting for Ready.
- When it ends, a card says "The respite ends" (or "Everyone is ready") and the boss fight starts.

<span class="tag draft">Draft</span> Teammates' maps are read-only, and there's no trading between players yet.

## Where the boss sits <span class="tag decided">In prototype</span> { #where-the-boss-sits }

1. After round 6 comes the [moment of respite](#moment-of-respite), then the whole party fights the boss together.
2. **The boss round has no clock.** It ends only when you win or every player is dead.
3. Win or wipe, the [loot screen](#loot-screen) follows, then everyone goes back to the lobby.

There's **no PvP after the boss** for now. More than one boss is planned; Morrakhet is the first one built.

## Morrakhet, the Hollow King <span class="tag decided">In prototype</span> { #morrakhet }

![Morrakhet, the Hollow King](assets/img/boss/hollow_king.jpg)

**Morrakhet, the Hollow King, First of the Unburied.** A lich and the dungeon's first king. His court buried him alive under his own throne, and he dragged them all back up with him as the **Unburied Court**: skeleton chess pieces in ashen bone and gold. He stands about 11 studs tall and can't be hit by debuffs.

**The intro.** The gate crashes shut behind the party. A portal tears open over the empty throne and he drops into the seat, lounging with his wrist under his chin. His honour guard of Wardens and Knights steps out of two portals by the dais and lines up in front of him while he brags in old-fashioned speech. On his last line he rises and walks down to fight. Skipping the intro keeps you at the gate until he wakes.

**Every blow warns first.** Each attack from him or his court shows the red edge flush at least 0.6 s before it lands. **Every stun you land on him lasts 10 s**, in every phase.

### His attacks

| Attack | What it does | How to answer |
|-|-|-|
| **Grave Hook** | A chain thrown at the **closest** player. It curves around pillars and never misses. A **GUARD HIGH** or **GUARD LOW** read appears under your crosshair, with an arrow showing where it arrives from | Guard that stance. A parry stuns him 10 s. A teammate can snap a link (1 heavy or 2 light hits), which also stuns him. If you're caught, you're dragged back: **mash Q** (X on a gamepad) 6 times to tear free |
| **Soul Reap** | A wide middle sweep of his hook blade; its arc is drawn on the floor first | Parry it and he's stunned 10 s |
| **Grasping Dead** | A low line of bone hands racing at you | Guard low, or jump |
| **Grave Lob** | Urns, coffins (a Bone Pawn climbs out), statues or braziers thrown at the **farthest** player | Guard high, roll out of the ring, or shoot it while it hangs |
| **Chandelier** | Drops on whoever stands under one | Step out of the shadow |
| **Royal Decree** | A piece's path lights violet and its landing tile gold; 1 s later it moves exactly there | Step off the gold tile or out of the lane |
| **Checkmate** | Below 75%: a soul cage traps one player | Break a wall within 6 s (3 hits from any weapon), or have a teammate break it |
| **Castling** | He swaps places with a Warden near the farthest player, then attacks | Keep track of the Wardens |
| **The Toll** | A bell swings over his head and strikes three times; the dark tiles glow brighter on each strike | Stand on a light tile, or jump, on the third strike |
| **Gambit** | A piece's 3x3 tiles flash red, then it bursts | Guard any stance, dodge, or step out |

### The Unburied Court

| Piece | On a Royal Decree |
|-|-|
| **Bone Pawn** | One step and a spear thrust. A Pawn that reaches the far rank rises as a Bishop |
| **Tower Warden** (rook) | A shield charge down its lane. It can't be parried, so step out of the lane |
| **Gravehorse Knight** | An L-shaped leap that stomps the gold tile. Between decrees it charges (guard low or dodge) and swings its lance (guard middle) |
| **Mourning Bishop** | A bolt down a diagonal that any guard stops. It also raises one fallen piece per rite unless you smash its bone pile |
| **Sabeth, the Widow Queen** | Arrives with the last rite. A dash with both sickles, low then high. She also races across the board like a chess queen, which doesn't hurt anyone |

### Phases

- **Rite of the Hollow** at 75%, 50% and 25%: he blinks to the dais inside a cage of giant ribs and **can't be hurt**. Every portal opens and a wave of the court comes out. The wave grows with the party. Once every piece is dead, the cage shatters and he's stunned 10 s, taking x1.5 damage.
- **Crawl** after the last rite: he climbs a pillar and crawls the vault ribs upside down. A shadow grows under a player, then he drops with a low shockwave: guard low or jump, then hit him while he's down. Shoot a chandelier as he passes to knock him down for 10 s.
- **Weak point:** the soul lantern in his ribs takes x2 damage.
- **Death:** the court freezes, he falls, and his last words go to Sabeth: "Alas, my beloved... when next we meet, 'twill be in flesh, not bone." The court crumbles to ash and the portcullis lifts.

### The Hall of the Unburied

130 studs wide and 182 long, with walls 42 high and a bone vault peaking at 72.

- **One shared gate**, 30 studs wide. A bone portcullis drops behind the party and lifts when he dies.
- **The court floor** is an 8x8 chessboard of 12-stud tiles, so his pieces move like chess pieces.
- **8 pillars** in two rows: cover from his throws, and what he climbs in the crawl phase.
- **Galleries** on both sides, with portals in their walls and stairs down to the court.
- **The dais and the Bone Throne** at the north end, with two more portals.
- **The vault**: bone ribs (his crawl rails) and hanging chandeliers.

### Scaling <span class="tag draft">Draft</span>

His HP is 3,000 x players + 300 x the party's total level. Each rite's wave and the honour guard grow with the number of players.

![Boss card](assets/img/title/boss.jpg)

## Loot screen <span class="tag decided">In prototype</span> { #loot-screen }

When the fight ends, a loot screen shows all four seats before everyone returns to the lobby.

- Each seat shows the player's portrait, level change, status (Survived, Fallen, Left), coins banked, best find, companion and items.
- **Players who were killed get nothing**, and neither do players who left.
- Survivors bank their coins, and their companion comes back to the lobby with them.
- Each player has a **Back to lobby** button. A timer sends the rest back <span class="tag draft">Draft</span> 45 s.
- On a wipe the title reads **The Hollow King Endures**.

## Other boss options <span class="tag draft">Draft</span>

![Boss lineup](assets/img/boss/boss_lineup.jpg)

Three more boss concepts. None of them is built yet.

- **Gorehorn, the Tusk Chief** (mounted). The orc war chief on a giant armoured Tusk Hog, two fights in one. The hog's Hog Charge can't be parried, so dodge it; charging into a pillar stuns it, and each pillar breaks after one charge. Break both front legs or kill the hog and he's thrown, then fights on foot with a Blood Horn that calls Goblin Scrappers.
- **The Silk Mother, Queen of the Webspinners** (hanging). She hangs high on four silk lines tied to floor posts near the walls, dropping on players, lobbing webs and laying egg sacs. Break all four posts and she falls for good, then grabs players in her pincers (mash Q). Her egg clutch takes x2 damage.
- **Greedmaw, the Hoard Mimic** (ambusher). A coin-fat mimic in a treasure vault. Its Tongue Lash swallows your carried silverlings, which come back doubled when it dies. Parrying its Lid Slam stuns it 2 s. Below 50% it burrows and pops up under players, and the chests around the vault wake up as little mimics.


## Open

??? question "Which bosses come next?"
    Morrakhet is the first boss. Gorehorn, the Silk Mother and Greedmaw are concepts, and which ones go in is open.

??? question "Can teammates trade gear during the respite?"
    Not in the first build. Each player can only move their own gear.

??? question "Does PvP come back?"
    The original pitch ended with players fighting each other. For now there's no PvP: the boss is the end of the match.

??? question "Do companions fight in the finale?"
    Open, along with whether a human companion could betray you or be bribed.
