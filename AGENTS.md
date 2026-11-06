# Project

Personal homepage for John Babich / babichgh, published at https://babichgh.github.io through GitHub Pages

## Stack and files

- Static HTML, CSS, and vanilla JavaScript; no build step, framework, or package dependencies
- `index.html`: page structure, Russian fallback text, social URLs, and TON wallet address
- `style.css`: Windows 95/98-inspired webcore styling and responsive layout
- `script.js`: Russian/English translations, saved language preference, and clipboard interactions
- `icons.svg`: original pixel-style desktop icon sprite
- `favicon.svg`: original blue-haired pixel anime girl used as the site icon

## Design and content rules

- Preserve the Windows 9x aesthetic: blue desktop, gray panels, blue gradient title bars, beveled controls, and pixel icons
- Do not return to the earlier purple/pink palette or starry background
- Keep the layout responsive and keyboard-accessible, with visible focus and reduced-motion support
- Maintain both Russian and English versions; update matching translation keys in `script.js` and Russian fallback text in `index.html`
- Use a hyphen (`-`) instead of an em dash in site copy
- Omit the final period at the end of each text block; keep periods between sentences within the block
- Do not restore the welcome banner, homepage status line, Duolingo disclaimer, top-right Duolingo label, footer slogan, or social-link coming-soon notice
- Keep social URLs directly editable in the HTML anchor `href` attributes
- Preserve the GitHub avatar, language scores, theatre dates, and TON address unless the user requests changes
- Do not invent biographical details or add analytics, cookies, or external runtime dependencies

## Checks

- Run `node --check script.js` and `git diff --check`
- Check that both translation dictionaries have matching keys and that all `data-i18n` keys exist
- Validate local SVG files and their referenced symbols when changing icons
- Preview with `python3 -m http.server 8000` and check desktop and mobile widths when changing layout
- Clipboard copying requires HTTPS or localhost; keep the manual-copy error message
