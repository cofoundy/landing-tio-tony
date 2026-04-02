"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logoImg from "@/assets/logo-40.png";

const NAV_ITEMS = [
  { label: "Menú", href: "#menu" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo text */}
        <a href="#" className="flex items-center gap-2">
          <Image src={logoImg} alt="El Tío Tony logo" width={32} height={32} className="object-contain" />
          <span
            className={`font-display text-xl font-bold transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            El Tío Tony
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-body text-sm font-semibold transition-colors hover:text-primary ${
                scrolled ? "text-text" : "text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/51928561078"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-whatsapp px-5 py-2 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp-dark"
          >
            Pedir por WhatsApp
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex flex-col gap-1.5 md:hidden ${
            scrolled ? "text-text" : "text-white"
          }`}
          aria-label="Abrir menú"
        >
          <span
            className={`block h-0.5 w-6 transition-all ${
              scrolled ? "bg-text" : "bg-white"
            } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${
              scrolled ? "bg-text" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${
              scrolled ? "bg-text" : "bg-white"
            } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-primary/10 bg-white px-4 py-4 shadow-lg md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-body text-base font-semibold text-text hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/51928561078"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-full bg-whatsapp py-3 text-center text-sm font-bold text-white"
          >
            Pedir por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
