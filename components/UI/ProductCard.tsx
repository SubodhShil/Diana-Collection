'use client';

import { useState } from 'react';
import Button from './Button';

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

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  onAddToWishlist?: (productId: string) => void;
  onQuickView?: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onAddToWishlist,
  onQuickView,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
    onAddToWishlist?.(product.id);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div 
      className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden soft-shadow hover:shadow-lg smooth-transition card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden rounded-t-2xl md:rounded-t-3xl">
        {/* Placeholder Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
            <p className="text-xs font-medium">{product.name}</p>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-black text-white text-xs font-medium px-2 md:px-3 py-1 rounded-full">
              ✨ New
            </span>
          )}
          {product.isSale && discountPercentage > 0 && (
            <span className="bg-gray-800 text-white text-xs font-medium px-2 md:px-3 py-1 rounded-full">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className={`
            absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center smooth-transition soft-shadow
            ${isWishlisted 
              ? 'bg-black text-white' 
              : 'bg-white/90 text-gray-600 hover:bg-white hover:text-black'
            }
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Quick View Button */}
        <div className={`
          absolute inset-0 bg-black/10 flex items-center justify-center smooth-transition
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}>
          <button
            onClick={() => onQuickView?.(product.id)}
            className="px-4 md:px-6 py-2 bg-white text-black rounded-full hover:bg-gray-100 smooth-transition font-medium soft-shadow text-sm md:text-base"
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 md:p-6">
        {/* Category */}
        <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="font-medium text-black mb-3 line-clamp-2 group-hover:text-gray-700 smooth-transition text-sm md:text-base">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-base md:text-lg font-semibold text-black">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart?.(product.id)}
          className={`
            w-full py-2 md:py-3 rounded-full font-medium smooth-transition text-sm md:text-base
            ${isHovered 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'bg-gray-100 text-black hover:bg-gray-200'
            }
          `}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;