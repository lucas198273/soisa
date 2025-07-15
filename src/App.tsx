// src/App.tsx
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
import PiercingSection from "./components/PiercingSection/PiercingSection";
import AboutTattooArtistBZ from "./components/AboutTattooArtistBZ/AboutTattooArtistBZ";
import AboutTattooArtistSoisa from "./components/AboutTattooArtistSoisa/AboutTattooArtistSoisa";
import ProductDetailPage from "./pages/ProductDetailPage";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Amazon from "./pages/Amazon";

function AppContent() {
  const { items, total, toggleCart } = useCart();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onCartClick={() => toggleCart(true)} cartItemCount={items.length} />

      {/* Scroll automático para topo em mudança de rota */}
      <ScrollToTopOnRouteChange />

      {/* Botão para voltar ao topo manualmente */}
      <ScrollTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Soisa Tattoo Studio | Tatuagens e Piercings Profissionais</title>
                <meta name="description" content="Estúdio de tatuagem e piercing com profissionais experientes. Agende sua sessão com nossos artistas." />
                <meta name="keywords" content="tatuagem, piercing, estúdio, betim, soisa, tatuadores" />
              </Helmet>
              <main className="pt-20 min-h-screen flex flex-col">
                <Hero />
                <AboutTattooArtistSoisa />
                <section className="bg-white py-10">
                  <CategorySection category="tattoo" />
                </section>
                <AboutTattooArtistBZ />
                <section className="bg-white py-10">
                  <CategorySection category="bz" />
                </section>
                <AboutPiercer />
                <section className="bg-white">
                  <PiercingSection category="piercing" />
                </section>
                <ProductInfoSection />
                <SocialMediaSection />
              </main>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/afiliados" element={<Amazon />} />
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
    <HelmetProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}
