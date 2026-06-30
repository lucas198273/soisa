import { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const COLORS = {
  orange: "#E87A20",
  orangeLight: "#F59E42",
  blueDark: "#1A2B4C",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#888888",
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const navLinks = useMemo(
    () => [
      { to: "/", label: "Início" },
      { to: "/about", label: "Sobre" },
      { to: "/products", label: "Tatuagens" },
      { to: "/politicas", label: "Políticas" },
      { to: "/galeria", label: "Galeria" },
      { to: "/contact", label: "Contato" },
    ],
    []
  );

  const handleLinkClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-20 shadow-md border-b-4 bg-black"
      style={{ borderBottomColor: COLORS.blueDark }}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        {/* Botão menu mobile */}
        <button
          onClick={toggleMenu}
          className="text-3xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md p-2 mr-2 md:hidden z-10 transition-transform duration-200 hover:scale-110"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Menu desktop - esquerda */}
        <nav className="hidden md:flex items-center space-x-3 sm:space-x-4 lg:space-x-5 text-white text-xs sm:text-sm lg:text-base font-bold">
          <Link
            to="/"
            className="relative transition-colors duration-300 hover:text-orange-500 group"
          >
            Início
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: COLORS.orange }}
            />
          </Link>
          <Link
            to="/about"
            className="relative transition-colors duration-300 hover:text-orange-500 group"
          >
            Sobre
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: COLORS.orange }}
            />
          </Link>
          <Link
            to="/products"
            className="relative transition-colors duration-300 hover:text-orange-500 group"
          >
            Tatuagens
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: COLORS.orange }}
            />
          </Link>
        </nav>

        {/* Logo com animação AOS */}
        <div
          className="flex-shrink-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 md:static md:mx-auto md:translate-x-0 md:translate-y-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Link to="/" className="flex items-center justify-center">
            <img
              src="/assets/logo.webp"
              alt="Soisa Tattoo Studio - Logo"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
              style={{ filter: "drop-shadow(0 0 8px rgba(232, 122, 32, 0.3))" }}
            />
          </Link>
        </div>

        {/* Menu desktop - direita */}
        <nav className="hidden md:flex items-center space-x-3 sm:space-x-4 lg:space-x-5 text-white text-xs sm:text-sm lg:text-base font-bold">
          <Link
            to="/politicas"
            className="relative transition-colors duration-300 hover:text-orange-500 group"
          >
            Políticas
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: COLORS.orange }}
            />
          </Link>
          <Link
            to="/galeria"
            className="relative transition-colors duration-300 hover:text-orange-500 group"
          >
            Galeria
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: COLORS.orange }}
            />
          </Link>
          <Link
            to="/contact"
            className="relative transition-colors duration-300 hover:text-orange-500 group"
          >
            Contato
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: COLORS.orange }}
            />
          </Link>
        </nav>

        {/* Espaço vazio à direita para manter o layout centralizado (sem carrinho) */}
        <div className="hidden md:block w-10" />
      </div>

      {/* Menu mobile */}
      <nav
        className={`md:hidden fixed top-20 left-0 w-full shadow-lg z-40 px-6 py-4 space-y-4 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ backgroundColor: COLORS.black }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={handleLinkClick}
            className="block text-white transition-colors duration-200 hover:text-orange-500 text-lg font-semibold"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}