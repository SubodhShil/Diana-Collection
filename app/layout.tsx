'use client';

import { useState, createContext, useContext } from "react";
import { Sulphur_Point, Hubot_Sans, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import MobileTopNav from "@/components/Layout/MobileTopNav";
import MobileBottomNav from "@/components/Layout/MobileBottomNav";
import UnifiedMenu from "@/components/Layout/UnifiedMenu";

// Create context for menu state
interface MenuContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

const sulphurPoint = Sulphur_Point({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const hubotSans = Hubot_Sans({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuContextValue = {
    isMenuOpen,
    toggleMenu,
    closeMenu,
  };

  return (
    <html lang="en">
      <body className={hubotSans.className}>
        <MenuContext.Provider value={menuContextValue}>
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <MobileTopNav />
            
            {/* Main Content with proper spacing */}
            <main className="pt-14 pb-16 min-h-screen bg-gray-50">
              {children}
            </main>
            
            <MobileBottomNav onMenuToggle={toggleMenu} />
          </div>

          {/* Unified Menu - Works on all screen sizes */}
          <UnifiedMenu 
            isOpen={isMenuOpen} 
            onClose={closeMenu} 
          />
        </MenuContext.Provider>
      </body>
    </html>
  );
}
