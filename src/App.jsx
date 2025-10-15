import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  Mountain,
  Compass,
  Route,
  Camera,
  Shield,
  Award
} from 'lucide-react';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Tours from './components/Tours';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <Header />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
