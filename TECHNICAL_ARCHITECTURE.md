# Technical Architecture — Strategic Digital Consultant

## Огляд архітектури

Система побудована на **Multi-LLM** архітектурі з **Event-Driven Orchestration** патерном.

```
┌─────────────────────────────────────────────────────────────┐
│                         User (Browser)                       │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│               Frontend (Next.js 14 + Tailwind)              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Landing    │  │  Dashboard   │  │    Report    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└──────────────────────────┬──────────────────────────────────┘
                           │ REST API (JWT Auth)
                           ▼
┌─────────────────────────────────────────────────────────────┐
│         Backend API (NestJS / FastAPI + BullMQ)             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Orchestrator Service                     │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │        Agent Coordination Engine               │  │   │
│  │  │  - Parse user input                            │  │   │
│  │  │  - Select agents                               │  │   │
│  │  │  - Manage parallel/sequential execution        │  │   │
│  │  │  - Aggregate results                           │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                 Agent Workers (12)                    │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────┐ │   │
│  │  │  Problem     │  │   Market     │  │ Financial  │ │   │
│  │  │  Framing     │  │ Intelligence │  │  Modeling  │ │   │
│  │  └──────────────┘  └──────────────┘  └────────────┘ │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────┐ │   │
│  │  │ Competitive  │  │     Risk     │  │  Strategy  │ │   │
│  │  │  Analysis    │  │  Assessment  │  │ Frameworks │ │   │
│  │  └──────────────┘  └──────────────┘  └────────────┘ │   │
│  │       ... (+ 6 more agents)                          │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │               LLM Adapter Layer                       │   │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐     │   │
│  │  │ OpenAI SDK │  │Anthropic SDK│ │ Google SDK │     │   │
│  │  │  (GPT-4)   │  │  (Claude)   │  │  (Gemini)  │     │   │
│  │  └────────────┘  └────────────┘  └────────────┘     │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │            External Services Integration              │   │
│  │  ┌─────────┐  ┌──────────┐  ┌──────────┐            │   │
│  │  │ Serper  │  │ Supabase │  │  Redis   │            │   │
│  │  │  (SERP) │  │ Storage  │  │  (Queue) │            │   │
│  │  └─────────┘  └──────────┘  └──────────┘            │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│           Supabase (PostgreSQL + Auth + Storage)            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  users   │  │ sessions │  │  reports │  │documents │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│  + agent_outputs, scenarios, audit_log                      │
│  + pgvector (embeddings)                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Orchestrator — Детальна логіка

### 1. Input Processing

```typescript
interface UserInput {
  question: string;
  context?: {
    industry?: string;
    region?: string[];
    budget?: number;
    timeframe_months?: number;
    kpis?: string[];
  };
  documents?: UploadedDocument[];
  agent_selection: 'auto' | 'manual';
  selected_agents?: string[];
}

class Orchestrator {
  async processSession(input: UserInput, sessionId: string) {
    // Step 1: Parse and validate input
    const parsedInput = this.parseInput(input);

    // Step 2: Determine agent execution plan
    const executionPlan = this.createExecutionPlan(parsedInput);

    // Step 3: Execute agents (parallel + sequential)
    const results = await this.executeAgents(executionPlan, sessionId);

    // Step 4: Synthesize and format output
    const report = await this.synthesizeReport(results, sessionId);

    return report;
  }
}
```

### 2. Agent Selection Logic

```typescript
function createExecutionPlan(input: ParsedInput): ExecutionPlan {
  const plan: ExecutionPlan = {
    stages: []
  };

  // Stage 1: Always start with Problem Framing
  plan.stages.push({
    name: 'problem_framing',
    agents: ['ProblemFraming'],
    mode: 'sequential'
  });

  // Stage 2: Hypothesis Decomposition
  plan.stages.push({
    name: 'hypothesis',
    agents: ['HypothesisDecomposer'],
    mode: 'sequential',
    depends_on: ['problem_framing']
  });

  // Stage 3: Parallel analysis (main workload)
  plan.stages.push({
    name: 'analysis',
    agents: [
      'MarketIntelligence',
      'CompetitiveAnalysis',
      'FinancialModeling',
      'RiskAssessment'
    ],
    mode: 'parallel',
    depends_on: ['hypothesis']
  });

  // Stage 4: Strategy & Advocacy (depends on analysis)
  plan.stages.push({
    name: 'strategy',
    agents: ['StrategyFrameworks', 'Advocate'],
    mode: 'parallel',
    depends_on: ['analysis']
  });

  // Stage 5: Scenario planning
  plan.stages.push({
    name: 'scenarios',
    agents: ['ScenarioPlanner'],
    mode: 'sequential',
    depends_on: ['strategy']
  });

  // Stage 6: Final synthesis
  plan.stages.push({
    name: 'synthesis',
    agents: ['DecisionSynthesizer', 'OutputAgent'],
    mode: 'sequential',
    depends_on: ['scenarios']
  });

  return plan;
}
```

### 3. Agent Execution (Parallel + Sequential)

```typescript
async function executeAgents(
  plan: ExecutionPlan,
  sessionId: string
): Promise<AgentResults> {
  const results: AgentResults = {};

  for (const stage of plan.stages) {
    // Check dependencies
    if (stage.depends_on) {
      await this.waitForStages(stage.depends_on, results);
    }

    // Get context from previous stages
    const context = this.buildContext(results, stage);

    if (stage.mode === 'parallel') {
      // Execute all agents in parallel
      const promises = stage.agents.map(agentName =>
        this.executeAgent(agentName, context, sessionId)
      );
      const stageResults = await Promise.all(promises);

      // Store results
      stageResults.forEach((result, idx) => {
        results[stage.agents[idx]] = result;
      });

    } else {
      // Sequential execution
      for (const agentName of stage.agents) {
        const result = await this.executeAgent(
          agentName,
          context,
          sessionId
        );
        results[agentName] = result;

        // Update context for next agent
        context[agentName] = result.output;
      }
    }

    // Update session progress
    await this.updateProgress(sessionId, stage.name);
  }

  return results;
}
```

### 4. Inter-Agent Communication Format

```typescript
interface AgentInput {
  brief: ProblemBrief;
  context: Record<string, any>; // outputs from previous agents
  user_data?: any; // uploaded documents, etc.
}

interface AgentOutput {
  agent: string;
  status: 'success' | 'partial' | 'failed';
  output: {
    summary: string;
    data: any; // agent-specific structured data
    confidence: number; // 0.0-1.0
    assumptions: string[];
    sources: Source[];
    limitations?: string[];
  };
  metadata: {
    model_used: string;
    tokens: number;
    cost_usd: number;
    duration_seconds: number;
    started_at: string; // ISO8601
    completed_at: string;
  };
  error?: string;
}

interface Source {
  title: string;
  url: string;
  snippet: string;
  reliability: 'high' | 'medium' | 'low';
  accessed_at: string;
}
```

---

## LLM Adapter Layer

### Architecture

```typescript
interface LLMAdapter {
  call(
    prompt: string,
    options: LLMOptions
  ): Promise<LLMResponse>;

  stream(
    prompt: string,
    options: LLMOptions
  ): AsyncGenerator<string>;
}

interface LLMOptions {
  model?: string;
  max_tokens?: number;
  temperature?: number;
  system_prompt?: string;
  response_format?: 'text' | 'json';
}

interface LLMResponse {
  content: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  model: string;
  finish_reason: string;
}
```

### OpenAI Adapter

```typescript
import OpenAI from 'openai';

class OpenAIAdapter implements LLMAdapter {
  private client: OpenAI;

  constructor(apiKey: string) {
    this.client = new OpenAI({ apiKey });
  }

  async call(prompt: string, options: LLMOptions): Promise<LLMResponse> {
    const response = await this.client.chat.completions.create({
      model: options.model || 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: options.system_prompt || 'You are a strategic analyst.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: options.max_tokens || 2000,
      temperature: options.temperature || 0.7,
      response_format: options.response_format === 'json'
        ? { type: 'json_object' }
        : undefined
    });

    return {
      content: response.choices[0].message.content || '',
      usage: {
        prompt_tokens: response.usage?.prompt_tokens || 0,
        completion_tokens: response.usage?.completion_tokens || 0,
        total_tokens: response.usage?.total_tokens || 0
      },
      model: response.model,
      finish_reason: response.choices[0].finish_reason
    };
  }
}
```

### Anthropic Adapter

```typescript
import Anthropic from '@anthropic-ai/sdk';

class AnthropicAdapter implements LLMAdapter {
  private client: Anthropic;

  constructor(apiKey: string) {
    this.client = new Anthropic({ apiKey });
  }

  async call(prompt: string, options: LLMOptions): Promise<LLMResponse> {
    const response = await this.client.messages.create({
      model: options.model || 'claude-3-sonnet-20240229',
      max_tokens: options.max_tokens || 2000,
      system: options.system_prompt || 'You are a strategic analyst.',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: options.temperature || 0.7
    });

    const textContent = response.content.find(c => c.type === 'text');

    return {
      content: textContent?.text || '',
      usage: {
        prompt_tokens: response.usage.input_tokens,
        completion_tokens: response.usage.output_tokens,
        total_tokens: response.usage.input_tokens + response.usage.output_tokens
      },
      model: response.model,
      finish_reason: response.stop_reason || 'end_turn'
    };
  }
}
```

### Model Selection Strategy

```typescript
function selectModel(agentType: string): { adapter: string; model: string } {
  const modelMap: Record<string, { adapter: string; model: string }> = {
    'ProblemFraming': { adapter: 'anthropic', model: 'claude-3-sonnet-20240229' },
    'HypothesisDecomposer': { adapter: 'openai', model: 'gpt-4-turbo-preview' },
    'MarketIntelligence': { adapter: 'openai', model: 'gpt-4-turbo-preview' },
    'CompetitiveAnalysis': { adapter: 'google', model: 'gemini-1.5-pro' },
    'FinancialModeling': { adapter: 'openai', model: 'gpt-4-turbo-preview' },
    'RiskAssessment': { adapter: 'anthropic', model: 'claude-3-sonnet-20240229' },
    'StrategyFrameworks': { adapter: 'google', model: 'gemini-1.5-pro' },
    'Advocate': { adapter: 'anthropic', model: 'claude-3-opus-20240229' },
    'ScenarioPlanner': { adapter: 'openai', model: 'gpt-4-turbo-preview' },
    'DecisionSynthesizer': { adapter: 'anthropic', model: 'claude-3-opus-20240229' },
    'OutputAgent': { adapter: 'openai', model: 'gpt-4-turbo-preview' }
  };

  return modelMap[agentType] || { adapter: 'openai', model: 'gpt-4-turbo-preview' };
}
```

**Rationale**:
- **GPT-4**: Best for structured reasoning, financial calculations
- **Claude**: Best for nuanced critique, problem framing, decision-making
- **Gemini**: Cost-effective for research-heavy tasks (competitive analysis, strategy)

---

## Agent Implementations

### Base Agent Class

```typescript
abstract class BaseAgent {
  protected name: string;
  protected llmAdapter: LLMAdapter;

  constructor(name: string, adapter: LLMAdapter) {
    this.name = name;
    this.llmAdapter = adapter;
  }

  abstract buildPrompt(input: AgentInput): string;
  abstract parseOutput(rawOutput: string): any;
  abstract calculateConfidence(output: any): number;

  async execute(input: AgentInput, sessionId: string): Promise<AgentOutput> {
    const startTime = Date.now();

    try {
      // Build prompt
      const prompt = this.buildPrompt(input);

      // Log prompt (для debugging)
      await this.logPrompt(sessionId, prompt);

      // Call LLM
      const response = await this.llmAdapter.call(prompt, {
        system_prompt: this.getSystemPrompt(),
        response_format: 'json',
        max_tokens: 3000,
        temperature: 0.7
      });

      // Parse output
      const parsedOutput = this.parseOutput(response.content);

      // Calculate confidence
      const confidence = this.calculateConfidence(parsedOutput);

      // Build result
      const output: AgentOutput = {
        agent: this.name,
        status: 'success',
        output: {
          summary: parsedOutput.summary,
          data: parsedOutput,
          confidence,
          assumptions: parsedOutput.assumptions || [],
          sources: parsedOutput.sources || [],
          limitations: parsedOutput.limitations
        },
        metadata: {
          model_used: response.model,
          tokens: response.usage.total_tokens,
          cost_usd: this.calculateCost(response.usage, response.model),
          duration_seconds: (Date.now() - startTime) / 1000,
          started_at: new Date(startTime).toISOString(),
          completed_at: new Date().toISOString()
        }
      };

      // Save to database
      await this.saveOutput(sessionId, output);

      return output;

    } catch (error) {
      return {
        agent: this.name,
        status: 'failed',
        output: {
          summary: '',
          data: null,
          confidence: 0,
          assumptions: [],
          sources: []
        },
        metadata: {
          model_used: '',
          tokens: 0,
          cost_usd: 0,
          duration_seconds: (Date.now() - startTime) / 1000,
          started_at: new Date(startTime).toISOString(),
          completed_at: new Date().toISOString()
        },
        error: error.message
      };
    }
  }

  protected abstract getSystemPrompt(): string;

  protected calculateCost(usage: any, model: string): number {
    // Pricing (приблизно, станом на 2024)
    const pricing: Record<string, { input: number; output: number }> = {
      'gpt-4-turbo-preview': { input: 0.01, output: 0.03 }, // per 1K tokens
      'claude-3-opus-20240229': { input: 0.015, output: 0.075 },
      'claude-3-sonnet-20240229': { input: 0.003, output: 0.015 },
      'gemini-1.5-pro': { input: 0.0035, output: 0.0105 }
    };

    const modelPricing = pricing[model] || { input: 0.01, output: 0.03 };

    return (
      (usage.prompt_tokens / 1000) * modelPricing.input +
      (usage.completion_tokens / 1000) * modelPricing.output
    );
  }

  protected async saveOutput(sessionId: string, output: AgentOutput) {
    const supabase = createSupabaseClient();
    await supabase.from('agent_outputs').insert({
      session_id: sessionId,
      agent_name: output.agent,
      status: output.status,
      input: null, // можна зберігати input якщо потрібно
      output: output.output,
      confidence: output.output.confidence,
      started_at: output.metadata.started_at,
      completed_at: output.metadata.completed_at,
      error: output.error
    });
  }
}
```

### Market Intelligence Agent (приклад)

```typescript
class MarketIntelligenceAgent extends BaseAgent {
  constructor(adapter: LLMAdapter) {
    super('MarketIntelligence', adapter);
  }

  protected getSystemPrompt(): string {
    return `You are a market research analyst with expertise in TAM/SAM/SOM analysis,
market trends, and industry research. You always cite your sources and clearly state assumptions.`;
  }

  buildPrompt(input: AgentInput): string {
    const { brief, context } = input;

    return `
Brief:
${JSON.stringify(brief, null, 2)}

Your task:
1. Calculate TAM / SAM / SOM for the specified market (region: ${brief.region}, industry: ${brief.industry})
2. Identify 3-5 key market trends
3. Find 5+ reliable sources (prefer: Statista, Eurostat, industry reports)
4. Assess seasonality (if applicable)
5. Return confidence level (0.0-1.0) based on source quality

Search strategy:
- Use web search for: "${brief.industry} market size ${brief.region}", "${brief.industry} trends ${new Date().getFullYear()}"
- Prefer government statistics, research firms, industry associations

Output format (JSON):
{
  "summary": "1-line summary",
  "tam": number (in EUR),
  "sam": number,
  "som": number,
  "cagr": number (decimal),
  "trends": ["string"],
  "seasonality": "string or null",
  "confidence": number,
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

IMPORTANT: Respond ONLY with valid JSON, no additional text.
    `.trim();
  }

  parseOutput(rawOutput: string): any {
    try {
      return JSON.parse(rawOutput);
    } catch (error) {
      throw new Error(`Failed to parse Market Intelligence output: ${error.message}`);
    }
  }

  calculateConfidence(output: any): number {
    // Confidence based on:
    // - Number of high-reliability sources (40%)
    // - Data completeness (30%)
    // - Output's self-reported confidence (30%)

    const highReliabilitySources = output.sources.filter(
      (s: Source) => s.reliability === 'high'
    ).length;

    const sourceScore = Math.min(highReliabilitySources / 5, 1.0); // max at 5 sources

    const dataComplete = (
      output.tam && output.sam && output.som && output.cagr
    ) ? 1.0 : 0.5;

    const selfReported = output.confidence || 0.5;

    return sourceScore * 0.4 + dataComplete * 0.3 + selfReported * 0.3;
  }
}
```

---

## Web Search Integration

```typescript
import axios from 'axios';

interface SearchResult {
  title: string;
  url: string;
  snippet: string;
}

class WebSearchService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async search(query: string, numResults: number = 10): Promise<SearchResult[]> {
    try {
      const response = await axios.post(
        'https://google.serper.dev/search',
        {
          q: query,
          gl: 'us',
          hl: 'en',
          num: numResults
        },
        {
          headers: {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data.organic.map((result: any) => ({
        title: result.title,
        url: result.link,
        snippet: result.snippet
      }));

    } catch (error) {
      console.error('Web search failed:', error);
      return [];
    }
  }

  async enrichPromptWithSearch(
    basePrompt: string,
    searchQueries: string[]
  ): Promise<string> {
    let enrichedPrompt = basePrompt;

    for (const query of searchQueries) {
      const results = await this.search(query, 5);

      enrichedPrompt += `\n\nSearch results for "${query}":\n`;
      results.forEach((result, idx) => {
        enrichedPrompt += `${idx + 1}. ${result.title}\n   ${result.snippet}\n   ${result.url}\n`;
      });
    }

    return enrichedPrompt;
  }
}

// Usage in agent:
class MarketIntelligenceAgent extends BaseAgent {
  private searchService: WebSearchService;

  async execute(input: AgentInput, sessionId: string): Promise<AgentOutput> {
    // Generate search queries
    const queries = [
      `${input.brief.industry} market size ${input.brief.region}`,
      `${input.brief.industry} trends ${new Date().getFullYear()}`,
      `${input.brief.industry} growth rate ${input.brief.region}`
    ];

    // Build base prompt
    let prompt = this.buildPrompt(input);

    // Enrich with search results
    prompt = await this.searchService.enrichPromptWithSearch(prompt, queries);

    // Continue with LLM call...
    return super.execute({ ...input, enrichedPrompt: prompt }, sessionId);
  }
}
```

---

## Job Queue (BullMQ + Redis)

```typescript
import { Queue, Worker, Job } from 'bullmq';
import Redis from 'ioredis';

const connection = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  maxRetriesPerRequest: null
});

// Session processing queue
const sessionQueue = new Queue('session-processing', { connection });

// Add job to queue
async function createSession(input: UserInput, userId: string) {
  const session = await supabase.from('sessions').insert({
    user_id: userId,
    question: input.question,
    context: input.context,
    status: 'created'
  }).select().single();

  const sessionId = session.data.id;

  // Add to queue
  await sessionQueue.add('process-session', {
    sessionId,
    input
  }, {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 5000
    }
  });

  return { sessionId };
}

// Worker
const worker = new Worker(
  'session-processing',
  async (job: Job) => {
    const { sessionId, input } = job.data;

    // Update status
    await supabase.from('sessions').update({
      status: 'processing',
      started_at: new Date().toISOString()
    }).eq('id', sessionId);

    // Process with Orchestrator
    const orchestrator = new Orchestrator();
    const report = await orchestrator.processSession(input, sessionId);

    // Update status
    await supabase.from('sessions').update({
      status: 'completed',
      completed_at: new Date().toISOString(),
      confidence: report.confidence
    }).eq('id', sessionId);

    // Save report
    await supabase.from('reports').insert({
      session_id: sessionId,
      executive_summary: report.executive_summary,
      detailed_findings: report.detailed_findings,
      assumptions: report.assumptions,
      sources: report.sources,
      next_steps: report.next_steps,
      confidence: report.confidence
    });

    return { success: true, sessionId };
  },
  { connection }
);

// Error handling
worker.on('failed', (job, err) => {
  console.error(`Job ${job.id} failed:`, err);

  // Update session status
  supabase.from('sessions').update({
    status: 'failed'
  }).eq('id', job.data.sessionId);
});
```

---

## Real-time Updates (Server-Sent Events)

```typescript
// Backend (NestJS)
@Controller('sessions')
export class SessionsController {
  @Sse(':id/stream')
  async streamProgress(@Param('id') sessionId: string): Promise<Observable<MessageEvent>> {
    return new Observable((subscriber) => {
      const interval = setInterval(async () => {
        // Fetch current session status
        const { data: session } = await supabase
          .from('sessions')
          .select('*, agent_outputs(*)')
          .eq('id', sessionId)
          .single();

        if (!session) {
          subscriber.error(new Error('Session not found'));
          return;
        }

        // Send update
        subscriber.next({
          data: {
            status: session.status,
            progress: session.progress,
            agents: session.agent_outputs.map((a: any) => ({
              name: a.agent_name,
              status: a.status,
              confidence: a.confidence
            }))
          }
        } as MessageEvent);

        // If completed, close stream
        if (session.status === 'completed' || session.status === 'failed') {
          clearInterval(interval);
          subscriber.complete();
        }
      }, 2000); // Poll every 2 seconds

      // Cleanup
      return () => clearInterval(interval);
    });
  }
}

// Frontend (Next.js)
function useSessionStream(sessionId: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource(`/api/sessions/${sessionId}/stream`);

    eventSource.onmessage = (event) => {
      const update = JSON.parse(event.data);
      setData(update);
    };

    eventSource.onerror = () => {
      eventSource.close();
    };

    return () => eventSource.close();
  }, [sessionId]);

  return data;
}
```

---

## Document Processing & Vector DB

```typescript
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import pdf from 'pdf-parse';
import xlsx from 'xlsx';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

class DocumentProcessor {
  async processDocument(
    file: File,
    userId: string,
    sessionId: string
  ): Promise<void> {
    // Upload to Supabase Storage
    const fileName = `${userId}/${sessionId}/${file.name}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('documents')
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    // Extract text
    const text = await this.extractText(file);

    // Chunk text (512 tokens per chunk)
    const chunks = this.chunkText(text, 512);

    // Generate embeddings
    for (const chunk of chunks) {
      const embedding = await this.generateEmbedding(chunk);

      // Store in documents table
      await supabase.from('documents').insert({
        user_id: userId,
        session_id: sessionId,
        filename: file.name,
        file_type: file.type,
        file_size: file.size,
        storage_path: fileName,
        embedding: embedding,
        metadata: {
          chunk: chunk,
          chunk_index: chunks.indexOf(chunk)
        }
      });
    }
  }

  async extractText(file: File): Promise<string> {
    const buffer = await file.arrayBuffer();

    if (file.type === 'application/pdf') {
      const data = await pdf(Buffer.from(buffer));
      return data.text;

    } else if (file.type.includes('spreadsheet') || file.name.endsWith('.xlsx')) {
      const workbook = xlsx.read(buffer);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      return xlsx.utils.sheet_to_csv(sheet);

    } else if (file.type.includes('document')) {
      // For DOCX, use mammoth or similar
      return 'Text extraction for DOCX not implemented';
    }

    return '';
  }

  chunkText(text: string, maxTokens: number): string[] {
    // Simple chunking by sentences (production should use proper tokenizer)
    const sentences = text.split(/[.!?]+/);
    const chunks: string[] = [];
    let currentChunk = '';

    for (const sentence of sentences) {
      if ((currentChunk + sentence).length > maxTokens * 4) {
        chunks.push(currentChunk.trim());
        currentChunk = sentence;
      } else {
        currentChunk += sentence + '. ';
      }
    }

    if (currentChunk) chunks.push(currentChunk.trim());

    return chunks;
  }

  async generateEmbedding(text: string): Promise<number[]> {
    const response = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: text
    });

    return response.data[0].embedding;
  }

  async searchRelevantDocs(
    query: string,
    userId: string,
    limit: number = 5
  ): Promise<any[]> {
    // Generate query embedding
    const queryEmbedding = await this.generateEmbedding(query);

    // Similarity search using pgvector
    const { data, error } = await supabase.rpc('match_documents', {
      query_embedding: queryEmbedding,
      match_threshold: 0.7,
      match_count: limit,
      user_id_filter: userId
    });

    if (error) throw error;

    return data;
  }
}

// SQL function for similarity search (run as migration)
/*
CREATE OR REPLACE FUNCTION match_documents (
  query_embedding vector(1536),
  match_threshold float,
  match_count int,
  user_id_filter uuid
)
RETURNS TABLE (
  id uuid,
  filename text,
  metadata jsonb,
  similarity float
)
LANGUAGE SQL STABLE
AS $$
  SELECT
    id,
    filename,
    metadata,
    1 - (embedding <=> query_embedding) AS similarity
  FROM documents
  WHERE user_id = user_id_filter
    AND 1 - (embedding <=> query_embedding) > match_threshold
  ORDER BY embedding <=> query_embedding
  LIMIT match_count;
$$;
*/
```

---

## Security & Privacy Implementation

### 1. Data Encryption

```typescript
import crypto from 'crypto';

class EncryptionService {
  private algorithm = 'aes-256-gcm';
  private key: Buffer;

  constructor() {
    // Key from environment (32 bytes for AES-256)
    this.key = Buffer.from(process.env.ENCRYPTION_KEY!, 'hex');
  }

  encrypt(text: string): { encrypted: string; iv: string; tag: string } {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    const tag = cipher.getAuthTag();

    return {
      encrypted,
      iv: iv.toString('hex'),
      tag: tag.toString('hex')
    };
  }

  decrypt(encrypted: string, iv: string, tag: string): string {
    const decipher = crypto.createDecipheriv(
      this.algorithm,
      this.key,
      Buffer.from(iv, 'hex')
    );

    decipher.setAuthTag(Buffer.from(tag, 'hex'));

    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }
}

// Usage: Encrypt sensitive data before storing
async function saveSensitiveData(data: any, sessionId: string) {
  const encService = new EncryptionService();
  const encrypted = encService.encrypt(JSON.stringify(data));

  await supabase.from('sessions').update({
    encrypted_data: encrypted.encrypted,
    encryption_iv: encrypted.iv,
    encryption_tag: encrypted.tag
  }).eq('id', sessionId);
}
```

### 2. Data Retention Policy

```typescript
class RetentionPolicyService {
  async applyRetentionPolicy(userId: string) {
    // Get user's retention preference
    const { data: user } = await supabase
      .from('users')
      .select('retention_days')
      .eq('id', userId)
      .single();

    const retentionDays = user?.retention_days || 0; // 0 = no storage

    if (retentionDays === 0) {
      // Delete all sessions immediately after completion
      await supabase
        .from('sessions')
        .delete()
        .eq('user_id', userId)
        .eq('status', 'completed');

    } else if (retentionDays > 0) {
      // Delete sessions older than retention period
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - retentionDays);

      await supabase
        .from('sessions')
        .delete()
        .eq('user_id', userId)
        .lt('completed_at', cutoffDate.toISOString());
    }
  }

  // Run as cron job (daily)
  async runDailyCleanup() {
    const { data: users } = await supabase
      .from('users')
      .select('id, retention_days');

    for (const user of users || []) {
      await this.applyRetentionPolicy(user.id);
    }
  }
}
```

### 3. Audit Trail

```typescript
async function logAuditEvent(
  userId: string,
  sessionId: string | null,
  action: string,
  details: any,
  req: Request
) {
  await supabase.from('audit_log').insert({
    user_id: userId,
    session_id: sessionId,
    action,
    details,
    ip_address: req.ip,
    user_agent: req.headers['user-agent'],
    created_at: new Date().toISOString()
  });
}

// Example usage:
await logAuditEvent(
  userId,
  sessionId,
  'create_session',
  { question: input.question },
  req
);

await logAuditEvent(
  userId,
  sessionId,
  'view_report',
  null,
  req
);

await logAuditEvent(
  userId,
  null,
  'export_pdf',
  { session_id: sessionId },
  req
);
```

---

## Performance Optimization

### 1. Caching Strategy

```typescript
import NodeCache from 'node-cache';

// In-memory cache (for frequently accessed data)
const cache = new NodeCache({ stdTTL: 600 }); // 10 minutes

async function getCachedOrFetch<T>(
  key: string,
  fetchFn: () => Promise<T>
): Promise<T> {
  const cached = cache.get<T>(key);
  if (cached) return cached;

  const data = await fetchFn();
  cache.set(key, data);
  return data;
}

// Example: Cache market data
async function getMarketData(industry: string, region: string) {
  const cacheKey = `market:${industry}:${region}`;

  return getCachedOrFetch(cacheKey, async () => {
    // Expensive web search + LLM call
    return await fetchMarketData(industry, region);
  });
}
```

### 2. Parallel Agent Execution

```typescript
// Already implemented in Orchestrator, але важливо:
// - Використовувати Promise.all() для паралельних агентів
// - Rate limiting для API calls (не перевищувати ліміти LLM providers)
// - Circuit breaker pattern для failover

import CircuitBreaker from 'opossum';

const options = {
  timeout: 60000, // 60s
  errorThresholdPercentage: 50,
  resetTimeout: 30000
};

const breaker = new CircuitBreaker(callLLM, options);

breaker.fallback(() => ({ content: 'Service temporarily unavailable' }));

async function callLLMWithCircuitBreaker(prompt: string) {
  return breaker.fire(prompt);
}
```

---

## Monitoring & Observability

```typescript
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1
});

// Track LLM costs
async function trackLLMCost(
  sessionId: string,
  agentName: string,
  cost: number
) {
  Sentry.addBreadcrumb({
    category: 'llm',
    message: `${agentName} cost: $${cost.toFixed(4)}`,
    level: 'info',
    data: { sessionId, agentName, cost }
  });
}

// Track confidence levels
async function trackConfidence(
  sessionId: string,
  avgConfidence: number
) {
  if (avgConfidence < 0.6) {
    Sentry.captureMessage('Low confidence session', {
      level: 'warning',
      tags: { sessionId },
      extra: { avgConfidence }
    });
  }
}
```

---

## Deployment Architecture

```
┌─────────────────────────────────────────────────┐
│               Cloudflare / CDN                  │
└──────────────────┬──────────────────────────────┘
                   │
        ┌──────────┴──────────┐
        │                     │
┌───────▼──────┐    ┌────────▼────────┐
│   Vercel     │    │  Railway/Render │
│  (Frontend)  │    │   (Backend)     │
│  Next.js     │    │   NestJS/FastAPI│
└──────────────┘    └────────┬────────┘
                             │
        ┌────────────────────┼───────────────────┐
        │                    │                   │
┌───────▼───────┐  ┌────────▼────────┐ ┌───────▼──────┐
│   Supabase    │  │     Redis       │ │  Sentry      │
│  (Database)   │  │   (Queue)       │ │ (Monitoring) │
└───────────────┘  └─────────────────┘ └──────────────┘
```

### Environment Variables

**.env (Backend)**
```bash
# Supabase
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxx
SUPABASE_ANON_KEY=xxx

# LLM APIs
OPENAI_API_KEY=sk-xxx
ANTHROPIC_API_KEY=sk-ant-xxx
GOOGLE_AI_API_KEY=xxx

# Web Search
SERPER_API_KEY=xxx

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# Encryption
ENCRYPTION_KEY=xxx (32 bytes hex)

# Monitoring
SENTRY_DSN=https://xxx@sentry.io/xxx

# Other
NODE_ENV=production
PORT=3001
```

**.env (Frontend)**
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
NEXT_PUBLIC_API_URL=https://api.strategicconsultant.ai
```

---

## API Rate Limiting

```typescript
import rateLimit from 'express-rate-limit';

const sessionLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: async (req) => {
    // Get user's plan
    const userId = req.user.id;
    const { data: user } = await supabase
      .from('users')
      .select('plan')
      .eq('id', userId)
      .single();

    // Starter: 10 sessions/day, Team: unlimited
    return user?.plan === 'starter' ? 10 : 1000;
  },
  message: 'Session limit reached for your plan. Please upgrade.'
});

app.post('/api/sessions', sessionLimiter, async (req, res) => {
  // Create session...
});
```

---

Це завершує технічну архітектуру. Далі створю Supabase schema migration.
