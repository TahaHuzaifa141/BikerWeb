import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mountain, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    tours: [
      { name: 'Alpine Trail Discovery', href: '#' },
      { name: 'Summit Challenge', href: '#' },
      { name: 'Forest Adventure', href: '#' },
      { name: 'Desert Explorer', href: '#' },
      { name: 'Multi-day Safari', href: '#' },
      { name: 'Custom Tours', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Guides', href: '#' },
      { name: 'Safety Standards', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Booking Policy', href: '#' },
      { name: 'Cancellations', href: '#' },
      { name: 'Equipment Rental', href: '#' },
      { name: 'Gift Cards', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-primary-600 to-accent-500 p-2 rounded-lg">
                <Mountain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Bikers Corner</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your premier destination for mountain biking adventures. We create unforgettable 
              experiences through expertly guided tours in the world's most beautiful landscapes.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">info@bikerscorner.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">Mountain View, CO 80424</span>
              </div>
            </div>
          </motion.div>

          {/* Tours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Popular Tours</h3>
            <ul className="space-y-3">
              {footerLinks.tours.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary-500"
                />
                <motion.button
                  whileHover={{ scale: 1.12, rotate: 2 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-3 rounded-2xl font-extrabold text-lg shadow-2xl transition-all duration-300 text-white border-none focus:outline-none focus:ring-4 focus:ring-orange-400/40"
                  style={{background: 'linear-gradient(90deg, #F59E0B 0%, #F97316 60%, #FB923C 100%)'}}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="animate-pulse">📧</span> Subscribe
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <span className="text-gray-300">Follow Us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            {/* Awards & Certifications */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🏆 TripAdvisor Excellence</span>
              <span>🥇 Outdoor Industry Award</span>
              <span>✅ Certified Guides</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Bikers Corner. All rights reserved. | 
              <a href="#" className="hover:text-primary-400 ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-primary-400 ml-1">Terms of Service</a>
            </div>
            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary-600 hover:bg-primary-700 p-3 rounded-full transition-colors duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;