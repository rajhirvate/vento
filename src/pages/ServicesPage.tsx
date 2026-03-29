import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  ChevronRight,
  DollarSign,
  Box,
  Award,
  Settings,
  ArrowRight,
  ShieldCheck,
  Clock,
  Zap,
  Menu,
  X,
  MapPin,
} from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


// ─── Hero ──────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative pt-40 pb-28 bg-vento-navy overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]"
      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
    />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-6">Services</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight font-corporate mb-6">
            Everything your operation needs. One partner.
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            From sourcing a single AOG part to managing full aircraft lots — Vento provides end-to-end aviation supply chain services backed by decades of combined expertise.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:grid grid-cols-2 gap-3"
        >
          {['Parts Sourcing', 'RFQ Fulfillment', 'LOT Purchasing', 'Advisory'].map((s, i) => (
            <div key={i} className="border border-white/10 rounded-2xl px-5 py-4">
              <p className="text-white/60 text-sm font-corporate font-semibold">{s}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Service Cards ─────────────────────────────────────────────────────────

const ServiceCards = () => {
  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Parts Sourcing & Acquisition',
      description: 'We identify, locate, and acquire certified aircraft parts from our global network of airlines, MROs, and OEM-approved suppliers. Every part comes with full documentation and traceability.',
      highlights: ['Global supplier network', 'FAA & EASA certified', 'Full traceability'],
      slug: 'parts-sourcing',
    },
    {
      icon: <ChevronRight className="w-6 h-6" />,
      title: 'Parts Sales & RFQ Fulfillment',
      description: 'Submit your part number request and receive up to 3 competitive offers within 24 hours. We handle the entire RFQ process — from evaluation to delivery — with complete transparency.',
      highlights: ['24hr response time', 'Up to 3 competitive offers', 'End-to-end handling'],
      slug: 'rfq-fulfillment',
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: 'Inventory Management',
      description: 'We manage and optimise surplus inventory on behalf of operators and lessors. Our team tracks, evaluates, and markets your stock to maximise returns while minimising administrative burden.',
      highlights: ['On-site or remote management', 'Real-time inventory reporting', 'Maximised asset returns'],
      slug: 'inventory-management',
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'LOT Purchasing',
      description: 'We purchase full aircraft lots and complete component packages directly from airlines, lessors, and MROs worldwide. Fast valuations, transparent offers, and quick closing — no delays.',
      highlights: ['Full aircraft lot purchases', 'Fast 48hr valuations', 'Cash offers, quick close'],
      slug: 'lot-purchasing',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Expo & Direct Sales',
      description: 'Vento attends major aviation expos and industry events worldwide. Meet our team in person to source parts, explore surplus opportunities, and build the kind of partnerships that last.',
      highlights: ['Present at key global expos', 'In-person deal closing', 'Direct relationship building'],
      slug: 'expo-sales',
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Advisory & Consulting',
      description: 'Leverage our team\'s 20+ years of combined aviation experience for strategic guidance on parts procurement, surplus liquidation, supplier qualification, and supply chain optimisation.',
      highlights: ['Procurement strategy', 'Surplus liquidation planning', 'Supplier qualification'],
      slug: 'advisory',
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
          className="mb-14"
        >
          <p className="text-vento-navy/40 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">What We Offer</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-vento-navy leading-tight font-corporate max-w-2xl">
            Our services, in detail.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="group bg-white border border-vento-navy/8 rounded-3xl p-8 flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-vento-navy flex items-center justify-center text-white mb-6 shadow-md shadow-vento-navy/20">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-vento-navy font-corporate mb-3">{s.title}</h3>
              <p className="text-vento-navy/55 text-sm leading-relaxed mb-6 flex-1">{s.description}</p>

              <ul className="space-y-2 mb-8">
                {s.highlights.map((h, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-vento-navy/50">
                    <div className="w-1 h-1 rounded-full bg-vento-navy/30 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={`/services/${s.slug}`}
                className="flex items-center gap-2 text-vento-navy font-bold font-corporate text-xs uppercase tracking-widest group-hover:gap-3 transition-all"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Why Vento Bar ─────────────────────────────────────────────────────────

const WhyVentoBar = () => {
  const differentiators = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Global Reach',
      description: 'Operations across 5 countries with a supplier network spanning every major aviation market.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Certified Parts Only',
      description: 'Every component sourced with full FAA/EASA documentation and traceable provenance.',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Fast Turnaround',
      description: '24-hour RFQ response. AOG support with same-day dispatch capability worldwide.',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Multi-Language Support',
      description: 'Our team operates in English, Spanish, French, and Filipino — wherever you are.',
    },
  ];

  return (
    <section className="py-20 bg-vento-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Why Vento</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-corporate">
            What sets us apart.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {differentiators.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white mb-5">
                {d.icon}
              </div>
              <h3 className="text-white font-bold font-corporate mb-3">{d.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{d.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Page CTA ──────────────────────────────────────────────────────────────

const PageCTA = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-vento-bg border border-vento-navy/8 rounded-3xl px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div className="max-w-xl">
          <p className="text-vento-navy/40 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Get In Touch</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-vento-navy leading-tight font-corporate mb-4">
            Have a specific requirement?<br />Talk to our team.
          </h2>
          <p className="text-vento-navy/55 text-base leading-relaxed">
            Whether it's an AOG emergency or a long-term supply agreement, we're ready to help. Submit your RFQ and we'll get back to you within 24 hours.
          </p>
        </div>
        <div className="flex flex-col gap-4 shrink-0">
          <a
            href="/#contact"
            className="flex items-center justify-center gap-3 bg-vento-navy text-white px-10 py-5 font-corporate font-bold text-xs uppercase tracking-[0.15em] hover:bg-vento-navy/90 transition-colors rounded-full shadow-xl shadow-vento-navy/20"
          >
            Submit an RFQ <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/#contact"
            className="flex items-center justify-center gap-3 border border-vento-navy/20 text-vento-navy/60 hover:text-vento-navy hover:border-vento-navy/40 px-10 py-5 font-corporate font-bold text-xs uppercase tracking-[0.15em] transition-colors rounded-full"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);


// ─── Page ──────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <ServiceCards />
      <WhyVentoBar />
      <PageCTA />
      <Footer />
    </div>
  );
}
