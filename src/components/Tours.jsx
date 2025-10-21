import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Star, Calendar, ArrowRight } from 'lucide-react';

const Tours = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tours' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
    { id: 'multi-day', name: 'Multi-day' }
  ];

  const tours = [
    {
      id: 1,
      title: 'Hunza Valley Ride',
      category: 'beginner',
      image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800&q=80',
      location: 'Hunza Valley, Gilgit-Baltistan',
      duration: '3 Days',
      groupSize: '4-8 riders',
      difficulty: 'Beginner',
      price: 'PKR 45,000',
      rating: 4.9,
      reviews: 156,
      description: 'Ride through the stunning Hunza Valley with views of Rakaposhi and Ultar Sar peaks.',
      highlights: ['Karimabad exploration', 'Altit & Baltit Forts', 'Local cuisine', 'Professional guide & support vehicle']
    },
    {
      id: 2,
      title: 'Skardu K2 Base Camp',
      category: 'advanced',
      image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80',
      location: 'Skardu to K2 Base Camp',
      duration: '10 Days',
      groupSize: '3-6 riders',
      difficulty: 'Advanced',
      price: 'PKR 180,000',
      rating: 5.0,
      reviews: 89,
      description: 'Ultimate adventure to K2 Base Camp on heavy bikes through challenging terrain.',
      highlights: ['K2 Base Camp', 'Skardu Lakes', 'Shigar Valley', 'Camping & meals included']
    },
    {
      id: 3,
      title: 'Naran Kaghan Loop',
      category: 'intermediate',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      location: 'Naran Kaghan Valley, KPK',
      duration: '4 Days',
      groupSize: '5-10 riders',
      difficulty: 'Intermediate',
      price: 'PKR 55,000',
      rating: 4.8,
      reviews: 203,
      description: 'Experience the scenic beauty of Naran Kaghan with Saif-ul-Malook and Babusar Top.',
      highlights: ['Lake Saif-ul-Malook', 'Babusar Top', 'Lulusar Lake', 'Hotel accommodation']
    },
    {
      id: 4,
      title: 'Fairy Meadows Adventure',
      category: 'intermediate',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
      location: 'Fairy Meadows, Diamer',
      duration: '5 Days',
      groupSize: '4-8 riders',
      difficulty: 'Intermediate',
      price: 'PKR 65,000',
      rating: 4.9,
      reviews: 142,
      description: 'Ride to the base of Nanga Parbat (8126m), the 9th highest mountain in the world.',
      highlights: ['Nanga Parbat views', 'Raikot Bridge', 'Trekking included', 'Camping experience']
    },
    {
      id: 5,
      title: 'Northern Pakistan Grand Tour',
      category: 'multi-day',
      image: 'https://images.unsplash.com/photo-1558618047-5c1b2c924c97?w=800&q=80',
      location: 'Complete Northern Pakistan',
      duration: '15 Days',
      groupSize: '4-8 riders',
      difficulty: 'Intermediate',
      price: 'PKR 250,000',
      rating: 5.0,
      reviews: 67,
      description: 'Epic 15-day journey covering Hunza, Skardu, Naran, Fairy Meadows and more!',
      highlights: ['All major destinations', 'Hotels & camping', 'All meals', 'Expert guides & support']
    },
    {
      id: 6,
      title: 'Swat Valley Explorer',
      category: 'beginner',
      image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
      location: 'Swat Valley, KPK',
      duration: '3 Days',
      groupSize: '6-12 riders',
      difficulty: 'Beginner',
      price: 'PKR 35,000',
      rating: 4.7,
      reviews: 178,
      description: 'Explore the Switzerland of Pakistan with beautiful valleys and waterfalls.',
      highlights: ['Malam Jabba', 'Kalam Valley', 'Mahodand Lake', 'Cultural sites']
    }
  ];

  const filteredTours = activeCategory === 'all' 
    ? tours 
    : tours.filter(tour => tour.category === activeCategory);

  return (
    <section id="tours" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-orange-400">Featured</span>
            <span className="block bg-gradient-to-r from-orange-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">Motorbike Tours & Adventures</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our carefully curated selection of heavy bike tours across Pakistan's mountains, 
            each designed to offer unique riding experiences and unforgettable memories.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 border border-orange-500/30 hover:bg-orange-600/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Tours Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-xl border border-orange-500/30 rounded-2xl shadow-2xl overflow-hidden group"
              style={{
                boxShadow: '0 20px 60px rgba(251, 146, 60, 0.3)'
              }}
            >
              {/* Tour Image */}
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-r from-orange-500 to-amber-600 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg">
                  <span className="text-xs sm:text-sm font-bold text-white">{tour.difficulty}</span>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg">
                  <span className="text-xs sm:text-sm font-bold">{tour.price}</span>
                </div>
              </div>

              {/* Tour Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-orange-300 mb-3">{tour.title}</h3>
                
                {/* Tour Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-orange-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{tour.location}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-green-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{tour.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-yellow-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{tour.groupSize}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 sm:h-4 sm:w-4 ${
                          i < Math.floor(tour.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-xs sm:text-sm text-gray-300 font-semibold">
                    {tour.rating} ({tour.reviews} reviews)
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-xs sm:text-sm leading-relaxed">{tour.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.slice(0, 2).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-500/20 text-orange-300 px-2 sm:px-3 py-1 rounded-lg text-xs font-semibold border border-orange-500/30"
                      >
                        📍 {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-xl font-bold text-sm sm:text-base shadow-xl transition-all duration-300 text-white"
                    style={{background: 'linear-gradient(90deg, #F59E42 0%, #FB923C 50%, #FDBA74 100%)'}}
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      🏍️ Book Now
                    </span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-xl font-bold text-sm sm:text-base shadow-xl transition-all duration-300 text-white"
                    style={{background: 'linear-gradient(90deg, #F59E42 0%, #FB923C 50%, #FDBA74 100%)'}}
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      🌄 View Details
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Tours CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary group"
          >
            View All Tours
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Tours;