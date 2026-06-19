# Portfolio

A simple, modern portfolio website built with **Vite + React + Tailwind CSS**,
deployed to **GitHub Pages** at https://tmedha.github.io/Portfolio.

Pages: **About Me** (home), **My Projects**, **Contact Me**.

## Develop locally

```bash
npm install      # first time only
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Customize

| What | Where |
| --- | --- |
| Your photo | replace `public/profile-placeholder.svg` and update `src/pages/About.jsx` |
| Your bio | `src/pages/About.jsx` |
| Projects (name / image / repo) | `src/data/projects.js` (drop project images in `public/`) |
| Contact links (email / GitHub / LinkedIn) | `src/pages/Contact.jsx` |
| Colors / gradient | `src/App.jsx` (background) and `src/components/Navbar.jsx` |

## Deployment

Every push to `main` triggers the GitHub Actions workflow
(`.github/workflows/deploy.yml`), which builds the site and publishes it to
GitHub Pages.

**One-time setup:** in the GitHub repo, go to **Settings → Pages → Build and
deployment → Source** and select **GitHub Actions**.
