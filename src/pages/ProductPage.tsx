import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../data/Product";
import { useCart } from "../../contexts/CartContext";
import { toast } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductPage = () => {
  const { id } = useParams<{ id?: string }>();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showScroll, setShowScroll] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (id) {
      const product = products.find((p) => p.id === id);
      setSelectedProduct(product || products[0]);
    } else {
      setSelectedProduct(null);
    }

    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  const handleProductClick = (id: string) => {
    setSelectedProduct(products.find((p) => p.id === id) || products[0]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    const whatsappLink = `https://wa.me/5531971705728?text=${mensagem}`;
    window.open(whatsappLink, "_blank");
    toast.info(`Mensagem enviada para o WhatsApp sobre ${product.name}!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const isTattoo = (product: any) => product.category === "tattoo";

  if (!selectedProduct && !id) {
    return (
      <div className="relative pt-24 bg-black text-white">
        <section className="px-4 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-400 mb-10 text-center">Tatuagens e Piercings</h1>

          {/* Tatuagens */}
          <div className="mb-12 ">
            <h2 className="text-2xl  font-semibold text-blue-400 mb-6 text-center">Tatuagens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products
                .filter((p) => p.category === "tattoo")
                .map((p) => (
                  <div
                    key={p.id}
                    className="bg-black p-4 rounded-lg shadow-lg border-2 border-blue-800 flex flex-col items-center text-center relative"
                  >
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-full h-48 object-cover rounded-md mx-auto"
                    />
                    <h3 className="text-lg font-medium text-blue-300 mt-2">{p.name}</h3>
                    <Link
                      to={`/product/${p.id}`}
                      className="mt-3 inline-block px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
                    >
                      Ver mais
                    </Link>
                  </div>
                ))}
            </div>
          </div>

          {/* Piercings */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-400 mb-6 text-center">Piercings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products
                .filter((p) => p.category === "piercing")
                .map((p) => (
                  <div
                    key={p.id}
                    className="bg-black p-4 rounded-lg shadow-lg border-2 border-blue-800 flex flex-col items-center text-center relative"
                  >
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-full h-48 object-cover rounded-md mx-auto"
                    />
                    <h3 className="text-lg font-medium text-blue-300 mt-2">{p.name}</h3>
                    <Link
                      to={`/product/${p.id}`}
                      className="mt-3 inline-block px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
                    >
                      Ver mais
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 z-50 bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={22} />
          </button>
        )}
      </div>
    );
  }

  if (!selectedProduct) {
    return <div className="text-center py-10">Carregando tatuagens e piercings...</div>;
  }

  const otherCategory = selectedProduct.category === "tattoo" ? "piercing" : "tattoo";

  return (
    <div className="relative pt-24 bg-black text-white">
      <section className="px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="w-full md:w-1/3 flex justify-center relative">
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="w-full max-w-sm object-contain rounded-lg shadow-lg border-4 border-blue-800"
            />
          </div>

          <div className="w-full md:w-2/3 space-y-4">
            <h1 className="text-3xl font-bold text-blue-400">{selectedProduct.name}</h1>
            {selectedProduct.description && (
              <p className="text-blue-200">{selectedProduct.description}</p>
            )}
            {!isTattoo(selectedProduct) && selectedProduct.price && (
              <p className="text-xl font-bold text-yellow-400">R$ {selectedProduct.price.toFixed(2)}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              {!isTattoo(selectedProduct) && selectedProduct.available !== undefined && (
                <>
                  <button
                    onClick={() => handleAddToCart(selectedProduct)}
                    className={`px-6 py-2 font-semibold rounded-full transition ${
                      selectedProduct.available
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-400 text-white cursor-not-allowed"
                    }`}
                    disabled={!selectedProduct.available}
                  >
                    Adicionar ao Carrinho
                  </button>
                  <button
                    onClick={() => handleWhatsApp(selectedProduct)}
                    className="px-6 py-2 rounded-lg font-semibold bg-green-700 text-white hover:bg-green-800"
                  >
                    {selectedProduct.available ? "Pedir pelo WhatsApp" : "Encomendar pelo WhatsApp"}
                  </button>
                </>
              )}
              {isTattoo(selectedProduct) && (
                <button
                  onClick={() => handleWhatsApp(selectedProduct)}
                  className="px-6 py-2 rounded-lg font-semibold bg-green-700 text-white hover:bg-green-800"
                >
                  Consultar Valor no WhatsApp
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Carrossel da mesma categoria */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">Outros {selectedProduct.category === "tattoo" ? "Tatuagens" : "Piercings"}</h2>
          <Carousel
            showArrows
            showThumbs={false}
            infiniteLoop
            centerMode
            centerSlidePercentage={33.33}
            emulateTouch
            showStatus={false}
            showIndicators={false}
            dynamicHeight={false}
            className="carousel-custom mx-auto"
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full shadow-lg z-10"
                  aria-label={label}
                >
                  <ChevronLeft size={20} />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full shadow-lg z-10"
                  aria-label={label}
                >
                  <ChevronRight size={20} />
                </button>
              )
            }
          >
            {products
              .filter((p) => p.id !== id && p.category === selectedProduct.category)
              .slice(0, 6)
              .map((p) => (
                <div key={p.id} className="cursor-pointer p-2" onClick={() => handleProductClick(p.id)}>
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-32 object-cover rounded-md shadow-md border-2 border-blue-800 mx-auto"
                  />
                  <p className="mt-2 text-center font-medium text-blue-300">{p.name}</p>
                  {!isTattoo(p) && p.price && (
                    <p className="text-center font-bold text-yellow-500">R$ {p.price.toFixed(2)}</p>
                  )}
                </div>
              ))}
          </Carousel>
        </div>

        {/* Carrossel da outra categoria */}
        <Carousel
  showArrows
  showThumbs={false}
  infiniteLoop
  centerMode
  centerSlidePercentage={33.33}
  emulateTouch
  showStatus={false}
  showIndicators={false}
  dynamicHeight={false}
  className="carousel-custom mx-auto"
  renderArrowPrev={(onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full shadow-lg z-10"
        aria-label={label}
      >
        <ChevronLeft size={20} />
      </button>
    )
  }
  renderArrowNext={(onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full shadow-lg z-10"
        aria-label={label}
      >
        <ChevronRight size={20} />
      </button>
    )
  }
>
  {products
    .filter((p) => p.category === otherCategory)
    .slice(0, 6)
    .map((p) => (
      <div key={p.id} className="cursor-pointer p-2" onClick={() => handleProductClick(p.id)}>
        <img
          src={p.imageUrl}
          alt={p.name}
          className="w-full h-32 object-cover rounded-md shadow-md border-2 border-blue-800 mx-auto"
        />
        <p className="mt-2 text-center font-medium text-blue-300">{p.name}</p>
        {!isTattoo(p) && p.price && (
          <p className="text-center font-bold text-yellow-500">R$ {p.price.toFixed(2)}</p>
        )}
      </div>
    ))}
</Carousel>

      </section>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
};

export default ProductPage;
