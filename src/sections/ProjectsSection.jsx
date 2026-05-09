import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  CircleCheckBig,
  Clock3,
  ExternalLink,
  Github,
  Layers3,
  Sparkles,
  Trophy,
} from "lucide-react";
import SectionShell from "../components/layout/SectionShell";
import { portfolioProfile } from "../data/portfolio";

const placeholderIcons = [BrainCircuit, Layers3, Sparkles, Trophy];

function ProjectsSection() {
  const { projects } = portfolioProfile;

  return (
    <SectionShell id="projects" className="relative py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.12),transparent_60%)] blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <p className="text-sm font-medium uppercase tracking-[0.32em] text-brand-primary/80">
          {projects.eyebrow}
        </p>
        <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {projects.heading}
        </h2>
        <p className="mt-5 text-base leading-8 text-brand-muted sm:text-lg">
          {projects.description}
        </p>
      </motion.div>

      <div className="relative z-10 mt-14 grid gap-6 lg:grid-cols-2">
        {projects.items.map((project, index) => {
          const PlaceholderIcon = placeholderIcons[index] ?? BrainCircuit;
          const isInProgress = project.status?.toLowerCase() === "in progress";
          const hasLiveDemo = Boolean(project.liveHref);

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.14 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-panel group relative overflow-hidden p-5 sm:p-6"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="h-full w-full bg-[linear-gradient(135deg,rgba(96,165,250,0.1),transparent_50%,rgba(139,92,246,0.12))]" />
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%)]" />
                  <div className="relative flex h-56 items-center justify-center sm:h-64">
                    <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/80">
                      {projects.labels.preview}
                    </div>
                    <div
                      className={`absolute right-6 top-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md ${
                        isInProgress
                          ? "border-amber-400/30 bg-amber-400/10 text-amber-100"
                          : "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
                      }`}
                    >
                      {isInProgress ? (
                        <Clock3 className="h-3.5 w-3.5" />
                      ) : (
                        <CircleCheckBig className="h-3.5 w-3.5" />
                      )}
                      {isInProgress ? projects.labels.inProgress : projects.labels.completed}
                    </div>
                    <div className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/10 text-white shadow-[0_0_40px_rgba(96,165,250,0.16)] backdrop-blur-md transition duration-500 group-hover:scale-105 group-hover:rotate-3">
                      <PlaceholderIcon className="h-9 w-9" />
                    </div>
                    <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/45 px-3 py-1.5 text-xs text-white/75 backdrop-blur-md">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      {isInProgress ? projects.labels.comingSoon : projects.labels.snapshot}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-brand-muted sm:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-brand-text/85 transition duration-300 hover:border-brand-primary/30 hover:bg-brand-primary/10 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-brand-primary/75">
                    <Trophy className="h-4 w-4" />
                    {projects.labels.achievements}
                  </div>
                  <div className="mt-4 space-y-3">
                    {project.achievements.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm leading-7 text-brand-text/80"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-brand-primary shadow-[0_0_12px_rgba(96,165,250,0.85)]" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={project.githubHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-brand-text transition duration-300 hover:-translate-y-1 hover:border-brand-primary/30 hover:bg-white/10 hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    {projects.labels.github}
                    <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>

                  {hasLiveDemo ? (
                    <a
                      href={project.liveHref}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-primary/30 bg-[linear-gradient(135deg,rgba(59,130,246,0.85),rgba(124,58,237,0.88))] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(96,165,250,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(96,165,250,0.28)]"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {projects.labels.liveDemo}
                      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  ) : (
                    <span
                      className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold ${
                        isInProgress
                          ? "border-amber-400/30 bg-amber-400/10 text-amber-100"
                          : "border-white/12 bg-white/5 text-brand-text/80"
                      }`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      {isInProgress ? projects.labels.progressCta : projects.labels.soonCta}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}

export default ProjectsSection;
