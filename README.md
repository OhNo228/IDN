# Strategic Digital Consultant — Цифровий стратегічний консультант

**Multi-LLM AI Platform для C-Level стратегічних рішень**

![Status](https://img.shields.io/badge/status-MVP-blue)
![License](https://img.shields.io/badge/license-Proprietary-red)

---

## 📋 Огляд

Strategic Digital Consultant — це enterprise-рівня SaaS платформа, яка використовує **multi-LLM архітектуру** з 12 спеціалізованими AI-агентами для надання стратегічних рекомендацій C-level менеджерам (CEO, CFO, CMO, COO).

### Ключові можливості

- **12 AI-агентів**: Orchestrator, Problem Framing, Market Intelligence, Competitive Analysis, Financial Modeling, Risk Assessment, Strategy Frameworks, Advocate, Scenario Planner, Decision Synthesizer, Output Agent, Hypothesis Decomposer
- **Multi-LLM підхід**: GPT-4, Claude, Gemini — кожен агент використовує найбільш підходящу модель
- **Повна прозорість**: Confidence scores, джерела, припущення для кожного висновку
- **Швидкість**: Від питання до executive summary за 1-2 години (замість тижнів)
- **Безпека**: End-to-end encryption, RLS, GDPR-ready, audit trail

---

## 🏗️ Архітектура

```
Frontend (Next.js)  ←→  Backend API (NestJS/FastAPI)  ←→  Supabase (PostgreSQL)
                              ↓
                        Orchestrator
                              ↓
                    [12 AI Agents (parallel/sequential)]
                              ↓
                    LLM Adapters (OpenAI, Anthropic, Google)
```

### Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons
- SWR (data fetching)

**Backend:**
- Node.js + TypeScript (NestJS) або Python (FastAPI)
- BullMQ + Redis (job queue)
- OpenAI SDK, Anthropic SDK, Google Generative AI SDK
- Serper API (web search)

**Database:**
- Supabase (PostgreSQL + Auth + Storage)
- Row Level Security (RLS)
- Full-text search (pgvector in production)

**Infrastructure:**
- Vercel (frontend hosting)
- Railway/Render (backend hosting)
- Sentry (error tracking)
- PostHog (analytics)

---

## 📂 Структура проекту

```
/
├── src/
│   ├── components/
│   │   └── landing/          # Landing page components
│   ├── pages/                # Page components
│   └── App.tsx               # Main app entry
│
├── docs/
│   ├── PRODUCT_SPEC.md       # Повна product specification
│   ├── TECHNICAL_ARCHITECTURE.md  # Технічна архітектура
│   └── MVP_CHECKLIST.md      # MVP development checklist
│
└── README.md                 # This file
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm або yarn
- Supabase account
- (Optional) LLM API keys для backend

### Installation

```bash
# Clone repository
git clone <repository-url>
cd strategic-digital-consultant

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Додайте ваші Supabase credentials в .env

# Run development server
npm run dev
```

Відкрийте [http://localhost:5173](http://localhost:5173) у браузері.

---

## 📚 Документація

### Повна специфікація
- [Product Specification](./PRODUCT_SPEC.md) — Sitemap, user flows, UI components, мікрокопі
- [Technical Architecture](./TECHNICAL_ARCHITECTURE.md) — Multi-LLM architecture, API contracts, agent implementations
- [MVP Checklist](./MVP_CHECKLIST.md) — Development roadmap, estimates, acceptance criteria

### Ключові документи

#### 1. Sitemap
```
/                   - Landing page
/demo               - Interactive demo
/how-it-works       - Explanation
/agents             - 12 agents overview
/use-cases          - CEO/CFO/CMO/COO cases
/pricing            - Plans & pricing
/security           - Security & privacy
/dashboard          - User dashboard (auth required)
  /new-session      - Create new session
  /sessions         - Session history
  /reports/:id      - View report
  /scenario-planner/:id - Scenario planning
```

#### 2. User Flows

**CEO Flow: Market Entry Decision**
1. Sign up via Google SSO
2. Create session: "Should we enter German B2B SaaS market?"
3. Add context (budget, timeframe, KPIs)
4. Watch agents work in real-time
5. Receive executive summary + detailed report
6. Use Scenario Planner to compare options
7. Download PDF, share with Board

**CFO Flow: Investment Evaluation**
1. Create session: "Calculate ROI for €5M automation investment"
2. Upload financial data (XLSX)
3. Receive financial model (P&L, NPV, IRR)
4. Test sensitivity in Scenario Planner
5. Export to Excel for further analysis

#### 3. Agent Workflow

```
User Question
    ↓
Problem Framing (clarify context)
    ↓
Hypothesis Decomposer (break into testable hypotheses)
    ↓
[Parallel Execution]
├── Market Intelligence (TAM/SAM/SOM)
├── Competitive Analysis (SWOT)
├── Financial Modeling (P&L, scenarios)
└── Risk Assessment (risks + mitigation)
    ↓
Strategy Frameworks (Porter, Ansoff, Blue Ocean)
    ↓
Advocate (devil's advocate, critique)
    ↓
Scenario Planner (alternative scenarios)
    ↓
Decision Synthesizer (final recommendation)
    ↓
Output Agent (format report, PDF)
    ↓
Report delivered to user
```

---

## 🗄️ Database Schema

### Core Tables

**users** — User profiles (extends Supabase auth)
- id, email, name, company, role
- plan (starter, team, enterprise)
- retention_days (data retention policy)

**sessions** — Strategic consultation sessions
- user_id, question, context
- status (created, processing, completed, failed)
- progress, confidence

**agent_outputs** — Individual agent results
- session_id, agent_name, status
- input, output, confidence

**reports** — Final reports
- session_id, executive_summary, detailed_findings
- assumptions, sources, next_steps

**scenarios** — Alternative scenarios
- session_id, name, variables, results

**documents** — Uploaded documents
- user_id, session_id, filename, content_text
- Full-text search index

**audit_log** — Audit trail
- user_id, session_id, action, details

### Security

All tables have **Row Level Security (RLS)** enabled. Users can only access their own data.

---

## 🎨 Design System

### Colors

**Primary (Blue)**
- Blue-600: `#2563EB` (CTAs, links)
- Blue-700: `#1D4ED8` (hover)

**Secondary (Slate)**
- Slate-900: `#0F172A` (headings)
- Slate-700: `#334155` (body text)
- Slate-300: `#CBD5E1` (borders)

**Accent**
- Green-600: `#16A34A` (success, high confidence)
- Yellow-500: `#EAB308` (medium confidence)
- Red-600: `#DC2626` (low confidence, risks)

### Typography

- Font: **Inter**
- Hero title: 56px (desktop), 30px (mobile)
- Section title: 30px (desktop), 24px (mobile)
- Body: 16px
- Line height: 150% (body), 120% (headings)

---

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Run linter
npm run lint

# Type check
npm run typecheck
```

---

## 🚢 Deployment

### Frontend (Vercel)

```bash
# Build production
npm run build

# Deploy to Vercel
vercel --prod
```

### Backend (Railway/Render)

Backend не включений у цей repository. Дивіться [TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md) для деталей backend implementation.

### Database (Supabase)

1. Створіть Supabase project
2. Запустіть migration:
   ```bash
   # Migration вже застосована через MCP tool
   ```
3. Налаштуйте Auth providers (Google, Microsoft)
4. Налаштуйте Storage bucket для документів

---

## 📊 MVP Timeline

**Total**: 12-14 тижнів

- **Week 1-2**: Setup & Design (Figma, infrastructure)
- **Week 3-6**: Backend Core (Orchestrator, 12 agents)
- **Week 7-10**: Frontend Core (Landing, Dashboard, Report)
- **Week 11-12**: Testing & Bug fixes
- **Week 13-14**: Deployment & Launch

**Budget**: ~€100,000-110,000 (team + infrastructure)

Детальний checklist: [MVP_CHECKLIST.md](./MVP_CHECKLIST.md)

---

## 🔐 Security & Privacy

- **Encryption**: AES-256 (at rest), TLS 1.3 (in transit)
- **RLS**: Row Level Security на всіх таблицях
- **GDPR**: Право на видалення, data portability
- **Audit trail**: Повний лог всіх дій
- **No storage by default**: Дані не зберігаються без дозволу користувача
- **Enterprise options**: On-premise deployment, private LLM endpoints

---

## 📈 Success Metrics (First 3 Months)

### Usage
- 50+ signups
- 30+ active users
- 200+ sessions

### Quality
- Average confidence: > 80%
- Average session time: < 1.5 hours
- User satisfaction: > 4/5 stars

### Business
- 5+ paying customers
- MRR: €2,000+

---

## 🛠️ Development

### Code Style

- TypeScript strict mode
- ESLint + Prettier
- Functional components (React Hooks)
- Tailwind CSS (no custom CSS)
- No emojis in code (only in UI if requested)

### Git Workflow

- `main` branch — production
- `develop` branch — staging
- Feature branches: `feature/agent-showcase`
- Bug fixes: `fix/confidence-calculation`

### Commit Messages

```
feat: Add Scenario Planner component
fix: Correct confidence calculation in Market Intelligence
docs: Update API documentation
test: Add E2E test for session creation
```

---

## 🤝 Contributing

Цей проект є proprietary. Contributions приймаються тільки від авторизованих team members.

---

## 📞 Contact

**Project Lead**: [Name]
**Email**: hello@strategicconsultant.ai
**Website**: https://strategicconsultant.ai

---

## 📄 License

Proprietary — All rights reserved © 2024

---

## 🙏 Acknowledgments

- OpenAI (GPT-4)
- Anthropic (Claude)
- Google (Gemini)
- Supabase
- Vercel
- Lucide Icons

---

**Built with ❤️ for C-level decision makers**
