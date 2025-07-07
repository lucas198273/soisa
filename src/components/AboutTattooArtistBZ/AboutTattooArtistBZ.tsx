import { useState } from "react";
import { toast } from "react-toastify";

export default function AboutTattooArtistBZ() {
  const [isClicked, setIsClicked] = useState(false);

  const handleWhatsAppClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      const message = encodeURIComponent(
        "Olá! Tenho interesse em agendar uma tatuagem com o tatuador BZ. Pode me ajudar?"
      );
      const whatsappLink = `https://wa.me/5531971393567?text=${message}`;
      window.open(whatsappLink, "_blank");
      toast.info("Mensagem enviada para o WhatsApp!", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => setIsClicked(false), 3000);
    }
  };

  return (
    <section className="bg-black border-t-4  border-[#6a0dad] py-12 px-4 md:px-8 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Imagem do tatuador */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/bz/image.webp" // Altere para a imagem real do BZ
            alt="Tatuador BZ"
            className="max-w-xs md:max-w-md rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Texto de apresentação */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#6a0dad] mb-5">
            BZ: Tatuagens com Personalidade e Técnica
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Conheça o tatuador BZ, referência em traços marcantes e estilo único.
            Cada arte é criada com atenção aos detalhes, técnica apurada e um toque autoral que transforma ideias em pele.
            Agende sua sessão e eternize sua história com autenticidade.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-block bg-[#6a0dad] text-white font-semibold text-base md:text-lg py-2 md:py-3 px-6 md:px-8 rounded-full shadow-md hover:bg-[#d43c2d] hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#e84c3d] focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50"
            disabled={isClicked}
          >
            Agendar via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
