import React from 'react';
import { motion } from 'framer-motion';
import { Route, Compass, Camera, Shield, Mountain, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Route,
      title: 'Guided Motorbike Tours',
      description: 'Expert-led heavy bike adventures through Pakistan\'s Northern Areas with experienced riders and full support.',
      features: ['Professional rider guides', 'Support vehicles', 'GPS tracking', 'Emergency assistance']
    },
    {
      icon: Compass,
      title: 'Custom Route Planning',
      description: 'Personalized riding experiences tailored to your bike type, experience level, and desired destinations.',
      features: ['Flexible routes', 'Private groups', 'All bike types', 'Personal mechanic support']
    },
    {
      icon: Camera,
      title: 'Photography Expeditions',
      description: 'Capture Pakistan\'s stunning mountain beauty while riding through the most photogenic routes.',
      features: ['Photo stop planning', 'Sunrise/sunset rides', 'Drone photography', 'Professional shots']
    },
    {
      icon: Shield,
      title: 'Bike Rental & Safety',
      description: 'Premium heavy bikes for rent with complete safety gear, insurance, and mechanical support.',
      features: ['Royal Enfield', 'Kawasaki & Yamaha', 'Full safety gear', 'Travel insurance']
    },
    {
      icon: Mountain,
      title: 'Multi-Day Adventures',
      description: 'Extended expeditions covering multiple destinations with camping, hotels, and authentic Pakistani cuisine.',
      features: ['Accommodation included', 'All meals', 'Camping equipment', 'Cultural experiences']
    },
    {
      icon: Users,
      title: 'Group & Corporate Rides',
      description: 'Perfect for bike clubs, corporate teams, and group adventures across Pakistan\'s mountains.',
      features: ['Group discounts', 'Team coordination', 'Custom packages', 'Event management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-orange-400">Our Premium</span>
            <span className="block bg-gradient-to-r from-orange-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">Motorbike Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From guided heavy bike tours to custom adventures, we offer comprehensive motorbike riding services 
            designed to create unforgettable experiences in Pakistan's mountains.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-xl border border-orange-500/30 rounded-2xl shadow-2xl overflow-hidden group"
              style={{
                boxShadow: '0 20px 60px rgba(251, 146, 60, 0.3)'
              }}
            >
              <div className="p-8">
                {/* Icon */}
                <div className="bg-gradient-to-r from-orange-500 to-green-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-orange-300 mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-green-400 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full px-6 py-3 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 text-white border-none focus:outline-none"
                  style={{background: 'linear-gradient(135deg, #FB923C 0%, #16A34A 100%)'}}
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    <span className="animate-pulse">🏍️</span> Learn More
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Book your mountain biking experience today and discover the thrill of epic adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.12, rotate: 2 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-2xl font-extrabold text-lg shadow-2xl transition-all duration-300 text-white border-none focus:outline-none focus:ring-4 focus:ring-orange-400/40"
              style={{background: 'linear-gradient(90deg, #F59E0B 0%, #F97316 60%, #FB923C 100%)'}}
            >
              <span className="inline-flex items-center gap-2">
                <span className="animate-pulse">🏍️</span> Book Now
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.12, rotate: -2 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-2xl font-extrabold text-lg shadow-2xl transition-all duration-300 text-white border-none focus:outline-none focus:ring-4 focus:ring-amber-400/40"
              style={{background: 'linear-gradient(90deg, #F97316 0%, #FB923C 60%, #FBBF24 100%)'}}
            >
              <span className="inline-flex items-center gap-2">
                <span className="animate-pulse">💬</span> Get Quote
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;