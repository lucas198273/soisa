import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../../data/Product";
import { useCart } from "../../../contexts/CartContext";
import { toast } from "react-toastify";

interface CategorySectionProps {
  category: "tattoo" | "piercing";
}

export default function CategorySection({ category }: CategorySectionProps) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filteredItems = products.filter((item) => item.category === category);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { addItem } = useCart();

  const handleAddToCart = (product: any) => {
    if (product.available && product.price) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
      });
      toast.success(`${product.name} adicionado ao carrinho!`, {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      toast.error("Este item não pode ser adicionado ao carrinho!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleWhatsApp = (product: any) => {
    const mensagem = encodeURIComponent(
      `Olá! Tenho interesse no serviço "${product.name}" por R$${product.price?.toFixed(2) || "valor a combinar"}.`
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
      <h3
        className="text-3xl font-semibold text-center text-white mb-6 capitalize"
        data-aos="fade-up"
      >
        {category === "tattoo" ? "Tatuagens" : "Piercings"}
      </h3>

      <div className="relative">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-4 px-2">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="
                  flex-none 
                  w-[60%] sm:w-1/2 
                  md:w-1/3 lg:w-1/4 
                  xl:w-1/5 
                "
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="
                  relative 
                  rounded-xl 
                  overflow-hidden 
                  h-[360px] 
                  shadow-lg 
                  transition-transform 
                  duration-300 
                  ease-out 
                  hover:-translate-y-2
                ">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="
                      w-full 
                      h-full 
                      object-cover 
                      transition-transform 
                      duration-300 
                      ease-in-out 
                      hover:scale-105 
                    "
                  />
                  {category === "piercing" && (
                    <div className="absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-70 flex justify-center gap-2">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className={`px-4 py-2 font-semibold rounded-full transition ${
                          item.available && item.price
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-gray-400 text-white cursor-not-allowed"
                        }`}
                        disabled={!item.available || !item.price}
                      >
                        Adicionar
                      </button>
                      <button
                        onClick={() => handleWhatsApp(item)}
                        className="px-4 py-2 rounded-lg font-semibold bg-green-700 text-white hover:bg-green-800"
                      >
                        WhatsApp
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navegação */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="
            absolute 
            top-1/2 
            left-2 
            -translate-y-1/2 
            bg-[#e84c3d] 
            text-white 
            p-2 
            rounded-full 
            z-10 
            hover:bg-[#d43c2d]
          "
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="
            absolute 
            top-1/2 
            right-2 
            -translate-y-1/2 
            bg-[#e84c3d] 
            text-white 
            p-2 
            rounded-full 
            z-10 
            hover:bg-[#d43c2d]
          "
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}