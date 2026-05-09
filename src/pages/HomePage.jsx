import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";

function HomePage() {
  return (
    <main className="app-shell">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-brand-radial"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-hero-grid bg-grid [mask-image:linear-gradient(to_bottom,rgba(15,23,42,0.95),transparent_85%)]"
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
