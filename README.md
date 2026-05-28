# GJ Global Enterprises — Import & Export Website

Multi-page static website for GJ Global Enterprises, a Vellore-based import & export business. Built with plain HTML, CSS, and JavaScript — no build step, no dependencies.

## What's Included

- **Multi-page layout**: Home, Services, Trade, Gallery, About, Contact (+ Thank You)
- **Mobile-first responsive design** with polished hamburger menu
- **SEO**: per-page meta descriptions, Open Graph + Twitter cards, JSON-LD structured data, sitemap.xml, robots.txt
- **Trust & conversion**: floating WhatsApp button, testimonials, trust strip, CTA banners, accreditation cards
- **Performance**: lazy-loaded images, preconnect to CDN, cache headers configured for Netlify and Vercel
- **Accessibility**: skip-link, ARIA labels, keyboard-navigable modal gallery, focus styles
- **Contact form**: Web3Forms-powered, with Thank You confirmation page

## Project Structure

```
import-export-website/
├── index.html          # Home (hero, services teaser, testimonials, stats, CTA)
├── services.html       # Services + Supply Chain Management + Logistics
├── trade.html          # Import & Export details + product categories
├── gallery.html        # Full product gallery with image modal
├── about.html          # Company story + stats + accreditations
├── contact.html        # Contact form + business info
├── thank-you.html      # Form submission confirmation
│
├── style.css           # All styling (single shared stylesheet)
├── script.js           # Nav, modal, form, fade-in, counters, scroll-top
│
├── sitemap.xml         # Search engine sitemap
├── robots.txt          # Crawler instructions
├── netlify.toml        # Netlify config (redirects, headers, cache)
├── vercel.json         # Vercel config (cleanUrls, redirects, headers)
├── package.json        # Local dev tooling
│
├── logo/               # Brand assets
├── picture/            # Logistics & hero imagery
├── Gallery/            # Product gallery images
│
├── README.md           # This file
├── QUICKSTART.md       # Fast deployment guide
├── DEPLOYMENT.md       # Detailed deployment
└── INTEGRATIONS.md     # Form/CRM/analytics integrations
```

## Page Map

| Page          | Purpose                                  | Key Sections                                    |
|---------------|------------------------------------------|-------------------------------------------------|
| `index.html`  | Landing & conversion                     | Hero, trust strip, services teaser, testimonials, about-teaser, CTA |
| `services.html` | Service catalog & process              | Core services grid, SCM process, logistics      |
| `trade.html`  | Import/export specifics                  | Trade cards (export/import), product categories |
| `gallery.html` | Visual catalog                          | 12-image gallery, modal viewer                  |
| `about.html`  | Company credibility                      | Story, stats, accreditations (MSME/IEC/GST)     |
| `contact.html` | Lead capture                            | Form with enquiry type, phone/email/address     |

## Run Locally

```bash
# Python (any version)
python -m http.server 8000

# Node
npx http-server -p 8000

# Then visit:
# http://localhost:8000
```

Or just double-click `index.html` — pure static, no server strictly required.

## Deploy

The site is pre-configured for both Netlify and Vercel. Drag-and-drop the folder to either platform, or connect a GitHub repo. See [QUICKSTART.md](QUICKSTART.md) for step-by-step instructions.

After deploying, both platforms expose clean URLs:
- `/services` → `services.html`
- `/trade` → `trade.html`
- `/gallery` → `gallery.html`
- `/about` → `about.html`
- `/contact` → `contact.html`

Legacy URLs from the previous single-page version (`/products`, `/scm`) redirect to the right anchor on the new site.

## Things You'll Want to Update

The site ships with placeholder values for production-only details. Search for these and replace:

1. **Canonical domain** — every page has `<link rel="canonical">` and `og:url` pointing at `https://gjglobalenterprises.com/`. Update if your real domain differs.
2. **Sitemap URL** — `sitemap.xml` and `robots.txt` reference the same domain.
3. **Testimonials** ([index.html](index.html)) — three placeholder client quotes (Rajesh Kumar, Sara Al-Mansouri, James Tan). Replace with real customers when available.
4. **Accreditation registration numbers** ([about.html](about.html)) — the cards say "MSME Registered / IEC Approved / GST Registered" but you can add actual reg numbers under each `<small>` line for stronger trust signals.
5. **WhatsApp number** — currently hard-coded as `+91 9600610294` (used in `wa.me/919600610294` links). Search & replace if it changes.
6. **OG image** — falls back to `logo/GJ.jpeg`. A 1200×630 banner image would render better on social previews.

## Tech Notes

- Single shared `style.css` (~1k lines, CSS custom properties for theming).
- Single shared `script.js` — auto-detects current page from URL, adds `.active` class to nav, scopes gallery/modal/stats/form code so it no-ops on pages without those elements.
- Font Awesome 6.4 loaded from CDN (no local copy).
- Contact form uses Web3Forms (free tier, no backend required).
- Brand color is `--accent-color: #1e40af` (blue). The original near-black variables remain for the dark sections (`--dark-bg`, `--darker-bg`).

## Performance

- All gallery and content images use `loading="lazy"`.
- CSS and JS get `Cache-Control: public, max-age=604800` (one week).
- Images under `Gallery/`, `picture/`, `logo/` get `max-age=31536000` (one year, immutable).
- `<link rel="preconnect">` for the Font Awesome CDN.

## Security Headers

Configured in `netlify.toml` and `vercel.json`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` restricts geolocation/microphone/camera (Netlify only)

## Browser Support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). IE11 is not supported.

## License

Free to use for the GJ Global Enterprises business. No attribution required.

---

**Last updated:** 2026-05-28
