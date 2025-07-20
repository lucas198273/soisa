import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { quadros } from "../../../src/data/quadros";

export default function GaleriaSoisa() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="relative mt-9 py-16 bg-black text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#0f172a] to-black" />

      <div className="relative max-w-7xl mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-10 text-center text-blue-400 drop-shadow"
          data-aos="fade-up"
        >
          Galeria de Pinturas
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {quadros.map((quadro, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 bg-[#1e293b]"
              style={{ maxWidth: "220px" }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={quadro.imagem}
                alt={quadro.nome}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
