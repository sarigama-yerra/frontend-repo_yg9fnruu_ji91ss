export default function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.06] to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs tracking-widest text-cyan-300/90 uppercase mb-3">{eyebrow}</p>
          )}
          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white drop-shadow-sm">{title}</h2>
          )}
          {description && (
            <p className="mt-4 text-white/70 leading-relaxed">{description}</p>
          )}
        </div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}
