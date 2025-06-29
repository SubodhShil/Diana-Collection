'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, User, ShoppingBag, Menu, Plus } from 'lucide-react';
import SearchBar from '@/components/UI/SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Baby & Kids', href: '/baby-kids' },
    { name: 'Women', href: '/women' },
    { name: 'Men', href: '/men' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="bg-white sticky top-3 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="text-sm font-medium flex items-center">
              <Plus size={16} className="mr-1" />
              Contact Us
            </Link>
          </div>

          <div className="flex-1 flex justify-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Diana Collection"
                width={180}
                height={50}
                priority
              />
            </Link>
          </div>

          <div className="flex items-center justify-end space-x-4">
            <Link href="/cart">
              <ShoppingBag size={24} />
            </Link>
            <Link href="/account">
              <User size={24} />
            </Link>
            <Link href="/search">
              <Search size={24} />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2"
            >
              <Menu size={24} />
              <span className="text-sm font-medium">MENU</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="mb-4 lg:hidden">
              <SearchBar />
            </div>
            <nav className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-black hover:text-gray-600 hover:bg-gray-50 smooth-transition font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
    </header>
  );
};

export default Header;