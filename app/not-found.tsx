'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-6xl font-bold text-black mb-4">404</div>
          <h1 className="text-2xl font-semibold text-black mb-2">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="block w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Go Home
          </Link>
          
          <Link 
            href="/categories"
            className="block w-full border-2 border-black text-black py-3 px-6 rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
          >
            Browse Categories
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="block w-full text-gray-600 py-3 px-6 rounded-lg font-medium hover:text-black transition-colors"
          >
            Go Back
          </button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? <Link href="/account" className="text-black hover:underline">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  );
}