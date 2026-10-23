import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe2, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  ArrowUpRight, 
  Lock, 
  Award,
  Zap,
  TrendingUp
} from 'lucide-react';
import { BehanceIcon } from './Icons';
import { marketplaceStats, internationalMarketplaces } from '../data/portfolioData';

interface MarketplaceHubProps {
  onOpenHireModal: () => void;
}

export const MarketplaceHub: React.FC<MarketplaceHubProps> = ({ onOpenHireModal }) => {
  return (
    <section className="py-24 px-4 sm:px-6 relative bg-emerald-950 text-white overflow-hidden futuristic-grid">
      {/* Glow Backdrops */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px] bg-emerald-500/15 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full blur-[120px] bg-teal-500/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-inner">
            <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Global Freelance & Marketplace Hub</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Work With Moshiur On <span className="text-gradient-vibrant italic">Any Global Platform</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed">
            Whether you prefer Fiverr escrow protection, Behance design inquiry, Upwork contracts, or direct zero-fee enterprise billing.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketplaceStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 rounded-3xl bg-white/5 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-400/50 hover:bg-white/10 transition-all text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-vibrant font-sans tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
              <div className="text-[11px] font-mono text-gray-400">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* 3 Marketplace Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Fiverr Pro / Top Rated */}
          <div className="p-8 rounded-[2rem] bg-gradient-to-b from-gray-900 to-black border border-emerald-500/30 flex flex-col justify-between hover:border-emerald-400 transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1DBF73]/20 border border-[#1DBF73]/40 text-[#1DBF73] flex items-center justify-center font-bold text-xl font-mono">
                  fi
                </div>
                <span className="px-3 py-1 rounded-full bg-[#1DBF73]/20 text-[#1DBF73] text-[10px] font-mono font-bold uppercase">
                  Top Rated Seller
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Fiverr Marketplace
              </h3>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Order directly through Fiverr with official order milestones, automated buyer protection, and 5.0 rating reviews.
              </p>

              <div className="space-y-2 mb-6 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1DBF73]" />
                  <span>Escrow Safe Payment System</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1DBF73]" />
                  <span>100% Guaranteed On-Time Delivery</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenHireModal}
              className="w-full py-3 px-4 rounded-xl bg-[#1DBF73] text-black font-bold text-xs hover:bg-[#1DBF73]/90 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Order via Fiverr Contract</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Behance Curated Portfolio */}
          <div className="p-8 rounded-[2rem] bg-gradient-to-b from-gray-900 to-black border border-emerald-500/30 flex flex-col justify-between hover:border-emerald-400 transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0057FF]/20 border border-[#0057FF]/40 text-[#0057FF] flex items-center justify-center font-bold text-xl">
                  <BehanceIcon className="w-6 h-6 text-[#0057FF]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#0057FF]/20 text-[#0057FF] text-[10px] font-mono font-bold uppercase">
                  Curated Projects
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Behance Showcase
              </h3>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Explore full case studies, vector dielines, and high-resolution commercial product catalogs with global appreciation.
              </p>

              <div className="space-y-2 mb-6 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0057FF]" />
                  <span>Verified Adobe Portfolio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0057FF]" />
                  <span>Full Presentation Case Studies</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.behance.net/mshiurislamabid"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#0057FF] text-white font-bold text-xs hover:bg-[#0057FF]/90 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Visit Behance Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: Direct Enterprise Contract */}
          <div className="p-8 rounded-[2rem] bg-gradient-to-b from-gray-900 to-black border-2 border-emerald-500/50 flex flex-col justify-between hover:border-emerald-400 transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl primary-gradient text-white flex items-center justify-center font-bold text-xl shadow-md shadow-emerald-500/30">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-300 text-[10px] font-mono font-bold uppercase">
                  Zero Platform Fees (Save 20%)
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Direct Client Order
              </h3>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Work directly with Moshiur. Enjoy priority turnaround, custom NDAs, bank wire / Wise / Payoneer / PayPal billing, and dedicated communication.
              </p>

              <div className="space-y-2 mb-6 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Custom Signed Commercial NDA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct WhatsApp & Video Consultation</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenHireModal}
              className="w-full py-3 px-4 rounded-xl primary-gradient text-white font-bold text-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/30"
            >
              <span>Start Direct Order Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Global Security & Payment Strip */}
        <div className="p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>100% SECURE INTERNATIONAL PAYMENT CHANNELS:</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-gray-300 font-medium">
            <span>• Wise / Bank Wire</span>
            <span>• Payoneer Global</span>
            <span>• PayPal Commercial</span>
            <span>• Stripe / Credit Card</span>
            <span>• Fiverr / Upwork Escrow</span>
          </div>
        </div>
      </div>
    </section>
  );
};
