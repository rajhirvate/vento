import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Plane, ShieldCheck, Globe, Box, DollarSign, Award, Settings, Wrench, Gauge, MapPin, BookOpen, FileText, Phone, Mail, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';

const navHrefs: Record<string, string> = {
  About: '/about',
  Services: '/services',
  Inventory: '/#products',
  Events: '/events',
  Resources: '/resources',
  News: '/#news',
  Contact: '/#contact',
};

const megaMenus: Record<string, {
  sections: { heading: string; items: { label: string; desc: string; href: string; icon: React.ReactNode }[] }[];
  highlight?: { label: string; desc: string; href: string }
}> = {
  About: {
    sections: [
      {
        heading: 'Company',
        items: [
          { label: 'Our Story', desc: 'Who we are and how we started', href: '/about', icon: <Plane className="w-4 h-4" /> },
          { label: 'Mission & Values', desc: 'What drives every decision we make', href: '/about', icon: <Award className="w-4 h-4" /> },
          { label: 'Global Locations', desc: 'USA, Mexico, Argentina, France & more', href: '/about', icon: <MapPin className="w-4 h-4" /> },
          { label: 'Certifications', desc: 'ASA-100 certified operations', href: '/about', icon: <ShieldCheck className="w-4 h-4" /> },
        ],
      },
    ],
    highlight: { label: 'Meet the Team', desc: 'Learn about the people behind Vento Aviation and our global operations.', href: '/about' },
  },
  Services: {
    sections: [
      {
        heading: 'What We Do',
        items: [
          { label: 'Parts Sourcing', desc: 'Locate certified components globally', href: '/services', icon: <Globe className="w-4 h-4" /> },
          { label: 'RFQ Fulfillment', desc: 'Competitive quotes within 24 hours', href: '/services', icon: <ArrowRight className="w-4 h-4" /> },
          { label: 'Inventory Management', desc: 'Optimize and manage surplus stock', href: '/services', icon: <Box className="w-4 h-4" /> },
          { label: 'LOT Purchasing', desc: 'Full aircraft lot acquisitions', href: '/services', icon: <DollarSign className="w-4 h-4" /> },
          { label: 'Expo & Direct Sales', desc: 'Meet us at major aviation expos', href: '/services', icon: <Calendar className="w-4 h-4" /> },
          { label: 'Advisory & Consulting', desc: '20+ years of industry expertise', href: '/services', icon: <Settings className="w-4 h-4" /> },
        ],
      },
    ],
    highlight: { label: 'Request A Quote', desc: 'Submit your RFQ and our team will respond within 24 hours with competitive pricing.', href: '/#contact' },
  },
  Inventory: {
    sections: [
      {
        heading: 'Parts Categories',
        items: [
          { label: 'Engine Parts', desc: 'New, serviceable & overhauled', href: '/#products', icon: <Wrench className="w-4 h-4" /> },
          { label: 'Hydraulics', desc: 'Pumps, actuators & system components', href: '/#products', icon: <Settings className="w-4 h-4" /> },
          { label: 'Landing Gear', desc: 'Structural & actuating components', href: '/#products', icon: <Plane className="w-4 h-4" /> },
          { label: 'Airframe Parts', desc: 'Panels, doors & fuselage components', href: '/#products', icon: <Box className="w-4 h-4" /> },
          { label: 'Instruments & Avionics', desc: 'Flight deck instruments & gauges', href: '/#products', icon: <Gauge className="w-4 h-4" /> },
          { label: 'Surplus Purchase', desc: 'Fast valuations, competitive offers', href: '/#products', icon: <DollarSign className="w-4 h-4" /> },
        ],
      },
    ],
    highlight: { label: 'Explore Full Catalog', desc: 'Browse our complete inventory of certified aerospace components across all categories.', href: '/#products' },
  },
  Events: {
    sections: [
      {
        heading: 'Upcoming Expos',
        items: [
          { label: 'NAI HELI-EXPO 2026', desc: 'Las Vegas, NV — March 2026', href: '/events', icon: <Calendar className="w-4 h-4" /> },
          { label: 'MRO Americas 2026', desc: 'Atlanta, GA — April 2026', href: '/events', icon: <Calendar className="w-4 h-4" /> },
          { label: 'LABACE 2026', desc: 'São Paulo, Brazil — August 2026', href: '/events', icon: <Calendar className="w-4 h-4" /> },
        ],
      },
    ],
    highlight: { label: 'Book a Meeting', desc: 'Schedule a one-on-one with our team at the next aviation expo near you.', href: '/#contact' },
  },
  Resources: {
    sections: [
      {
        heading: 'Knowledge Base',
        items: [
          { label: 'Industry Guides', desc: 'FAA, EASA regulations explained', href: '/resources', icon: <BookOpen className="w-4 h-4" /> },
          { label: 'Parts & Components', desc: 'OEM, PMA, DER parts explained', href: '/resources', icon: <Wrench className="w-4 h-4" /> },
          { label: 'Procurement Tips', desc: 'How to write an effective RFQ', href: '/resources', icon: <FileText className="w-4 h-4" /> },
          { label: 'MRO Insights', desc: 'AOG, C-Checks and supply planning', href: '/resources', icon: <Settings className="w-4 h-4" /> },
        ],
      },
    ],
    highlight: { label: 'Browse All Resources', desc: 'Access our full library of aviation industry guides, regulations, and procurement best practices.', href: '/resources' },
  },
  News: {
    sections: [
      {
        heading: 'Latest Updates',
        items: [
          { label: 'Company News', desc: 'Updates from Vento Aviation', href: '/#news', icon: <FileText className="w-4 h-4" /> },
          { label: 'Industry Updates', desc: 'Global aviation market insights', href: '/#news', icon: <Globe className="w-4 h-4" /> },
          { label: 'Certifications', desc: 'Quality and compliance updates', href: '/#news', icon: <ShieldCheck className="w-4 h-4" /> },
        ],
      },
    ],
    highlight: { label: 'View All News', desc: 'Stay up to date with the latest news from Vento Aviation and the global aviation parts market.', href: '/#news' },
  },
  Contact: {
    sections: [
      {
        heading: 'Get In Touch',
        items: [
          { label: 'Request A Quote', desc: 'Submit your RFQ online', href: '/#contact', icon: <ArrowRight className="w-4 h-4" /> },
          { label: 'Call Us', desc: '+1 (929) 425-0075', href: 'tel:+19294250075', icon: <Phone className="w-4 h-4" /> },
          { label: 'Email Us', desc: 'sales@ventoaviation.com', href: 'mailto:sales@ventoaviation.com', icon: <Mail className="w-4 h-4" /> },
          { label: 'Our Locations', desc: 'USA, Mexico, Argentina, France', href: '/about', icon: <MapPin className="w-4 h-4" /> },
        ],
      },
    ],
    highlight: { label: 'Pay an Invoice', desc: 'Securely pay your outstanding invoice online through our payment portal.', href: 'https://secure.merchpay.com/vento-aviation/' },
  },
};

const navLinks = Object.keys(megaMenus);

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);
      if (currentY > 100) {
        setIsVisible(currentY < lastScrollY.current);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(name);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const scrolled = transparent ? isScrolled : true;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'pb-2 px-4 sm:px-6 lg:px-8' : 'py-4'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`transition-all duration-500 max-w-7xl mx-auto ${
          scrolled
            ? 'bg-vento-navy/95 backdrop-blur-md shadow-2xl rounded-b-3xl px-4 sm:px-6 lg:px-8'
            : 'px-4 sm:px-6 lg:px-8'
        }`}
      >
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img src={logo} alt="Vento Aviation Logo" className="h-10 w-auto object-contain brightness-0 invert" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-1 font-corporate">
            {navLinks.map((name) => (
              <a
                key={name}
                href={navHrefs[name]}
                onMouseEnter={() => handleMouseEnter(name)}
                onClick={() => setActiveMenu(null)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeMenu === name ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {name}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${activeMenu === name ? 'rotate-180' : ''}`}
                />
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3 font-corporate">
            <a
              href="https://secure.merchpay.com/vento-aviation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white px-5 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full border border-white/20 hover:border-white/40 transition-all"
            >
              Pay Now
            </a>
            <a
              href="/#contact"
              className="bg-white text-vento-navy px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-white/90 transition-all border border-white/20"
            >
              Request A Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1" aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu Panel */}
      <AnimatePresence>
        {activeMenu && megaMenus[activeMenu] && (
          <motion.div
            key={activeMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="hidden lg:block absolute left-0 right-0 top-full"
            onMouseEnter={() => handleMouseEnter(activeMenu)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-vento-navy/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                <div className="grid grid-cols-3 gap-0">
                  {/* Left — menu items */}
                  <div className="col-span-2 p-8">
                    {megaMenus[activeMenu].sections.map((section) => (
                      <div key={section.heading}>
                        <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-5">{section.heading}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {section.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/15 transition-all shrink-0 mt-0.5">
                                {item.icon}
                              </div>
                              <div>
                                <p className="text-white text-sm font-semibold leading-tight group-hover:text-white/90">{item.label}</p>
                                <p className="text-white/40 text-xs mt-0.5 leading-snug">{item.desc}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right — highlight panel */}
                  {megaMenus[activeMenu].highlight && (
                    <div className="bg-white/5 border-l border-white/10 p-8 flex flex-col justify-between">
                      <div>
                        <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Quick Action</p>
                        <h4 className="text-white text-lg font-bold mb-3 leading-snug">{megaMenus[activeMenu].highlight!.label}</h4>
                        <p className="text-white/50 text-sm leading-relaxed">{megaMenus[activeMenu].highlight!.desc}</p>
                      </div>
                      <a
                        href={megaMenus[activeMenu].highlight!.href}
                        onClick={() => setActiveMenu(null)}
                        className="mt-8 inline-flex items-center gap-2 bg-white text-vento-navy px-5 py-3 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white/90 transition-all w-fit"
                      >
                        {megaMenus[activeMenu].highlight!.label} <ArrowRight size={13} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-vento-navy/95 backdrop-blur-xl border-b border-white/10 overflow-hidden rounded-b-3xl mx-4 sm:mx-6"
          >
            <div className="px-4 pt-2 pb-6 font-corporate">
              {navLinks.map((name) => (
                <div key={name}>
                  <div className="flex items-center">
                    <a
                      href={navHrefs[name]}
                      onClick={() => setIsOpen(false)}
                      className="flex-1 px-3 py-4 text-sm font-semibold text-white hover:bg-white/5 rounded-xl"
                    >
                      {name}
                    </a>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === name ? null : name)}
                      className="px-3 py-4 text-white/40 hover:text-white"
                      aria-label={`Expand ${name}`}
                    >
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${mobileExpanded === name ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {mobileExpanded === name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-3 mb-2"
                      >
                        {megaMenus[name].sections[0].items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
                            className="flex items-center gap-3 px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl"
                          >
                            <span className="text-white/30">{item.icon}</span>
                            {item.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="pt-4 flex flex-col gap-3 border-t border-white/10 mt-2">
                <a
                  href="https://secure.merchpay.com/vento-aviation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full text-center text-white border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white/5 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Pay Now
                </a>
                <a
                  href="/#contact"
                  className="flex items-center justify-center gap-2 w-full text-center bg-white text-vento-navy px-6 py-4 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-white/90 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Request A Quote <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
