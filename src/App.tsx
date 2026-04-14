import { useMemo, useState } from 'react';
import Navigation from './Components/Navigation';
import ProductList from './Components/ProductList';
import type { Product } from './Components/product'; // Correct import for Product interface
// Correct import for Product interface
import Search from './Components/Search';

// Mock product data as requested
const products: Product[] = [ // Explicitly type the products array
  {
    id: 1, name: 'Classic Leather Wallet', price: 75, category: 'Accessories', rating: 4.7,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2xhc3NpYyUyMExlYXRoZXIlMjBXYWxsZXR8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 2, name: 'Wireless Bluetooth Headphones', price: 250, category: 'Electronics', rating: 4.5,
    image: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2lyZWxlc3MlMjBCbHVldG9vdGglMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww'
  },
  {
    id: 3, name: 'Organic Cotton T-Shirt', price: 25, category: 'Apparel', rating: 4.2,
    image: 'https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3JnYW5pYyUyMENvdHRvbiUyMFQtU2hpcnR8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 4, name: 'Minimalist Wrist Watch', price: 120, category: 'Accessories', rating: 4.8,
    image: 'https://images.unsplash.com/photo-1773414753637-2738750cfbb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWluaW1hbGlzdCUyMFdyaXN0JTIwV2F0Y2h8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 5, name: '4K Ultra HD Monitor', price: 400, category: 'Electronics', rating: 4.6,
    image: 'https://plus.unsplash.com/premium_photo-1669380425564-6e1a281a4d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NEslMjBVbHRyYSUyMEhEJTIwTW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 6, name: 'Stylish Running Shoes', price: 110, category: 'Footwear', rating: 4.4,
    image: 'https://images.unsplash.com/photo-1611080027147-a1a0b6e05168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3R5bGlzaCUyMFJ1bm5pbmclMjBTaG9lc3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 7, name: 'Gourmet Coffee Beans', price: 22, category: 'Groceries', rating: 4.9,
    image: 'https://plus.unsplash.com/premium_photo-1671399374947-feee46d4388a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R291cm1ldCUyMENvZmZlZSUyMEJlYW5zfGVufDB8fDB8fHww'
  },
  {
    id: 8, name: 'Ergonomic Office Chair', price: 350, category: 'Furniture', rating: 4.3,
    image: 'https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RXJnb25vbWljJTIwT2ZmaWNlJTIwQ2hhaXJ8ZW58MHx8MHx8fDA%3D'
  },
];

// Automatically derive categories from the product data
const categories = ['All', 'Furniture', 'Groceries', 'Footwear', 'Electronics', 'Apparel', 'Accessories', 'Kids'];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('default');

  const filteredAndSortedProducts = useMemo(() => {
    let result = products
      .filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(product =>
        selectedCategory === 'All' ? true : product.category === selectedCategory
      );

    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [searchTerm, selectedCategory, sortOption]);

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Our Products</h1>
        <p className="text-center text-gray-600 mb-8">Browse our collection of high-quality items.</p>

        {/* Filters and Search Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-grow">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="default">Sort by</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Rating: High to Low</option>
            </select>
          </div>
        </div>

        {filteredAndSortedProducts.length > 0 ? (
          <ProductList products={filteredAndSortedProducts} />
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No products match your criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
