# mapper-youcant

Public landing page assets for YouCan (Hismile V34).

## What's in git

| Path | Purpose |
|------|---------|
| `src/page.html` | Landing page markup |
| `src/styles.css` | Styles |
| `src/script.js` | Behavior + i18n |
| `src/loader.js` | Paste into YouCan footer — fetches `src/*` from GitHub |
| `images/` | Product, hero, contrast, review photos |

## Deploy flow

1. Edit `src/` or `images/`, push to `main`.
2. YouCan footer loader fetches from `raw.githubusercontent.com/chafiyounes/mapper-youcant/main/`.
3. Hard-refresh the store page to bust cache.

Cursor skills, audit scripts, and strategy guides stay **local only** (see `.gitignore`).
