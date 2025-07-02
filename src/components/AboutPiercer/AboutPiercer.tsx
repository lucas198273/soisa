import { Link } from "react-router-dom";

export default function AboutPiercer() {
  return (
    <section className="bg-black border-t-4 border-[#00b4d8] py-16 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Imagem da profissional à esquerda */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/imgsol.png" // Substitua com a imagem real da profissional
            alt="Body Piercer residente"
            className="w-[80%] md:w-[26rem] rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Texto à direita */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#00b4d8] mb-6">
            Profissionalismo e Estilo em Cada Piercing
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Conheça nossa body piercer residente, especialista em transformar estilo e atitude em arte corporal com total segurança e técnica. Experiência, cuidado e personalidade em cada aplicação. Agende seu horário e viva essa transformação com confiança.
          </p>
          <Link
            to="/agendar-piercing"
            className="inline-block bg-[#00b4d8] text-white font-semibold text-lg py-3 px-10 rounded-full shadow-md hover:bg-[#009ac1] hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#00b4d8] focus:ring-offset-2 focus:ring-offset-black"
          >
            Agendar Piercing
          </Link>
        </div>
      </div>
    </section>
  );
}
