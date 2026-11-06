# babichgh.github.io

Personal Windows 95/98-inspired webcore homepage. Plain HTML, CSS, and JavaScript - no build step. Blue desktop, gray beveled windows, and original pixel-style icons in `icons.svg`.

## Customize

- Edit the `href` attributes on `telegram-link` and `youtube-link` in `index.html` to update social profile URLs.
- Edit Russian and English text in `translations` in `script.js`. The Russian HTML in `index.html` also serves as a fallback without JavaScript.
- Edit the TON wallet address in `index.html` (`id="ton-address"`).
- Colors, layout, and responsive styles are in `style.css`.

The language defaults to Russian for Russian-language browsers and English otherwise. A manual selection is saved locally when browser storage is available. No analytics or cookies.

## Preview

Run `python3 -m http.server 8000` in this directory and open http://localhost:8000.

Publish the repository root through GitHub Pages. Clipboard copying works on HTTPS or localhost; if unavailable, the address can be selected manually.
