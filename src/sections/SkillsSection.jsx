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

  return (
    <SectionShell id="skills" className="relative py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center mb-10 sm:mb-12"
      >
        <p className="eyebrow mb-4">{skills.eyebrow}</p>
        {skills.heading && (
          <h2 className="section-heading mb-5">
            {skills.heading}
          </h2>
        )}
        {skills.description && (
          <p className="section-lead">
            {skills.description}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-6xl"
      >
        <div className="pointer-events-none absolute -top-10 right-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand-primary/15 to-brand-secondary/10 blur-3xl" />

        <div className="group relative overflow-hidden rounded-3xl border border-brand-border bg-white shadow-soft transition duration-500 hover:-translate-y-0.5">
          <div className="grid gap-0 lg:grid-cols-2 divide-y divide-brand-border lg:divide-y-0 lg:divide-x divide-brand-border">
            {skills.categories.map((category) => {
              const Icon = categoryIcons[category.title] || Database;

              return (
                <div key={category.title} className="p-4 xs:p-6 sm:p-8">
                  <div className="flex min-w-0 items-start gap-3 xs:gap-4">
                    <div className="mt-1 rounded-2xl bg-brand-primary/10 p-3 text-brand-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#232347]">
                        {category.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                        {category.items.join(" / ")}
                      </p>
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
