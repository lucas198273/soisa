import CategorySection from "../CategorySection/CategorySection"

export default function Service() {
  const categories = ["tattoo", "piercing"]; // apenas as categorias válidas

  return (
    <section className="bg-black py-20 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-white mb-12">
        Artes Desenvolvidas
      </h2>

      {categories.map((category) => (
        <CategorySection key={category} category={category as "tattoo" | "piercing"} />
      ))}

      <footer className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Tatuador • Todos os direitos reservados
      </footer>
    </section>
  );
}
