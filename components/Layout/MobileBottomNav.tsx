'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileBottomNavProps {
  onMenuToggle: () => void;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onMenuToggle }) => {
  const pathname = usePathname();
  
  const getCurrentLabel = () => {
    if (pathname === '/') return 'Home';
    if (pathname.includes('/baby-kids')) return 'Baby';
    if (pathname.includes('/women')) return 'Women';
    if (pathname.includes('/men')) return 'Men';
    if (pathname.includes('/accessories')) return 'Access';
    if (pathname.includes('/about')) return 'About';
    return 'Shop';
  };

  const navItems = [
    {
      id: 'categories',
      label: 'Categories',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7l2 2-2 2m2-2H9m10 7l2 2-2 2m2-2H9" />
        </svg>
      ),
      href: '/categories'
    },
    {
      id: 'current',
      label: getCurrentLabel(),
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      href: pathname,
      isActive: true
    },
    {
      id: 'account',
      label: 'Account',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      href: '/account'
    },
    {
      id: 'menu',
      label: 'Menu',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      onClick: onMenuToggle
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const isActive = item.isActive || pathname === item.href;
          
          if (item.onClick) {
            return (
              <button
                key={item.id}
                onClick={item.onClick}
                className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                  isActive ? 'text-black' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className={`transition-transform ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}>
                  {item.icon}
                </div>
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.href || '#'}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                isActive ? 'text-black' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className={`transition-transform ${
                isActive ? 'scale-110' : 'scale-100'
              }`}>
                {item.icon}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;