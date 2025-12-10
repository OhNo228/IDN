import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  const sections = [
    {
      title: 'Продукт',
      links: ['Можливості', 'Ціни', 'Безпека', 'API', 'Документація']
    },
    {
      title: 'Рішення',
      links: ['Для CEO', 'Для CFO', 'Для CMO', 'Для COO', 'Enterprise']
    },
    {
      title: 'Ресурси',
      links: ['Блог', 'Кейси', 'Вебінари', 'Підтримка', 'Статус']
    },
    {
      title: 'Компанія',
      links: ['Про нас', 'Кар\'єра', 'Контакти', 'Партнери', 'Преса']
    }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-white mb-4">
              Strategic AI
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Стратегічний партнер на базі AI для C-level рішень
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2024 Strategic Digital Consultant. Всі права захищені.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
