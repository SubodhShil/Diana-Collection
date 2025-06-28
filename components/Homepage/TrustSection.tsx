'use client';

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Premium Quality Fabrics',
      description: 'Only the finest organic cotton, merino wool, and sustainable materials for your family.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Thoughtfully Curated',
      description: 'Each piece is carefully selected by our team of fashion experts and parents.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Timeless Design',
      description: 'Classic styles that transcend trends, ensuring lasting value and elegance.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Global Shipping',
      description: 'Fast, secure delivery worldwide with eco-friendly packaging.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Mother of Two',
      content: 'Diana Collection has transformed our family wardrobe. The quality is exceptional and the designs are timeless. My children look elegant while feeling comfortable.',
      rating: 5,
    },
    {
      id: 2,
      name: 'James Rodriguez',
      role: 'Fashion Blogger',
      content: 'As a parent and fashion enthusiast, I appreciate the sophisticated approach Diana Collection takes. Every piece tells a story of quality and care.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Thompson',
      role: 'Pediatrician & Mom',
      content: 'The organic materials and attention to detail give me peace of mind. These clothes are not just beautiful, they\'re safe and comfortable for my little ones.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-font text-3xl md:text-4xl font-light text-primary mb-4">
            Why Choose
            <span className="brand-text gold-accent font-semibold"> Diana Collection</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe in creating more than just clothing – we craft experiences 
            that celebrate the beauty of family life.
          </p>
        </div>

        {/* Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gold-accent-bg text-primary mb-4 group-hover:scale-110 smooth-transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-cream rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="heading-font text-2xl md:text-3xl font-light text-primary mb-4">
              What Our
              <span className="brand-text gold-accent font-semibold"> Families Say</span>
            </h3>
            <p className="text-gray-600">
              Real stories from parents who trust Diana Collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-elegant">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/30 flex items-center justify-center mr-4">
                    <span className="text-accent font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-center">
            <div className="text-sm font-medium text-gray-600">CERTIFIED ORGANIC</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-600">SUSTAINABLE FASHION</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-600">ETHICALLY MADE</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-600">PREMIUM QUALITY</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;