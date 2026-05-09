import { motion } from "framer-motion";
import { BadgeCheck, DatabaseZap, ScanSearch, Sparkles } from "lucide-react";
import profileImage from "../assets/roby-profile-image-optimized.jpg";
import SectionShell from "../components/layout/SectionShell";
import { portfolioProfile } from "../data/portfolio";

const highlightIcons = [Sparkles, ScanSearch, DatabaseZap];

function AboutSection() {
  const { about, name } = portfolioProfile;

  return (
    <SectionShell id="about" className="relative py-24 sm:py-28">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_25%_25%,rgba(96,165,250,0.24),transparent_42%),radial-gradient(circle_at_80%_78%,rgba(139,92,246,0.24),transparent_36%)] blur-3xl" />
          <div className="glass-panel relative overflow-hidden p-5 sm:p-6">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.04),transparent_35%,rgba(96,165,250,0.06))]" />

            <div className="relative rounded-[1.75rem] border border-white/10 bg-[linear-gradient(160deg,rgba(15,23,42,0.94),rgba(30,41,59,0.82))] p-4 sm:p-5">
              <div className="flex items-center justify-between pb-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.26em] text-brand-primary/80">
                    {about.profileCard.eyebrow}
                  </p>
                  <p className="mt-2 text-base font-medium text-white/90">{name}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-brand-primary shadow-[0_0_18px_rgba(96,165,250,0.14)]">
                  <BadgeCheck className="h-5 w-5" />
                </div>
              </div>

              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto max-w-md"
              >
                <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.28),transparent_65%)] blur-2xl" />
                <div className="absolute -right-4 bottom-12 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.26),transparent_60%)] blur-2xl" />
                <div className="absolute inset-0 rounded-[1.9rem] bg-[linear-gradient(140deg,rgba(96,165,250,0.18),transparent_40%,rgba(139,92,246,0.18))] blur-xl" />

                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-[linear-gradient(180deg,rgba(8,15,33,0.96),rgba(18,28,52,0.96))] shadow-[0_24px_80px_rgba(2,6,23,0.6)]">
                  <div className="absolute inset-[1px] rounded-[1.68rem] border border-white/8" />
                  <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),transparent)]" />

                  <div className="flex min-h-[26rem] items-center justify-center px-4 py-5 sm:min-h-[31rem] sm:px-5 sm:py-6">
                    <img
                      src={profileImage}
                      alt={`${name} profile portrait`}
                      className="max-h-[24rem] w-full rounded-[1.35rem] object-contain object-center sm:max-h-[29rem]"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-brand-primary/80">
              {about.eyebrow}
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {about.heading}
            </h2>
            <div className="space-y-4 text-base leading-8 text-brand-muted sm:text-lg">
              {about.biography.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-3 sm:grid-cols-3"
          >
            {about.highlights.map((item, index) => {
              const Icon = highlightIcons[index];

              return (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-brand-text/90 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-brand-primary/30 hover:bg-brand-primary/10"
                >
                  <Icon className="mb-3 h-5 w-5 text-brand-primary" />
                  <p>{item}</p>
                </div>
              );
            })}
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {about.stats.map(({ label, value, detail }, index) => (
              <motion.article
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: 0.1 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-panel group relative overflow-hidden p-5 sm:p-6"
              >
                <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="h-full w-full bg-[linear-gradient(135deg,rgba(96,165,250,0.12),transparent_55%,rgba(139,92,246,0.12))]" />
                </div>
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-muted">{label}</p>
                  <p className="mt-4 text-3xl font-bold text-white">{value}</p>
                  <p className="mt-3 text-sm leading-7 text-brand-text/75">{detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default AboutSection;
