"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
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

const WHATSAPP_NUMBERS: Record<string, string> = {
  tattoo: "5531971705728",
  bz: "5531971393567",
  piercing: "5531994340017",
};

const AUTO_PLAY_INTERVAL = 3000;

const ProductCard = ({ product, phone }: { product: Product; phone: string }) => {
  const imgs = product.images?.slice(0, 3) || [product.imageUrl];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imgs.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [imgs.length]);

  const handleClick = () => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(
        `Olá! Tenho interesse no serviço "${product.name}". Quero me inspirar!`
      )}`,
      "_blank"
    );
    toast.info(`Mensagem enviada sobre ${product.name}!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="embla__slide px-2 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%]">
      <div className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-lg bg-black">
        <img
          src={imgs[index]}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-opacity duration-300"
        />
        <Link to={`/product/${product.id}`} className="absolute inset-0 z-10" />
        <div className="absolute bottom-0 left-0 w-full p-2 bg-black/70 flex justify-between items-center">
          <span className="text-white font-medium truncate">{product.name}</span>
          <button
            onClick={handleClick}
            className="px-3 py-1 bg-green-800 text-white rounded-md text-sm hover:bg-green-700 transition"
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductCarousel = ({ displayCategory, currentProductId, products }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filteredProducts = products
    .filter((p) => p.id !== currentProductId && p.category === displayCategory)
    .slice(0, 10);

  if (!filteredProducts.length) return null;

  const phone = WHATSAPP_NUMBERS[displayCategory] || WHATSAPP_NUMBERS.tattoo;

  // Título dinâmico com base na categoria
  let title = "";
  if (displayCategory === "tattoo") {
    title = "Tatuagens Soisa";
  } else if (displayCategory === "bz") {
    title = "Tatuagens BZ";
  } else if (displayCategory === "piercing") {
    title = "Piercings";
  }

  return (
    <section className="mb-12 px-4">
      <h2
        className="text-2xl md:text-3xl font-semibold text-center text-white mb-6 capitalize"
        data-aos="fade-up"
      >
        {title}
      </h2>
      <div className="relative" data-aos="fade-up">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} phone={phone} />
            ))}
          </div>
        </div>

        {/* Botões de navegação */}
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#00b4d8] text-white p-2 rounded-full hover:bg-[#009ac1] z-10"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#00b4d8] text-white p-2 rounded-full hover:bg-[#009ac1] z-10"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;
