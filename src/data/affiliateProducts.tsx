// src/data/affiliateProducts.ts

export interface Product {
  title: string;
  asin: string;
  affiliateTag: string;
  imageUrl: string;
  customText?: string;
}

export const tattooProducts: Product[] = [
  {
    title: "Cadeira para Dentista, Tatuador e Podólogo - Fábrica",
    asin: "B0D8WNH5JZ",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/41ze0-MNsLL.__AC_SX300_SY300_QL70_ML2_.jpg",
    customText: "Cadeira ergonômica ideal para profissionais de tatuagem e podologia.",
  },
  {
    title: "Michelangelo Tatuador - Sarah Hall (Livro)",
    asin: "8520917712",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/91nE0iUqd2L._SY522_.jpg",
    customText: "Livro sobre Michelangelo e suas influências artísticas na tatuagem.",
  },
  {
    title: "Estúdio Portátil para Tatuador - Maleta Organizadora",
    asin: "B0CB1W4TRM",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/413hpTA2luL.__AC_SX300_SY300_QL70_ML2_.jpg",
    customText: "Maleta portátil para organizar seu material de tatuagem com praticidade.",
  },
];
