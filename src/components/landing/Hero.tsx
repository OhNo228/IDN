import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIGZpbGw9IiMxZTI5M2IiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-20">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
            <span className="text-blue-300 text-sm font-medium">
              Multi-LLM AI Platform для C-Level
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Стратегічний партнер на базі AI для C‑level рішень
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            Отримуйте перевірені стратегії, моделі й рекомендації з оцінкою ризиків
            та фінансовою аналітикою — за 1 сесію
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
              Запитати стратегію
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 border-2 border-white/30 hover:bg-white/10 rounded-lg font-semibold text-lg transition-all flex items-center gap-2">
              <Play className="w-5 h-5" />
              Показати демонстрацію
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">12</div>
              <div className="text-slate-400">AI-агентів</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">96%</div>
              <div className="text-slate-400">Рівень впевненості</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">2.5x</div>
              <div className="text-slate-400">Швидше</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">1,250+</div>
              <div className="text-slate-400">Стратегій</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
