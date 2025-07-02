// src/components/CategorySection.tsx
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../../data/Product";// importa os dados centralizados

interface CategorySectionProps {
  category: "tattoo" | "piercing"; // força a categoria válida
}

export default function CategorySection({ category }: CategorySectionProps) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filteredItems = products.filter((item) => item.category === category);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

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
                  bg-[#111] 
                  rounded-xl 
                  overflow-hidden 
                  h-[360px] 
                  flex 
                  items-center 
                  justify-center 
                  shadow-[0_8px_20px_rgba(0,0,0,0.3)] 
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
