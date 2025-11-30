import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ContactFormProps {
  whatsappNumber?: string;
}

export default function ContactForm({
  whatsappNumber = "5531971705728",
}: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    bodyArea: "",
    size: "",
    description: "",
    allergy: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsModalOpen(true);
  }

  function generateWhatsappMessage() {
    return encodeURIComponent(
      `🖤 *Novo orçamento - Studio Soisa (via site)* 🧡

👤 *Nome:* ${form.name}
🎂 *Idade:* ${form.age}
📧 *Email:* ${form.email}

📍 *Local do corpo:* ${form.bodyArea}
📏 *Tamanho estimado:* ${form.size} cm

🎨 *Descrição da tattoo:*
${form.description}

⚠️ *Possui alergia?*
${form.allergy}

Enviado pelo site oficial do Studio Soisa.`
    );
  }

  function sendToWhatsapp() {
    const msg = generateWhatsappMessage();
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
    setIsModalOpen(false);
  }

  return (
    <>
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <h2
            className="text-4xl font-extrabold text-center drop-shadow mb-6"
            style={{
              color: "#ff7a18",
              textShadow: "0 0 14px rgba(255, 122, 24, 0.7)",
            }}
          >
            Solicitar Orçamento de Tattoo
          </h2>

          <p className="text-center text-gray-300 mb-12 max-w-xl mx-auto">
            Preencha os dados abaixo para agilizar seu atendimento.  
            Você será redirecionado para o WhatsApp com a mensagem pronta.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-[#0b0b0b] p-8 rounded-2xl shadow-xl border border-[#ff7a18]/40"
          >
            {/* NOME */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">Nome</label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black border border-[#ff7a18]/40 focus:border-[#ff7a18] outline-none transition"
                placeholder="Seu nome completo"
              />
            </div>

            {/* IDADE */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">Idade</label>
              <input
                name="age"
                type="number"
                required
                value={form.age}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black border border-[#ff7a18]/40 focus:border-[#ff7a18] outline-none transition"
                placeholder="Sua idade"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Email (para envio de referências)
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black border border-[#ff7a18]/40 focus:border-[#ff7a18] outline-none transition"
                placeholder="Seu melhor email"
              />
            </div>

            {/* LOCAL DO CORPO */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Local do corpo a ser tatuado
              </label>
              <input
                name="bodyArea"
                required
                value={form.bodyArea}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black border border-[#ff7a18]/40 focus:border-[#ff7a18] outline-none transition"
                placeholder="Ex: antebraço, perna, costela..."
              />
            </div>

            {/* TAMANHO */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Tamanho estimado (em cm)
              </label>
              <input
                name="size"
                required
                value={form.size}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black border border-[#ff7a18]/40 focus:border-[#ff7a18] outline-none transition"
                placeholder="Ex: 10, 15, 20..."
              />
            </div>

            {/* DESCRIÇÃO */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Descrição da ideia
              </label>
              <textarea
                name="description"
                required
                value={form.description}
                onChange={handleChange}
                className="w-full p-3 h-32 rounded-lg bg-black border border-[#ff7a18]/40 focus:border-[#ff7a18] outline-none transition resize-none"
                placeholder="Explique a ideia da tattoo, estilo, detalhes..."
              />
            </div>

            {/* ALERGIA */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Possui alergia? Se sim, qual?
              </label>
              <textarea
                name="allergy"
                value={form.allergy}
                onChange={handleChange}
                className="w-full p-3 h-20 rounded-lg bg-black border border-[#ff7a18]/40 focus:border-[#ff7a18] outline-none transition resize-none"
                placeholder="Se não tiver, basta escrever 'Não'"
              />
            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#ff7a18] hover:bg-[#d96a15] transition font-bold text-black text-lg"
            >
              Avançar para confirmação
            </button>
          </form>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            className="bg-[#0b0b0b] p-8 rounded-2xl shadow-xl border border-[#ff7a18]/40 max-w-md w-full"
            data-aos="zoom-in"
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{
                color: "#ff7a18",
                textShadow: "0 0 10px rgba(255, 122, 24, 0.6)",
              }}
            >
              Tudo certo, {form.name}! 🧡
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Você será redirecionado para o WhatsApp com a mensagem pronta para
              envio.  
              <br />
              <br />
              👉 *A mensagem só será enviada quando você clicar em “Enviar no WhatsApp”.*
            </p>

            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
              >
                Revisar
              </button>

              <button
                onClick={sendToWhatsapp}
                className="px-4 py-2 rounded-lg bg-[#ff7a18] hover:bg-[#d96a15] text-black font-semibold transition"
              >
                Enviar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
