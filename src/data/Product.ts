// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
  imageUrl: string;
  notes: string[];
  category: "tattoo" | "piercing"; // Adicionando a propriedade category
}

export const products: Product[] = [
  // --- Tattoos ---
  {
    id: "tattoo1",
    name: "Tatuagem Blackwork",
    description: "Traços fortes em preto sólido, estilo impactante.",
    price: 250,
    available: true,
    imageUrl: "/assets/blackwork/blk1.jpeg",
    notes: ["Preto sólido", "Design geométrico", "Impactante"],
    category: "tattoo",
  },
  {
    id: "tattoo2",
    name: "Tatuagem Fineline",
    description: "Estilo delicado com traços finos e detalhados.",
    price: 200,
    available: true,
    imageUrl: "/assets/fineline/fnl10.jpeg",
    notes: ["Traços finos", "Detalhes minimalistas", "Elegante"],
    category: "tattoo",
  },

  // --- Piercings ---
  {
    id: "piercing1",
    name: "Piercing no Nariz",
    description: "Argola ou ponto de luz discreto.",
    price: 60,
    available: true,
    imageUrl: "/assets/blackwork/blk1.jpeg",
    notes: ["Cicatrização rápida", "Material hipoalergênico"],
    category: "piercing",
  },
  {
    id: "piercing2",
    name: "Piercing no Umbigo",
    description: "Joia curva com brilho ou detalhe.",
    price: 80,
    available: true,
    imageUrl: "/assets/piercings/umbigo.jpg",
    notes: ["Muito procurado", "Requer cuidado pós"],
    category: "piercing",
  },
  {
    id: "piercing3",
    name: "Piercing na Sobrancelha",
    description: "Estilo moderno e marcante.",
    price: 70,
    available: true,
    imageUrl: "/assets/piercings/sobrancelha.jpg",
    notes: ["Estilo alternativo", "Visual forte"],
    category: "piercing",
  },
  {
    id: "piercing4",
    name: "Piercing no Tragus",
    description: "Pequeno e discreto, ótimo para quem ama detalhe.",
    price: 65,
    available: true,
    imageUrl: "/assets/piercings/tragus.jpg",
    notes: ["Joias pequenas", "Estética sutil"],
    category: "piercing",
  },
  {
    id: "piercing5",
    name: "Piercing no Septo",
    description: "Visual marcante com diversas opções de argola.",
    price: 90,
    available: true,
    imageUrl: "/assets/piercings/septo.jpg",
    notes: ["Popular", "Opções de joias variadas"],
    category: "piercing",
  },
  {
    id: "piercing6",
    name: "Piercing no Lóbulo",
    description: "Clássico furo com joias variadas.",
    price: 50,
    available: true,
    imageUrl: "/assets/piercings/lobulo.jpg",
    notes: ["Básico", "Joia simples ou alargador"],
    category: "piercing",
  },
  {
    id: "piercing7",
    name: "Piercing Industrial",
    description: "Dois furos unidos por uma única barra.",
    price: 100,
    available: true,
    imageUrl: "/assets/piercings/industrial.jpg",
    notes: ["Estilo alternativo", "Tempo de cicatrização maior"],
    category: "piercing",
  },
  {
    id: "piercing8",
    name: "Piercing no Rook",
    description: "Posição especial no ouvido interno.",
    price: 85,
    available: true,
    imageUrl: "/assets/piercings/rook.jpg",
    notes: ["Exclusivo", "Design diferenciado"],
    category: "piercing",
  },
  {
    id: "piercing9",
    name: "Piercing na Cartilagem",
    description: "Furo lateral superior da orelha.",
    price: 70,
    available: true,
    imageUrl: "/assets/piercings/cartilagem.jpg",
    notes: ["Estilo discreto", "Cicatrização lenta"],
    category: "piercing",
  },
  {
    id: "piercing10",
    name: "Piercing Labret",
    description: "Posicionado abaixo do lábio inferior.",
    price: 90,
    available: true,
    imageUrl: "/assets/piercings/labret.jpg",
    notes: ["Diferenciado", "Visual ousado"],
    category: "piercing",
  },
];