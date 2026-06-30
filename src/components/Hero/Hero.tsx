"use client";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

// Paleta de cores (usada apenas para estilos inline válidos)
const COLORS = {
  orange: "#E87A20",
  orangeLight: "#F59E42",
  blueDark: "#1A2B4C",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#888888",
};

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    tipoServico: "",
    data: "",
    hora: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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

    window.open(
      `https://wa.me/5531971705728?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setIsOpen(false);
    setForm({ nome: "", telefone: "", tipoServico: "", data: "", hora: "" });
  };

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <Helmet>
        <title>Soisa Tattoo Studio | Arte e Tatuagens em Betim - Agende sua Sessão</title>
        <meta
          name="description"
          content="Soisa Tattoo Studio em Betim - Tatuagens com propósito, arte e personalidade. Agende sua sessão de tatuagem ou piercing. Localizado na Av. Amazonas nº608."
        />
        <meta
          name="keywords"
          content="tatuagem, piercing, estúdio de tatuagem, Betim, Soisa Tattoo, arte corporal, tatuador profissional, agendamento"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Soisa Tattoo Studio | Arte e Tatuagens em Betim" />
        <meta
          property="og:description"
          content="Tatuagens feitas com propósito, arte e personalidade. Estúdio em Betim - Agende sua sessão agora!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soisatattoo.com.br" />
        <meta property="og:image" content="https://soisatattoo.com.br/assets/logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Soisa Tattoo Studio",
            image: "https://soisatattoo.com.br/assets/logo.webp",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Av. Amazonas, 608",
              addressLocality: "Betim",
              addressRegion: "MG",
              postalCode: "32600-000",
              addressCountry: "BR",
            },
            telephone: "+5531971705728",
            openingHours: "Mo-Fr 09:00-18:00",
            priceRange: "$$",
            description:
              "Estúdio de tatuagem e piercing em Betim, com atendimento personalizado e arte de qualidade.",
          })}
        </script>
      </Helmet>

      <section
        className="relative w-full bg-black text-white flex items-center justify-center px-4 py-48 md:py-12 border-b-4"
        style={{ borderBottomColor: COLORS.blueDark }}
      >
        <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl items-center gap-8">
          {/* Texto */}
          <div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Dê vida à sua ideia <br />
              com traços precisos
            </h1>
            <p
              className="text-base md:text-xl leading-relaxed"
              style={{ color: COLORS.gray }}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Tatuagens feitas com propósito, arte e personalidade.
            </p>
            <address
              className="not-italic text-base md:text-lg font-semibold"
              style={{ color: COLORS.gray }}
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <span className="block">📍 Localizado em Betim - MG</span>
              <span className="block">Av. Amazonas nº 608</span>
            </address>

            <div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <button
                onClick={toggleModal}
                className="px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
                style={{
                  backgroundColor: COLORS.orange,
                  color: COLORS.white,
                  boxShadow: `0 4px 14px ${COLORS.orange}40`,
                }}
                aria-label="Abrir formulário de agendamento"
              >
                Agendar Agora
              </button>
              <Link
                to="/galeria"
                className="px-8 py-3 rounded-md font-semibold transition-all duration-300 border-2 hover:bg-white/10 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white"
                style={{
                  borderColor: COLORS.white,
                  color: COLORS.white,
                }}
              >
                Ver Galeria
              </Link>
            </div>
          </div>

          {/* Imagem */}
          <div
            className="w-full md:w-1/2 flex justify-center"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img
              src="/assets/businesimg/img-es-1.webp"
              alt="Artista tatuador profissional realizando uma tatuagem no estúdio Soisa Tattoo em Betim"
              className="w-[50%] max-w-lg rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-2xl object-contain"
              style={{
                boxShadow: `0 20px 40px -10px ${COLORS.orange}30`,
              }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 animate-fadeIn"
          onClick={toggleModal}
        >
          <div
            className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
              aria-label="Fechar formulário"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: COLORS.black }}>
              Agendar Sessão
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block font-semibold mb-1" style={{ color: COLORS.black }}>
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                  style={{ borderColor: COLORS.gray }}
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block font-semibold mb-1" style={{ color: COLORS.black }}>
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                  style={{ borderColor: COLORS.gray }}
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="tipoServico" className="block font-semibold mb-1" style={{ color: COLORS.black }}>
                  Tipo de serviço
                </label>
                <select
                  id="tipoServico"
                  name="tipoServico"
                  value={form.tipoServico}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                  style={{ borderColor: COLORS.gray }}
                >
                  <option value="">Selecione</option>
                  <option value="Tatuagem">Tatuagem</option>
                  <option value="Piercing">Piercing</option>
                </select>
              </div>

              <div>
                <label htmlFor="data" className="block font-semibold mb-1" style={{ color: COLORS.black }}>
                  Data
                </label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  value={form.data}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                  style={{ borderColor: COLORS.gray }}
                />
              </div>

              <div>
                <label htmlFor="hora" className="block font-semibold mb-1" style={{ color: COLORS.black }}>
                  Hora
                </label>
                <input
                  type="time"
                  id="hora"
                  name="hora"
                  value={form.hora}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                  style={{ borderColor: COLORS.gray }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
                style={{
                  backgroundColor: COLORS.orange,
                  color: COLORS.white,
                }}
              >
                Enviar no WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}