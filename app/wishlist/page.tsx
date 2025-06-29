'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/UI/ProductCard';

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<any[]>([
    {
      id: '1',
      name: 'Organic Cotton Baby Onesie',
      price: 24.99,
      originalPrice: 29.99,
      category: 'Baby & Kids',
      image: '/api/placeholder/300/400',
      isNew: true,
      isSale: true,
      rating: 4.8,
      reviews: 124,
      inStock: true
    },
    {
      id: '2',
      name: 'Women\'s Elegant Dress',
      price: 89.99,
      category: 'Women',
      image: '/api/placeholder/300/400',
      isNew: false,
      isSale: false,
      rating: 4.6,
      reviews: 89,
      inStock: true
    }
  ]);

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleAddToCart = (productId: string) => {
    console.log('Added to cart:', productId);
    // Add cart functionality here
  };

  const handleQuickView = (productId: string) => {
    console.log('Quick view:', productId);
    // Add quick view functionality here
  };

  const handleMoveToCart = (productId: string) => {
    handleAddToCart(productId);
    handleRemoveFromWishlist(productId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl lg:text-3xl font-bold text-black mb-2">
              My Wishlist
            </h1>
            <p className="text-gray-600">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>
        </div>
      </div>

      {/* Wishlist Content */}
      <div className="px-4 py-8 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {wishlistItems.length > 0 ? (
            <>
              {/* Actions Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setWishlistItems([])}
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    Clear All
                  </button>
                  <button className="text-sm text-gray-600 hover:text-black transition-colors">
                    Share Wishlist
                  </button>
                </div>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-black">
                  <option>Sort by: Recently Added</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name: A to Z</option>
                </select>
              </div>
              
              {/* Wishlist Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {wishlistItems.map((product) => (
                  <div key={product.id} className="relative">
                    <ProductCard
                      product={product}
                      onAddToCart={handleAddToCart}
                      onAddToWishlist={() => handleRemoveFromWishlist(product.id)}
                      onQuickView={handleQuickView}
                    />
                    
                    {/* Wishlist Actions */}
                    <div className="absolute top-2 right-2 flex flex-col space-y-1">
                      <button
                        onClick={() => handleRemoveFromWishlist(product.id)}
                        className="bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-shadow"
                        title="Remove from wishlist"
                      >
                        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                      </button>
                    </div>
                    
                    {/* Move to Cart Button */}
                    <button
                      onClick={() => handleMoveToCart(product.id)}
                      className="absolute bottom-2 left-2 right-2 bg-black text-white py-2 px-3 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Move to Cart
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Continue Shopping */}
              <div className="mt-12 text-center">
                <Link 
                  href="/categories"
                  className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          ) : (
            /* Empty Wishlist */
            <div className="text-center py-16">
              <div className="text-6xl mb-6">💝</div>
              <h2 className="text-2xl font-semibold text-black mb-4">Your wishlist is empty</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Save items you love by clicking the heart icon. We'll keep them safe here for you.
              </p>
              <div className="space-y-4">
                <Link 
                  href="/categories"
                  className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Start Shopping
                </Link>
                <div className="text-sm text-gray-500">
                  Discover our latest collections and trending items
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}