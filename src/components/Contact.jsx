import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', tour: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subDetails: 'Mon-Fri 8AM-6PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@bikerscorner.com',
      subDetails: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Adventure Way',
      subDetails: 'Mountain View, CO 80424'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 8AM-6PM',
      subDetails: 'Sat-Sun: 9AM-5PM'
    }
  ];

  const tourOptions = [
    'Alpine Trail Discovery',
    'Summit Challenge Expedition',
    'Forest Trail Adventure',
    'Desert Canyon Explorer',
    'Multi-Day Mountain Safari',
    'Coastal Cliff Rider',
    'Custom Adventure'
  ];

  const faqItems = [
    {
      q: "What should I bring on a tour?",
      a: "We provide all bikes and safety equipment. Just bring comfortable clothes, water bottle, and a sense of adventure!"
    },
    {
      q: "Are tours suitable for beginners?",
      a: "Absolutely! We have tours designed for all skill levels, from complete beginners to advanced riders."
    },
    {
      q: "What's your cancellation policy?",
      a: "Free cancellation up to 48 hours before your tour. Weather-related cancellations receive full refunds."
    },
    {
      q: "Do you offer group discounts?",
      a: "Yes! Groups of 8 or more receive a 15% discount. Contact us for custom group packages."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300 mb-6">
            Ready to <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">Ride Pakistan?</span>
          </h2>
          <p className="text-lg sm:text-xl text-yellow-100 max-w-3xl mx-auto">
            🏍️ Book your ultimate heavy bike mountain adventure today! 
            Contact us for custom tours, group bookings, and special packages across Northern Pakistan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">📞 Get In Touch</h3>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-2 sm:p-3 rounded-lg shadow-lg flex-shrink-0">
                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">{info.title}</h4>
                    <p className="text-gray-200 font-medium text-sm sm:text-base">{info.details}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{info.subDetails}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl h-64 flex items-center justify-center border-2 border-orange-500/30 shadow-2xl"
            >
              <div className="text-center text-white">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-orange-400" />
                <p className="font-semibold text-lg">📍 Serving All Pakistan</p>
                <p className="text-sm text-gray-400 mt-2">Islamabad • Lahore • Karachi</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 sm:p-8 border-2 border-orange-500/30 shadow-2xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">✉️ Book Your Tour</h3>            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center"
              >
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <div>
                  <p className="text-green-800 font-semibold">Message Sent!</p>
                  <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border-2 border-orange-500/30 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border-2 border-orange-500/30 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border-2 border-orange-500/30 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors placeholder-gray-400"
                    placeholder="+92 300 1234567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Interested Tour
                  </label>
                  <select
                    name="tour"
                    value={formData.tour}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border-2 border-orange-500/30 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="" className="bg-slate-900">Select a tour</option>
                    {tourOptions.map((tour, index) => (
                      <option key={index} value={tour} className="bg-slate-900">{tour}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900/50 border-2 border-orange-500/30 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors placeholder-gray-400"
                  placeholder="Tell us about your adventure plans, group size, dates, bike preferences..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(251, 146, 60, 0.6)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl shadow-2xl transition-all duration-300 text-white border-none focus:outline-none focus:ring-4 focus:ring-orange-500/50 relative overflow-hidden group"
                style={{background: 'linear-gradient(135deg, #F97316 0%, #DC2626 50%, #EA580C 100%)'}}
              >
                <span className="relative inline-flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">🏍️</span> 
                  <span className="hidden sm:inline">Book Your Adventure Now</span>
                  <span className="sm:hidden">Book Now</span>
                  <Send className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            ❓ Frequently Asked Questions
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 border-2 border-orange-500/30 rounded-lg p-4 sm:p-6 shadow-xl"
              >
                <h4 className="font-bold text-white mb-2 sm:mb-3 text-base sm:text-lg">{faq.q}</h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;