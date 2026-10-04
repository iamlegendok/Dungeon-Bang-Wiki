# About this wiki

This wiki tracks how Dungeon Bang works, system by system.

## Status tags

| Tag | Meaning |
|-|-|
| <span class="tag decided">Decided</span> | Confirmed. |
| <span class="tag draft">Draft</span> | Proposed, with playtest starting numbers. Not confirmed. |
| <span class="tag assumed">Assumed</span> | A working assumption so other systems can move. |
| <span class="tag open">Open</span> | Not decided yet. |

## How it's kept

- When a design changes, the page for that system is updated, and every decision goes into the [Decisions log](decisions.md) with its date.
- When a draft gets confirmed, its tag changes and the question leaves [Open questions](open-questions.md).

## Editing

The site is plain Markdown in `docs/`, built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/). Every push to `main` rebuilds and publishes it through GitHub Actions.

To preview locally:

```
pip install mkdocs-material
mkdocs serve
```

The theme uses the game's shared palette (`docs/assets/css/dungeon.css`) and the logo fonts, Cinzel Decorative and Lilita One (SIL Open Font License).
