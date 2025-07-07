// src/data/products.ts
// ✅ Atualização da interface Product no arquivo: src/data/products.ts

export interface Product {
  id: string;
  name: string;
  description?: string;
  price?: number;
  available?: boolean;
  imageUrl: string;
  notes?: string[];
  category: "tattoo" | "piercing" | "bz";
  materials?: {
    type: string;
    price: number;
  }[];
}

export const products: Product[] = [

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

  // ...demais tatuagens (sem alterações)
  // INICIO BZ
    {  id: "tattoo12",
    name: "Tatuagem 1",
    imageUrl: "/assets/bz/img-bz-1.webp",
    category: "bz",
  },   
  {  id: "tattoo13",
    name: "Tatuagem 2",
    imageUrl: "/assets/bz/img-bz-2.webp",
    category: "bz",
  },
  {  id: "tattoo14",
    name: "Tatuagem 3",
    imageUrl: "/assets/bz/img-bz-3.webp",
    category: "bz",
  },{  id: "tattoo15",
    name: "Tatuagem 4",
    imageUrl: "/assets/bz/img-bz-4.webp",
    category: "bz",
  },{  id: "tattoo16",
    name: "Tatuagem 5",
    imageUrl: "/assets/bz/img-bz-5.webp",
    category: "bz",
  },{  id: "tattoo17",
    name: "Tatuagem 6",
    imageUrl: "/assets/bz/img-bz-6.webp",
    category: "bz",
  },{  id: "tattoo18",
    name: "Tatuagem 7",
    imageUrl: "/assets/bz/img-bz-7.webp",
    category: "bz",
  },{  id: "tattoo19",
    name: "Tatuagem 8",
    imageUrl: "/assets/bz/img-bz-8.webp",
    category: "bz",
  },{  id: "tattoo20",
    name: "Tatuagem 9",
    imageUrl: "/assets/bz/img-bz-9.webp",
    category: "bz",
  },{  id: "tattoo21",
    name: "Tatuagem 10",
    imageUrl: "/assets/bz/img-bz-10.webp",
    category: "bz",
  },
  // --- Piercings com múltiplos materiais ---
  {
    id: "piercing1",
    name: "Aplicação Personalizada",
  description: "Perfurações personalizadas próximas ao lóbulo.",
    available: true,
    imageUrl: "/assets/sol/img-sol-1.webp",
    notes: ["Joias pequenas", "Estética sutil"],
    category: "piercing",
    materials: [
    { type: "Aço cirúrgico", price: 80 },
      { type: "Joia decorada dourada aço PVD", price: 90 },
      { type: "Titânio", price: 100 }
    ]
  },  {
    id: "piercing2",
    name: "Piercing Umbigo",
    description: "Pequeno e discreto, ótimo para quem ama detalhe.",
    available: true,
    imageUrl: "/assets/sol/img-sol-2.webp",
    notes: ["Joias pequenas", "Estética sutil"],
    category: "piercing",
    materials: [
      { type: "Aço cirúrgico", price: 80 },
      { type: "Titânio", price: 90 }
    ]
  }, {
    id: "piercing3",
    name: "Aplicação Personalizada",
  description: "Perfurações personalizadas próximas ao lóbulo.",
    available: true,
    imageUrl: "/assets/sol/img-sol-3.webp",
    notes: ["Joias pequenas", "Estética sutil"],
    category: "piercing",
    materials: [
    { type: "Aço cirúrgico", price: 80 },
      { type: "Joia decorada dourada aço PVD", price: 90 },
      { type: "Titânio", price: 100 }
    ]
  },{
    id: "piercing4",
    name: "Piercing Microdermal",
    description: "Pequeno e discreto, ótimo para quem ama detalhe.",
    available: true,
    imageUrl: "/assets/sol/img-sol-4.webp",
    notes: ["Joias pequenas", "Estética sutil"],
    category: "piercing",
    materials: [
     

         { type: "Aço cirúrgico", price: 220 },
             { type: "Titânio", price: 220 }
    ]
  },{
    id: "piercing5",
    name: "Aplicação Personalizada",
    description: "Perfurações personalizadas próximas ao lóbulo.",
    available: true,
    imageUrl: "/assets/sol/img-sol-5.webp",
    notes: ["Joias pequenas", "Estética sutil"],
    category: "piercing",
    materials: [
    { type: "Aço cirúrgico", price: 80 },
      { type: "Joia decorada dourada aço PVD", price: 90 },
      { type: "Titânio", price: 100 }
    ]
  },{
    id: "piercing6",
    name: "Aplicação Personalizada",
    description: "Perfurações personalizadas próximas ao lóbulo.",
    available: true,
    imageUrl: "/assets/sol/img-sol-6.webp",
    notes: ["Joias pequenas", "Estética sutil"],
    category: "piercing",
    materials: [
    { type: "Aço cirúrgico", price: 80 },
      { type: "Joia decorada dourada aço PVD", price: 90 },
      { type: "Titânio", price: 100 }
    ]
  },{
    id: "piercing7",
     name: "Piercing Nostril",
  description: "Argola ou ponto de luz discreto, ideal para quem busca estilo com delicadeza.",
    available: true,
    imageUrl: "/assets/sol/img-sol-7.webp",
    notes: ["Joias pequenas", "Estética sutil"],
    category: "piercing",
    materials: [
     
      { type: "Aço cirúrgico", price: 80 },
      { type: "Joia decorada dourada aço PVD", price: 90 },
      { type: "Titânio", price: 100 }
    ]
  },{
    id: "piercing8",
name: "Aplicação Personalizada",
    description: "Perfurações personalizadas próximas ao lóbulo.",
    available: true,
    imageUrl: "/assets/sol/img-sol-8.webp",
    notes: ["Joias pequenas", "Estética sutil"],
    category: "piercing",
    materials: [
    { type: "Aço cirúrgico", price: 80 },
      { type: "Joia decorada dourada aço PVD", price: 90 },
      { type: "Titânio", price: 100 }
    ]
  },{
    id: "piercing9",
name: "Aplicação Personalizada",
    description: "Perfurações personalizadas próximas ao lóbulo.",
    available: true,
    imageUrl: "/assets/sol/img-sol-9.webp",
    notes: ["Joias pequenas", "Estética sutil"],
    category: "piercing",
    materials: [
     
    { type: "Aço cirúrgico", price: 80 },
      { type: "Joia decorada dourada aço PVD", price: 90 },
      { type: "Titânio", price: 100 }
    ]
  },


  {
    id: "piercing10",
    name: "Piercing Orelha Conch",
    description: "Perfuração Conch com joia decorada.",
    available: true,
    imageUrl: "/assets/sol/img-sol-10.webp",
    category: "piercing",
    materials: [
      
      { type: "Aço cirúrgico", price: 80 },
      { type: "Joia decorada dourada aço PVD", price: 90 },
      { type: "Titânio", price: 100 }
    ]
  },
  {
    id: "piercing11",
    name: "Aplicação Personalizada",
    description: "Perfurações personalizadas próximas ao lóbulo.",
    available: true,
    imageUrl: "/assets/sol/img-sol-11.webp",
    category: "piercing",
    materials: [
     
      { type: "Aço cirúrgico", price: 80 },
      { type: "Joia decorada dourada aço PVD", price: 90 },
      { type: "Titânio", price: 100 }
      
    ]
  },
   {
  id: "piercing12",
  name: "Piercing Nariz Nostril",
  description: "Argola ou ponto de luz discreto, ideal para quem busca estilo com delicadeza.",
  available: true,
  imageUrl: "/assets/sol/img-sol-12.webp",
  category: "piercing",
  materials: [
    
      { type: "Aço cirúrgico", price: 80 },
      { type: "Joia decorada dourada aço PVD", price: 90 },
      { type: "Titânio", price: 100 }
    
  ]
}
,
    {
    id: "piercing13",
    name: "Perfuração íntima",
    description: "Perfuração delicada em região íntima.",
    available: true,
    imageUrl: "/assets/sol/img-sol-13.jpeg",
    category: "piercing",
    materials: [
      { type: "Aço cirúrgico", price: 110 },
      { type: "Titânio", price: 110 }
    ]
  },
  // ...demais piercings (mantém o campo price ou converte para materials conforme desejar)
];

