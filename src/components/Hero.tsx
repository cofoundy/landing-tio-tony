import Image from "next/image";
import fachadaImg from "@/assets/fachada.webp";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image */}
      <Image
        src={fachadaImg}
        alt="Fachada de El Tío Tony con mural de frutas coloridas"
        fill
        className="object-cover object-center"
        priority
        placeholder="blur"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Floating fruit decorations */}
      <div className="pointer-events-none absolute inset-0">
        <span className="float-slow absolute left-[8%] top-[15%] text-5xl opacity-70 md:text-6xl">
          🥭
        </span>
        <span className="float-medium absolute right-[10%] top-[20%] text-4xl opacity-60 md:text-5xl">
          🍉
        </span>
        <span className="float-fast absolute left-[15%] bottom-[25%] text-4xl opacity-50 md:text-5xl">
          🍊
        </span>
        <span className="float-slow absolute right-[20%] bottom-[30%] text-3xl opacity-40 md:text-4xl">
          🍍
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-32 md:px-8">
        <div className="max-w-2xl">
          <p className="hero-animate mb-4 inline-block rounded-full bg-accent/90 px-4 py-1.5 font-body text-sm font-bold text-text">
            Desde las 6AM en El Tambo, Huancayo
          </p>

          <h1 className="hero-animate hero-animate-delay-1 font-display text-5xl font-bold leading-tight text-white md:text-7xl">
            El Tío Tony
          </h1>

          <p className="hero-animate hero-animate-delay-1 mt-2 font-display text-xl font-medium text-accent md:text-2xl">
            Juguería & Desayunos
          </p>

          <p className="hero-animate hero-animate-delay-2 mt-6 max-w-lg font-body text-lg leading-relaxed text-white/90 md:text-xl">
            Desayunos nutritivos, jugos naturales y combos universitarios desde{" "}
            <span className="font-bold text-accent">S/1.50</span>. Energía real
            para arrancar el día.
          </p>

          <div className="hero-animate hero-animate-delay-3 mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/51928561078?text=Hola%2C%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-base font-bold text-white shadow-xl transition-transform hover:scale-105 hover:bg-whatsapp-dark"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Haz tu pedido
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-base font-bold text-white transition-colors hover:border-accent hover:text-accent"
            >
              Ver menú
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
