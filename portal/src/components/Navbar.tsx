import { useState } from 'react'
import { Shield, Menu, X, ExternalLink } from 'lucide-react'

const SHADOW_AI_URL = import.meta.env.VITE_SHADOW_AI_URL || 'http://localhost:5173'
const DSRM_URL = import.meta.env.VITE_DSRM_URL || 'http://localhost:3001'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-saga-dark/90 backdrop-blur-md border-b border-saga-navy/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent-gradient flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-none">SAGA</span>
              <span className="hidden sm:block text-saga-blue/60 text-xs leading-none mt-0.5">AI Security Platform</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#modules" className="text-saga-blue/70 hover:text-white text-sm font-medium transition-colors">
              Módulos
            </a>
            <a href="#roadmap" className="text-saga-blue/70 hover:text-white text-sm font-medium transition-colors">
              Roadmap
            </a>
            <a href="#architecture" className="text-saga-blue/70 hover:text-white text-sm font-medium transition-colors">
              Arquitetura
            </a>
            <div className="flex items-center gap-3 ml-4 border-l border-saga-navy/40 pl-4">
              <a
                href={SHADOW_AI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-saga-accent hover:text-white transition-colors"
              >
                Shadow AI <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={DSRM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2 px-4"
              >
                AI-DSRM <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-saga-blue/70 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-saga-surface border-t border-saga-navy/30 px-4 py-4 flex flex-col gap-4">
          <a href="#modules" onClick={() => setIsOpen(false)} className="text-saga-blue/70 hover:text-white text-sm font-medium">Módulos</a>
          <a href="#roadmap" onClick={() => setIsOpen(false)} className="text-saga-blue/70 hover:text-white text-sm font-medium">Roadmap</a>
          <a href="#architecture" onClick={() => setIsOpen(false)} className="text-saga-blue/70 hover:text-white text-sm font-medium">Arquitetura</a>
          <div className="flex flex-col gap-2 pt-2 border-t border-saga-navy/30">
            <a href={SHADOW_AI_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm justify-center">Shadow AI Scanner</a>
            <a href={DSRM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm justify-center">AI-DSRM Scanner</a>
          </div>
        </div>
      )}
    </nav>
  )
}
