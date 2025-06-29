'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
      image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1924&auto=format&fit=crop',
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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  return (
    <section className="relative h-[85vh] min-h-[650px] bg-black text-white flex items-center justify-center text-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 w-full max-w-4xl text-center">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`transition-all duration-1000 ease-in-out ${index === currentIndex
                ? 'opacity-100'
                : 'opacity-0 absolute top-0 left-1/2 -translate-x-1/2 w-full'
              }`}
          >
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}
            >
              {product.headline}
            </h1>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto mb-8"
              style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
            >
              {product.subline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleExploreCollections}
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Collections
              </button>
              <button
                onClick={handleShopBabyKids}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Shop Baby & Kids
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {featuredProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;