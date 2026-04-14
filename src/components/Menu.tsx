const CATEGORIES = [
  {
    name: "Combos",
    emoji: "⭐",
    gradient: "from-primary/20 to-primary/5",
    accent: "text-primary",
    featured: true,
    items: [
      { name: "Universitario", desc: "Quinua + 2 panes", price: "S/4.00" },
      { name: "Clásico", desc: "Pan con pollo + café", price: "S/5.00" },
      { name: "Power", desc: "Empanada + café", price: "S/6.00" },
    ],
  },
  {
    name: "Desayunos Calientes",
    emoji: "☕",
    gradient: "from-orange/20 to-orange/5",
    accent: "text-orange",
    items: [
      { name: "Quinua Especial", desc: "Piña + manzana de agua + membrillo", price: "S/1.50" },
      { name: "Maca Energética", desc: "Bebida caliente de maca", price: "S/1.50" },
      { name: "Café Pasado", desc: "Café tradicional", price: "S/2.50" },
      { name: "Café con leche", desc: "Clásico cremoso", price: "S/3.00" },
      { name: "Infusiones", desc: "Hierbas naturales", price: "S/1.50" },
    ],
  },
  {
    name: "Panes",
    emoji: "🥖",
    gradient: "from-accent/20 to-accent/5",
    accent: "text-orange",
    items: [
      { name: "Pan con queso", desc: "Clásico calentito", price: "S/1.50" },
      { name: "Pan con papa rebozada", desc: "Contundente y sabroso", price: "S/1.50" },
      { name: "Pan con tortilla de espinaca", desc: "Rico en hierro", price: "S/1.50" },
      { name: "Pan con hot dog + huevo", desc: "Combo rendidor", price: "S/1.50" },
      { name: "Pan con palta", desc: "Cremoso y nutritivo", price: "S/1.50" },
      { name: "Pan con huevo", desc: "El de siempre", price: "S/1.50" },
      { name: "Pan con pollo", desc: "El más pedido", price: "S/3.00" },
    ],
  },
  {
    name: "Jugos Especiales",
    emoji: "🍹",
    gradient: "from-secondary/20 to-secondary/5",
    accent: "text-secondary",
    items: [
      { name: "Jugo especial", desc: "La receta del Tío Tony", price: "S/6.00" },
      { name: "Jugo surtido", desc: "Mix de temporada", price: "S/5.00" },
    ],
  },
  {
    name: "Naranja",
    emoji: "🍊",
    gradient: "from-orange/20 to-orange/5",
    accent: "text-orange",
    items: [
      { name: "Naranja (botella)", desc: "Para llevar", price: "S/2.50" },
      { name: "Naranja (vaso)", desc: "Recién exprimida", price: "S/3.00" },
    ],
  },
  {
    name: "Papaya",
    emoji: "🥭",
    gradient: "from-secondary/20 to-secondary/5",
    accent: "text-secondary",
    items: [
      { name: "Papaya", desc: "Natural", price: "S/4.50" },
      { name: "Papaya con leche", desc: "Cremosa", price: "S/5.50" },
      { name: "Papaya con plátano", desc: "Energético", price: "S/4.50" },
      { name: "Papaya con piña", desc: "Tropical", price: "S/4.50" },
    ],
  },
  {
    name: "Piña",
    emoji: "🍍",
    gradient: "from-accent/20 to-accent/5",
    accent: "text-orange",
    items: [
      { name: "Piña", desc: "Refrescante y natural", price: "S/4.50" },
    ],
  },
  {
    name: "Fresa",
    emoji: "🍓",
    gradient: "from-pink-500/20 to-pink-500/5",
    accent: "text-pink-500",
    items: [
      { name: "Fresa", desc: "Natural", price: "S/5.00" },
      { name: "Fresa con leche", desc: "Cremosa", price: "S/6.50" },
      { name: "Fresa con piña", desc: "Tropical", price: "S/5.00" },
      { name: "Fresa + arándanos con leche", desc: "Antioxidante", price: "S/8.00" },
    ],
  },
  {
    name: "Plátano",
    emoji: "🍌",
    gradient: "from-yellow-500/20 to-yellow-500/5",
    accent: "text-yellow-600",
    items: [
      { name: "Plátano con leche", desc: "Cremoso", price: "S/7.00" },
      { name: "Plátano + arándanos", desc: "Mix de frutas", price: "S/6.00" },
      { name: "Plátano + fresa con leche", desc: "Cremoso y frutal", price: "S/7.00" },
    ],
  },
  {
    name: "Mango",
    emoji: "🥭",
    gradient: "from-amber-500/20 to-amber-500/5",
    accent: "text-amber-600",
    items: [
      { name: "Mango", desc: "Natural", price: "S/5.00" },
      { name: "Mango con leche", desc: "Cremoso", price: "S/6.00" },
      { name: "Mango + papaya", desc: "Tropical", price: "S/6.00" },
    ],
  },
  {
    name: "Cócteles & Postres",
    emoji: "🍸",
    gradient: "from-purple-500/20 to-purple-500/5",
    accent: "text-purple-600",
    items: [
      { name: "Pisco sour de limón", desc: "Clásico peruano", price: "S/3.50" },
      { name: "Chicha morada con pisco", desc: "Tradicional con toque", price: "S/3.50" },
      { name: "Maracuyá sour", desc: "Refrescante y tropical", price: "S/3.50" },
      { name: "Cheesecake fresa y maracuyá", desc: "Postre de la casa", price: "S/3.50" },
    ],
  },
  {
    name: "Extras",
    emoji: "🍨",
    gradient: "from-cyan/20 to-cyan/5",
    accent: "text-cyan",
    items: [
      { name: "Ensalada de fruta", desc: "Fruta fresca picada", price: "S/5.00" },
      { name: "Gelatina", desc: "Postre clásico", price: "S/1.00" },
      { name: "Marcianos (Happy Chubs)", desc: "Helados artesanales", price: "—" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-4xl">🍹</span>
          <h2 className="font-display text-3xl font-bold text-text md:text-5xl">
            Nuestro Menú
          </h2>
          <p className="mt-3 font-body text-lg text-text-muted">
            Todo preparado al momento con ingredientes frescos del mercado
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className={`menu-card scroll-animate overflow-hidden rounded-2xl bg-gradient-to-br ${cat.gradient} p-1 ${"featured" in cat && cat.featured ? "ring-2 ring-secondary/30 lg:col-span-1" : ""}`}
            >
              <div className="h-full rounded-xl bg-white/80 p-5 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                    {cat.emoji}
                  </span>
                  <h3 className="font-display text-lg font-bold text-text">
                    {cat.name}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-white"
                    >
                      <div className="min-w-0">
                        <p className="truncate font-body text-sm font-semibold text-text">
                          {item.name}
                        </p>
                        <p className="truncate font-body text-xs text-text-muted">
                          {item.desc}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 font-display text-lg font-bold ${
                          item.price.startsWith("<<")
                            ? "text-sm text-orange/60"
                            : cat.accent
                        }`}
                      >
                        {item.price.startsWith("<<") ? "—" : item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after menu */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/51928561078?text=Hola%2C%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-4 font-body text-base font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp-dark"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
