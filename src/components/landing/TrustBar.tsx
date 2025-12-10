export default function TrustBar() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-600 text-sm font-medium mb-6">
          Використовують топ-менеджери компаній з Fortune 500
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {['TechCorp', 'InnovateLabs', 'GlobalTrade', 'DataSystems', 'CloudScale'].map((company) => (
            <div key={company} className="text-2xl font-bold text-slate-400">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
