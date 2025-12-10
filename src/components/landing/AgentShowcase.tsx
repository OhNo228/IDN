import {
  Workflow,
  MessageCircle,
  GitBranch,
  Globe,
  Target,
  DollarSign,
  AlertTriangle,
  Compass,
  Shield,
  LayoutGrid,
  TrendingUp,
  FileOutput
} from 'lucide-react';

interface Agent {
  name: string;
  icon: any;
  description: string;
  confidence: number;
}

export default function AgentShowcase() {
  const agents: Agent[] = [
    {
      name: 'Orchestrator',
      icon: Workflow,
      description: 'Координує всі процеси та агентів',
      confidence: 98
    },
    {
      name: 'Problem Framing',
      icon: MessageCircle,
      description: 'Уточнює контекст, цілі та KPI',
      confidence: 92
    },
    {
      name: 'Hypothesis Decomposer',
      icon: GitBranch,
      description: 'Розбиває на перевірювані гіпотези',
      confidence: 89
    },
    {
      name: 'Market Intelligence',
      icon: Globe,
      description: 'TAM/SAM/SOM, тренди, аналітика ринку',
      confidence: 87
    },
    {
      name: 'Competitive Analysis',
      icon: Target,
      description: 'SWOT, positioning, конкурентна карта',
      confidence: 85
    },
    {
      name: 'Financial Modeling',
      icon: DollarSign,
      description: 'P&L, ROI, NPV, сценарії',
      confidence: 91
    },
    {
      name: 'Risk Assessment',
      icon: AlertTriangle,
      description: 'Ризики, ймовірність, mitigation',
      confidence: 88
    },
    {
      name: 'Strategy Frameworks',
      icon: Compass,
      description: 'Porter, Ansoff, Blue Ocean, JTBD',
      confidence: 86
    },
    {
      name: 'Advocate',
      icon: Shield,
      description: 'Критичні питання та перевірка',
      confidence: 90
    },
    {
      name: 'Scenario Planner',
      icon: LayoutGrid,
      description: 'Альтернативні сценарії з метриками',
      confidence: 84
    },
    {
      name: 'Decision Synthesizer',
      icon: TrendingUp,
      description: 'Зведення всіх даних у рекомендацію',
      confidence: 93
    },
    {
      name: 'Output Agent',
      icon: FileOutput,
      description: 'Форматування звітів та PDF',
      confidence: 95
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            12 AI-агентів — ваша стратегічна команда
          </h2>
          <p className="text-xl text-slate-300">
            Кожен агент — експерт у своїй області, разом вони створюють повну картину
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="group bg-slate-800 hover:bg-slate-750 rounded-xl p-6 transition-all hover:shadow-2xl hover:scale-105 border border-slate-700 hover:border-blue-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <agent.icon className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">{agent.confidence}%</span>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {agent.name}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                {agent.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all">
            Побачте агентів у дії
          </button>
        </div>
      </div>
    </section>
  );
}
