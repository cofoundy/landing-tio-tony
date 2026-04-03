const HIGHLIGHTS = [
  { icon: "💰", label: "Desde S/1.50", sub: "Precios universitarios" },
  { icon: "🕐", label: "6AM — 3PM", sub: "Lunes a sábado" },
  { icon: "🍊", label: "100% Natural", sub: "Fruta fresca del mercado" },
  { icon: "📲", label: "Por WhatsApp", sub: "Listo cuando llegues" },
];

export default function Highlights() {
  return (
    <section className="bg-bg-white py-6 md:py-8">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-3 rounded-xl border border-primary/10 bg-white p-3 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md md:flex-col md:p-4 md:text-center"
            >
              <span className="text-2xl md:text-3xl">{h.icon}</span>
              <div>
                <p className="font-display text-sm font-bold text-text md:text-base">
                  {h.label}
                </p>
                <p className="font-body text-xs text-text-muted">{h.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
