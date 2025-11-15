export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
      <div className="absolute -inset-24 opacity-0 group-hover:opacity-100 blur-3xl transition" style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(56,189,248,0.15), rgba(59,130,246,0.12), rgba(79,70,229,0.10), transparent)' }} />
      <div className="relative">
        {Icon && (
          <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-400/30 to-indigo-600/30 ring-1 ring-white/10 text-cyan-200">
            <Icon size={18} />
          </div>
        )}
        <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
