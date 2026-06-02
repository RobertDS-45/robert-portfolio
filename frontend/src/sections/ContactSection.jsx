import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import SectionShell from "../components/layout/SectionShell";
import SocialLink from "../components/ui/SocialLink";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  whatsapp: FaWhatsapp,
};

function ContactSection({ portfolioProfile }) {
  const { contact, socialLinks, name } = portfolioProfile;

  return (
    <SectionShell id="contact" className="relative py-16 sm:py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center mb-10 sm:mb-12"
      >
        <p className="eyebrow mb-4">{contact.eyebrow}</p>
        <h2 className="section-heading mb-5">
          {contact.heading}
        </h2>
        <p className="section-lead">
          {contact.description}
        </p>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 grid max-w-3xl grid-cols-1 gap-4 xs:gap-5 sm:grid-cols-2"
      >
        {/* Email */}
        <a
          href={`mailto:${contact.email}`}
          className="card-premium group block space-y-2 p-4 transition duration-300 hover:border-brand-primary/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary xs:p-6 sm:col-span-2"
          aria-label={`Email ${contact.email}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary transition duration-300 group-hover:bg-brand-primary/20">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-muted">
                {contact.panel.emailLabel}
              </p>
            </div>
          </div>
          <p className="text-base font-semibold text-brand-primary underline-offset-4 break-all group-hover:underline xs:text-lg">
            {contact.email}
          </p>
          <p className="text-sm text-brand-muted">
            {contact.panel.emailLinkHint}
          </p>
        </a>

        {/* Phone */}
        <div className="card-premium space-y-3 p-4 xs:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary">
              <Phone className="h-6 w-6" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-muted">
              {contact.panel.phoneLabel}
            </p>
          </div>
          <div className="space-y-2">
            {contact.phone.map((number) => (
              <a
                key={number}
                href={`tel:${number}`}
                className="block text-brand-secondary hover:text-brand-primary transition duration-300 font-medium"
              >
                {number}
              </a>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="card-premium p-4 xs:p-6">
          <div className="flex items-start gap-3 min-w-0">
            <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary mt-0">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-muted mb-2">
                {contact.panel.locationLabel}
              </p>
              <p className="text-brand-secondary font-medium">
                {contact.location}
              </p>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="card-premium border-brand-primary/30 bg-brand-primary/5 p-4 xs:p-6 sm:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-muted mb-2">
            {contact.panel.availabilityLabel}
          </p>
          <p className="text-brand-secondary font-medium">
            {contact.availability}
          </p>
        </div>

        {/* Social Links */}
        <div className="card-premium p-4 xs:p-6 sm:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-muted mb-4">
            {contact.panel.socialLabel}
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href }) => (
              <SocialLink
                key={label}
                href={href}
                label={label}
                icon={socialIcons[label.toLowerCase()] || socialIcons[label]}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="card-premium mx-auto max-w-3xl border-t-2 border-brand-border p-4 xs:p-6 sm:p-8"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold text-brand-secondary">{name}</p>
            <p className="mt-1 text-sm text-brand-muted">{contact.footer.note}</p>
          </div>

          <div className="flex min-w-0 flex-col gap-3 text-sm xs:gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="break-all font-medium text-brand-primary underline-offset-4 transition duration-300 hover:underline"
            >
              {contact.email}
            </a>
            <p className="text-brand-muted">{contact.footer.copyright}</p>
            <a
              href="#hero"
              className="font-semibold text-brand-primary transition duration-300 hover:text-brand-secondary"
            >
              {contact.footer.backToTopLabel} ↑
            </a>
          </div>
        </div>
      </motion.footer>
    </SectionShell>
  );
}

export default ContactSection;
