import { Lock, Shield, Eye, FileCheck } from 'lucide-react';

export default function SecurityTrust() {
  const features = [
    {
      icon: Lock,
      title: 'End-to-end шифрування',
      description: 'Всі дані шифруються при передачі та зберіганні (AES-256, TLS 1.3)'
    },
    {
      icon: Shield,
      title: 'GDPR-ready',
      description: 'Право на видалення, data portability, повна прозорість'
    },
    {
      icon: Eye,
      title: 'Без зберігання за замовчуванням',
      description: 'Ваші запити не зберігаються без вашого дозволу. Ви контролюєте retention policy'
    },
    {
      icon: FileCheck,
      title: 'Audit trail',
      description: 'Повний журнал всіх запитів та дій для прозорості та compliance'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Ваші дані під захистом
          </h2>
          <p className="text-xl text-slate-300">
            Enterprise-grade security & compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-slate-800 border border-yellow-600/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-yellow-600/20 rounded-lg">
              <Lock className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <h4 className="font-bold text-yellow-400 mb-2">Для конфіденційних даних</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Рекомендуємо <span className="font-semibold">Enterprise план</span> з on-premise deployment
                або private LLM endpoints для максимальної безпеки. Ви можете тримати дані у власній інфраструктурі.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-white/30 hover:bg-white/10 rounded-lg font-semibold transition-all">
            Читати повну Privacy Policy
          </button>
        </div>
      </div>
    </section>
  );
}
