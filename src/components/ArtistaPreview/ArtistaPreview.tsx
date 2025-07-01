import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export default function ArtistaPreview() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const goToAboutPage = () => {
    navigate("/sobre");
  };

  return (
    <section className="flex flex-col items-center py-12 px-4 bg-[#0a0a0a]">
      <div
        className="flex flex-wrap justify-center gap-8 max-w-6xl w-full"
        data-aos="fade-up"
      >
        {/* Card do Tatuador */}
        <div className="bg-black bg-opacity-60 rounded-xl shadow-lg max-w-sm w-full p-4 hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/artista/tatuador.png"
            alt="Tatuador"
            className="w-full h-52 object-cover rounded-md mb-4 bg-black"
          />
          <div className="flex flex-col items-start text-white">
            <h3 className="text-2xl font-bold mb-2 text-[#00bfff]">Tatuador</h3>
            <p className="text-gray-300 mb-4">
              Mais de 10 anos criando tatuagens únicas. Conheça o estilo,
              inspirações e trajetória deste artista.
            </p>
            <button
              onClick={goToAboutPage}
              className="bg-[#00bfff] text-black px-5 py-2 rounded-md hover:bg-[#009acd] transition duration-200"
            >
              Saiba mais
            </button>
          </div>
        </div>

        {/* Card do Body Piercer */}
        <div className="bg-black bg-opacity-60 rounded-xl shadow-lg max-w-sm w-full p-4 hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/artista/piercer.png"
            alt="Body Piercer"
            className="w-full h-52 object-cover rounded-md mb-4 bg-black"
          />
          <div className="flex flex-col items-start text-white">
            <h3 className="text-2xl font-bold mb-2 text-[#00bfff]">
              Body Piercer
            </h3>
            <p className="text-gray-300 mb-4">
              Especialista em perfurações corporais com segurança e estilo.
              Conheça o profissional e seu trabalho.
            </p>
            <button
              onClick={goToAboutPage}
              className="bg-[#00bfff] text-black px-5 py-2 rounded-md hover:bg-[#009acd] transition duration-200"
            >
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
