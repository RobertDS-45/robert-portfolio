import { useEffect, useState } from "react";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";
import { API_BASE_URL } from "../config/api";

function HomePage() {
  const [portfolioProfile, setPortfolioProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const loadPortfolio = async () => {
      try {
        const base = API_BASE_URL || "";
        const response = await fetch(`${base}/api/portfolio`);
        if (!response.ok) throw new Error("Portfolio API request failed");

        const json = await response.json();
        if (!cancelled && json?.data) {
          setPortfolioProfile(json.data);
        }
      } catch (error) {
        console.warn("Portfolio API fetch failed.", error);
        if (!cancelled) setApiError(error.message || "API fetch failed");
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    loadPortfolio();

    return () => {
      cancelled = true;
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-brand-secondary">
        Loading portfolio data...
      </div>
    );
  }

  if (apiError) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-red-500">
        Unable to load portfolio data — {apiError}
      </div>
    );
  }

  if (!portfolioProfile) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-brand-secondary">
        No portfolio data available.
      </div>
    );
  }

  return (
    <main className="app-shell">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-soft" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-blob-primary" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-blob-secondary" />

      <HeroSection portfolioProfile={portfolioProfile} />
      <AboutSection portfolioProfile={portfolioProfile} />
      <SkillsSection portfolioProfile={portfolioProfile} />
      <ProjectsSection portfolioProfile={portfolioProfile} />
      <ContactSection portfolioProfile={portfolioProfile} />
    </main>
  );
}

export default HomePage;
