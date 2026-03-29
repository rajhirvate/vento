import React from 'react';
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Clock,
  Globe,
  Award,
  Plane,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  DollarSign,
  Wrench,
  Settings,
  Gauge,
  Box,
} from 'lucide-react';
import { motion } from 'motion/react';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


const HeroPremium = () => (
  <section className="relative min-h-screen flex items-end overflow-hidden bg-vento-navy">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=2000"
        alt="Aviation"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-vento-navy via-vento-navy/50 to-vento-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-vento-navy/60 to-transparent" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 pt-48">
      <div className="grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-white/50 text-xs font-body font-bold uppercase tracking-[0.3em] mb-6">
              Global Aviation Parts Supplier
            </p>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display text-white leading-[0.92] tracking-tight mb-8"
              style={{ textShadow: '2px 4px 20px rgba(0,0,0,0.3), 0px 8px 40px rgba(0,0,0,0.15)' }}
            >
              Precision parts.
              <br />
              <span className="text-white/50">Global reach.</span>
            </h1>
            <p className="text-white/40 text-lg leading-relaxed max-w-lg mb-10">
              We source, certify, and deliver aerospace components to airlines and MROs in over 60 countries.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="group inline-flex items-center gap-3 bg-white text-vento-navy px-9 py-4 font-body font-bold text-xs uppercase tracking-[0.12em] rounded-full hover:shadow-xl hover:shadow-white/10 transition-all">
                Request A Quote
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="inline-flex items-center gap-3 px-9 py-4 font-body font-bold text-xs uppercase tracking-[0.12em] text-white/60 border border-white/15 rounded-full hover:bg-white/5 hover:text-white transition-all">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 hidden lg:grid grid-cols-3 gap-6"
        >
          {[
            { val: '500+', label: 'Airlines Served' },
            { val: '10K+', label: 'Parts in Stock' },
            { val: '24/7', label: 'AOG Support' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-display text-white mb-1">{s.val}</div>
              <div className="text-white/30 text-[10px] font-body font-bold uppercase tracking-[0.2em]">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Scroll cue */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
    >
      <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center pt-2">
        <div className="w-0.5 h-2 rounded-full bg-white/40" />
      </div>
    </motion.div>
  </section>
);

const TrustStrip = () => (
  <section className="bg-white border-b border-vento-navy/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-wrap items-center justify-between gap-6">
      <span className="text-vento-navy/30 text-[10px] font-body font-bold uppercase tracking-[0.3em]">Trusted By</span>
      {['Boeing', 'Airbus', 'Embraer', 'Rolls-Royce', 'GE Aviation', 'Pratt & Whitney'].map((n) => (
        <span key={n} className="text-vento-navy/20 text-sm font-body font-bold tracking-wider">{n}</span>
      ))}
    </div>
  </section>
);

const SplitFlapChar = ({ char, delay }: { char: string; delay: number }) => (
  <span
    className="flip-tile inline-flex items-center justify-center w-[2.1rem] h-[2.8rem] sm:w-[2.6rem] sm:h-[3.2rem] bg-white text-vento-navy font-body font-extrabold text-lg sm:text-xl rounded-[4px] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_4px_rgba(0,0,0,0.4)] relative overflow-hidden select-none"
    style={{ animationDelay: `${delay}ms` }}
  >
    <span className="absolute inset-x-0 top-1/2 h-px bg-black/10" />
    {char}
  </span>
);

const SplitFlapRow = ({ label, text, delay }: { label: string; text: string; delay: number }) => (
  <div className="flex items-center gap-4 sm:gap-6">
    <span className="text-white/40 text-[10px] sm:text-xs font-body font-bold uppercase tracking-[0.15em] w-16 sm:w-20 shrink-0">{label}:</span>
    <div className="flex gap-[3px] sm:gap-1 flex-wrap">
      {text.split('').map((ch, i) => (
        <SplitFlapChar key={`${label}-${i}`} char={ch} delay={delay + i * 60} />
      ))}
    </div>
  </div>
);

const StatusTag = ({ label, color, delay }: { label: string; color: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay / 1000 }}
    className="flex items-center gap-2"
  >
    <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
    <span className="text-[10px] sm:text-xs font-body font-bold uppercase tracking-[0.2em] text-white/60">{label}</span>
  </motion.div>
);

const GlobalLogisticsBoard = () => (
  <section className="py-20 bg-vento-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 bg-white rounded-2xl border border-vento-navy/[0.06] mb-6 overflow-hidden"
      >
        {[
          { val: '5 Countries', sub: 'Global Operations' },
          { val: '2,300+ Parts', sub: 'Active Stocked Inventory' },
          { val: 'ASA-100', sub: 'Quality Certified' },
        ].map((s, i) => (
          <div key={s.sub} className={`p-6 sm:p-8 text-center ${i < 2 ? 'border-r border-vento-navy/[0.06]' : ''}`}>
            <div className="text-xl sm:text-2xl md:text-3xl font-display text-vento-navy mb-1">{s.val}</div>
            <div className="text-[9px] sm:text-[10px] font-body font-bold uppercase tracking-[0.2em] text-vento-navy/35">{s.sub}</div>
          </div>
        ))}
      </motion.div>

      {/* Split-flap board */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative bg-[#0c1117] rounded-2xl p-8 sm:p-10 md:p-12 overflow-hidden"
      >
        {/* Plane silhouette */}
        <div className="absolute top-1/2 right-8 sm:right-12 -translate-y-1/2 opacity-[0.04]">
          <Plane className="w-48 h-48 sm:w-64 sm:h-64 plane-float" />
        </div>

        {/* Header */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-emerald-400/80 text-[10px] sm:text-[11px] font-body font-bold uppercase tracking-[0.25em]">
            System Status: Global Logistics
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          {/* Flap rows */}
          <div className="space-y-5 sm:space-y-6">
            <SplitFlapRow label="Dest" text="PHILIPPINES" delay={200} />
            <SplitFlapRow label="Cargo" text="TURBINEBLADE" delay={600} />
            <SplitFlapRow label="Status" text="ASA100CERT" delay={1000} />
          </div>

          {/* Status indicators */}
          <div className="flex lg:flex-col gap-4 sm:gap-5">
            <StatusTag label="On-Time" color="bg-emerald-400" delay={800} />
            <StatusTag label="In-Transit" color="bg-sky-400" delay={1000} />
            <StatusTag label="Verified" color="bg-emerald-400" delay={1200} />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const WhyUs = () => {
  const services = [
    { icon: <Wrench className="w-6 h-6" />, title: 'Parts Sourcing', text: 'Direct access to hard-to-find components across commercial and regional aviation sectors.' },
    { icon: <DollarSign className="w-6 h-6" />, title: 'RFQ Fulfillment', text: 'Aggressive quote turnaround times with verified pricing and availability data.' },
    { icon: <Box className="w-6 h-6" />, title: 'Inventory Management', text: 'Strategic storage and distribution solutions optimized for high-velocity spare parts.' },
    { icon: <Globe className="w-6 h-6" />, title: 'Global Logistics', text: 'Secure international shipping with full compliance and tracking across five continents.' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Certification & Compliance', text: 'Full documentation traceability under ASA-100 and international aviation standards.' },
    { icon: <Award className="w-6 h-6" />, title: 'Inventory Acquisition', text: 'We acquire excess inventory and aircraft components to expand our global availability.' },
  ];

  return (
    <section className="py-28 bg-vento-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row — heading left, description right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-20"
        >
          <h2 className="text-4xl md:text-[2.75rem] font-display text-vento-navy leading-[1.1] tracking-tight">
            Aerospace Precision
            <br />
            at Every Turn.
          </h2>
          <p className="text-vento-navy/50 text-base leading-relaxed lg:pt-2">
            From critical parts sourcing to fleet-wide inventory management, we provide the technical infrastructure that keeps the global aviation fleet in the air.
          </p>
        </motion.div>

        {/* 3×2 service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-vento-navy/[0.06] border border-vento-navy/[0.06] rounded-xl overflow-hidden">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white p-8 lg:p-10"
            >
              <div className="text-vento-navy mb-6">
                {item.icon}
              </div>
              <h3 className="text-[15px] font-body font-bold text-vento-navy mb-2">{item.title}</h3>
              <p className="text-vento-navy/40 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-28 bg-vento-bg overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200"
              alt="Aircraft Engine"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vento-navy/30 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl shadow-vento-navy/10 p-6 max-w-[200px]">
            <div className="text-4xl font-display text-vento-navy mb-1">15+</div>
            <div className="text-vento-navy/50 text-xs font-body font-bold uppercase tracking-[0.15em]">Years of Industry Experience</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-vento-navy/40 text-[11px] font-body font-bold uppercase tracking-[0.25em] mb-4">About Us</p>
          <h2 className="text-4xl md:text-5xl font-display text-vento-navy leading-[1.05] tracking-tight mb-8">
            A trusted global supplier of certified aviation components.
          </h2>
          <div className="space-y-5 text-vento-navy/55 text-base leading-relaxed mb-10">
            <p>
              VENTO Aviation is a global supplier specializing in sourcing, stocking, and delivering certified aircraft components for airlines, MROs, and aviation operators worldwide.
            </p>
            <p>
              Our model is simple: you ask, we deliver. With a broad partner network, strict quality assurance, and a focus on operational speed — we keep your aircraft flying.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['FAA & EASA certified sourcing', 'Direct OEM & MRO access', 'In-house quality control', 'Same-day AOG response'].map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-vento-navy mt-0.5 shrink-0" />
                <span className="text-vento-navy/70 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ProductsGrid = () => {
  const categories = [
    { name: 'Engine Parts', desc: 'New, serviceable, and overhauled components.', image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800', icon: <Wrench className="w-5 h-5" /> },
    { name: 'Hydraulics', desc: 'Pumps, actuators, and system components.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800', icon: <Settings className="w-5 h-5" /> },
    { name: 'Landing Gear', desc: 'Structural and actuating components.', image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800', icon: <Plane className="w-5 h-5" /> },
    { name: 'Airframe Parts', desc: 'Panels, doors, and fuselage components.', image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800', icon: <Box className="w-5 h-5" /> },
    { name: 'Instruments', desc: 'Avionics, gauges, and flight deck instruments.', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800', icon: <Gauge className="w-5 h-5" /> },
    { name: 'Surplus Purchase', desc: 'Fast valuation, competitive offers.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800', icon: <DollarSign className="w-5 h-5" /> },
  ];

  return (
    <section id="products" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-vento-navy/40 text-[11px] font-body font-bold uppercase tracking-[0.25em] mb-4">Product Line</p>
          <h2 className="text-4xl md:text-5xl font-display text-vento-navy tracking-tight">
            Components for every system
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vento-navy/90 via-vento-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-vento-navy transition-all">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-display text-white mb-1">{cat.name}</h3>
                <p className="text-white/50 text-sm">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FullWidthCTA = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=2000"
        alt="Aviation"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
      />
      <div className="absolute inset-0 bg-vento-navy/80" />
    </div>
    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-white/40 text-[11px] font-body font-bold uppercase tracking-[0.3em] mb-6">Ready to partner?</p>
        <h2 className="text-4xl md:text-6xl font-display text-white tracking-tight mb-6 leading-[1.05]">
          Let's keep your fleet flying.
        </h2>
        <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Whether it's an urgent AOG situation or routine inventory replenishment, our team is ready 24/7.
        </p>
        <a href="#contact" className="group inline-flex items-center gap-3 bg-white text-vento-navy px-10 py-5 font-body font-bold text-xs uppercase tracking-[0.12em] rounded-full hover:shadow-2xl hover:shadow-white/10 transition-all">
          Request A Quote
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

const ContactSection = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', phone: '', partNumber: '', message: '' });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); alert('Quote request submitted!'); };

  return (
    <section id="contact" className="py-28 bg-vento-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <p className="text-vento-navy/40 text-[11px] font-body font-bold uppercase tracking-[0.25em] mb-4">Contact</p>
            <h2 className="text-4xl font-display text-vento-navy tracking-tight mb-8">Get in touch.</h2>
            <p className="text-vento-navy/50 text-base leading-relaxed mb-12">
              Have a specific requirement? Our team is ready to assist you 24/7 with your aviation parts needs.
            </p>
            <div className="space-y-6">
              {[
                { icon: <Phone size={18} />, label: 'Phone', value: '+1 (929) 425-0075' },
                { icon: <Mail size={18} />, label: 'Email', value: 'sales@ventoaviation.com' },
                { icon: <MapPin size={18} />, label: 'Warehouse', value: '2001 57th Street, Brooklyn NY 11204' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-vento-navy/[0.04] flex items-center justify-center text-vento-navy shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-sm font-body font-bold text-vento-navy">{item.label}</div>
                    <div className="text-vento-navy/50 text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-2xl border border-vento-navy/5">
              <h4 className="text-sm font-body font-bold text-vento-navy mb-4 flex items-center gap-2">
                <Globe size={16} /> Global Locations
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {['United States (NY)', 'Mexico (CDMX)', 'Argentina (Córdoba)', 'France (Bordeaux)'].map((loc) => (
                  <div key={loc} className="flex items-center gap-2 text-vento-navy/60">
                    <CheckCircle2 size={13} className="text-vento-navy shrink-0" /> {loc}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-vento-navy/5 border border-vento-navy/5">
              <h3 className="text-2xl font-display text-vento-navy mb-1">Request A Quote</h3>
              <p className="text-vento-navy/40 text-xs uppercase tracking-[0.2em] font-body font-semibold mb-8">RFQ Form</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-vento-navy/60 font-body ml-1">Full Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full px-5 py-3.5 rounded-xl bg-vento-bg border border-vento-navy/8 focus:border-vento-navy outline-none transition-all text-sm" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-vento-navy/60 font-body ml-1">Email</label>
                    <input type="email" required placeholder="john@company.com" className="w-full px-5 py-3.5 rounded-xl bg-vento-bg border border-vento-navy/8 focus:border-vento-navy outline-none transition-all text-sm" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-vento-navy/60 font-body ml-1">Phone</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-5 py-3.5 rounded-xl bg-vento-bg border border-vento-navy/8 focus:border-vento-navy outline-none transition-all text-sm" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-vento-navy/60 font-body ml-1">Part Number</label>
                    <input type="text" required placeholder="e.g. Engine Valve X-100" className="w-full px-5 py-3.5 rounded-xl bg-vento-bg border border-vento-navy/8 focus:border-vento-navy outline-none transition-all text-sm" onChange={(e) => setFormData({ ...formData, partNumber: e.target.value })} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-vento-navy/60 font-body ml-1">Message</label>
                  <textarea rows={4} placeholder="Tell us about your requirements..." className="w-full px-5 py-3.5 rounded-xl bg-vento-bg border border-vento-navy/8 focus:border-vento-navy outline-none transition-all text-sm resize-none" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <button type="submit" className="w-full bg-vento-navy text-white py-4 rounded-xl font-body font-bold text-sm hover:bg-vento-navy/90 transition-all shadow-lg shadow-vento-navy/15 flex items-center justify-center gap-2">
                  Submit Request <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default function NewHeroPage() {
  return (
    <div className="font-body">
      <Navbar transparent />
      <HeroPremium />
      <TrustStrip />
      <GlobalLogisticsBoard />
      <WhyUs />
      <AboutSection />
      <ProductsGrid />
      <FullWidthCTA />
      <ContactSection />
      <Footer />
    </div>
  );
}
