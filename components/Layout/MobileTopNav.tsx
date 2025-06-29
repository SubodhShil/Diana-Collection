'use client';

import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/components/UI/SearchBar';

const MobileTopNav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-3 h-14 mt-2 mb-2">
        {/* Left: Logo */}
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

        {/* Center: Search Bar */}
        <div className="flex-1 mx-4">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default MobileTopNav;