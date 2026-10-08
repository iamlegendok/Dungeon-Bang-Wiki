# Dungeon Bang Wiki

How Dungeon Bang works, system by system: decided rules, drafts and open questions.

**Read it:** https://iamlegendok.github.io/Dungeon-Bang-Wiki/

## Editing

Pages are Markdown in `docs/`, built with MkDocs Material. Every push to `main` publishes the site through the `Publish wiki` GitHub Actions workflow.

```
pip install -r requirements.txt
mkdocs serve
```

One-time setup: in the repo's Settings > Pages, set Source to **GitHub Actions**.
