/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import heroVideo from './assets/hero.mov';
import NewHeroPage from './NewHeroPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';

// --- Components ---

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

const MainHero1 = () => {
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

const HeroNew = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  const SLIDE_DURATION = 5000;
  const TICK = 80;

  const slides = [
    {
      label: 'AOG Services',
      title: '24/7 Emergency Parts Dispatch',
      desc: 'Round-the-clock dedicated team ready to source and ship critical components anywhere in the world within hours.',
      img: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200',
    },
    {
      label: 'Quality Assurance',
      title: 'EASA & FAA Certified Supply Chain',
      desc: 'Every component ships with complete documentation, full traceability, and certified airworthiness standards.',
      img: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1200',
    },
    {
      label: 'Global Network',
      title: 'Warehouses Across 4 Continents',
      desc: 'Strategic locations in the US, Mexico, Argentina, and France for rapid regional delivery to any operator.',
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109db56?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (TICK / SLIDE_DURATION) * 100;
        if (next >= 100) {
          setActiveSlide((s) => (s + 1) % slides.length);
          return 0;
        }
        return next;
      });
    }, TICK);
    return () => clearInterval(timer);
  }, []);

  const marqueeItems = [
    'AS9120 Certified', 'ISO 9001:2015', 'FAA AC 00-56B', 'EASA Approved',
    'Boeing', 'Airbus', 'Rolls-Royce', 'GE Aviation',
    'CFM International', 'Pratt & Whitney', 'Honeywell', 'Collins Aerospace',
  ];

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        poster="https://images.unsplash.com/photo-1436491865332-7a61a109db56?auto=format&fit=crop&q=80&w=2000"
      >
        <source src="https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent,rgba(0,0,0,0.4))]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-32 pb-8">
          {/* Left — headline */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm rounded-full mb-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/70 text-[11px] font-bold uppercase tracking-[0.2em] font-corporate">Global Aviation Partner</span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-corporate font-bold text-white leading-[0.95] tracking-tight mb-8"
            >
              Connect,
              <br />
              protect &
              <br />
              explore{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">
                our world.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/40 text-lg leading-relaxed mb-10 max-w-md font-light"
            >
              Certified aerospace components delivered worldwide with speed, precision, and uncompromising quality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#rfq"
                className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-corporate font-bold text-xs uppercase tracking-[0.15em] overflow-hidden hover:shadow-2xl hover:shadow-white/10 transition-shadow"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-blue-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#about"
                className="group inline-flex items-center gap-3 px-8 py-4 font-corporate font-bold text-xs uppercase tracking-[0.15em] text-white/70 border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all"
              >
                Our Story
                <ChevronRight size={16} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>
          </div>

          {/* Right — auto-rotating feature carousel */}
          <div className="lg:col-span-7 relative hidden lg:flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-2xl shadow-black/60 ring-1 ring-white/[0.08]">
                      <img
                        src={slides[activeSlide].img}
                        alt={slides[activeSlide].title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

                      {/* Slide content overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                        <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] font-corporate mb-3 block">
                          {slides[activeSlide].label}
                        </span>
                        <h3 className="text-2xl xl:text-3xl font-bold text-white mb-3 font-corporate leading-tight">
                          {slides[activeSlide].title}
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed max-w-lg">
                          {slides[activeSlide].desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slide progress indicators */}
                <div className="flex items-center gap-3 mt-6">
                  {slides.map((slide, i) => (
                    <button
                      key={slide.label}
                      onClick={() => { setActiveSlide(i); setProgress(0); }}
                      className="group flex items-center gap-3"
                    >
                      <div className="relative h-[3px] w-16 bg-white/10 overflow-hidden rounded-full">
                        <div
                          className={`absolute inset-y-0 left-0 rounded-full ${
                            i === activeSlide ? 'bg-white' : i < activeSlide ? 'bg-white/40' : 'bg-transparent'
                          }`}
                          style={{
                            width: i === activeSlide ? `${progress}%` : i < activeSlide ? '100%' : '0%',
                            transition: i === activeSlide ? 'width 80ms linear' : 'none',
                          }}
                        />
                      </div>
                    </button>
                  ))}
                  <span className="text-white/20 text-xs font-corporate font-bold ml-3 tabular-nums tracking-wider">
                    {String(activeSlide + 1).padStart(2, '0')} — {String(slides.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom infinite marquee */}
        <div className="border-t border-white/[0.06] py-4 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="text-white/[0.12] text-[13px] font-corporate font-semibold tracking-[0.15em] uppercase mx-8 flex items-center gap-3 shrink-0">
                <span className="w-1 h-1 rounded-full bg-white/20" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-white/20 text-[9px] font-corporate font-bold uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const MainHero2 = () => {
  const capabilities = [
    { icon: <ShieldCheck className="w-4 h-4" />, label: 'EASA / FAA Certified', detail: 'Full documentation & traceability' },
    { icon: <Clock className="w-4 h-4" />, label: 'AOG in Under 4 Hours', detail: 'Emergency dispatch worldwide' },
    { icon: <Globe className="w-4 h-4" />, label: '4 Continents Covered', detail: 'US, Mexico, Argentina, France' },
  ];

  return (
    <section className="relative h-screen overflow-hidden bg-vento-navy">
      {/* Local video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/quicktime" />
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Cinematic overlays — navy-tinted to match brand */}
      <div className="absolute inset-0 z-[2] bg-vento-navy/35" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-vento-navy/70 via-vento-navy/25 to-transparent" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-vento-navy/75 via-transparent to-vento-navy/40" />
      {/* Film grain texture */}
      <div className="absolute inset-0 z-[2] opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-grow flex items-center pt-40 pb-16">
          <div className="w-full">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-4"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-white/60 to-transparent" />
                <span className="text-white/60 text-[11px] font-corporate font-bold uppercase tracking-[0.3em]">
                  Powering Global Aviation
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-corporate font-bold text-white leading-[0.9] tracking-tighter mb-10 max-w-5xl"
              style={{ textShadow: '2px 4px 20px rgba(0, 0, 0, 0.3), 0px 8px 40px rgba(0, 0, 0, 0.15)' }}
            >
              Where every
              <br />
              part{' '}
              <span className="relative inline-block">
                <span className="relative z-10">matters</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                  className="absolute bottom-2 md:bottom-3 left-0 right-0 h-3 md:h-4 bg-blue-500/30 origin-left -z-0"
                />
              </span>
              <span className="text-white/30">.</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/40 text-lg sm:text-xl leading-relaxed max-w-xl mb-12 font-light"
            >
              From sourcing to delivery, we provide the certified components that keep the world's fleets flying safely and on schedule.
            </motion.p>

            {/* CTAs + Capabilities — single row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href="#rfq"
                className="group relative bg-white text-vento-navy px-10 py-5 font-corporate font-bold text-xs uppercase tracking-[0.15em] inline-flex items-center gap-3 overflow-hidden hover:shadow-2xl hover:shadow-vento-navy/20 transition-shadow"
              >
                <span className="relative z-10">Request A Quote</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1.5 transition-transform" />
                <div className="absolute inset-0 bg-vento-navy/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#products"
                className="group px-10 py-5 font-corporate font-bold text-xs uppercase tracking-[0.15em] text-white/70 border border-white/10 hover:border-white/25 hover:text-white hover:bg-white/[0.04] transition-all inline-flex items-center gap-3"
              >
                View Inventory
                <ChevronRight size={16} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>

              {/* Divider */}
              <div className="hidden lg:block h-10 w-px bg-white/15 mx-1" />

              {/* Capability items inline */}
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.65 + i * 0.08 }}
                  className="hidden lg:flex items-center gap-2.5 cursor-default group"
                >
                  <div className="text-blue-400/70 group-hover:text-blue-400 transition-colors">{cap.icon}</div>
                  <div className="flex flex-col">
                    <span className="text-white/80 text-[11px] font-bold font-corporate tracking-wide leading-tight group-hover:text-white transition-colors">{cap.label}</span>
                    <span className="text-white/25 text-[10px] leading-tight">{cap.detail}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] py-5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-white/20 text-[10px] font-corporate font-bold uppercase tracking-[0.3em]">Trusted Worldwide</span>
            <div className="h-3 w-px bg-white/15" />
            {['Boeing', 'Airbus', 'Embraer', 'Rolls-Royce'].map((name) => (
              <span key={name} className="text-white/20 text-xs font-corporate font-semibold tracking-wider hidden sm:inline">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesLight = () => {
  const buyers = [
    "3 competitive offers on every RFQ — full transparency, no hidden fees.",
    "FAA & EASA accepted parts sourced directly from airlines, MROs, and OEMs.",
    "24-hour average response time on all part number requests.",
    "Receive, evaluate, and inspect offers with our team guiding each step.",
    "Complete documentation and provenance on every single transaction.",
  ];

  const sellers = [
    "Transparent consignment process — you know exactly what you're getting.",
    "Fast valuations and competitive offers, typically within 48 hours.",
    "We close quickly and effectively — no delays, no drawn-out negotiations.",
    "Global buyer network across 3+ continents — maximum exposure for your inventory.",
    "NDX, OEM, and PMA parts all welcome — we work with all surplus types.",
  ];

  return (
    <section className="py-28 bg-vento-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-vento-navy/40 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Why Vento</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-vento-navy leading-tight font-corporate max-w-2xl">
            Built for the parts market.<br />Trusted on both sides.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">

          {/* For Buyers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-vento-navy/8 rounded-3xl p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-vento-navy flex items-center justify-center text-white shadow-md shadow-vento-navy/20">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-vento-navy/40 uppercase tracking-widest font-bold font-corporate">For Buyers</p>
                <p className="text-vento-navy font-bold font-corporate text-sm">Airlines · MROs · Operators</p>
              </div>
            </div>
            <div className="space-y-4">
              {buyers.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-vento-navy shrink-0 mt-0.5" />
                  <p className="text-vento-navy/65 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* For Sellers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-vento-navy rounded-3xl p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-white">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold font-corporate">For Sellers</p>
                <p className="text-white font-bold font-corporate text-sm">Airlines · Lessors · Brokers</p>
              </div>
            </div>
            <div className="space-y-4">
              {sellers.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                  <p className="text-white/65 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const About = () => {
  const stats = [
    { value: "500+", label: "Airlines Served" },
    { value: "10K+", label: "Parts in Stock" },
    { value: "15+", label: "Years of Experience" },
  ];

  return (
    <section id="about" className="bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px]">

        {/* Left — full-bleed image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative min-h-[400px] lg:min-h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1520437358207-323b43b50729?auto=format&fit=crop&q=80&w=1200"
            alt="Vento Aviation warehouse operations"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-vento-navy/30" />
        </motion.div>

        {/* Right — content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center px-10 py-20 lg:px-16"
        >
          <p className="text-vento-navy/40 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">About Us</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-vento-navy leading-tight font-corporate mb-8">
            A trusted global supplier of certified aviation components.
          </h2>

          <div className="space-y-4 text-vento-navy/60 text-base leading-relaxed mb-10">
            <p>
              VENTO Aviation is a global supplier specializing in sourcing, stocking, and delivering certified aircraft components for airlines, MROs, and aviation operators worldwide.
            </p>
            <p>
              We maintain thousands of components in stock with direct access to a broad network of OEMs and distributors — supplying everything from brand-new factory-fresh parts to serviceable and overhauled components.
            </p>
            <p>
              Our model is simple: you ask, we deliver. With a global partner network, strict quality assurance, and a strong focus on operational speed, we provide fast, reliable, and flexible support.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 mb-10 border-t border-vento-navy/10 pt-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold text-vento-navy font-corporate">{stat.value}</p>
                <p className="text-vento-navy/45 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className="inline-flex items-center gap-2 text-vento-navy font-bold font-corporate text-xs uppercase tracking-widest group w-fit border-b border-vento-navy/30 hover:border-vento-navy pb-1 transition-colors">
            Learn more about our process
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

const ProductsLight = () => {
  const categories = [
    {
      name: "Engine Parts",
      description: "New, serviceable, and overhauled components for all major engine types.",
      image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200",
      icon: <Wrench className="w-5 h-5" />,
      featured: true,
    },
    {
      name: "Hydraulics",
      description: "Pumps, actuators, and system components from certified sources.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      icon: <Settings className="w-5 h-5" />,
    },
    {
      name: "Landing Gear",
      description: "Structural and actuating components built to exacting tolerances.",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800",
      icon: <Plane className="w-5 h-5" />,
    },
    {
      name: "Airframe Parts",
      description: "Structural panels, doors, and fuselage components for all platforms.",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800",
      icon: <Box className="w-5 h-5" />,
    },
    {
      name: "Instruments",
      description: "Avionics, gauges, and flight deck instruments — certified and tested.",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800",
      icon: <Gauge className="w-5 h-5" />,
    },
    {
      name: "Surplus Purchase",
      description: "We buy airline and MRO surplus — fast valuation, competitive offers.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      name: "Hardware",
      description: "Fasteners, fittings, and consumables stocked for rapid dispatch.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  const featured = categories[0];
  const rest = categories.slice(1);

  return (
    <section className="py-28 bg-vento-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6"
        >
          <div>
            <p className="text-vento-navy/40 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Product Line</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-vento-navy leading-tight font-corporate">
              Components for every<br />aircraft system
            </h2>
          </div>
          <button className="flex items-center gap-2 text-vento-navy/60 hover:text-vento-navy font-corporate font-bold text-sm border-b border-vento-navy/30 hover:border-vento-navy pb-1 transition-all shrink-0">
            EXPLORE FULL CATALOG <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Featured card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative col-span-2 rounded-3xl overflow-hidden h-64 cursor-pointer shadow-lg"
          >
            <img
              src={featured.image}
              alt={featured.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vento-navy/85 via-vento-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 flex items-end justify-between w-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white mb-3">
                  {featured.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-corporate">{featured.name}</h3>
                <p className="text-white/70 text-sm mt-1 max-w-xs">{featured.description}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Regular cards */}
          {rest.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 + idx * 0.07 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden h-64 cursor-pointer shadow-md"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vento-navy/80 via-vento-navy/10 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white self-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white mb-3">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-bold text-white font-corporate leading-tight">{cat.name}</h3>
                  <p className="text-white/60 text-xs mt-1 leading-relaxed translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {cat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Parts Sourcing & Acquisition",
      description: "We identify, locate, and acquire certified parts from our global network of airlines, MROs, and approved suppliers.",
    },
    {
      icon: <ChevronRight className="w-5 h-5" />,
      title: "Parts Sales & RFQ Fulfillment",
      description: "Submit your RFQ and receive competitive offers within 24 hours, backed by full documentation and traceability.",
    },
    {
      icon: <Box className="w-5 h-5" />,
      title: "Inventory Management",
      description: "We manage and optimize surplus inventory on behalf of operators, maximising returns and minimising ground time.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "LOT Purchasing",
      description: "We purchase full aircraft lots and component packages directly from airlines and lessors worldwide.",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Expo & Direct Sales",
      description: "Meet our team at major aviation expos to source parts, close deals, and build lasting partnerships.",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Advisory & Consulting",
      description: "With over 20 years of combined experience, we provide strategic guidance on procurement and surplus sales.",
    },
  ];

  return (
    <section id="services" className="py-28 bg-vento-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-vento-navy/40 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">What We Do</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-vento-navy leading-tight font-corporate">
              How we work<br />with you
            </h2>
          </div>
          <p className="text-vento-navy/55 text-base max-w-sm leading-relaxed">
            End-to-end aviation parts solutions — from sourcing and sales to consulting and direct purchasing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="group bg-white border border-vento-navy/8 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-2xl bg-vento-navy flex items-center justify-center text-white mb-6 shadow-md shadow-vento-navy/20">
                {s.icon}
              </div>
              <h3 className="text-base font-bold text-vento-navy font-corporate mb-3">{s.title}</h3>
              <p className="text-vento-navy/55 text-sm leading-relaxed">{s.description}</p>
              <div className="mt-6 flex items-center gap-2 text-vento-navy/40 group-hover:text-vento-navy text-xs font-bold font-corporate uppercase tracking-widest transition-colors">
                Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Presence = () => {
  const locations = [
    { country: "United States", city: "Miami, FL", detail: "Americas Headquarters" },
    { country: "France", city: "Paris", detail: "European Operations" },
    { country: "Argentina", city: "Buenos Aires", detail: "South America Hub" },
    { country: "Philippines", city: "Manila", detail: "Asia Pacific" },
  ];

  return (
    <section className="py-28 bg-vento-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Global Reach</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight font-corporate">
            Wherever you operate,<br />we're already there
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition-colors duration-300"
            >
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <MapPin className="w-4 h-4 text-white/60" />
              </div>
              <p className="text-white/35 text-[10px] font-bold uppercase tracking-widest font-corporate mb-1">{loc.detail}</p>
              <h3 className="text-white text-xl font-bold font-corporate mb-1">{loc.country}</h3>
              <p className="text-white/40 text-sm">{loc.city}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-white/40 text-sm max-w-md text-center sm:text-left leading-relaxed">
            With boots on the ground across 4 countries and a partner network spanning every major aviation market.
          </p>
          <a href="#contact" className="flex items-center gap-2 text-white font-bold font-corporate text-xs uppercase tracking-widest border-b border-white/30 hover:border-white pb-1 transition-colors whitespace-nowrap">
            Get in touch <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

const Compliance = () => {
  const certs = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "ASA-100 Certified",
      description: "Our operations fully comply with the Aviation Suppliers Association's highest quality standard for aircraft parts distributors.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Manual",
      description: "Every transaction follows documented quality processes — from initial sourcing through final delivery and sign-off.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Full Traceability",
      description: "Complete part history, documentation, and certification records maintained and available for every component we handle.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Audit Ready",
      description: "Our facilities, records, and processes are maintained to be ready for regulatory and customer audits at any time.",
    },
  ];

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-vento-navy/40 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Standards</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-vento-navy leading-tight font-corporate">
            Compliance you<br />can verify
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-vento-bg border border-vento-navy/8"
            >
              <div className="w-12 h-12 rounded-2xl bg-vento-navy flex items-center justify-center text-white mb-6 shadow-md shadow-vento-navy/20">
                {cert.icon}
              </div>
              <h3 className="text-base font-bold text-vento-navy font-corporate mb-3">{cert.title}</h3>
              <p className="text-vento-navy/55 text-sm leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const Events = () => {
  const events = [
    {
      name: "NAI HELI-EXPO 2026",
      location: "Las Vegas, NV — USA",
      date: "March 2026",
      description: "The world's largest helicopter industry event. Find us on the floor connecting with operators, MROs, and suppliers.",
    },
    {
      name: "MRO AMERICAS 2026",
      location: "Atlanta, GA — USA",
      date: "April 2026",
      description: "North America's premier MRO event. We'll be available for meetings, sourcing discussions, and live inventory reviews.",
    },
    {
      name: "LABACE 2026",
      location: "São Paulo — Brazil",
      date: "August 2026",
      description: "Latin America's leading aviation business event. Meet the Vento team to explore parts sourcing and surplus sales.",
    },
  ];

  return (
    <section id="events" className="py-28 bg-vento-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Events</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight font-corporate">
              Meet us at<br />the next expo
            </h2>
          </div>
          <a href="#contact" className="flex items-center gap-2 text-white/50 hover:text-white font-bold font-corporate text-xs uppercase tracking-widest border-b border-white/20 hover:border-white pb-1 transition-all whitespace-nowrap">
            View all events & stay tuned <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {events.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest font-corporate">{ev.date}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest font-corporate text-white/30 border border-white/15 rounded-full px-3 py-1">Upcoming</span>
              </div>
              <h3 className="text-xl font-bold text-white font-corporate mb-2">{ev.name}</h3>
              <p className="text-white/40 text-xs font-corporate font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                <MapPin className="w-3 h-3" /> {ev.location}
              </p>
              <p className="text-white/50 text-sm leading-relaxed flex-1">{ev.description}</p>
              <div className="mt-8 flex items-center gap-2 text-white/30 hover:text-white text-xs font-bold font-corporate uppercase tracking-widest transition-colors cursor-pointer group">
                Book a meeting <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const News = () => {
  const articles = [
    {
      tag: "Company News",
      date: "March 2026",
      title: "Vento Aviation completes LOT acquisition from European flag carrier",
      excerpt: "A significant surplus purchase further strengthens our inventory across narrow-body and wide-body categories.",
    },
    {
      tag: "Industry",
      date: "February 2026",
      title: "ASA-100 certification renewed following comprehensive quality audit",
      excerpt: "Our commitment to quality and traceability was reaffirmed as we successfully passed our annual ASA-100 review.",
    },
    {
      tag: "Global",
      date: "January 2026",
      title: "Global aircraft parts demand reaches record high ahead of summer season",
      excerpt: "Airlines accelerating fleet reactivations are driving unprecedented demand for serviceable and overhauled components.",
    },
    {
      tag: "Company News",
      date: "December 2025",
      title: "Vento expands Philippines operations with new local partnerships",
      excerpt: "Our Asia Pacific presence grows as we formalise relationships with key regional MROs and operators.",
    },
  ];

  return (
    <section id="news" className="py-28 bg-vento-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-vento-navy/40 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Latest News</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-vento-navy leading-tight font-corporate">
              From Vento &<br />the aviation world
            </h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-vento-navy/50 hover:text-vento-navy font-bold font-corporate text-xs uppercase tracking-widest border-b border-vento-navy/20 hover:border-vento-navy pb-1 transition-all whitespace-nowrap">
            View all news <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group bg-white border border-vento-navy/8 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest font-corporate text-vento-navy/40 border border-vento-navy/15 rounded-full px-3 py-1">{article.tag}</span>
                <span className="text-vento-navy/30 text-xs font-corporate">{article.date}</span>
              </div>
              <h3 className="text-base font-bold text-vento-navy font-corporate mb-3 leading-snug group-hover:text-vento-navy/80 transition-colors">{article.title}</h3>
              <p className="text-vento-navy/50 text-sm leading-relaxed">{article.excerpt}</p>
              <div className="mt-6 flex items-center gap-2 text-vento-navy/30 group-hover:text-vento-navy text-xs font-bold font-corporate uppercase tracking-widest transition-colors">
                Read more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const BrochureCTA = () => (
  <section className="py-24 bg-vento-navy">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div>
          <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Company Overview</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight font-corporate">
            Everything about Vento.<br />One document.
          </h2>
        </div>
        <a
          href="#"
          className="group shrink-0 flex items-center gap-3 bg-white text-vento-navy px-10 py-5 font-corporate font-bold text-xs uppercase tracking-[0.15em] hover:bg-white/90 transition-colors rounded-full shadow-xl shadow-black/20"
        >
          Download our brochure <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

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


function HomePage() {
  return (
    <div className="font-sans">
      <Navbar transparent />
      <MainHero2 />
      <Services />
      <FeaturesLight />
      <About />
      <Presence />
      <Compliance />
      <ProductsLight />
      <Events />
      <News />
      <BrochureCTA />
      <RFQSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/newheropage" element={<NewHeroPage />} />
      </Routes>
    </BrowserRouter>
  );
}
