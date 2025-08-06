import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../../data/Product';
import { useCart } from '../../../contexts/CartContext';
import { toast } from 'react-toastify';

interface Material {
  type: string;
  price: number;
}

interface Product {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  materials?: Material[];
  available?: boolean;
}

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

  const handleAddToCart = (product: Product) => {
    const selectedType = selectedMaterials[product.id] || '';
    const selectedMaterial = product.materials?.find((m) => m.type === selectedType);
    const isAvailable = product.available !== undefined ? product.available : true;

    if (isAvailable && selectedMaterial) {
      const uniqueId = `${product.id}-${selectedType}`;
      addItem({
        id: uniqueId,
        name: `${product.name} - ${selectedType}`,
        price: selectedMaterial.price,
        imageUrl: product.imageUrl,
      });
      toast.success(`${product.name} - ${selectedType} adicionado!`, { autoClose: 3000 });
    } else {
      toast.error('Selecione um material válido ou verifique a disponibilidade!', { autoClose: 3000 });
    }
  };

  const handleWhatsApp = (product: Product) => {
    const selectedType = selectedMaterials[product.id] || 'indefinido';
    const selectedMaterial = product.materials?.find((m) => m.type === selectedType);
    const price = selectedMaterial?.price || 0;

    const sanitizedName = encodeURIComponent(product.name.replace(/[^\w\s]/gi, ''));
    const mensagem = encodeURIComponent(
      `Olá! Tenho interesse no serviço "${sanitizedName} - ${selectedType}" por R$${price.toFixed(2).replace('.', ',')}.`
    );
    window.open(`https://wa.me/5531994340017?text=${mensagem}`, '_blank');
    toast.info('Mensagem enviada para o WhatsApp!', { autoClose: 3000 });
  };

  return (
    <section className="mb-16 px-4">
      <h3 className="text-3xl font-bold text-center text-white mb-8" data-aos="fade-up">
        Piercings
      </h3>

      <div className="relative" data-aos="fade-up">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-4">
            {filteredItems.map((item, idx) => {
              const currentMaterial = item.materials?.find((m) => m.type === selectedMaterials[item.id]);

              return (
                <div
                  key={item.id}
                  className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-w-[250px]"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div className="flex flex-col h-full rounded-xl overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-300 bg-zinc-900">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="object-cover h-48 w-full transition-transform duration-300 hover:scale-105"
                    />

                    <div className="flex flex-col justify-between flex-1">
                      <div className="p-4 text-white flex-1">
                        <h4 className="text-base font-semibold text-center mb-2 capitalize line-clamp-2">
                          {item.name}
                        </h4>

                        {item.materials?.length ? (
                          <>
                            <label
                              htmlFor={`material-select-${item.id}`}
                              className="text-sm text-gray-300 mb-1 block"
                            >
                              Escolher material:
                            </label>
                            <select
                              id={`material-select-${item.id}`}
                              className="w-full bg-gray-800 text-white border border-gray-700 rounded px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500"
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
                              {item.materials.map((material, i) => (
                                <option key={i} value={material.type}>
                                  {material.type} - R${material.price.toFixed(2).replace('.', ',')}
                                </option>
                              ))}
                            </select>

                            {currentMaterial && (
                              <p className="text-sm text-gray-400 mt-1">
                                Selecionado: {currentMaterial.type} - R${currentMaterial.price.toFixed(2).replace('.', ',')}
                              </p>
                            )}
                          </>
                        ) : (
                          <p className="text-sm text-gray-400 mt-1">Sem materiais disponíveis</p>
                        )}
                      </div>

                      <div className="p-3 bg-black/80 flex justify-center gap-2">
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="px-4 py-1 text-sm rounded-full bg-blue-700 text-white transition duration-300 disabled:opacity-50"
                          disabled={!item.available && item.available !== undefined || !selectedMaterials[item.id]}
                        >
                          Adicionar
                        </button>
                        <button
                          onClick={() => handleWhatsApp(item)}
                          className="px-4 py-1 text-sm rounded bg-green-600 text-white transition duration-300"
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
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#00b4d8] text-white p-2 rounded-full z-10 hover:bg-[#009ac1] focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#00b4d8] text-white p-2 rounded-full z-10 hover:bg-[#009ac1] focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}