# Mission Institute of Technology — Website

A static landing page for Mission Institute of Technology. Built with plain HTML, CSS, and JavaScript. No frameworks, no build process.

## Project Structure

```
├── index.html          # Main page
├── styles.css          # All styles
├── script.js           # Scroll animations, nav, mobile menu
├── assets/
│   ├── banner.png      # Hero banner artwork (place your file here)
│   └── course-poster.png  # Networking Zero to Hero poster (place your file here)
└── README.md
```

## Setup

1. Place your two image files in the `assets/` folder:
   - `banner.png` — the Mission Institute banner art (recommended: 1200×400 or similar wide format)
   - `course-poster.png` — the Networking Zero to Hero course poster (recommended: 800×1000 or similar portrait format)

2. That's it. Open `index.html` in a browser to preview locally.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g., `mission-institute`)
2. Push all files to the `main` branch:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mission-institute.git
git push -u origin main
```

3. Go to **Settings → Pages** in your repository
4. Under **Source**, select **Deploy from a branch**
5. Choose `main` branch and `/ (root)` folder
6. Click **Save**
7. Your site will be live at `https://YOUR_USERNAME.github.io/mission-institute/` within a minute or two.

## Customization

- **Colors**: Edit CSS variables at the top of `styles.css` under `:root`
- **Copy**: Edit text directly in `index.html`
- **Links**: Replace placeholder YouTube, Discord, and email URLs in `index.html`
- **Fonts**: The site uses Google Fonts (Instrument Serif, DM Sans, DM Mono) — loaded from CDN, no install needed

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS custom properties, IntersectionObserver, and backdrop-filter.

## License

© 2025 Mission Institute of Technology
