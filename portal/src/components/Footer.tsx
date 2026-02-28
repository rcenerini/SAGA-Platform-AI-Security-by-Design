import { Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-saga-dark border-t border-saga-navy/20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent-gradient flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold">SAGA Platform</p>
              <p className="text-saga-blue/40 text-xs">AI Security by Design</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-saga-blue/40">
            <span>Time de Arquitetura de Cibersegurança</span>
            <span>·</span>
            <span>v1.0.0</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#modules" className="text-saga-blue/40 hover:text-white text-sm transition-colors">Módulos</a>
            <a href="#roadmap" className="text-saga-blue/40 hover:text-white text-sm transition-colors">Roadmap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
