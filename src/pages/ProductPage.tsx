// src/pages/ProductPage.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { products } from "../data/Product";
import SEO from "../components/SEO/SEO";

// Paleta centralizada
const COLORS = {
  orange: "#E87A20",
  orangeLight: "#F59E42",
  blueDark: "#1A2B4C",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#AAAAAA",
};

const ProductPage = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });

    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Função para renderizar uma seção de produtos
  const renderProductSection = (category: string, title: string, emoji: string) => {
    const filtered = products.filter((p) => p.category === category);
    if (filtered.length === 0) return null;

    return (
      <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: COLORS.orange }}>
          {emoji} {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-black rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                borderColor: COLORS.blueDark,
                boxShadow: `0 8px 30px rgba(0,0,0,0.6)`,
              }}
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </Link>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-3 line-clamp-2" style={{ color: COLORS.white }}>
                  {product.name}
                </h3>
                <Link
                  to={`/product/${product.id}`}
                  className="inline-block px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
                  style={{
                    backgroundColor: COLORS.orange,
                    color: COLORS.white,
                    boxShadow: `0 4px 12px ${COLORS.orange}40`,
                  }}
                >
                  Ver Detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // JSON-LD para página de produtos
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tatuagens e Piercings - Soisa Tattoo Studio",
    description:
      "Galeria de tatuagens e piercings do Soisa Tattoo Studio em Betim. Inspirações para sua próxima arte na pele.",
    url: "https://estudiosoisa.online/products",
    about: {
      "@type": "ProfessionalService",
      name: "Soisa Tattoo Studio",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Amazonas, 608",
        addressLocality: "Betim",
        addressRegion: "MG",
        postalCode: "32600-000",
        addressCountry: "BR",
      },
      telephone: "+5531971705728",
    },
  };

  return (
    <>
      {/* SEO Helmet */}
      <SEO
        title="Tatuagens e Piercings - Soisa Tattoo"
        description="Confira todas as tatuagens e piercings disponíveis no Soisa Tattoo Studio em Betim. Inspirações para sua próxima arte na pele."
        keywords="tatuagens, piercings, estúdio de tatuagem Betim, tatuador profissional, Soisa Tattoo, galeria de tatuagens"
        url="https://estudiosoisa.online/products"
        image="https://estudiosoisa.online/assets/og-image.jpg"
      />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <div className="pt-24 bg-black text-white min-h-screen">
        <section className="px-4 max-w-7xl mx-auto py-8">
          {/* Título principal */}
          <div data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center" style={{ color: COLORS.orange }}>
              🖌️ Nossas Obras
            </h1>
            <p
              className="text-center max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-12"
              style={{ color: COLORS.gray }}
            >
              Explore nossa galeria de tatuagens autorais, realistas, blackwork e piercings. 
              Cada peça é única e feita com dedicação, técnica e biossegurança. 
              Encontre sua próxima inspiração!
            </p>
          </div>

          {/* Seção: Tatuagens Soisa */}
          {renderProductSection("tattoo", "Tatuagens Soisa", "🎨")}

          {/* Seção: Tatuagens BZ (Artista Convidado) */}
          {renderProductSection("bz", "Tatuagens - Artista Convidado", "🖼️")}

          {/* Seção: Piercings */}
          {renderProductSection("piercing", "Piercings", "💎")}
        </section>

        {/* Botão Voltar ao Topo */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
            style={{
              backgroundColor: COLORS.orange,
              color: COLORS.white,
              boxShadow: `0 4px 15px ${COLORS.orange}60`,
            }}
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={22} />
          </button>
        )}
      </div>
    </>
  );
};

export default ProductPage;