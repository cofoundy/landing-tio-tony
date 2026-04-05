export default function Location() {
  return (
    <section id="ubicacion" className="bg-bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-4xl">📍</span>
          <h2 className="font-display text-3xl font-bold text-text md:text-5xl">
            Encuéntranos
          </h2>
          <p className="mt-3 font-body text-lg text-text-muted">
            Estamos en El Tambo, a pasos de las principales universidades
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Map */}
          <div className="scroll-animate overflow-hidden rounded-3xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.8!2d-75.2185!3d-12.0633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e964dc4c1c4a7%3A0x1!2sAv.+Jos%C3%A9+Olaya+Mz+39+Lt+13%2C+El+Tambo%2C+Huancayo!5e0!3m2!1ses!2spe!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de El Tío Tony en Google Maps"
              className="h-[350px] w-full md:h-[400px]"
            />
          </div>

          {/* Info cards */}
          <div className="scroll-animate flex flex-col gap-6">
            {/* Address */}
            <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6">
              <div className="mb-2 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg text-white">
                  📍
                </span>
                <h3 className="font-display text-lg font-bold text-text">
                  Dirección
                </h3>
              </div>
              <p className="font-body text-base text-text-muted">
                Av. José Olaya Mz 39 Lt 13
                <br />
                El Tambo — Huancayo
              </p>
              <a
                href="https://www.google.com/maps/search/Av+José+Olaya+Mz+39+Lt+13+El+Tambo+Huancayo"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 font-body text-sm font-bold text-primary hover:underline"
              >
                Abrir en Google Maps →
              </a>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border-2 border-secondary/20 bg-secondary/5 p-6">
              <div className="mb-2 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-lg text-white">
                  🕐
                </span>
                <h3 className="font-display text-lg font-bold text-text">
                  Horario
                </h3>
              </div>
              <div className="space-y-1 font-body text-base text-text-muted">
                <p>
                  <span className="font-semibold text-text">Lunes a sábado:</span>{" "}
                  6:00 AM — 3:00 PM
                </p>
                <p>
                  <span className="font-semibold text-text">Domingo:</span>{" "}
                  Cerrado
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="rounded-2xl border-2 border-whatsapp/20 bg-whatsapp/5 p-6">
              <div className="mb-2 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-lg text-white">
                  💬
                </span>
                <h3 className="font-display text-lg font-bold text-text">
                  WhatsApp
                </h3>
              </div>
              <p className="font-body text-base text-text-muted">
                Haz tu pedido o consulta por WhatsApp
              </p>
              <a
                href="https://wa.me/51928561078"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-2.5 font-body text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-whatsapp-dark"
              >
                928 561 078
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
