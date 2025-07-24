import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../../data/Product';
import { useCart } from '../../../contexts/CartContext';
import { toast } from 'react-toastify';

interface CategorySectionProps {
  category: 'piercing';
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
    const uniqueId = `${product.id}-${selectedMaterial?.type || 'indefinido'}`;

    if (product.available && selectedMaterial) {
      addItem({
        id: uniqueId,
        name: `${product.name} - ${selectedMaterial.type}`,
        price: selectedMaterial.price,
        imageUrl: product.imageUrl,
      });
      toast.success(`${product.name} - ${selectedMaterial.type} adicionado!`, { autoClose: 3000 });
    } else {
      toast.error('Selecione um material para adicionar!', { autoClose: 3000 });
    }
  };

  const handleWhatsApp = (product: any) => {
    const selectedType = selectedMaterials[product.id];
    const selectedMaterial = product.materials?.find((m: any) => m.type === selectedType);
    const price = selectedMaterial?.price;

    const mensagem = encodeURIComponent(
      `Olá! Tenho interesse no serviço "${product.name} - ${selectedMaterial?.type}" por R$${price?.toFixed(2).replace('.', ',') || 'valor a combinar'}.`
    );
    window.open(`https://wa.me/5531994340017?text=${mensagem}`, '_blank');
    toast.info('Mensagem enviada para o WhatsApp!', { autoClose: 3000 });
  };

  return (
    <div className="mb-16">
      <h3 className="text-3xl font-semibold text-center text-black mb-6 capitalize" data-aos="fade-up">
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
                  className="flex-none w-[85%] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div className="flex flex-col h-full rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 bg-zinc-900">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="object-cover h-40 sm:h-44 md:h-48 lg:h-52 w-full transition-transform duration-300 hover:scale-105"
                    />

                    <div className="flex flex-col justify-between flex-1">
                      <div className="p-3 bg-black text-white flex-1">
                        <h3 className="text-base font-semibold text-center mb-2 capitalize line-clamp-2">
                          {item.name}
                        </h3>

                        {item.materials?.length ? (
                          <>
                            <label className="text-sm font-medium text-gray-300 block mb-1">
                              Escolher material:
                            </label>
                            <select
                              className="w-full bg-gray-900 text-white border border-gray-700 rounded px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500"
                              onChange={(e) =>
                                setSelectedMaterials((prev) => ({
                                  ...prev,
                                  [item.id]: e.target.value,
                                }))
                              }
                              value={selectedMaterials[item.id] || ''}
                            >
                              <option value="" disabled>
                                Selecione
                              </option>
                              {item.materials.map((material: any, i: number) => (
                                <option key={i} value={material.type}>
                                  {material.type} - R${material.price.toFixed(2).replace('.', ',')}
                                </option>
                              ))}
                            </select>

                            {currentMaterial && (
                              <p className="text-sm text-gray-400 mt-1">
                                Selecionado: {currentMaterial.type} - R$
                                {currentMaterial.price.toFixed(2).replace('.', ',')}
                              </p>
                            )}
                          </>
                        ) : (
                          <p className="text-sm text-gray-400 mt-1">Sem materiais disponíveis</p>
                        )}
                      </div>

                      <div className="p-3 bg-black bg-opacity-70 flex justify-center gap-2">
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="px-3 py-1 text-sm rounded-full bg-blue-700 text-white transition-all duration-300 disabled:opacity-50"
                          disabled={!item.available || !selectedMaterials[item.id]}
                        >
                          Adicionar
                        </button>
                        <button
                          onClick={() => handleWhatsApp(item)}
                          className="px-3 py-1 text-sm rounded bg-green-600 text-white transition-all duration-300"
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
