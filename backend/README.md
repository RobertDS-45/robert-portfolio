# FastAPI Backend for Robert's Portfolio

This folder contains a FastAPI backend that exposes the same endpoints as the original Express API so the React/Vite frontend remains compatible.

Endpoints:
- `GET /api/portfolio` — returns `{ data: portfolioProfile }`
- `GET /api/health` — returns `{ status: "ok" }`

Run locally (Windows):

```
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 4000
```

Render startup command:

```
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```
