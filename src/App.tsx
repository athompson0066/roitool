/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Bolt, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Calculator, 
  Users, 
  Globe, 
  Share2, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Mail, 
  User,
  Construction,
  Lightbulb,
  Droplets,
  Phone,
  Camera,
  Upload,
  ArrowLeft,
  Check,
  Play,
  Calendar,
  DollarSign
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = ({ onOpenModal, onOpenDemoModal }: { onOpenModal: () => void, onOpenDemoModal: () => void }) => (
  <header className="sticky top-0 z-50 w-full border-b border-charcoal/10 bg-background-light/80 backdrop-blur-md px-6 md:px-10 py-4 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="bg-primary p-1.5 rounded-lg text-white">
        <Bolt className="w-6 h-6" />
      </div>
      <h2 className="text-charcoal font-bold text-xl tracking-tight">
        ROI Tool <span className="text-primary text-xs align-top">CA</span>
      </h2>
    </div>
    <nav className="hidden md:flex items-center gap-8">
      <a className="text-sm font-medium hover:text-primary transition-colors" href="#features">Features</a>
      <button onClick={onOpenDemoModal} className="text-sm font-medium hover:text-primary transition-colors">Request Demo</button>
      <a className="text-sm font-medium hover:text-primary transition-colors" href="#how-it-works">How it Works</a>
    </nav>
    <div className="flex items-center gap-3">
      <button className="hidden sm:flex px-4 py-2 bg-charcoal/5 hover:bg-charcoal/10 text-charcoal rounded-lg text-sm font-bold transition-all">
        Login
      </button>
      <button onClick={onOpenModal} className="px-5 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all">
        Build Estimate
      </button>
    </div>
  </header>
);

const Hero = ({ onOpenModal, onOpenDemoModal }: { onOpenModal: () => void, onOpenDemoModal: () => void }) => (
  <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 overflow-hidden">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
          <CheckCircle2 className="w-4 h-4" />
          Built for Canadian Electricians
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-charcoal">
          Stop Losing Your Sundays to <span className="text-primary italic">Unpaid</span> Quoting.
        </h1>
        <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-xl">
          The only AI-powered estimator that automatically factors in CEC 2024 Code Requirements, current copper surcharges, and regional Canadian labor rates. Turn a 10-minute site walk into a professional PDF bid before you even start your van.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={onOpenModal} className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl text-lg font-bold shadow-xl shadow-primary/30 flex items-center justify-center gap-2 group transition-all">
            Build My First AI Estimate
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={onOpenDemoModal} className="px-8 py-4 bg-white border-2 border-charcoal/10 hover:border-primary/30 text-charcoal rounded-xl text-lg font-bold flex items-center justify-center gap-2 transition-all">
            Request a Demo
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative group"
      >
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl rounded-3xl -z-10"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-2xl border border-charcoal/5 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="h-4 w-24 bg-red-100 rounded mb-4"></div>
            <div className="space-y-2 opacity-40">
              <div className="h-2 w-full bg-charcoal/10 rounded"></div>
              <div className="h-2 w-5/6 bg-charcoal/10 rounded"></div>
              <div className="h-2 w-4/6 bg-charcoal/10 rounded"></div>
            </div>
            <div className="mt-8 pt-4 border-t border-dashed border-charcoal/10">
              <p className="text-[10px] font-mono text-red-500 uppercase font-bold">Inaccurate Estimate</p>
            </div>
            <img 
              className="mt-4 rounded opacity-50 grayscale aspect-[3/4] object-cover" 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400" 
              alt="Messy notes"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="bg-charcoal p-4 rounded-xl shadow-2xl transform rotate-3 translate-y-8 hover:rotate-0 transition-transform duration-500">
            <div className="flex justify-between items-start mb-6">
              <div className="h-6 w-6 bg-primary rounded"></div>
              <div className="h-3 w-16 bg-white/20 rounded"></div>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-white/10 rounded"></div>
              <div className="h-2 w-full bg-primary/40 rounded"></div>
              <div className="h-2 w-full bg-white/10 rounded"></div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10">
              <p className="text-[10px] font-mono text-primary uppercase font-bold">Optimized AI Quote</p>
            </div>
            <img 
              className="mt-4 rounded aspect-[3/4] object-cover" 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400" 
              alt="Professional quote"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="bg-charcoal py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16 text-center lg:text-left">
        <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Profit Recovery</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Why You’re Losing Money</h3>
        <p className="text-white/60 text-lg">Identify and fix the specific "invisible leaks" eating your margins.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "The Code Gap",
            desc: "CEC 2024 updates require AFCI protection and whole-home surge protection on most new installs. If you aren't billing for these $100+ breakers, you’re paying for them out of your own pocket."
          },
          {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "The Material Spike",
            desc: "Copper and conduit prices in Ontario and Manitoba aren't what they were six months ago. Stop quoting based on old invoices and start quoting based on today's distributor pricing."
          },
          {
            icon: <Clock className="w-8 h-8" />,
            title: "The 'First-In' Advantage",
            desc: "In the GTA, the first professional quote in the inbox wins 70% of the time. Don't wait until you're tired at 9:00 PM to send a price."
          }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group"
          >
            <div className="size-14 bg-primary/20 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h4 className="text-white text-xl font-bold mb-4">{feature.title}</h4>
            <p className="text-white/60 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const PlatformDetails = () => (
  <section id="how-it-works" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img 
            className="rounded-3xl shadow-2xl ring-1 ring-charcoal/5" 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" 
            alt="Electrician working"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">The ROI Platform</h2>
            <h3 className="text-4xl font-bold text-charcoal mb-6">Built for the Way You Work</h3>
          </div>
          <div className="space-y-8">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "EV Charger Intelligence",
                desc: "One-click load management logic. Our AI identifies if a panel needs a DCC-12 or a full 200A upgrade so you never under-quote an EV install again."
              },
              {
                icon: <Bolt className="w-6 h-6" />,
                title: "Automated ESA/Permit Logic",
                desc: "Built-in permit fee calculators for Ontario (ESA), Manitoba, and BC. We add the permit costs and inspection fees to your bid automatically."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Smart Multi-Trade Toggle",
                desc: "Managing more than just wires? Use our quick-toggles for multi-trade contractors to maintain separate labor rates for different technicians."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 size-12 bg-background-light rounded-full flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-charcoal mb-2">{item.title}</h4>
                  <p className="text-charcoal/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="py-24 bg-background-light">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-black text-charcoal mb-6">Trusted by 5-Star Pros from Toronto to Winnipeg.</h2>
      <p className="text-charcoal/60 text-lg max-w-3xl mx-auto leading-relaxed">
        Whether you are a residential specialist in Vaughan or a commercial fleet in Etobicoke, our platform scales with you. We’ve analyzed data from over 700 Canadian contractors to build the most accurate pricing engine in the country.
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40 grayscale">
        {/* Placeholder for logos */}
        <div className="h-8 w-32 bg-charcoal/20 rounded"></div>
        <div className="h-8 w-24 bg-charcoal/20 rounded"></div>
        <div className="h-8 w-40 bg-charcoal/20 rounded"></div>
        <div className="h-8 w-28 bg-charcoal/20 rounded"></div>
      </div>
    </div>
  </section>
);

const CTASection = ({ onOpenModal, onOpenDemoModal }: { onOpenModal: () => void, onOpenDemoModal: () => void }) => (
  <section className="bg-primary py-16 px-6">
    <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
      <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Reclaim 10 hours of your week.</h2>
      <p className="text-white/80 text-lg md:text-xl max-w-2xl">Special Offer: Sign up before March 18th, 2026, and we will personally import your current material price list and local labor rates for free.</p>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <button onClick={onOpenModal} className="bg-charcoal text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-charcoal/90 transition-all shadow-xl shadow-black/20">
          Get Started with AI Quoting
        </button>
        <button onClick={onOpenDemoModal} className="bg-white/20 text-white border border-white/30 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all">
          Request a Demo
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-background-light border-t border-charcoal/10 py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <Bolt className="w-6 h-6" />
          </div>
          <h2 className="text-charcoal font-bold text-xl tracking-tight">ROI Tool</h2>
        </div>
        <p className="text-charcoal/60 max-w-sm mb-6">Helping Canadian electrical contractors win more jobs and keep more profit through intelligent automation.</p>
        <div className="flex gap-4">
          <a className="size-10 bg-charcoal/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
            <Globe className="w-5 h-5" />
          </a>
          <a className="size-10 bg-charcoal/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
            <Share2 className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div>
        <h5 className="font-bold mb-6 text-charcoal">Product</h5>
        <ul className="space-y-4 text-charcoal/60 text-sm">
          <li><a className="hover:text-primary transition-colors" href="#">Estimation AI</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Material Database</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Integrations</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Roadmap</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold mb-6 text-charcoal">Company</h5>
        <ul className="space-y-4 text-charcoal/60 text-sm">
          <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Support</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-charcoal/5 text-center text-charcoal/40 text-xs">
      © 2024 The ROI Tool for Electricians. Designed in Canada. All rights reserved.
    </div>
  </footer>
);
const QuickEstimateModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    jobType: 'ev',
    city: 'Toronto',
    evDistance: '<10ft',
    panelAmperage: '200A',
    isFuseBox: false,
    meterLocation: 'outside',
    hasAttic: true,
    homeAge: 'post-1980',
    numUnits: 1,
    leadName: '',
    leadEmail: '',
    leadPhone: '',
    photo: null as File | null,
  });

  if (!isOpen) return null;

  const calculateEstimate = () => {
    // 1. Regional Rate
    const rates: Record<string, number> = {
      "Toronto": 135, "Vaughan": 135, "Vancouver": 135,
      "Kitchener": 115, "Hamilton": 115, "Calgary": 115,
      "Winnipeg": 95, "Saskatoon": 95, "Halifax": 95,
      "Default": 110
    };
    const hourlyRate = rates[formData.city] || rates["Default"];

    // 2. Service Logic
    let laborHours = 0;
    let matCost = 0;
    let permitFee = 0;
    let serviceFee = 50;
    const activeAddons = [];

    switch (formData.jobType) {
      case 'ev':
        laborHours = 4 * formData.numUnits;
        matCost = 450 * formData.numUnits;
        // Distance logic
        if (formData.evDistance === '<30ft') {
          matCost += 250 * formData.numUnits;
          laborHours += 1 * formData.numUnits;
        } else if (formData.evDistance === 'opposite') {
          matCost += 650 * formData.numUnits;
          laborHours += 4 * formData.numUnits;
          activeAddons.push("Extended Run (>30ft)");
        }
        // Panel logic
        if (formData.panelAmperage === '100A') {
          // Table says +$1250 total impact
          matCost += 1250 * formData.numUnits;
          activeAddons.push("DCC-12 Load Shaver (100A Panel)");
        }
        break;
      case 'panel':
        laborHours = 8;
        matCost = 1500;
        permitFee = 250; // Table says +$250
        if (formData.isFuseBox) {
          laborHours += 3;
          activeAddons.push("Fuse-to-Breaker Conversion");
        }
        if (formData.meterLocation === 'inside') {
          matCost += 800;
          laborHours += 4;
          activeAddons.push("Meter Base Relocation (Code 2026)");
        }
        break;
      case 'light':
        laborHours = 0.75 * formData.numUnits;
        matCost = 45 * formData.numUnits;
        if (!formData.hasAttic) {
          // Table says +$45 per light
          matCost += 45 * formData.numUnits;
          activeAddons.push("Blind Install (No Attic Access)");
        }
        break;
      case 'repair':
        laborHours = 2;
        matCost = 100;
        break;
    }

    // 3. Complexity (Home Age)
    if (formData.homeAge === 'pre-1960') {
      // Table says +$150
      matCost += 150;
      activeAddons.push("Heritage Diagnostic Surcharge");
    } else if (formData.homeAge === '1960-1980') {
      laborHours += 1;
      activeAddons.push("Aluminum Wiring Safety Check");
    }

    // 4. Final Calculation
    const laborCost = laborHours * hourlyRate;
    const subtotal = laborCost + matCost;
    const total = (subtotal * 1.20) + permitFee + serviceFee;

    return {
      min: Math.round(total * 0.9),
      max: Math.round(total * 1.1),
      hourlyRate,
      laborHours: laborHours.toFixed(1),
      activeAddons
    };
  };

  const estimate = calculateEstimate();

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">What can we help you with?</label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { id: 'ev', label: 'EV Charger Installation', icon: Bolt },
                  { id: 'panel', label: 'Electrical Panel Upgrade', icon: Zap },
                  { id: 'light', label: 'New Lighting / Pot Lights', icon: Lightbulb },
                  { id: 'repair', label: 'Troubleshooting / Repair', icon: Droplets },
                ].map((job) => (
                  <button
                    key={job.id}
                    onClick={() => setFormData({ ...formData, jobType: job.id })}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                      formData.jobType === job.id 
                        ? 'border-primary bg-primary/5 text-primary' 
                        : 'border-slate-100 hover:border-primary/30 text-slate-600'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${formData.jobType === job.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                      <job.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold">{job.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Number of {formData.jobType === 'light' ? 'Lights' : 'Units'}</label>
              <input 
                type="number" 
                min="1"
                value={formData.numUnits}
                onChange={(e) => setFormData({ ...formData, numUnits: Math.max(1, parseInt(e.target.value) || 1) })}
                className="w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-xl px-4 text-slate-900 focus:ring-2 focus:ring-primary font-medium"
              />
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Project Location</label>
              <div className="relative">
                <select 
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-xl px-4 text-slate-900 focus:ring-2 focus:ring-primary appearance-none font-medium"
                >
                  {["Toronto", "Vaughan", "Vancouver", "Kitchener", "Hamilton", "Calgary", "Winnipeg", "Saskatoon", "Halifax"].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-4.5 w-5 h-5 pointer-events-none text-slate-400" />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            {formData.jobType === 'ev' && (
              <>
                <div className="space-y-4">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Distance from Panel</label>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: '<10ft', label: 'Same wall (<10ft)' },
                      { id: '<30ft', label: 'Same floor (<30ft)' },
                      { id: 'opposite', label: 'Opposite side / Different floor' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, evDistance: opt.id })}
                        className={`p-4 rounded-xl border-2 transition-all text-left font-bold ${
                          formData.evDistance === opt.id ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 text-slate-600'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Main Panel Amperage</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['100A', '200A', 'unsure'].map((amp) => (
                      <button
                        key={amp}
                        onClick={() => setFormData({ ...formData, panelAmperage: amp })}
                        className={`p-3 rounded-xl border-2 transition-all font-bold text-sm ${
                          formData.panelAmperage === amp ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 text-slate-600'
                        }`}
                      >
                        {amp.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
            {formData.jobType === 'panel' && (
              <>
                <div className="space-y-4">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Current Panel Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: true, label: 'Fuse Box' },
                      { id: false, label: 'Circuit Breaker' },
                    ].map((opt) => (
                      <button
                        key={String(opt.id)}
                        onClick={() => setFormData({ ...formData, isFuseBox: opt.id })}
                        className={`p-4 rounded-xl border-2 transition-all font-bold ${
                          formData.isFuseBox === opt.id ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 text-slate-600'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Hydro Meter Location</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['outside', 'inside'].map((loc) => (
                      <button
                        key={loc}
                        onClick={() => setFormData({ ...formData, meterLocation: loc })}
                        className={`p-4 rounded-xl border-2 transition-all font-bold capitalize ${
                          formData.meterLocation === loc ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 text-slate-600'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
            {formData.jobType === 'light' && (
              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Installation Environment</label>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { id: true, label: 'Attic Access Above' },
                    { id: false, label: 'Finished Floor Above (Blind Install)' },
                  ].map((opt) => (
                    <button
                      key={String(opt.id)}
                      onClick={() => setFormData({ ...formData, hasAttic: opt.id })}
                      className={`p-4 rounded-xl border-2 transition-all font-bold text-left ${
                        formData.hasAttic === opt.id ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 text-slate-600'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {formData.jobType === 'repair' && (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg">Diagnostic Visit</h3>
                <p className="text-sm text-slate-500">Most repairs require a 1-hour diagnostic visit to identify the root cause before a fixed quote can be provided.</p>
              </div>
            )}
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">When was your home built?</label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { id: 'pre-1960', label: 'Pre-1960 (Potential Knob & Tube)', desc: 'Requires heritage safety inspection' },
                  { id: '1960-1980', label: '1960–1980 (Potential Aluminum)', desc: 'Requires safety device verification' },
                  { id: 'post-1980', label: 'Post-1980 (Modern Copper)', desc: 'Standard modern installation' },
                ].map((age) => (
                  <button
                    key={age.id}
                    onClick={() => setFormData({ ...formData, homeAge: age.id })}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      formData.homeAge === age.id ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 text-slate-600'
                    }`}
                  >
                    <div className="font-bold">{age.label}</div>
                    <div className="text-xs opacity-70">{age.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-black text-slate-900">We've calculated your estimate!</h3>
              <p className="text-sm text-slate-500 font-medium">Where should we send your detailed PDF breakdown?</p>
            </div>
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Full Name"
                  value={formData.leadName}
                  onChange={(e) => setFormData({...formData, leadName: e.target.value})}
                  className="w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-xl pl-12 pr-4 focus:ring-2 focus:ring-primary font-medium"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="Work Email"
                  value={formData.leadEmail}
                  onChange={(e) => setFormData({...formData, leadEmail: e.target.value})}
                  className="w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-xl pl-12 pr-4 focus:ring-2 focus:ring-primary font-medium"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  value={formData.leadPhone}
                  onChange={(e) => setFormData({...formData, leadPhone: e.target.value})}
                  className="w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-xl pl-12 pr-4 focus:ring-2 focus:ring-primary font-medium"
                />
              </div>
              
              <div className="pt-2">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Camera className="w-8 h-8 text-slate-400 mb-2" />
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Upload Panel Photo (Optional)</p>
                    <p className="text-[10px] text-slate-400 mt-1">Get a 100% guaranteed quote</p>
                  </div>
                  <input type="file" className="hidden" onChange={(e) => setFormData({...formData, photo: e.target.files?.[0] || null})} />
                </label>
                {formData.photo && (
                  <div className="mt-2 flex items-center gap-2 text-xs font-bold text-primary">
                    <Check className="w-4 h-4" />
                    {formData.photo.name} attached
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                <Bolt className="w-24 h-24 text-primary" />
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center py-2">
                <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">AI Estimated Range</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-black text-slate-900">${estimate.min.toLocaleString()}</span>
                  <span className="text-2xl text-slate-400 font-medium">—</span>
                  <span className="text-5xl font-black text-slate-900">${estimate.max.toLocaleString()}</span>
                </div>
                <div className="mt-6 w-full bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-primary/10 space-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <Zap className="w-3 h-3 text-primary" />
                    Smart Estimator Logic
                  </div>
                  <div className="grid grid-cols-2 gap-y-3 text-sm">
                    <div className="text-slate-500">Regional Rate ({formData.city})</div>
                    <div className="text-right font-bold text-slate-900">${estimate.hourlyRate}/hr</div>
                    <div className="text-slate-500">Est. Labor Time</div>
                    <div className="text-right font-bold text-slate-900">{estimate.laborHours} hrs</div>
                  </div>
                  
                  {estimate.activeAddons.length > 0 && (
                    <div className="pt-4 border-t border-slate-200">
                      <div className="text-[10px] font-bold text-primary uppercase mb-3">Code-Required Adjustments</div>
                      <div className="flex flex-wrap gap-2">
                        {estimate.activeAddons.map((addon, i) => (
                          <span key={i} className="bg-primary/10 text-primary text-[10px] px-3 py-1 rounded-full font-bold border border-primary/10">
                            + {addon}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-100">
                <CheckCircle2 className="w-4 h-4" />
                PDF Breakdown Sent to {formData.leadEmail}
              </div>
              <p className="text-xs text-slate-400 font-medium italic">
                *Estimates are based on 2026 Canadian Electrical Code standards. Final price subject to site visit.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-primary/10 flex flex-col max-h-[95vh]"
      >
        <header className="flex items-center justify-between border-b border-primary/10 px-8 py-6 bg-white">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-xl text-primary">
              <Calculator className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-black leading-tight tracking-tight text-slate-900">QuickEstimate AI</h2>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map(s => (
                    <div key={s} className={`h-1 rounded-full transition-all ${s <= step ? 'w-4 bg-primary' : 'w-2 bg-slate-100'}`} />
                  ))}
                </div>
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest ml-2">Step {step + 1} of 5</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        <footer className="p-8 bg-slate-50 border-t border-primary/10 flex items-center justify-between gap-4">
          {step > 0 && step < 4 ? (
            <button 
              onClick={prevStep}
              className="h-14 px-6 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          ) : <div />}
          
          {step < 3 ? (
            <button 
              onClick={nextStep}
              className="h-14 px-10 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group"
            >
              Continue
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : step === 3 ? (
            <button 
              onClick={nextStep}
              disabled={!formData.leadName || !formData.leadEmail}
              className="h-14 px-10 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Generate My Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <button 
              onClick={onClose}
              className="w-full h-14 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
            >
              Done
            </button>
          )}
        </footer>
      </motion.div>
    </div>
  );
};

const DemoRequestModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    businessType: '',
    serviceFocus: '',
    adminHours: '',
    quotesPerMonth: '',
    roadblock: '',
    region: '',
    pricingModel: '',
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    website: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-8 py-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8 group">
              <img 
                src="https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800" 
                alt="Professional Electrician" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-3">
                  <Zap className="w-3 h-3" />
                  Live Preview Available
                </div>
                <h3 className="text-2xl font-bold text-white leading-tight">Professional Estimates in 60 Seconds. See the AI in Action.</h3>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed">
                The first contractor to the inbox wins the job. We’ve built the only estimation logic that understands the <span className="text-charcoal font-bold underline decoration-primary/30 underline-offset-4">2024 Canadian Electrical Code</span> as well as you do.
              </p>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-slate-500 font-medium">
                  Tell us a bit about your business, and we’ll show you a customized preview of how to turn site walks into signed contracts before you even leave the driveway.
                </p>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">What best describes your current electrical business?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Solo Master Electrician', 'Small Team (2-5 Techs)', 'Established Fleet (6+ Techs)', 'New Business'].map(opt => (
                  <button
                    key={opt}
                    onClick={() => { setFormData({ ...formData, businessType: opt }); nextStep(); }}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${formData.businessType === opt ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                  >
                    <span className="font-bold">{opt}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">What is your primary service focus?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Residential Service & Repair', 'EV & New Tech Installs', 'Commercial & Industrial', 'Multi-Trade'].map(opt => (
                  <button
                    key={opt}
                    onClick={() => { setFormData({ ...formData, serviceFocus: opt }); }}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${formData.serviceFocus === opt ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                  >
                    <span className="font-bold">{opt}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">On average, how many hours per week do you spend on manual quoting and admin?</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['1–3 hours', '4–7 hours', '8+ hours'].map(opt => (
                  <button
                    key={opt}
                    onClick={() => setFormData({ ...formData, adminHours: opt })}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${formData.adminHours === opt ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                  >
                    <span className="font-bold">{opt}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">How many residential quotes do you send out per month?</label>
              <input 
                type="number" 
                placeholder="e.g. 25"
                value={formData.quotesPerMonth}
                onChange={(e) => setFormData({ ...formData, quotesPerMonth: e.target.value })}
                className="w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-xl px-4 text-slate-900 focus:ring-2 focus:ring-primary font-medium"
              />
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">What is your biggest roadblock to winning more bids?</label>
              <div className="grid grid-cols-1 gap-3">
                {['Competitors are faster to respond', 'Material price volatility', 'Missing small parts in the final bill', 'Code compliance (AFCI/Load Management)'].map(opt => (
                  <button
                    key={opt}
                    onClick={() => setFormData({ ...formData, roadblock: opt })}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${formData.roadblock === opt ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                  >
                    <span className="font-bold">{opt}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">In which province/region do you primarily operate?</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Ontario', 'Manitoba', 'Alberta', 'BC', 'Other'].map(opt => (
                  <button
                    key={opt}
                    onClick={() => setFormData({ ...formData, region: opt })}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${formData.region === opt ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                  >
                    <span className="font-bold">{opt}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Do you currently use a flat-rate pricing model or time-and-materials?</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Flat-Rate', 'Hourly', 'Both'].map(opt => (
                  <button
                    key={opt}
                    onClick={() => setFormData({ ...formData, pricingModel: opt })}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${formData.pricingModel === opt ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                  >
                    <span className="font-bold">{opt}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Where should we send your Custom Profit Recovery Report?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                <input 
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full h-12 bg-slate-50 border-2 border-slate-100 rounded-lg px-4"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Company Name</label>
                <input 
                  type="text" 
                  placeholder="We'll pre-brand your demo"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full h-12 bg-slate-50 border-2 border-slate-100 rounded-lg px-4"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Business Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 bg-slate-50 border-2 border-slate-100 rounded-lg px-4"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-12 bg-slate-50 border-2 border-slate-100 rounded-lg px-4"
                />
              </div>
              <div className="col-span-1 sm:col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Website URL</label>
                <input 
                  type="url" 
                  placeholder="https://..."
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full h-12 bg-slate-50 border-2 border-slate-100 rounded-lg px-4"
                />
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="text-center space-y-8 py-8">
            <div className="size-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-slate-900">Your Demo Request is Received, {formData.fullName.split(' ')[0]}!</h3>
              <p className="text-slate-600 text-lg">
                While we prepare your custom logic preview, watch this 60-second clip of how our AI handles a 200A Panel Upgrade quote in under a minute.
              </p>
            </div>
            <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
                alt="Demo preview" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-16 bg-primary text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current" />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="h-14 px-8 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                <Calendar className="w-5 h-5" />
                Add to Calendar
              </button>
              <button onClick={onClose} className="h-14 px-8 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all">
                Close
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <header className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg text-white">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Request a Professional Demo</h3>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                {step === 0 ? 'Introduction' : step === 5 ? 'Success' : `Step ${step} of 4`}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400">
            <X className="w-6 h-6" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        {step < 5 && (
          <footer className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
            {step > 0 ? (
              <button 
                onClick={prevStep}
                className="h-14 px-6 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
            ) : <div />}
            
            <button 
              onClick={nextStep}
              disabled={step === 4 && (!formData.fullName || !formData.email)}
              className="h-14 px-10 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === 0 ? 'See the AI in Action' : step === 4 ? 'Request My Demo' : 'Continue'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </footer>
        )}
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light">
      <Navbar onOpenModal={() => setIsModalOpen(true)} onOpenDemoModal={() => setIsDemoModalOpen(true)} />
      
      <main className="flex-1">
        <Hero onOpenModal={() => setIsModalOpen(true)} onOpenDemoModal={() => setIsDemoModalOpen(true)} />
        <Features />
        <PlatformDetails />
        <SocialProof />
        <CTASection onOpenModal={() => setIsModalOpen(true)} onOpenDemoModal={() => setIsDemoModalOpen(true)} />
      </main>

      <Footer />

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="w-16 h-16 bg-primary rounded-full shadow-2xl flex items-center justify-center text-white group relative"
        >
          <DollarSign className="w-8 h-8 group-hover:rotate-12 transition-transform animate-pulse" strokeWidth={3} />
          <div className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-white border-2 border-primary text-[10px] font-bold text-primary items-center justify-center">1</span>
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <QuickEstimateModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isDemoModalOpen && (
          <DemoRequestModal 
            isOpen={isDemoModalOpen} 
            onClose={() => setIsDemoModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
