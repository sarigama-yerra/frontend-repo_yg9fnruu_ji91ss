export default function CTA() {
  return (
    <div id="contact" className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/40 via-indigo-900/40 to-cyan-900/40 p-8 sm:p-12">
      <div className="absolute -inset-40 bg-[radial-gradient(60%_50%_at_10%_10%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(40%_40%_at_90%_90%,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white">Start building with us</h3>
        <p className="mt-2 text-white/70 max-w-2xl">Tell us about your use case and we’ll assemble a pilot in days, not months. Security-first, enterprise-ready.</p>
        <form className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input className="col-span-1 sm:col-span-1 rounded-xl bg-white/10 ring-1 ring-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Your name" />
          <input className="col-span-1 sm:col-span-1 rounded-xl bg-white/10 ring-1 ring-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Work email" />
          <button className="col-span-1 rounded-xl px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-900/30 ring-1 ring-white/10 transition">Request access</button>
        </form>
      </div>
    </div>
  )
}
