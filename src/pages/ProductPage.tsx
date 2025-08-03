// src/pages/ProductPage.tsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { products } from "../data/Product"; // Ajuste o caminho se necessário


const ProductPage = () => {
  const { id } = useParams<{ id?: string }>();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!id) {
      setShowScroll(false); // Reset scroll button state when no id
    }
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative pt-24 bg-black text-white">
      <section className="px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-400 mb-10 text-center">Tatuagens e Piercings</h1>

        {/* Tatuagens Soisa */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-400 mb-6 text-center">Tatuagens Soisa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === "tattoo")
              .map((p) => (
                <div
                  key={p.id}
                  className="bg-black p-4 rounded-lg shadow-lg border-2 border-blue-800 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-48 object-cover rounded-md mx-auto hover:opacity-90 transition-opacity"
                  />
                  <h3 className="text-lg font-medium text-blue-300 mt-2 line-clamp-2">{p.name}</h3>
                  <Link
                    to={`/product/${p.id}`}
                    className="mt-3 inline-block px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300"
                  >
                    Ver mais
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* Tatuagens BZ */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-400 mb-6 text-center">Tatuagens BZ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === "bz")
              .map((p) => (
                <div
                  key={p.id}
                  className="bg-black p-4 rounded-lg shadow-lg border-2 border-blue-800 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-48 object-cover rounded-md mx-auto hover:opacity-90 transition-opacity"
                  />
                  <h3 className="text-lg font-medium text-blue-300 mt-2 line-clamp-2">{p.name}</h3>
                  <Link
                    to={`/product/${p.id}`}
                    className="mt-3 inline-block px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === "piercing")
              .map((p) => (
                <div
                  key={p.id}
                  className="bg-black p-4 rounded-lg shadow-lg border-2 border-blue-800 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-48 object-cover rounded-md mx-auto hover:opacity-90 transition-opacity"
                  />
                  <h3 className="text-lg font-medium text-blue-300 mt-2 line-clamp-2">{p.name}</h3>
                  <Link
                    to={`/product/${p.id}`}
                    className="mt-3 inline-block px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300"
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
};

export default ProductPage;