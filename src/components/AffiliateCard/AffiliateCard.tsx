import type { Product } from "../../data/affiliateProducts";

export default function AffiliateCard({ product }: { product: Product }) {
  const { title, imageUrl, customText, asin, affiliateTag } = product;
  const productUrl = `https://www.amazon.com.br/dp/${asin}?tag=${affiliateTag}`;

  return (
    <article className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center transition hover:shadow-xl hover:scale-105 duration-300">
      <a href={productUrl} target="_blank" rel="noopener noreferrer" className="mb-4 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-52 object-contain rounded-xl"
          loading="lazy"
        />
      </a>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      {customText && (
        <p className="text-sm text-gray-600 mb-3">{customText}</p>
      )}
      <a href={productUrl} target="_blank" rel="noopener noreferrer">
        <button className="bg-[#00b4d8] hover:bg-[#009ac1] text-white px-5 py-2 rounded-full shadow">
          Ver na Amazon
        </button>
      </a>
    </article>
  );
}
