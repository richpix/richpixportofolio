# richpix - Portfolio Site

## Tech Stack
- Vanilla JavaScript (no framework, no build system)
- Plain CSS with custom properties for theming
- Google Fonts: Nunito (body), JetBrains Mono (code/roles)

## Architecture

### Styling
- All styles in `css/style.css`
- Neumorphic design system via CSS variables in `:root`
- Theme variables use `[data-theme="dark"]` selector on `<html>`

### i18n
- Keys in `js/i18n.js` (`es` / `en` objects)
- Elements use `data-i18n="key"` attribute
- Applied via `applyI18n()` in `js/script.js`

### JavaScript Files
- `js/i18n.js` - translation strings
- `js/data.js` - skills and projects data
- `js/script.js` - main logic: render, modal, i18n toggle, theme toggle, form validation

### Theme System
- `currentTheme` stored in `localStorage` ('light' | 'dark')
- `applyTheme()` sets `data-theme` on `<html>` and updates toggle SVG icon
- Toggle button in nav with id `themeToggle`, icon has id `themeIcon`

### Modal System
- Project cards call `openModal(idx)` on click
- Modal uses `modalOverlay`, `modalBox`, `modalMedia`, etc.
- Gallery navigation via `galleryIndex` and `goGallery()`

### Contact Form
- Uses FormSubmit (external service): `https://formsubmit.co/pool.ricardo.1fm@gmail.com`
- Form validation in `js/script.js` before submission

## Commands
- No build/test commands (static site)
- Accessibility linting: `npx hint .` (requires Node.js)

## Notes
- No `package.json` - not a Node.js project
- `index.html` contains inline JSON-LD structured data
- Meta tags include Open Graph and hreflang for i18n
