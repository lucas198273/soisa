import { useState } from "react";
import { toast } from "react-toastify";

export default function AboutTattooArtistSoisa() {
  const [isClicked, setIsClicked] = useState(false);

  const handleWhatsAppClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      const message = encodeURIComponent(
        "Olá! Tenho interesse em agendar uma tatuagem com o Soisa. Pode me ajudar?"
      );
      const whatsappLink = `https://wa.me/5531994340017?text=${message}`;
      window.open(whatsappLink, "_blank");
      toast.info("Mensagem enviada para o WhatsApp!", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => setIsClicked(false), 3000);
    }
  };

  return (
    <section className="bg-black border-t-4 border-[#e84c3d] py-12 px-4 md:px-8 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Imagem do tatuador Soisa */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/imgsoisa.jpg" // Substitua pela imagem real do Soisa
            alt="Tatuador Soisa"
            className="max-w-xs md:max-w-md rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Texto de apresentação */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#e84c3d] mb-5">
            Soisa — Fundador e Tatuador Visionário
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Soisa é mais que um tatuador — é o fundador e a alma do estúdio.
            Com anos de experiência e uma paixão profunda pela arte na pele, ele imprime identidade, técnica e originalidade em cada trabalho.
            Agende com Soisa e viva a experiência de tatuar com quem construiu esse espaço com propósito e arte.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-block bg-[#e84c3d] text-white font-semibold text-base md:text-lg py-2 md:py-3 px-6 md:px-8 rounded-full shadow-md hover:bg-[#5b0cb3] hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6a0dad] focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50"
            disabled={isClicked}
          >
            Agendar via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
