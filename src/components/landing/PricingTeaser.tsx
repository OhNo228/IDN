import { Check, ArrowRight } from 'lucide-react';

export default function PricingTeaser() {
  const plans = [
    {
      name: 'Starter',
      price: '€299',
      period: '/міс',
      features: [
        '1 користувач',
        '10 сесій/міс',
        'Базові агенти (6/12)',
        'Email support',
        'Export PDF'
      ],
      cta: 'Розпочати',
      highlight: false
    },
    {
      name: 'Team',
      price: '€999',
      period: '/міс',
      features: [
        'До 5 користувачів',
        'Необмежено сесій',
        'Всі 12 агентів',
        'Priority support',
        'API access',
        'Slack/Teams інтеграція'
      ],
      cta: 'Найпопулярніший',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Необмежено користувачів',
        'On-premise deployment',
        'Custom integrations',
        'Dedicated account manager',
        'SLA 99.9%',
        'Advanced security'
      ],
      cta: "Зв'язатись",
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Плани для команд будь-якого розміру
          </h2>
          <p className="text-xl text-slate-600">
            Без прихованих платежів, скасуйте будь-коли
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlight
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105 border-4 border-blue-400'
                  : 'bg-white text-slate-900 shadow-lg border border-slate-200'
              }`}
            >
              {plan.highlight && (
                <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  Найпопулярніший
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.highlight ? 'text-blue-100' : 'text-slate-600'}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlight ? 'text-blue-200' : 'text-green-600'
                    }`} />
                    <span className={plan.highlight ? 'text-blue-50' : 'text-slate-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  plan.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Перші 3 сесії безкоштовно, без кредитної карти
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
            Переглянути детальне порівняння планів →
          </a>
        </div>
      </div>
    </section>
  );
}
