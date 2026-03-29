import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-vento-navy text-white overflow-hidden relative">

      {/* Background wordmark */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none z-0">
        <svg
          width="100%"
          viewBox="0 0 1000 130"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <text
            x="0"
            y="108"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fontFamily="Poppins, sans-serif"
            fontWeight="900"
            fontSize="110"
            fill="white"
            fillOpacity="0.04"
            letterSpacing="-2"
          >
            VENTO AVIATION
          </text>
        </svg>
      </div>

      {/* CTA Strip */}
      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-2">Ready to work together?</p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Submit an RFQ and hear back within 24 hours.
              </h3>
            </div>
            <a
              href="/request-for-quote"
              className="shrink-0 flex items-center gap-2 bg-white text-vento-navy px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/90 transition-all shadow-xl shadow-black/20"
            >
              Request A Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="col-span-2">
            <img src={logo} alt="Vento Aviation Logo" className="h-9 w-auto object-contain brightness-0 invert mb-6" />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
              Global supplier of certified aviation parts. We bridge the gap between demand and supply with precision, speed, and unwavering quality standards.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-8">
              <a href="tel:+19294250075" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm">+1 (929) 425-0075</span>
              </a>
              <a href="mailto:sales@ventoaviation.com" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm">sales@ventoaviation.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/50">
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm">Brooklyn, NY · Buenos Aires · Paris</span>
              </div>
            </div>

            {/* Cert badges */}
            <div className="flex flex-wrap gap-2">
              {['ASA-100', 'FAA Compliant', 'EASA Compliant'].map((badge) => (
                <span key={badge} className="text-[10px] font-bold uppercase tracking-widest text-white/40 border border-white/15 rounded-full px-3 py-1">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Mission & Values', href: '/about' },
                { label: 'Global Locations', href: '/about' },
                { label: 'Certifications', href: '/about' },
                { label: 'Events & Expos', href: '/events' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/55 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Parts Sourcing', href: '/services' },
                { label: 'RFQ Fulfillment', href: '/services' },
                { label: 'Inventory Management', href: '/services' },
                { label: 'LOT Purchasing', href: '/services' },
                { label: 'Advisory & Consulting', href: '/services' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/55 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-5">Resources</h4>
            <ul className="space-y-3 mb-8">
              {[
                { label: 'Knowledge Base', href: '/resources' },
                { label: 'Industry Guides', href: '/resources' },
                { label: 'Parts Explained', href: '/resources' },
                { label: 'Procurement Tips', href: '/resources' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/55 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-5">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/55 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">© 2026 Vento Aviation LLC. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a
                href="https://secure.merchpay.com/vento-aviation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white text-xs transition-colors"
              >
                Pay an Invoice
              </a>
              <a
                href="https://www.linkedin.com/company/vento-aviation/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/30 hover:text-white text-xs transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
