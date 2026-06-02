# Robert Mwakamela Portfolio

<p align="center">
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge" /></a>
  <a href="https://vite.dev"><img src="https://img.shields.io/badge/Vite-6-1B1B1F?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite Badge" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-3-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8" alt="Tailwind Badge" /></a>
  <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-Animation-0F172A?style=for-the-badge&logo=framer&logoColor=ffffff" alt="Framer Motion Badge" /></a>
</p>

<p align="center">
  A premium personal portfolio website showcasing data science, AI/ML, dashboards, and full-stack development.
</p>

## Overview

This repository contains a React/Vite frontend and a separate Python FastAPI backend. The backend serves the portfolio data API independently from the frontend.

## Current architecture

- `frontend/` — React/Vite application with environment-based API configuration.
- `backend/` — FastAPI backend implementation.
- Legacy Node/Express backend files have been removed so only the new FastAPI implementation remains.

## Tech Stack

- React
- Vite
- Tailwind CSS
- FastAPI
- Uvicorn
- python-dotenv

## Local setup

### Backend

1. Open a terminal and run:

```powershell
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

2. Start the FastAPI backend:

```powershell
uvicorn app.main:app --reload --port 4000
```

### Frontend

1. Open another terminal and run:

```powershell
cd frontend
npm install
npm run dev
```

2. Open the app in your browser:

```text
http://localhost:5173
```

The frontend uses `frontend/.env.development` to set `VITE_API_URL=http://localhost:4000` during development.

## Environment configuration

- `frontend/.env.development` — local development backend URL.
- `frontend/.env.production` — production backend URL.
- `frontend/.env.example` — example frontend env file.
- `backend/.env.example` — example backend env file.

## API endpoints

- `GET /api/portfolio` — returns `{ data: portfolioProfile }`
- `GET /api/health` — returns `{ status: "ok" }`

## Deployment

### Render backend

1. Create a Render Web Service and connect this repository.
2. Use the start command:

```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

3. Add Render environment variables:
- `CORS_ORIGINS` — comma-separated allowed origins (include your Vercel frontend URL).
- `VERCEL_URL` — optional, your frontend Vercel URL.

### Vercel frontend

This repo now includes a `vercel.json` at the root, so Vercel will build the `frontend/` folder instead of the repository root.

1. In Vercel, go to your frontend project settings.
2. Add `VITE_API_URL` with value:

```text
https://your-backend-service.onrender.com
```

3. Redeploy the project.

## Removing old Vercel-only deployment

If you no longer want the old frontend-only deployment:

- Recommended: update the existing Vercel project environment variables and redeploy.
- To delete the project entirely: Vercel Dashboard → Projects → select project → Settings → Danger Zone → Delete Project.

## Folder structure

```text
roby-portfolio/
├── backend/
│   ├── app/
│   │   ├── core/
│   │   ├── data/
│   │   ├── routers/
│   │   ├── main.py
│   │   └── __init__.py
│   ├── requirements.txt
│   ├── render.yaml
│   ├── README.md
│   └── .env.example
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   └── ui/
│   │   ├── config/
│   │   ├── pages/
│   │   ├── sections/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.development
│   ├── .env.production
│   ├── .env.example
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── README.md
└── README.md
```

## Notes

- The current backend source is under `backend/app`.
- Duplicate legacy backend code has been removed.
- The frontend now uses environment-driven API calls via `frontend/src/config/api.js`.

## Contact

**Robert Mwakamela**  
Email: robertmwakamela2045@gmail.com
