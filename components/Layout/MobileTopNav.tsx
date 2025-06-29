'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SearchBar from '@/components/UI/SearchBar';

interface MobileTopNavProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const MobileTopNav: React.FC<MobileTopNavProps> = ({ onMenuToggle, isMenuOpen }) => {
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleSearchClick = () => {
    setShowSearchModal(true);
  };

  const handleWishlistClick = () => {
    router.push('/wishlist');
  };

  const handleCartClick = () => {
    router.push('/cart');
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4 h-14">
        {/* Left: Hamburger Menu */}
        <button
          onClick={onMenuToggle}
          className="p-2 -ml-2 text-black hover:text-gray-600 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Center: Logo */}
        <Link href="/" className="text-lg font-semibold text-black">
          Diana
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center space-x-1">
          {/* Search */}
          <button 
            onClick={handleSearchClick}
            className="p-2 text-black hover:text-gray-600 transition-colors"
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {/* Wishlist */}
          <button 
            onClick={handleWishlistClick}
            className="p-2 text-black hover:text-gray-600 transition-colors relative"
            aria-label="Wishlist"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart */}
          <button 
            onClick={handleCartClick}
            className="p-2 text-black hover:text-gray-600 transition-colors relative"
            aria-label="Shopping Cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 7H6L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
      
      {/* Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setShowSearchModal(false)}>
          <div className="bg-white p-4 m-4 mt-16 rounded-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Search Products</h3>
              <button 
                onClick={() => setShowSearchModal(false)}
                className="p-1 text-gray-500 hover:text-black"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <SearchBar />
            <div className="mt-4 text-sm text-gray-500">
              Popular: baby clothes, women dresses, men shirts, accessories
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default MobileTopNav;