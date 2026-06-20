# Benefits infographic (AR / EN / FR)

Raster infographics for the benefits section. **EN** is the master template; **AR** is generated from EN via OpenAI image edit (`dall-e-2` preferred, falls back to `gpt-image-1`).

| File | Language | Source |
|------|----------|--------|
| `benefits-infographic-en.png` | English | `source.png` |
| `benefits-infographic-ar.png` | Arabic | `benefits-infographic-en.png` |
| `benefits-infographic-fr.png` | French | `benefits-infographic-en.png` |

Regenerate Arabic only:

```bash
set OPENAI_API_KEY=your_key
python scripts/generate-benefits-infographic.py ar --source benefits-infographic-en.png
```

Section background is **white** (`#fff`) to match the image. Push `.webp` files to `main` for jsDelivr.
