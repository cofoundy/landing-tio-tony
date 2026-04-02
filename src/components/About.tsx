import Image from "next/image";
import fachadaNocheImg from "@/assets/fachada-noche.webp";

export default function About() {
  return (
    <section id="nosotros" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="scroll-animate relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={fachadaNocheImg}
              alt="El Tío Tony de noche — mural iluminado"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              placeholder="blur"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="font-display text-lg font-bold text-white">
                Nuestro local en El Tambo
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="scroll-animate">
            <span className="mb-2 inline-block text-4xl">🍎</span>
            <h2 className="font-display text-3xl font-bold text-text md:text-4xl">
              Más que una juguería
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-text-muted">
              El Tío Tony nació para alimentar bien a quienes arrancan el día
              temprano. Universitarios, trabajadores, familias — todos merecen
              un desayuno nutritivo sin que les cueste un ojo de la plata.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-text-muted">
              Nuestro mural de frutas es nuestra carta de presentación: colores,
              frescura y energía. Así de vibrante es lo que te servimos adentro.
            </p>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-primary/10 p-4 text-center">
                <p className="font-display text-2xl font-bold text-primary">6AM</p>
                <p className="font-body text-xs text-text-muted">Abrimos tempranito</p>
              </div>
              <div className="rounded-2xl bg-secondary/10 p-4 text-center">
                <p className="font-display text-2xl font-bold text-secondary">S/1.50</p>
                <p className="font-body text-xs text-text-muted">Desde</p>
              </div>
              <div className="rounded-2xl bg-accent/10 p-4 text-center">
                <p className="font-display text-2xl font-bold text-orange">100%</p>
                <p className="font-body text-xs text-text-muted">Natural</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
