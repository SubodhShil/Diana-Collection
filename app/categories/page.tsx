import CategoryGrid from '@/components/Homepage/CategoryGrid';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden px-4 py-6">
        <h1 className="text-2xl font-bold text-black mb-2">Shop by Category</h1>
        <p className="text-gray-600">Discover our curated collections</p>
      </div>
      
      {/* Desktop Header */}
      <div className="hidden lg:block px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-4">Shop by Category</h1>
          <p className="text-xl text-gray-600">Discover our curated collections for the modern family</p>
        </div>
      </div>
      
      {/* Category Grid */}
      <CategoryGrid />
      
      {/* Additional Mobile-Optimized Categories */}
      <div className="lg:hidden px-4 pb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="text-2xl mb-2">🔥</div>
            <h3 className="font-semibold text-black">Trending</h3>
            <p className="text-sm text-gray-600">Hot picks</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="text-2xl mb-2">💎</div>
            <h3 className="font-semibold text-black">Premium</h3>
            <p className="text-sm text-gray-600">Luxury items</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold text-black">Sale</h3>
            <p className="text-sm text-gray-600">Best deals</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="text-2xl mb-2">⭐</div>
            <h3 className="font-semibold text-black">Featured</h3>
            <p className="text-sm text-gray-600">Staff picks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Categories - Diana Collection',
  description: 'Browse all categories and collections at Diana Collection. Find the perfect items for your family.',
};