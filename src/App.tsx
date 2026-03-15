/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Plane, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  Award, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X,
  ArrowRight,
  CheckCircle2,
  Globe,
  Settings,
  Wrench,
  Gauge,
  Box
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from './assets/logo.png';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Parts', href: '#products' },
    { name: 'Inventory', href: '#products' },
    { name: 'Work with us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-vento-navy/95 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src={logo} alt="Vento Aviation Logo" className="h-10 w-auto object-contain brightness-0 invert" />
          </div>
          
          <div className="hidden md:flex flex-1 items-center justify-center space-x-12 font-corporate">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-white hover:text-white/80 font-medium text-sm transition-all drop-shadow-md"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block font-corporate">
            <a 
              href="#rfq" 
              className="bg-white text-vento-navy px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-white/90 transition-all border border-white/20"
            >
              Request A Quote
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-vento-navy/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 font-corporate">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-sm font-semibold text-white hover:text-white/80 hover:bg-white/5 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="#rfq" 
                  className="block w-full text-center bg-white text-vento-navy px-6 py-4 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg border border-white/20 hover:bg-white/90 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Request A Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero1 = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=2000" 
          alt="Aviation Background" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-vento-bg/0 via-vento-bg/50 to-vento-bg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vento-navy/5 border border-vento-navy/10 text-vento-navy text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-vento-navy animate-pulse"></span>
              Global Aviation Parts Supplier
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-vento-navy tracking-tight">
              Global Supplier Of <span className="text-vento-navy/60">Certified</span> Aviation Parts
            </h1>
            <p className="text-xl text-vento-navy/70 mb-10 max-w-lg leading-relaxed">
              Leaders in aeronautical supplies with collectively over 20 years of experience in the field. Delivering precision and reliability to the skies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#products" 
                className="bg-vento-navy text-white px-8 py-4 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-vento-navy/90 transition-all shadow-xl shadow-vento-navy/20"
              >
                Explore Catalog <ChevronRight size={16} />
              </a>
              <a 
                href="#about" 
                className="px-8 py-4 font-bold text-xs uppercase tracking-widest border border-vento-navy/20 text-vento-navy hover:border-vento-navy transition-all text-center"
              >
                Read More About Us
              </a>
            </div>
            
            <div className="flex items-center gap-8 pt-8 border-t border-vento-navy/10">
              <div>
                <div className="text-4xl font-light text-vento-navy mb-1 tracking-tight">20+</div>
                <div className="text-[10px] text-vento-navy/60 font-bold uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-vento-navy/10"></div>
              <div>
                <div className="text-4xl font-light text-vento-navy mb-1 tracking-tight">24/7</div>
                <div className="text-[10px] text-vento-navy/60 font-bold uppercase tracking-widest">Global Support</div>
              </div>
              <div className="w-px h-12 bg-vento-navy/10"></div>
              <div>
                <div className="text-4xl font-light text-vento-navy mb-1 tracking-tight">100%</div>
                <div className="text-[10px] text-vento-navy/60 font-bold uppercase tracking-widest">Certified Parts</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-vento-navy/30 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200" 
                alt="Aircraft Engine" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-vento-navy/10 mix-blend-multiply"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Hero2 = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-vento-navy">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=2000" 
          alt="Aviation Cockpit" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vento-navy via-vento-navy/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-vento-navy via-vento-navy/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-white text-[10px] font-bold mb-8 uppercase tracking-[0.2em] backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              Elevating Standards
            </div>
            <h2 className="text-5xl md:text-6xl font-light leading-[1.1] mb-6 tracking-tight text-white">
              Precision engineering meets <span className="font-bold">relentless reliability.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-light max-w-lg">
              We don't just supply parts; we power the global aviation network. Our rigorous quality control and expansive inventory ensure your fleet stays in the air, where it belongs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
               <a 
                href="#contact" 
                className="bg-white text-vento-navy px-8 py-4 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-xl"
              >
                Connect With An Expert <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-6 items-end"
          >
             <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 w-80 shadow-2xl hover:bg-white/10 transition-colors">
               <Plane className="text-blue-400 w-10 h-10 mb-6" />
               <h4 className="text-white font-bold text-lg mb-3 tracking-wide uppercase text-sm">AOG Desk</h4>
               <p className="text-white/60 text-sm leading-relaxed">24/7 dedicated support team ready to dispatch critical components instantly worldwide.</p>
             </div>
             <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 w-80 shadow-2xl mr-12 hover:bg-white/10 transition-colors">
               <ShieldCheck className="text-blue-400 w-10 h-10 mb-6" />
               <h4 className="text-white font-bold text-lg mb-3 tracking-wide uppercase text-sm">Quality Assured</h4>
               <p className="text-white/60 text-sm leading-relaxed">Every part comes with complete traceability and EASA/FAA certifications.</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-slate-900 pt-32 pb-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=2000" 
          alt="Aviation Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c2c44]/40 via-[#1c2c44]/10 to-[#1c2c44]/90"></div>
      </div>

      {/* Main Center Text */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center px-4 mt-8 md:mt-0">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
        >
          <div className="text-white/90 font-corporate tracking-[0.5em] uppercase text-sm md:text-md mb-6 font-bold shadow-sm">
            GLOBAL SUPPLIER
          </div>
          <h1 className="text-7xl md:text-[8.5rem] font-corporate font-bold text-white tracking-tighter mix-blend-overlay opacity-90 leading-none">
            VENTO <span className="font-light block md:inline md:mt-0 mt-2">AVIATION</span>
          </h1>
        </motion.div>
      </div>

      {/* Bottom Cards Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto pb-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 items-stretch"
        >
          {/* Card 1 */}
          <div className="bg-[#1f2937]/50 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-8 flex flex-row items-center justify-between shadow-2xl">
            <div>
              <h3 className="text-white font-semibold text-xl mb-3 leading-snug font-corporate">Certified Aerospace<br/>Materials</h3>
              <p className="text-white/60 text-sm">From Individual Parts to<br/>LargeScale Systems</p>
            </div>
            <div className="flex-shrink-0 ml-4">
              <Settings className="w-14 h-14 text-[#ff6b4a]" />
            </div>
          </div>

          {/* Center Callout */}
          <div className="px-6 py-6 text-center flex flex-col items-center justify-center">
            <p className="text-white/90 text-sm leading-relaxed mb-6 font-medium max-w-[280px] drop-shadow-md">
              Vento Aviation is recognized as a premier aerospace distributor worldwide.
            </p>
            <a href="#about" className="bg-[#ff6b4a] hover:bg-[#ff5530] text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-[#ff6b4a]/30">
              Learn more
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1f2937]/50 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-8 shadow-2xl">
            <h3 className="text-white font-semibold text-xl mb-3 font-corporate">Aero Craft Services</h3>
            <p className="text-white/60 text-sm mb-6">From Individual Parts to LargeScale Systems</p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 rounded-full border border-white/20 text-white/90 text-xs font-medium">Airbus</span>
              <span className="px-4 py-1.5 rounded-full border border-white/20 text-white/90 text-xs font-medium">Boeing</span>
              <span className="px-4 py-1.5 rounded-full border border-white/20 text-white/90 text-xs font-medium">Engine</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Certified & Trusted Sources",
      description: "We source all components exclusively from verified airlines, MROs, and approved suppliers.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Smart Pricing",
      description: "By purchasing global surplus directly from operators, we offer highly competitive pricing.",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      title: "Guaranteed Quality",
      description: "From sourcing to packaging, every step is handled in-house to ensure the highest standards.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "On-Time Delivery",
      description: "Committed to delivery times to avoid interrupting your operations and keep you flying.",
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-vento-navy mb-4">Why Choose Us</h2>
          <div className="w-20 h-1.5 bg-vento-navy mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-vento-bg border border-vento-navy/5 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-vento-navy text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-vento-navy/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-vento-navy mb-3">{feature.title}</h3>
              <p className="text-vento-navy/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1464037862646-647f1856d5ec?auto=format&fit=crop&q=80&w=600" 
                  alt="Aviation 1" 
                  className="rounded-3xl w-full aspect-[3/4] object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=600" 
                  alt="Aviation 2" 
                  className="rounded-3xl w-full aspect-square object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=600" 
                  alt="Aviation 3" 
                  className="rounded-3xl w-full aspect-square object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600" 
                  alt="Aviation 4" 
                  className="rounded-3xl w-full aspect-[3/4] object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-vento-navy/5 rounded-full blur-3xl"></div>
          </div>

          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-vento-navy/5 text-vento-navy font-bold text-sm mb-6">
              ABOUT US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-vento-navy mb-8 leading-tight">
              Vento Aviation – A Trusted Global Supplier Of Certified Aviation Components.
            </h2>
            <div className="space-y-6 text-vento-navy/70 text-lg leading-relaxed">
              <p>
                VENTO Aviation is a global supplier specializing in sourcing, stocking, and delivering certified aircraft components for airlines, MROs, and aviation operators worldwide.
              </p>
              <p>
                We maintain thousands of components in stock and have direct access to a broad network of OEMs and distributors, enabling us to supply everything from brand-new, factory-fresh parts to serviceable and overhauled components.
              </p>
              <p>
                Our model is simple: you ask, we deliver. With a global partner network, strict quality assurance processes, and a strong focus on operational speed, we provide fast, reliable, and flexible support.
              </p>
            </div>
            <button className="mt-10 flex items-center gap-2 text-vento-navy font-bold group">
              LEARN MORE ABOUT OUR PROCESS 
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const categories = [
    { name: "Hydraulics", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800", icon: <Settings /> },
    { name: "Engine Parts", image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800", icon: <Wrench /> },
    { name: "Landing Gear", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800", icon: <Plane /> },
    { name: "Airframe Parts", image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800", icon: <Box /> },
    { name: "Instruments", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800", icon: <Gauge /> },
    { name: "Surplus Purchase", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800", icon: <DollarSign /> },
    { name: "Hardware", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800", icon: <Settings /> },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-vento-navy mb-4">Our Product Line</h2>
            <p className="text-vento-navy/60 max-w-md">Comprehensive range of certified components for various aircraft systems.</p>
          </div>
          <button className="text-vento-navy font-bold flex items-center gap-2 border-b-2 border-vento-navy pb-1">
            EXPLORE FULL CATALOG <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vento-navy via-vento-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-4">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
                <p className="text-white/70 text-sm mt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  View certified components
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RFQSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    partNumber: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Quote request submitted successfully!');
  };

  return (
    <section id="contact" className="py-24 bg-vento-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-vento-navy mb-8">Contact Us</h2>
            <p className="text-vento-navy/70 text-lg mb-12">
              Have a specific requirement or need a custom quote? Our team is ready to assist you 24/7 with your aviation parts needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-vento-navy/5 rounded-2xl flex items-center justify-center text-vento-navy flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-bold text-vento-navy">Phone</div>
                  <div className="text-vento-navy/70">+1 (929) 425-0075</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-vento-navy/5 rounded-2xl flex items-center justify-center text-vento-navy flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold text-vento-navy">Email</div>
                  <div className="text-vento-navy/70">sales@ventoaviation.com</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-vento-navy/5 rounded-2xl flex items-center justify-center text-vento-navy flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold text-vento-navy">Warehouse</div>
                  <div className="text-vento-navy/70">2001 57th Street, Brooklyn NY 11204</div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-white rounded-3xl border border-vento-navy/5 shadow-sm">
              <h4 className="font-bold text-vento-navy mb-4 flex items-center gap-2">
                <Globe size={20} /> Global Locations
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-vento-navy/70">
                  <CheckCircle2 size={16} className="text-vento-navy" /> United States (New York)
                </div>
                <div className="flex items-center gap-2 text-vento-navy/70">
                  <CheckCircle2 size={16} className="text-vento-navy" /> Mexico (Mexico City)
                </div>
                <div className="flex items-center gap-2 text-vento-navy/70">
                  <CheckCircle2 size={16} className="text-vento-navy" /> Argentina (Córdoba)
                </div>
                <div className="flex items-center gap-2 text-vento-navy/70">
                  <CheckCircle2 size={16} className="text-vento-navy" /> France (Bordeaux)
                </div>
              </div>
            </div>
          </div>

          <div id="rfq" className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-vento-navy/10 border border-vento-navy/5">
            <h3 className="text-3xl font-bold text-vento-navy mb-2">Request A Quote</h3>
            <p className="text-vento-navy/60 mb-8 text-sm uppercase tracking-widest font-semibold">RFQ FORM</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-vento-navy/80 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-vento-bg border border-vento-navy/10 focus:border-vento-navy outline-none transition-all"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-vento-navy/80 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@company.com"
                    className="w-full px-6 py-4 rounded-2xl bg-vento-bg border border-vento-navy/10 focus:border-vento-navy outline-none transition-all"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-vento-navy/80 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-6 py-4 rounded-2xl bg-vento-bg border border-vento-navy/10 focus:border-vento-navy outline-none transition-all"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-vento-navy/80 ml-1">Part Number / Description</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Engine Valve X-100"
                    className="w-full px-6 py-4 rounded-2xl bg-vento-bg border border-vento-navy/10 focus:border-vento-navy outline-none transition-all"
                    onChange={(e) => setFormData({...formData, partNumber: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-vento-navy/80 ml-1">Message / Additional Details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us more about your requirements..."
                  className="w-full px-6 py-4 rounded-2xl bg-vento-bg border border-vento-navy/10 focus:border-vento-navy outline-none transition-all resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-vento-navy text-white py-5 rounded-2xl font-bold text-lg hover:bg-vento-navy/90 transition-all shadow-xl shadow-vento-navy/20 flex items-center justify-center gap-2"
              >
                Submit Request <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-vento-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Vento Aviation Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-white/60 max-w-md leading-relaxed">
              Global supplier of certified aviation parts. We bridge the gap between demand and supply with precision, speed, and unwavering quality standards.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Product Line</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Assurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 Vento Aviation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Products />
      <RFQSection />
      <Footer />
    </div>
  );
}
