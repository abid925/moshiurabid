import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Camera, 
  PenTool, 
  Layers, 
  Zap, 
  ShieldCheck,
  DollarSign,
  Star,
  Check,
  MapPin,
  Flame,
  Award,
  Globe
} from 'lucide-react';
import { BehanceIcon, AdobePhotoshopIcon, AdobeIllustratorIcon, AdobeLightroomIcon } from './Icons';

interface HeroProps {
  onOpenHireModal: () => void;
  inspectorMode: boolean;
  activeAura: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHireModal, inspectorMode, activeAura }) => {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 futuristic-grid overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div 
        className="absolute top-1/4 right-[10%] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full blur-[130px] sm:blur-[160px] pointer-events-none opacity-30 animate-glow transition-all duration-1000 -z-10"
        style={{
          backgroundColor: activeAura === 'neon' ? '#4ADE80' : activeAura === 'mint' ? '#6EE7B7' : '#10B981'
        }}
      />
      <div className="absolute bottom-10 left-[5%] w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] rounded-full blur-[110px] pointer-events-none bg-emerald-200/25 -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Hero Copy, Title, Pitch & CTAs (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Top Category Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-white/90 backdrop-blur-md text-xs font-semibold mb-4 sm:mb-6 shadow-xs hover:border-emerald-500/40 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-950 font-sans font-semibold tracking-wide text-[11px] sm:text-xs">
                Commercial Graphics & Product Photography Studio
              </span>
            </motion.div>

            {/* Name Presentation */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex items-baseline gap-2 sm:gap-3 flex-wrap justify-center lg:justify-start"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-sans font-normal text-gray-500 tracking-tight">
                Hey, I'm
              </span>
              <span className="text-5xl sm:text-7xl lg:text-8xl text-gradient-vibrant font-signature italic font-bold tracking-tight select-none">
                Moshiur
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-serif italic text-gray-900 mt-2 mb-4 tracking-tight leading-[1.15]"
            >
              Graphics <span className="text-gradient not-italic font-sans font-extrabold">Designer</span> & Commercial Product Photographer
            </motion.h1>

            {/* Location & Global Delivery Pill */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm mb-6"
            >
              <span className="font-semibold text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full border border-emerald-300/80 shadow-xs flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                <span>Dhaka, Bangladesh</span>
              </span>
              <span className="font-serif italic text-emerald-800 font-medium">
                • Serving International Brands Worldwide
              </span>
            </motion.div>

            {/* Bio / Value Proposition */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mb-8 leading-relaxed font-normal"
            >
              Transforming international e-commerce products and luxury packaging into high-converting visual assets with precision <strong className="text-gray-900 font-semibold">Vector Systems</strong> and <strong className="text-gray-900 font-semibold">8K Studio Strobe Lighting</strong>.
            </motion.p>

            {/* Action Buttons (Desktop Row / Mobile Stack) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto mb-10"
            >
              <a 
                href="https://www.behance.net/mshiurislamabid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto primary-gradient text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:shadow-emerald-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all group cursor-pointer"
              >
                <BehanceIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>View Behance Showcase</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#pricing"
                className="w-full sm:w-auto glass-panel px-6 py-3.5 rounded-full font-bold text-sm sm:text-base text-gray-800 hover:text-emerald-700 hover:border-emerald-500/40 hover:bg-emerald-50/50 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <DollarSign className="w-4 h-4 text-emerald-600" />
                <span>Packages & Rates</span>
              </a>

              <button
                onClick={onOpenHireModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-sm text-emerald-950 bg-emerald-100/90 hover:bg-emerald-200/90 border border-emerald-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Hire Moshiur</span>
              </button>
            </motion.div>

            {/* Trust Proof & Adobe Suite */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="w-full pt-6 border-t border-emerald-950/10 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              {/* Reviews */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/client${i}/100/100`} 
                      className="w-8 sm:w-9 h-8 sm:h-9 rounded-full border-2 border-white object-cover shadow-sm"
                      referrerPolicy="no-referrer"
                      alt="Client avatar"
                    />
                  ))}
                  <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full border-2 border-white primary-gradient flex items-center justify-center text-white text-[11px] font-bold shadow-sm">
                    +
                  </div>
                </div>
                <div className="text-left">
                  <div className="font-extrabold text-lg sm:text-xl text-gray-900 flex items-center gap-1.5 leading-none">
                    47+
                    <span className="text-emerald-600 text-xs font-bold flex items-center gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" /> 5.0
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-500 font-medium">Verified International Reviews</div>
                </div>
              </div>

              {/* Adobe Suite */}
              <div className="flex items-center gap-2 bg-white/90 border border-emerald-500/20 px-3.5 py-1.5 rounded-2xl shadow-xs">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Suite:</span>
                <AdobePhotoshopIcon className="w-5 h-5 hover:scale-110 transition-transform" />
                <AdobeIllustratorIcon className="w-5 h-5 hover:scale-110 transition-transform" />
                <AdobeLightroomIcon className="w-5 h-5 hover:scale-110 transition-transform" />
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Clean, Seamless High-End Portrait Display (5 Columns) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none"
            >
              {/* Soft Ambient Shadow Backdrop */}
              <div className="absolute -inset-2 rounded-[2.5rem] primary-gradient opacity-20 blur-2xl pointer-events-none -z-10" />

              {/* Card Surface - Ultra Clean without heavy border frames */}
              <div className="relative rounded-[2.2rem] bg-white p-2.5 sm:p-3.5 border border-emerald-500/20 shadow-2xl shadow-emerald-950/10 overflow-hidden">
                
                {/* Photo Container */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[1.8rem] overflow-hidden bg-slate-900 group">
                  <img 
                    src="https://i.ibb.co.com/8D0zQg8d/markup-1000002382.jpg" 
                    alt="Moshiur - Graphic Designer & Product Photographer" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gentle Cinematic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                  {/* Top Floating Pro Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Available for Hire</span>
                    </div>

                    <div className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-emerald-950 text-[11px] font-bold shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
                      <span>Top Rated</span>
                    </div>
                  </div>

                  {/* Bottom Clean Floating Label */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-500/20 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-signature italic font-bold text-2xl text-emerald-950 leading-tight">
                          Moshiur
                        </div>
                        <div className="text-[11px] text-gray-500 font-medium">
                          Visual Identity & 8K Product Retouch
                        </div>
                      </div>
                      <div className="bg-emerald-50 text-emerald-900 border border-emerald-200/80 px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Pro Studio</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Feature Strips */}
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-[11px] font-semibold text-gray-600">
                  <span className="flex items-center gap-1 text-emerald-900">
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Vector Master
                  </span>
                  <span className="flex items-center gap-1 text-emerald-900">
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> 8K Studio Lighting
                  </span>
                  <span className="flex items-center gap-1 text-emerald-900">
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> 24h Delivery
                  </span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
