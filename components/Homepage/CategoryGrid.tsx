'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Category {
  id: string;
  name: string;
  description: string;
  href: string;
  featured: boolean;
  image?: string;
}

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: 'New Arrivals',
      description: 'Fresh styles for the season',
      itemCount: '50+ new items',
      featured: true,
      bgColor: 'bg-black',
      emoji: '✨',
    },
    {
      id: 2,
      name: 'Baby & Kids',
      description: 'Gentle essentials for little ones',
      itemCount: '200+ items',
      featured: false,
      bgColor: 'bg-gray-800',
      emoji: '👶',
    },
    {
      id: 3,
      name: 'Women',
      description: 'Elegant styles for modern mothers',
      itemCount: '150+ items',
      featured: false,
      bgColor: 'bg-gray-700',
      emoji: '👩',
    },
    {
      id: 4,
      name: 'Men',
      description: 'Sophisticated comfort for fathers',
      itemCount: '120+ items',
      featured: false,
      bgColor: 'bg-gray-600',
      emoji: '👨',
    },
    {
      id: 5,
      name: 'Accessories',
      description: 'Perfect finishing touches',
      itemCount: '80+ items',
      featured: false,
      bgColor: 'bg-gray-500',
      emoji: '👜',
    },
    {
      id: 6,
      name: 'Best Sellers',
      description: 'Customer favorites',
      itemCount: '30+ top picks',
      featured: false,
      bgColor: 'bg-gray-900',
      emoji: '⭐',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 mobile-px-4">
          <h2 className="text-responsive-3xl font-semibold text-black mb-4">
            Shop by Category
          </h2>
          <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
            Discover our thoughtfully curated collections designed for every member of your family
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mobile-px-4">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl soft-shadow smooth-transition cursor-pointer hover:scale-105 ${
                category.featured
                  ? 'lg:col-span-2 lg:row-span-1'
                  : ''
              } ${category.bgColor}`}
            >
              <div className={`p-6 md:p-8 h-full flex flex-col justify-between text-white ${
                category.featured ? 'min-h-[250px] md:min-h-[300px]' : 'min-h-[200px] md:min-h-[250px]'
              }`}>
                {/* Emoji Icon */}
                <div className="mb-4 md:mb-6">
                  <span className="text-3xl md:text-4xl">{category.emoji}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-white">
                    {category.name}
                  </h3>
                  <p className="text-sm md:text-base mb-3 md:mb-4 text-white/90">
                    {category.description}
                  </p>
                  <p className="text-xs md:text-sm font-medium text-white/80">
                    {category.itemCount}
                  </p>
                </div>

                {/* Arrow */}
                <div className="mt-4 md:mt-6 transform group-hover:translate-x-2 smooth-transition text-white">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Overlay shapes */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-8 h-8 md:w-12 md:h-12 bg-white/5 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 md:mt-12 mobile-px-4">
          <button className="btn-primary rounded-full px-6 md:px-8 py-3">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;