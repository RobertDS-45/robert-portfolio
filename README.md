# Robert Mwakamela Portfolio

<p align="center">
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge" /></a>
  <a href="https://vite.dev"><img src="https://img.shields.io/badge/Vite-6-1B1B1F?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite Badge" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-3-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8" alt="Tailwind Badge" /></a>
  <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-Animation-0F172A?style=for-the-badge&logo=framer&logoColor=ffffff" alt="Framer Motion Badge" /></a>
</p>

<p align="center">
  A premium personal portfolio website for showcasing data science, AI/ML engineering, dashboard systems, and full-stack development work.
</p>

## Overview

This project is the personal portfolio of **Robert Mwakamela**, a **Data Scientist & Full-Stack Developer** focused on building AI-powered systems, intelligent dashboards, machine learning solutions, and scalable web applications.

The portfolio is designed with a modern SaaS-inspired visual style using a dark theme, glassmorphism UI, smooth motion effects, and responsive layouts for mobile, tablet, and desktop devices.

## Features

- Premium Hero section with animated gradients, social links, and call-to-action buttons
- Professional About section with biography, highlights, and animated stats
- Categorized Skills section with tech icons and animated progress bars
- Projects showcase with status badges, tech stack tags, and achievement highlights
- Contact section with email, phone, social links, and footer
- Responsive design optimized for mobile, tablet, and desktop
- Smooth animations powered by Framer Motion
- Reusable component structure for easy scaling and maintenance

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/RobertDS-45/roby-portfolio.git
```

2. Move into the project folder:

```bash
cd roby-portfolio
```

3. Install dependencies:

```bash

## Backend Migration (FastAPI)

This repository was migrated from a minimal Node/Express backend to a production-ready Python FastAPI backend. The FastAPI app lives under `backend/app` and is designed to be deployed separately (for example, on Render) while the frontend remains hosted on Vercel.

Key points:
- The frontend fetches data from an API at `VITE_API_URL` (see `frontend/.env.*`).
- The FastAPI endpoints preserve the original JSON shapes:
  - `GET /api/portfolio` -> `{ data: portfolioProfile }`
  - `GET /api/health` -> `{ status: "ok" }`
- Original Node/Express sources are backed up at `backend/backup_node`.

### Running locally (frontend + backend)

1. Start FastAPI backend:

```bash
cd backend
python -m venv venv
# Windows
venv\Scripts\activate
# mac/linux
# source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 4000
```

2. Start frontend (Vite):

```bash
cd frontend
npm install
npm run dev
```

Frontend dev will use `frontend/.env.development` which sets `VITE_API_URL=http://localhost:4000`.

### Deploy backend to Render

1. Create a new Web Service on Render and connect this repository.
2. Set the Build and Start commands (Render will detect Python):

Start command:
```
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

3. Add environment variables on Render (Settings → Environment):
- `CORS_ORIGINS` — comma-separated origins (include your Vercel URL)
- `VERCEL_URL` — your Vercel frontend URL (optional)

### Update Vercel (frontend) to use the Render backend

1. In the Vercel dashboard, open your frontend project → Settings → Environment Variables.
2. Add `VITE_API_URL` with value `https://<your-render-service>.onrender.com` for Production.
3. Trigger a redeploy (Deployments → Redeploy) so the build includes the new env var.

### Removing / destroying the previous Vercel-only deployment

You have two safe options:

- Recommended (update and reuse): Update the Vercel project to set `VITE_API_URL` to the new backend and redeploy — this preserves history and is reversible.
- To fully remove the old deployment:
  1. Go to Vercel Dashboard → Projects → select the project.
  2. Settings → Danger Zone → Delete Project.
  3. Confirm deletion. (This permanently removes deployments and preview history.)

If you only want to stop serving the frontend from Vercel without deleting the project, you can disable automatic deployments or remove the Git integration.

### Files added/modified during migration
- `backend/app/` — FastAPI application and routers
- `backend/requirements.txt` — Python deps
- `backend/render.yaml` — Render service manifest (example)
- `frontend/src/config/api.js` — centralized API base URL
- `frontend/.env.development`, `frontend/.env.production`, `frontend/.env.example`
- `backend/backup_node/` — original Node/Express backup

If you want me to update this README further (add screenshots, CI steps, or a deploy checklist), tell me which details to expand.
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local app in your browser:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```
Starts the Vite development server.

```bash
npm run build
```
Builds the app for production.

```bash
npm run preview
```
Previews the production build locally.

## Folder Structure

```text
roby-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   ├── data/
│   ├── pages/
│   ├── sections/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Deployment

This project can be deployed easily to modern frontend hosting platforms such as:

- Vercel
- Netlify
- GitHub Pages

### Production Build

```bash
npm run build
```

The optimized output will be generated in the `dist/` folder.

### Example Vercel / Netlify Flow

1. Push the project to GitHub
2. Import the repository into Vercel or Netlify
3. Use the default build command:

```bash
npm run build
```

4. Use the default publish directory:

```text
dist
```

## Screenshots

Add project screenshots here after deployment or UI updates.

### Hero Section

```text
[ Screenshot Placeholder ]
```

### About / Skills

```text
[ Screenshot Placeholder ]
```

### Projects / Contact

```text
[ Screenshot Placeholder ]
```

## Project Highlights

- AI/ML portfolio presentation with premium UI styling
- Strong focus on dashboards, analytics, and scalable digital systems
- Built with reusable React components and maintainable data-driven content
- Designed to present technical skills and project credibility clearly to recruiters and collaborators

## Contact

**Robert Mwakamela  
Data Scientist & Full-Stack Developer  
Dar es Salaam, Tanzania

- Email: [robertmwakamela2045@gmail.com](mailto:robertmwakamela2045@gmail.com)
- Phone: `+255755644875` / `+255652968815`
- GitHub: [RobertDS-45](https://github.com/RobertDS-45)
- LinkedIn: [robert-mwakamela-ds](https://www.linkedin.com/in/robert-mwakamela-ds)

## License

This project is for personal portfolio use. You may adapt the structure for inspiration, but the content and branding belong to Robert Mwakamela.
