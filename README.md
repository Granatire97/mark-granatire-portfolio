# Mark Granatire — Portfolio

Personal portfolio site for **Mark Granatire Jr**: data science, software development, and sports analytics. Single-page layout with smooth navigation, animated sections, and a live NHL standings sample powered by the public NHL web API.

## Live site

[Portfolio](https://markgranatirejr.io/)

## Features

- **Hero** — Introduction, social links ([GitHub](https://github.com/Granatire97), [LinkedIn](https://www.linkedin.com/in/mark-granatire-jr/)), email, and resume download.
- **About** — Portfolio goals and focus (technical depth, sports domain, polished presentation).
- **Skills** — Grouped expertise: data engineering, analytics & modeling, software & visualization.
- **Sample tool** — **2025–26 NHL standings** table fed by [NHL web API](https://api-web.nhle.com) data (`src/services/nhlApi.js`).
- **Projects** — Highlights including capstone (NHL player value & salary modeling), HALO hackathon (defensive chaos / tracking), and [2021 Big Data Cup app](https://github.com/Granatire97/2021-bdc-app).
- **Experience** — Appian (current), srcLogic, DICK’S Sporting Goods internship.
- **Education** — M.S. Data Science (Loyola Maryland), B.S. Information Science & Technology (Penn State).
- **Contact** — Email and profile links.

## Data Pipeline (NHL Standings Tool)

1. Data Ingestion
- Fetch standings from NHL API (api-web.nhle.com)

2. Data Transformation
- Flatten nested JSON into tabular format
- Select key metrics: GP, W, L, OT, PTS, GD
- Normalize team naming and abbreviations

3. Data Delivery
- Processed data passed into React table component
- Rendered via reusable UI components

4. Refresh Strategy
- Data fetched on page load
- Designed to support scheduled daily refresh (future improvement)

## Tech stack

| Area | Tools |
|------|--------|
| UI | [React](https://react.dev/) 19 |
| Build | [Vite](https://vitejs.dev/) 8 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 4 (`@tailwindcss/vite`) |
| Motion | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |

Optional / listed in `package.json` but not used in current source: [AG Grid](https://www.ag-grid.com/) (community + React packages).

## Project structure

```
my-portfolio/
├── public/              # Static assets (favicons, SVGs, etc.)
├── src/
│   ├── assets/          # Images (hero, project screenshots)
│   ├── pages/           # Section components (Navbar, Hero, About, …)
│   ├── services/        # NHL API client (nhlApi.js)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # Tailwind entry (@import "tailwindcss")
├── services/            # NHL API client (nhlApi.js)
├── data/                # Data transformation layer (transformStandings.js)
├── index.html
├── vite.config.js       # React + Tailwind; dev/preview proxy for NHL API
├── package.json
└── eslint.config.js
```

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended; aligns with Vite 8)

## Getting started

```bash
git clone https://github.com/Granatire97/mark-granatire-portfolio
cd my-portfolio
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve `dist/` locally (includes NHL proxy like dev) |
| `npm run lint` | Run ESLint |

## NHL API and Data Access

The NHL API does not consistently allow direct browser requests due to CORS and redirect behavior.

To handle this, a serverless API route is implemented for production deployment. This proxy layer:
- Fetches standings data from the NHL API
- Returns structured JSON to the frontend
- Prevents client-side CORS issues

In development, requests may be made directly or via a Vite proxy for convenience.

**Important for production:** A static upload of `dist/` alone does **not** include that proxy. For a public deploy you typically need one of:

- Host on a platform that lets you add **rewrite/proxy rules** to the NHL API, or  
- A small **serverless function** that proxies `/nhl/*`, or  
- Rely on direct API calls only if CORS and redirects behave acceptably in your environment.

Adjust `src/services/nhlApi.js` and your host config to match whatever approach you choose.

## Deploying to GitHub Pages (optional)

1. Set `base` in `vite.config.js` if the site is not at the domain root, e.g. `base: '/my-portfolio/'` for `https://<user>.github.io/my-portfolio/`.
2. Run `npm run build` and publish the `dist/` output (GitHub Actions “upload artifact” pattern, or `gh-pages` branch).
3. Configure the NHL proxy or API strategy as above so standings work in production.

## License

Private / personal portfolio — no license file is included. Add one (e.g. MIT) if you open-source the repo and want to specify terms.

---

Built with React, Vite, and Tailwind CSS.
