// src/pages/ProductDetailPage.tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { products } from "../data/Product"; // Ajuste o caminho se necessário

const ProductDetailPage = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedMaterials, setSelectedMaterials] = useState<Record<string, string>>({});
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (id) {
      const product = products.find((p) => p.id === id);
      setSelectedProduct(product || null);
    }
  }, [id]);

  const handleMaterialSelect = (type: string) => {
    if (selectedProduct && selectedProduct.materials) {
      setSelectedMaterials((prev) => ({ ...prev, [selectedProduct.id]: type }));
    }
  };

  const handleAddToCart = (product: any) => {
    const selectedType = selectedMaterials[product.id] || (product.materials?.length === 1 ? product.materials[0].type : "");
    const selectedMaterial = product.materials?.find((m: any) => m.type === selectedType) || (product.materials?.length === 1 ? product.materials[0] : null);
    const uniqueId = `${product.id}${selectedMaterial ? `-${selectedMaterial.type}` : ""}`;
    const itemName = `${product.name}${selectedMaterial ? ` - ${selectedMaterial.type}` : ""}`;
    const itemPrice = selectedMaterial ? selectedMaterial.price : product.price;

    if (product.available && itemPrice) {
      addItem({
        id: uniqueId,
        name: itemName,
        price: itemPrice,
        imageUrl: product.imageUrl,
      });
      toast.success(`${itemName} adicionado ao carrinho!`, {
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
    const selectedType = selectedMaterials[product.id] || (product.materials?.length === 1 ? product.materials[0].type : "");
    const selectedMaterial = product.materials?.find((m: any) => m.type === selectedType) || (product.materials?.length === 1 ? product.materials[0] : null);
    const itemName = `${product.name}${selectedMaterial ? ` - ${selectedMaterial.type}` : ""}`;
    const price = selectedMaterial ? selectedMaterial.price.toFixed(2) : product.price?.toFixed(2) || "a combinar";
    const message = product.category === "tattoo" || product.category === "bz"
      ? `Olá! Gostaria de um orçamento/inspiração para "${itemName}".`
      : `Olá! Tenho interesse no serviço "${itemName}" por R$${price}.`;
    const whatsappLink = `https://wa.me/5531971705728?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
    toast.info(`Mensagem enviada para o WhatsApp sobre ${itemName}!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const isTattoo = (product: any) => product.category === "tattoo" || product.category === "bz";

  if (!selectedProduct) {
    return <div className="text-center py-10 text-white">Carregando detalhes do produto...</div>;
  }

  return (
    <div className="relative pt-24 bg-black text-white min-h-screen">
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
            {selectedProduct.description && <p className="text-blue-200">{selectedProduct.description}</p>}
            {!isTattoo(selectedProduct) && selectedProduct.materials && (
              <div className="mb-4">
                <h4 className="text-lg font-medium text-blue-300 mb-2">Escolha o Material:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.materials.map((material: any) => (
                    <button
                      key={material.type}
                      onClick={() => handleMaterialSelect(material.type)}
                      className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-semibold bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-md hover:bg-gradient-to-r hover:from-[#00b4d8] hover:to-[#009ac1] hover:shadow-xl transition-all duration-300 ${selectedMaterials[selectedProduct.id] === material.type ? "ring-2 ring-[#00b4d8]" : ""}`}
                    >
                      {material.type}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {!isTattoo(selectedProduct) && (
              <p className="text-xl font-bold text-yellow-400">
                R$ {selectedProduct.materials?.find((m: any) => m.type === selectedMaterials[selectedProduct.id])?.price?.toFixed(2) || selectedProduct.price?.toFixed(2) || "a combinar"}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              {!isTattoo(selectedProduct) && selectedProduct.available !== undefined && (
                <>
                  <button
                    onClick={() => handleAddToCart(selectedProduct)}
                    className={`px-6 py-2 font-semibold rounded-full transition bg-gradient-to-b from-blue-800 to-blue-900 text-white shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:shadow-xl ${!selectedProduct.available || (selectedProduct.materials?.length && !selectedMaterials[selectedProduct.id]) ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={!selectedProduct.available || (selectedProduct.materials?.length && !selectedMaterials[selectedProduct.id])}
                  >
                    Adicionar ao Carrinho
                  </button>
                  <button
                    onClick={() => handleWhatsApp(selectedProduct)}
                    className={`px-6 py-2 rounded-lg font-semibold bg-gradient-to-b from-green-800 to-green-900 text-white shadow-md hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 hover:shadow-xl transition-all duration-300`}
                  >
                    {selectedProduct.available ? "Pedir pelo WhatsApp" : "Encomendar pelo WhatsApp"}
                  </button>
                </>
              )}
              {isTattoo(selectedProduct) && (
                <button
                  onClick={() => handleWhatsApp(selectedProduct)}
                  className={`px-6 py-2 rounded-lg font-semibold bg-gradient-to-b from-green-800 to-green-900 text-white shadow-md hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 hover:shadow-xl transition-all duration-300`}
                >
                  Consultar Valor no WhatsApp
                </button>
              )}
            </div>
            <button
              onClick={() => navigate(-1)}
              className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300"
            >
              Voltar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;