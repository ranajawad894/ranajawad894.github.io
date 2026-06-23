# Muwahid Travels — Website Project

## File Structure

```
muwahid-multi/
├── index.html              ← the actual website — just open this in your browser
├── build.sh                  ← rebuilds index.html from the section files below
├── css/
│   └── style.css           ← all site styling
├── js/
│   └── main.js              ← mobile menu, FAQ accordion, form submission logic
└── sections/
    ├── header.html          ← top bar + navigation
    ├── hero.html             ← homepage hero banner
    ├── trust-strip.html      ← stats bar under hero
    ├── about.html            ← about us section
    ├── packages.html         ← all 5 Umrah package tables
    ├── hotels.html           ← Makkah Hotels + Madina Hotels galleries
    ├── flights.html          ← Gulf air ticket booking form
    ├── why-us.html           ← "why choose us" cards
    ├── testimonials.html     ← customer reviews
    ├── faq.html               ← FAQ accordion
    ├── footer.html            ← site footer
    ├── contact.html           ← contact form + info
    └── whatsapp-float.html    ← floating WhatsApp button
```

This is what you'll see in VS Code's file explorer — a clean, separate file for every section, instead of one giant page.

## ✅ How to view the site

**Just double-click `index.html`.** It opens directly in your browser, no server, no extensions needed — everything (including the Contact and Flight forms) is already included.

## ✏️ How to edit content

Edit the matching file inside `sections/` for whichever part of the page you want to change (e.g. edit `sections/contact.html` to change the contact form, `sections/packages.html` to change Umrah pricing, etc.)

**After editing any file in `sections/`, you must rebuild `index.html`** so your changes actually show up on the page. Run this from inside the `muwahid-multi` folder:

```
bash build.sh
```

This regenerates `index.html` by stitching all the section files together in the right order. Then just open/refresh `index.html` in your browser to see the change.

- To change colors, fonts, spacing: edit `css/style.css` (no rebuild needed — it's linked directly, refresh works instantly).
- To change form behavior or interactive logic: edit `js/main.js` (no rebuild needed either).
- Only changes inside `sections/*.html` need a rebuild, since those get baked into `index.html`.

## Uploading to real hosting

Upload the whole `muwahid-multi` folder (the built `index.html`, plus `css/`, `js/`) to any web host (cPanel, Hostinger, Vercel, Netlify, GitHub Pages, etc.) — it works immediately, no setup needed. The `sections/` folder and `build.sh` are just your editing source files; you don't strictly need to upload them, but it doesn't hurt to either.

## Forms

Both the Contact form and the Flight Quote form submit to **Web3Forms** and deliver messages straight to `info@muwahid.com`. This works once the site is live on a real domain — Web3Forms may block submissions from `file://` (local double-clicked) pages, so test the live, hosted version to confirm delivery.

