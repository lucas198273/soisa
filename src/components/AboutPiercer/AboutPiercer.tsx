import { useState } from "react"; // Adicionado para controlar o clique, se necessário
import { toast } from "react-toastify"; // Opcional, para feedback

export default function AboutPiercer() {
  const [isClicked, setIsClicked] = useState(false); // Estado para evitar múltiplos cliques

  const handleWhatsAppClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      const message = encodeURIComponent(
        "Olá! Tenho interesse em agendar um piercing com a body piercer. Pode me ajudar?"
      );
      const whatsappLink = `https://wa.me/5531994340017?text=${message}`; // Substitua pelo número real
      window.open(whatsappLink, "_blank");
      toast.info("Mensagem enviada para o WhatsApp!", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => setIsClicked(false), 3000); // Reativa após 3s
    }
  };

  return (
    <section className="bg-black border-t-4 border-[#00b4d8] py-12 px-4 md:px-8 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Imagem da profissional à esquerda */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/imgsol.png"
            alt="Body Piercer residente"
            className="max-w-xs md:max-w-md rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Texto à direita */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#00b4d8] mb-5">
            Profissionalismo e Estilo em Cada Piercing
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Conheça nossa body piercer residente, especialista em transformar estilo e atitude em arte corporal com total segurança e técnica. Experiência, cuidado e personalidade em cada aplicação. Agende seu horário e viva essa transformação com confiança.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-block bg-[#00b4d8] text-white font-semibold text-base md:text-lg py-2 md:py-3 px-6 md:px-8 rounded-full shadow-md hover:bg-[#009ac1] hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00b4d8] focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50"
            disabled={isClicked}
          >
            Agendar via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}