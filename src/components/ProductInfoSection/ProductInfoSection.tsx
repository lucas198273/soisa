import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

// Paleta centralizada
const COLORS = {
  orange: "#E87A20",
  orangeLight: "#F59E42",
  blueDark: "#1A2B4C",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#AAAAAA",
};

const TattooStudioInfoSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const mensagemWhatsApp = `Olá! 😊 Gostaria de agendar um horário para tatuagem. Poderia me informar sobre disponibilidade?`;
  const linkWhatsApp = `https://wa.me/5531971705728?text=${encodeURIComponent(mensagemWhatsApp)}`;

  // Dados estruturados (JSON-LD) para o estúdio
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Soisa Tattoo Studio",
    description:
      "Estúdio de tatuagem em Betim com foco em arte, segurança e atendimento personalizado.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Amazonas, 608",
      addressLocality: "Betim",
      addressRegion: "MG",
      postalCode: "32600-000",
      addressCountry: "BR",
    },
    telephone: "+5531971705728",
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00, Sa 09:00-13:00",
    image: "https://soisatattoo.com.br/assets/logo.webp",
  };

  return (
    <>
      {/* SEO com Helmet */}
      <Helmet>
        <title>Estúdio de Tatuagem em Betim - Soisa Tattoo | Segurança e Arte</title>
        <meta
          name="description"
          content="Conheça o Soisa Tattoo Studio em Betim. Atendimento personalizado, biosegurança e arte na pele. Agende sua tatuagem ou piercing agora mesmo!"
        />
        <meta
          name="keywords"
          content="estúdio de tatuagem Betim, tatuagem segura, piercing, biosegurança, Soisa Tattoo"
        />
        <meta property="og:title" content="Estúdio de Tatuagem em Betim - Soisa Tattoo" />
        <meta
          property="og:description"
          content="Arte na pele com segurança e profissionalismo. Venha conhecer nosso estúdio em Betim."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soisatattoo.com.br" />
        <meta property="og:image" content="https://soisatattoo.com.br/assets/og-image.jpg" />
      </Helmet>

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <section
        className="py-16 px-4 bg-black text-white relative overflow-hidden"
        style={{ backgroundColor: COLORS.black }}
      >
        {/* Fundo com gradiente sutil e elementos decorativos */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 20% 50%, ${COLORS.orange}, transparent 70%)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto">
          {/* Título principal com animação */}
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2
              className="text-4xl md:text-5xl font-bold inline-block relative"
              style={{ color: COLORS.white }}
            >
              Sobre Nosso Estúdio
              <span
                className="absolute -bottom-2 left-0 w-full h-1 rounded"
                style={{ backgroundColor: COLORS.orange }}
              />
            </h2>
            <p
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed"
              style={{ color: COLORS.gray }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Cada traço carrega uma história. Atuamos com responsabilidade, higiene e respeito ao seu estilo.
            </p>
          </div>

          {/* Grid de cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Card 1 - Biosegurança */}
            <div
              className="p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-opacity-20"
              style={{
                backgroundColor: "#1a1a2e",
                borderColor: COLORS.blueDark,
                boxShadow: `0 8px 30px rgba(0,0,0,0.5)`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-3xl"
                  style={{ color: COLORS.orange }}
                >
                  🛡️
                </span>
                <h3
                  className="text-2xl font-semibold"
                  style={{ color: COLORS.orange }}
                >
                  Biosegurança
                </h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">
                Utilizamos materiais 100% descartáveis e seguimos rigorosos protocolos
                de esterilização. Nosso estúdio é certificado e preparado para garantir
                total segurança e higiene em todos os procedimentos.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.orange }} />
                <span style={{ color: COLORS.gray }}>Certificado e aprovado</span>
              </div>
            </div>

            {/* Card 2 - Atendimento e Agendamento */}
            <div
              className="p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-opacity-20 flex flex-col"
              style={{
                backgroundColor: "#1a1a2e",
                borderColor: COLORS.blueDark,
                boxShadow: `0 8px 30px rgba(0,0,0,0.5)`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-3xl"
                  style={{ color: COLORS.orange }}
                >
                  📅
                </span>
                <h3
                  className="text-2xl font-semibold"
                  style={{ color: COLORS.orange }}
                >
                  Atendimento Exclusivo
                </h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed flex-1">
                Trabalhamos com horários marcados para garantir exclusividade e atenção
                total a cada cliente. Entre em contato via WhatsApp para tirar dúvidas,
                enviar referências e agendar seu horário.
              </p>
              <div className="mt-6">
                <a
                  href={linkWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
                  style={{
                    backgroundColor: COLORS.orange,
                    color: COLORS.white,
                    boxShadow: `0 4px 14px ${COLORS.orange}50`,
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Fale Conosco
                </a>
                <p className="text-xs mt-2" style={{ color: COLORS.gray }}>
                  * Respondemos em até 2 horas
                </p>
              </div>
            </div>
          </div>

          {/* Chamada final com prova social */}
          <div
            className="mt-12 text-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <p className="text-lg md:text-xl font-bold" style={{ color: COLORS.orange }}>
              ⭐ Arte na pele com profissionalismo e segurança.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <span style={{ color: COLORS.orange }}>✔</span> 5 anos de experiência
              </span>
              <span className="flex items-center gap-1">
                <span style={{ color: COLORS.orange }}>✔</span> +500 clientes atendidos
              </span>
              <span className="flex items-center gap-1">
                <span style={{ color: COLORS.orange }}>✔</span> 100% de satisfação
              </span>
            </div>
            <div className="mt-6">
              <a
                href={linkWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
                style={{
                  backgroundColor: COLORS.orange,
                  color: COLORS.white,
                  boxShadow: `0 8px 25px ${COLORS.orange}60`,
                }}
              >
                Agende sua Tatuagem Agora 🧡
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TattooStudioInfoSection;