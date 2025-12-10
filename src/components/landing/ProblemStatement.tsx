import { Clock, TrendingUp, FileSearch } from 'lucide-react';

export default function ProblemStatement() {
  const problems = [
    {
      icon: Clock,
      before: 'Weeks of research',
      after: 'Hours with AI',
      color: 'text-blue-600'
    },
    {
      icon: FileSearch,
      before: 'Фрагментовані дані',
      after: 'Єдина картина',
      color: 'text-green-600'
    },
    {
      icon: TrendingUp,
      before: "Суб'єктивні думки",
      after: 'Data-driven insights',
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Стратегічні рішення потребують глибокого аналізу
          </h2>
          <p className="text-xl text-slate-600">
            Трансформуйте процес прийняття рішень за допомогою AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <problem.icon className={`w-12 h-12 ${problem.color} mb-6`} />
              <div className="space-y-4">
                <div className="text-slate-400 line-through text-lg">
                  {problem.before}
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                  <span className="text-sm font-semibold text-slate-500">→</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                </div>
                <div className={`${problem.color} font-bold text-xl`}>
                  {problem.after}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
