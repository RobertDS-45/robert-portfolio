function SocialLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-border bg-white text-brand-text transition duration-300 hover:-translate-y-1 hover:border-brand-primary hover:bg-brand-primary/10 hover:text-brand-primary hover:shadow-card"
    >
      {Icon ? (
        <Icon className="h-5 w-5 transition duration-300 group-hover:scale-110" />
      ) : (
        <span className="inline-block h-5 w-5" />
      )}
    </a>
  );
}

export default SocialLink;
