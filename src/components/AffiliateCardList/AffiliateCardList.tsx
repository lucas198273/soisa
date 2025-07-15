import { tattooProducts } from "../../data/affiliateProducts";
import AffiliateCard from "../AffiliateCard/AffiliateCard";

export default function AffiliateCardList() {
  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {tattooProducts.map((product) => (
          <AffiliateCard key={product.asin} product={product} />
        ))}
      </div>
    </div>
  );
}
