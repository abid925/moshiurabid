import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Sparkles, Send, CheckCircle2, Mail, ArrowUpRight, Zap, Copy, Check, MessageCircle, DollarSign, ShieldCheck } from 'lucide-react';
import { BehanceIcon } from './Icons';

interface InteractiveHireModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  packageTier?: string;
  calculatedTotal?: number;
  currency?: 'USD' | 'EUR' | 'GBP';
}

export const InteractiveHireModal: React.FC<InteractiveHireModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  packageTier,
  calculatedTotal,
  currency = 'USD'
}) => {
  const [selectedService, setSelectedService] = useState<string>(preselectedService || 'Commercial Product Photography');
  const [tier, setTier] = useState<string>(packageTier || 'Pro Brand Growth');
  const [urgency, setUrgency] = useState<string>('Standard (3-5 Days)');
  const [projectBrief, setProjectBrief] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const servicesList = [
    'Commercial Product Photography',
    'Graphics Design & Vector Systems',
    'Packaging & 3D Mockup Design',
    'Branding & Digital Marketing Ads',
    'Full Enterprise Creative Suite'
  ];

  const currencySymbol = currency === 'EUR' ? '€' : currency === 'GBP' ? '£' : '$';

  const generateFormattedBrief = () => {
    return `[PROJECT ORDER BRIEF - MOSHIUR ALI ABID]
Client Name: ${clientName || 'Private Client'}
Client Contact: ${clientEmail || 'Pending'}
Selected Discipline: ${selectedService}
Package / Tier: ${tier}
Estimated Budget: ${calculatedTotal ? `${currencySymbol}${calculatedTotal} ${currency}` : 'Market Standard Quote'}
Preferred Timeline: ${urgency}
Project Details:
${projectBrief || 'Ready to discuss requirements & deliverable schedule.'}
---
Escrow & International Invoicing: moshiurislamabid7682@gmail.com`;
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(generateFormattedBrief());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[NEW ORDER] ${selectedService} - ${tier} (${clientName || 'Client'})`);
    const body = encodeURIComponent(generateFormattedBrief());
    window.location.href = `mailto:moshiurislamabid7682@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi Moshiur! I'd like to hire you for ${selectedService} (${tier}).\n\nBrief:\n${projectBrief || 'Let us discuss details.'}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl rounded-[2.5rem] bg-white border border-emerald-500/30 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-50 via-white to-emerald-50/30 border-b border-emerald-500/15 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl primary-gradient text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900">
                Launch Project with <span className="font-signature italic text-emerald-800 text-2xl">Moshiur</span>
              </h3>
              <p className="text-xs font-mono text-emerald-700 font-semibold">
                // 100% INTERNATIONAL SATISFACTION GUARANTEED
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200/80 text-gray-700 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSendEmail} className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Estimated Pricing Banner if precalculated */}
          {calculatedTotal && (
            <div className="p-4 rounded-2xl primary-gradient text-white flex items-center justify-between shadow-md">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-100 block">
                  SELECTED ESTIMATE
                </span>
                <span className="font-bold text-lg">{tier}</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold font-mono">
                  {currencySymbol}{calculatedTotal} {currency}
                </span>
              </div>
            </div>
          )}

          {/* Service Selector */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-gray-700 mb-2">
              1. Creative Discipline
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {servicesList.map((srv) => (
                <button
                  type="button"
                  key={srv}
                  onClick={() => setSelectedService(srv)}
                  className={`p-3 rounded-2xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                    selectedService === srv
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm font-bold'
                      : 'border-gray-200 hover:border-emerald-300 text-gray-700 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{srv}</span>
                    {selectedService === srv && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-1" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Client Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-gray-700 mb-1">
                Your Name / Brand Name
              </label>
              <input 
                type="text"
                required
                placeholder="e.g. Sarah Jenkins (Nexus Co.)"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-xs sm:text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-gray-700 mb-1">
                Your Email Address
              </label>
              <input 
                type="email"
                required
                placeholder="sarah@nexusbrand.com"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-xs sm:text-sm outline-none transition-all"
              />
            </div>
          </div>

          {/* Project Brief */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-gray-700 mb-1">
              Project Description & Requirements
            </label>
            <textarea 
              rows={3}
              placeholder="Detail your goals (e.g. 5 luxury perfume bottle shoots with dynamic water splash, white background Amazon cutouts, and high-res master PSD files)..."
              value={projectBrief}
              onChange={(e) => setProjectBrief(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-xs sm:text-sm outline-none transition-all resize-none"
            />
          </div>

          {/* Action Row */}
          <div className="space-y-3 pt-2">
            <button
              type="submit"
              className="w-full primary-gradient text-white py-4 px-6 rounded-2xl font-bold text-sm shadow-xl shadow-emerald-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Send Order Inquiry via Email (Direct to Moshiur)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleCopyBrief}
                className="py-3 px-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-800 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-gray-600" />}
                <span>{copied ? 'Brief Copied to Clipboard!' : 'Copy Order Brief (for Fiverr/Upwork)'}</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="py-3 px-4 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>Quick WhatsApp Inquiry</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-gray-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Official Inbox: moshiurislamabid7682@gmail.com • Direct Freelance Contract</span>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
