"use client";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    data: "",
    localTatuagem: "",
    idade: "",
    tamanhoEstimado: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de agendar...\nNome: ${form.nome}\n...`;
    window.open(
      `https://wa.me/5531971705728?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setIsOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Soisa Tattoo Studio | Arte e Tatuagens em Betim</title>
        <meta
          name="description"
          content="Tatuagens feitas com propósito, arte e personalidade em Betim - Soisa Tattoo Studio. Agende sua sessão conosco!"
        />
        <meta
          name="keywords"
          content="tatuagem, piercing, estúdio de tatuagem, Betim, Soisa Tattoo, arte corporal"
        />
        <meta property="og:title" content="Soisa Tattoo Studio | Arte e Tatuagens em Betim" />
        <meta
          property="og:description"
          content="Tatuagens feitas com propósito, arte e personalidade em Betim - Soisa Tattoo Studio. Agende sua sessão conosco!"
        />
      </Helmet>

      <section className="relative w-full bg-black text-white flex items-center justify-center px- py-48 md:py-12 border-b-4 border-[#00b4d8]">
        <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl items-center gap-8">
          {/* Texto e call-to-action */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Dê vida à sua ideia <br />
              com traços precisos
            </h1>
            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              Tatuagens feitas com propósito, arte e personalidade. Agende agora mesmo.
            </p>
            {/* Cidade e endereço adicionados */}
            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-semibold">
              Localizado em Betim - MG <br />
              Av. Amazonas, 608
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-2 md:px-8 md:py-3 bg-[#00b4d8] hover:bg-[#009ac1] transition-shadow shadow-md text-white font-semibold rounded-md"
            >
              Agendar Sessão
            </button>
          </div>

          {/* Imagem do artista */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/businesimg/img-es-1.webp"
              alt="Artista tatuador"
              className="w-[50%] max-w-lg rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
          >
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative animate-[scale_0.3s_ease-in-out]">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
                aria-label="Fechar"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-4 text-black text-center">
                Agendar Sessão
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                {[
                  "nome",
                  "idade",
                  "telefone",
                  "data",
                  "localTatuagem",
                  "tamanhoEstimado",
                ].map((name) => (
                  <input
                    key={name}
                    type={name === "data" ? "date" : name === "idade" ? "number" : "tel"}
                    name={name}
                    value={(form as any)[name]}
                    onChange={handleChange}
                    required
                    placeholder={{
                      nome: "Seu nome completo",
                      idade: "Sua idade",
                      telefone: "Telefone para contato",
                      data: "",
                      localTatuagem: "Local a ser tatuado",
                      tamanhoEstimado: "Tamanho estimado",
                    }[name]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
                  />
                ))}
                <button
                  type="submit"
                  className="w-full py-3 bg-[#00b4d8] hover:bg-[#009ac1] transition-shadow shadow-md rounded-lg text-white font-semibold"
                >
                  Enviar no WhatsApp
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
