function SectionShell({ id, className = "", children }) {
  return (
    <section id={id} className={className}>
      <div className="content-container">{children}</div>
    </section>
  );
}

export default SectionShell;
