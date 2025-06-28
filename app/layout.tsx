import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Crimson_Text } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diana Collection - Curated Collections for the Modern Family",
  description: "Discover premium baby & kids fashion, women's, men's and accessories. Thoughtfully curated collections with timeless design and premium quality fabrics.",
  keywords: "baby fashion, kids clothing, family fashion, premium clothing, luxury children's wear",
  authors: [{ name: "Diana Collection" }],
  openGraph: {
    title: "Diana Collection - Premium Family Fashion",
    description: "Curated Collections for the Modern Family",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorantGaramond.variable} ${crimsonText.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
