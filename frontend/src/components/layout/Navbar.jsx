import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed inset-x-3 top-[max(0.75rem,env(safe-area-inset-top))] z-50 xs:inset-x-4 sm:top-6"
      >
        <div className="rounded-2xl border border-brand-border/50 bg-white/80 shadow-soft backdrop-blur-md xs:rounded-3xl">
          <div className="flex min-h-12 items-center justify-between gap-2 px-3 py-2.5 xs:min-h-14 xs:px-4 sm:px-8 sm:py-3.5">
            <a
              href="#hero"
              className="shrink-0 text-base font-bold text-brand-secondary xs:text-lg"
            >
              Robert
            </a>

            <div className="hidden items-center gap-1 sm:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-brand-text transition duration-300 hover:bg-brand-primary/10 hover:text-brand-primary lg:px-4"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden sm:block">
              <a
                href="#contact"
                className="ml-2 rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-hover lg:ml-4 lg:px-5"
              >
                Get in Touch
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="ml-auto inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg p-2 text-brand-text transition hover:bg-brand-light sm:hidden"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-2 sm:hidden"
          >
            <div className="rounded-2xl border border-brand-border/30 bg-white px-3 py-4 shadow-md xs:px-4 xs:py-6">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block w-full rounded-lg px-3 py-3 text-left text-base font-medium text-brand-text transition duration-300 hover:bg-brand-primary/10 hover:text-brand-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  className="mt-2 block w-full rounded-lg bg-brand-primary px-4 py-3 text-center text-base font-semibold text-white transition duration-300 hover:shadow-hover"
                  onClick={() => setIsOpen(false)}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm sm:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
      )}
    </>
  );
}

export default Navbar;
