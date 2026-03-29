import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  Phone,
  Mail,
  Menu,
  X,
  ShieldCheck,
  Users,
  Globe,
  Clock,
  MessageSquare,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


// ─── Hero ──────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative pt-36 pb-20 bg-vento-navy overflow-hidden rounded-b-[3rem]">
    <div className="absolute inset-0 bg-gradient-to-br from-vento-navy via-vento-navy to-vento-navy/80" />
    <div className="absolute inset-0 opacity-[0.03]"
      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
    />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-5">About Vento Aviation</p>
        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight font-corporate mb-6 max-w-4xl">
          6 months old.<br />Decades of experience.
        </h1>
        <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
          Vento isn't built on the company's age — it's built on the combined expertise of a team that has spent careers moving parts around the world.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Company Story ─────────────────────────────────────────────────────────

const CompanyStory = () => (
  <section className="pt-20 pb-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-vento-navy/40 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Our Story</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-vento-navy leading-tight font-corporate mb-8">
            Why Vento was built.
          </h2>
          <div className="space-y-5 text-vento-navy/60 text-base leading-relaxed">
            <p>
              Vento was founded after years of watching a broken model repeat itself — slow responses, opaque pricing, and parts sourced without proper traceability. Our founders decided there had to be a better way.
            </p>
            <p>
              With a growth-first mindset and deep roots in the aviation supply chain, Vento launched with one goal: to be the partner airlines and MROs actually want to call when it matters most.
            </p>
            <p>
              We're a young company built by experienced people. Every transaction we close is backed by decades of collective knowledge across procurement, logistics, quality assurance, and aviation operations.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1520437358207-323b43b50729?auto=format&fit=crop&q=80&w=1000"
            alt="Vento Aviation operations"
            className="rounded-3xl w-full aspect-[4/3] object-cover shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-vento-navy text-white rounded-2xl px-7 py-5 shadow-2xl">
            <p className="text-3xl font-bold font-corporate">2024</p>
            <p className="text-white/60 text-sm mt-0.5">Year founded</p>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

// ─── Mission & Vision ──────────────────────────────────────────────────────

const MissionVision = () => (
  <section className="py-20 bg-vento-navy overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Purpose</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight font-corporate">
          Mission & Vision
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          viewport={{ once: true }}
          className="border border-white/10 rounded-3xl p-10"
        >
          <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-6">Mission</p>
          <p className="text-white text-2xl font-bold font-corporate leading-snug mb-6">
            To make certified aviation parts accessible, fast, and reliable — everywhere in the world.
          </p>
          <p className="text-white/50 text-base leading-relaxed">
            We exist to remove friction from the aviation supply chain. Every RFQ we answer, every part we deliver, every deal we close moves the industry forward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-10"
        >
          <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-6">Vision</p>
          <p className="text-white text-2xl font-bold font-corporate leading-snug mb-6">
            To become the most trusted independent aviation parts supplier in the world.
          </p>
          <p className="text-white/50 text-base leading-relaxed">
            We're building a global operation trusted by both sides of the market — buyers who rely on us for speed and quality, and sellers who trust us for transparency and reach.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Team Stats ────────────────────────────────────────────────────────────

const TeamStats = () => {
  const stats = [
    { icon: <Clock className="w-6 h-6" />, value: '40+', label: 'Combined Years of Experience' },
    { icon: <Globe className="w-6 h-6" />, value: '5', label: 'Countries of Operation' },
    { icon: <Users className="w-6 h-6" />, value: '20+', label: 'Team Members Worldwide' },
    { icon: <ShieldCheck className="w-6 h-6" />, value: '3', label: 'Types of Specialists' },
  ];

  const specialists = ['Licensed Pilots', 'Aviation Engineers', 'Certified Mechanics'];

  return (
    <section className="py-20 bg-vento-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-vento-navy/40 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">The Team</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-vento-navy leading-tight font-corporate mb-8">
              People who know aviation from the inside.
            </h2>
            <p className="text-vento-navy/60 text-base leading-relaxed mb-10">
              Our team isn't made up of salespeople who learned the industry — it's built from professionals who lived it. Pilots, engineers, and mechanics who now bring that expertise to every transaction.
            </p>
            <div className="space-y-3">
              {specialists.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-vento-navy" />
                  <span className="text-vento-navy/70 text-sm font-medium">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-vento-navy/8 rounded-3xl p-8"
              >
                <div className="w-12 h-12 rounded-2xl bg-vento-navy flex items-center justify-center text-white mb-5 shadow-md shadow-vento-navy/20">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-vento-navy font-corporate">{stat.value}</p>
                <p className="text-vento-navy/50 text-sm mt-1 leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// ─── Meet the Team ─────────────────────────────────────────────────────────

const MeetTheTeam = () => {
  const team = [
    {
      name: 'Frank Cohen',
      title: 'Chief Revenue Officer',
      location: 'Brooklyn, NY, USA',
      phones: ['929-425-0076', '347-893-6131'],
      email: 'Frank@ventoaviation.com',
      initials: 'FC',
    },
    {
      name: 'Erik Pastor',
      title: 'Operations Manager',
      location: 'Brooklyn, NY, USA',
      phones: ['929-425-0075 ext 101'],
      email: 'Erikp@ventoaviation.com',
      initials: 'EP',
    },
    {
      name: 'Shawn Killeen',
      title: 'New Business Development',
      location: 'Brooklyn, NY, USA',
      phones: ['929-425-0078', '708-476-6576'],
      email: 'Shawn@ventoaviation.com',
      initials: 'SK',
    },
    {
      name: 'Ruth Zilberstein',
      title: 'New Business Development',
      location: 'Mexico City, Mexico',
      phones: ['929-425-0078', '305-924-7233'],
      email: 'Ruth@ventoaviation.com',
      initials: 'RZ',
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-vento-navy/40 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Our People</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-vento-navy leading-tight font-corporate">
            Meet the team
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              viewport={{ once: true }}
              className="group bg-vento-bg border border-vento-navy/8 rounded-3xl p-7 flex flex-col hover:shadow-lg hover:border-vento-navy/15 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-2xl bg-vento-navy flex items-center justify-center mb-5 shadow-md shadow-vento-navy/20">
                <span className="text-white font-bold font-corporate text-base tracking-wide">{member.initials}</span>
              </div>

              {/* Name + title */}
              <h3 className="text-vento-navy font-bold font-corporate text-lg leading-tight mb-1">{member.name}</h3>
              <p className="text-vento-navy/45 text-xs font-semibold uppercase tracking-widest mb-5">{member.title}</p>

              {/* Divider */}
              <div className="border-t border-vento-navy/8 mb-5" />

              {/* Contact details */}
              <div className="space-y-2.5 flex-1">
                {member.phones.map((phone, j) => (
                  <a
                    key={j}
                    href={`tel:+1${phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-2.5 text-vento-navy/55 hover:text-vento-navy transition-colors group/link"
                  >
                    <div className="w-6 h-6 rounded-lg bg-vento-navy/6 flex items-center justify-center shrink-0">
                      <Phone className="w-3 h-3" />
                    </div>
                    <span className="text-xs font-medium">{phone}</span>
                  </a>
                ))}
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2.5 text-vento-navy/55 hover:text-vento-navy transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-vento-navy/6 flex items-center justify-center shrink-0">
                    <Mail className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-medium truncate">{member.email}</span>
                </a>
                <div className="flex items-center gap-2.5 text-vento-navy/40">
                  <div className="w-6 h-6 rounded-lg bg-vento-navy/6 flex items-center justify-center shrink-0">
                    <MapPin className="w-3 h-3" />
                  </div>
                  <span className="text-xs">{member.location}</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={`mailto:${member.email}`}
                className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 border border-vento-navy/15 rounded-xl text-vento-navy/60 hover:text-vento-navy hover:border-vento-navy/30 text-xs font-bold uppercase tracking-widest transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Contact
              </a>
            </motion.div>
          ))}
        </div>

        {/* CAGE code badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <div className="flex items-center gap-3 bg-vento-bg border border-vento-navy/10 rounded-2xl px-5 py-3">
            <ShieldCheck className="w-4 h-4 text-vento-navy/40" />
            <span className="text-vento-navy/60 text-xs font-bold uppercase tracking-widest">CAGE Code</span>
            <span className="text-vento-navy font-bold text-sm font-corporate">17DW6</span>
          </div>
          <div className="flex items-center gap-3 bg-vento-bg border border-vento-navy/10 rounded-2xl px-5 py-3">
            <Globe className="w-4 h-4 text-vento-navy/40" />
            <span className="text-vento-navy/60 text-xs font-bold uppercase tracking-widest">Website</span>
            <span className="text-vento-navy font-bold text-sm font-corporate">ventoaviation.com</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// ─── Office Locations ──────────────────────────────────────────────────────

const Offices = () => {
  const locations = [
    {
      country: 'United States',
      city: 'Brooklyn, NY',
      detail: 'Global Headquarters',
      timezone: 'EST (UTC-5)',
      phone: '+1 (718) 000-0000',
      email: 'us@ventoaviation.com',
    },
    {
      country: 'Argentina',
      city: 'Buenos Aires',
      detail: 'South America Hub',
      timezone: 'ART (UTC-3)',
      phone: '+54 11 0000-0000',
      email: 'ar@ventoaviation.com',
    },
    {
      country: 'Mexico',
      city: 'Mexico City',
      detail: 'Latin America Office',
      timezone: 'CST (UTC-6)',
      phone: '+52 55 0000-0000',
      email: 'mx@ventoaviation.com',
    },
    {
      country: 'Philippines',
      city: 'Manila',
      detail: 'Asia Pacific Office',
      timezone: 'PHT (UTC+8)',
      phone: '+63 2 0000-0000',
      email: 'ph@ventoaviation.com',
    },
    {
      country: 'France',
      city: 'Paris',
      detail: 'European Operations',
      timezone: 'CET (UTC+1)',
      phone: '+33 1 00 00 00 00',
      email: 'fr@ventoaviation.com',
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-vento-navy/40 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Where We Are</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-vento-navy leading-tight font-corporate">
            Office locations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-8 border ${i === 0 ? 'bg-vento-navy border-vento-navy' : 'bg-vento-bg border-vento-navy/8'}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: i === 0 ? 'rgba(255,255,255,0.15)' : 'rgba(10,25,64,0.08)' }}>
                  <MapPin className={`w-4 h-4 ${i === 0 ? 'text-white/60' : 'text-vento-navy/50'}`} />
                </div>
                {i === 0 && (
                  <span className="text-[10px] font-bold uppercase tracking-widest font-corporate text-white/40 border border-white/15 rounded-full px-3 py-1">HQ</span>
                )}
              </div>
              <p className={`text-[10px] font-bold uppercase tracking-widest font-corporate mb-1 ${i === 0 ? 'text-white/40' : 'text-vento-navy/40'}`}>{loc.detail}</p>
              <h3 className={`text-xl font-bold font-corporate mb-1 ${i === 0 ? 'text-white' : 'text-vento-navy'}`}>{loc.country}</h3>
              <p className={`text-sm mb-6 ${i === 0 ? 'text-white/50' : 'text-vento-navy/50'}`}>{loc.city}</p>
              <div className={`border-t pt-6 space-y-3 ${i === 0 ? 'border-white/10' : 'border-vento-navy/8'}`}>
                <div className="flex items-center gap-2">
                  <Clock className={`w-3.5 h-3.5 ${i === 0 ? 'text-white/30' : 'text-vento-navy/30'}`} />
                  <span className={`text-xs ${i === 0 ? 'text-white/50' : 'text-vento-navy/50'}`}>{loc.timezone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className={`w-3.5 h-3.5 ${i === 0 ? 'text-white/30' : 'text-vento-navy/30'}`} />
                  <span className={`text-xs ${i === 0 ? 'text-white/50' : 'text-vento-navy/50'}`}>{loc.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className={`w-3.5 h-3.5 ${i === 0 ? 'text-white/30' : 'text-vento-navy/30'}`} />
                  <span className={`text-xs ${i === 0 ? 'text-white/50' : 'text-vento-navy/50'}`}>{loc.email}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ─── Page CTA ──────────────────────────────────────────────────────────────

const PageCTA = () => (
  <section className="py-16 bg-vento-navy">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div>
          <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Get Started</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight font-corporate">
            Ready to work together?
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <a
            href="/#contact"
            className="flex items-center justify-center gap-3 bg-white text-vento-navy px-10 py-5 font-corporate font-bold text-xs uppercase tracking-[0.15em] hover:bg-white/90 transition-colors rounded-full shadow-xl shadow-black/20"
          >
            Request a Quote <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            to="/"
            className="flex items-center justify-center gap-3 border border-white/20 text-white/70 hover:text-white hover:border-white/40 px-10 py-5 font-corporate font-bold text-xs uppercase tracking-[0.15em] transition-colors rounded-full"
          >
            Meet Our Team
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);


// ─── Page ──────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <CompanyStory />
      <MissionVision />
      <TeamStats />
      <MeetTheTeam />
      <Offices />
      <Footer />
    </div>
  );
}
