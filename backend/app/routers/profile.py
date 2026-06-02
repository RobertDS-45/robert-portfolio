from fastapi import APIRouter
from ..data.portfolio import portfolio_profile

router = APIRouter()


@router.get("/portfolio")
def get_portfolio():
    return {"data": portfolio_profile}


@router.get("/health")
def health_check():
    return {"status": "ok"}
