import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeaderProps {
  onCartClick: () => void;
  cartItemCount: number;
}

export default function Header({ onCartClick, cartItemCount }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Inicializa AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm shadow-md h-20 border-b-4 border-[#00b4d8]">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        {/* Botão menu mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-white focus:outline-none focus:ring-2 focus:ring-[#00b4d8] rounded-md p-2 mr-2 md:hidden z-10"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Menu desktop - esquerda */}
        <nav className="hidden md:flex items-center space-x-3 sm:space-x-4 lg:space-x-5 text-white text-xs sm:text-sm lg:text-base font-bold">
          <Link to="/" className="hover:text-[#00b4d8]">Início</Link>
          <Link to="/about" className="hover:text-[#00b4d8]">Sobre</Link>
          <Link to="/products" className="hover:text-[#00b4d8]">Tatuagens</Link>
        </nav>

        {/* Logo central com AOS */}
        <div
          className="flex-shrink-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 md:static md:mx-auto md:translate-x-0 md:translate-y-0"
          data-aos="fade-up"
        >
          <Link to="/" className="flex items-center justify-center">
            <img
              src="/assets/logo.webp"
              alt="Tattoo Studio"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Menu desktop - direita */}
        <nav className="hidden md:flex items-center space-x-3 sm:space-x-4 lg:space-x-5 text-white text-xs sm:text-sm lg:text-base font-bold">
          <Link to="/afiliados" className="hover:text-[#00b4d8]">Afiliados</Link>
          <Link to="/politicas" className="hover:text-[#00b4d8]">Políticas</Link>
          <Link to="/galeria" className="hover:text-[#00b4d8]">Galeria</Link>
        </nav>

        {/* Carrinho */}
        <button
          onClick={onCartClick}
          className="relative focus:outline-none focus:ring-2 focus:ring-[#00b4d8] rounded-md p-2 z-10"
          aria-label={`Ver carrinho com ${cartItemCount} itens`}
        >
          <svg
            className="w-5 sm:w-6 h-5 sm:h-6 text-white hover:text-[#00b4d8] transition-colors duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16l-2 10H6L4 6zm4 12h8v2H8v-2zm-4-2h16v2H4v-2zm0-8v2h16V8H4z" />
          </svg>
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 bg-[#00b4d8] text-white text-xs rounded-full h-4 sm:h-5 w-4 sm:w-5 flex items-center justify-center -mt-1 -mr-1">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      <nav
        className={`md:hidden fixed top-20 left-0 w-full bg-black backdrop-blur-sm shadow-md z-40 px-6 py-4 space-y-4 transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {[
          { to: "/", label: "Início" },
          { to: "/about", label: "Sobre" },
          { to: "/products", label: "Tatuagens e Piercings" },
          { to: "/afiliados", label: "Afiliados" },
          { to: "/politicas", label: "Políticas" },
          { to: "/galeria", label: "Galeria" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setMenuOpen(false)}
            className="block text-white hover:text-[#00b4d8] transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}