import HeroSection from '@/components/Homepage/HeroSection';
import CategoryGrid from '@/components/Homepage/CategoryGrid';
import NewArrivals from '@/components/Homepage/NewArrivals';
import TrustSection from '@/components/Homepage/TrustSection';
import Newsletter from '@/components/Homepage/Newsletter';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Mobile-optimized sections */}
      <div className="lg:hidden">
        <HeroSection />
        <CategoryGrid />
        <NewArrivals />
        <TrustSection />
        <Newsletter />
      </div>
      
      {/* Desktop sections */}
      <div className="hidden lg:block">
        <HeroSection />
        <CategoryGrid />
        <NewArrivals />
        <TrustSection />
        <Newsletter />
      </div>
    </div>
  );
}

const metadata = {
  title: 'Diana Collection - Premium Family Fashion',
  description: 'Discover curated collections for the modern family. Premium baby & kids fashion, women\'s and men\'s clothing, and accessories with timeless elegance.',
};
