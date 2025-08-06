import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const SocialMediaSection: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Importa a fonte graffiti "Bangers" de forma segura */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <section className="py-12 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center no-font-boost">
          <img
            src="/assets/logo.webp"
            alt="Studio Tattoo"
            className="mx-auto mb-6 w-38 h-38 object-cover rounded-full border-4 border-[#00b4d8] shadow-xl"
          />

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00b4d8] drop-shadow-md graffiti-font">
            Ítalo Soisa Tattoo
          </h2>

          <p className="mb-6 text-lg italic text-gray-300">
            Acompanhe nossos trabalhos, agendamentos e novidades nas redes sociais.
          </p>

          <div className="flex justify-center gap-8 flex-wrap">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/italosoisa1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center transition-transform hover:scale-110 text-[#ff6f00] hover:text-[#00b4d8]"
            >
              <FaInstagram className="w-10 h-10 mb-2" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMediaSection;
