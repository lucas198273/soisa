// src/pages/GaleriaPage.tsx
import React from "react";
import { Helmet } from "react-helmet-async"; // SEO com React 18
import GaleriaSoisa from "../components/GaleriaSoisa/GaleriaSoisa";

const GaleriaPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white px-4" lang="pt-BR">
      <Helmet>
        <title>Galeria de Artes Underground | Estúdio de Tatuagem em Betim</title>

        <meta
          name="description"
          content="Explore a galeria underground do artista Soisa em Betim, com pinturas que misturam rebeldia, criatividade e arte urbana em uma pegada alternativa."
        />
        <meta
          name="keywords"
          content="estúdio de tatuagem em Betim, galeria de arte Betim, pinturas underground, arte urbana, artista Soisa"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Soisa" />

        {/* SEO Social - Open Graph */}
        <meta property="og:title" content="Galeria de Artes Underground em Betim - Soisa" />
        <meta
          property="og:description"
          content="Descubra as obras originais do artista Soisa em Betim. Pinturas com um toque underground que desafiam o convencional."
        />
        <meta property="og:image" content="https://seusite.com/images/capa-galeria.jpg" />
        <meta property="og:url" content="https://seusite.com/galeria" />
        <meta property="og:type" content="website" />

        {/* Canonical e responsividade */}
        <link rel="canonical" href="https://seusite.com/galeria" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Compatibilidade de ajuste de texto */}
        <style>{`
          html {
            -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
          }
        `}</style>
      </Helmet>

      <section className="container mx-auto py-12 sm:py-16 md:py-20 lg:py-24">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-400 drop-shadow" itemProp="headline">
          Galeria de Artes
        </h1>
        <p className="text-center text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
          Mergulhe no universo underground das pinturas originais do artista Soisa, direto de Betim. Com traços crus e uma energia rebelde, essas obras trazem a essência da arte urbana, desafiando padrões e inspirando mentes inquietas.
        </p>
        <GaleriaSoisa />
      </section>
    </main>
  );
};

export default GaleriaPage;
