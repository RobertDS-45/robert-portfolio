from dotenv import load_dotenv
import os

load_dotenv()


class Settings:
    def __init__(self):
        self.PORT = int(os.getenv("PORT", "4000"))
        raw_origins = os.getenv(
            "CORS_ORIGINS", "http://localhost:5173,https://robert-portfolio-green.vercel.app"
        )
        self.CORS_ORIGINS = [o.strip() for o in raw_origins.split(",") if o.strip()]
        self.VERCEL_URL = os.getenv("VERCEL_URL", "")

        if self.VERCEL_URL and self.VERCEL_URL not in self.CORS_ORIGINS:
            self.CORS_ORIGINS.append(self.VERCEL_URL)


settings = Settings()
