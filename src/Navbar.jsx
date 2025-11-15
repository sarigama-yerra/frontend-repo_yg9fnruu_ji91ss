import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-5 py-4">
            <a href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-inner shadow-cyan-200/20 ring-1 ring-white/20" />
              <div className="leading-tight">
                <p className="text-sm tracking-widest text-white/70">INFERNOMACH</p>
                <p className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-300">INNOVATIONS</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              <a href="#solutions" className="hover:text-white transition">Solutions</a>
              <a href="#platform" className="hover:text-white transition">Platform</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#contact" className="hidden sm:inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-900/30 ring-1 ring-white/10 transition">Request Demo</a>
              <button className="md:hidden p-2 rounded-lg bg-white/10 ring-1 ring-white/10 text-white">
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
