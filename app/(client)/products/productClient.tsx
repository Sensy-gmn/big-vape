import CardProduct from "../../components/storeFront/CardProduct";
import { getCategoryNameByProductCategoryId } from "../../services/categoryService"; // Import the function
import { getProducts } from "../../services/productService";

// MAPPING SUR TOUS LES PRODUITS
const ProductClient = async () => {
    const products = await getProducts();

    // Fetch category names for each product
    const productsWithCategoryNames = await Promise.all(
        products.map(async (product) => {
            const categoryName = await getCategoryNameByProductCategoryId(
                product.category_id
            );
            return { ...product, categoryName };
        })
    );

    return (
        <>
            {productsWithCategoryNames.map((product) => (
                <CardProduct
                    id={product.id}
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    category={product?.categoryName ?? ""} // Use the category name
                    image={product.image ?? ""}
                />
            ))}
        </>
    );
};

export default ProductClient;
