'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, User, ShoppingBag, Menu, Plus } from 'lucide-react';
import { useMenu } from '@/app/layout';

const Header = () => {
  const { toggleMenu } = useMenu();

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
  );
};

export default Header;