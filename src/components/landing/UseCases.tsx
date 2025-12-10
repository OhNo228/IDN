import { Briefcase, DollarSign, TrendingUp, Settings } from 'lucide-react';
import { useState } from 'react';

export default function UseCases() {
  const [activeRole, setActiveRole] = useState('CEO');

  const roles = [
    { id: 'CEO', icon: Briefcase, label: 'CEO' },
    { id: 'CFO', icon: DollarSign, label: 'CFO' },
    { id: 'CMO', icon: TrendingUp, label: 'CMO' },
    { id: 'COO', icon: Settings, label: 'COO' }
  ];

  const cases = {
    CEO: {
      title: 'Вихід на новий ринок',
      scenario: 'Tech startup (B2B SaaS, €10M ARR) розглядає вихід на німецький ринок',
      question: 'Чи варто виходити на німецький B2B SaaS ринок? Бюджет €800K, горизонт 24 міс.',
      results: [
        'TAM: €8.5B (CAGR 15%)',
        'Конкуренти: SAP, local players (medium threat)',
        'Break-even: 18 months (base scenario)',
        'Recommendation: Proceed, focus Berlin/Munich'
      ],
      time: '3.5 години',
      confidence: 88,
      quote: 'За один день я отримав те, на що моїй команді знадобилося б 2-3 тижні'
    },
    CFO: {
      title: 'Оцінка інвестиції / ROI',
      scenario: 'Manufacturing company оцінює інвестицію €5M у автоматизацію виробництва',
      question: 'Порахуйте ROI, NPV, IRR та ключові ризики для інвестиції €5M',
      results: [
        'ROI: 28% (5 років)',
        'NPV: €2.8M (discount rate 10%)',
        'Payback period: 32 місяці',
        'Top risk: Implementation delay (30% chance)'
      ],
      time: '2 години',
      confidence: 85,
      quote: 'Детальна фінмодель за 1 годину замість тижня роботи аналітиків'
    },
    CMO: {
      title: 'Запуск нового продукту',
      scenario: 'E-commerce компанія планує запуск sustainable fashion line',
      question: 'TAM, positioning, go-to-market стратегія для нової лінії продуктів',
      results: [
        'TAM Europe: €18B (CAGR 12%)',
        'Positioning: Affordable sustainable + transparency',
        'GTM: Soft launch → influencers → paid ads',
        'Expected conversion: 2.5%'
      ],
      time: '2.5 години',
      confidence: 81,
      quote: 'Market sizing, competitive analysis та GTM план за одну сесію'
    },
    COO: {
      title: 'Оптимізація операцій',
      scenario: 'Logistics company шукає способи зниження операційних витрат',
      question: 'Як оптимізувати logistics flow і знизити витрати на 15-20%?',
      results: [
        'Можливі savings: 18% (€2.4M/рік)',
        'Key actions: Route optimization, warehouse automation',
        'Implementation time: 6 місяців',
        'Risks: Medium (change management)'
      ],
      time: '3 години',
      confidence: 83,
      quote: 'Системний аналіз операцій з конкретними рекомендаціями'
    }
  };

  const currentCase = cases[activeRole as keyof typeof cases];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Реальні кейси, реальні результати
          </h2>
          <p className="text-xl text-slate-600">
            Як C-level команди використовують платформу
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeRole === role.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <role.icon className="w-5 h-5" />
              {role.label}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-xl border border-slate-200">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {currentCase.title}
              </h3>
              <p className="text-slate-600">
                {currentCase.scenario}
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-700 font-semibold">{currentCase.confidence}%</span>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6 rounded">
            <p className="text-slate-700 italic">
              "{currentCase.question}"
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-slate-900 mb-3">Результат:</h4>
            <ul className="space-y-2">
              {currentCase.results.map((result, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span className="text-slate-700">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <div>
                <span className="font-semibold">Час виконання:</span> {currentCase.time}
              </div>
              <div>
                <span className="font-semibold">Впевненість:</span> {currentCase.confidence}%
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-slate-100 rounded-lg">
            <p className="text-slate-700 italic">
              "{currentCase.quote}"
            </p>
            <p className="text-sm text-slate-500 mt-2">— {activeRole}, реальний клієнт</p>
          </div>
        </div>
      </div>
    </section>
  );
}
