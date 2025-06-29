'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/components/UI/Button';
import SearchBar from '@/components/UI/SearchBar';

const HeroSection = () => {
  const router = useRouter();

  const handleExploreCollections = () => {
    router.push('/categories');
  };

  const handleShopBabyKids = () => {
    router.push('/categories?filter=baby-kids');
  };
  return (
    <section className="relative bg-white min-h-[70vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Shapes - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute top-10 right-20 w-80 h-80 bg-gray-100 opacity-30 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-gray-200 opacity-20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-gray-300 opacity-15 rounded-full"></div>
      </div>

      <div className="w-full px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="mb-4 lg:mb-6">
                <span className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-black text-white rounded-full text-xs lg:text-sm font-medium">
                  ✨ Premium Fashion
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-semibold text-black mb-4 lg:mb-6 leading-tight">
                Elevate Your Style With
                <span className="block font-bold">
                  Bold Fashion
                </span>
              </h1>
              
              <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover thoughtfully curated collections that celebrate every moment of family life. 
                From premium baby essentials to stylish family wear.
              </p>

              <div className="flex flex-col gap-3 lg:flex-row lg:gap-4 justify-center lg:justify-start mb-6 lg:mb-8">
                <button 
                  onClick={handleExploreCollections}
                  className="w-full lg:w-auto bg-black text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors touch-manipulation"
                >
                  Explore Collections →
                </button>
                <button 
                  onClick={handleShopBabyKids}
                  className="w-full lg:w-auto border-2 border-black text-black px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-medium hover:bg-black hover:text-white transition-colors touch-manipulation"
                >
                  Shop Baby & Kids
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-black">★★★★★</span>
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Premium Materials</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Grid */}
            <div className="relative order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-3 lg:gap-4 h-[300px] lg:h-[500px]">
                {/* Large featured image */}
                <div className="col-span-1 row-span-2 bg-gray-100 rounded-xl lg:rounded-3xl shadow-lg overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center mb-2 lg:mb-4 mx-auto">
                        <svg className="w-5 h-5 lg:w-8 lg:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <p className="text-xs lg:text-sm font-medium">Featured Collection</p>
                    </div>
                  </div>
                </div>
                
                {/* Top right */}
                <div className="bg-gray-200 rounded-xl lg:rounded-3xl shadow-lg overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-lg lg:text-2xl mb-1 lg:mb-2">👶</div>
                      <p className="text-xs font-medium">Baby Essentials</p>
                    </div>
                  </div>
                </div>
                
                {/* Bottom right */}
                <div className="bg-gray-300 rounded-xl lg:rounded-3xl shadow-lg overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-lg lg:text-2xl mb-1 lg:mb-2">👕</div>
                      <p className="text-xs font-medium">Family Wear</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats - Hidden on mobile */}
              <div className="hidden lg:block absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">10K+</div>
                  <div className="text-xs text-gray-600">Happy Families</div>
                </div>
              </div>
              
              <div className="hidden lg:block absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">100%</div>
                  <div className="text-xs text-gray-600">Premium Cotton</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;