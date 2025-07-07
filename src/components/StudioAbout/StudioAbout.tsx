import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const StudioAbout: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-black text-dodger-blue min-h-screen">
      <div className="h-24" /> {/* Espaço superior para header fixo */}

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        {/* Texto */}
        <div className="md:w-1/2 text-left space-y-6" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Sobre o Estúdio
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-white">
            Nosso estúdio celebra a arte em todas as suas formas, com uma forte
            presença no mundo do grafite, tatuagem e piercing. Inspirados pelas
            ruas vibrantes, trazemos a energia do grafite para designs únicos
            que contam histórias. Nossas tatuagens são criações personalizadas,
            feitas com técnica e paixão, enquanto os piercings oferecem estilo
            e segurança.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-white">
            Localizados onde a arte urbana encontra a tradição, usamos materiais
            de alta qualidade e técnicas modernas. Venha conhecer nosso espaço
            ou agende uma visita para fazer parte dessa experiência!
          </p>
        </div>

        {/* Imagem */}
        <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
          <img
            src="/assets/grafit.webp"
            alt="Estúdio com grafite colorido"
            className="w-full max-w-md md:max-w-2xl rounded-xl shadow-xl border-4 border-dodger-blue object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default StudioAbout;
