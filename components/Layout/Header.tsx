'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, User, ShoppingBag, Menu, Plus } from 'lucide-react';
import { useMenu } from '@/app/layout';
import { useState, useEffect } from 'react';

const Header = () => {
  const { toggleMenu } = useMenu();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <header
        className={`transition-all duration-300 ${isScrolled
            ? 'bg-white/90 backdrop-blur-sm shadow-lg'
            : 'bg-white'
          }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
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
                onClick={toggleMenu}
                className="flex items-center space-x-2"
              >
                <Menu size={24} />
                <span className="text-sm font-medium">MENU</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;