import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TattooStudioInfoSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const mensagemWhatsApp = `Olá! 😊 Gostaria de agendar um horário para tatuagem. Poderia me informar sobre disponibilidade?`;
  const linkWhatsApp = `https://wa.me/5531971705728?text=${encodeURIComponent(mensagemWhatsApp)}`;

  return (
    <section className="py-16 px-4 bg-[#0a0a1a] text-white" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#00BFFF] drop-shadow-md">
          Sobre Nosso Estúdio
        </h2>

        <p className="text-lg md:text-xl mb-6 text-gray-300 italic leading-relaxed">
          No nosso estúdio, cada traço carrega uma história. Atuamos com responsabilidade, higiene e respeito ao seu estilo. Valorizamos a arte, a segurança e a sua experiência do início ao fim.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8" data-aos="fade-up" data-aos-delay="200">
          <div className="p-6 rounded-lg shadow-lg border border-[#00BFFF] bg-[#1a1a2e]">
            <h3 className="text-2xl font-semibold mb-4 text-[#00BFFF]">Biosegurança</h3>
            <p className="text-base text-gray-300">
              Utilizamos materiais 100% descartáveis e seguimos rigorosos protocolos de esterilização. Nosso estúdio é certificado e preparado para garantir total segurança e higiene em todos os procedimentos.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg border border-[#00BFFF] bg-[#1a1a2e]">
            <h3 className="text-2xl font-semibold mb-4 text-[#00BFFF]">Atendimento e Agendamento</h3>
            <p className="text-base text-gray-300">
              Trabalhamos com horários marcados para garantir exclusividade e atenção a cada cliente. Entre em contato via WhatsApp para tirar dúvidas, enviar referências e agendar seu horário.
            </p>

            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-6 py-3 rounded-lg font-semibold transition-colors bg-[#00BFFF] text-[#0a0a1a] hover:bg-[#009cd4]"
            >
              Fale Conosco
            </a>
          </div>
        </div>

        <p className="text-lg md:text-xl font-bold text-[#00BFFF]" data-aos="fade-up" data-aos-delay="400">
          Arte na pele com profissionalismo e segurança.
        </p>
      </div>
    </section>
  );
};

export default TattooStudioInfoSection;
