import  { useEffect } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Paleta centralizada
const COLORS = {
  orange: "#E87A20",
  orangeLight: "#F59E42",
  blueDark: "#1A2B4C",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#AAAAAA",
};

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <footer
      className="bg-black text-white py-8 px-4 border-t-4"
      style={{
        backgroundColor: COLORS.black,
        borderTopColor: COLORS.blueDark,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Nome do estúdio */}
        <div
          className="flex items-center gap-3"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <img
            src="/assets/logo.webp"
            alt="Soisa Tattoo Studio"
            className="w-10 h-10 object-cover rounded-full border-2"
            style={{ borderColor: COLORS.orange }}
            loading="lazy"
          />
          <h2
            className="text-xl font-bold drop-shadow-md"
            style={{ color: COLORS.orange }}
          >
            Ítalo Soisa Tattoo
          </h2>
        </div>

        {/* Links úteis (navegação) */}
        <nav
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            to="/"
            className="hover:text-orange-500 transition-colors duration-300"
            style={{ color: COLORS.gray }}
          >
            Início
          </Link>
          <Link
            to="/about"
            className="hover:text-orange-500 transition-colors duration-300"
            style={{ color: COLORS.gray }}
          >
            Sobre
          </Link>
          <Link
            to="/galeria"
            className="hover:text-orange-500 transition-colors duration-300"
            style={{ color: COLORS.gray }}
          >
            Galeria
          </Link>
          <Link
            to="/contact"
            className="hover:text-orange-500 transition-colors duration-300"
            style={{ color: COLORS.gray }}
          >
            Contato
          </Link>
        </nav>

        {/* Redes sociais (apenas Instagram e WhatsApp) */}
        <div
          className="flex items-center gap-4 text-2xl"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <a
            href="https://www.instagram.com/italosoisatattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110 hover:shadow-lg rounded-full p-2"
            style={{
              color: COLORS.gray,
              backgroundColor: "transparent",
            }}
            aria-label="Siga-nos no Instagram"
          >
            <FaInstagram className="hover:text-orange-500 transition-colors" />
          </a>
          <a
            href="https://wa.me/5531971705728"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110 hover:shadow-lg rounded-full p-2"
            style={{
              color: COLORS.gray,
              backgroundColor: "transparent",
            }}
            aria-label="Fale conosco no WhatsApp"
          >
            <FaWhatsapp className="hover:text-green-500 transition-colors" />
          </a>
        </div>
      </div>

      {/* Linha divisória e copyright */}
      <div
        className="mt-8 pt-6 border-t border-gray-800 text-center text-sm"
        style={{ color: COLORS.gray }}
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span style={{ color: COLORS.orange }}>Ítalo Soisa Tattoo</span>. 
          Todos os direitos reservados.
        </p>
        <p className="mt-1 text-xs" style={{ color: "#666" }}>
          Desenvolvido com 🧡 e profissionalismo.
        </p>
      </div>
    </footer>
  );
}