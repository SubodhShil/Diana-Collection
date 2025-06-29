'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const HeroSection = () => {
  const router = useRouter();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Featured products for carousel
  const featuredProducts = [
    {
      id: 1,
      name: 'Organic Cotton Baby Onesie',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
      category: 'Baby Essentials'
    },
    {
      id: 2,
      name: 'Women\'s Elegant Dress',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop',
      category: 'Women\'s Fashion'
    },
    {
      id: 3,
      name: 'Men\'s Classic Shirt',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop',
      category: 'Men\'s Collection'
    },
    {
      id: 4,
      name: 'Kids Premium Outfit',
      image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=600&auto=format&fit=crop',
      category: 'Kids Fashion'
    },
    {
      id: 5,
      name: 'Family Matching Set',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=600&auto=format&fit=crop',
      category: 'Family Collection'
    },
    {
      id: 6,
      name: 'Luxury Accessories',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop',
      category: 'Accessories'
    }
  ];

  // Text animation sequence
  const textSequence = [
    { text: 'DIANA', duration: 2000, color: 'text-white' },
    { text: 'COLLECTION', duration: 2000, color: 'text-white' },
    { text: 'PREMIUM FASHION', duration: 2000, color: 'text-yellow-400' },
    { text: 'FOR MODERN FAMILIES', duration: 3000, color: 'text-white' }
  ];

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const scrolled = Math.max(0, -rect.top);
        setScrollY(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance product carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentProductIndex((prev) => (prev + 1) % featuredProducts.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isPaused, featuredProducts.length]);

  // Auto-advance text sequence
  useEffect(() => {
    if (!isPaused) {
      const timeout = setTimeout(() => {
        if (currentTextIndex < textSequence.length - 1) {
          setCurrentTextIndex(prev => prev + 1);
        } else {
          setShowCTA(true);
        }
      }, textSequence[currentTextIndex]?.duration || 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentTextIndex, isPaused, textSequence]);

  const handleExploreCollections = () => {
    router.push('/categories');
  };

  const handleShopBabyKids = () => {
    router.push('/categories?filter=baby-kids');
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Background Product Carousel */}
      <div className="absolute inset-0 z-0">
        <div 
          className="flex transition-transform duration-1000 ease-out h-full"
          style={{
            transform: `translateX(-${currentProductIndex * 100}%) translateY(${scrollY * 0.5}px)`,
            width: `${featuredProducts.length * 100}%`
          }}
        >
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="relative w-full h-full flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10" />
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="100vw"
              />
              {/* Product Info Overlay */}
              <div className="absolute bottom-8 right-8 z-20 text-white text-right opacity-60">
                <p className="text-sm font-light">{product.category}</p>
                <p className="text-lg font-medium">{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Parallax Background Texture */}
      <div 
        className="absolute inset-0 z-5 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)'
        }}
      />

      {/* Main Content Layer */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Typography */}
          <div className="mb-8 lg:mb-12">
            <h1 
              className={`text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold transition-all duration-1000 ease-out transform ${
                textSequence[currentTextIndex]?.color || 'text-white'
              }`}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0001})`,
                letterSpacing: '0.02em'
              }}
            >
              {textSequence[currentTextIndex]?.text || 'DIANA'}
            </h1>
            
            {/* Gold accent line */}
            <div 
              className="mx-auto mt-4 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-all duration-1000"
              style={{
                width: currentTextIndex >= 2 ? '200px' : '0px',
                transform: `translateY(${scrollY * 0.1}px)`
              }}
            />
          </div>

          {/* Subtitle */}
          <p 
            className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 lg:mb-12 font-light leading-relaxed transition-all duration-1000"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
              opacity: currentTextIndex >= 1 ? 1 : 0
            }}
          >
            Discover premium fashion that celebrates every moment of family life
          </p>

          {/* Call to Action */}
          <div 
            className={`transition-all duration-1000 transform ${
              showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transform: `translateY(${scrollY * 0.1}px) ${showCTA ? 'translateY(0)' : 'translateY(32px)'}`
            }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button 
                onClick={handleExploreCollections}
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="relative z-10">Explore Collections</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button 
                onClick={handleShopBabyKids}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Shop Baby & Kids
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-sm">Premium Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">25,000+ Happy Families</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex space-x-2">
          {textSequence.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= currentTextIndex ? 'bg-yellow-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Navigation Dots */}
      <div className="absolute bottom-8 right-8 z-40">
        <div className="flex flex-col space-y-2">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProductIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProductIndex ? 'bg-yellow-400 scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;