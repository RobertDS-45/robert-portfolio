import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Blocks,
  Bot,
  BrainCircuit,
  Braces,
  Database,
  FileSearch,
  Gauge,
  Globe,
  Layers3,
  LineChart,
  Network,
  PanelTop,
  ServerCog,
  Workflow,
} from "lucide-react";
import SectionShell from "../components/layout/SectionShell";
import { portfolioProfile } from "../data/portfolio";

const skillIcons = {
  Python: Bot,
  "Machine Learning": BrainCircuit,
  XGBoost: Activity,
  "Isolation Forest": Workflow,
  JavaScript: Braces,
  React: Layers3,
  "Data Visualization": LineChart,
  "Dashboard Systems": PanelTop,
  FastAPI: ServerCog,
  "REST APIs": Network,
  "PHP / Yii2": Globe,
  "Web Scraping": FileSearch,
  SQL: Database,
  MongoDB: Blocks,
  "Educational Analytics": BarChart3,
  "Insight Reporting": Gauge,
};

function SkillsSection() {
  const { skills } = portfolioProfile;

  return (
    <SectionShell id="skills" className="relative py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.14),transparent_62%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-40 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.16),transparent_60%)] blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <p className="text-sm font-medium uppercase tracking-[0.32em] text-brand-primary/80">
          {skills.eyebrow}
        </p>
        <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {skills.heading}
        </h2>
        <p className="mt-5 text-base leading-8 text-brand-muted sm:text-lg">
          {skills.description}
        </p>
      </motion.div>

      <div className="relative z-10 mt-14 grid gap-6 xl:grid-cols-2">
        {skills.categories.map((category, categoryIndex) => (
          <motion.article
            key={category.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.7,
              delay: categoryIndex * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="glass-panel group relative overflow-hidden p-6 sm:p-7"
          >
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(96,165,250,0.1),transparent_52%,rgba(139,92,246,0.1))]" />
            </div>

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xl font-semibold text-white">{category.title}</p>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-brand-muted">
                    {category.summary}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-brand-primary transition duration-300 group-hover:border-brand-primary/25 group-hover:bg-brand-primary/10">
                  <SparkClusterIcon index={categoryIndex} />
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skillIcons[skill.name] ?? Activity;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.55,
                        delay: 0.08 + skillIndex * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-brand-primary/30 hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary/12 text-brand-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <p className="truncate text-sm font-semibold text-white">
                              {skill.name}
                            </p>
                            <p className="text-xs font-medium text-brand-text/70">
                              {skill.level}%
                            </p>
                          </div>
                          <div className="mt-3 h-2 rounded-full bg-white/8">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true, amount: 0.4 }}
                              transition={{
                                duration: 0.9,
                                delay: 0.12 + skillIndex * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="h-full rounded-full bg-[linear-gradient(90deg,#60A5FA_0%,#818CF8_55%,#A78BFA_100%)] shadow-[0_0_18px_rgba(96,165,250,0.35)]"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

function SparkClusterIcon({ index }) {
  const icons = [BrainCircuit, PanelTop, ServerCog, Database];
  const Icon = icons[index] ?? BrainCircuit;

  return <Icon className="h-5 w-5" />;
}

export default SkillsSection;
