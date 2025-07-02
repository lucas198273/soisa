import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArtistaPreview() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="flex flex-col items-center py-8 px-4 bg-[#0a0a0a]">
      <div
        className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 w-full max-w-6xl"
        data-aos="fade-up"
      >
        {/* Card Tatuador */}
        <div className="bg-black bg-opacity-60 rounded-xl shadow-lg p-4 md:p-5 w-full md:flex-1 hover:scale-[1.02] transition-transform duration-300 min-h-[300px]">
          <img
            src="/assets/imgsoisa.jpg"
            alt="Tatuador"
            className="w-full h-40 md:h-48 object-contain rounded-md mb-3 md:mb-4 bg-black"
          />
          <div className="text-white px-2 md:px-0">
            <h3 className="text-2xl font-bold mb-2 text-[#00b4d8]">Tatuador</h3>
            <p className="text-gray-300 mb-4">
              Mais de 10 anos criando tatuagens únicas. Conheça o estilo,
              inspirações e trajetória deste artista.
            </p>
          </div>
        </div>

        {/* Card Piercer */}
        <div className="bg-black bg-opacity-60 rounded-xl shadow-lg p-4 md:p-5 w-full md:flex-1 hover:scale-[1.02] transition-transform duration-300 min-h-[300px]">
          <img
            src="/assets/imgsol.png"
            alt="Body Piercer"
            className="w-full h-40 md:h-48 object-contain rounded-md mb-3 md:mb-4 bg-black"
          />
          <div className="text-white px-2 md:px-0">
            <h3 className="text-2xl font-bold mb-2 text-[#00b4d8]">Body Piercer</h3>
            <p className="text-gray-300 mb-4">
              Especialista em perfurações corporais com segurança e estilo.
              Conheça o profissional e seu trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}