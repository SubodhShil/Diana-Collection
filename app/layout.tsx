'use client';

import { useState } from "react";
import { Sulphur_Point, Hubot_Sans, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import MobileTopNav from "@/components/Layout/MobileTopNav";
import MobileBottomNav from "@/components/Layout/MobileBottomNav";
import MobileMenu from "@/components/Layout/MobileMenu";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <html lang="en">
      <body className={hubotSans.className}>
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
          
          <MobileBottomNav onMenuToggle={toggleMobileMenu} />
          
          {/* Mobile Menu Overlay */}
          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            onClose={closeMobileMenu} 
          />
        </div>
      </body>
    </html>
  );
}
