import Navbar from './Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import FeatureCard from './components/FeatureCard'
import CTA from './components/CTA'
import { ShieldCheck, Cpu, Fingerprint, GaugeCircle, LineChart, Sparkles } from 'lucide-react'

function App() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-white">
      {/* Ambient background gradients */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-40 right-1/2 h-[50rem] w-[50rem] translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.16),transparent_60%)] blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />

        <Section
          id="solutions"
          eyebrow="Solutions"
          title="Intelligent infrastructure for digital trust"
          description="A unified stack that verifies identity, scores risk, and automates decisions in milliseconds — privacy-preserving by design."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={Fingerprint} title="Verified Identity" description="Holographic identity graph, liveness, device intelligence, and continuous authentication." />
            <FeatureCard icon={ShieldCheck} title="Risk & Compliance" description="Streaming risk signals, AML/KYC automation, and policy orchestration that adapts in real time." />
            <FeatureCard icon={Cpu} title="Autonomous Decisions" description="Deterministic rules fused with generative reasoning for explainable outcomes at scale." />
            <FeatureCard icon={GaugeCircle} title="Low-Latency" description="Sub-50ms decisioning with global edge execution and smart caching built-in." />
            <FeatureCard icon={LineChart} title="Observability" description="Deep telemetry, lineage, and replay to audit every choice across the pipeline." />
            <FeatureCard icon={Sparkles} title="Developer-First" description="SDKs, webhooks, and a schema-first API that integrates in hours, not weeks." />
          </div>
        </Section>

        <Section
          id="platform"
          eyebrow="Platform"
          title="From signal to certainty"
          description="Connect data sources, craft policies, and deploy decision services visually. Every artifact is versioned, testable, and production-grade."
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="absolute -inset-40 bg-[conic-gradient(from_140deg_at_30%_30%,rgba(56,189,248,0.15),rgba(59,130,246,0.12),rgba(99,102,241,0.12),transparent)] blur-3xl" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-black/30 ring-1 ring-white/10 p-6">
                <p className="text-xs tracking-widest text-cyan-300/80 uppercase">Model Studio</p>
                <h3 className="mt-2 text-xl font-semibold">Policy & Graph</h3>
                <p className="mt-2 text-white/70 text-sm">Compose identity graphs, detectors, and actions with visual nodes. Export as code.</p>
              </div>
              <div className="rounded-2xl bg-black/30 ring-1 ring-white/10 p-6">
                <p className="text-xs tracking-widest text-cyan-300/80 uppercase">Runtime</p>
                <h3 className="mt-2 text-xl font-semibold">Edge Decision Mesh</h3>
                <p className="mt-2 text-white/70 text-sm">Globally distributed, fault-tolerant, and tuned for extreme throughput.</p>
              </div>
              <div className="rounded-2xl bg-black/30 ring-1 ring-white/10 p-6">
                <p className="text-xs tracking-widest text-cyan-300/80 uppercase">Ops</p>
                <h3 className="mt-2 text-xl font-semibold">Replay & Explain</h3>
                <p className="mt-2 text-white/70 text-sm">Full traceability, sandboxes, and counterfactual testing baked in.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="about"
          eyebrow="About"
          title="Built for regulated industries, designed for speed"
          description="We partner with fintech, crypto, mobility, and enterprise AI teams to unlock instant trust and automated operations."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-lg font-semibold">Security first</h3>
              <p className="mt-2 text-white/70 text-sm">Encryption-in-use, least-privilege by default, and compliance-ready controls.</p>
            </div>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-lg font-semibold">Human in the loop</h3>
              <p className="mt-2 text-white/70 text-sm">Review, override, and annotate decisions with ergonomic workflows.</p>
            </div>
          </div>
        </Section>

        <div className="mx-auto max-w-7xl px-6 pb-24">
          <CTA />
        </div>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} INFERNOMACH INNOVATIONS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="/test">System Check</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
