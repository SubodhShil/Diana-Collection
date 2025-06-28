'use client';

import Button from '@/components/UI/Button';
import SearchBar from '@/components/UI/SearchBar';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-cream to-white min-h-[80vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-accent rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-accent rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-light text-primary mb-6 leading-tight">
              Curated Collections for the
              <span className="block brand-text gold-accent font-semibold">
                Modern Family
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover premium quality fashion that grows with your family. 
              From timeless baby essentials to sophisticated adult wear, 
              every piece is thoughtfully curated for lasting elegance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="primary" size="lg">
                Discover Premium Collections
              </Button>
              <Button variant="outline" size="lg">
                Shop Baby & Kids
              </Button>
            </div>

            {/* Mobile Search */}
            <div className="lg:hidden max-w-md mx-auto">
              <SearchBar />
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-elegant aspect-[4/5]">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-sm font-medium">Hero Image Placeholder</p>
                  <p className="text-xs mt-1">Premium Family Fashion</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-elegant">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-xs text-gray-600">Premium Brands</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-elegant">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">★ 4.9</div>
                <div className="text-xs text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;