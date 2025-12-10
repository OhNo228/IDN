# Цифровий стратегічний консультант — Product Specification

## Executive Summary

**Продукт**: Strategic Digital Consultant (Цифровий стратегічний консультант)
**Цільова аудиторія**: C-Level (CEO, CFO, COO, CMO, Board Members)
**Цінність**: Multi-LLM платформа для отримання перевірених стратегічних рекомендацій з оцінкою ризиків та фінансовою аналітикою за 1 робочу сесію

---

## 1. SITEMAP & Структура сторінок

### 1.1 Основні сторінки

```
/
├── / (Landing)
├── /demo (Interactive Demo)
├── /how-it-works (Як це працює)
├── /agents (Опис агентів)
├── /use-cases (Кейси)
├── /pricing (Ціни)
├── /security (Безпека та приватність)
├── /docs (Документація)
│
├── /dashboard (після авторизації)
│   ├── /dashboard/new-session (Новий запит)
│   ├── /dashboard/sessions (Історія сесій)
│   ├── /dashboard/reports/:id (Перегляд звіту)
│   ├── /dashboard/scenario-planner/:id (Інтерактивний планувальник)
│   └── /dashboard/settings (Налаштування)
│
└── /auth
    ├── /auth/login
    └── /auth/sso
```

### 1.2 Детальний опис сторінок

#### **Landing Page (/)**

**Секції:**
1. **Hero Section**
   - Заголовок (UA): "Стратегічний партнер на базі AI для C‑level рішень"
   - Підзаголовок: "Отримуйте перевірені стратегії, моделі й рекомендації з оцінкою ризиків та фінансовою аналітикою — за 1 сесію"
   - CTA Primary: "Запитати стратегію"
   - CTA Secondary: "Показати демонстрацію"
   - Background: Gradient (slate-900 → slate-800), subtle grid pattern
   - Visual: Abstract visualization of agent orchestration

2. **Trust Bar**
   - Логотипи клієнтів або текст: "Використовують топ-менеджери компаній з Fortune 500"
   - Метрики: "1,250+ стратегічних рішень", "96% рівень впевненості", "2.5x швидше"

3. **Problem Statement**
   - Заголовок: "Стратегічні рішення потребують глибокого аналізу"
   - Пункти:
     - "Weeks of research → Hours with AI"
     - "Фрагментовані дані → Єдина картина"
     - "Субʼєктивні думки → Datadriven insights"

4. **How It Works (Overview)**
   - Заголовок: "3 кроки до стратегічного рішення"
   - Кроки:
     1. **Опишіть виклик** — "Що вас цікавить: новий ринок, інвестиція, оптимізація?"
     2. **AI-агенти працюють** — "12 спеціалізованих агентів аналізують ринок, фінанси, ризики"
     3. **Отримайте стратегію** — "Executive summary + детальний звіт з рівнем впевненості"
   - Візуалізація: Animated flow chart

5. **Agent Showcase**
   - Заголовок: "12 AI-агентів — ваша стратегічна команда"
   - Grid 4x3 з карточками агентів:
     - **Orchestrator**: Координує всі процеси
     - **Problem Framing**: Уточнює контекст
     - **Hypothesis Decomposer**: Розбиває на гіпотези
     - **Market Intelligence**: TAM/SAM/SOM, тренди
     - **Competitive Analysis**: SWOT, positioning
     - **Financial Modeling**: P&L, ROI, scenarios
     - **Risk Assessment**: Ризики + mitigation
     - **Strategy Frameworks**: Porter, Ansoff, JTBD
     - **Advocate**: Критичні питання
     - **Scenario Planner**: Альтернативні сценарії
     - **Decision Synthesizer**: Зведення
     - **Output Agent**: Форматування звітів
   - Кожна карточка: іконка, назва, короткий опис, confidence badge

6. **Interactive Demo Preview**
   - Заголовок: "Спробуйте прямо зараз"
   - Input field: "Наприклад: Чи варто виходити на німецький ринок з нашим B2B SaaS?"
   - Button: "Побачити, як працює"
   - Link to /demo

7. **Use Cases**
   - Заголовок: "Хто користується і для чого"
   - 3 колонки:
     - **CEO**: "Вихід на новий ринок" — результат: market sizing, competitive landscape, go-to-market strategy
     - **CFO**: "Оцінка M&A угоди" — результат: financial model, synergy analysis, risk assessment
     - **CMO**: "Запуск нового продукту" — результат: positioning, TAM/SAM, launch scenarios

8. **Social Proof / Testimonials**
   - 3-4 кейси з цитатами (приклади вигаданих персон):
     - "Замість 3 тижнів аналізу — отримав звіт за 4 години" — CFO tech startup
     - "Рівень деталізації порівнянний з McKinsey deck" — CEO manufacturing
     - "Ризики та припущення прозорі, це критично для Board" — Board Member

9. **Security & Trust**
   - Заголовок: "Безпека даних — пріоритет"
   - Пункти:
     - Дані не зберігаються без вашого дозволу
     - On-premise / private LLM endpoints опція
     - GDPR-ready, audit trail
     - SSO integration
   - Іконки: Lock, Shield, Checkmark

10. **Pricing Teaser**
    - Заголовок: "Плани для команд будь-якого розміру"
    - 3 плани preview:
      - **Starter**: "1 користувач, 10 сесій/міс"
      - **Team**: "5 користувачів, необмежено"
      - **Enterprise**: "Custom, on-premise, SLA"
    - Link: "Переглянути детальніше" → /pricing

11. **CTA Final**
    - Заголовок: "Готові приймати кращі рішення?"
    - Button: "Розпочати безкоштовно"
    - Subtext: "Перші 3 сесії безкоштовно, без кредитної карти"

12. **Footer**
    - Лінки: Продукт, Ціни, Безпека, Документація, Блог
    - Соцмережі, контакти, © 2024

---

#### **Demo Page (/demo)**

**Мета**: Інтерактивна демонстрація роботи Orchestrator

**Компоненти:**

1. **Demo Input Section**
   - Заголовок: "Задайте стратегічне питання"
   - Textarea (великий): Placeholder = "Наприклад: Ми розглядаємо вихід на польський e-commerce ринок з нашою B2C платформою. Бюджет €500K, горизонт 18 місяців. Які ключові ризики?"
   - Dropdown: "Виберіть роль" (CEO / CFO / CMO / COO)
   - Button: "Запустити аналіз"

2. **Orchestrator Flow Visualizer**
   - Timeline bar з етапами:
     - **Step 1**: Problem Framing (status: processing / done)
     - **Step 2**: Hypothesis Decomposition
     - **Step 3**: Parallel Analysis (Market, Competitive, Financial, Risk)
     - **Step 4**: Strategy Frameworks
     - **Step 5**: Scenario Planning
     - **Step 6**: Decision Synthesis
     - **Step 7**: Report Generation
   - Кожен етап відображає:
     - Spinner (processing)
     - Checkmark (done)
     - Agent name
     - Time elapsed
     - Confidence level (після завершення)

3. **Agent Activity Feed**
   - Real-time список повідомлень:
     - "🔍 Market Intelligence: Calculating TAM for Polish e-commerce..."
     - "📊 Financial Modeling: Building 3-year P&L..."
     - "⚠️ Risk Assessment: Identified 7 key risks, evaluating mitigation..."
   - Кожне повідомлення: timestamp, agent icon, text

4. **Live Results Panel**
   - З'являється поступово, коли агенти завершують:
     - **Key Findings** (bullets):
       - "TAM: €2.3B, growing 12% YoY"
       - "Top competitors: Allegro, OLX, local players"
       - "Break-even: 14 months (base scenario)"
     - **Confidence**: Progress bar 87%
     - **Assumptions** (collapsible):
       - "CAC = €45 (based on industry benchmarks)"
       - "Churn rate = 5% (assumed)"
     - **Sources** (collapsible):
       - Link to Statista, Eurostat, competitor reports

5. **Final Executive Summary**
   - 1-page текст (scrollable box):
     - **Recommendation**: "Proceed with Polish market entry, focus on Warsaw/Kraków first"
     - **Key metrics**: TAM/SAM/SOM, P&L summary
     - **Risks**: Top 3 with mitigation
     - **Next steps**: 3 action items
   - Buttons:
     - "Download PDF"
     - "View detailed report"
     - "Run another scenario"

6. **CTA**
   - "Готові отримати реальні insights для вашого бізнесу?"
   - Button: "Створити акаунт"

---

#### **How It Works (/how-it-works)**

**Секції:**

1. **Hero**
   - Заголовок: "Як працює стратегічний AI-консультант"
   - Підзаголовок: "Від вашого питання до executive summary за лічені години"

2. **Deep Dive: Orchestrator**
   - Diagram: User Input → Orchestrator → Agents → Synthesizer → Output
   - Текст:
     - "Orchestrator — мозок системи, який розбирає ваше питання, визначає які агенти потрібні, координує паралельну і послідовну роботу"
     - "Кожен агент повертає результат з confidence level, припущеннями та джерелами"
     - "Decision Synthesizer зводить усе в єдину картину"

3. **Agent Workflow Examples**
   - Tabs:
     - **Market Entry**: Problem Framing → Market Intelligence + Competitive → Financial → Risk → Strategy
     - **Investment Decision**: Hypothesis Decomposer → Financial Modeling → Risk → Scenario Planner
     - **Product Launch**: Market Intelligence → Competitive → Strategy Frameworks → Scenario Planner

4. **Explainability & Trust**
   - Заголовок: "Чому можна довіряти результатам"
   - Пункти:
     - Confidence scores
     - Source attribution
     - Assumption listing
     - Advocate agent (devil's advocate)
     - Audit trail

5. **Integrations**
   - Grid іконок:
     - Web search (Google, Bing)
     - Financial data (Bloomberg, Yahoo Finance)
     - Industry databases
     - Your private docs (Google Drive, Dropbox)
     - BI tools (Tableau, Power BI)
     - Communication (Slack, Teams)

6. **CTA**
   - "Досліджуйте документацію" → /docs
   - "Спробуйте демо" → /demo

---

#### **Agents Page (/agents)**

**Мета**: Детальний опис кожного з 12 агентів

**Структура:**

1. **Hero**
   - Заголовок: "Ваша стратегічна AI-команда"
   - Підзаголовок: "12 спеціалізованих агентів працюють разом"

2. **Agent Cards Grid** (2 колонки)

Кожна карточка:
- **Назва агента**
- **Іконка** (Lucide icon)
- **Роль** (1 речення)
- **Що робить** (bullets)
- **Output format** (приклад JSON)
- **Типовий confidence range**
- **Use cases**

**Приклад карточки:**

---
**Market Intelligence Agent**
🌍 Іконка: Globe

**Роль**: Аналізує ринкові дані, тренди, розмір ринку

**Що робить**:
- Обчислює TAM / SAM / SOM
- Знаходить галузеві тренди (3-5 ключових)
- Ідентифікує сезонність та регіональні особливості
- Використовує web search, industry reports, statistical databases

**Output format**:
```json
{
  "tam": "€2.3B",
  "sam": "€450M",
  "som": "€45M",
  "trends": ["Trend 1", "Trend 2"],
  "confidence": 0.82,
  "sources": [...]
}
```

**Confidence range**: 0.70-0.90 (залежить від якості джерел)

**Use cases**: Market entry, product launch, sizing opportunities

---

(Аналогічно для всіх 12 агентів)

3. **CTA**
   - "Побачте агентів у дії" → /demo

---

#### **Use Cases (/use-cases)**

**Структура:**

1. **Hero**
   - Заголовок: "Реальні кейси, реальні результати"

2. **Persona Tabs**:
   - CEO
   - CFO
   - CMO
   - COO

Для кожної персони:

**Кейс 1, 2, 3** (collapsible cards):
- **Сценарій** (short description)
- **Питання** (user input)
- **Які агенти працювали**
- **Результат** (key findings)
- **Час виконання**
- **Confidence**
- **Цитата** (вигадана)

**Приклад:**

---
**CEO Case: Вихід на новий ринок**

**Сценарій**: Tech startup (B2B SaaS, €10M ARR) розглядає вихід на німецький ринок.

**Питання**: "Чи варто виходити на німецький B2B SaaS ринок? Бюджет €800K, горизонт 24 міс."

**Агенти**:
- Problem Framing
- Market Intelligence
- Competitive Analysis
- Financial Modeling
- Risk Assessment
- Strategy Frameworks (Ansoff, Porter)
- Scenario Planner (3 scenarios)
- Decision Synthesizer

**Результат**:
- TAM: €8.5B (CAGR 15%)
- Competitors: SAP, local players (medium threat)
- Break-even: 18 months (base), 12 months (best case)
- Recommendation: Proceed, focus on mid-market, Berlin/Munich first
- Key risk: Regulatory compliance (GDPR strict enforcement) — mitigation: hire local legal

**Час**: 3.5 години
**Confidence**: 88%

**Цитата**: "За один день я отримав те, на що моїй команді знадобилося б 2-3 тижні" — CEO, TechCorp

---

(По 3 кейси для кожної персони)

3. **CTA**
   - "Спробуйте для вашого випадку" → /demo

---

#### **Pricing (/pricing)**

**Структура:**

1. **Hero**
   - Заголовок: "Прозорі ціни для команд будь-якого розміру"
   - Підзаголовок: "Без прихованих платежів, скасуйте будь-коли"

2. **Pricing Cards** (3 колонки)

**Starter**
- **€299/міс** (або €249 при річній оплаті)
- 1 користувач
- 10 сесій/міс
- Базові агенти (6/12)
- Email support
- Export PDF
- Button: "Розпочати безкоштовно" (3 сесії trial)

**Team**
- **€999/міс** (або €849 при річній оплаті)
- До 5 користувачів
- Необмежено сесій
- Всі 12 агентів
- Priority support
- Slack/Teams інтеграція
- API access (50K calls/міс)
- Audit trail
- Button: "Розпочати trial"

**Enterprise**
- **Custom pricing**
- Необмежено користувачів
- On-premise / private LLM endpoints
- Custom integrations
- Dedicated account manager
- SLA 99.9%
- Advanced security (SSO, RBAC)
- Custom retention policy
- Button: "Звʼязатись з нами"

3. **FAQ Section** (collapsible):
   - "Що таке сесія?"
   - "Чи можна змінити план?"
   - "Чи зберігаються мої дані?"
   - "Які LLM використовуються?"
   - "Чи є API?"

4. **CTA**
   - "Не впевнені? Спробуйте безкоштовно" → Sign up

---

#### **Security (/security)**

**Секції:**

1. **Hero**
   - Заголовок: "Ваші дані під захистом"
   - Підзаголовок: "Enterprise-grade security & compliance"

2. **Data Privacy**
   - **No storage by default**: "Ваші запити не зберігаються, якщо ви не дозволите"
   - **Encryption**: "End-to-end encryption для всіх даних"
   - **Retention policy**: "Налаштовуйте, як довго зберігати дані (0-90 днів або назавжди)"

3. **Infrastructure**
   - **Private LLM endpoints**: "Для Enterprise — можливість використання власних моделей"
   - **On-premise deployment**: "Розгортання у вашій інфраструктурі"
   - **Vector DB encryption**: "Приватні документи зберігаються у зашифрованій vector DB"

4. **Compliance**
   - **GDPR-ready**: "Право на видалення, data portability"
   - **SOC 2 Type II** (in progress)
   - **ISO 27001** (in progress)
   - **Audit trail**: "Повний журнал всіх запитів та дій"

5. **Access Control**
   - **SSO**: Google, Microsoft, Okta
   - **RBAC**: Role-based access control
   - **2FA**: Two-factor authentication

6. **Risk Mitigation for Confidential Data**
   - Текст:
     - "Ризик: передача конфіденційних документів до зовнішніх LLM"
     - "Mitigation 1: Використовуйте Enterprise план з private endpoints"
     - "Mitigation 2: Anonymize sensitive data перед аналізом"
     - "Mitigation 3: On-premise deployment"

7. **CTA**
   - "Читайте повну Privacy Policy" → Link
   - "Звʼязатись з security team" → Contact

---

#### **Dashboard (/dashboard)**

**Після авторизації — головний екран**

**Layout**: Sidebar + Main content

**Sidebar**:
- Logo + user avatar
- Menu:
  - 🏠 Home
  - ✨ New Session
  - 📊 My Reports
  - 🔧 Settings
  - 📚 Docs
  - 🚪 Logout

**Main Content — Home**:

1. **Welcome Section**
   - "Вітаємо, [User Name]"
   - Quick stats:
     - Сесій цього місяця: 7/10
     - Середній confidence: 84%
     - Збережено звітів: 12

2. **Quick Action**
   - Large button: "+ Нова стратегічна сесія" → /dashboard/new-session

3. **Recent Sessions** (table):
   - Columns: Дата, Питання (перші 50 символів), Статус, Confidence, Actions
   - Actions: View | Duplicate | Delete

4. **Suggested Use Cases** (cards):
   - "Аналіз конкурентів"
   - "Оцінка інвестиції"
   - "Go-to-market стратегія"

---

#### **New Session (/dashboard/new-session)**

**Форма створення нової сесії**

1. **Step 1: Describe Your Challenge**
   - Textarea (large): "Опишіть ваше стратегічне питання детально"
   - Підказки (examples):
     - CEO: "Ми розглядаємо M&A угоду на €50M..."
     - CFO: "Потрібно оцінити ROI для нової product line..."
     - CMO: "Планую запуск у новому сегменті, TAM?..."

2. **Step 2: Context (optional fields)**
   - Industry (dropdown)
   - Region (multi-select)
   - Budget range (slider)
   - Timeframe (dropdown: 6/12/18/24 months)
   - KPIs of interest (checkboxes: Revenue, Profit, Market share, Brand, etc.)

3. **Step 3: Upload Documents (optional)**
   - Drag & drop area
   - "Додайте внутрішні документи, фінансові звіти, презентації (PDF, XLSX, DOCX)"
   - "Дані будуть зашифровані та використані тільки для цієї сесії"

4. **Step 4: Agent Selection**
   - Auto (recommended): "Orchestrator обере агентів автоматично"
   - Manual: Checkboxes для кожного з 12 агентів

5. **Button**: "Запустити аналіз"

**Після натискання** → Redirect to /dashboard/sessions/:id (live processing)

---

#### **Session Processing (/dashboard/sessions/:id)**

**Live view обробки**

**Layout**:

1. **Header**
   - Назва сесії (user question, скорочено)
   - Status badge: "Processing" / "Completed" / "Failed"
   - Timer: "Elapsed: 00:12:34"

2. **Orchestrator Timeline** (horizontal flow):
   - Step-by-step візуалізація (як на /demo)
   - Кожен step: icon, name, status (pending / processing / done / error)

3. **Agent Activity Panel** (2 колонки):
   - **Left**: Список активних агентів (cards)
     - Agent name
     - Status: spinner / checkmark
     - Progress bar
     - Current action: "Fetching market data from Statista..."
     - Confidence (якщо done): 87%
   - **Right**: Live log (scrollable feed)
     - Timestamped messages
     - "12:01 - Market Intelligence: TAM calculated"
     - "12:03 - Financial Modeling: Building P&L..."

4. **Intermediate Results** (collapsible sections):
   - Як тільки агент завершує, з'являється секція:
     - **Market Intelligence Results**
       - TAM: €X
       - Trends: ...
       - Confidence: 85%
       - Sources: [links]

5. **Final Results** (коли все готово):
   - **Executive Summary** (box):
     - 1-page текст
     - Confidence badge
   - **Buttons**:
     - "View Full Report" → /dashboard/reports/:id
     - "Download PDF"
     - "Open Scenario Planner" → /dashboard/scenario-planner/:id
     - "Share Report" (copy link)
     - "Run Follow-up" (duplicate session з іншим питанням)

---

#### **Report View (/dashboard/reports/:id)**

**Детальний звіт**

**Layout**: Sidebar TOC + Main content

**TOC** (left sidebar):
- Executive Summary
- Problem Framing
- Market Analysis
- Competitive Landscape
- Financial Projections
- Risk Assessment
- Strategy Recommendations
- Scenarios
- Appendix (Sources, Assumptions, Confidence Scores)

**Main Content** (scrollable):

Кожна секція:
- **Заголовок секції**
- **Agent badge** (який агент це створив)
- **Confidence level** (progress bar)
- **Content**:
  - Text
  - Tables (financial data)
  - Charts (market size, growth)
  - Bullets (key findings)
- **Assumptions** (collapsible)
- **Sources** (collapsible, links)

**Toolbar (top)**:
- "Download PDF"
- "Export to Excel" (for financial tables)
- "Share" (generate public link)
- "Create follow-up task" (Jira/Asana integration) — placeholder

**Footer**:
- "Generated on [date] at [time]"
- "Audit trail" (link to session log)

---

#### **Scenario Planner (/dashboard/scenario-planner/:id)**

**Інтерактивний інструмент для побудови сценаріїв**

**Layout**: Input panel (left) + Comparison table (right)

**Input Panel**:
- **Base Scenario** (from report)
- **Add Scenario** button
- Для кожного сценарію:
  - Назва (editable)
  - Sliders/Inputs:
    - CAC (Customer Acquisition Cost)
    - ARPU (Average Revenue Per User)
    - Churn rate
    - Growth rate
    - Fixed costs
    - Time to market
  - "Recalculate" button

**Comparison Table** (right):
- Columns: Base | Scenario 1 | Scenario 2 | Scenario 3
- Rows:
  - Revenue (Year 1/2/3)
  - Costs
  - Gross Profit
  - Break-even month
  - NPV
  - IRR
  - Risk score
- Highlighting: Best scenario (green), worst (red)

**Charts** (below table):
- Line chart: Revenue projection over time (all scenarios)
- Bar chart: Break-even comparison

**Buttons**:
- "Save scenarios"
- "Add to report"
- "Download comparison (XLSX)"

---

## 2. UI COMPONENTS — Детальний опис

### 2.1 Hero Section

**Desktop**:
- Full viewport height
- Centered content (max-width 1200px)
- Заголовок: font-size 4xl (56px), font-weight 700, letter-spacing tight
- Підзаголовок: font-size xl (20px), font-weight 400, opacity 90%
- CTA buttons:
  - Primary: bg-blue-600, hover:bg-blue-700, padding 16px 32px, rounded-lg, text-lg
  - Secondary: border-2 border-white, hover:bg-white/10

**Mobile**:
- Stack vertically
- Font-size smaller (3xl заголовок, lg підзаголовок)

---

### 2.2 Input for Strategic Question

**Component**: LargeTextarea

**Props**:
- placeholder: string
- maxLength: 2000
- rows: 8 (desktop), 6 (mobile)
- autoResize: true

**Styling**:
- border: 2px solid gray-300, focus:border-blue-500
- padding: 20px
- font-size: 16px
- background: white
- shadow-lg

**Helpers below**:
- Character counter: "450 / 2000"
- Suggestions: "Спробуйте: [example link]"

---

### 2.3 Orchestrator Flow Visualizer

**Component**: FlowTimeline

**Structure**: Horizontal stepper

**Each step**:
- Circle icon (number or agent icon)
- Label (agent name)
- Status indicator:
  - Pending: gray circle
  - Processing: blue spinner
  - Done: green checkmark
  - Error: red X
- Progress line (connects steps)

**Hover**: Tooltip з деталями (start time, elapsed time, confidence)

**Responsive**: Vertical on mobile

---

### 2.4 Agent Cards

**Component**: AgentCard

**Layout**: Card (300px × 400px)

**Content**:
- **Header**:
  - Agent icon (Lucide, 48px, color accent)
  - Agent name (text-xl, font-semibold)
- **Body**:
  - Role (text-sm, opacity 70%)
  - Description (bullets, text-sm)
  - Confidence badge (если завершено): "87% confident"
- **Footer** (if processing):
  - Progress bar
  - Status text: "Analyzing market data..."

**Styling**:
- border: 1px solid gray-200
- hover:shadow-xl
- rounded-xl
- padding: 24px

**States**:
- Idle (gray)
- Processing (blue border, pulse animation)
- Done (green border)
- Error (red border)

---

### 2.5 Interactive Scenario Planner

**Component**: ScenarioPlanner

**Layout**: Split screen

**Left Panel** (inputs):
- Scenario selector tabs
- For each variable:
  - Label + tooltip (explain)
  - Slider (with min/max)
  - Input field (numeric)
- "Recalculate" button

**Right Panel** (results):
- Table (comparison)
- Charts (recharts or similar)

**Interactions**:
- Slider change → debounce → recalculate
- Hover on chart → show data point
- Click scenario tab → highlight column

---

### 2.6 Financial Modelling Table

**Component**: FinancialTable

**Structure**: Table with sticky header

**Columns**: Metric | Year 1 | Year 2 | Year 3 | Notes

**Rows**:
- Revenue
- COGS
- Gross Profit
- Operating Expenses
- EBITDA
- Net Income
- Cash Flow

**Features**:
- Editable cells (for scenarios)
- Format numbers: currency (€1,234,567)
- Color coding: positive (green), negative (red)
- Export button: "Download XLSX"

---

### 2.7 Executive Summary PDF Export

**Component**: ExportButton

**Action**: Click → generate PDF (client-side or server-side)

**PDF Content**:
- Cover page: Logo, report title, date, user name
- TOC
- Executive summary (1 page)
- Key findings (bullets)
- Financial summary (table)
- Charts (embedded images)
- Assumptions & sources (appendix)

**Tech**: Use `react-pdf` або server-side generation (Puppeteer / LaTeX)

---

### 2.8 Trust/Security Block

**Component**: TrustSection

**Layout**: Grid 2x2 (desktop), stack (mobile)

**Cards**:
1. **Encryption** — icon Lock, text "End-to-end encryption"
2. **Compliance** — icon Shield, text "GDPR-ready, SOC 2 (in progress)"
3. **No storage** — icon Trash, text "Your data not stored by default"
4. **Audit trail** — icon FileText, text "Full transparency log"

**Styling**: Light background, icon + text, minimal

---

### 2.9 Pricing Plan Cards

**Component**: PricingCard

**Layout**: Card (350px × 600px)

**Content**:
- **Header**:
  - Plan name (text-2xl)
  - Price (text-4xl, bold) + "/міс"
  - Badge (if popular): "Most popular"
- **Body** (list):
  - Features (checkmarks)
  - Feature name + tooltip (if needed)
- **Footer**:
  - CTA button (full-width)

**Styling**:
- Border for non-highlighted
- Shadow + border-blue for highlighted (Team plan)

---

## 3. USER FLOWS — Детальні сценарії

### 3.1 CEO: Стратегічне рішення про новий ринок

**Персона**: Олена, CEO tech startup (B2B SaaS), €8M ARR, 50 employees

**Мета**: Оцінити доцільність виходу на французький ринок

**Контекст**: Board запитує про міжнародну експансію, потрібен аргументований план на наступну зустріч (за 1 тиждень)

**User Flow**:

1. **Landing page**
   - Олена заходить на сайт (Google → "AI strategic consultant")
   - Читає hero: "Стратегічний партнер на базі AI"
   - Клікає "Показати демонстрацію"

2. **Demo page**
   - Бачить приклад питання
   - Вводить своє: "Ми — B2B SaaS, €8M ARR, 50 співробітників. Розглядаємо вихід на французький ринок. Бюджет €600K, горизонт 18 місяців. Які ключові фактори успіху та ризики?"
   - Натискає "Запустити аналіз"
   - Бачить Orchestrator flow: Problem Framing → Market → Competitive → Financial...
   - Через 3-4 хвилини з'являється executive summary:
     - TAM France B2B SaaS: €6.2B
     - Key competitors: local + US giants
     - Break-even: 16 months
     - Confidence: 85%
   - Олена вражена деталізацією
   - Клікає "Створити акаунт"

3. **Sign up**
   - SSO (Google)
   - Обирає план "Team" (trial 14 днів)
   - Redirect to /dashboard

4. **Dashboard → New Session**
   - Олена створює нову сесію з тим самим питанням + додає внутрішній financial report (XLSX)
   - Натискає "Запустити аналіз"

5. **Processing**
   - Бачить live оновлення агентів
   - Market Intelligence: TAM refined (з урахуванням її даних)
   - Financial Modeling: використовує її історичні метрики (CAC, ARPU з XLSX)
   - Risk Assessment: виявляє 5 ключових ризиків
   - Через 1 годину (full analysis) — результат готовий

6. **Report view**
   - Олена переглядає детальний звіт (15 сторінок)
   - Секції:
     - Executive summary: "Рекомендація: Proceed, але focus on Paris + Lyon first"
     - Market: TAM €6.2B, SAM €800M, SOM €60M (realistic)
     - Competitive: SWOT, positioning map (ми сильні в X, слабкі в Y)
     - Financial: 3-year P&L, break-even 16 months, NPV €2.1M
     - Risk: Top 5 (regulatory, competition, hiring) + mitigation
     - Strategy: Ansoff matrix — market development, partnerships with local players
   - Confidence: 87%
   - Sources: 47 джерел (Statista, Eurostat, competitor sites, industry reports)

7. **Scenario Planner**
   - Олена відкриває Scenario Planner
   - Створює 3 сценарії:
     - Base (як у звіті)
     - Aggressive (більший бюджет, швидший launch)
     - Conservative (less budget, slow ramp)
   - Порівнює break-even, NPV, risk score
   - Вибирає Base як оптимальний

8. **Export & Share**
   - Завантажує PDF (executive summary, 5 pages)
   - Share link з Board members (view-only)
   - Створює follow-up task у Jira: "Hire country manager France"

9. **Board meeting**
   - Олена презентує звіт
   - Board задають питання — всі відповіді є у звіті (sources, assumptions)
   - Рішення: Approve French market entry

**Результат**: Олена заощадила 2-3 тижні роботи аналітиків, отримала data-driven recommendation, Board впевнений у рішенні

**Час у системі**: ~2 години (включаючи читання звіту)

---

### 3.2 CFO: Оцінка інвестиції / ROI

**Персона**: Андрій, CFO manufacturing company, €50M revenue, 200 employees

**Мета**: Оцінити ROI інвестиції €5M у автоматизацію виробництва

**Контекст**: CEO пропонує закупити нове обладнання, Андрій повинен порахувати фінансову модель та ризики

**User Flow**:

1. **Пошук**
   - Андрій шукає "AI financial modeling tool"
   - Знаходить сайт, читає use case "CFO: Investment evaluation"
   - Клікає "Розпочати безкоштовно"

2. **Sign up**
   - SSO (Microsoft — корпоративний акаунт)
   - Обирає "Starter" (10 сесій trial)

3. **Dashboard → New Session**
   - Питання: "Ми розглядаємо інвестицію €5M у автоматизацію виробництва (роботи + software). Очікування: зниження COGS на 15%, час окупності макс 36 місяців. Порахуйте ROI, NPV, IRR та ключові ризики."
   - Контекст:
     - Industry: Manufacturing
     - Timeframe: 5 років
     - Uploads: Current P&L (XLSX), equipment quotes (PDF)
   - Agent selection: Auto

4. **Processing**
   - Financial Modeling agent:
     - Імпортує поточний P&L
     - Calculates savings (15% COGS reduction)
     - Builds 5-year projection
     - Scenarios: base / best / worst (savings 10%-20%)
   - Risk Assessment:
     - Technology risk (обладнання може не працювати як очікується)
     - Implementation risk (delay)
     - Market risk (якщо demand падає, savings менш важливі)
   - Hypothesis Decomposer:
     - Перевіряє припущення: "15% savings realistic?" → порівнює з industry benchmarks

5. **Results**
   - Андрій отримує:
     - **ROI**: 28% (5 years)
     - **NPV**: €2.8M (discount rate 10%)
     - **IRR**: 18%
     - **Payback period**: 32 months (base scenario)
     - **Confidence**: 78% (середній, бо багато припущень)
     - **Key assumptions**:
       - Savings 15% (benchmark: 12-18%)
       - No major delays (risk: 30% chance of 6-month delay)
       - Demand stable (risk: if drops 20%, NPV → €1.2M)
     - **Risks**:
       1. Implementation delay (impact: high, likelihood: medium) — mitigation: hire experienced integrator
       2. Savings lower than expected (impact: medium) — mitigation: pilot test
       3. Financing cost (if interest rates rise) — mitigation: lock rate now

6. **Scenario Planner**
   - Андрій тестує sensitivity:
     - Якщо savings 10% замість 15% → Payback 42 місяці, ROI 18%
     - Якщо delay 6 місяців → Payback 38 місяців
     - Worst case (savings 10% + delay) → NPV €800K, ще acceptable

7. **Decision**
   - Андрій ділиться звітом з CEO та Board
   - Висновок: Approve, але з умовою — pilot test на 1 лінії перед full rollout

**Результат**: Андрій отримав детальну фінмодель за 1 годину замість 1 тижня роботи аналітиків

---

### 3.3 CMO: Маркетинговий вихід / пілот

**Персона**: Марія, CMO e-commerce компанії (fashion), €20M revenue

**Мета**: Оцінити запуск нової product line (sustainable fashion) — TAM, positioning, go-to-market

**Контекст**: Команда product пропонує sustainable line, Марія повинна оцінити ринковий потенціал та створити launch plan

**User Flow**:

1. **Рекомендація**
   - Марія отримує рекомендацію від колеги CFO (Андрій з попереднього кейсу)
   - Заходить на сайт, читає use case "CMO: Product launch"

2. **Demo**
   - Вводить питання: "Ми — fashion e-commerce, €20M revenue. Плануємо запуск sustainable fashion line. Який TAM у Europe, хто конкуренти, яка оптимальна стратегія позиціонування та go-to-market?"
   - Бачить швидкий результат (demo)
   - Клікає Sign up

3. **New Session (детальна)**
   - Питання (розширене): "Sustainable fashion line: eco-friendly materials, price premium 20-30%, target audience: millennials/Gen Z, eco-conscious. Регіони: Germany, France, UK, Netherlands. Бюджет launch: €300K."
   - Uploads: Current customer data (CSV з segments), competitor analysis draft (PDF)

4. **Processing**
   - **Market Intelligence**:
     - TAM sustainable fashion Europe: €18B (CAGR 12%)
     - Trends: eco-conscious consumers growing, regulatory push (EU Green Deal)
     - Seasonality: Q3-Q4 peak
   - **Competitive Analysis**:
     - Direct competitors: Patagonia, Veja, Organic Basics, + local brands
     - SWOT: ми — strong existing customer base, weak — newbie in sustainable
     - Positioning map: Price (mid-high) × Sustainability (high)
   - **Strategy Frameworks**:
     - Ansoff: Product development (new product, existing customers first)
     - JTBD: Jobs-to-be-done → "I want to look good while helping planet"
     - Blue Ocean: можемо уникнути цінової війни через storytelling + transparency
   - **Scenario Planner**:
     - Scenario 1: Soft launch (existing customers, email) — low cost, low risk
     - Scenario 2: Aggressive (influencer partnerships, paid ads) — high cost, high reward
     - Scenario 3: Partnerships (collab з eco brands) — medium

5. **Results**
   - Марія отримує:
     - **Recommendation**: Soft launch → test → scale
     - **TAM/SAM/SOM**: €18B / €2.5B / €150M (realistic 3-year)
     - **Positioning**: "Affordable sustainable fashion with full transparency"
     - **GTM plan** (phases):
       - Phase 1 (Month 1-2): Email existing customers, limited collection (10 SKUs)
       - Phase 2 (Month 3-4): Influencer partnerships (micro-influencers, €50K budget)
       - Phase 3 (Month 5-6): Paid ads (Google, Meta, €100K)
       - Phase 4 (Month 7+): Expand collection, retail partnerships
     - **KPIs**: Conversion rate 2.5%, CAC €35, LTV €180
     - **Confidence**: 81%

6. **Scenario comparison**
   - Марія порівнює 3 scenarios у Scenario Planner
   - Обирає Scenario 1 (soft launch) для MVP, з планом переходу на Scenario 2 через 3 місяці

7. **Execution**
   - Завантажує PDF
   - Створює presentation для product team
   - Shares report з CEO
   - Запускає кампанію

**Результат**: Марія отримала market sizing, competitive analysis, GTM plan за 2 години. Launch успішний (actual results близькі до прогнозу).

---

## 4. МІКРОКОПІ, ЗАГОЛОВКИ, CTA

### 4.1 Hero Section

**Українською:**
- Заголовок: "Стратегічний партнер на базі AI для C‑level рішень"
- Підзаголовок: "Отримуйте перевірені стратегії, моделі й рекомендації з оцінкою ризиків та фінансовою аналітикою — за 1 сесію"
- CTA Primary: "Запитати стратегію"
- CTA Secondary: "Показати демонстрацію"

**Англійською:**
- Headline: "AI-Powered Strategic Partner for C-Level Decisions"
- Subheadline: "Get validated strategies, models, and recommendations with risk assessment and financial analysis — in one session"
- CTA Primary: "Ask Your Strategy"
- CTA Secondary: "See Demo"

---

### 4.2 Як це працює

**UA:**
- Заголовок секції: "Як працює AI-консультант"
- Крок 1: "Опишіть виклик" — "Що вас цікавить: новий ринок, інвестиція, оптимізація?"
- Крок 2: "AI-агенти працюють" — "12 спеціалізованих агентів аналізують ринок, фінанси, ризики паралельно"
- Крок 3: "Отримайте стратегію" — "Executive summary + детальний звіт з рівнем упевненості та джерелами"

**EN:**
- Section title: "How the AI Consultant Works"
- Step 1: "Describe Your Challenge" — "New market, investment, optimization?"
- Step 2: "AI Agents Work" — "12 specialized agents analyze market, financials, risks in parallel"
- Step 3: "Get Your Strategy" — "Executive summary + detailed report with confidence levels and sources"

---

### 4.3 Агенти

**UA:**
- Заголовок: "12 AI-агентів — ваша стратегічна команда"
- Підзаголовок: "Кожен агент — експерт у своїй області, разом вони створюють повну картину"
- CTA: "Побачте агентів у дії"

**EN:**
- Headline: "12 AI Agents — Your Strategic Team"
- Subheadline: "Each agent is an expert in their domain, together they create the full picture"
- CTA: "See Agents in Action"

**Приклади карточок:**

1. **Orchestrator**
   - UA: "Координатор, який керує усіма агентами та процесом"
   - EN: "Coordinator managing all agents and the workflow"

2. **Problem Framing**
   - UA: "Уточнює контекст, цілі, часові рамки та KPI"
   - EN: "Clarifies context, goals, timeframe, and KPIs"

3. **Market Intelligence**
   - UA: "Аналізує ринок: TAM, тренди, сезонність, регіональні особливості"
   - EN: "Analyzes market: TAM, trends, seasonality, regional specifics"

4. **Competitive Analysis**
   - UA: "Вивчає конкурентів: SWOT, positioning map, сильні/слабкі сторони"
   - EN: "Studies competitors: SWOT, positioning map, strengths/weaknesses"

5. **Financial Modeling**
   - UA: "Будує фінансові моделі: P&L, ROI, NPV, IRR, сценарії"
   - EN: "Builds financial models: P&L, ROI, NPV, IRR, scenarios"

6. **Risk Assessment**
   - UA: "Ідентифікує ризики, оцінює ймовірність та вплив, пропонує mitigation"
   - EN: "Identifies risks, assesses probability and impact, suggests mitigation"

7. **Strategy Frameworks**
   - UA: "Застосовує Porter, Ansoff, Blue Ocean, JTBD для стратегії"
   - EN: "Applies Porter, Ansoff, Blue Ocean, JTBD frameworks"

8. **Advocate Agent**
   - UA: "Грає роль скептика, ставить критичні питання"
   - EN: "Plays devil's advocate, asks critical questions"

9. **Scenario Planner**
   - UA: "Створює альтернативні сценарії з метриками та ресурсами"
   - EN: "Creates alternative scenarios with metrics and resources"

10. **Decision Synthesizer**
    - UA: "Зводить усі дані в єдину рекомендацію"
    - EN: "Synthesizes all data into a single recommendation"

11. **Output Agent**
    - UA: "Форматує звіти: executive summary, детальні секції, PDF"
    - EN: "Formats reports: executive summary, detailed sections, PDF"

12. **Hypothesis Decomposer**
    - UA: "Розбиває складне питання на перевірювані гіпотези"
    - EN: "Breaks down complex questions into testable hypotheses"

---

### 4.4 Демо

**UA:**
- Заголовок: "Спробуйте прямо зараз"
- Placeholder input: "Наприклад: Чи варто виходити на німецький ринок з нашим B2B SaaS? Бюджет €800K, горизонт 24 міс."
- Button: "Запустити аналіз"
- Processing text: "Агенти працюють... Це займе 3-5 хвилин"
- Result title: "Ваш executive summary готовий"

**EN:**
- Headline: "Try It Right Now"
- Placeholder: "E.g., Should we enter the German B2B SaaS market? Budget €800K, 24-month horizon."
- Button: "Run Analysis"
- Processing: "Agents are working... This will take 3-5 minutes"
- Result: "Your executive summary is ready"

---

### 4.5 Кейси

**UA:**
- Заголовок: "Реальні кейси, реальні результати"
- Підзаголовок: "Як C-level команди використовують платформу"
- Tabs: CEO | CFO | CMO | COO

**EN:**
- Headline: "Real Cases, Real Results"
- Subheadline: "How C-level teams use the platform"
- Tabs: CEO | CFO | CMO | COO

---

### 4.6 Ціни

**UA:**
- Заголовок: "Прозорі ціни для команд будь-якого розміру"
- Підзаголовок: "Без прихованих платежів, скасуйте будь-коли"
- Badge (Team plan): "Найпопулярніший"
- Button Starter: "Розпочати безкоштовно"
- Button Team: "Розпочати trial"
- Button Enterprise: "Звʼязатись з нами"

**EN:**
- Headline: "Transparent Pricing for Teams of Any Size"
- Subheadline: "No hidden fees, cancel anytime"
- Badge: "Most Popular"
- Button Starter: "Start Free"
- Button Team: "Start Trial"
- Button Enterprise: "Contact Us"

---

### 4.7 FAQ

**UA:**

1. **Що таке сесія?**
   - Сесія — це один повний цикл аналізу: від вашого питання до фінального звіту з рекомендаціями. Одна сесія може тривати від 30 хвилин до 2 годин, залежно від складності.

2. **Чи можна змінити план?**
   - Так, ви можете upgrade або downgrade будь-коли. Зміни застосовуються з наступного billing cycle.

3. **Чи зберігаються мої дані?**
   - За замовчуванням — ні. Ви можете налаштувати retention policy (0-90 днів або назавжди) у Settings. Усі дані шифруються.

4. **Які LLM використовуються?**
   - Ми використовуємо multi-LLM архітектуру: GPT-4, Claude, Gemini, залежно від задачі агента. Для Enterprise є опція private endpoints.

5. **Чи є API?**
   - Так, на планах Team та Enterprise доступне API для інтеграції з вашими системами (BI, CRM, Slack, etc.).

6. **Як працює trial?**
   - Trial на 14 днів (Team) або 3 безкоштовні сесії (Starter). Кредитна карта не потрібна для старту.

7. **Чи можна використовувати для конфіденційних даних?**
   - Так, але рекомендуємо Enterprise план з on-premise deployment або private LLM endpoints для максимальної безпеки.

**EN:**

1. **What is a session?**
   - A session is one complete analysis cycle: from your question to the final report with recommendations. A session can take 30 min to 2 hours, depending on complexity.

2. **Can I change my plan?**
   - Yes, upgrade or downgrade anytime. Changes apply from the next billing cycle.

3. **Is my data stored?**
   - By default, no. You can configure a retention policy (0-90 days or forever) in Settings. All data is encrypted.

4. **Which LLMs are used?**
   - We use a multi-LLM architecture: GPT-4, Claude, Gemini, depending on the agent's task. Enterprise plans offer private endpoint options.

5. **Is there an API?**
   - Yes, Team and Enterprise plans include API access for integration with your systems (BI, CRM, Slack, etc.).

6. **How does the trial work?**
   - 14-day trial (Team) or 3 free sessions (Starter). No credit card required to start.

7. **Can I use it for confidential data?**
   - Yes, but we recommend the Enterprise plan with on-premise deployment or private LLM endpoints for maximum security.

---

## 5. ТЕХНІЧНІ ВИМОГИ

### 5.1 Recommended Tech Stack

**Frontend:**
- Framework: **Next.js 14** (App Router)
- Styling: **Tailwind CSS**
- UI Library: **shadcn/ui** (для базових компонентів)
- Icons: **Lucide React**
- Charts: **Recharts** або **Chart.js**
- State management: **Zustand** або **React Context**
- Forms: **React Hook Form** + **Zod** (validation)
- API client: **Fetch API** + **SWR** (data fetching)

**Backend / Orchestrator:**
- Language: **Node.js (TypeScript)** або **Python (FastAPI)**
- Framework: **NestJS** (Node) або **FastAPI** (Python)
- Job Queue: **BullMQ** (Node + Redis) або **Celery** (Python + Redis)
- Database: **Supabase (PostgreSQL)** — для users, sessions, reports, audit log
- Vector DB: **Supabase (pgvector)** — для приватних документів
- LLM Integration:
  - OpenAI SDK (GPT-4)
  - Anthropic SDK (Claude)
  - Google Generative AI SDK (Gemini)
  - LangChain / LlamaIndex (для orchestration)
- Web Search: **Serper API** або **Google Custom Search API**
- File processing: **Pandas** (CSV/XLSX), **PyPDF2** (PDF), **python-docx** (DOCX)

**Infrastructure:**
- Hosting: **Vercel** (frontend) + **Railway** / **Render** / **AWS** (backend)
- CDN: Vercel Edge
- Monitoring: **Sentry** (errors), **PostHog** (analytics)
- Logging: **Winston** (Node) або **Loguru** (Python)

**Authentication:**
- **Supabase Auth** — SSO (Google, Microsoft, Okta), email/password
- Session management: JWT

**CI/CD:**
- GitHub Actions
- Automated tests: **Jest** (frontend), **Pytest** (backend)

---

### 5.2 Multi-LLM Architecture Design

**Принципи:**
- Кожен агент використовує найбільш підходящу модель:
  - **GPT-4**: Market Intelligence, Hypothesis Decomposer (reasoning)
  - **Claude**: Problem Framing, Advocate Agent (nuanced critique)
  - **Gemini**: Competitive Analysis, Strategy Frameworks (fast, cost-effective)
- Fallback logic: якщо одна модель недоступна, використовується інша
- Cost optimization: дешеві моделі для simple tasks, дорогі для critical

**Adapter Pattern:**
```typescript
interface LLMAdapter {
  call(prompt: string, options: LLMOptions): Promise<LLMResponse>;
}

class OpenAIAdapter implements LLMAdapter { ... }
class AnthropicAdapter implements LLMAdapter { ... }
class GeminiAdapter implements LLMAdapter { ... }

// Orchestrator вибирає адаптер:
const adapter = selectAdapter(agentType);
const response = await adapter.call(prompt, options);
```

---

### 5.3 API Contract

**Base URL**: `https://api.strategicconsultant.ai/v1`

**Authentication**: Bearer token (JWT from Supabase Auth)

#### **Endpoints**

##### 1. `POST /sessions`
Створити нову сесію

**Request**:
```json
{
  "question": "string (max 2000 chars)",
  "context": {
    "industry": "string?",
    "region": "string[]?",
    "budget": "number?",
    "timeframe_months": "number?",
    "kpis": "string[]?"
  },
  "documents": [
    {
      "filename": "string",
      "content_base64": "string",
      "type": "pdf | xlsx | docx | csv"
    }
  ],
  "agent_selection": "auto | manual",
  "selected_agents": "string[]?" // якщо manual
}
```

**Response**:
```json
{
  "session_id": "uuid",
  "status": "created",
  "created_at": "ISO8601",
  "estimated_duration_minutes": 60
}
```

##### 2. `GET /sessions/:id`
Отримати статус сесії

**Response**:
```json
{
  "session_id": "uuid",
  "status": "processing | completed | failed",
  "progress": 0.67,
  "current_step": "Financial Modeling",
  "agents": [
    {
      "name": "Market Intelligence",
      "status": "done",
      "confidence": 0.87,
      "started_at": "ISO8601",
      "completed_at": "ISO8601"
    },
    ...
  ],
  "elapsed_seconds": 1234
}
```

##### 3. `GET /sessions/:id/report`
Отримати фінальний звіт

**Response**:
```json
{
  "session_id": "uuid",
  "executive_summary": "string (1-page text)",
  "confidence": 0.85,
  "assumptions": ["string", ...],
  "detailed_findings": {
    "market_analysis": { ... },
    "competitive_landscape": { ... },
    "financial_projections": { ... },
    "risk_assessment": { ... },
    "strategy_recommendations": { ... }
  },
  "next_steps": ["string", ...],
  "sources": [
    {
      "title": "string",
      "url": "string",
      "snippet": "string",
      "accessed_at": "ISO8601"
    },
    ...
  ],
  "created_at": "ISO8601"
}
```

##### 4. `POST /sessions/:id/scenarios`
Створити сценарії

**Request**:
```json
{
  "scenarios": [
    {
      "name": "Base",
      "variables": {
        "cac": 45,
        "arpu": 120,
        "churn_rate": 0.05,
        "growth_rate": 0.15
      }
    },
    ...
  ]
}
```

**Response**:
```json
{
  "scenarios": [
    {
      "name": "Base",
      "results": {
        "revenue_y1": 1200000,
        "revenue_y2": 1800000,
        "revenue_y3": 2500000,
        "break_even_month": 16,
        "npv": 2100000,
        "irr": 0.22
      }
    },
    ...
  ]
}
```

##### 5. `POST /sessions/:id/export`
Експортувати звіт у PDF

**Response**: Binary (PDF file)

##### 6. `GET /sessions`
Отримати список сесій користувача

**Query params**: `?limit=20&offset=0&status=completed`

**Response**:
```json
{
  "sessions": [
    {
      "session_id": "uuid",
      "question_preview": "string (50 chars)",
      "status": "completed",
      "confidence": 0.87,
      "created_at": "ISO8601"
    },
    ...
  ],
  "total": 42
}
```

##### 7. `DELETE /sessions/:id`
Видалити сесію (GDPR compliance)

**Response**: `204 No Content`

---

### 5.4 Inter-Agent Contract (JSON Schema)

**Format**:
```json
{
  "agent": "Market Intelligence",
  "input": {
    "brief": {
      "goal": "Calculate TAM for Polish e-commerce",
      "region": "Poland",
      "industry": "E-commerce",
      "timeframe": "2024-2026"
    },
    "context": { ... }
  },
  "output": {
    "summary": "TAM €2.3B, growing 12% YoY",
    "data": {
      "tam": 2300000000,
      "sam": 450000000,
      "som": 45000000,
      "cagr": 0.12,
      "trends": [
        "Mobile commerce growing",
        "Sustainability focus",
        "Cross-border declining"
      ],
      "seasonality": "Q4 peak (30% of annual)"
    },
    "confidence": 0.82,
    "assumptions": [
      "GDP growth 3% annually",
      "Internet penetration 85%"
    ],
    "sources": [
      {
        "title": "Eurostat E-commerce Report 2024",
        "url": "https://...",
        "snippet": "...",
        "reliability": "high"
      },
      ...
    ],
    "limitations": [
      "Limited data for rural areas"
    ]
  },
  "metadata": {
    "model_used": "gpt-4",
    "tokens": 1234,
    "cost_usd": 0.05,
    "duration_seconds": 45,
    "started_at": "ISO8601",
    "completed_at": "ISO8601"
  }
}
```

**Validation**: Використовувати Zod або Pydantic для валідації кожного output перед передачею далі

---

### 5.5 Orchestrator Flow — Детальний приклад

**User Question**: "Ми розглядаємо вихід на французький B2B SaaS ринок. Бюджет €600K, горизонт 18 місяців. Які ключові фактори успіху та ризики?"

**Orchestrator Logic**:

1. **Parse Input**
   - Extract: тип питання (market entry), industry (B2B SaaS), region (France), budget (€600K), timeframe (18 months)
   - Determine: потрібні агенти — всі 12

2. **Step 1: Problem Framing**
   - Agent: Problem Framing
   - Input: user question
   - Output: уточнений brief
     - Goal: Market entry decision
     - Success metrics: TAM/SAM, break-even time, competitive positioning
     - Assumptions: CAC/ARPU unknown (need to estimate)
   - Next: передати brief усім агентам

3. **Step 2: Hypothesis Decomposition**
   - Agent: Hypothesis Decomposer
   - Input: brief
   - Output: 5 гіпотез
     - H1: Market size sufficient (TAM > €1B)
     - H2: Competition manageable (top 3 players < 50% share)
     - H3: Financial feasibility (break-even < 18 months)
     - H4: Regulatory barriers low
     - H5: Talent availability (hiring feasible)
   - Prioritize: H1, H3 critical → focus resources

4. **Step 3: Parallel Analysis**
   - **Запускаються паралельно:**
     - **Market Intelligence**: Calculate TAM/SAM/SOM France
     - **Competitive Analysis**: Identify top competitors, SWOT
     - **Financial Modeling**: Build 3-year P&L (scenarios)
     - **Risk Assessment**: Identify risks (regulatory, competitive, operational)
   - Wait for all to complete
   - Duration: ~30-45 min (залежить від API calls)

5. **Step 4: Strategy Frameworks**
   - Agent: Strategy Frameworks
   - Input: результати Step 3
   - Output:
     - Ansoff: Market development strategy
     - Porter: Differentiation via superior support
     - Blue Ocean: Focus on underserved SMB segment
   - Confidence: 0.81

6. **Step 5: Advocate Agent**
   - Agent: Advocate
   - Input: all outputs so far
   - Output: критичні питання
     - "Чому конкуренти не домінують у SMB сегменті? Може, він unprofitable?"
     - "Якщо CAC €200 (assumption), чи реально окупити при ARPU €500?"
   - Orchestrator: повертає до Financial Modeling з уточненням

7. **Step 6: Scenario Planner**
   - Agent: Scenario Planner
   - Input: financial model + risks
   - Output: 3 scenarios
     - Base: €600K budget, break-even 16 months, NPV €1.2M
     - Best: aggressive, break-even 12 months, NPV €2.5M
     - Worst: slow adoption, break-even 24 months, NPV -€200K
   - Confidence: 0.78

8. **Step 7: Decision Synthesizer**
   - Agent: Decision Synthesizer
   - Input: усі outputs
   - Output: єдина рекомендація
     - "Proceed with French market entry, но focus on SMB segment (underserved)"
     - Key success factors: local partnerships, French-speaking support
     - Risks: competition from US giants, regulatory (GDPR enforcement)
     - Confidence: 0.83

9. **Step 8: Output Agent**
   - Agent: Output Agent
   - Input: synthesis
   - Output: structured report
     - Executive summary (1 page)
     - Detailed sections (15 pages)
     - Sources (47)
     - Assumptions (12)
   - Format: JSON + PDF generation

10. **Return to User**
    - Orchestrator повертає `session_id` + report
    - User отримує notification (email / in-app)

**Total duration**: 1.5-2 години (для складного запиту з документами)

**Cost**: ~$5-10 (LLM API calls + web search)

---

### 5.6 Supabase Schema Design

**Tables**:

#### `users`
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  company TEXT,
  role TEXT, -- CEO, CFO, CMO, etc.
  plan TEXT DEFAULT 'starter', -- starter, team, enterprise
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
```

#### `sessions`
```sql
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  context JSONB,
  status TEXT DEFAULT 'created', -- created, processing, completed, failed
  progress NUMERIC DEFAULT 0,
  confidence NUMERIC,
  created_at TIMESTAMPTZ DEFAULT now(),
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ
);

ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own sessions"
  ON sessions FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create sessions"
  ON sessions FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete own sessions"
  ON sessions FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());
```

#### `agent_outputs`
```sql
CREATE TABLE agent_outputs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
  agent_name TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  input JSONB,
  output JSONB,
  confidence NUMERIC,
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  error TEXT
);

ALTER TABLE agent_outputs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view outputs of own sessions"
  ON agent_outputs FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM sessions
      WHERE sessions.id = agent_outputs.session_id
      AND sessions.user_id = auth.uid()
    )
  );
```

#### `reports`
```sql
CREATE TABLE reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
  executive_summary TEXT,
  detailed_findings JSONB,
  assumptions TEXT[],
  sources JSONB,
  next_steps TEXT[],
  confidence NUMERIC,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view reports of own sessions"
  ON reports FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM sessions
      WHERE sessions.id = reports.session_id
      AND sessions.user_id = auth.uid()
    )
  );
```

#### `scenarios`
```sql
CREATE TABLE scenarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  variables JSONB,
  results JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE scenarios ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage scenarios of own sessions"
  ON scenarios FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM sessions
      WHERE sessions.id = scenarios.session_id
      AND sessions.user_id = auth.uid()
    )
  );
```

#### `audit_log`
```sql
CREATE TABLE audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  session_id UUID REFERENCES sessions(id),
  action TEXT NOT NULL, -- create_session, view_report, export_pdf, etc.
  details JSONB,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own audit log"
  ON audit_log FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());
```

#### `documents` (приватні документи користувачів)
```sql
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
  filename TEXT NOT NULL,
  file_type TEXT,
  file_size INTEGER,
  storage_path TEXT, -- Supabase Storage path
  embedding VECTOR(1536), -- for pgvector (OpenAI embeddings)
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own documents"
  ON documents FOR ALL
  TO authenticated
  USING (user_id = auth.uid());

-- Index for vector similarity search
CREATE INDEX ON documents USING ivfflat (embedding vector_cosine_ops);
```

---

### 5.7 Authentication (SSO)

**Supabase Auth supports**:
- Google OAuth
- Microsoft OAuth
- Okta (SAML for Enterprise)
- Email/Password (with 2FA option)

**Configuration** (in Supabase dashboard):
1. Enable providers
2. Add redirect URLs
3. (For Enterprise) Configure SAML with customer's IdP

**Frontend** (Next.js):
```typescript
import { createClient } from '@/lib/supabase/client';

const signInWithGoogle = async () => {
  const supabase = createClient();
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`
    }
  });
};
```

**Backend**: JWT validation via Supabase SDK

---

### 5.8 Data Retention & Privacy Policy Notes

**Retention Options** (user configurable):
- **No storage** (default for Starter): Сесії видаляються після завершення (only metadata для billing)
- **30 days**: Сесії автоматично видаляються через 30 днів
- **90 days**: Для Team
- **Custom / Forever**: Для Enterprise

**GDPR Compliance**:
- **Right to access**: User може завантажити всі свої дані (JSON export)
- **Right to deletion**: User може видалити акаунт → каскадне видалення всіх sessions, reports, documents
- **Data portability**: Export all data у machine-readable format
- **Consent**: Чекбокс при sign-up: "Я погоджуюсь на обробку даних згідно з Privacy Policy"

**Privacy Policy (key points)**:
- "Ми не продаємо ваші дані третім сторонам"
- "Дані використовуються тільки для надання сервісу"
- "LLM providers (OpenAI, Anthropic, Google) не зберігають ваші запити (за умовами API)"
- "Для Enterprise доступна опція on-premise / private endpoints"
- "Всі дані шифруються at rest (AES-256) та in transit (TLS 1.3)"

---

### 5.9 Logging & Explainability

**Logging Requirements**:
- Кожен запит до LLM → log (prompt, model, tokens, cost, response, latency)
- Кожен agent output → зберігати у `agent_outputs` table
- Audit trail → `audit_log` table (кожна дія користувача)

**Explainability**:
- **Confidence level**: Кожен агент повертає 0.0-1.0
  - Формула (приклад):
    `confidence = (source_quality * 0.4) + (data_completeness * 0.3) + (model_agreement * 0.3)`
  - source_quality: high (1.0), medium (0.7), low (0.4)
  - data_completeness: % доступних даних
  - model_agreement: якщо 2 моделі дають схожі результати → higher confidence

- **Assumptions**: Кожен агент чітко вказує припущення
  - Приклад: "Assumed CAC = €45 based on industry benchmark (source: XYZ)"
  - У звіті: collapsible секція "Assumptions"

- **Sources**: Attribution для кожного fact
  - Приклад: "TAM €2.3B (Source: Eurostat 2024, link)"
  - Кожне джерело: title, URL, snippet, reliability score

**UI для explainability**:
- Confidence badge (колір: green > 0.8, yellow 0.6-0.8, red < 0.6)
- Hover на будь-якому claim → tooltip з джерелом
- "View assumptions" button → modal з повним списком

---

## 6. INTEGRATIONS

### 6.1 Web Search (SERP)

**Provider**: Serper API або Google Custom Search API

**Use case**: Market Intelligence, Competitive Analysis

**Implementation**:
```typescript
import axios from 'axios';

async function webSearch(query: string) {
  const response = await axios.post('https://google.serper.dev/search', {
    q: query,
    gl: 'us', // geography
    hl: 'en', // language
    num: 10
  }, {
    headers: { 'X-API-KEY': process.env.SERPER_API_KEY }
  });

  return response.data.organic.map((result: any) => ({
    title: result.title,
    url: result.link,
    snippet: result.snippet
  }));
}
```

**Агенти, які використовують**: Market Intelligence, Competitive Analysis, Risk Assessment

---

### 6.2 Галузеві бази даних

**Приклади**:
- **Statista**: Market size, trends (via API або scraping з дозволом)
- **Eurostat**: European statistical data (API доступний)
- **World Bank Open Data**: Economic indicators (API)
- **Crunchbase**: Competitor funding, company data (API за підпискою)

**Integration**: HTTP calls до публічних API

---

### 6.3 Фінансові сервіси

**CSV/Excel Import**:
- User uploads фінансові звіти
- Backend парсить (Pandas для Python, xlsx для Node)
- Екстрактить метрики: Revenue, COGS, ARPU, CAC, churn
- Financial Modeling agent використовує ці дані

**Yahoo Finance** (для публічних компаній):
- Use `yfinance` library (Python) для отримання historical data, P/E ratio, etc.

---

### 6.4 BI / MDM (Master Data Management)

**Tableau / Power BI**:
- Export звітів у формат, сумісний з BI (CSV, JSON)
- Або: REST API endpoint для BI tools для прямого читання даних

**Implementation**: Endpoint `/api/v1/sessions/:id/bi-export`

---

### 6.5 Slack / Teams

**Use case**: Notification коли сесія завершена

**Slack**:
```typescript
import { WebClient } from '@slack/web-api';

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

async function notifySessionComplete(userId: string, sessionId: string) {
  await slack.chat.postMessage({
    channel: userId, // DM
    text: `Your strategic session is complete! View report: https://app.com/reports/${sessionId}`
  });
}
```

**Teams**: Similar via Microsoft Graph API

**Додатково**: Slack bot command `/strategy ask [question]` → створює сесію

---

### 6.6 Google Drive / Dropbox

**Use case**: User може підключити Google Drive, система витягує документи для аналізу

**Google Drive API**:
- OAuth для доступу
- Читання файлів (PDF, XLSX, DOCX)
- Конвертація у text → embedding → vector DB

**Implementation**: OAuth flow + файловий import

---

### 6.7 Приватні документи (Vector DB)

**Use case**: User uploads корпоративні документи (strategy docs, financial reports), система робить embedding і використовує для context

**Stack**:
- **Supabase pgvector**: Зберігання embeddings
- **OpenAI Embeddings API**: Генерація векторів

**Flow**:
1. User uploads document
2. Backend розбиває на chunks (512 tokens)
3. Для кожного chunk → embedding (OpenAI `text-embedding-ada-002`)
4. Зберігає у `documents` table (з `embedding` полем)
5. Коли агент потребує context → similarity search:
   ```sql
   SELECT filename, metadata, content
   FROM documents
   WHERE user_id = $1
   ORDER BY embedding <-> $2::vector
   LIMIT 5;
   ```
6. Агент отримує relevant chunks → використовує у prompt

**Security**: Embeddings шифруються, доступ тільки через RLS

---

## 7. ACCEPTANCE CRITERIA & DELIVERABLES

### 7.1 MVP (Release 1) — Acceptance Criteria

**Functional**:
1. ✅ User може створити акаунт (SSO Google/Microsoft)
2. ✅ User може задати strategic question (textarea, 2000 chars)
3. ✅ User може додати context (industry, region, budget, timeframe)
4. ✅ Система запускає Orchestrator → координує 12 агентів
5. ✅ User бачить real-time progress (timeline, agent status)
6. ✅ Після завершення — executive summary (1 page) + детальний звіт (10-15 pages)
7. ✅ Звіт містить: confidence level, assumptions, sources (min 10 sources)
8. ✅ User може download PDF
9. ✅ User може створити 3 scenarios (Scenario Planner)
10. ✅ User може переглянути історію sessions
11. ✅ Audit trail: всі дії логуються
12. ✅ Pricing page: 3 плани, trial опція
13. ✅ Security page: privacy policy, GDPR notes

**Non-Functional**:
1. ✅ Session processing time: < 2 години (для typical question)
2. ✅ Confidence level: avg > 0.75
3. ✅ Uptime: > 99% (для MVP acceptable)
4. ✅ Mobile-responsive (усі сторінки)
5. ✅ Accessibility: WCAG AA compliance

**Test Case (User Story)**:
**As a CEO, I want to evaluate market entry, so that I can present data-driven recommendation to the Board.**

**Steps**:
1. Sign up via Google SSO
2. Create session: "Should we enter German B2B SaaS market? Budget €800K, 24 months."
3. Wait for processing (max 2 hours)
4. Receive report with:
   - TAM/SAM/SOM
   - Competitive analysis (SWOT)
   - Financial model (P&L, break-even)
   - Risk assessment (top 5 risks)
   - Strategy recommendation
   - Confidence > 0.75
   - Sources > 10
5. Download PDF
6. Share link with Board member (view-only)

**Expected result**: ✅ Report accurate, comprehensive, sources valid, Board satisfied

---

### 7.2 MVP Deliverables

**Design**:
- [ ] Figma prototype: 8 key screens (Landing, Demo, Dashboard, New Session, Processing, Report, Scenario Planner, Pricing)
- [ ] Design system: colors, typography, icons, components (documented)

**Frontend**:
- [ ] Next.js app (App Router)
- [ ] Pages: Landing, Demo, Dashboard, Auth, Report, Scenario Planner, Pricing, Security
- [ ] Components: AgentCard, FlowTimeline, FinancialTable, ScenarioPlanner, ExportButton
- [ ] Responsive (mobile + desktop)
- [ ] i18n: Ukrainian + English

**Backend**:
- [ ] Orchestrator service (Node/Python)
- [ ] 12 Agent implementations (модульні, з тестами)
- [ ] API endpoints (7 core endpoints)
- [ ] Supabase schema (6 tables + RLS policies)
- [ ] LLM integrations (OpenAI, Anthropic, Google)
- [ ] Web search integration (Serper)
- [ ] File upload & processing (PDF, XLSX)
- [ ] Job queue (BullMQ/Celery)

**Infrastructure**:
- [ ] Vercel deployment (frontend)
- [ ] Railway/Render deployment (backend)
- [ ] Supabase project setup
- [ ] Environment variables config
- [ ] CI/CD pipeline (GitHub Actions)

**Documentation**:
- [ ] API docs (OpenAPI spec)
- [ ] Agent docs (кожен агент: опис, input/output, prompts)
- [ ] User guide (How to use)
- [ ] Privacy Policy
- [ ] Terms of Service

**Tests**:
- [ ] Unit tests (agents, utils)
- [ ] Integration tests (API endpoints)
- [ ] E2E tests (critical user flows)
- [ ] Load tests (1000 concurrent sessions)

---

### 7.3 Extended Releases (Post-MVP)

**Release 2** (3 months after MVP):
- [ ] API access (for Team/Enterprise)
- [ ] Slack/Teams integration
- [ ] Google Drive integration
- [ ] Advanced Scenario Planner (Monte Carlo simulation)
- [ ] Multi-language support (German, French, Polish)

**Release 3** (6 months after MVP):
- [ ] On-premise deployment option (Enterprise)
- [ ] Private LLM endpoints (Enterprise)
- [ ] Custom agent creation (user-defined)
- [ ] Jira/Asana integration
- [ ] Advanced analytics dashboard (usage, costs, confidence trends)

**Release 4** (12 months after MVP):
- [ ] Mobile app (iOS/Android)
- [ ] Voice input (ask question via voice)
- [ ] Collaboration features (teams, comments, approvals)
- [ ] AI-powered follow-ups (система пропонує наступні питання)

---

## 8. PROMPT TEMPLATES для Агентів

### 8.1 Orchestrator → Problem Framing

**Template**:
```
User asked: "<<USER_PROMPT>>"

Your task:
1. Clarify the main objective (scale, market entry, cost reduction, investment evaluation, etc.)
2. Identify time horizon (if not specified, ask)
3. Identify budget (if not specified, ask or note assumption)
4. Identify key KPIs user cares about
5. List assumptions you're making
6. Propose 3 clarifying questions (if critical info missing)

Output format (JSON):
{
  "goal": "string",
  "time_horizon_months": number,
  "budget": number | null,
  "kpis": ["string"],
  "assumptions": ["string"],
  "clarifying_questions": ["string"] | null
}

Be concise but precise. If user provided enough context, return clarifying_questions = null.
```

**Example Output**:
```json
{
  "goal": "Evaluate market entry into French B2B SaaS market",
  "time_horizon_months": 18,
  "budget": 600000,
  "kpis": ["TAM/SAM", "break-even time", "competitive positioning"],
  "assumptions": [
    "Company has existing B2B SaaS product (mature)",
    "Target SMB segment (assumption, not specified)",
    "CAC/ARPU unknown — will need to estimate from industry benchmarks"
  ],
  "clarifying_questions": null
}
```

---

### 8.2 Orchestrator → Hypothesis Decomposer

**Template**:
```
User's brief:
<<BRIEF>>

Your task:
1. Decompose the strategic question into 3-5 testable hypotheses
2. For each hypothesis:
   - State it clearly (H1, H2, ...)
   - Assess impact (high/medium/low)
   - Assess likelihood (high/medium/low)
   - Suggest a test/metric to validate
3. Prioritize hypotheses (impact × likelihood)

Output format (JSON):
{
  "hypotheses": [
    {
      "id": "H1",
      "statement": "string",
      "impact": "high | medium | low",
      "likelihood": "high | medium | low",
      "priority": number (1-5),
      "validation_test": "string"
    }
  ]
}
```

**Example Output**:
```json
{
  "hypotheses": [
    {
      "id": "H1",
      "statement": "French B2B SaaS market is large enough (TAM > €1B)",
      "impact": "high",
      "likelihood": "high",
      "priority": 1,
      "validation_test": "Calculate TAM via market research + statistical data"
    },
    {
      "id": "H2",
      "statement": "We can achieve break-even within 18 months with €600K budget",
      "impact": "high",
      "likelihood": "medium",
      "priority": 2,
      "validation_test": "Build financial model with realistic CAC/ARPU assumptions"
    },
    {
      "id": "H3",
      "statement": "Competition is manageable (no single player dominates > 50%)",
      "impact": "medium",
      "likelihood": "high",
      "priority": 3,
      "validation_test": "Competitive landscape analysis, market share estimation"
    }
  ]
}
```

---

### 8.3 Orchestrator → Market Intelligence

**Template**:
```
Brief:
<<BRIEF>>

Your task:
1. Calculate TAM / SAM / SOM for the specified market (region, industry, segment)
2. Identify 3-5 key market trends
3. Find 5+ reliable sources (prefer: Statista, Eurostat, industry reports, research firms)
4. Assess seasonality (if applicable)
5. Return confidence level (0.0-1.0) based on source quality and data availability

Search strategy:
- Use web search for: "[industry] market size [region]", "[industry] trends [year]", "TAM [industry] [region]"
- Prefer sources: Statista, Gartner, Forrester, government statistics, industry associations
- If data unavailable, use proxies (e.g., GDP × penetration rate)

Output format (JSON):
{
  "tam": number (in currency),
  "sam": number,
  "som": number,
  "cagr": number (decimal, e.g., 0.12 = 12%),
  "trends": ["string"],
  "seasonality": "string or null",
  "confidence": number (0.0-1.0),
  "sources": [
    {
      "title": "string",
      "url": "string",
      "snippet": "string",
      "reliability": "high | medium | low"
    }
  ],
  "assumptions": ["string"],
  "limitations": ["string"]
}
```

**Example Output**:
```json
{
  "tam": 6200000000,
  "sam": 800000000,
  "som": 60000000,
  "cagr": 0.15,
  "trends": [
    "Shift to cloud-native solutions",
    "AI/ML integration becoming standard",
    "Consolidation among mid-market players"
  ],
  "seasonality": "Q4 peak due to budget cycles",
  "confidence": 0.82,
  "sources": [
    {
      "title": "European B2B SaaS Market Report 2024",
      "url": "https://statista.com/...",
      "snippet": "France represents 13% of EU B2B SaaS market...",
      "reliability": "high"
    }
  ],
  "assumptions": [
    "SMB segment = 40% of total market (industry average)"
  ],
  "limitations": [
    "Limited granular data for vertical-specific SaaS"
  ]
}
```

---

### 8.4 Orchestrator → Competitive Analysis

**Template**:
```
Brief:
<<BRIEF>>

Market data (from Market Intelligence):
<<MARKET_DATA>>

Your task:
1. Identify top 5-10 competitors in the target market
2. For each competitor:
   - Name, website
   - Market share (estimate if unavailable)
   - Strengths / Weaknesses (based on public data, reviews)
   - Pricing (if available)
3. Build SWOT analysis (for user's company vs. competitors)
4. Create positioning map (2 axes: choose most relevant, e.g., Price × Features)
5. Return confidence

Search strategy:
- "[industry] competitors [region]"
- "[competitor name] market share"
- "[competitor name] reviews" (G2, Capterra)

Output format (JSON):
{
  "competitors": [
    {
      "name": "string",
      "website": "string",
      "market_share": number (% or null),
      "strengths": ["string"],
      "weaknesses": ["string"],
      "pricing": "string or null"
    }
  ],
  "swot": {
    "strengths": ["string"],
    "weaknesses": ["string"],
    "opportunities": ["string"],
    "threats": ["string"]
  },
  "positioning_map": {
    "axis_x": "string (e.g., Price)",
    "axis_y": "string (e.g., Feature Richness)",
    "positions": [
      {"name": "Competitor A", "x": number, "y": number},
      {"name": "Us (estimated)", "x": number, "y": number}
    ]
  },
  "confidence": number,
  "sources": [...]
}
```

---

### 8.5 Orchestrator → Financial Modeling

**Template**:
```
Brief:
<<BRIEF>>

Market data:
<<MARKET_DATA>>

User's financial data (if uploaded):
<<USER_DATA>>

Your task:
1. Build 3-year P&L projection (revenue, costs, profit)
2. Inputs (use assumptions if not provided):
   - ARPU (Average Revenue Per User)
   - CAC (Customer Acquisition Cost)
   - Churn rate
   - Gross margin
   - Fixed costs (salaries, overhead)
   - Growth rate
3. Calculate:
   - Monthly/Quarterly/Annual revenue
   - Break-even month
   - NPV (use discount rate 10% or user-specified)
   - IRR
4. Create 3 scenarios: Base / Best / Worst
5. Return confidence based on assumption quality

If user uploaded financial data (XLSX/CSV), extract historical metrics and use them. Otherwise, use industry benchmarks.

Output format (JSON):
{
  "scenarios": [
    {
      "name": "Base",
      "assumptions": {
        "arpu": number,
        "cac": number,
        "churn_rate": number,
        "growth_rate": number,
        "gross_margin": number
      },
      "projections": {
        "year_1": {"revenue": number, "costs": number, "profit": number},
        "year_2": {...},
        "year_3": {...}
      },
      "break_even_month": number,
      "npv": number,
      "irr": number
    },
    // ... Best, Worst
  ],
  "confidence": number,
  "sources": [...],
  "assumptions": ["string"]
}
```

---

### 8.6 Orchestrator → Risk Assessment

**Template**:
```
Brief:
<<BRIEF>>

Market, Competitive, Financial data:
<<CONTEXT>>

Your task:
1. Identify 5-10 key risks across categories:
   - Market risk (demand, competition)
   - Financial risk (budget overrun, lower ROI)
   - Operational risk (hiring, execution)
   - Regulatory risk (compliance, legal)
   - Technology risk (product, infrastructure)
2. For each risk:
   - Description
   - Likelihood (high/medium/low)
   - Impact (high/medium/low)
   - Mitigation strategies (2-3 concrete actions)
3. Prioritize risks (likelihood × impact)
4. Return confidence

Output format (JSON):
{
  "risks": [
    {
      "id": "R1",
      "category": "string",
      "description": "string",
      "likelihood": "high | medium | low",
      "impact": "high | medium | low",
      "priority": number (1-10),
      "mitigation": ["string"]
    }
  ],
  "confidence": number,
  "sources": [...]
}
```

**Example Output**:
```json
{
  "risks": [
    {
      "id": "R1",
      "category": "Market",
      "description": "Incumbent competitors (e.g., SAP) may react aggressively with price cuts",
      "likelihood": "medium",
      "impact": "high",
      "priority": 1,
      "mitigation": [
        "Differentiate via superior customer support",
        "Target underserved SMB segment where incumbents are weak",
        "Build switching costs via integrations"
      ]
    },
    {
      "id": "R2",
      "category": "Regulatory",
      "description": "GDPR enforcement stricter in France, potential fines for non-compliance",
      "likelihood": "low",
      "impact": "high",
      "priority": 2,
      "mitigation": [
        "Hire local legal counsel",
        "Implement GDPR compliance from day 1",
        "Get ISO 27001 certification"
      ]
    }
  ],
  "confidence": 0.78,
  "sources": [...]
}
```

---

### 8.7 Orchestrator → Strategy Frameworks

**Template**:
```
Brief:
<<BRIEF>>

All previous agent outputs:
<<FULL_CONTEXT>>

Your task:
1. Apply 2-3 relevant strategy frameworks:
   - Porter's Five Forces
   - Ansoff Matrix
   - Blue Ocean Strategy
   - Jobs-to-be-Done (JTBD)
   - BCG Matrix (if multiple products)
2. For each framework:
   - Brief explanation of how it applies
   - Key insights
   - Recommendations
3. Synthesize into strategic recommendations (3-5 bullets)

Output format (JSON):
{
  "frameworks": [
    {
      "name": "Ansoff Matrix",
      "application": "string (how it applies to this case)",
      "insights": ["string"],
      "recommendations": ["string"]
    },
    ...
  ],
  "strategic_recommendations": ["string"],
  "confidence": number
}
```

**Example Output**:
```json
{
  "frameworks": [
    {
      "name": "Ansoff Matrix",
      "application": "Market development strategy — existing product, new geographic market (France)",
      "insights": [
        "Lower risk than product development",
        "Requires understanding of local market nuances"
      ],
      "recommendations": [
        "Partner with local resellers for market entry",
        "Adapt product (language, compliance) before full launch"
      ]
    },
    {
      "name": "Porter's Five Forces",
      "application": "Competitive intensity analysis",
      "insights": [
        "Threat of new entrants: Medium (capital requirements moderate)",
        "Bargaining power of buyers: High (many alternatives)",
        "Competitive rivalry: High (saturated market)"
      ],
      "recommendations": [
        "Focus on differentiation (superior support, niche features)",
        "Build switching costs via integrations"
      ]
    }
  ],
  "strategic_recommendations": [
    "Enter French market via partnership model (reduce risk)",
    "Target underserved SMB segment",
    "Differentiate via customer success (not just product)",
    "Plan for 18-month ramp (realistic given competition)",
    "Budget for localization and compliance (€100K+)"
  ],
  "confidence": 0.81
}
```

---

### 8.8 Orchestrator → Advocate Agent

**Template**:
```
All agent outputs so far:
<<FULL_CONTEXT>>

Your role: Play devil's advocate. Challenge assumptions, identify weak points, ask critical questions.

Your task:
1. Review all outputs (Market, Competitive, Financial, Risk, Strategy)
2. Identify 5-10 critical questions or concerns:
   - Assumptions that seem unrealistic
   - Missing data or analysis
   - Potential blind spots
   - Contradictions between agent outputs
3. For each concern, suggest how to address it (test, additional data, etc.)

Output format (JSON):
{
  "concerns": [
    {
      "id": "C1",
      "category": "string (assumption, data gap, contradiction, etc.)",
      "description": "string (critical question or concern)",
      "severity": "high | medium | low",
      "suggested_action": "string"
    }
  ],
  "overall_assessment": "string (1-2 sentences: Is the recommendation solid or needs more work?)"
}
```

**Example Output**:
```json
{
  "concerns": [
    {
      "id": "C1",
      "category": "Assumption",
      "description": "Financial model assumes CAC €45, but no evidence this is achievable in France (may be higher due to language/cultural barriers)",
      "severity": "high",
      "suggested_action": "Run pilot campaign to measure actual CAC before committing full budget"
    },
    {
      "id": "C2",
      "category": "Data gap",
      "description": "Competitive analysis lacks pricing data for top 3 competitors — hard to position without this",
      "severity": "medium",
      "suggested_action": "Request pricing demos from competitors or find leaked pricing online"
    },
    {
      "id": "C3",
      "category": "Contradiction",
      "description": "Market Intelligence says 'high growth' but Competitive Analysis says 'saturated market' — which is it?",
      "severity": "medium",
      "suggested_action": "Clarify: growth may be driven by replacement/churn, not net new customers"
    }
  ],
  "overall_assessment": "The recommendation is directionally correct but has 2-3 high-severity concerns that should be addressed before final decision."
}
```

---

### 8.9 Orchestrator → Scenario Planner

**Template**:
```
Brief:
<<BRIEF>>

Financial model (base scenario):
<<FINANCIAL_MODEL>>

Risk assessment:
<<RISKS>>

Your task:
1. Create 3-4 scenarios:
   - Base (from Financial Modeling)
   - Best case (optimistic assumptions)
   - Worst case (pessimistic assumptions)
   - Optional: Alternative strategy (e.g., slower/faster expansion)
2. For each scenario:
   - Adjust key variables (CAC, ARPU, growth rate, etc.)
   - Recalculate metrics (revenue, break-even, NPV, IRR)
   - Estimate probability (%)
   - Identify key triggers/conditions for this scenario
3. Compare scenarios in a table

Output format (JSON):
{
  "scenarios": [
    {
      "name": "Base",
      "probability": 0.50,
      "assumptions": {"cac": 45, "arpu": 120, ...},
      "metrics": {"break_even_month": 16, "npv": 1200000, "irr": 0.22},
      "triggers": ["string"]
    },
    ...
  ],
  "comparison": {
    "best_scenario": "Best Case",
    "worst_scenario": "Worst Case",
    "recommended_scenario": "Base"
  },
  "confidence": number
}
```

---

### 8.10 Orchestrator → Decision Synthesizer

**Template**:
```
All agent outputs:
<<FULL_CONTEXT>>

Your task:
1. Synthesize all data into a single, clear recommendation:
   - Should the user proceed? (Yes / No / Conditional)
   - If yes: What are the key success factors?
   - If no: Why not?
   - If conditional: What conditions must be met?
2. Highlight:
   - Top 3 opportunities
   - Top 3 risks
   - Top 3 next steps (actionable)
3. Provide overall confidence level
4. Note any major caveats or assumptions

Output format (JSON):
{
  "recommendation": "Proceed | Do not proceed | Conditional proceed",
  "rationale": "string (2-3 sentences)",
  "key_success_factors": ["string"],
  "opportunities": ["string"],
  "risks": ["string"],
  "next_steps": ["string"],
  "conditions": ["string"] | null, // if conditional
  "confidence": number,
  "caveats": ["string"]
}
```

**Example Output**:
```json
{
  "recommendation": "Conditional proceed",
  "rationale": "French B2B SaaS market is attractive (€6.2B TAM, 15% growth) and financial projections are positive (NPV €1.2M, 16-month break-even). However, assumptions around CAC and competitive response need validation via pilot.",
  "key_success_factors": [
    "Local partnerships (resellers, integrators)",
    "French-speaking support team",
    "Differentiation via customer success (not just product)"
  ],
  "opportunities": [
    "Underserved SMB segment (competitors focus on enterprise)",
    "Regulatory trends favor cloud adoption (EU Digital Decade)",
    "Strong existing product-market fit in home market"
  ],
  "risks": [
    "Aggressive competitive response (price cuts)",
    "Higher-than-expected CAC (€45 assumption may be low)",
    "Regulatory complexity (GDPR, sector-specific rules)"
  ],
  "next_steps": [
    "Run 3-month pilot in Paris (€100K budget) to validate CAC and demand",
    "Hire country manager (French native, B2B SaaS experience)",
    "Engage local legal counsel for compliance review"
  ],
  "conditions": [
    "Pilot campaign achieves CAC < €60 and conversion rate > 2%",
    "Secure local partnership with at least 1 reseller",
    "Complete GDPR compliance audit before full launch"
  ],
  "confidence": 0.83,
  "caveats": [
    "Financial model assumes no major macro shocks (recession, etc.)",
    "Competitive landscape may shift rapidly (M&A, new entrants)"
  ]
}
```

---

### 8.11 Orchestrator → Output Agent

**Template**:
```
Decision synthesis:
<<SYNTHESIS>>

All detailed outputs:
<<FULL_CONTEXT>>

Your task:
1. Format executive summary (1 page, ~500 words):
   - Situation (what user asked)
   - Analysis (key findings, 3-4 bullets)
   - Recommendation (clear, actionable)
   - Next steps (3-5 bullets)
2. Format detailed report (structured sections):
   - Executive Summary
   - Problem Framing
   - Market Analysis (TAM, trends)
   - Competitive Landscape (SWOT, positioning)
   - Financial Projections (P&L, scenarios)
   - Risk Assessment (top risks, mitigation)
   - Strategy Recommendations (frameworks, insights)
   - Scenarios (comparison table)
   - Appendix (sources, assumptions, confidence scores)
3. Ensure proper formatting (Markdown or JSON)

Output format (JSON):
{
  "executive_summary": "string (markdown)",
  "detailed_report": {
    "sections": [
      {
        "title": "string",
        "content": "string (markdown)",
        "confidence": number,
        "sources": [...]
      }
    ]
  },
  "metadata": {
    "generated_at": "ISO8601",
    "session_id": "uuid",
    "total_sources": number,
    "avg_confidence": number
  }
}
```

---

## 9. MVP CHECKLIST & DEVELOPMENT ROADMAP

### 9.1 Sprint 0: Setup & Planning (1 week)

**Tasks**:
- [ ] Project kickoff meeting
- [ ] Finalize requirements (this spec)
- [ ] Setup repositories (frontend, backend, docs)
- [ ] Setup Supabase project
- [ ] Setup Vercel/Railway projects
- [ ] Define coding standards, linting, CI/CD
- [ ] Create initial Figma designs (wireframes)

**Story Points**: 13
**Hours**: ~40h

---

### 9.2 Sprint 1: Design & Infrastructure (2 weeks)

**Tasks**:
- [ ] Figma: High-fidelity designs for all 8 key screens
- [ ] Design system: colors, typography, component library
- [ ] Supabase: Create schema (migrations)
- [ ] Supabase: Configure Auth (Google, Microsoft SSO)
- [ ] Supabase: RLS policies
- [ ] Backend: Project scaffold (NestJS or FastAPI)
- [ ] Backend: LLM adapters (OpenAI, Anthropic, Google SDKs)
- [ ] Frontend: Next.js scaffold, routing, basic layout

**Story Points**: 21
**Hours**: ~80h (2 devs × 2 weeks)

---

### 9.3 Sprint 2: Core Agent Logic (2 weeks)

**Tasks**:
- [ ] Backend: Orchestrator implementation (координація агентів)
- [ ] Backend: Problem Framing agent
- [ ] Backend: Hypothesis Decomposer agent
- [ ] Backend: Market Intelligence agent (web search integration)
- [ ] Backend: Competitive Analysis agent
- [ ] Backend: Financial Modeling agent
- [ ] Backend: Tests для кожного агента (unit)

**Story Points**: 34
**Hours**: ~120h (2 backend devs × 2 weeks)

---

### 9.4 Sprint 3: Remaining Agents (2 weeks)

**Tasks**:
- [ ] Backend: Risk Assessment agent
- [ ] Backend: Strategy Frameworks agent
- [ ] Backend: Advocate agent
- [ ] Backend: Scenario Planner agent
- [ ] Backend: Decision Synthesizer agent
- [ ] Backend: Output Agent (formatting)
- [ ] Backend: Integration tests (full flow)

**Story Points**: 34
**Hours**: ~120h

---

### 9.5 Sprint 4: Frontend — Core Pages (2 weeks)

**Tasks**:
- [ ] Frontend: Landing page (hero, sections, responsive)
- [ ] Frontend: Auth pages (login, SSO callback)
- [ ] Frontend: Dashboard (home, sidebar, stats)
- [ ] Frontend: New Session form (textarea, context fields, upload)
- [ ] Frontend: Processing page (timeline, agent cards, live updates)
- [ ] Frontend: API client (fetch, SWR, error handling)

**Story Points**: 21
**Hours**: ~80h (2 frontend devs)

---

### 9.6 Sprint 5: Frontend — Report & Scenario (2 weeks)

**Tasks**:
- [ ] Frontend: Report view (TOC, sections, tables, charts)
- [ ] Frontend: Scenario Planner (sliders, comparison table, charts)
- [ ] Frontend: Export PDF (react-pdf або server-side)
- [ ] Frontend: Share report (public link generation)
- [ ] Frontend: Pricing page
- [ ] Frontend: Security page

**Story Points**: 21
**Hours**: ~80h

---

### 9.7 Sprint 6: Demo & Polish (1 week)

**Tasks**:
- [ ] Frontend: Demo page (interactive, mock data або real API call)
- [ ] Frontend: Mobile responsive fixes
- [ ] Frontend: Accessibility audit (WCAG AA)
- [ ] Frontend: i18n setup (UA + EN)
- [ ] Backend: Performance optimization (caching, query optimization)
- [ ] Backend: Logging & monitoring setup (Sentry, Winston)

**Story Points**: 13
**Hours**: ~50h

---

### 9.8 Sprint 7: Testing & Bug Fixes (2 weeks)

**Tasks**:
- [ ] E2E tests (Playwright або Cypress)
- [ ] Load testing (100 concurrent sessions)
- [ ] Bug bash (whole team)
- [ ] Fix P0/P1 bugs
- [ ] Security audit (SQL injection, XSS, CSRF)
- [ ] Privacy policy review (legal)

**Story Points**: 21
**Hours**: ~80h (QA + devs)

---

### 9.9 Sprint 8: Deployment & Launch (1 week)

**Tasks**:
- [ ] Production deployment (Vercel + Railway)
- [ ] Domain setup, SSL
- [ ] Monitoring dashboards (Sentry, PostHog)
- [ ] Onboarding email templates
- [ ] Launch announcement (blog post, social media)
- [ ] Documentation finalization (user guide, API docs)

**Story Points**: 8
**Hours**: ~30h

---

### 9.10 Total MVP Estimate

**Total Story Points**: ~186
**Total Hours**: ~660h
**Team**: 2 frontend, 2 backend, 1 designer, 1 PM, 1 QA
**Duration**: ~12-14 weeks (3-3.5 months)
**Cost** (approximate, залежить від ставок):
- Devs (4): ~€80K-120K
- Designer (1): ~€15K-20K
- PM (1): ~€15K-20K
- QA (1): ~€10K-15K
**Total MVP budget**: €120K-175K (залежить від локації, сеньйорності)

---

## 10. DESIGN & BRANDING

### 10.1 Color Palette

**Primary** (Business Blue):
- Blue-600: `#2563EB` (CTA buttons, links)
- Blue-700: `#1D4ED8` (hover)
- Blue-50: `#EFF6FF` (light backgrounds)

**Secondary** (Slate for professional tone):
- Slate-900: `#0F172A` (headings, text)
- Slate-700: `#334155` (body text)
- Slate-300: `#CBD5E1` (borders)
- Slate-50: `#F8FAFC` (backgrounds)

**Accent** (Green for success/confidence):
- Green-600: `#16A34A` (confidence badges > 0.8)
- Yellow-500: `#EAB308` (confidence 0.6-0.8)
- Red-600: `#DC2626` (confidence < 0.6, risks)

**Neutral**:
- White: `#FFFFFF`
- Gray-100: `#F3F4F6`

**Avoid**: Purple, indigo, violet (per user requirement)

---

### 10.2 Typography

**Font Family**:
- Headings: **Inter** (font-weight 600-700, letter-spacing tight)
- Body: **Inter** (font-weight 400-500, line-height 150%)
- Monospace (code, data): **Roboto Mono**

**Scale** (Tailwind):
- Hero title: `text-5xl` (48px) desktop, `text-3xl` (30px) mobile
- Section title: `text-3xl` (30px) desktop, `text-2xl` (24px) mobile
- Card title: `text-xl` (20px)
- Body: `text-base` (16px)
- Small: `text-sm` (14px)

**Line Height**:
- Headings: 120%
- Body: 150%

---

### 10.3 Icons

**Library**: Lucide React

**Examples**:
- Orchestrator: `Workflow`
- Market Intelligence: `Globe`
- Financial Modeling: `DollarSign`, `TrendingUp`
- Risk: `AlertTriangle`
- Strategy: `Target`
- Advocate: `MessageSquare`
- Confidence: `CheckCircle` (high), `AlertCircle` (medium), `XCircle` (low)
- Sources: `Link`, `FileText`

---

### 10.4 Spacing System

**Base**: 8px

**Scale**:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

**Usage**:
- Section padding: `py-16` (64px) desktop, `py-8` (32px) mobile
- Card padding: `p-6` (24px)
- Button padding: `px-6 py-3` (24px × 12px)

---

### 10.5 Components Style Guide

**Button**:
- Primary: `bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 font-semibold`
- Secondary: `border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg px-6 py-3`
- Disabled: `bg-gray-300 text-gray-500 cursor-not-allowed`

**Card**:
- `bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow`

**Input**:
- `border-2 border-gray-300 focus:border-blue-500 rounded-lg px-4 py-2 text-base`

**Badge**:
- High confidence: `bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium`
- Medium: `bg-yellow-100 text-yellow-800`
- Low: `bg-red-100 text-red-800`

---

## 11. ЗАКЛЮЧНІ НОТАТКИ

### Технічні рекомендації:
- **Modular architecture**: Кожен агент — окремий модуль, легко додавати нові
- **Error handling**: Якщо агент fail → Orchestrator має fallback (використати cached data або попередити користувача)
- **Cost tracking**: Логувати кожен LLM call (tokens, cost) → показувати користувачу витрати (для transparency)
- **Rate limiting**: Protect API від abuse (max 10 sessions/day для Starter, необмежено для Team)

### Бізнес рекомендації:
- **Freemium модель**: 3 безкоштовні сесії → convert to Starter
- **Viral loop**: "Share report" функція → recipient бачить звіт + CTA "Create your own"
- **Enterprise sales**: Outreach до VCs, consulting firms (вони можуть стати resellers)

### Додаткові фічі (post-MVP):
- **AI-powered follow-ups**: Після сесії, система пропонує related питання ("You asked about France, want to explore Germany too?")
- **Benchmark database**: Зберігати анонімізовані метрики (CAC, ARPU по індустріях) → покращувати якість recommendations
- **Community**: Дозволити користувачам ділитися анонімізованими кейсами (з їх дозволу)

---

**Готово! Переходжу до наступного кроку: технічна документація.**
