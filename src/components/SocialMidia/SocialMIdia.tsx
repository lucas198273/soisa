import React, { useEffect } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

const COLORS = {
  orange: "#E87A20",
  orangeLight: "#F59E42",
  blueDark: "#1A2B4C",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#AAAAAA",
};

const SocialMediaSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ítalo Soisa Tattoo",
    url: "https://soisatattoo.com.br",
    sameAs: [
      "https://www.instagram.com/italosoisatattoo/",
    ],
    telephone: "+5531971705728",
    description: "Acompanhe os trabalhos, agendamentos e novidades do estúdio Soisa Tattoo.",
  };

  return (
    <>
      <Helmet>
        <title>Siga o Soisa Tattoo nas Redes Sociais | Instagram e WhatsApp</title>
        <meta
          name="description"
          content="Acompanhe o trabalho do tatuador Ítalo Soisa no Instagram, agende sua tatuagem via WhatsApp e fique por dentro das novidades do estúdio."
        />
        <meta
          name="keywords"
          content="Instagram tatuagem, tatuador Betim, Soisa Tattoo, agendamento WhatsApp, redes sociais tatuagem"
        />
        <meta property="og:title" content="Soisa Tattoo – Siga nossas redes sociais" />
        <meta
          property="og:description"
          content="Acompanhe o trabalho do Ítalo Soisa e agende sua tatuagem com segurança e arte."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soisatattoo.com.br" />
        <meta property="og:image" content="https://soisatattoo.com.br/assets/logo.webp" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <section
        className="py-16 px-4 bg-black text-white relative overflow-hidden"
        style={{ backgroundColor: COLORS.black }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 80% 20%, ${COLORS.orange}, transparent 60%)`,
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src="/assets/logo.webp"
              alt="Logo do Soisa Tattoo Studio - Ítalo Soisa"
              className="mx-auto mb-6 w-32 h-32 object-cover rounded-full border-4 shadow-xl transition-transform duration-500 hover:scale-110"
              style={{
                borderColor: COLORS.orange,
                boxShadow: `0 0 30px ${COLORS.orange}40`,
              }}
              loading="lazy"
            />
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md"
            style={{
              color: COLORS.orange,
              fontFamily: "'Bangers', cursive",
              letterSpacing: "2px",
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ítalo Soisa Tattoo
          </h2>

          <p
            className="mb-8 text-lg italic max-w-2xl mx-auto"
            style={{ color: COLORS.gray }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Acompanhe nossos trabalhos, agendamentos e novidades nas redes sociais.
          </p>

          {/* Apenas Instagram e WhatsApp */}
          <div
            className="flex flex-wrap justify-center gap-8 mb-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Instagram */}
            <a
              href="https://www.instagram.com/italosoisatattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
              aria-label="Siga-nos no Instagram"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all duration-300 group-hover:shadow-xl"
                style={{
                  backgroundColor: "#1a1a2e",
                  border: `2px solid ${COLORS.blueDark}`,
                  color: COLORS.white,
                }}
              >
                <FaInstagram className="w-8 h-8 transition-colors duration-300 group-hover:text-orange-500" />
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                Instagram
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5531971705728"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
              aria-label="Fale conosco no WhatsApp"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all duration-300 group-hover:shadow-xl"
                style={{
                  backgroundColor: "#1a1a2e",
                  border: `2px solid ${COLORS.blueDark}`,
                  color: COLORS.white,
                }}
              >
                <FaWhatsapp className="w-8 h-8 transition-colors duration-300 group-hover:text-green-500" />
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                WhatsApp
              </span>
            </a>
          </div>

          {/* Call to Action – Agendamento via WhatsApp */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a
              href="https://wa.me/5531971705728?text=Olá! Gostaria de agendar uma tatuagem com o Soisa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
              style={{
                backgroundColor: COLORS.orange,
                color: COLORS.white,
                boxShadow: `0 8px 25px ${COLORS.orange}60`,
              }}
            >
              <FaWhatsapp className="w-6 h-6" />
              Agende sua Tatuagem Agora
            </a>
            <p
              className="text-sm mt-3"
              style={{ color: COLORS.gray }}
            >
              📱 Respondemos em até 2 horas
            </p>
          </div>

          {/* Selo de confiança */}
          <div
            className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-gray-500"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <span className="flex items-center gap-1">
              <span style={{ color: COLORS.orange }}>✓</span> Atendimento personalizado
            </span>
            <span className="flex items-center gap-1">
              <span style={{ color: COLORS.orange }}>✓</span> +500 clientes
            </span>
            <span className="flex items-center gap-1">
              <span style={{ color: COLORS.orange }}>✓</span> Estúdio certificado
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMediaSection;