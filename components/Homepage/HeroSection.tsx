'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const router = useRouter();

  const handleExploreCollections = () => {
    router.push('/categories');
  };

  const handleShopBabyKids = () => {
    router.push('/categories?filter=baby-kids');
  };

  const featuredProducts = [
    {
      id: 1,
      name: 'Organic Cotton Baby Onesie',
      image: 'https://images.unsplash.com/photo-1622047548828-eeedfe970361?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      headline: 'Gentle on Their Skin',
      subline: 'Discover our 100% organic cotton collection for babies.',
    },
    {
      id: 2,
      name: 'Women\'s Elegant Dress',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      headline: 'Effortless Elegance',
      subline: 'Timeless designs for the modern woman. Perfect for any occasion.',
    },
    {
      id: 3,
      name: 'Men\'s Classic Shirt',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      headline: 'Sophisticated & Comfortable',
      subline: 'Upgrade your wardrobe with our premium menswear collection.',
    },
    {
      id: 4,
      name: 'Family Matching Set',
      image: 'https://images.unsplash.com/photo-1603285756065-f56453dcaf0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      headline: 'Create Lasting Memories',
      subline: 'Shop our exclusive matching outfits for the entire family.',
    }
  ];

  // Memoize featuredProducts to prevent recreation on every render
  const memoizedProducts = useCallback(() => featuredProducts, []);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
  }, [featuredProducts.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1
    );
  }, [featuredProducts.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-screen bg-gray-100 overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-full">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full transform translate-y-4'
                }`}
              >
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium tracking-wider uppercase">
                    Diana Collection
                  </span>
                </div>
                <h1
                  className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 tracking-tight leading-tight"
                  style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
                >
                  {product.headline}
                </h1>
                <p
                  className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 font-light leading-relaxed"
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
                >
                  {product.subline}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={handleExploreCollections}
                    className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    Discover Collection
                  </button>
                  <button
                    onClick={handleShopBabyKids}
                    className="px-8 py-4 border-2 border-white/80 text-white font-medium rounded-full backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 ${
                index === currentIndex 
                  ? 'bg-white scale-125 shadow-lg shadow-white/30' 
                  : 'bg-white/50 hover:bg-white/80 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 right-8 z-20 text-white/80 text-sm font-medium backdrop-blur-sm bg-black/20 px-3 py-2 rounded-full">
          {currentIndex + 1} / {featuredProducts.length}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;