'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, User, Menu, Search } from 'lucide-react';

interface MobileBottomNavProps {
  onMenuToggle: () => void;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onMenuToggle }) => {
  const pathname = usePathname();

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <Home size={24} />,
      href: '/',
    },
    {
      id: 'categories',
      label: 'Categories',
      icon: <LayoutGrid size={24} />,
      href: '/categories',
    },
    {
      id: 'search',
      label: 'Search',
      icon: <Search size={24} />,
      href: '/search',
    },
    {
      id: 'account',
      label: 'Account',
      icon: <User size={24} />,
      href: '/account',
    },
    {
      id: 'menu',
      label: 'Menu',
      icon: <Menu size={24} />,
      onClick: onMenuToggle,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          if (item.onClick) {
            return (
              <button
                key={item.id}
                onClick={item.onClick}
                className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                  isActive ? 'text-black' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div
                  className={`transition-transform ${
                    isActive ? 'scale-110' : 'scale-100'
                  }`}
                >
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
              <div
                className={`transition-transform ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
              >
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