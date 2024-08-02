import CategoryClient from "./categoryClient";

const ProductsPage = () => {
  return (
    <div className="container mx-auto">
      <section className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <CategoryClient />
      </section>
    </div>
  );
};

export default ProductsPage;
