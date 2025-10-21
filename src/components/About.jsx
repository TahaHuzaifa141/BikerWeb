import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '2500+', label: 'Happy Riders' },
    { icon: Award, number: '12+', label: 'Years Experience' },
    { icon: MapPin, number: '30+', label: 'Pakistan Routes' },
    { icon: Calendar, number: '500+', label: 'Tours Completed' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 sm:mb-8">
              Pakistan's Leading
              <span 
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #FB923C 0%, #16A34A 50%, #FB923C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                MOTORBIKE TOURS
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-white/90 mb-4 sm:mb-6 leading-relaxed">
              🏍️ For over 12 years, Bikers Corner has been Pakistan's premier destination for heavy bike and motorbike enthusiasts. 
              We specialize in creating unforgettable riding experiences through Pakistan's Northern Areas, showcasing 
              the most breathtaking mountain landscapes and thrilling roads.
            </p>
            
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
              🇵🇰 Our expert riders and guides are passionate locals who know every curve, peak, and hidden gem of Pakistan's mountains. 
              From Hunza's beauty to K2 Base Camp adventures, Fairy Meadows to Skardu lakes - we offer authentic Pakistani mountain riding experiences!
            </p>

            <motion.button
              whileHover={{ scale: 1.12, rotate: 3 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-extrabold text-base sm:text-lg shadow-2xl transition-all duration-300 text-white border-none focus:outline-none focus:ring-4 focus:ring-orange-400/40"
              style={{
                background: 'linear-gradient(90deg, #F59E0B 0%, #F97316 60%, #FB923C 100%)',
                boxShadow: '0 4px 24px 0 rgba(249,115,22,0.25), 0 1.5px 8px 0 rgba(251,146,60,0.15)',
                backgroundSize: '200% 200%'
              }}
            >
              <span className="inline-flex items-center gap-2">
                <span className="animate-pulse">🎯</span> Discover Our Story
              </span>
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl card-modern">
              <img
                src="https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070&auto=format&fit=crop"
                alt="Heavy bike in mountains"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-gray-800/80 backdrop-blur-md border border-orange-500/30 rounded-2xl shadow-xl p-6 sm:p-8 pulse-glow"
            >
              <div className="flex items-center space-x-4">
                <div 
                  className="p-3 sm:p-4 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, #FB923C 0%, #F59E0B 50%, #FB923C 100%)'
                  }}
                >
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">4.9/5 ⭐</div>
                  <div className="text-base sm:text-lg text-white/80 font-semibold">Epic Rating!</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-orange-500 via-amber-600 to-orange-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 pulse-glow">
                <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-2 sm:mb-3">{stat.number}</div>
              <div className="text-white/80 font-bold text-base sm:text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;