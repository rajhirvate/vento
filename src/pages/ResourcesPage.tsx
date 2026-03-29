import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Menu, X, Play, BookOpen, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// ─── Data ──────────────────────────────────────────────────────────────────

const CATEGORIES = ['All', 'Regulations', 'Parts & Components', 'MRO', 'Procurement', 'Safety', 'Industry Trends'];

const resources = [
  { id: 1, category: 'Regulations', title: 'Understanding FAA 8130-3 Airworthiness Tags', short: 'The FAA 8130-3 is the primary airworthiness approval tag required for aircraft parts traded in the US market. Learn what fields matter and why.', hasVideo: true },
  { id: 2, category: 'Regulations', title: 'EASA Form 1 vs FAA 8130-3: Key Differences', short: 'Both documents certify airworthiness but differ in scope, jurisdiction, and acceptance. This guide breaks down when each applies.', hasVideo: false },
  { id: 3, category: 'Regulations', title: 'AS9120 Certification: What It Means for Distributors', short: 'AS9120 is the quality management standard for aviation parts distributors. Understand what it requires and why buyers should demand it.', hasVideo: true },
  { id: 4, category: 'Regulations', title: 'Suspected Unapproved Parts (SUPs): How to Identify Them', short: 'SUPs are one of the biggest risks in aviation parts procurement. Learn the warning signs and how to protect your supply chain.', hasVideo: false },
  { id: 5, category: 'Regulations', title: 'Serviceable vs Overhauled vs New Parts: Legal Definitions', short: 'These terms have specific regulatory meanings that affect airworthiness, pricing, and documentation requirements. Know the difference.', hasVideo: false },
  { id: 6, category: 'Parts & Components', title: 'Aviation Parts Classification: OEM, PMA, and DER Explained', short: 'OEM, PMA, and DER parts each have distinct approval paths and use cases. This guide helps buyers understand what they\'re purchasing.', hasVideo: true },
  { id: 7, category: 'Parts & Components', title: 'What is a Life-Limited Part (LLP)?', short: 'LLPs have mandatory retirement cycles based on flight cycles or hours. Understanding LLP tracking is critical for compliance and safety.', hasVideo: false },
  { id: 8, category: 'Parts & Components', title: 'Rotable vs Expendable Parts: Procurement Implications', short: 'Rotable parts are repaired and returned to service; expendables are used once. Each requires a different sourcing and inventory strategy.', hasVideo: true },
  { id: 9, category: 'Parts & Components', title: 'Aircraft LOT Purchases: What\'s Included and What to Check', short: 'Buying a full aircraft lot means acquiring hundreds of parts at once. Here\'s a checklist of what to verify before committing.', hasVideo: false },
  { id: 10, category: 'Parts & Components', title: 'Understanding Time Since New (TSN) and Time Since Overhaul (TSO)', short: 'TSN and TSO are critical metrics for valuing and certifying rotable components. Learn how to read and verify these figures.', hasVideo: false },
  { id: 11, category: 'MRO', title: 'How MROs Source Parts: The Procurement Workflow', short: 'MRO procurement follows a structured process from RFQ to receipt inspection. Understanding it helps suppliers serve MROs better.', hasVideo: true },
  { id: 12, category: 'MRO', title: 'AOG Situations: What They Are and How Parts Suppliers Respond', short: 'Aircraft on Ground events are operational emergencies. Learn what AOG means, how it\'s declared, and what the supply chain must do.', hasVideo: true },
  { id: 13, category: 'MRO', title: 'C-Checks vs D-Checks: Parts Demand by Maintenance Event', short: 'Different maintenance checks require different parts volumes and lead times. Understanding this helps with supply planning.', hasVideo: false },
  { id: 14, category: 'MRO', title: 'Pooling Agreements in Aviation: How They Work', short: 'Parts pooling allows operators and MROs to share rotable inventory. This guide explains the structure and benefits.', hasVideo: false },
  { id: 15, category: 'MRO', title: 'Common Reasons Parts Fail Incoming Inspection', short: 'From missing documentation to physical damage, these are the top reasons parts are rejected at receipt — and how to avoid them.', hasVideo: true },
  { id: 16, category: 'Procurement', title: 'Writing an Effective Aviation RFQ', short: 'A well-structured RFQ gets faster, more accurate quotes. Learn what information to include to get the best responses from suppliers.', hasVideo: false },
  { id: 17, category: 'Procurement', title: 'How to Evaluate Aviation Parts Quotes: A Buyer\'s Guide', short: 'Price isn\'t the only factor. Learn how to assess quotes based on certification, lead time, warranty, and supplier credibility.', hasVideo: true },
  { id: 18, category: 'Procurement', title: 'Surplus Aviation Parts: Risks, Rewards, and Best Practices', short: 'Surplus parts can offer significant savings — but only when sourced correctly. This guide covers the key checks and safeguards.', hasVideo: false },
  { id: 19, category: 'Procurement', title: 'Understanding Aviation Parts Pricing: What Drives the Market', short: 'Parts prices are influenced by demand, availability, certification status, and market conditions. Learn how pricing works.', hasVideo: false },
  { id: 20, category: 'Procurement', title: 'Incoterms in Aviation Parts Trade: EXW, DAP, DDP Explained', short: 'Incoterms define who bears risk and cost at each stage of delivery. Understanding them prevents expensive misunderstandings.', hasVideo: true },
  { id: 21, category: 'Safety', title: 'Counterfeit Parts in Aviation: A Growing Threat', short: 'Counterfeit aviation parts cost lives and billions annually. Learn how to identify them and secure your supply chain.', hasVideo: true },
  { id: 22, category: 'Safety', title: 'Shelf Life and Storage Requirements for Aviation Parts', short: 'Many parts have defined shelf lives and specific storage conditions. Failing to comply voids certification and creates safety risk.', hasVideo: false },
  { id: 23, category: 'Safety', title: 'Traceability in the Aviation Supply Chain: Why It Matters', short: 'Full part history traceability is both a regulatory requirement and a safety imperative. Here\'s what good traceability looks like.', hasVideo: false },
  { id: 24, category: 'Safety', title: 'Packaging Standards for Aircraft Components', short: 'Improper packaging causes damage, invalidates warranty, and can compromise airworthiness. These are the industry standards.', hasVideo: false },
  { id: 25, category: 'Industry Trends', title: 'The Global Aviation Parts Market: 2025 Outlook', short: 'Fleet growth, retirements, and geopolitical factors are reshaping parts availability. Here\'s what the market looks like in 2025.', hasVideo: true },
  { id: 26, category: 'Industry Trends', title: 'Aircraft Fleet Growth and Its Impact on Parts Demand', short: 'As global fleets grow and age, demand for both new and serviceable parts is accelerating. Understand where demand is heading.', hasVideo: false },
  { id: 27, category: 'Industry Trends', title: 'Narrowbody vs Widebody: Parts Supply Chain Differences', short: 'Narrow and wide-body aircraft have fundamentally different supply chains, parts volumes, and sourcing strategies.', hasVideo: false },
  { id: 28, category: 'Industry Trends', title: 'The Rise of Independent Parts Distributors in Aviation', short: 'Independent distributors are gaining market share from OEMs. Find out why and what it means for buyers and sellers.', hasVideo: true },
  { id: 29, category: 'Industry Trends', title: 'Digitisation of Aviation Supply Chains: Where It Stands', short: 'From digital records to blockchain traceability, the industry is modernising. Here\'s where adoption stands today.', hasVideo: false },
  { id: 30, category: 'Procurement', title: 'Consignment Sales in Aviation: How the Model Works', short: 'Consignment allows sellers to market parts through a distributor without immediate sale. Learn how terms, fees, and payments work.', hasVideo: false },
];


// ─── Hero ──────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative pt-40 pb-28 bg-vento-navy overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]"
      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
    />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
        <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-6">Educational Resources</p>
        <h1 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
          Aviation knowledge, clearly explained.
        </h1>
        <p className="text-white/50 text-lg leading-relaxed">
          30 topics covering regulations, parts, procurement, MRO, and industry trends — written in plain language for buyers, sellers, and operators at every level.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Resource Card ─────────────────────────────────────────────────────────

const ResourceCard = ({ resource, index }: { resource: typeof resources[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index % 9) * 0.05 }}
      viewport={{ once: true }}
      className="bg-white border border-vento-navy/8 rounded-3xl p-7 flex flex-col hover:shadow-md transition-shadow duration-300"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="text-[10px] font-bold uppercase tracking-widest font-corporate text-vento-navy/40 border border-vento-navy/12 rounded-full px-3 py-1 shrink-0">
          {resource.category}
        </span>
        <div className="flex items-center gap-2 shrink-0">
          {resource.hasVideo && (
            <div className="w-6 h-6 rounded-full bg-vento-navy/8 flex items-center justify-center" title="Video available">
              <Play className="w-3 h-3 text-vento-navy/50" />
            </div>
          )}
          <div className="w-6 h-6 rounded-full bg-vento-navy/8 flex items-center justify-center" title="Short + long format">
            <FileText className="w-3 h-3 text-vento-navy/50" />
          </div>
        </div>
      </div>

      <h3 className="text-base font-bold text-vento-navy font-display leading-snug mb-3 flex-1">{resource.title}</h3>

      {/* Short summary */}
      <p className="text-vento-navy/55 text-sm leading-relaxed mb-5">{resource.short}</p>

      {/* Expanded: FAQ placeholder */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="border-t border-vento-navy/8 pt-5 mb-5 space-y-4">
              {resource.hasVideo && (
                <div className="bg-vento-navy/5 rounded-2xl aspect-video flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-vento-navy/30">
                    <Play className="w-8 h-8" />
                    <span className="text-xs font-corporate font-bold uppercase tracking-widest">Video Coming Soon</span>
                  </div>
                </div>
              )}
              <p className="text-vento-navy/55 text-sm leading-relaxed">
                This is the long-form version of this topic. Full article content, FAQ schema, and supporting slides will be published here once Frank provides the source material from the Google Drive folder.
              </p>
              <div className="space-y-3">
                {['What does this mean in practice?', 'Who does this apply to?', 'What are the key requirements?'].map((q, i) => (
                  <div key={i} className="border border-vento-navy/8 rounded-xl px-4 py-3">
                    <p className="text-vento-navy/60 text-xs font-bold font-corporate">{q}</p>
                    <p className="text-vento-navy/40 text-xs mt-1">Answer will be populated from Frank's source content.</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div className="flex items-center justify-between mt-auto pt-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-vento-navy font-bold font-corporate text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          {expanded ? (
            <><ChevronUp className="w-3.5 h-3.5" /> Show less</>
          ) : (
            <><BookOpen className="w-3.5 h-3.5" /> Read full article</>
          )}
        </button>
        {resource.hasVideo && !expanded && (
          <button className="flex items-center gap-1.5 text-vento-navy/40 hover:text-vento-navy font-corporate text-xs uppercase tracking-widest font-bold transition-colors">
            <Play className="w-3 h-3" /> Watch
          </button>
        )}
      </div>
    </motion.div>
  );
};

// ─── Resource Library ──────────────────────────────────────────────────────

const ResourceLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchesCategory = activeCategory === 'All' || r.category === activeCategory;
      const matchesSearch = search === '' ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.short.toLowerCase().includes(search.toLowerCase()) ||
        r.category.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section className="py-28 bg-vento-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Search + filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-vento-navy/30" />
            <input
              type="text"
              placeholder="Search topics, keywords…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-5 py-4 bg-white border border-vento-navy/10 rounded-2xl text-vento-navy text-sm placeholder-vento-navy/30 font-corporate focus:outline-none focus:border-vento-navy/30 transition-colors"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold font-corporate uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-vento-navy text-white shadow-md shadow-vento-navy/20'
                    : 'bg-white border border-vento-navy/10 text-vento-navy/50 hover:border-vento-navy/25 hover:text-vento-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-vento-navy/35 text-xs font-corporate font-semibold uppercase tracking-widest">
            {filtered.length} {filtered.length === 1 ? 'topic' : 'topics'} found
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((r, i) => (
              <ResourceCard key={r.id} resource={r} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-vento-navy/30 text-lg font-corporate font-bold">No topics match your search.</p>
            <button onClick={() => { setSearch(''); setActiveCategory('All'); }}
              className="mt-4 text-vento-navy/50 text-sm font-corporate underline hover:text-vento-navy transition-colors">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// ─── CTA ───────────────────────────────────────────────────────────────────

const CTA = () => (
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
          <p className="text-white/30 uppercase tracking-widest text-xs font-corporate font-semibold mb-4">Still have questions?</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight font-display mb-4">
            Talk to a specialist.
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            Our team includes licensed pilots, engineers, and mechanics. If you need guidance beyond what's in our resource library, we're happy to help.
          </p>
        </div>
        <a href="/#contact"
          className="flex items-center justify-center gap-3 bg-white text-vento-navy px-10 py-5 font-corporate font-bold text-xs uppercase tracking-[0.15em] hover:bg-white/90 transition-colors rounded-full shadow-xl shadow-black/20 shrink-0">
          Contact Our Team <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  </section>
);


// ─── Page ──────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <ResourceLibrary />
      <CTA />
      <Footer />
    </div>
  );
}
