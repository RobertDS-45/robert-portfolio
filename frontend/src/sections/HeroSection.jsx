import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import profileImage from "../assets/roby-profile-image-optimized.jpg";
import SectionShell from "../components/layout/SectionShell";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function HeroSection({ portfolioProfile }) {
  const { name, title, intro, focusAreas, hero } = portfolioProfile;

  return (
    <SectionShell
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center pt-[calc(6.25rem+env(safe-area-inset-top,0px))] pb-14 xs:pt-[calc(7rem+env(safe-area-inset-top,0px))] xs:pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 -right-8 h-48 w-48 rounded-full bg-blue-100 mix-blend-multiply blur-3xl opacity-20 xs:h-56 xs:w-56 sm:top-20 sm:right-10 sm:h-72 sm:w-72"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-24 -left-10 h-52 w-52 rounded-full bg-indigo-100 mix-blend-multiply blur-3xl opacity-15 sm:bottom-40 sm:left-10 sm:h-80 sm:w-80"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full min-w-0 max-w-6xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="mb-5 flex justify-start xs:mb-6 sm:mb-8"
        >
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-brand-border bg-white/50 px-3 py-1.5 backdrop-blur-sm xs:px-4 xs:py-2">
            <div className="h-2 w-2 shrink-0 rounded-full bg-brand-primary" />
            <span className="text-left text-[0.7rem] font-medium leading-snug text-brand-text xs:text-xs sm:text-sm">
              {hero.badge}
            </span>
          </div>
        </motion.div>

        <div className="flex min-w-0 flex-row items-start gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:items-center lg:gap-12 xl:gap-14">
          <motion.div variants={itemVariants} className="shrink-0">
            <div className="relative">
              <div
                className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-brand-primary/30 to-brand-primary/5 blur-sm xs:-inset-1 xs:rounded-2xl"
                aria-hidden
              />
              <div className="relative flex items-center justify-center overflow-hidden rounded-xl border-2 border-white bg-brand-light shadow-lg ring-1 ring-brand-border/80 xs:rounded-2xl h-[6.25rem] w-[4.75rem] xs:h-[7.5rem] xs:w-24 sm:h-[9.5rem] sm:w-32 md:h-48 md:w-40 lg:h-56 lg:w-52 xl:h-[15rem] xl:w-56">
                <img
                  src={profileImage}
                  alt={`${name} — professional portrait`}
                  width={224}
                  height={280}
                  className="max-h-full max-w-full h-auto w-auto object-contain object-center"
                />
              </div>
            </div>
          </motion.div>

          <div className="min-w-0 flex-1 text-left">
            <motion.p variants={itemVariants} className="eyebrow mb-2 xs:mb-3 sm:mb-4">
              {name}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="mb-3 text-[1.35rem] font-bold leading-[1.12] tracking-[-0.03em] text-brand-secondary text-balance xs:mb-4 xs:text-[1.65rem] sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              {title}
              {hero.highlight ? (
                <span className="block bg-gradient-to-r from-brand-primary to-brand-primary/70 bg-clip-text text-transparent">
                  {hero.highlight}
                </span>
              ) : null}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="section-lead mb-4 max-w-2xl xs:mb-6 sm:mb-8"
            >
              {intro}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mb-6 flex flex-wrap gap-2 xs:mb-8 xs:gap-2.5 sm:mb-10 sm:gap-3"
            >
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-brand-border bg-white/60 px-2.5 py-1 text-[0.6875rem] font-medium text-brand-text backdrop-blur-sm transition duration-300 hover:border-brand-primary hover:bg-brand-primary/10 xs:px-3 xs:py-1.5 xs:text-xs sm:px-4 sm:py-2 sm:text-sm"
                >
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex w-full max-w-md flex-col gap-3 xs:gap-4 sm:max-w-none sm:flex-row sm:items-center"
            >
              <a href="#projects" className="btn-primary">
                Explore Work
                <ArrowRight size={18} className="shrink-0" />
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}

export default HeroSection;
