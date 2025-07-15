import { Helmet, HelmetProvider } from "react-helmet-async";
import AffiliateCardList from "../components/AffiliateCardList/AffiliateCardList";

export default function Amazon() {
  return (
    <HelmetProvider>
      <main className="min-h-screen bg-black/95 pt-24 pb-12 px-4">
        <Helmet>
          <title>Produtos para Tatuagem na Amazon | Soisa Tattoo</title>
          <meta
            name="description"
            content="Confira os melhores produtos para tatuagem na Amazon. Kits, tintas e acessórios para tatuadores profissionais e amadores."
          />
          <meta
            name="keywords"
            content="tatuagem, kit tatuagem, tinta para tatuagem, acessórios tatuagem, Amazon afiliados"
          />
          <link rel="canonical" href="https://seusite.com.br/amazon" />
          <meta property="og:title" content="Produtos para Tatuagem na Amazon | Soisa Tattoo" />
          <meta
            property="og:description"
            content="Confira os melhores produtos para tatuagem na Amazon. Kits, tintas e acessórios para tatuadores profissionais e amadores."
          />
          <meta
            property="og:image"
            content="https://seusite.com.br/imagens/capa-tatuagem.jpg"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://seusite.com.br/amazon" />
        </Helmet>

        <section className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white drop-shadow mb-2">
            Produtos para Tatuagem em Oferta na Amazon
          </h1>
          <p className="text-gray-300">
            Aproveite estas ofertas exclusivas e apoie nosso estúdio comprando pelos nossos links.
          </p>
        </section>

        <section className="max-w-6xl mx-auto">
          <AffiliateCardList />
        </section>
      </main>
    </HelmetProvider>
  );
}
