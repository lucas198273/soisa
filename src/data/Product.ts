// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  description?: string;
  price?: number;
  available?: boolean;
  imageUrl: string;
  notes?: string[];
  category: "tattoo" | "piercing";
}

export const products: Product[] = [
  // --- Tattoos ---
  {
    id: "tattoo1",
    name: "Tatuagem 1",
    imageUrl: "/assets/soisa/img-s1.webp",
    category: "tattoo",
  },
  {
    id: "tattoo2",
    name: "Tatuagem 2",
    imageUrl: "/assets/soisa/img-s2.webp",
    category: "tattoo",
  },
  {
    id: "tattoo3",
    name: "Tatuagem 3",
    imageUrl: "/assets/soisa/img-s3.webp",
    category: "tattoo",
  },
  {
    id: "tattoo4",
    name: "Tatuagem 4",
    imageUrl: "/assets/soisa/img-s4.webp",
    category: "tattoo",
  },
  {
    id: "tattoo5",
    name: "Tatuagem 5",
    imageUrl: "/assets/soisa/img-s5.webp",
    category: "tattoo",
  },
  {
    id: "tattoo6",
    name: "Tatuagem 6",
    imageUrl: "/assets/soisa/img-s6.webp",
    category: "tattoo",
  },
  {
    id: "tattoo7",
    name: "Tatuagem 7",
    imageUrl: "/assets/soisa/img-s7.webp",
    category: "tattoo",
  },
  {
    id: "tattoo8",
    name: "Tatuagem 8",
    imageUrl: "/assets/soisa/img-s8.webp",
    category: "tattoo",
  },
  {
    id: "tattoo9",
    name: "Tatuagem 9",
    imageUrl: "/assets/soisa/img-s9.webp",
    category: "tattoo",
  },
  {
    id: "tattoo10",
    name: "Tatuagem 10",
    imageUrl: "/assets/soisa/img-s10.webp",
    category: "tattoo",
  },
  {
    id: "tattoo11",
    name: "Tatuagem 11",
    imageUrl: "/assets/soisa/img-s11.webp",
    category: "tattoo",
  },

  // --- Piercings ---
  {
    id: "piercing1",
    name: "Piercing no Nariz",
    description: "Argola ou ponto de luz discreto.",
    price: 60,
    available: true,
    imageUrl: "/assets/sol/img-sol-12.webp",
    notes: ["Cicatrização rápida", "Material hipoalergênico"],
    category: "piercing",
  },
  {
    id: "piercing2",
    name: "Piercing no Umbigo",
    description: "Joia curva com brilho ou detalhe.",
    price: 80,
    available: true,
    imageUrl: "/assets/sol/img-sol-2.webp",
    notes: ["Muito procurado", "Requer cuidado pós"],
    category: "piercing",
  },
  {
    id: "piercing3",
    name: "Piercing na Sobrancelha",
    description: "Estilo moderno e marcante.",
    price: 70,
    available: true,
    imageUrl: "/assets/sol/img-sol-3.webp",
    notes: ["Estilo alternativo", "Visual forte"],
    category: "piercing",
  },
  {
    id: "piercing4",
    name: "Piercing no Tragus",
    description: "Pequeno e discreto, ótimo para quem ama detalhe.",
    price: 65,
    available: true,
    imageUrl: "/assets/sol/img-sol-4.webp",
    notes: ["Joias pequenas", "Estética sutil"],
    category: "piercing",
  },
  {
    id: "piercing5",
    name: "Piercing no Septo",
    description: "Visual marcante com diversas opções de argola.",
    price: 90,
    available: true,
    imageUrl: "/assets/sol/img-sol-5.webp",
    notes: ["Popular", "Opções de joias variadas"],
    category: "piercing",
  },
  {
    id: "piercing6",
    name: "Piercing no Lóbulo",
    description: "Clássico furo com joias variadas.",
    price: 50,
    available: true,
    imageUrl: "/assets/sol/img-sol-6.webp",
    notes: ["Básico", "Joia simples ou alargador"],
    category: "piercing",
  },
  {
    id: "piercing7",
    name: "Piercing Industrial",
    description: "Dois furos unidos por uma única barra.",
    price: 100,
    available: true,
    imageUrl: "/assets/sol/img-sol-7.webp",
    notes: ["Estilo alternativo", "Tempo de cicatrização maior"],
    category: "piercing",
  },
  {
    id: "piercing8",
    name: "Piercing no Rook",
    description: "Posição especial no ouvido interno.",
    price: 85,
    available: true,
    imageUrl: "/assets/sol/img-sol-8.webp",
    notes: ["Exclusivo", "Design diferenciado"],
    category: "piercing",
  },
  {
    id: "piercing9",
    name: "Piercing na Cartilagem",
    description: "Furo lateral superior da orelha.",
    price: 70,
    available: true,
    imageUrl: "/assets/sol/img-sol-9.webp",
    notes: ["Estilo discreto", "Cicatrização lenta"],
    category: "piercing",
  },
  {
    id: "piercing10",
    name: "Piercing Labret",
    description: "Posicionado abaixo do lábio inferior.",
    price: 90,
    available: true,
    imageUrl: "/assets/sol/img-sol-10.webp",
    notes: ["Diferenciado", "Visual ousado"],
    category: "piercing",
  },
  {
    id: "piercing11",
    name: "Piercing Helix Duplo",
    description: "Dois furos na cartilagem com joias combinadas.",
    price: 95,
    available: true,
    imageUrl: "/assets/sol/img-sol-11.webp",
    notes: ["Estilo moderno", "Muito procurado"],
    category: "piercing",
  },  {
    id: "piercing12",
    name: "Piercing no Nariz",
    description: "Argola ou ponto de luz discreto.",
    price: 60,
    available: true,
    imageUrl: "/assets/sol/img-sol-1.webp",
    notes: ["Cicatrização rápida", "Material hipoalergênico"],
    category: "piercing",
  },
];
