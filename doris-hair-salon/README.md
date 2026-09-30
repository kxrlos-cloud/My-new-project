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

**Option B — simple static server** (recommended so ES modules load cleanly in all browsers)

```bash
cd doris-hair-salon
python3 -m http.server 8080
```

Then visit <http://localhost:8080>.

## Structure

```
doris-hair-salon/
  index.html
  css/styles.css
  js/main.js
  js/gallery.js
  js/gallery-data.js
  README.md
```

## Notes

- Book CTAs and the floating WhatsApp button open `wa.me/254724780932`.
- Gallery images are Unsplash stand-ins, lazy-loaded, with lightbox + filters.
- Placeholders (services prices, hours, address text, testimonials, about history) are clearly labelled in the UI.
