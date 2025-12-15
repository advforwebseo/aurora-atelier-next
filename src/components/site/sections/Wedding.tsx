import { ProductCard } from "../../shared/ProductCard";
import { weddingSection } from "./mocks/mocks";

export const Wedding = () => {
  return (
    <section className="container py-12">
      <div className="mb-12 flex flex-col items-center gap-4">
        <h1 className="text-sm">Handcrafted Jewelry</h1>
        <h2 className="text-5xl leading-15 font-semibold">Wedding & Engagement</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        {weddingSection.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
          />
        ))}
      </div>
    </section>
  );
};
