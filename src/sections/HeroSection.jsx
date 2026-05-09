import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import SectionShell from "../components/layout/SectionShell";
import SocialLink from "../components/ui/SocialLink";
import { portfolioProfile } from "../data/portfolio";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function HeroSection() {
  const { name, title, intro, focusAreas, hero, stats, socialLinks, cta } = portfolioProfile;
  const githubProfile = socialLinks.find((link) => link.label === "GitHub")?.href;
  const heroSocialLinks = socialLinks.filter((link) => link.label !== "GitHub");

  return (
    <SectionShell id="hero" className="relative flex min-h-screen items-center py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-16 h-64 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.18),transparent_58%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.2),transparent_60%)] blur-3xl"
      />

      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-16">
        <div className="relative z-10">
          <motion.div
            custom={0.05}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="glass-panel inline-flex items-center gap-3 px-4 py-2 text-sm text-brand-text/90"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/15 text-brand-primary">
              <Sparkles className="h-4 w-4" />
            </span>
            {hero.badge}
          </motion.div>

          <motion.div
            custom={0.15}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="mt-8 space-y-6"
          >
            <p className="text-sm font-medium uppercase tracking-[0.34em] text-brand-primary/80">
              {name}
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] text-white sm:text-5xl lg:text-7xl">
              {title}
              <span className="mt-3 block bg-[linear-gradient(135deg,#93C5FD_0%,#60A5FA_35%,#A78BFA_70%,#E9D5FF_100%)] bg-clip-text text-transparent">
                {hero.highlight}
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
              {intro}
            </p>
          </motion.div>

          <motion.div
            custom={0.25}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            {focusAreas.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-brand-text/85 backdrop-blur-md transition duration-300 hover:border-brand-primary/30 hover:bg-brand-primary/10 hover:text-white"
              >
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            custom={0.35}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href={cta.projectsHref}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-primary/30 bg-[linear-gradient(135deg,rgba(59,130,246,0.9),rgba(124,58,237,0.92))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(96,165,250,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(96,165,250,0.38)]"
            >
              {hero.cta.projectsLabel}
              <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
            </a>

            {githubProfile ? (
              <a
                href={githubProfile}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-brand-text transition duration-300 hover:-translate-y-1 hover:border-brand-primary/30 hover:bg-white/10 hover:text-white"
              >
                {hero.cta.githubLabel}
                <Github className="h-4 w-4 transition duration-300 group-hover:scale-110" />
              </a>
            ) : null}

            <div className="flex items-center gap-3 sm:ml-1">
              {heroSocialLinks.map(({ label, href }) => (
                <SocialLink
                  key={label}
                  href={href}
                  label={label}
                  icon={socialIcons[label]}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(96,165,250,0.2),rgba(15,23,42,0.06),rgba(139,92,246,0.2))] blur-2xl" />
          <div className="glass-panel relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_30%)]" />

            <div className="relative space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-brand-primary/75">
                    {hero.panel.eyebrow}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                    {hero.panel.heading}
                  </h2>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand-primary">
                  <BrainCircuit className="h-5 w-5" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {stats.map(({ label, value }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.4 + index * 0.12 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:border-brand-primary/25 hover:bg-white/[0.06]"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-brand-muted">
                      {label}
                    </p>
                    <p className="mt-3 text-base font-semibold text-white">{value}</p>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-brand-muted">{hero.panel.availabilityLabel}</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {hero.panel.availabilityText}
                    </p>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/15 text-brand-primary">
                    <ArrowDownRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </SectionShell>
  );
}

export default HeroSection;
