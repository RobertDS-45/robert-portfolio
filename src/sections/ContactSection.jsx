import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import SectionShell from "../components/layout/SectionShell";
import SocialLink from "../components/ui/SocialLink";
import { portfolioProfile } from "../data/portfolio";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  whatsapp: FaWhatsapp,
};

function ContactSection() {
  const { contact, socialLinks, name, title } = portfolioProfile;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Message sent successfully!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-secondary leading-[1.05] tracking-[-0.03em] mb-5">
          {contact.heading}
        </h2>
        <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
          {contact.description}
        </p>
      </motion.div>

      {/* Contact Grid */}
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 mb-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          {/* Email */}
          <div className="card-premium p-6 space-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-muted">
                  {contact.panel.emailLabel}
                </p>
              </div>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="text-lg font-semibold text-brand-secondary hover:text-brand-primary transition duration-300"
            >
              {contact.email}
            </a>
          </div>

          {/* Phone */}
          <div className="card-premium p-6 space-y-3">
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
          <div className="card-premium p-6">
            <div className="flex items-start gap-3">
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
          <div className="card-premium p-6 border-brand-primary/30 bg-brand-primary/5">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-muted mb-2">
              {contact.panel.availabilityLabel}
            </p>
            <p className="text-brand-secondary font-medium">
              {contact.availability}
            </p>
          </div>

          {/* Social Links */}
          <div className="card-premium p-6">
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

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-premium p-6 sm:p-8 space-y-6"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-text">
                Name
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={contact.form.namePlaceholder}
                className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-text outline-none transition duration-300 placeholder:text-brand-muted focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-text">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={contact.form.emailPlaceholder}
                className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-text outline-none transition duration-300 placeholder:text-brand-muted focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-brand-text">
              Subject
            </span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={contact.form.subjectPlaceholder}
              className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-text outline-none transition duration-300 placeholder:text-brand-muted focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-brand-text">
              Message
            </span>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={contact.form.messagePlaceholder}
              className="w-full resize-none rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-text outline-none transition duration-300 placeholder:text-brand-muted focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : contact.form.submitLabel}
            <Send className="h-4 w-4" />
          </button>

          {submitStatus && (
            <p
              className={`text-sm font-medium ${
                submitStatus.type === 'success'
                  ? 'text-green-600 bg-green-50 p-3 rounded-lg'
                  : 'text-red-600 bg-red-50 p-3 rounded-lg'
              }`}
            >
              {submitStatus.message}
            </p>
          )}
        </motion.form>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="card-premium p-6 sm:p-8 border-t-2 border-brand-border"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold text-brand-secondary">{name}</p>
            <p className="mt-1 text-sm text-brand-muted">{contact.footer.note}</p>
          </div>

          <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-6">
            <a
              href={`mailto:${contact.email}`}
              className="text-brand-text hover:text-brand-primary transition duration-300 font-medium"
            >
              {contact.email}
            </a>
            <span className="hidden sm:inline text-brand-border">•</span>
            <p className="text-brand-muted">
              {contact.footer.copyright}
            </p>
            <span className="hidden sm:inline text-brand-border">•</span>
            <a
              href="#hero"
              className="text-brand-primary hover:text-brand-secondary transition duration-300 font-semibold"
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
