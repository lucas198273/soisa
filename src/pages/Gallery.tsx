// src/pages/GaleriaPage.tsx
import React from "react";
import { Helmet } from "react-helmet-async"; // Usando react-helmet-async para React 18
import GaleriaSoisa from "../components/GaleriaSoisa/GaleriaSoisa";

const GaleriaPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white px-4" lang="pt-BR">
      <Helmet>
        <title>Galeria de Artes Underground | Estúdio de Tatuagem em Betim - {new Date().toLocaleDateString()}</title>

        <meta
          name="description"
          content="Explore a galeria underground de pinturas únicas do artista Soisa, com obras originais que misturam rebeldia e criatividade em uma pegada urbana e alternativa."
        />
        <meta name="keywords" content="galeria de arte, pinturas underground, artista Soisa, arte urbana, arte alternativa" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Soisa" />
        <meta property="og:title" content="Galeria de Artes Underground - Soisa" />
        <meta property="og:description" content="Descubra as pinturas originais do artista Soisa, com um toque underground que desafia o convencional." />
        <meta property="og:image" content="/images/capa-galeria.jpg" /> {/* Substitua por URL real */}
        <meta property="og:url" content="https://seusite.com/galeria" /> {/* Substitua pelo domínio real */}
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://seusite.com/galeria" /> {/* Melhora SEO com URL canônica */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* Responsividade */}
      </Helmet>

      <section className="container mx-auto py-12 sm:py-16 md:py-20 lg:py-24">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-400 drop-shadow" itemProp="headline">
          Galeria de Artes
        </h1>
        <p className="text-center text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
          Mergulhe no universo underground das pinturas originais do artista Soisa. Com traços crus e uma energia rebelde, essas obras trazem a essência da arte urbana, desafiando padrões e inspirando mentes inquietas. Explore cada quadro e sinta a vibe alternativa que pulsa em cada pincelada.
        </p>
        <GaleriaSoisa />
      </section>
    </main>
  );
};

export default GaleriaPage;