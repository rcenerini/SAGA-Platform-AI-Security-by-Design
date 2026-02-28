# 🛡️ SAGA Platform — AI Security by Design

<p align="center">
  <img src="https://img.shields.io/badge/Security-AI%20Platform-00AEEF?style=for-the-badge&logo=shield" />
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Módulos%20Ativos-2-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
</p>

<h2 align="center">Sistema de Análise e Gerenciamento de Ameaças de IA</h2>

<p align="center">
  Plataforma corporativa unificada de governança e segurança de Inteligência Artificial,
  atuando de forma preventiva nas esteiras CI/CD e mapeando Shadow AIs não homologadas.
</p>

---

## 🎯 Visão Geral

O **SAGA Platform** é um portal unificado que agrega ferramentas de segurança especializadas em IA, permitindo que times de Arquitetura de Cibersegurança:

- **Detectem** uso não autorizado de LLMs e frameworks de IA nos repositórios da organização
- **Bloqueiem** commits com Shadow AI diretamente nas esteiras CI/CD (Shift-Left)
- **Monitorem** conformidade com o framework AI-DSRM (12 controles)
- **Escalem** facilmente com novos módulos de segurança

---

## 📦 Módulos Ativos

### 1. 🔍 Shadow AI & MCP Architecture Scanner
> Detecta uso não autorizado de IA em repositórios

| Componente | Tecnologia | Porta |
|---|---|---|
| Backend | Python / FastAPI | 8000 |
| Frontend | React / Vite | 5173 |
| Policy Engine | OPA / Rego | 8181 |

**Capacidades:**
- Detecção de SDKs oficiais (OpenAI, Anthropic, Gemini, AWS Bedrock)
- Orquestradores de Agentes (LangChain, CrewAI, LangGraph, SmolaAgents)
- Frameworks MCP (FastMCP, @modelcontextprotocol/sdk, mcp-use)
- Instalações locais (Ollama, vLLM, llama-cpp)
- Webhook CI/CD Shift-Left — bloqueia PRs não conformes
- Varredura noturna em lote de todos os repositórios

### 2. 📋 AI-DSRM Compliance Scanner
> Valida conformidade com 12 controles AI-DSRM

| Componente | Tecnologia | Porta |
|---|---|---|
| Backend | Node.js / Fastify | 4000 |
| Frontend | React / Vite / TS | 3001 |
| Policy Engine | OPA / Rego | 8182 |
| Database | PostgreSQL | 5432 |
| Storage | MinIO S3 | 9000/9001 |

**Controles Validados:**
1. Repositório sob controle de versão
2. Workflow SAST presente
3. Varredura de segredos ativa
4. Armazenamento IaC público
5. Vulnerabilidades em containers
6. Detecção de bibliotecas RAG
7. Exportadores de logging visíveis
8. Autenticação em APIs e Tokens
9. Proteção de branch (Push Protection)
10. Dependabot habilitado
11. Code scanning default habilitado
12. Revisão de código obrigatória (Pull Request)

---

## 🗺️ Roadmap — Próximos Módulos

| Módulo | Descrição | Status |
|---|---|---|
| 🎯 Threat Modeling | STRIDE/PASTA AI-Aware para sistemas LLM | Planejado |
| ☁️ Cloud Security Posture | Análise de postura AWS/Azure/GCP para AI workloads | Planejado |
| 🔧 Hardening Guide | Automação de hardening baseado em NIST AI RMF | Planejado |
| 🔑 Secrets Auditor | Detecção de API keys de LLMs expostas | Planejado |
| 📦 SBOM for AI | Software Bill of Materials para dependências AI/ML | Planejado |
| 🔀 Pipeline Security | Análise de segurança de pipelines ML | Planejado |

---

## 🚀 Como Subir o Ambiente

### Pré-requisitos
- Docker Engine 20+
- Docker Compose V2
- Git

### Iniciando a Plataforma Completa

```bash
# 1. Clone o repositório SAGA-Project
git clone <url-do-repositório> SAGA-Project
cd SAGA-Project

# 2. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais

# 3. Suba todos os serviços
docker compose up -d --build

# 4. Aguarde a inicialização (~60s) e acesse:
```

### URLs de Acesso

| Serviço | URL | Descrição |
|---|---|---|
| 🏠 **SAGA Portal** | http://localhost:3000 | Landing page unificada |
| 🔍 **Shadow AI Scanner** | http://localhost:5173 | Dashboard de auditoria |
| 📋 **AI-DSRM Dashboard** | http://localhost:3001 | Dashboard de conformidade |
| ⚙️ **Shadow AI API** | http://localhost:8000/docs | Swagger/OpenAPI |
| ⚙️ **AI-DSRM API** | http://localhost:4000/docs | Swagger/OpenAPI |
| 🗄️ **MinIO Console** | http://localhost:9001 | admin / minioadmin |

### Subir apenas o Portal

```bash
cd portal
npm install
npm run dev
```

### Subir módulos individuais

```bash
# Apenas Shadow AI
docker compose up -d shadow-ai-backend shadow-ai-opa shadow-ai-frontend

# Apenas AI-DSRM
docker compose up -d dsrm-postgres dsrm-minio dsrm-minio-init dsrm-opa dsrm-backend dsrm-normalizer dsrm-frontend dsrm-mock-scanner
```

---

## 🏗️ Arquitetura

```
SAGA Platform
├── saga-portal (Portal Unificado) ─────────────────── :3000
│   └── React / Vite / TypeScript / Tailwind CSS
│
├── Shadow AI Module ────────────────────────────────── :5173 / :8000 / :8181
│   ├── shadow-ai-frontend (React/Vite)
│   ├── shadow-ai-backend (FastAPI/Python)
│   └── shadow-ai-opa (Open Policy Agent)
│
└── AI-DSRM Module ──────────────────────────────────── :3001 / :4000 / :8182
    ├── dsrm-frontend (React/Vite/TS)
    ├── dsrm-backend (Fastify/Node.js)
    ├── dsrm-opa (Open Policy Agent)
    ├── dsrm-normalizer (Node.js Worker)
    ├── dsrm-postgres (PostgreSQL 16)
    ├── dsrm-minio (MinIO S3)
    └── dsrm-mock-scanner (Scanner Mock)
```

### Princípios de Design

- **Policy as Code** — Regras de governança em Rego (OPA), versionadas e auditáveis
- **Shift-Left** — Integração nativa com GitHub Actions / GitLab CI para bloqueio preventivo
- **AI-Native** — Desenhado especificamente para vetores de ataque de LLMs e Agentes Autônomos
- **Extensível** — Arquitetura modular para agregar novos scanners e engines

---

## 📁 Estrutura do Projeto

```
SAGA-Project/                  ← Este repositório
├── portal/                    ← Portal unificado (novo)
│   ├── src/
│   │   ├── components/       ← Navbar, HeroSection, ModuleCard, Footer
│   │   └── pages/            ← Landing page
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml         ← Orquestra todos os serviços
├── .env.example               ← Template de variáveis de ambiente
└── README.md                  ← Este arquivo

../Get-Githubreposoitory-IA/   ← Módulo Shadow AI Scanner
../IA-Security-scan-github/    ← Módulo AI-DSRM Compliance
```

---

## 🔐 Configuração de Segurança

Para ambientes de produção:

1. **Secrets via Vault** — Configure AWS Secrets Manager ou Azure Key Vault para credenciais de GitHub App
2. **Rotate JWT Secrets** — Substitua `JWT_SECRET` por um valor seguro e aleatório
3. **TLS/HTTPS** — Adicione um reverse proxy (nginx/traefik) com certificados válidos
4. **Network Isolation** — Remova ports expostos dos serviços internos (OPA, PostgreSQL, MinIO)

---

## 👥 Time de Arquitetura de Cibersegurança

Desenvolvido e mantido pelo time de Arquitetura de Cibersegurança.
