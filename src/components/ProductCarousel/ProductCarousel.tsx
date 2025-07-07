// src/components/ProductCarousel/ProductCarousel.tsx
"use client";

import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface Product {
  id: string;
  category: string;
  name: string;
  imageUrl: string;
  images?: string[];
}

interface Props {
  displayCategory: string;
  currentProductId: string;
  products: Product[];
}

const COMMON_OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "start", // Tipo aceito conforme doc :contentReference[oaicite:2]{index=2}
};

const AUTO_PLAY_INTERVAL = 3000;

const ProductCarousel = ({ displayCategory, currentProductId, products }: Props) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(COMMON_OPTIONS);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const items = products
    .filter((p) => p.id !== currentProductId && p.category === displayCategory)
    .slice(0, 10);
  if (!items.length) return null;

  const title = displayCategory === "piercing" ? "Outros Piercings" : "Outras Tatuagens";
  const whatsappNumbers: Record<string, string> = {
    tattoo: "5531971705728",
    bz: "5531971393567",
    piercing: "5531994340017",
  };
  const phone = whatsappNumbers[displayCategory] || whatsappNumbers.tattoo;

  return (
    <div className="mb-12 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-6 capitalize" data-aos="fade-up">
        {title}
      </h2>
      <div className="relative" data-aos="fade-up">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4 px-2">
            {items.map((prod) => {
              const imgs = prod.images?.slice(0, 3) || [prod.imageUrl];
              const [index, setIndex] = useState(0);

              useEffect(() => {
                const iv = setInterval(() => {
                  setIndex((i) => (i + 1) % imgs.length);
                }, AUTO_PLAY_INTERVAL);
                return () => clearInterval(iv);
              }, [imgs.length]);

              return (
                <div key={prod.id} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[360px] shadow-lg">
                    <img src={imgs[index]} alt={prod.name} className="w-full h-full object-cover" />

                    {/* Link clicável por cima da imagem */}
                    <Link to={`/product/${prod.id}`} className="absolute inset-0 z-10" />

                    {/* Overlay rodapé com botão */}
                    <div className="absolute bottom-0 left-0 w-full p-2 bg-black bg-opacity-70 flex justify-between items-center">
                      <span className="text-white font-medium truncate">{prod.name}</span>
                      <button
                        onClick={() => {
                          window.open(
                            `https://wa.me/${phone}?text=${encodeURIComponent(`Olá! Tenho interesse no serviço "${prod.name}". Quero me inspirar!`)}`,
                            "_blank"
                          );
                          toast.info(`Mensagem enviada sobre ${prod.name}!`, { position: "top-right", autoClose: 3000 });
                        }}
                        className="px-3 py-1 bg-green-800 text-white rounded-md text-sm hover:bg-green-700 transition"
                      >
                        Ver mais
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#00b4d8] text-white p-2 rounded-full hover:bg-[#009ac1] disabled:opacity-50"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#00b4d8] text-white p-2 rounded-full hover:bg-[#009ac1] disabled:opacity-50"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
