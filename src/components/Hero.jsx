import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Heavy Bike/Motorbike in Mountains Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-orange-900/60 to-amber-900/50"></div>
        
        {/* Floating Shapes - Motorbike Theme Colors */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-full blur-3xl"
        ></motion.div>

        {/* Road Lines Animation */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 bg-white"
              style={{
                top: `${20 + i * 15}%`,
                left: '-100%',
                width: '30%',
              }}
              animate={{
                left: ['- 100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-orange-600/30 backdrop-blur-md border border-orange-400/50 rounded-full"
        >
          <span className="text-orange-300 font-bold text-sm">🇵🇰 Ride Pakistan</span>
          <span className="w-2 h-2 bg-orange-300 rounded-full animate-pulse"></span>
          <span className="text-amber-300 font-semibold text-sm">Premium Mountain Tours</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight"
        >
          <span className="text-amber-300 drop-shadow-2xl">Conquer Pakistan's</span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="block mt-2 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl"
            style={{ textShadow: '0 0 40px rgba(251, 146, 60, 0.5)' }}
          >
            EPIC MOUNTAINS
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-4"
        >
          🏍️ Experience the ultimate heavy bike adventure through Pakistan's breathtaking Northern Areas. 
          From Hunza to Skardu, K2 Base Camp to Fairy Meadows - Your dream ride awaits!
        </motion.p>

        {/* Key Features Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {[
            { icon: '🏔️', text: 'Northern Pakistan' },
            { icon: '🏍️', text: 'Heavy Bikes' },
            { icon: '⛺', text: 'Camping Tours' },
            { icon: '📸', text: 'Photography' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2 bg-orange-600/30 backdrop-blur-md border border-yellow-400/30 rounded-full text-yellow-200 font-semibold text-sm shadow-lg"
            >
              <span className="mr-2">{feature.icon}</span>
              {feature.text}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
        >
          <motion.a
            href="#tours"
            whileHover={{ scale: 1.08, boxShadow: "0 25px 60px rgba(251, 146, 60, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-black text-lg sm:text-xl text-yellow-100 overflow-hidden shadow-2xl w-full sm:w-auto text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center justify-center gap-3">
              <span className="text-xl sm:text-2xl">🏍️</span>
              <span className="hidden sm:inline">Book Your Adventure</span>
              <span className="sm:hidden">Book Adventure</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </motion.a>

          <motion.a
            href="#tours"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg text-gray-200 border-2 border-orange-400/50 backdrop-blur-md hover:bg-orange-600/30 transition-all duration-300 shadow-xl w-full sm:w-auto text-center"
          >
            <span className="flex items-center justify-center gap-3">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden sm:inline">Watch Tour Videos</span>
              <span className="sm:hidden">Watch Videos</span>
            </span>
          </motion.a>
        </motion.div>

        {/* Stats - Pakistan Themed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
        >
          {[
            { icon: '🏍️', number: "1000+", label: "Successful Tours", color: "from-orange-400 to-amber-400" },
            { icon: '⛰️', number: "25+", label: "Mountain Routes", color: "from-amber-400 to-orange-400" },
            { icon: '👥', number: "3500+", label: "Happy Riders", color: "from-orange-400 to-amber-500" },
            { icon: '🏆', number: "10+", label: "Years Excellence", color: "from-amber-400 to-orange-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center bg-gray-800/50 backdrop-blur-md border border-orange-500/30 rounded-2xl p-4 sm:p-6 shadow-xl"
            >
              <div className="text-2xl sm:text-4xl mb-2">{stat.icon}</div>
              <div className={`text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-200 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Popular Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 sm:mt-16 px-4"
        >
          <p className="text-orange-300 text-sm font-semibold mb-4">🗺️ POPULAR DESTINATIONS</p>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {['Hunza Valley', 'Skardu', 'Naran Kaghan', 'Fairy Meadows', 'K2 Base Camp', 'Gilgit', 'Swat Valley', 'Naltar Valley'].map((dest, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(251, 146, 60, 0.3)' }}
                className="px-3 sm:px-4 py-1 sm:py-2 bg-orange-600/20 backdrop-blur-sm border border-orange-400/40 rounded-lg text-gray-200 text-xs sm:text-sm font-medium cursor-pointer transition-all"
              >
                📍 {dest}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-yellow-400/40 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;