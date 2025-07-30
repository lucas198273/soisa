import { Helmet, HelmetProvider } from "react-helmet-async";
import AffiliateCardList from "../components/AffiliateCardList/AffiliateCardList";
import { affiliateProducts } from "../data/affiliateProducts";

export default function Amazon() {
  return (
    <HelmetProvider>
      <main className="min-h-screen bg-black/95 pt-24 pb-12 px-4">
        <Helmet>
          <title>Produtos para Tatuagem e Quadros na Amazon | Soisa Tattoo</title>
          <meta
            name="description"
            content="Descubra produtos para tatuagem (kits, tintas, acessórios) e quadros de pintura na Amazon. Ofertas exclusivas para tatuadores e decoração de ambientes."
          />
          <meta
            name="keywords"
            content="tatuagem, kit tatuagem, tinta para tatuagem, acessórios tatuagem, Amazon afiliados, quadros de pintura, decoração, arte, oferta tatuagem, decoração moderna"
          />
          <link rel="canonical" href="https://seusite.com.br/amazon" />
          <meta http-equiv="content-language" content="pt-BR" />
          <meta
            property="og:title"
            content="Produtos para Tatuagem e Quadros na Amazon | Soisa Tattoo"
          />
          <meta
            property="og:description"
            content="Descubra produtos para tatuagem (kits, tintas, acessórios) e quadros de pintura na Amazon. Ofertas exclusivas para tatuadores e decoração de ambientes."
          />
          <meta
            property="og:image"
            content="https://seusite.com.br/imagens/capa-tatuagem-quadros.jpg"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://seusite.com.br/amazon" />
        </Helmet>

        <section className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white drop-shadow mb-2">
            Produtos para Tatuagem e Decoração em Oferta na Amazon
          </h1>
          <p className="text-gray-300">
            Aproveite estas ofertas exclusivas e apoie nosso estúdio comprando pelos nossos links.
          </p>
        </section>

        <section className="max-w-6xl mx-auto" id="affiliate-products">
          <AffiliateCardList products={affiliateProducts} />
        </section>
      </main>
    </HelmetProvider>
  );
}