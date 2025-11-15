import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <div className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(56,189,248,0.25)_0%,rgba(30,64,175,0.15)_40%,transparent_70%)]" />
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest text-cyan-300/90 uppercase">AI-Driven Identity & Intelligence</p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-300">
            INFERNOMACH INNOVATIONS
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            We engineer trust, speed, and clarity for the autonomous enterprise. Realtime risk scoring, secure digital identity, and decision engines that never sleep.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-900/30 ring-1 ring-white/10 transition">Book a Demo</a>
            <a href="#platform" className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold text-white/90 bg-white/10 hover:bg-white/20 ring-1 ring-white/10 transition">Explore Platform</a>
          </div>
        </div>
      </div>
    </div>
  )
}
