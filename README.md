# 🛡️ SAGA Platform — AI Security by Design

<p align="center">
  <img src="https://img.shields.io/badge/Security-AI%20Platform-00AEEF?style=for-the-badge&logo=shield" />
  <img src="https://img.shields.io/badge/Status-Ativo-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Módulos%20Ativos-3-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
</p>

<h2 align="center">Sistema de Análise e Gerenciamento de Ameaças de IA</h2>

<p align="center">
  Plataforma corporativa unificada de governança, segurança e hardening de Inteligência Artificial.
  Atua de forma preventiva nas esteiras CI/CD bloqueando infraestrutura insegura e mapeando Shadow AIs não homologadas.
</p>

---

## 🎯 Visão Geral

O **SAGA Platform** é um portal construído sob o princípio Security by Design, agregando ferramentas de segurança especializadas em IA. Ele permite que profissionais de Cibersegurança e DevSecOps:

- **Detectem** uso não autorizado de LLMs e frameworks de IA nos repositórios.
- **Validem** IaC (Terraform) contra as políticas do NIST AI RMF usando OPA (Open Policy Agent).
- **Bloqueiem** commits e infraestrutura insegura diretamente nas esteiras CI/CD (Shift-Left).
- **Monitorem** conformidade contínua com frameworks como o AI-DSRM (12 controles).
- **Remediem** proativamente através de Playbooks Ansible automatizados (Golden Images).

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

### 3. 🛡️ IA Hardening Guide
> Valida infraestrutura como código (IaC) e fornece automação baseada no NIST AI RMF e CIS Benchmarks.

| Componente | Tecnologia | Porta |
|---|---|---|
| Backend | Node.js / Fastify | 6000 |
| Frontend | React / Vite / Tailwind v4 | 3002 |
| Policy Engine | OPA / Rego | 8183 |

**Capacidades:**
- Interceptação de CI/CD via Webhooks (Payload Terraform/JSON).
- Validação granular de serviços em nuvem (Ex: AWS Bedrock, GCP Vortex).
- Políticas Rego (OPA) avaliando Minimum Privilege (IAM Roles).
- Geração automática e provisionamento de Playbooks Ansible para remediação.
- Dashboard corporativo destacando Violações e Ações requeridas.

---

## 🗺️ Roadmap — Próximos Módulos

| Módulo | Descrição | Status |
|---|---|---|
| 🎯 Threat Modeling | STRIDE/PASTA AI-Aware para sistemas LLM | Planejado |
| ☁️ Cloud Security Posture | Análise de postura AWS/Azure/GCP para AI workloads | Planejado |
|  Secrets Auditor | Detecção de API keys de LLMs expostas | Planejado |
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
| 🛡️ **IA Hardening Guide** | http://localhost:3002 | Dashboard Cloud Hardening |
| ⚙️ **Shadow AI API** | http://localhost:8000/docs | Swagger/OpenAPI |
| ⚙️ **AI-DSRM API** | http://localhost:4000/docs | Swagger/OpenAPI |
| ⚙️ **Hardening API** | http://localhost:6000 | Fastify Endpoints |
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
    
└── IA-Hardening-Guide ──────────────────────────────── :3002 / :6000 / :8183
    ├── hardening-frontend (React/Vite/Tailwind V4)
    ├── hardening-backend (Node.js/Fastify)
    └── hardening-opa (Open Policy Agent)
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
├── portal/                    ← Portal unificado (React)
├── docker-compose.yml         ← Orquestra todos os serviços
├── .env.example               ← Template de variáveis (Cofre)
└── README.md                  ← Este arquivo

../Get-Githubreposoitory-IA/   ← Módulo Shadow AI Scanner
../IA-Security-scan-github/    ← Módulo AI-DSRM Compliance
../IA-Hardening-Guide/         ← Módulo IaC/OPA Hardening
```

---

## 🔐 Configuração de Segurança

Para ambientes de produção:

1. **Secrets via Vault** — Configure AWS Secrets Manager ou Azure Key Vault para credenciais de GitHub App
2. **Rotate JWT Secrets** — Substitua `JWT_SECRET` por um valor seguro e aleatório
3. **TLS/HTTPS** — Adicione um reverse proxy (nginx/traefik) com certificados válidos
4. **Network Isolation** — Remova ports expostos dos serviços internos (OPA, PostgreSQL, MinIO)

---

