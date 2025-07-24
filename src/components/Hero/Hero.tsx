"use client";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    tipoServico: "",
    data: "",
    hora: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de agendar uma sessão:\n
Nome: ${form.nome}\n
Telefone: ${form.telefone}\n
Tipo de serviço: ${form.tipoServico}\n
Data: ${form.data}\n
Hora: ${form.hora}`;

    window.open(`https://wa.me/5531971705728?text=${encodeURIComponent(msg)}`, "_blank");
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
        <meta name="keywords" content="tatuagem, piercing, estúdio de tatuagem, Betim, Soisa Tattoo, arte corporal" />
        <meta property="og:title" content="Soisa Tattoo Studio | Arte e Tatuagens em Betim" />
        <meta
          property="og:description"
          content="Tatuagens feitas com propósito, arte e personalidade em Betim - Soisa Tattoo Studio. Agende sua sessão conosco!"
        />
      </Helmet>

      <section className="relative w-full bg-black text-white flex items-center justify-center px-4 py-48 md:py-12 border-b-4 border-[#00b4d8]">
        <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl items-center gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Dê vida à sua ideia <br />
              com traços precisos
            </h1>
            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              Tatuagens feitas com propósito, arte e personalidade. Agende agora mesmo.
            </p>
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
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative animate-[scale_0.3s_ease-in-out]">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
                aria-label="Fechar formulário"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-4 text-black text-center">Agendar Sessão</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-gray-700 font-semibold mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-gray-700 font-semibold mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="tipoServico" className="block text-gray-700 font-semibold mb-1">
                    Tipo de serviço
                  </label>
                  <select
                    id="tipoServico"
                    name="tipoServico"
                    value={form.tipoServico}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    aria-label="Selecione o tipo de serviço"
                  >
                    <option value="">Selecione</option>
                    <option value="Tatuagem">Tatuagem</option>
                    <option value="Piercing">Piercing</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="data" className="block text-gray-700 font-semibold mb-1">
                    Data
                  </label>
                  <input
                    type="date"
                    id="data"
                    name="data"
                    value={form.data}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>

                <div>
                  <label htmlFor="hora" className="block text-gray-700 font-semibold mb-1">
                    Hora
                  </label>
                  <input
                    type="time"
                    id="hora"
                    name="hora"
                    value={form.hora}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>

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
