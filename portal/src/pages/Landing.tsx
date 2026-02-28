import { Shield, Search, FileCheck, Brain, Cloud, Wrench, GitBranch, Fingerprint, Target, Layers } from 'lucide-react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ModuleCard from '../components/ModuleCard'
import Footer from '../components/Footer'

const SHADOW_AI_URL = import.meta.env.VITE_SHADOW_AI_URL || 'http://localhost:5173'
const DSRM_URL = import.meta.env.VITE_DSRM_URL || 'http://localhost:3001'
const HARDENING_URL = import.meta.env.VITE_HARDENING_URL || 'http://localhost:3002'

const activeModules = [
  {
    title: 'Shadow AI Scanner',
    subtitle: 'Shadow AI & MCP Architecture Scanner',
    description:
      'Detecta o uso não autorizado de LLMs, frameworks de agentes autônomos e configurações MCP em repositórios privados. Atua via Shift-Left diretamente nas esteiras CI/CD, bloqueando commits não conformes em tempo real.',
    features: [
      'Detecção de SDKs oficiais (OpenAI, Anthropic, Gemini, Bedrock)',
      'Orquestradores de Agentes (LangChain, CrewAI, LangGraph)',
      'Frameworks MCP (FastMCP, mcp-use)',
      'Scan ad-hoc e varredura noturna em lote',
      'Webhook CI/CD Shift-Left',
      'Governança via Open Policy Agent (OPA)',
    ],
    tech: ['Python', 'FastAPI', 'React', 'Vite', 'OPA', 'Docker'],
    status: 'active' as const,
    url: SHADOW_AI_URL,
    icon: <Search className="w-6 h-6 text-saga-accent" />,
    accentColor: '#00AEEF',
    port: 5173,
  },
  {
    title: 'AI-DSRM Compliance',
    subtitle: 'AI Data Security and Risk Management',
    description:
      'Sistema automatizado de varredura de conformidade mapeado ao formulário AI-DSRM. Valida 12 controles de segurança usando scanners reais (ZAP, Checkov, Semgrep, Trivy) com políticas Rego no OPA.',
    features: [
      '12 controles AI-DSRM validados via OPA/Rego',
      'Scanners integrados: ZAP, Checkov, Semgrep, Trivy',
      'Integração nativa com GitHub App e Webhooks',
      'Relatórios SARIF normalizados e histórico',
      'Armazenamento de evidências no MinIO S3',
      'Dashboard de conformidade em tempo real',
    ],
    tech: ['Node.js', 'Fastify', 'React', 'TypeScript', 'PostgreSQL', 'MinIO', 'OPA'],
    status: 'active' as const,
    url: DSRM_URL,
    icon: <FileCheck className="w-6 h-6 text-blue-400" />,
    accentColor: '#60A5FA',
    port: 3001,
  },
  {
    title: 'Hardening Guide',
    subtitle: 'Hardening Automático para AI Services',
    description: 'Geração de guias e automações de hardening para serviços de IA, containers, APIs e infraestrutura, baseados em CIS Benchmarks e NIST AI RMF.',
    features: ['NIST AI RMF compliance', 'CIS Benchmarks automatizados', 'Hardening de containers AI', 'Políticas de baseline'],
    tech: ['Node.js', 'Fastify', 'React', 'Ansible', 'OPA'],
    status: 'active' as const,
    url: HARDENING_URL,
    icon: <Wrench className="w-6 h-6 text-[#c8ff00]" />,
    accentColor: '#c8ff00',
    port: 3002,
  },
]

const futureModules = [
  {
    title: 'Threat Modeling',
    subtitle: 'Modelagem de Ameaças AI-Aware',
    description: 'Geração automática de modelos de ameaças STRIDE/PASTA para sistemas de IA, identificando vetores de ataque específicos de LLMs e agentes autônomos.',
    features: ['STRIDE/PASTA para sistemas AI', 'Análise de superfície de ataque LLM', 'Geração de threat reports', 'Integração com MITRE ATLAS'],
    tech: ['Python', 'React', 'OPA', 'LLM-aware'],
    status: 'coming-soon' as const,
    icon: <Target className="w-6 h-6 text-orange-400" />,
    accentColor: '#FB923C',
  },
  {
    title: 'Cloud Security Posture',
    subtitle: 'Segurança em Cloud para AI Workloads',
    description: 'Análise de postura de segurança em cloud focada em workloads de IA, verificando configurações IAM, redes, endpoints e conformidade com benchmarks CIS.',
    features: ['Análise de postura AWS/Azure/GCP', 'CIS Benchmarks para AI workloads', 'Detecção de misconfigurações', 'Relatórios de remediação'],
    tech: ['Checkov', 'Terraform', 'Python', 'Cloud APIs'],
    status: 'coming-soon' as const,
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    accentColor: '#22D3EE',
  },
  {
    title: 'Secrets Auditor',
    subtitle: 'Detecção de Credenciais AI expostas',
    description: 'Auditoria especializada em credenciais de APIs de IA expostas (OpenAI keys, HuggingFace tokens, GCP credentials) em código, histórico Git e variáveis de ambiente.',
    features: ['Detecção de API keys de LLMs', 'Análise de histórico Git', 'Alertas em tempo real', 'Integração com Secret Managers'],
    tech: ['TruffleHog', 'GitLeaks', 'Python', 'Vault'],
    status: 'coming-soon' as const,
    icon: <Fingerprint className="w-6 h-6 text-red-400" />,
    accentColor: '#F87171',
  },
  {
    title: 'SBOM for AI',
    subtitle: 'Software Bill of Materials para IA',
    description: 'Geração e gerenciamento de SBOM específico para dependências de IA, rastreando versões de modelos, datasets e bibliotecas com análise de CVEs.',
    features: ['SBOM de dependências AI/ML', 'Rastreamento de versões de modelos', 'CVE scan para libs AI', 'SPDX/CycloneDX output'],
    tech: ['Syft', 'Grype', 'Python', 'CycloneDX'],
    status: 'coming-soon' as const,
    icon: <Layers className="w-6 h-6 text-emerald-400" />,
    accentColor: '#34D399',
  },
  {
    title: 'Pipeline Security',
    subtitle: 'Segurança de Pipelines de ML/AI',
    description: 'Análise de segurança completa de pipelines de machine learning, desde o treinamento até o deploy, verificando integridade de dados, modelos e artefatos.',
    features: ['Análise de pipelines ML', 'Integridade de datasets', 'Supply chain AI security', 'Model signing e verificação'],
    tech: ['Python', 'MLflow', 'Sigstore', 'OPA'],
    status: 'coming-soon' as const,
    icon: <GitBranch className="w-6 h-6 text-yellow-400" />,
    accentColor: '#FBBF24',
  },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-saga-dark">
      <Navbar />
      <HeroSection />

      {/* Active Modules Section */}
      <section id="modules" className="py-24 bg-saga-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Módulos em Produção
            </div>
            <h2 className="section-title text-4xl">Módulos Ativos</h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-3">
              Ferramentas de segurança prontas para uso integradas na plataforma SAGA
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {activeModules.map(module => (
              <ModuleCard key={module.title} {...module} />
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-24 bg-saga-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-saga-blue/10 border border-saga-blue/20 text-saga-blue text-xs font-medium mb-4">
              <Shield className="w-3 h-3" />
              Arquitetura
            </div>
            <h2 className="section-title text-4xl">Plataforma Extensível</h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-3">
              Construída com microsserviços desacoplados e política como código (OPA/Rego)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Shield className="w-8 h-8 text-saga-accent" />,
                title: 'Policy as Code',
                description: 'Todas as regras e permissões versionadas em Rego, auditáveis e descentralizadas via Open Policy Agent.',
              },
              {
                icon: <Brain className="w-8 h-8 text-blue-400" />,
                title: 'AI-Native Security',
                description: 'Desenhada especificamente para os vetores de ataque modernos de LLMs, Agentes Autônomos e MCPs.',
              },
              {
                icon: <GitBranch className="w-8 h-8 text-purple-400" />,
                title: 'Shift-Left CI/CD',
                description: 'Integração nativa com GitHub Actions e GitLab Runners, bloqueando riscos antes do PR ser aprovado.',
              },
            ].map(item => (
              <div key={item.title} className="module-card text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-saga-navy/30 border border-saga-navy/40 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-saga-blue/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap / Future Modules */}
      <section id="roadmap" className="py-24 bg-saga-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              Roadmap
            </div>
            <h2 className="section-title text-4xl">Próximos Módulos</h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-3">
              A plataforma SAGA foi projetada para crescer. Estes módulos estão em planejamento
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureModules.map(module => (
              <ModuleCard key={module.title} {...module} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
