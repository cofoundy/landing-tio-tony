import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jugueriatiotony.com"),
  title: "El Tío Tony — Juguería & Desayunos en Huancayo",
  description:
    "Desayunos nutritivos, jugos naturales y combos desde S/1.50. Av. José Olaya, El Tambo — Huancayo. Abierto de lunes a sábado, 6AM a 3PM.",
  keywords: [
    "juguería Huancayo",
    "desayunos El Tambo",
    "jugos naturales Huancayo",
    "El Tío Tony",
    "desayunos baratos Huancayo",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "El Tío Tony — Juguería & Desayunos",
    description:
      "Desayunos nutritivos, jugos naturales y combos desde S/1.50 en El Tambo, Huancayo.",
    type: "website",
    locale: "es_PE",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "El Tío Tony — Juguería & Desayunos en Huancayo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Tío Tony — Juguería & Desayunos",
    description:
      "Desayunos nutritivos, jugos naturales y combos desde S/1.50 en El Tambo, Huancayo.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
