import FilterMenu from "../components/storeFront/FilterMenu";
import ProductClient from "./productClient";

const ProductsPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">PAGE - Products</h1>

      <FilterMenu />
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <ProductClient />
      </section>
    </div>
  );
};

export default ProductsPage;
