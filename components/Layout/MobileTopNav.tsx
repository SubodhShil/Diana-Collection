'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const MobileTopNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-sm'
          : 'bg-white border-b border-gray-200'
        }`}
    >
      <div className="flex items-center justify-center px-3 h-16">
        {/* Centered Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Diana Collection"
              width={140}
              height={40}
              className="h-16 w-auto"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MobileTopNav;