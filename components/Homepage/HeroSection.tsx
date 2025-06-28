'use client';

import Button from '@/components/UI/Button';
import SearchBar from '@/components/UI/SearchBar';

const HeroSection = () => {
  return (
    <section className="relative bw-gradient min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 md:right-20 w-40 h-40 md:w-80 md:h-80 bg-gray-100 opacity-30 rounded-full"></div>
        <div className="absolute bottom-20 left-5 md:left-10 w-32 h-32 md:w-60 md:h-60 bg-gray-200 opacity-20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 md:w-40 md:h-40 bg-gray-300 opacity-15 rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 mobile-px-4">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-4">
                ✨ Premium Fashion
              </span>
            </div>
            
            <h1 className="text-responsive-4xl font-semibold text-black mb-6 leading-tight">
              Elevate Your Style With
              <span className="block font-bold">
                Bold Fashion
              </span>
            </h1>
            
            <p className="text-responsive-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover thoughtfully curated collections that celebrate every moment of family life. 
              From premium baby essentials to stylish family wear.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="btn-primary rounded-lg">
                Explore Collections →
              </button>
              <button className="btn-secondary rounded-lg">
                Shop Baby & Kids
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-600">
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
          <div className="relative order-1 lg:order-2 mobile-px-4">
            <div className="grid grid-cols-2 gap-3 md:gap-4 h-[400px] md:h-[500px]">
              {/* Large featured image */}
              <div className="col-span-1 row-span-2 bg-gray-100 rounded-2xl md:rounded-3xl soft-shadow overflow-hidden">
                <div className="h-full bg-gradient-to-br from-gray-800 to-black opacity-90 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <p className="text-xs md:text-sm font-medium">Featured Collection</p>
                  </div>
                </div>
              </div>
              
              {/* Top right */}
              <div className="bg-gray-200 rounded-2xl md:rounded-3xl soft-shadow overflow-hidden">
                <div className="h-full bg-gradient-to-br from-gray-600 to-gray-800 opacity-90 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-xl md:text-2xl mb-2">👶</div>
                    <p className="text-xs font-medium">Baby Essentials</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom right */}
              <div className="bg-gray-300 rounded-2xl md:rounded-3xl soft-shadow overflow-hidden">
                <div className="h-full bg-gradient-to-br from-gray-400 to-gray-600 opacity-90 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-xl md:text-2xl mb-2">👕</div>
                    <p className="text-xs font-medium">Family Wear</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 soft-shadow mobile-hidden">
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-black">10K+</div>
                <div className="text-xs text-gray-600">Happy Families</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 soft-shadow mobile-hidden">
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-black">100%</div>
                <div className="text-xs text-gray-600">Premium Cotton</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce mobile-hidden">
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;