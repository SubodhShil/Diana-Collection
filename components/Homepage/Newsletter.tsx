'use client';

import { useState } from 'react';
import Button from '@/components/UI/Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const benefits = [
    'Early access to new collections',
    'Exclusive member-only discounts',
    'Style guides and parenting tips',
    'Seasonal lookbook previews',
  ];

  return (
    <section className="py-20 warm-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-sage rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-terracotta rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 border border-accent rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-sage rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-accent text-white rounded-full text-sm font-medium mb-4">
                💌 Stay Connected
              </span>
            </div>
            <h2 className="heading-font text-3xl md:text-4xl font-light text-primary mb-4">
              Join Our Family Circle
            </h2>
            <p className="text-lg text-warm max-w-2xl mx-auto leading-relaxed">
              Be the first to discover our latest collections and receive 
              insider access to premium family fashion.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start text-primary">
                <svg className="w-5 h-5 text-sage mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Subscription Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-6 py-4 border border-beige-light rounded-full focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 smooth-transition text-center sm:text-left bg-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-primary text-white rounded-full hover:bg-brown-dark smooth-transition font-medium whitespace-nowrap"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </div>
                  ) : (
                    'Subscribe →'
                  )}
                </button>
              </div>
              
              <p className="text-xs text-warm mt-4 leading-relaxed">
                By subscribing, you agree to receive marketing emails from Diana Collection. 
                You can unsubscribe at any time. View our{' '}
                <a href="#" className="text-sage hover:underline">Privacy Policy</a>.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-3xl p-8 soft-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Welcome to the Family!
                  </h3>
                  <p className="text-warm mb-4">
                    Thank you for joining Diana Collection. Check your inbox for 
                    a special welcome offer.
                  </p>
                  <button
                    onClick={() => setIsSubscribed(false)}
                    className="px-6 py-2 text-sage hover:bg-beige-light rounded-full smooth-transition"
                  >
                    Subscribe Another Email
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Social Proof */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-warm">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-sage/20 to-accent/30 border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-medium text-sage">👤</span>
                  </div>
                ))}
              </div>
              <span>Join 25,000+ stylish families</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>Rated 4.9/5 by subscribers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;