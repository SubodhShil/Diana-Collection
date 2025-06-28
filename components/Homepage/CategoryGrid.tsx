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
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: 'baby-kids',
      name: 'Baby & Kids',
      description: 'Premium essentials for little ones',
      href: '/baby-kids',
      featured: true,
    },
    {
      id: 'women',
      name: 'Women',
      description: 'Sophisticated styles for modern mothers',
      href: '/women',
      featured: false,
    },
    {
      id: 'men',
      name: 'Men',
      description: 'Refined fashion for contemporary fathers',
      href: '/men',
      featured: false,
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Curated pieces to complete every look',
      href: '/accessories',
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-font text-3xl md:text-4xl font-light text-primary mb-4">
            Discover Our
            <span className="brand-text gold-accent font-semibold"> Collections</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From precious first moments to timeless family memories, 
            explore our carefully curated categories designed for every stage of life.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group block"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={`
                relative overflow-hidden rounded-2xl smooth-transition
                ${category.featured 
                  ? 'md:col-span-2 lg:col-span-2 h-80' 
                  : 'h-64'
                }
                ${hoveredCategory === category.id 
                  ? 'shadow-elegant-hover transform -translate-y-1' 
                  : 'shadow-elegant'
                }
              `}>
                {/* Background */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br smooth-transition
                  ${category.featured
                    ? 'from-accent/10 to-accent/20'
                    : 'from-gray-100 to-gray-200'
                  }
                  ${hoveredCategory === category.id ? 'scale-105' : 'scale-100'}
                `}>
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 right-4 w-16 h-16 border border-accent rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border border-accent rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  {/* Category Icon */}
                  <div className="mb-4">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center smooth-transition
                      ${category.featured 
                        ? 'gold-accent-bg' 
                        : 'bg-white shadow-md'
                      }
                      ${hoveredCategory === category.id ? 'scale-110' : 'scale-100'}
                    `}>
                      {category.id === 'baby-kids' && (
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                      )}
                      {category.id === 'women' && (
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
                        </svg>
                      )}
                      {category.id === 'men' && (
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm8 7h-6v12h-4v-7h-4v7H2V9h6V7h12v2z"/>
                        </svg>
                      )}
                      {category.id === 'accessories' && (
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className={`
                      font-semibold mb-2 smooth-transition
                      ${category.featured 
                        ? 'text-2xl text-primary' 
                        : 'text-xl text-primary'
                      }
                      ${hoveredCategory === category.id ? 'gold-accent' : ''}
                    `}>
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className={`
                    absolute top-6 right-6 smooth-transition
                    ${hoveredCategory === category.id 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform translate-x-2'
                    }
                  `}>
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;