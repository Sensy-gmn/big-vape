import FilterMenu from "../../components/storeFront/FilterMenu";
import ProductClient from "./productClient";

export default function ProductsPage() {
    return (
        <div className="container mx-auto">
            <FilterMenu />
            <section className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                <ProductClient />
            </section>
        </div>
    );
}
