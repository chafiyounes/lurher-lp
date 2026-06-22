# Benefits infographic (AR / FR / EN hidden)

Vertical benefit graphics per language. **EN** is kept in the repo but hidden on the live site.

| File | Language | Notes |
|------|----------|--------|
| `benifits-ar.png` / `.webp` | Arabic | Active |
| `benifits-fr.png` / `.webp` | French | Active (default language) |
| `benifits-en.png` / `.webp` | English | Hidden — kept for easy restore |

Legacy infographics live in `old/` (`benefits-infographic-*.webp`).

Regenerate WebP after editing PNGs:

```bash
python -c "from PIL import Image; import sys; s,d=sys.argv[1],sys.argv[2]; Image.open(s).save(d,'WEBP',quality=88,method=6)"
```

Bump `?v=` on image URLs in `src/page.html` after pushing.
