import { motion } from "framer-motion";
import { Cloud, Database, GitBranch, Layers3, Sparkles } from "lucide-react";
import SectionShell from "../components/layout/SectionShell";
import { portfolioProfile } from "../data/portfolio";

const categoryIcons = {
  "AI & Machine Learning": Sparkles,
  "Full Stack Engineering": Layers3,
  Languages: Database,
  "Cloud & Deployment": Cloud,
  "Workflow Tools": GitBranch,
};

function SkillsSection() {
  const { skills } = portfolioProfile;
  const categoryCount = skills.categories.length;
  const hasOddCount = categoryCount % 2 !== 0;

  return (
    <SectionShell id="skills" className="relative py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
      >
        <p className="eyebrow mb-4">{skills.eyebrow}</p>
        {skills.heading ? (
          <h2 className="section-heading mb-5">{skills.heading}</h2>
        ) : null}
        {skills.description ? (
          <p className="section-lead">{skills.description}</p>
        ) : null}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-6xl"
      >
        <div
          className="pointer-events-none absolute -top-10 right-4 hidden h-24 w-24 rounded-full bg-gradient-to-br from-brand-primary/15 to-brand-secondary/10 blur-3xl sm:right-8 md:block"
          aria-hidden
        />

        <div className="group relative overflow-hidden rounded-3xl border border-brand-border bg-white shadow-soft transition duration-500 hover:-translate-y-0.5">
          <div className="grid grid-cols-1 divide-y divide-brand-border md:grid-cols-2 md:divide-x md:divide-y-0">
            {skills.categories.map((category, index) => {
              const Icon = categoryIcons[category.title] || Database;
              const isLastOddItem =
                hasOddCount && index === categoryCount - 1;

              return (
                <div
                  key={category.title}
                  className={`p-4 sm:p-6 md:p-8 ${
                    isLastOddItem ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`flex min-w-0 items-start gap-3 sm:gap-4 ${
                      isLastOddItem
                        ? "md:mx-auto md:max-w-xl"
                        : ""
                    }`}
                  >
                    <div className="mt-0.5 shrink-0 rounded-2xl bg-brand-primary/10 p-3 text-brand-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-brand-secondary sm:text-xl">
                        {category.title}
                      </h3>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-brand-border bg-brand-light px-2.5 py-1 text-xs font-medium text-brand-text sm:px-3 sm:text-sm"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}

export default SkillsSection;
