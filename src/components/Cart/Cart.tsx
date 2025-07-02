import React from "react";
import { useCart } from "../../../contexts/CartContext";
import CartItemRow from "./CartRow";

interface Props {
  onClose: () => void;
}

const Cart: React.FC<Props> = ({ onClose }) => {
  const { items, total, error, removeItem, clearCart, isCartOpen } = useCart();

  const handleWhatsAppClick = () => {
    if (items.length === 0) return;

    const itensFormatados = items
      .map((item) => {
        const precoUnitario = item.price.toFixed(2).replace(".", ",");
        const subtotal = (item.price * item.quantity).toFixed(2).replace(".", ",");
        return `• ${item.name}\n  Quantidade: ${item.quantity}\n  Valor unitário: R$ ${precoUnitario}\n  Subtotal: R$ ${subtotal}`;
      })
      .join("\n\n");

    const totalFormatado = total.toFixed(2).replace(".", ",");

    const mensagem = `
Olá! 😊 Gostaria de finalizar meu pedido com os seguintes produtos:\n
${itensFormatados}

💰 Total geral: R$ ${totalFormatado}

Por favor, poderia me confirmar a disponibilidade, formas de pagamento e opções de entrega?
    `.trim();

    const link = `https://wa.me/5531971705728?text=${encodeURIComponent(mensagem)}`;
    window.open(link, "_blank");
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-black text-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <header className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-[#005eff]">Meu Carrinho</h2>
          <button onClick={onClose} className="text-[#ff7b00] hover:text-red-500 text-2xl">
            ✕
          </button>
        </header>

        {error && items.length === 0 && (
          <div className="bg-red-100 text-red-800 px-6 py-3 mx-6 mt-6 rounded-lg">
            {error}
          </div>
        )}

        {items.length === 0 ? (
          <p className="p-6 text-center text-gray-400 text-lg">Seu carrinho está vazio.</p>
        ) : (
          <>
            <div className="p-4">
              {items.map((item) => (
                <CartItemRow key={item.id} item={item} onRemove={removeItem} />
              ))}
            </div>

            <div className="flex items-center justify-between p-6 border-t border-gray-700 bg-black">
              <span className="font-semibold text-xl">Total:</span>
              <span className="text-[#ff7b00] font-bold text-2xl">R$ {total.toFixed(2)}</span>
            </div>

            <div className="flex gap-4 px-6 pb-6">
              <button
                onClick={clearCart}
                className="flex-1 bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700 text-white font-medium disabled:opacity-50 transition-colors"
                disabled={items.length === 0}
              >
                Limpar
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="flex-1 bg-[#005eff] text-white px-6 py-2 rounded-lg hover:bg-[#0040c1] font-medium disabled:opacity-50 transition-colors"
                disabled={items.length === 0}
              >
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
