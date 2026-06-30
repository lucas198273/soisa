import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

// Paleta de cores centralizada (mesma do Header e Hero)
const COLORS = {
  orange: "#E87A20",
  orangeLight: "#F59E42",
  blueDark: "#1A2B4C",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#888888",
};

export default function AboutTattooArtistSoisa() {
  const [isClicked, setIsClicked] = useState(false);

  // Inicializa AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleWhatsAppClick = useCallback(() => {
    if (isClicked) return;

    setIsClicked(true);
    const message = encodeURIComponent(
      "Olá! Tenho interesse em agendar uma tatuagem com o Soisa. Pode me ajudar?"
    );
    const whatsappLink = `https://wa.me/5531971705728?text=${message}`;
    window.open(whatsappLink, "_blank");

    toast.info("Mensagem enviada para o WhatsApp!", {
      position: "top-right",
      autoClose: 3000,
    });

    setTimeout(() => setIsClicked(false), 3000);
  }, [isClicked]);

  return (
    <section
      className="bg-black border-t-4 py-12 px-4 md:px-8 text-white"
      style={{ borderTopColor: COLORS.blueDark }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Imagem do tatuador Soisa */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src="/assets/imgsoisa.webp"
            alt="Soisa, tatuador profissional e fundador do Soisa Tattoo Studio em Betim"
            className="max-w-xs md:max-w-md rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
            style={{
              boxShadow: `0 20px 40px -10px ${COLORS.orange}30`,
            }}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Texto de apresentação */}
        <div
          className="w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-5"
            style={{ color: COLORS.orange }}
          >
            Soisa — Fundador e Tatuador Visionário
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-6"
            style={{ color: COLORS.gray }}
            data-aos="fade-left"
            data-aos-delay="400"
          >
            Soisa é mais que um tatuador — é o fundador e a alma do estúdio.
            Com anos de experiência e uma paixão profunda pela arte na pele,
            ele imprime identidade, técnica e originalidade em cada trabalho.
            Agende com Soisa e viva a experiência de tatuar com quem construiu
            esse espaço com propósito e arte.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-block font-semibold text-base md:text-lg py-2 md:py-3 px-6 md:px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: COLORS.orange,
              color: COLORS.white,
              boxShadow: `0 4px 14px ${COLORS.orange}40`,
            }}
            disabled={isClicked}
            aria-label={
              isClicked
                ? "Aguardando, mensagem já enviada"
                : "Agendar tatuagem com Soisa via WhatsApp"
            }
          >
            {isClicked ? "Enviando..." : "Agendar via WhatsApp"}
          </button>
        </div>
      </div>
    </section>
  );
}