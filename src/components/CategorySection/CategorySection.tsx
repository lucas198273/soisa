import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../../data/Product";

import { toast } from "react-toastify";

interface CategorySectionProps {
  category: "tattoo" | "bz";  // Restrito a "tattoo" apenas
   // Restrito a "tattoo" apenas
}

export default function CategorySectionTatto({ category }: CategorySectionProps) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filteredItems = products.filter((item) => item.category === category);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  

  const handleWhatsApp = (product: any) => {
    const mensagem = encodeURIComponent(
      `Olá! Tenho interesse no serviço "${product.name}" por R$${product.price?.toFixed(2).replace(".", ",") || "valor a combinar"}. Quero usar como inspiração!`
    );
    const whatsappLink = `https://wa.me/5531994340017?text=${mensagem}`;
    window.open(whatsappLink, "_blank");
    toast.info(`Mensagem enviada para o WhatsApp sobre ${product.name}!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="mb-16">
      <h3 className="text-3xl font-semibold text-center text-white mb-6 capitalize" data-aos="fade-up">
        Tatuagens
      </h3>

      <div className="relative">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-4 px-2">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="flex-none w-[60%] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="relative rounded-xl overflow-hidden h-[360px] shadow-lg transition-transform duration-300 ease-out hover:-translate-y-2">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-70 flex justify-center">
                    <button
                      onClick={() => handleWhatsApp(item)}
                      className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-b from-green-800 to-green-900 text-white shadow-md hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 hover:shadow-xl transition-all duration-300"
                    >
                      Consultar Inspiração
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#e84c3d] text-white p-2 rounded-full z-10 hover:bg-[#d43c2d]"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#e84c3d] text-white p-2 rounded-full z-10 hover:bg-[#d43c2d]"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}