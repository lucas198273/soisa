// src/pages/ProductDetailPage.tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { products } from "../data/Product";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
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

const ProductDetailPage = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });

    if (id) {
      const product = products.find((p) => p.id === id);
      setSelectedProduct(product || null);
    }
  }, [id]);

  // Função unificada para WhatsApp
  const handleWhatsApp = (product: any) => {
    let message = "";
    let phoneNumber = "5531971705728";

    if (product.category === "tattoo" || product.category === "bz") {
      message = `Olá! Me inspirei na arte "${product.name}" e gostaria de saber mais sobre o processo, preços e disponibilidade. Pode me ajudar?`;
    } else if (product.category === "piercing") {
      message = `Olá! Tenho interesse no serviço de piercing "${product.name}". Gostaria de agendar uma avaliação.`;
      phoneNumber = "5531994340017";
    } else {
      message = `Olá! Tenho interesse no serviço "${product.name}". Gostaria de mais informações.`;
    }

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");

    toast.info(`Mensagem enviada para o WhatsApp sobre "${product.name}"!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  if (!selectedProduct) {
    return (
      <div className="pt-24 bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 mx-auto" style={{ borderColor: COLORS.orange }}></div>
          <p className="mt-4 text-gray-400">Carregando detalhes...</p>
        </div>
      </div>
    );
  }

  const isTattoo = selectedProduct.category === "tattoo" || selectedProduct.category === "bz";
  const productUrl = `https://estudiosoisa.online/product/${selectedProduct.id}`;
  const productImage = selectedProduct.imageUrl?.startsWith("http")
    ? selectedProduct.imageUrl
    : `https://estudiosoisa.online${selectedProduct.imageUrl}`;

  // Dados estruturados (JSON-LD) para produto (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: selectedProduct.name,
    description: selectedProduct.description || `Tatuagem ${selectedProduct.name} - Soisa Tattoo Studio`,
    image: productImage,
    url: productUrl,
    brand: {
      "@type": "Brand",
      name: "Soisa Tattoo Studio",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: "0.00", // ou preço real se tiver
      availability: "https://schema.org/InStock",
      url: productUrl,
    },
  };

  return (
    <>
      <SEO
        title={`${selectedProduct.name} - Soisa Tattoo Studio`}
        description={selectedProduct.description || `Tatuagem ${selectedProduct.name} criada por Ítalo Soisa. Veja mais detalhes e inspire-se para sua próxima arte.`}
        keywords={`${selectedProduct.name}, tatuagem, piercing, arte corporal, Soisa Tattoo, Betim`}
        url={productUrl}
        image={productImage}
        type="article"
        publishedTime={new Date().toISOString()}
        modifiedTime={new Date().toISOString()}
        author="Ítalo Soisa"
      />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <div className="pt-24 bg-black text-white min-h-screen">
        <section className="px-4 max-w-7xl mx-auto py-8">
          {/* Breadcrumb (opcional, para melhor SEO) */}
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors">Início</Link>
              </li>
              <li className="text-gray-600">/</li>
              <li>
                <Link to="/products" className="hover:text-orange-500 transition-colors">Produtos</Link>
              </li>
              <li className="text-gray-600">/</li>
              <li className="text-orange-500" aria-current="page">{selectedProduct.name}</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
            {/* Imagem do produto */}
            <div
              className="w-full lg:w-1/2 flex justify-center"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                className="w-full max-w-md object-contain rounded-lg shadow-2xl border-4"
                style={{ borderColor: COLORS.blueDark }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Informações */}
            <div
              className="w-full lg:w-1/2 space-y-5 text-center lg:text-left"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <h1
                className="text-3xl md:text-4xl font-bold"
                style={{ color: COLORS.orange }}
              >
                {selectedProduct.name}
              </h1>

              {selectedProduct.description && (
                <p className="text-base md:text-lg leading-relaxed" style={{ color: COLORS.gray }}>
                  {selectedProduct.description}
                </p>
              )}

              {/* Categoria */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span
                  className="px-3 py-1 rounded-full text-sm font-semibold bg-opacity-20"
                  style={{
                    backgroundColor: `${COLORS.blueDark}40`,
                    color: COLORS.orange,
                  }}
                >
                  {selectedProduct.category === "tattoo" && "🎨 Tatuagem"}
                  {selectedProduct.category === "bz" && "🎨 Tatuagem (Artista Convidado)"}
                  {selectedProduct.category === "piercing" && "💎 Piercing"}
                </span>
              </div>

              {/* Botão principal */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button
                  onClick={() => handleWhatsApp(selectedProduct)}
                  className="px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
                  style={{
                    backgroundColor: COLORS.orange,
                    color: COLORS.white,
                    boxShadow: `0 8px 25px ${COLORS.orange}60`,
                  }}
                >
                  {isTattoo ? "💬 Quero me inspirar" : "📅 Agendar avaliação"}
                </button>

                <button
                  onClick={() => navigate(-1)}
                  className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 border-2"
                  style={{
                    borderColor: COLORS.white,
                    color: COLORS.white,
                  }}
                >
                  ← Voltar
                </button>
              </div>

              {/* Selos de confiança */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm mt-6" style={{ color: COLORS.gray }}>
                <span className="flex items-center gap-1">
                  <span style={{ color: COLORS.orange }}>✓</span> Atendimento personalizado
                </span>
                <span className="flex items-center gap-1">
                  <span style={{ color: COLORS.orange }}>✓</span> Profissionais certificados
                </span>
                <span className="flex items-center gap-1">
                  <span style={{ color: COLORS.orange }}>✓</span> Biossegurança garantida
                </span>
              </div>
            </div>
          </div>

          {/* Carrosséis relacionados */}
          <div className="space-y-12">
            {isTattoo && (
              <div data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: COLORS.orange }}>
                  🖌️ Outras Tatuagens do Soisa
                </h2>
                <ProductCarousel
                  displayCategory="tattoo"
                  currentProductId={selectedProduct.id}
                  products={products}
                />
              </div>
            )}

            {isTattoo && (
              <div data-aos="fade-up" data-aos-delay="400">
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: COLORS.orangeLight }}>
                  🎨 Trabalhos do Artista Convidado
                </h2>
                <ProductCarousel
                  displayCategory="bz"
                  currentProductId={selectedProduct.id}
                  products={products}
                />
              </div>
            )}

            <div data-aos="fade-up" data-aos-delay="500">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: COLORS.orange }}>
                💎 Piercings em Destaque
              </h2>
              <ProductCarousel
                displayCategory="piercing"
                currentProductId={selectedProduct.id}
                products={products}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetailPage;