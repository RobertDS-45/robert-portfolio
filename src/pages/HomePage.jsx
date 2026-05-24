import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";

function HomePage() {
  return (
    <main className="app-shell">
      {/* Soft gradient background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-soft"
      />
      
      {/* Soft blob decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-blob-primary"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-blob-secondary"
      />
      
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default HomePage;
