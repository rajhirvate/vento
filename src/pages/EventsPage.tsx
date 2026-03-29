import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Menu, X, Calendar, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

// ─── Navbar ────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Inventory', href: '/#products' },
    { name: 'Events', href: '/events' },
    { name: 'Resources', href: '/#resources' },
    { name: 'News', href: '/#news' },
    { name: 'Contact', href: '/#contact' },
  ];
  return (
    <nav className="fixed top-0 w-full z-50 bg-vento-navy/95 backdrop-blur-md shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Vento Aviation" className="h-10 w-auto object-contain brightness-0 invert" />
          </Link>
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-8 font-corporate">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className="text-white hover:text-white/80 font-medium text-sm transition-all">
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:block font-corporate">
            <a href="/#contact" className="bg-white text-vento-navy px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-white/90 transition-all">
              Request A Quote
            </a>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-vento-navy/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 font-corporate">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href}
                  className="block px-3 py-4 text-sm font-semibold text-white hover:bg-white/5 rounded-xl"
                  onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a href="/#contact"
                  className="block w-full text-center bg-white text-vento-navy px-6 py-4 text-xs font-bold uppercase tracking-wider rounded-full"
                  onClick={() => setIsOpen(false)}>
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

// ─── Hero ──────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative pt-40 pb-28 bg-vento-navy overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]"
      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
    />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-6">Events & Expos</p>
        <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight font-corporate mb-6">
          Meet us where aviation happens.
        </h1>
        <p className="text-white/50 text-lg leading-relaxed">
          Vento attends the world's leading aviation expos and MRO events. Find us on the floor — ready to talk parts, close deals, and build lasting partnerships.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Upcoming Expos ────────────────────────────────────────────────────────

const UpcomingExpos = () => {
  const expos = [
    {
      name: 'NAI HELI-EXPO 2026',
      date: 'March 3–6, 2026',
      location: 'Las Vegas Convention Center, NV — USA',
      booth: 'Booth #2241',
      description: "The world's largest helicopter industry event. Come find us on the floor — we'll be available for parts discussions, sourcing meetings, and surplus sales.",
    },
    {
      name: 'MRO AMERICAS 2026',
      date: 'April 14–16, 2026',
      location: 'Georgia World Congress Center, Atlanta, GA — USA',
      booth: 'Booth #1408',
      description: "North America's premier MRO conference and expo. Schedule time with our team for live inventory reviews and procurement strategy sessions.",
    },
    {
      name: 'LABACE 2026',
      date: 'August 11–13, 2026',
      location: 'Congonhas Airport, São Paulo — Brazil',
      booth: 'Booth #B14',
      description: "Latin America's leading aviation business event. Meet Vento's South America team to explore sourcing opportunities and surplus purchases.",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-vento-navy/40 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">On the Calendar</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-vento-navy leading-tight font-corporate">
            Upcoming expos
          </h2>
        </motion.div>

        <div className="space-y-5">
          {expos.map((expo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-vento-bg border border-vento-navy/8 rounded-3xl p-8 lg:p-10 grid lg:grid-cols-5 gap-8 items-center hover:shadow-md transition-shadow duration-300"
            >
              {/* Date badge */}
              <div className="lg:col-span-1">
                <div className="bg-vento-navy text-white rounded-2xl px-5 py-4 inline-block">
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest font-corporate mb-1">2026</p>
                  <p className="text-white font-bold font-corporate text-sm leading-tight">{expo.date.split(',')[0].replace(' 2026', '')}</p>
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-3">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-vento-navy font-corporate">{expo.name}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest font-corporate text-vento-navy/40 border border-vento-navy/15 rounded-full px-3 py-1">Upcoming</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="flex items-center gap-1.5 text-vento-navy/50 text-xs font-corporate font-semibold">
                    <MapPin className="w-3.5 h-3.5" /> {expo.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-vento-navy/50 text-xs font-corporate font-semibold">
                    <Users className="w-3.5 h-3.5" /> {expo.booth}
                  </span>
                </div>
                <p className="text-vento-navy/55 text-sm leading-relaxed">{expo.description}</p>
              </div>

              {/* CTA */}
              <div className="lg:col-span-1 flex lg:justify-end">
                <a
                  href={`/contact?event=${encodeURIComponent(expo.name)}`}
                  className="flex items-center gap-2 bg-vento-navy text-white px-6 py-3.5 font-corporate font-bold text-xs uppercase tracking-widest rounded-full hover:bg-vento-navy/90 transition-colors whitespace-nowrap"
                >
                  Book a Meeting <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Past Expo Gallery ─────────────────────────────────────────────────────

const PastGallery = () => {
  const galleries = [
    {
      event: 'MRO AMERICAS 2025',
      location: 'Chicago, IL — USA',
      year: '2025',
      images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
      ],
    },
    {
      event: 'LABACE 2025',
      location: 'São Paulo — Brazil',
      year: '2025',
      images: [
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800',
      ],
    },
  ];

  return (
    <section className="py-28 bg-vento-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-vento-navy/40 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Past Events</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-vento-navy leading-tight font-corporate">
              Expo gallery
            </h2>
          </div>
          <p className="text-vento-navy/45 text-sm max-w-xs leading-relaxed">
            A look back at the events where Vento has been present — building relationships one booth at a time.
          </p>
        </motion.div>

        <div className="space-y-12">
          {galleries.map((gallery, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Gallery header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-8 h-8 rounded-xl bg-vento-navy flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-vento-navy font-bold font-corporate">{gallery.event}</h3>
                  <p className="text-vento-navy/40 text-xs flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" /> {gallery.location} · {gallery.year}
                  </p>
                </div>
              </div>

              {/* Photo grid */}
              <div className="grid grid-cols-3 gap-3">
                {gallery.images.map((src, j) => (
                  <div key={j}
                    className={`overflow-hidden rounded-2xl ${j === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}>
                    <img
                      src={src}
                      alt={`${gallery.event} photo ${j + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ─── Expo CTA ──────────────────────────────────────────────────────────────

const ExpoCTA = () => (
  <section className="py-24 bg-vento-navy">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div className="max-w-xl">
          <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Attending an Expo?</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight font-corporate mb-4">
            Schedule a meeting at our booth.
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            Tell us which event you'll be attending and we'll arrange a time to meet — whether it's a quick parts discussion or an in-depth sourcing review.
          </p>
        </div>
        <div className="flex flex-col gap-4 shrink-0">
          <a
            href="/#contact"
            className="flex items-center justify-center gap-3 bg-white text-vento-navy px-10 py-5 font-corporate font-bold text-xs uppercase tracking-[0.15em] hover:bg-white/90 transition-colors rounded-full shadow-xl shadow-black/20"
          >
            Schedule a Meeting <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/#contact"
            className="flex items-center justify-center gap-3 border border-white/20 text-white/60 hover:text-white hover:border-white/40 px-10 py-5 font-corporate font-bold text-xs uppercase tracking-[0.15em] transition-colors rounded-full"
          >
            General Enquiry
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);


// ─── Page ──────────────────────────────────────────────────────────────────

export default function EventsPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <UpcomingExpos />
      <PastGallery />
      <ExpoCTA />
      <Footer />
    </div>
  );
}
