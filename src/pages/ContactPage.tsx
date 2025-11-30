// src/pages/ContactPage.tsx

import ContactForm from "../components/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <main className="pt-24 min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-6 pb-20">

        {/* Header */}
        <div className="text-center mb-14">
          <h1
            className="text-5xl font-extrabold tracking-wide drop-shadow-lg"
            style={{
              color: "#ff7a18",
              textShadow: "0 0 12px rgba(255, 122, 24, 0.6)"
            }}
            data-aos="fade-down"
          >
            Fale com o Studio Soisa
          </h1>

          <p
            className="text-gray-300 max-w-xl mx-auto mt-5 leading-relaxed"
            data-aos="fade-up"
          >
            Entre em contato para solicitar sua tattoo, tirar dúvidas sobre
            orçamento, estilo, cicatrização ou qualquer outra informação.  
            Preencha os dados abaixo para agilizar o atendimento.
          </p>
        </div>

        {/* Formulário */}
        <div
          className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-8 shadow-xl backdrop-blur-sm"
          data-aos="fade-up"
        >
          <ContactForm />
        </div>

      </section>
    </main>
  );
}
