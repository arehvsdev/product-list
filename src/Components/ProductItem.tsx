import type { Product } from "./product"; // Import the Product interface
// Import the Product interface

interface ProductItemProps {
    product: Product; // Define the type for the 'product' prop
}

function ProductItem({ product }: Readonly<ProductItemProps>) { // Apply the prop type
    const handleAddToCart = () => {
        console.log(`Added ${product.name} to cart.`);
    };

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200">
                <img style={{ height: "300px" }}
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-4 flex flex-col flex-1">
                <div className="flex-1">
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-500">{product.category}</p>
                        <p className="text-sm text-gray-500">{product.rating} ⭐</p>
                    </div>
                    <h3 className="mt-1 text-base font-semibold text-gray-800">
                        <a href="#"> {/* You can replace # with a link to the product page */}
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {product.name}
                        </a>
                    </h3>
                </div>
                <div className="flex flex-col justify-end mt-4">
                    <p className="text-lg font-bold text-gray-900">${product.price}</p>
                    <button
                        onClick={handleAddToCart}
                        className="mt-4 w-full relative z-10 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;