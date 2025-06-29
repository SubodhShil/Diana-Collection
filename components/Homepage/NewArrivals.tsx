'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProductCard from '@/components/UI/ProductCard';
import Button from '@/components/UI/Button';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image?: string;
  isNew?: boolean;
  isSale?: boolean;
}

const NewArrivals = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const router = useRouter();

  const handleViewAllProducts = () => {
    router.push('/categories');
  };

  const sampleProducts: Product[] = [
    {
      id: '1',
      name: 'Organic Cotton Baby Onesie Set',
      price: 45.00,
      originalPrice: 55.00,
      category: 'Baby',
      isNew: true,
      isSale: true,
    },
    {
      id: '2',
      name: 'Elegant Toddler Dress Collection',
      price: 78.00,
      category: 'Kids',
      isNew: true,
    },
    {
      id: '3',
      name: 'Premium Cashmere Cardigan',
      price: 165.00,
      category: 'Women',
      isNew: true,
    },
    {
      id: '4',
      name: 'Classic Polo Shirt',
      price: 89.00,
      originalPrice: 110.00,
      category: 'Men',
      isNew: true,
      isSale: true,
    },
    {
      id: '5',
      name: 'Handcrafted Leather Baby Shoes',
      price: 95.00,
      category: 'Baby',
      isNew: true,
    },
    {
      id: '6',
      name: 'Designer Silk Scarf',
      price: 125.00,
      category: 'Accessories',
      isNew: true,
    },
    {
      id: '7',
      name: 'Merino Wool Kids Sweater',
      price: 68.00,
      category: 'Kids',
      isNew: true,
    },
    {
      id: '8',
      name: 'Luxury Maternity Dress',
      price: 145.00,
      category: 'Women',
      isNew: true,
    },
  ];

  const filters = [
    { id: 'all', name: 'All Items' },
    { id: 'baby', name: 'Baby' },
    { id: 'kids', name: 'Kids' },
    { id: 'women', name: 'Women' },
    { id: 'men', name: 'Men' },
    { id: 'accessories', name: 'Accessories' },
  ];

  const filteredProducts = activeFilter === 'all' 
    ? sampleProducts 
    : sampleProducts.filter(product => 
        product.category.toLowerCase() === activeFilter
      );

  const handleAddToCart = (productId: string) => {
    console.log('Added to cart:', productId);
  };

  const handleAddToWishlist = (productId: string) => {
    console.log('Added to wishlist:', productId);
  };

  const handleQuickView = (productId: string) => {
    console.log('Quick view:', productId);
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-4">
              ✨ Fresh Arrivals
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black mb-4">
            Best Sellers
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8">
            Discover our most loved pieces, carefully curated for 
            their exceptional quality and timeless appeal.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`
                  px-4 md:px-6 py-2 md:py-3 rounded-full text-sm font-medium smooth-transition soft-shadow
                  ${activeFilter === filter.id
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
              onQuickView={handleQuickView}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mb-12 md:mb-16">
          <button 
            onClick={handleViewAllProducts}
            className="btn-primary px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
          >
            View All Products →
          </button>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-black mb-2">500+</div>
              <div className="text-xs md:text-sm text-gray-600">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-black mb-2">50+</div>
              <div className="text-xs md:text-sm text-gray-600">Luxury Brands</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-black mb-2">10K+</div>
              <div className="text-xs md:text-sm text-gray-600">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-black mb-2">★ 4.9</div>
              <div className="text-xs md:text-sm text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;