import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
} from "lucide-react";
import SectionShell from "../components/layout/SectionShell";
import SocialLink from "../components/ui/SocialLink";
import { portfolioProfile } from "../data/portfolio";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

function ContactSection() {
  const { contact, socialLinks, name, title } = portfolioProfile;

  return (
    <SectionShell id="contact" className="relative py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute left-0 top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.14),transparent_62%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.16),transparent_60%)] blur-3xl"
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-brand-primary/80">
            {contact.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {contact.heading}
          </h2>
          <p className="mt-5 text-base leading-8 text-brand-muted sm:text-lg">
            {contact.description}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel relative overflow-hidden p-6 sm:p-7"
          >
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(96,165,250,0.1),transparent_55%,rgba(139,92,246,0.12))]" />
            <div className="relative space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-brand-primary/75">
                    {contact.panel.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{name}</h3>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">{title}</p>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand-primary">
                  <MessageSquareText className="h-5 w-5" />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-brand-muted">{contact.panel.emailLabel}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-white transition duration-300 hover:text-brand-primary"
                >
                  <Mail className="h-4 w-4" />
                  {contact.email}
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-brand-muted">{contact.panel.availabilityLabel}</p>
                  <p className="mt-3 text-sm leading-7 text-brand-text/85">
                    {contact.availability}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-brand-muted">{contact.panel.locationLabel}</p>
                  <p className="mt-3 inline-flex items-center gap-2 text-sm leading-7 text-brand-text/85">
                    <MapPin className="h-4 w-4 text-brand-primary" />
                    {contact.location}
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-brand-muted">{contact.panel.phoneLabel}</p>
                <div className="mt-3 flex flex-col gap-3">
                  {contact.phone.map((number) => (
                    <a
                      key={number}
                      href={`tel:${number}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-brand-text/85 transition duration-300 hover:text-brand-primary"
                    >
                      <Phone className="h-4 w-4 text-brand-primary" />
                      {number}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-brand-muted">{contact.panel.socialLabel}</p>
                <div className="mt-4 flex items-center gap-3">
                  {socialLinks.map(({ label, href }) => (
                    <SocialLink
                      key={label}
                      href={href}
                      label={label}
                      icon={socialIcons[label]}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel relative overflow-hidden p-6 sm:p-7"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_32%)]" />
            <form className="relative space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-brand-muted">Name</span>
                  <input
                    type="text"
                    placeholder={contact.form.namePlaceholder}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-brand-muted/70 focus:border-brand-primary/40 focus:bg-white/[0.07] focus:ring-2 focus:ring-brand-primary/20"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-brand-muted">Email</span>
                  <input
                    type="email"
                    placeholder={contact.form.emailPlaceholder}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-brand-muted/70 focus:border-brand-primary/40 focus:bg-white/[0.07] focus:ring-2 focus:ring-brand-primary/20"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm text-brand-muted">Subject</span>
                <input
                  type="text"
                  placeholder={contact.form.subjectPlaceholder}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-brand-muted/70 focus:border-brand-primary/40 focus:bg-white/[0.07] focus:ring-2 focus:ring-brand-primary/20"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-brand-muted">Message</span>
                <textarea
                  rows="6"
                  placeholder={contact.form.messagePlaceholder}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-brand-muted/70 focus:border-brand-primary/40 focus:bg-white/[0.07] focus:ring-2 focus:ring-brand-primary/20"
                />
              </label>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-primary/30 bg-[linear-gradient(135deg,rgba(59,130,246,0.9),rgba(124,58,237,0.92))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(96,165,250,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(96,165,250,0.34)]"
              >
                {contact.form.submitLabel}
                <Send className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel relative mt-10 overflow-hidden px-6 py-5"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_40%,rgba(96,165,250,0.06))]" />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base font-semibold text-white">{name}</p>
              <p className="mt-1 text-sm text-brand-muted">{contact.footer.note}</p>
            </div>

            <div className="flex flex-col gap-3 text-sm text-brand-text/80 sm:flex-row sm:items-center sm:gap-6">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 transition duration-300 hover:text-brand-primary"
              >
                <Mail className="h-4 w-4" />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone[0]}`}
                className="inline-flex items-center gap-2 transition duration-300 hover:text-brand-primary"
              >
                <Phone className="h-4 w-4" />
                {contact.phone[0]}
              </a>
              <p>{contact.footer.copyright}</p>
              <a
                href="#hero"
                className="inline-flex items-center gap-2 text-brand-primary transition duration-300 hover:text-white"
              >
                {contact.footer.backToTopLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </SectionShell>
  );
}

export default ContactSection;
