import { Shield, ArrowDown, Zap, Eye, Lock, Wrench } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-hero-gradient flex flex-col items-center justify-center relative overflow-hidden pt-16">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0,174,239,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Glowing orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-saga-navy/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-saga-blue/30 bg-saga-blue/10 text-saga-accent text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
          Plataforma de Segurança de IA — Security by Design + Zero Trust
        </div>

        {/* Main title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-saga-blue to-saga-accent">SAGA</span>
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/90">
            Sistema de Análise e<br />Gerenciamento de Ameaças de IA
          </span>
        </h1>

        {/* Description */}
        <p className="text-saga-blue/70 text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Plataforma corporativa de <strong className="text-white">governança, segurança e hardening</strong> de Inteligência Artificial.
          Atuamos de forma preventiva bloqueando IaCs inseguros nas esteiras CI/CD, aplicando políticas NIST AI RMF e detectando Shadow AIs não homologadas na infraestrutura organizacional.
        </p>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { icon: Zap, label: 'Shift-Left Security' },
            { icon: Eye, label: 'Shadow AI Detection' },
            { icon: Lock, label: 'AI-DSRM Compliance' },
            { icon: Wrench, label: 'Zero Trust Hardening' },
            { icon: Shield, label: 'Policy as Code (OPA)' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 px-4 py-2 bg-saga-surface/60 border border-saga-navy/40 rounded-full text-sm text-saga-blue/80">
              <Icon className="w-4 h-4 text-saga-accent" />
              {label}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#modules" className="btn-primary text-base px-8 py-3.5">
            <Shield className="w-5 h-5" />
            Explorar Módulos
          </a>
          <a href="#architecture" className="btn-secondary text-base px-8 py-3.5">
            Ver Arquitetura
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '3', label: 'Módulos Ativos' },
            { value: '12', label: 'Controles DSRM' },
            { value: '4+', label: 'Módulos Planejados' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-saga-accent">{stat.value}</div>
              <div className="text-xs text-saga-blue/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#modules" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-saga-blue/40 hover:text-saga-blue transition-colors">
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  )
}
