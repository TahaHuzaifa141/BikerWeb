import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Taha',
      location: 'Rawalpindi, PK',
      rating: 5,
      text: 'Absolutely incredible experience! The guides were knowledgeable and the trails were breathtaking. This was my first mountain biking tour and I\'m already planning my next one.',
      tour: 'Alpine Trail Discovery',
      image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=150&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Taha Huzaifa',
      location: 'Islamabad, PK',
      rating: 5,
      text: 'The Summit Challenge was exactly what I was looking for - technical, challenging, and rewarding. The views from the top were worth every pedal stroke!',
      tour: 'Summit Challenge Expedition',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=150&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Huzaifa',
      location: 'Rawalpindi, PK',
      rating: 5,
      text: 'Amazing multi-day adventure! The camping was comfortable, the food was delicious, and the trails were diverse. Bikers Corner really knows how to create memorable experiences.',
      tour: 'Multi-Day Mountain Safari',
      image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=150&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Aoun',
      location: 'Islamabad, PK',
      rating: 5,
      text: 'Professional guides, top-notch equipment, and stunning scenery. The safety briefing was thorough and I felt confident throughout the entire tour.',
      tour: 'Forest Trail Adventure',
      image: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?q=80&w=150&auto=format&fit=crop'
    },
    {
      id: 5,
      name: 'Tayyab Bilal',
      location: 'Rawalpindi, PK',
      rating: 5,
      text: 'The coastal ride was magical! Perfect for beginners like me. The guide was patient and encouraging, and the ocean views were absolutely stunning.',
      tour: 'Coastal Cliff Rider',
      image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=150&auto=format&fit=crop'
    },
    {
      id: 6,
      name: 'Raja Sufyan',
      location: 'Islamabad, PK',
      rating: 5,
      text: 'Desert biking was an entirely new experience for me. The red rocks of Moab are incredible, and the technical challenges kept things exciting!',
      tour: 'Desert Canyon Explorer',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=150&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Riders
            <span className="block bg-gradient-to-r from-orange-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">Are Saying</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the adventurers who have experienced 
            the thrill of our mountain biking tours firsthand.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl shadow-2xl p-4 sm:p-6 border-2 border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-200 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              {/* Tour Name */}
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm inline-block mb-4 font-semibold shadow-lg">
                {testimonial.tour}
              </div>

              {/* Rider Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4 border-2 border-orange-500"
                />
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Modern Animated Button */}
        <div className="flex justify-center mb-16">
          <motion.button
            whileHover={{ scale: 1.12, rotate: 2 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-extrabold text-base sm:text-lg shadow-2xl transition-all duration-300 text-white border-none focus:outline-none focus:ring-4 focus:ring-orange-400/40"
            style={{background: 'linear-gradient(90deg, #F59E0B 0%, #F97316 60%, #FB923C 100%)'}}
          >
            <span className="inline-flex items-center gap-2">
              <span className="animate-pulse">⭐</span> 
              <span className="hidden sm:inline">Read More Reviews</span>
              <span className="sm:hidden">More Reviews</span>
            </span>
          </motion.button>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-6 sm:p-8 md:p-12 text-white"
        >
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">4.9/5</div>
              <div className="text-primary-100 text-sm sm:text-base">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-primary-100 text-sm sm:text-base">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-primary-100 text-sm sm:text-base">Would Recommend</div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">Trusted by leading adventure platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-400 font-semibold">TripAdvisor</div>
            <div className="text-gray-400 font-semibold">Google Reviews</div>
            <div className="text-gray-400 font-semibold">Yelp</div>
            <div className="text-gray-400 font-semibold">Adventure Travel Trade</div>
            <div className="text-gray-400 font-semibold">Outdoor Industry</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;