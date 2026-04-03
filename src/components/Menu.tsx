const CATEGORIES = [
  {
    name: "Desayunos Calientes",
    emoji: "☕",
    gradient: "from-orange/20 to-orange/5",
    accent: "text-orange",
    items: [
      { name: "Quinua especial", desc: "Piña + manzana de agua + membrillo", price: "S/1.50" },
      { name: "Maca energética", desc: "Bebida caliente de maca", price: "S/1.50" },
      { name: "Café / Leche / Infusiones", desc: "Bebidas clásicas", price: "S/1.00" },
    ],
  },
  {
    name: "Panes Nutritivos",
    emoji: "🥖",
    gradient: "from-accent/20 to-accent/5",
    accent: "text-orange",
    items: [
      { name: "Pan con huevo frito", desc: "Clásico y rendidor", price: "S/1.50" },
      { name: "Pan con palta", desc: "Cremoso y nutritivo", price: "S/1.50" },
      { name: "Pan con tortilla de espinaca", desc: "Rico en hierro", price: "S/1.50" },
      { name: "Pan con papa rebozada", desc: "Contundente y sabroso", price: "S/1.50" },
    ],
  },
  {
    name: "Jugos Naturales",
    emoji: "🍊",
    gradient: "from-primary/20 to-primary/5",
    accent: "text-primary",
    items: [
      { name: "Papaya + leche", desc: "Cremoso y digestivo", price: "S/2.00" },
      { name: "Fresa + plátano", desc: "El favorito", price: "S/2.00" },
      { name: "Piña + naranja", desc: "Vitamina C pura", price: "S/2.00" },
      { name: "Surtido energético", desc: "Mix de temporada", price: "S/2.50" },
      { name: "Especial de la casa", desc: "La receta del Tío Tony", price: "S/3.00" },
    ],
  },
  {
    name: "Combos",
    emoji: "⚡",
    gradient: "from-secondary/20 to-secondary/5",
    accent: "text-secondary",
    featured: true,
    items: [
      { name: "Combo Universitario", desc: "Quinua + pan + jugo", price: "<<PRECIO>>" },
      { name: "Combo Power", desc: "Jugo + 2 panes", price: "<<PRECIO>>" },
      { name: "Combo Rápido", desc: "Café + pan", price: "<<PRECIO>>" },
    ],
  },
  {
    name: "Extras",
    emoji: "🍨",
    gradient: "from-cyan/20 to-cyan/5",
    accent: "text-cyan",
    items: [
      { name: "Ensalada de frutas", desc: "Fruta fresca picada", price: "S/2.00" },
      { name: "Gelatina", desc: "Postre clásico", price: "S/1.00" },
      { name: "Marcianos (Happy Chubs)", desc: "Helados artesanales", price: "S/1.00" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-bg-white py-16 pt-24 md:py-24 md:pt-32">
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
