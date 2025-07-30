import { Helmet } from "react-helmet-async";
import { type Product } from "../../data/affiliateProducts";
import AffiliateCard from "../AffiliateCard/AffiliateCard";

// Definição da interface para as props
interface AffiliateCardListProps {
  products: Product[]; // Prop obrigatória
}

const AffiliateCardList: React.FC<AffiliateCardListProps> = ({ products }) => {
  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {products.map((product) => (
          <div key={product.asin}>
            <Helmet>
              <title>{`${product.title} | Soisa Tattoo`}</title>
              <meta
                name="description"
                content={`${product.customText} Disponível na Amazon com desconto.`}
              />
              <meta
                property="og:title"
                content={`${product.title} | Soisa Tattoo`}
              />
              <meta
                property="og:description"
                content={`${product.customText} Disponível na Amazon.`}
              />
              <meta property="og:image" content={product.imageUrl} />
            </Helmet>
            <AffiliateCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiliateCardList;