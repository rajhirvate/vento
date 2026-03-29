import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'About',     href: '/about' },
  { name: 'Services',  href: '/services' },
  { name: 'Inventory', href: '/#products' },
  { name: 'Events',    href: '/events' },
  { name: 'Resources', href: '/resources' },
  { name: 'News',      href: '/#news' },
  { name: 'Contact',   href: '/#contact' },
];

interface NavbarProps {
  /** When true the nav starts fully transparent (for pages with a dark full-screen hero) */
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On transparent-start pages: float the inner container as a pill once scrolled.
  // On solid pages: the nav itself always has the background.
  const scrolled = transparent ? isScrolled : true;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'pb-2 px-4 sm:px-6 lg:px-8' : 'py-4'
      }`}
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
            <img
              src={logo}
              alt="Vento Aviation Logo"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-8 font-corporate">
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

          {/* CTA button */}
          <div className="hidden lg:block font-corporate">
            <a
              href="/#contact"
              className="bg-white text-vento-navy px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-white/90 transition-all border border-white/20"
            >
              Request A Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-vento-navy/95 backdrop-blur-xl border-b border-white/10 overflow-hidden rounded-b-3xl mx-4 sm:mx-6"
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
                  href="/#contact"
                  className="flex items-center justify-center gap-2 w-full text-center bg-white text-vento-navy px-6 py-4 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg border border-white/20 hover:bg-white/90 transition-all"
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
