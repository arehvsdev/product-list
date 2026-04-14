import ProductItem from "./ProductItem";
import type { Product } from "./product"; // Import the Product interface
// Import the Product interface

interface ProductListProps {
    products: Product[]; // Define the type for the 'products' prop
}

function ProductList({ products }: Readonly<ProductListProps>) { // Apply the prop type
    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map(product => <ProductItem key={product.id} product={product} />)}
        </div>
    );
}

export default ProductList;