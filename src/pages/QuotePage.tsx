import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Plus, Trash2, ArrowRight, Package, Building2, User, Mail, Phone, MapPin, Hash, Layers } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ─── Types ─────────────────────────────────────────────────────────────────

interface PartLine {
  id: number;
  partNumber: string;
  condition: string;
  qty: string;
}

interface FormData {
  companyName: string;
  individualName: string;
  email: string;
  companyAddress: string;
  phone: string;
}

const CONDITIONS = ['New (NS)', 'Serviceable (SV)', 'Overhauled (OH)', 'As Removed (AR)', 'Beyond Economical Repair (BER)', 'Unknown'];

// ─── Field components ──────────────────────────────────────────────────────

const Field = ({
  label,
  icon,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
}: {
  label: string;
  icon: React.ReactNode;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-vento-navy/50 text-xs font-bold uppercase tracking-[0.15em]">{label}{required && <span className="text-red-400 ml-0.5">*</span>}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-vento-navy/30">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full pl-11 pr-4 py-3.5 bg-white border border-vento-navy/12 rounded-xl text-vento-navy text-sm placeholder-vento-navy/25 focus:outline-none focus:border-vento-navy/40 focus:ring-2 focus:ring-vento-navy/8 transition-all"
      />
    </div>
  </div>
);

// ─── Part row ──────────────────────────────────────────────────────────────

const PartRow = ({
  part,
  index,
  onChange,
  onRemove,
  canRemove,
}: {
  part: PartLine;
  index: number;
  onChange: (id: number, field: keyof Omit<PartLine, 'id'>, value: string) => void;
  onRemove: (id: number) => void;
  canRemove: boolean;
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8, scale: 0.97 }}
    transition={{ duration: 0.2 }}
    className="grid grid-cols-12 gap-3 items-start bg-white border border-vento-navy/10 rounded-2xl p-4"
  >
    {/* Row number */}
    <div className="col-span-12 sm:col-span-1 flex sm:justify-center pt-1">
      <span className="text-vento-navy/25 text-xs font-bold font-corporate w-6 h-6 rounded-full border border-vento-navy/10 flex items-center justify-center shrink-0">
        {index + 1}
      </span>
    </div>

    {/* Part number */}
    <div className="col-span-12 sm:col-span-4">
      <label className="text-vento-navy/40 text-[10px] font-bold uppercase tracking-widest block mb-1">Part Number <span className="text-red-400">*</span></label>
      <div className="relative">
        <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-vento-navy/25" />
        <input
          type="text"
          placeholder="e.g. 5000-1234-00"
          value={part.partNumber}
          onChange={(e) => onChange(part.id, 'partNumber', e.target.value)}
          required
          className="w-full pl-9 pr-3 py-2.5 bg-vento-bg border border-vento-navy/10 rounded-lg text-vento-navy text-sm placeholder-vento-navy/25 focus:outline-none focus:border-vento-navy/30 transition-all"
        />
      </div>
    </div>

    {/* Condition */}
    <div className="col-span-7 sm:col-span-4">
      <label className="text-vento-navy/40 text-[10px] font-bold uppercase tracking-widest block mb-1">Condition</label>
      <div className="relative">
        <Layers className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-vento-navy/25 pointer-events-none" />
        <select
          value={part.condition}
          onChange={(e) => onChange(part.id, 'condition', e.target.value)}
          className="w-full pl-9 pr-3 py-2.5 bg-vento-bg border border-vento-navy/10 rounded-lg text-vento-navy text-sm focus:outline-none focus:border-vento-navy/30 transition-all appearance-none cursor-pointer"
        >
          <option value="">Select…</option>
          {CONDITIONS.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
    </div>

    {/* Qty */}
    <div className="col-span-4 sm:col-span-2">
      <label className="text-vento-navy/40 text-[10px] font-bold uppercase tracking-widest block mb-1">Qty <span className="text-red-400">*</span></label>
      <input
        type="number"
        min="1"
        placeholder="1"
        value={part.qty}
        onChange={(e) => onChange(part.id, 'qty', e.target.value)}
        required
        className="w-full px-3 py-2.5 bg-vento-bg border border-vento-navy/10 rounded-lg text-vento-navy text-sm placeholder-vento-navy/25 focus:outline-none focus:border-vento-navy/30 transition-all"
      />
    </div>

    {/* Remove */}
    <div className="col-span-1 flex justify-center pt-6 sm:pt-6">
      {canRemove && (
        <button
          type="button"
          onClick={() => onRemove(part.id)}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-vento-navy/25 hover:text-red-400 hover:bg-red-50 transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  </motion.div>
);

// ─── Page ──────────────────────────────────────────────────────────────────

export default function QuotePage() {
  const [form, setForm] = useState<FormData>({
    companyName: '',
    individualName: '',
    email: '',
    companyAddress: '',
    phone: '',
  });

  const [parts, setParts] = useState<PartLine[]>([
    { id: 1, partNumber: '', condition: '', qty: '' },
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  let nextId = React.useRef(2);

  const setField = (key: keyof FormData) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const updatePart = (id: number, field: keyof Omit<PartLine, 'id'>, value: string) =>
    setParts((prev) => prev.map((p) => (p.id === id ? { ...p, [field]: value } : p)));

  const addPart = () => {
    setParts((prev) => [...prev, { id: nextId.current++, partNumber: '', condition: '', qty: '' }]);
  };

  const removePart = (id: number) => setParts((prev) => prev.filter((p) => p.id !== id));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network delay — replace with real submission (e.g. EmailJS / Formspree / API)
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
            <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-5">Request A Quote</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight font-corporate mb-6 max-w-3xl">
              Tell us what you need. We'll get back within 24 hours.
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              Fill in your details and add as many part numbers as you need. Our team reviews every RFQ personally and responds with competitive pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form area */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatePresence mode="wait">
            {submitted ? (
              /* Success state */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-vento-navy/10 rounded-3xl p-16 text-center shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-vento-navy font-corporate mb-3">RFQ Received</h2>
                <p className="text-vento-navy/55 text-base leading-relaxed max-w-sm mx-auto mb-8">
                  Thanks, <strong>{form.individualName || form.companyName}</strong>. Our team will review your request and respond to <strong>{form.email}</strong> within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => { setSubmitted(false); setForm({ companyName: '', individualName: '', email: '', companyAddress: '', phone: '' }); setParts([{ id: 1, partNumber: '', condition: '', qty: '' }]); }}
                    className="px-8 py-4 bg-vento-navy text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-vento-navy/90 transition-all"
                  >
                    Submit Another RFQ
                  </button>
                  <a
                    href="/"
                    className="px-8 py-4 border border-vento-navy/15 text-vento-navy/60 hover:text-vento-navy hover:border-vento-navy/30 text-xs font-bold uppercase tracking-widest rounded-full transition-all"
                  >
                    Back to Home
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-vento-navy/10 rounded-3xl shadow-sm overflow-hidden"
              >
                {/* ── Section: Contact Details ── */}
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-9 h-9 rounded-xl bg-vento-navy flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h2 className="text-vento-navy font-bold font-corporate text-base">Contact Details</h2>
                      <p className="text-vento-navy/40 text-xs">Your company and personal information</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Company Name"
                      icon={<Building2 className="w-4 h-4" />}
                      placeholder="Acme Airlines Ltd."
                      value={form.companyName}
                      onChange={setField('companyName')}
                      required
                    />
                    <Field
                      label="Individual Name"
                      icon={<User className="w-4 h-4" />}
                      placeholder="John Smith"
                      value={form.individualName}
                      onChange={setField('individualName')}
                      required
                    />
                    <Field
                      label="Email Address"
                      icon={<Mail className="w-4 h-4" />}
                      type="email"
                      placeholder="john@acmeairlines.com"
                      value={form.email}
                      onChange={setField('email')}
                      required
                    />
                    <Field
                      label="Phone Number"
                      icon={<Phone className="w-4 h-4" />}
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={setField('phone')}
                    />
                    <div className="sm:col-span-2">
                      <Field
                        label="Company Address"
                        icon={<MapPin className="w-4 h-4" />}
                        placeholder="123 Airport Blvd, Miami, FL 33101, USA"
                        value={form.companyAddress}
                        onChange={setField('companyAddress')}
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-vento-navy/8" />

                {/* ── Section: Part Numbers ── */}
                <div className="p-8 sm:p-10">
                  <div className="flex items-center justify-between mb-7">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-vento-navy flex items-center justify-center shrink-0">
                        <Package className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h2 className="text-vento-navy font-bold font-corporate text-base">Part Numbers</h2>
                        <p className="text-vento-navy/40 text-xs">Add one or more parts to your request</p>
                      </div>
                    </div>
                    <span className="text-vento-navy/30 text-xs font-bold font-corporate uppercase tracking-widest">
                      {parts.length} {parts.length === 1 ? 'line' : 'lines'}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <AnimatePresence mode="popLayout">
                      {parts.map((part, index) => (
                        <PartRow
                          key={part.id}
                          part={part}
                          index={index}
                          onChange={updatePart}
                          onRemove={removePart}
                          canRemove={parts.length > 1}
                        />
                      ))}
                    </AnimatePresence>
                  </div>

                  <button
                    type="button"
                    onClick={addPart}
                    className="mt-4 w-full flex items-center justify-center gap-2 py-3 border border-dashed border-vento-navy/20 rounded-2xl text-vento-navy/50 hover:text-vento-navy hover:border-vento-navy/40 hover:bg-vento-bg text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Another Part
                  </button>
                </div>

                {/* Divider */}
                <div className="border-t border-vento-navy/8" />

                {/* ── Section: Notes + Submit ── */}
                <div className="p-8 sm:p-10">
                  <label className="text-vento-navy/50 text-xs font-bold uppercase tracking-[0.15em] block mb-3">
                    Additional Notes <span className="text-vento-navy/25 font-normal normal-case tracking-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Any special requirements, urgency, preferred certification tags, shipping destination, or other details our team should know…"
                    className="w-full px-4 py-3.5 bg-vento-bg border border-vento-navy/12 rounded-xl text-vento-navy text-sm placeholder-vento-navy/25 focus:outline-none focus:border-vento-navy/40 focus:ring-2 focus:ring-vento-navy/8 transition-all resize-none mb-8"
                  />

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-vento-navy/35 text-xs leading-relaxed max-w-xs">
                      By submitting this form you agree to be contacted by Vento Aviation regarding your request.
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
                        <>Submit RFQ <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

        </div>
      </section>

      <Footer />
    </div>
  );
}
