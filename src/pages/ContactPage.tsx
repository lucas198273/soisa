// src/pages/ContactPage.tsx

import ContactForm from "../components/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <main className="pt-28 min-h-screen w-full bg-black text-white">

      {/* Header */}
      <div className="text-center mb-16 w-full px-4">
        <h1
          className="text-4xl md:text-6xl font-extrabold tracking-wide"
          style={{
            color: "#ff7a18",
            textShadow: "0 0 15px rgba(255, 122, 24, 0.55)"
          }}
          data-aos="fade-down"
        >
          Studio Soisa
        </h1>

        <p
          className="text-gray-300 max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed"
          data-aos="fade-up"
        >
          Preencha o formulário abaixo para solicitar seu orçamento de tattoo.  
          Quanto mais detalhes você enviar, mais rápido conseguimos te retornar.
        </p>
      </div>

      {/* Formulário */}
      <div
        className="
          w-full 
          max-w-xl md:max-w-3xl 
          mx-auto 
          px-4
        "
        data-aos="fade-up"
      >
        <div
          className="
            bg-[#0d0d0d]/90 
            border border-zinc-800 
            rounded-2xl 
            p-6 md:p-10 
            shadow-[0_0_25px_rgba(255,122,24,0.25)] 
            backdrop-blur-sm
          "
        >
          <ContactForm />
        </div>
      </div>

    </main>
  );
}
