import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Mountain } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tours', href: '#tours' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 backdrop-blur-md shadow-2xl border-b border-orange-500/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="p-2 sm:p-3 rounded-xl shadow-lg" style={{background: 'linear-gradient(135deg, #FB923C 0%, #16A34A 100%)'}}>
              <Mountain className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <span className="text-lg sm:text-2xl font-black bg-gradient-to-r from-orange-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
              Bikers Corner
            </span>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="font-bold text-lg transition-all duration-300 text-orange-300 hover:text-yellow-300"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg shadow-2xl transform transition-all duration-300 text-white"
              style={{
                background: 'linear-gradient(135deg, #FB923C 0%, #16A34A 50%, #FB923C 100%)',
                backgroundSize: '200% 200%'
              }}
            >
              <span className="hidden sm:inline">🚀 Book Adventure</span>
              <span className="sm:hidden">🚀 Book</span>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-lg hover:bg-orange-500/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-orange-300" />
            ) : (
              <Menu className="h-6 w-6 text-orange-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gradient-to-br from-slate-900 to-gray-900 backdrop-blur-md border border-orange-500/30 rounded-2xl shadow-xl mt-4 py-6 mx-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-6 py-4 text-orange-300 font-semibold hover:text-yellow-300 hover:bg-orange-500/10 rounded-lg mx-4 transition-all duration-300 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-6 pt-4">
              <button 
                className="w-full px-6 py-4 rounded-xl font-bold text-lg shadow-2xl transform transition-all duration-300 text-white"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #EF4444 100%)'
                }}
              >
                🚀 Book Adventure
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;