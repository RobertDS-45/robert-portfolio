from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .core.config import settings
from .routers import profile

app = FastAPI(title="Portfolio API (FastAPI)")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(profile.router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Portfolio FastAPI backend. Use /api/portfolio and /api/health."}
