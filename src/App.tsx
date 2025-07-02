import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import SocialMediaSection from "./components/SocialMidia/SocialMIdia";
import ProductInfoSection from "./components/ProductInfoSection/ProductInfoSection";
import { CartProvider, useCart } from "../contexts/CartContext";
import Cart from "./components/Cart/Cart";
import ProductPage from "./pages/ProductPage";
import AboutPiercer from "./components/AboutPiercer/AboutPiercer";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import CategorySection from "./components/CategorySection/CategorySection";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange/ScrollToTopOnRouteChange";


// dentro do componente AppContent
function AppContent() {
  const { items, total, toggleCart } = useCart();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col ">
      <Header onCartClick={() => toggleCart(true)} cartItemCount={items.length} />

      {/* Scroll automático para topo em mudança de rota */}
      <ScrollToTopOnRouteChange />

      {/* Botão para voltar ao topo manualmente */}
      <ScrollTop />

      <Routes>
        <Route
          path="/"
          element={
            <main className="pt-20 min-h-screen flex flex-col">
              <Hero />
                 <section>
                  <CategorySection category="tattoo" />
                </section>
              <AboutPiercer />
               <section>
                  <CategorySection category="piercing" />
                </section>
              <ProductInfoSection />
              <SocialMediaSection />
            </main>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>

      <Footer />

      <Cart
        key={`${items.length}-${total.toFixed(2)}`}
        onClose={() => toggleCart(false)}
      />
    </div>
  );
}


export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}
