// src/pages/GaleriaPage.tsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../components/SEO/SEO";
import GaleriaSoisa from "../components/GaleriaSoisa/GaleriaSoisa";

// Paleta centralizada
const COLORS = {
  orange: "#E87A20",
  orangeLight: "#F59E42",
  blueDark: "#1A2B4C",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#AAAAAA",
};

const GaleriaPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Dados estruturados (JSON-LD) para a galeria
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Galeria de Artes Underground - Soisa Tattoo",
    description:
      "Explore a galeria underground do artista Soisa em Betim, com pinturas que misturam rebeldia, criatividade e arte urbana.",
    url: "https://estudiosoisa.online/galeria",
    image: "https://estudiosoisa.online/assets/og-galeria.jpg",
    author: {
      "@type": "Person",
      name: "Ítalo Soisa",
    },
    about: {
      "@type": "Thing",
      name: "Arte Underground",
    },
  };

  return (
    <>
      <SEO
        title="Galeria de Artes Underground | Soisa Tattoo Studio"
        description="Explore a galeria underground do artista Soisa em Betim, com pinturas que misturam rebeldia, criatividade e arte urbana em uma pegada alternativa."
        keywords="estúdio de tatuagem em Betim, galeria de arte Betim, pinturas underground, arte urbana, artista Soisa, tatuagem e arte"
        url="https://estudiosoisa.online/galeria"
        image="https://estudiosoisa.online/assets/og-galeria.jpg"
        type="website"
        author="Ítalo Soisa"
      />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <main className="min-h-screen bg-black text-white px-4" lang="pt-BR">
        <section className="container mx-auto py-12 sm:py-16 md:py-20 lg:py-24">
          {/* Título com animação */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center"
          >
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: COLORS.orange }}
            >
              🎨 Galeria de Artes
            </h1>
            <div
              className="w-20 h-1 mx-auto mb-6 rounded-full"
              style={{ backgroundColor: COLORS.orange }}
            />
          </div>

          {/* Descrição com animação */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-3xl mx-auto text-center mb-10"
          >
            <p className="text-base md:text-lg leading-relaxed" style={{ color: COLORS.gray }}>
              Mergulhe no universo underground das pinturas originais do artista Soisa,
              direto de Betim. Com traços crus e uma energia rebelde, essas obras trazem
              a essência da arte urbana, desafiando padrões e inspirando mentes inquietas.
            </p>
          </div>

          {/* Selos de confiança (ou badges) */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span
              className="px-4 py-2 rounded-full text-sm font-semibold bg-opacity-20 border"
              style={{
                backgroundColor: `${COLORS.blueDark}40`,
                borderColor: COLORS.blueDark,
                color: COLORS.white,
              }}
            >
              🖌️ Obras originais
            </span>
            <span
              className="px-4 py-2 rounded-full text-sm font-semibold bg-opacity-20 border"
              style={{
                backgroundColor: `${COLORS.blueDark}40`,
                borderColor: COLORS.blueDark,
                color: COLORS.white,
              }}
            >
              🎭 Estilo underground
            </span>
            <span
              className="px-4 py-2 rounded-full text-sm font-semibold bg-opacity-20 border"
              style={{
                backgroundColor: `${COLORS.blueDark}40`,
                borderColor: COLORS.blueDark,
                color: COLORS.white,
              }}
            >
              📍 Betim - MG
            </span>
          </div>

          {/* Componente da galeria com animação */}
          <div data-aos="fade-up" data-aos-delay="400">
            <GaleriaSoisa />
          </div>

          {/* Call to Action no final da página */}
          <div
            className="mt-16 text-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <p className="text-sm md:text-base mb-4" style={{ color: COLORS.gray }}>
              Gostou do estilo? Conheça nosso trabalho em tatuagens.
            </p>
            <a
              href="/products"
              className="inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
              style={{
                backgroundColor: COLORS.orange,
                color: COLORS.white,
                boxShadow: `0 4px 15px ${COLORS.orange}60`,
              }}
            >
              Ver Tatuagens →
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default GaleriaPage;