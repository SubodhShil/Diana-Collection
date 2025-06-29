'use client';

import { useState } from 'react';

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const accountSections = [
    { name: 'Profile', icon: '👤', href: '/account/profile' },
    { name: 'Orders', icon: '📦', href: '/account/orders' },
    { name: 'Wishlist', icon: '❤️', href: '/account/wishlist' },
    { name: 'Addresses', icon: '📍', href: '/account/addresses' },
    { name: 'Payment Methods', icon: '💳', href: '/account/payment' },
    { name: 'Notifications', icon: '🔔', href: '/account/notifications' },
    { name: 'Help & Support', icon: '💬', href: '/account/support' },
    { name: 'Settings', icon: '⚙️', href: '/account/settings' },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-black mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to access your account</p>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={() => setIsLoggedIn(true)}
                className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Sign In
              </button>
              <button className="w-full border border-gray-300 text-black py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Create Account
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <button className="text-sm text-gray-600 hover:text-black transition-colors">
                Continue as Guest
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">JD</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-black">John Doe</h1>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Account Sections */}
      <div className="px-4 py-6">
        <div className="space-y-4">
          {accountSections.map((section, index) => (
            <div key={section.name} className="bg-white rounded-lg border border-gray-200">
              <button className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{section.icon}</span>
                  <span className="font-medium text-black">{section.name}</span>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sign Out */}
      <div className="px-4 pb-8">
        <button 
          onClick={() => setIsLoggedIn(false)}
          className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}