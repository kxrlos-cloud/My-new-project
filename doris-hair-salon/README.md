# Doris Hair Salon — first-look prototype

Static HTML/CSS/JS prototype for client design review.

## Open locally

**Option A — open the file**

```bash
# macOS
open doris-hair-salon/index.html

# Linux
xdg-open doris-hair-salon/index.html
```

Or double-click `doris-hair-salon/index.html` in your file browser.

**Option B — simple static server**

```bash
cd doris-hair-salon
python3 -m http.server 8080
```

Then visit <http://localhost:8080>.

## Netlify

Repo root `netlify.toml` sets `publish = "doris-hair-salon"` so previews serve this site (not the root demo HTML files).

## Structure

```
doris-hair-salon/
  index.html
  css/styles.css
  images/          # real client photos
  js/main.js
  js/gallery.js
  js/gallery-data.js
  README.md
```

## Notes

- Book CTAs and the floating WhatsApp button open `wa.me/254724780932`.
- Hero + gallery use real client work photos (lazy-loaded gallery with lightbox + filters).
- Placeholders remain for service prices, clock hours, street address text, testimonials, and about history.

## Future work

**Owner braids / product browse (deferred).** The salon owner also has a separate braids / hair-product business. Later, this site should offer a place to browse those products — cross-promotion only, not the homepage focus. Do not invent a catalog or prices; wait for real product photos/names and an explicit request to build. See project note `docs/doris-future-braids-shop.md` in the agent store / tracked GitHub issue on this repo.
