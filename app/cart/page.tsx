'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
  inStock: boolean;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Organic Cotton Baby Onesie',
      price: 24.99,
      originalPrice: 29.99,
      image: '/api/placeholder/300/400',
      size: '6M',
      color: 'White',
      quantity: 2,
      inStock: true
    },
    {
      id: 2,
      name: 'Women\'s Elegant Dress',
      price: 89.99,
      image: '/api/placeholder/300/400',
      size: 'M',
      color: 'Navy Blue',
      quantity: 1,
      inStock: true
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'welcome10') {
      setAppliedPromo('WELCOME10');
      setPromoCode('');
    } else {
      alert('Invalid promo code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedPromo ? subtotal * 0.1 : 0;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl lg:text-3xl font-bold text-black mb-2">
              Shopping Cart
            </h1>
            <p className="text-gray-600">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="px-4 py-8 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {cartItems.length > 0 ? (
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Cart Items</h2>
                    
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                          {/* Product Image */}
                          <div className="flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="rounded-lg object-cover"
                            />
                          </div>
                          
                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium text-black truncate">{item.name}</h3>
                            <div className="mt-1 text-sm text-gray-500">
                              <p>Size: {item.size} • Color: {item.color}</p>
                              <p className={item.inStock ? 'text-green-600' : 'text-red-600'}>
                                {item.inStock ? 'In Stock' : 'Out of Stock'}
                              </p>
                            </div>
                            
                            {/* Price */}
                            <div className="mt-2 flex items-center space-x-2">
                              <span className="text-lg font-semibold text-black">${item.price}</span>
                              {item.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                              )}
                            </div>
                          </div>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            >
                              -
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            >
                              +
                            </button>
                          </div>
                          
                          {/* Remove Button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                            title="Remove item"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="mt-8 lg:mt-0">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                  
                  {/* Promo Code */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Promo Code
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code"
                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-black"
                      />
                      <button
                        onClick={applyPromoCode}
                        className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {appliedPromo && (
                      <p className="mt-2 text-sm text-green-600">✓ {appliedPromo} applied (10% off)</p>
                    )}
                  </div>
                  
                  {/* Price Breakdown */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Checkout Button */}
                  <button className="w-full mt-6 bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                    Proceed to Checkout
                  </button>
                  
                  {/* Continue Shopping */}
                  <Link 
                    href="/categories"
                    className="block w-full mt-3 text-center border-2 border-black text-black py-3 px-4 rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
                  >
                    Continue Shopping
                  </Link>
                  
                  {/* Free Shipping Notice */}
                  {subtotal < 50 && (
                    <p className="mt-4 text-sm text-gray-600 text-center">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Empty Cart */
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🛒</div>
              <h2 className="text-2xl font-semibold text-black mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
              </p>
              <div className="space-y-4">
                <Link 
                  href="/categories"
                  className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Start Shopping
                </Link>
                <div className="text-sm text-gray-500">
                  Discover our latest collections and trending items
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}