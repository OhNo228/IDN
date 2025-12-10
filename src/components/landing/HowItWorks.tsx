import { MessageSquare, Workflow, FileText } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Опишіть виклик',
      description: 'Що вас цікавить: новий ринок, інвестиція, оптимізація?',
      color: 'bg-blue-600'
    },
    {
      number: '02',
      icon: Workflow,
      title: 'AI-агенти працюють',
      description: '12 спеціалізованих агентів аналізують ринок, фінанси, ризики паралельно',
      color: 'bg-green-600'
    },
    {
      number: '03',
      icon: FileText,
      title: 'Отримайте стратегію',
      description: 'Executive summary + детальний звіт з рівнем впевненості та джерелами',
      color: 'bg-purple-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            3 кроки до стратегічного рішення
          </h2>
          <p className="text-xl text-slate-600">
            Від вашого питання до executive summary за лічені години
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600"></div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${step.color} rounded-full mb-6 relative z-10 shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>

                  <div className="text-sm font-bold text-slate-400 mb-2">
                    {step.number}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
