'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { X, Home, Grid3X3, User, Heart, Package, MessageCircle, Settings, Search } from 'lucide-react';
import SearchBar from '@/components/UI/SearchBar';

interface UnifiedMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const UnifiedMenu: React.FC<UnifiedMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const mainNavigation = [
    { name: 'Home', href: '/', icon: Home, isComponent: true },
    { name: 'Categories', href: '/categories', icon: Grid3X3, isComponent: true },
    { name: 'Baby & Kids', href: '/baby-kids', icon: '👶', isComponent: false },
    { name: 'Women', href: '/women', icon: '👩', isComponent: false },
    { name: 'Men', href: '/men', icon: '👨', isComponent: false },
    { name: 'Accessories', href: '/accessories', icon: '👜', isComponent: false },
  ];

  const userActions = [
    { name: 'Account', href: '/account', icon: User },
    { name: 'Wishlist', href: '/wishlist', icon: Heart },
    { name: 'Orders', href: '/orders', icon: Package },
    { name: 'Support', href: '/support', icon: MessageCircle },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ease-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-all duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } sm:max-w-sm lg:max-w-md`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-title"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 lg:p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DC</span>
              </div>
              <h2 id="menu-title" className="text-lg lg:text-xl font-semibold text-black">
                Diana Collection
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black/20"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Search Section */}
          <div className="p-4 lg:p-6 border-b border-gray-50 bg-gray-50/50">
            <div className="mb-2">
              <span className="text-sm font-medium text-gray-600">Search Products</span>
            </div>
            <SearchBar />
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Main Navigation */}
            <div className="p-4 lg:p-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Shop Collections
              </h3>
              <nav className="space-y-1">
                {mainNavigation.map((item) => {
                  const isActive = pathname === item.href;
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className={`group flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-black text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-black active:bg-gray-200'
                      }`}
                    >
                      <div className="mr-4 flex-shrink-0">
                        {item.isComponent ? (
                          <item.icon 
                            size={20} 
                            className={`transition-colors ${
                              isActive ? 'text-white' : 'text-gray-500 group-hover:text-black'
                            }`} 
                          />
                        ) : (
                          <span className="text-lg">{item.icon as string}</span>
                        )}
                      </div>
                      <span className="flex-1">{item.name}</span>
                      {isActive && (
                        <div className="w-2 h-2 bg-white rounded-full ml-2" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* User Actions */}
            <div className="p-4 lg:p-6 border-t border-gray-100">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Your Account
              </h3>
              <nav className="space-y-1">
                {userActions.map((item) => {
                  const isActive = pathname === item.href;
                  const IconComponent = item.icon;
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className={`group flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-black active:bg-gray-100'
                      }`}
                    >
                      <IconComponent 
                        size={18} 
                        className={`mr-4 flex-shrink-0 transition-colors ${
                          isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'
                        }`} 
                      />
                      <span className="flex-1">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 lg:p-6 border-t border-gray-100 bg-gray-50/50">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>© 2024 Diana Collection</span>
              <span className="px-2 py-1 bg-gray-200 rounded-full text-gray-600 font-medium">
                v1.0
              </span>
            </div>
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-400">
                Premium family fashion for every occasion
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnifiedMenu;