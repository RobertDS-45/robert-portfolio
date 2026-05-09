function SocialLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand-text/80 transition duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:bg-brand-primary/10 hover:text-white hover:shadow-[0_0_25px_rgba(96,165,250,0.18)]"
    >
      <Icon className="h-5 w-5 transition duration-300 group-hover:scale-110" />
    </a>
  );
}

export default SocialLink;
