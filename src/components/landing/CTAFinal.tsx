import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTAFinal() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIGZpbGw9IiMxZTI5M2IiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Готові до кращих рішень?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Приймайте стратегічні рішення з впевненістю
          </h2>

          <p className="text-xl text-blue-100 mb-12">
            Перші 3 сесії безкоштовно. Без кредитної карти. Без зобов'язань.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
              Розпочати безкоштовно
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 border-2 border-white/30 hover:bg-white/10 rounded-lg font-semibold text-lg transition-all">
              Поговорити з експертом
            </button>
          </div>

          <p className="mt-8 text-blue-200 text-sm">
            Приєднуйтесь до 1,250+ топ-менеджерів, які вже використовують платформу
          </p>
        </div>
      </div>
    </section>
  );
}
