import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ─── Contact info ───────────────────────────────────────────────────────────

const offices = [
  {
    city: 'Brooklyn, NY',
    country: 'United States',
    label: 'Global HQ',
    phone: '+1 (929) 425-0075',
    email: 'sales@ventoaviation.com',
    timezone: 'EST (UTC-5)',
  },
  {
    city: 'Buenos Aires',
    country: 'Argentina',
    label: 'South America',
    phone: '+54 11 0000-0000',
    email: 'ar@ventoaviation.com',
    timezone: 'ART (UTC-3)',
  },
  {
    city: 'Mexico City',
    country: 'Mexico',
    label: 'Latin America',
    phone: '+52 55 0000-0000',
    email: 'mx@ventoaviation.com',
    timezone: 'CST (UTC-6)',
  },
  {
    city: 'Paris',
    country: 'France',
    label: 'Europe',
    phone: '+33 1 00 00 00 00',
    email: 'fr@ventoaviation.com',
    timezone: 'CET (UTC+1)',
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="font-sans bg-vento-bg min-h-screen">
      <Navbar transparent />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-vento-navy overflow-hidden rounded-b-[3rem]">
        <img
          src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&q=80&w=2000"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-vento-navy/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-5">Get In Touch</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight font-corporate mb-6 max-w-3xl">
              We're here. Let's talk.
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              Whether you have a parts inquiry, want to discuss a partnership, or just need to reach someone on our team — we respond to every message personally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* Left — contact info */}
            <div className="lg:col-span-2 space-y-5">

              {/* Quick contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-vento-navy rounded-3xl p-8 text-white"
              >
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Direct Contact</p>
                <div className="space-y-5">
                  <a href="tel:+19294250075" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                      <Phone className="w-4 h-4 text-white/70" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-1">Phone</p>
                      <p className="text-white font-semibold text-sm group-hover:text-white/80 transition-colors">+1 (929) 425-0075</p>
                    </div>
                  </a>
                  <a href="mailto:sales@ventoaviation.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                      <Mail className="w-4 h-4 text-white/70" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-1">Email</p>
                      <p className="text-white font-semibold text-sm group-hover:text-white/80 transition-colors">sales@ventoaviation.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-white/70" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-1">Response Time</p>
                      <p className="text-white font-semibold text-sm">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8">
                  <a
                    href="/request-for-quote"
                    className="flex items-center justify-center gap-2 w-full bg-white text-vento-navy px-6 py-3.5 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/90 transition-all"
                  >
                    Submit an RFQ <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>

              {/* Office locations */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white border border-vento-navy/10 rounded-3xl p-8"
              >
                <p className="text-vento-navy/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Our Offices</p>
                <div className="space-y-5">
                  {offices.map((office, i) => (
                    <div key={i} className={`flex items-start gap-4 ${i < offices.length - 1 ? 'pb-5 border-b border-vento-navy/6' : ''}`}>
                      <div className="w-9 h-9 rounded-xl bg-vento-bg border border-vento-navy/8 flex items-center justify-center shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-vento-navy/40" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="text-vento-navy font-bold text-sm">{office.city}</p>
                          <span className="text-[9px] font-bold uppercase tracking-widest text-vento-navy/30 border border-vento-navy/12 rounded-full px-2 py-0.5">{office.label}</span>
                        </div>
                        <p className="text-vento-navy/40 text-xs">{office.country} · {office.timezone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — contact form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className="bg-white border border-vento-navy/10 rounded-3xl p-14 text-center h-full flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-vento-navy font-corporate mb-3">Message Sent</h2>
                    <p className="text-vento-navy/50 text-base leading-relaxed max-w-sm mb-8">
                      Thanks, <strong>{form.name}</strong>. We'll get back to you at <strong>{form.email}</strong> within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', subject: '', message: '' }); }}
                      className="px-8 py-4 bg-vento-navy text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-vento-navy/90 transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white border border-vento-navy/10 rounded-3xl overflow-hidden"
                  >
                    {/* Form header */}
                    <div className="px-8 sm:px-10 pt-8 sm:pt-10 pb-7 border-b border-vento-navy/8">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-vento-navy flex items-center justify-center shrink-0">
                          <MessageSquare className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h2 className="text-vento-navy font-bold font-corporate text-base">Send a Message</h2>
                          <p className="text-vento-navy/40 text-xs">We read and reply to every message personally</p>
                        </div>
                      </div>
                    </div>

                    {/* Fields */}
                    <div className="px-8 sm:px-10 py-8 space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label className="text-vento-navy/50 text-xs font-bold uppercase tracking-[0.15em] block mb-1.5">Full Name <span className="text-red-400">*</span></label>
                          <input
                            type="text"
                            placeholder="John Smith"
                            value={form.name}
                            onChange={set('name')}
                            required
                            className="w-full px-4 py-3.5 bg-vento-bg border border-vento-navy/12 rounded-xl text-vento-navy text-sm placeholder-vento-navy/25 focus:outline-none focus:border-vento-navy/40 focus:ring-2 focus:ring-vento-navy/8 transition-all"
                          />
                        </div>
                        {/* Email */}
                        <div>
                          <label className="text-vento-navy/50 text-xs font-bold uppercase tracking-[0.15em] block mb-1.5">Email Address <span className="text-red-400">*</span></label>
                          <input
                            type="email"
                            placeholder="john@company.com"
                            value={form.email}
                            onChange={set('email')}
                            required
                            className="w-full px-4 py-3.5 bg-vento-bg border border-vento-navy/12 rounded-xl text-vento-navy text-sm placeholder-vento-navy/25 focus:outline-none focus:border-vento-navy/40 focus:ring-2 focus:ring-vento-navy/8 transition-all"
                          />
                        </div>
                        {/* Company */}
                        <div>
                          <label className="text-vento-navy/50 text-xs font-bold uppercase tracking-[0.15em] block mb-1.5">Company</label>
                          <input
                            type="text"
                            placeholder="Acme Airlines Ltd."
                            value={form.company}
                            onChange={set('company')}
                            className="w-full px-4 py-3.5 bg-vento-bg border border-vento-navy/12 rounded-xl text-vento-navy text-sm placeholder-vento-navy/25 focus:outline-none focus:border-vento-navy/40 focus:ring-2 focus:ring-vento-navy/8 transition-all"
                          />
                        </div>
                        {/* Phone */}
                        <div>
                          <label className="text-vento-navy/50 text-xs font-bold uppercase tracking-[0.15em] block mb-1.5">Phone</label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={form.phone}
                            onChange={set('phone')}
                            className="w-full px-4 py-3.5 bg-vento-bg border border-vento-navy/12 rounded-xl text-vento-navy text-sm placeholder-vento-navy/25 focus:outline-none focus:border-vento-navy/40 focus:ring-2 focus:ring-vento-navy/8 transition-all"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="text-vento-navy/50 text-xs font-bold uppercase tracking-[0.15em] block mb-1.5">Subject <span className="text-red-400">*</span></label>
                        <select
                          value={form.subject}
                          onChange={set('subject')}
                          required
                          className="w-full px-4 py-3.5 bg-vento-bg border border-vento-navy/12 rounded-xl text-vento-navy text-sm focus:outline-none focus:border-vento-navy/40 focus:ring-2 focus:ring-vento-navy/8 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select a topic…</option>
                          <option>Parts Inquiry</option>
                          <option>Request a Quote (RFQ)</option>
                          <option>Sell or Consign Parts</option>
                          <option>LOT Purchase Inquiry</option>
                          <option>Partnership / Business Development</option>
                          <option>Expo / Event Meeting Request</option>
                          <option>General Question</option>
                          <option>Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="text-vento-navy/50 text-xs font-bold uppercase tracking-[0.15em] block mb-1.5">Message <span className="text-red-400">*</span></label>
                        <textarea
                          rows={5}
                          placeholder="Tell us how we can help you…"
                          value={form.message}
                          onChange={set('message')}
                          required
                          className="w-full px-4 py-3.5 bg-vento-bg border border-vento-navy/12 rounded-xl text-vento-navy text-sm placeholder-vento-navy/25 focus:outline-none focus:border-vento-navy/40 focus:ring-2 focus:ring-vento-navy/8 transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-8 sm:px-10 pb-8 sm:pb-10 border-t border-vento-navy/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-vento-navy/30 text-xs leading-relaxed max-w-xs">
                        By submitting you agree to be contacted by Vento Aviation.
                      </p>
                      <button
                        type="submit"
                        disabled={loading}
                        className="shrink-0 flex items-center gap-2 bg-vento-navy text-white px-10 py-4 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-vento-navy/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-xl shadow-vento-navy/20"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>Send Message <Send className="w-3.5 h-3.5" /></>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
