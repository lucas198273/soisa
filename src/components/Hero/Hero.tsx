import { useState } from 'react';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    data: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de agendar uma sessão de tatuagem.\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nData: ${form.data}`;
    const whatsappLink = `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setIsOpen(false);
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center px-6 py-12 md:px-12 border-b-4 border-[#00b4d8]">
      <div className="flex flex-col-reverse gap-12 w-full max-w-7xl md:flex-row md:gap-16 items-center">
        {/* Texto + Botão */}
        <div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dê vida à sua ideia <br /> com traços precisos
          </h1>
          <p
            className="text-lg md:text-xl text-gray-300 mb-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Tatuagens feitas com propósito, arte e personalidade. Agende sua sessão agora mesmo.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="inline-block px-8 py-3 bg-[#00b4d8] hover:bg-[#009ac1] transition text-white font-semibold rounded-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Agendar Sessão
          </button>
        </div>

        {/* Imagem do Artista */}
        <div
          className="w-full md:w-1/2 flex items-center justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src="/assets/artista/img3.png"
            alt="Artista tatuador"
            className="w-full max-w-md h-auto rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 object-contain"
          />
        </div>
      </div>

      {/* Modal de Agendamento */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
          data-aos="zoom-in"
        >
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
              aria-label="Fechar"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-4 text-black">Agendar Sessão</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
              />
              <input
                type="tel"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="Telefone para contato"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
              />
              <input
                type="date"
                name="data"
                value={form.data}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
              />
              <button
                type="submit"
                className="w-full bg-[#00b4d8] text-white py-2 rounded-lg hover:bg-[#009ac1] transition"
              >
                Enviar para WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
