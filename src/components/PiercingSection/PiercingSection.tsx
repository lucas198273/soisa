import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../../data/Product";
import { useCart } from "../../../contexts/CartContext";
import { toast } from "react-toastify";

interface CategorySectionProps {
  category: "piercing";
}

export default function PiercingSection({ category }: CategorySectionProps) {
  const filteredItems = products.filter((item) => item.category === category);
  const [selectedMaterials, setSelectedMaterials] = useState<Record<string, string>>({});
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { addItem } = useCart();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleAddToCart = (product: any) => {
    const selectedType = selectedMaterials[product.id];
    const selectedMaterial = product.materials?.find((m: any) => m.type === selectedType);
    const uniqueId = `${product.id}-${selectedMaterial?.type || "indefinido"}`;

    if (product.available && selectedMaterial) {
      addItem({
        id: uniqueId,
        name: `${product.name} - ${selectedMaterial.type}`,
        price: selectedMaterial.price,
        imageUrl: product.imageUrl,
      });
      toast.success(`${product.name} - ${selectedMaterial.type} adicionado!`, { autoClose: 3000 });
    } else {
      toast.error("Selecione um material para adicionar!", { autoClose: 3000 });
    }
  };

  const handleWhatsApp = (product: any) => {
    const selectedType = selectedMaterials[product.id];
    const selectedMaterial = product.materials?.find((m: any) => m.type === selectedType);
    const price = selectedMaterial?.price;

    const mensagem = encodeURIComponent(
      `Olá! Tenho interesse no serviço "${product.name} - ${selectedMaterial?.type}" por R$${price?.toFixed(2).replace(".", ",") || "valor a combinar"}.`
    );
    window.open(`https://wa.me/5531994340017?text=${mensagem}`, "_blank");
    toast.info(`Mensagem enviada para o WhatsApp!`, { autoClose: 3000 });
  };

  return (
    <div className="mb-16">
      <h3 className="text-3xl font-semibold text-center text-white mb-6 capitalize" data-aos="fade-up">
        Piercings
      </h3>

      <div className="relative">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-4 px-2">
            {filteredItems.map((item, idx) => {
              const currentMaterial = item.materials?.find(
                (m) => m.type === selectedMaterials[item.id]
              );

              return (
                <div
                  key={item.id}
                  className="flex-none w-[60%] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div className="flex flex-col h-[460px] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 bg-zinc-900">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="object-cover h-[60%] w-full transition-transform duration-300 hover:scale-105"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      {item.materials && item.materials.length > 0 && (
                        <div className="p-3 bg-black text-white">
                          <label className="text-sm font-medium text-gray-300 block mb-1">
                            Escolher material:
                          </label>
                          <select
                            className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            onChange={(e) =>
                              setSelectedMaterials((prev) => ({
                                ...prev,
                                [item.id]: e.target.value,
                              }))
                            }
                            value={selectedMaterials[item.id] || ""}
                          >
                            <option value="" disabled>
                              Selecione um material
                            </option>
                            {item.materials.map((material: any, i: number) => (
                              <option key={i} value={material.type}>
                                {material.type} Apartir de R${material.price.toFixed(2).replace(".", ",")}
                              </option>
                            ))}
                          </select>

                          {currentMaterial && (
                            <p className="text-sm text-gray-400 mt-2">
                              Selecionado: {currentMaterial.type} - R$
                              {currentMaterial.price.toFixed(2).replace(".", ",")}
                            </p>
                          )}
                        </div>
                      )}

                      <div className="p-3 bg-black bg-opacity-70 mt-auto flex justify-center gap-2">
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="px-4 py-2 font-semibold rounded-full bg-gradient-to-b from-blue-800 to-blue-900 text-white shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50"
                          disabled={!item.available || !selectedMaterials[item.id]}
                        >
                          Adicionar
                        </button>
                        <button
                          onClick={() => handleWhatsApp(item)}
                          className="px-4 py-2 font-semibold rounded-lg bg-gradient-to-b from-green-800 to-green-900 text-white shadow-md hover:from-green-600 hover:to-green-700 transition-all duration-300"
                        >
                          WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#00b4d8] text-white p-2 rounded-full z-10 hover:bg-[#d43c2d]"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#00b4d8] text-white p-2 rounded-full z-10 hover:bg-[#d43c2d]"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
