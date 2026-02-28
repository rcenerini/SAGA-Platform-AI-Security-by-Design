import { ExternalLink, LockOpen, Lock, ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

interface ModuleCardProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  tech: string[]
  status: 'active' | 'coming-soon'
  url?: string
  icon: ReactNode
  accentColor: string
  port?: number
}

export default function ModuleCard({
  title,
  subtitle,
  description,
  features,
  tech,
  status,
  url,
  icon,
  accentColor,
  port,
}: ModuleCardProps) {
  const isActive = status === 'active'

  return (
    <div className={`module-card flex flex-col h-full ${!isActive ? 'opacity-70' : ''}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
          style={{ background: `linear-gradient(135deg, ${accentColor}33 0%, ${accentColor}22 100%)`, border: `1px solid ${accentColor}44` }}
        >
          {icon}
        </div>
        {isActive ? (
          <span className="badge-active">
            <LockOpen className="w-3 h-3" /> Ativo
          </span>
        ) : (
          <span className="badge-soon">
            <Lock className="w-3 h-3" /> Em Breve
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-sm font-medium mb-3" style={{ color: accentColor }}>{subtitle}</p>

      {/* Description */}
      <p className="text-saga-blue/70 text-sm leading-relaxed mb-4 flex-1">{description}</p>

      {/* Features */}
      <ul className="space-y-1.5 mb-4">
        {features.map(f => (
          <li key={f} className="flex items-center gap-2 text-xs text-saga-blue/60">
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
            {f}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {tech.map(t => (
          <span key={t} className="px-2 py-0.5 text-xs rounded bg-saga-navy/40 text-saga-blue/60 border border-saga-navy/30">{t}</span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-saga-navy/30 mt-auto">
        {port && (
          <span className="text-xs text-saga-blue/40 font-mono">:{port}</span>
        )}
        {isActive && url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: accentColor }}
          >
            Acessar módulo <ExternalLink className="w-4 h-4" />
          </a>
        ) : (
          <span className="ml-auto flex items-center gap-2 text-sm text-saga-blue/30">
            Disponível em breve <ArrowRight className="w-4 h-4" />
          </span>
        )}
      </div>
    </div>
  )
}
