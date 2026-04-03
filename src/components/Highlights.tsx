const HIGHLIGHTS = [
  { icon: "💰", label: "Desde S/1.50", sub: "Precios universitarios" },
  { icon: "🕐", label: "6AM — 3PM", sub: "Lunes a sábado" },
  { icon: "🍊", label: "100% Natural", sub: "Fruta fresca del mercado" },
  { icon: "📲", label: "Pedidos WhatsApp", sub: "Listo cuando llegues" },
];

export default function Highlights() {
  return (
    <section className="relative z-10 -mt-10 px-4 md:-mt-14 md:px-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {HIGHLIGHTS.map((h) => (
          <div
            key={h.label}
            className="scroll-animate rounded-2xl border border-primary/10 bg-white p-4 text-center shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl md:p-5"
          >
            <span className="mb-1 block text-2xl md:text-3xl">{h.icon}</span>
            <p className="font-display text-sm font-bold text-text md:text-base">
              {h.label}
            </p>
            <p className="font-body text-xs text-text-muted">{h.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
