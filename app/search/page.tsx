'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/UI/ProductCard';
import Link from 'next/link';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState<any[]>([]);

  // Mock search results - in a real app, this would be an API call
  const mockProducts = [
    {
      id: 1,
      name: 'Organic Cotton Baby Onesie',
      price: 24.99,
      originalPrice: 29.99,
      category: 'Baby & Kids',
      image: '/api/placeholder/300/400',
      isNew: true,
      isSale: true,
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Women\'s Elegant Dress',
      price: 89.99,
      category: 'Women',
      image: '/api/placeholder/300/400',
      isNew: false,
      isSale: false,
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: 'Men\'s Classic Shirt',
      price: 59.99,
      category: 'Men',
      image: '/api/placeholder/300/400',
      isNew: true,
      isSale: false,
      rating: 4.7,
      reviews: 156
    }
  ];

  useEffect(() => {
    const performSearch = () => {
      setIsLoading(true);
      
      // Simulate API delay
      setTimeout(() => {
        if (query) {
          // Filter products based on search query
          const filteredResults = mockProducts.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filteredResults);
        } else {
          setResults([]);
        }
        setIsLoading(false);
      }, 500);
    };

    performSearch();
  }, [query]);

  const handleAddToCart = (productId: string) => {
    console.log('Added to cart:', productId);
    // Add cart functionality here
  };

  const handleAddToWishlist = (productId: string) => {
    console.log('Added to wishlist:', productId);
    // Add wishlist functionality here
  };

  const handleQuickView = (productId: string) => {
    console.log('Quick view:', productId);
    // Add quick view functionality here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl lg:text-3xl font-bold text-black mb-2">
              Search Results
            </h1>
            {query && (
              <p className="text-gray-600">
                Showing results for: <span className="font-semibold text-black">"{query}"</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="px-4 py-8 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
              <span className="ml-3 text-gray-600">Searching...</span>
            </div>
          ) : results.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  {results.length} {results.length === 1 ? 'result' : 'results'} found
                </p>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-black">
                  <option>Sort by: Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Customer Rating</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {results.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onAddToWishlist={handleAddToWishlist}
                    onQuickView={handleQuickView}
                  />
                ))}
              </div>
            </>
          ) : query ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-xl font-semibold text-black mb-2">No results found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any products matching "{query}". Try different keywords or browse our categories.
              </p>
              <div className="space-y-3">
                <Link 
                  href="/categories"
                  className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Browse Categories
                </Link>
                <div className="text-sm text-gray-500">
                  Popular searches: baby clothes, women dresses, men shirts, accessories
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-xl font-semibold text-black mb-2">Start your search</h2>
              <p className="text-gray-600">
                Enter a keyword to find products in our collection.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}