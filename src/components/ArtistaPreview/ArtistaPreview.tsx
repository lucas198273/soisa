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
            src="/assets/bz/image.webp"
            alt="Tatuador"
            className="w-full h-40 md:h-48 object-contain rounded-md mb-3 md:mb-4 bg-black"
          />
          <div className="text-white px-2 md:px-0">
            <h3 className="text-2xl font-bold mb-2 text-[#00b4d8]">Tatuador BZ</h3>
            <p className="text-gray-300 mb-4">
              Descrição
            </p>
          </div>
        </div>

 {/* Card Tatuador */}
           <div className="bg-black bg-opacity-60 rounded-xl shadow-lg p-4 md:p-5 w-full md:flex-1 hover:scale-[1.02] transition-transform duration-300 min-h-[300px]">
          <img
            src="/assets/imgsoisa.webp"
            alt="Tatuador"
            className="w-full h-40 md:h-48 object-contain rounded-md mb-3 md:mb-4 bg-black"
          />
          <div className="text-white px-2 md:px-0">
            <h3 className="text-2xl font-bold mb-2 text-[#00b4d8]">Tatuador Soisa</h3>
            <p className="text-gray-300 mb-4">
            Sou Ítalo, mais conhecido como Soisa.
Com 20 anos de experiência na tatuagem, atuo com especialidade em lettering, tattoos coloridas, blackwork, preto e sombra e newschool. Em 2019, tive trabalhos premiados nas categorias lettering e newschool, reconhecendo meu compromisso com a técnica e a criatividade.

Prezando sempre por respeito, dedicação e um atendimento personalizado, meu objetivo é transformar cada tatuagem em uma experiência única e marcante para quem confia no meu trabalho.
            </p>
          </div>
        </div> 

        {/* Card Piercer */}
        <div className="bg-black bg-opacity-60 rounded-xl shadow-lg p-4 md:p-5 w-full md:flex-1 hover:scale-[1.02] transition-transform duration-300 min-h-[300px]">
          <img
            src="/assets/imgsol.webp"
            alt="Body Piercer"
            className="w-full h-40 md:h-48 object-contain rounded-md mb-3 md:mb-4 bg-black"
          />
          <div className="text-white px-2 md:px-0">
            <h3 className="text-2xl font-bold mb-2 text-[#00b4d8]">Body Piercer</h3>
            <p className="text-gray-300 mb-4">
              Me chamo Suellem, mas sou conhecida como Sol.
Atuo no ramo das perfurações há cerca de 8 anos, com experiência em todos os tipos – das mais básicas às íntimas. Minha especialidade, e também a mais procurada pelos clientes, é o microdermal, conhecido pela praticidade e resultado impecável.

O que mais me encanta no meu trabalho é ver o brilho no olhar e o sorriso de quem realiza o sonho de aplicar aquela joia tão desejada. Valorizo a autoestima de cada pessoa e procuro sempre oferecer um atendimento personalizado, acolhendo mulheres, homens e crianças com cuidado, respeito e atenção a cada detalhe.

Meu compromisso é proporcionar uma experiência única e segura em cada perfuração.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}