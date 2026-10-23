import React from 'react';
import { motion } from 'motion/react';
import { 
  PenTool, 
  Camera, 
  TrendingUp, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Clock, 
  ShieldCheck, 
  Package,
  Star,
  Check
} from 'lucide-react';
import { portfolioImages } from '../data/portfolioData';

interface ServicesBentoProps {
  onOpenHireModal: (serviceTitle?: string) => void;
  onSelectServiceForQuote?: (serviceTitle: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenHireModal, onSelectServiceForQuote }) => {
  const services = [
    {
      id: 'graphics',
      title: 'Graphics Design & Vector Systems',
      tagline: 'Precision Brand Assets & Typography',
      icon: PenTool,
      image: portfolioImages.branding,
      badge: 'High Demand',
      description: 'Custom vector logo systems, corporate identity stationery, marketing brochures, and high-impact social media creatives that establish immediate visual authority.',
      skills: ['Adobe Illustrator Masters', 'Vector Insignia', 'Stationery Systems', 'Print & Packaging', 'Brand Guidelines'],
      metrics: '100% Vector Scalable & Print Ready'
    },
    {
      id: 'photography',
      title: 'Commercial Product Photography',
      tagline: '8K Strobe Lighting & Retouching Lab',
      icon: Camera,
      image: portfolioImages.perfume,
      badge: 'Studio Grade',
      description: 'Studio-grade commercial product staging, dynamic splash & droplet capture, specular reflection control, macro details, and Amazon/Shopify catalog perfection.',
      skills: ['Commercial Strobe Lighting', 'Specular Highlight Balancing', 'Macro Droplets & Splash', 'Catalog E-Commerce', 'Adobe Lightroom RAW'],
      metrics: '8K Ultra-Crisp Commercial Studio'
    },
    {
      id: 'packaging',
      title: 'Packaging & 3D Realistic Mockups',
      tagline: 'Dieline Engineering & Shelf Dominance',
      icon: Package,
      image: portfolioImages.packaging,
      badge: 'High Conversion',
      description: 'Custom retail box dielines, foil-stamping separations, Spot UV plate preparation, and photorealistic 3D presentation renders ready for factory printing.',
      skills: ['Dieline Vector Engineering', 'Holographic & Gold Foil', 'Spot UV Finishes', 'Factory-Ready CMYK', 'Realistic 3D Renders'],
      metrics: 'Factory-Ready Industrial Specs'
    }
  ];

  return (
    <section id="services" className="py-28 px-4 sm:px-6 relative bg-white/70">
      {/* Decorative Background */}
      <div className="absolute inset-0 cyber-dots opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Core Disciplines & Specialties</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 tracking-tight">
              Creative <span className="text-gradient italic">Disciplines & Services</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-600 text-base leading-relaxed">
              Tailored for international e-commerce founders, agencies, and high-growth brands seeking world-class craftsmanship and rapid turnarounds.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout (3 Column Hero Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.7 }}
                className="group relative rounded-[2.2rem] bg-white border border-emerald-500/20 shadow-lg shadow-emerald-950/5 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/15 transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Top Glowing Gradient accent line */}
                <div className="h-1.5 w-full primary-gradient opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="p-7 flex-1 flex flex-col">
                  {/* Top Bar: Icon, Badge, Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl primary-gradient text-white flex items-center justify-center shadow-md shadow-emerald-500/25 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      {service.badge && (
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                          {service.badge}
                        </span>
                      )}
                      <button
                        onClick={() => onOpenHireModal(service.title)}
                        className="w-9 h-9 rounded-full bg-gray-100 group-hover:primary-gradient group-hover:text-white text-gray-700 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                        title={`Inquire about ${service.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-emerald-700 transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600 mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Visual Image Showcase with Smooth Hover Zoom */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6 border border-black/5 bg-gray-100 group/img shadow-xs">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex items-end p-4">
                      <span className="text-white text-xs font-medium flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        {service.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200/80 text-[11px] font-medium text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <button
                    onClick={() => onOpenHireModal(service.title)}
                    className="w-full py-3 px-4 rounded-xl border border-emerald-500/30 bg-emerald-50/60 hover:primary-gradient hover:text-white text-emerald-800 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:border-emerald-500 shadow-xs"
                  >
                    <span>Request Service Proposal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Studio Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="glass-panel p-6 rounded-3xl border border-emerald-500/20 flex items-start gap-4 shadow-xs hover:border-emerald-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Express Delivery Options</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                24-48h rush turnaround available for urgent product launches and advertising campaigns.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-emerald-500/20 flex items-start gap-4 shadow-xs hover:border-emerald-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Full Layered Masters (.AI / .PSD)</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Organized layer hierarchy, smart objects, vector paths, and non-destructive adjustment masks.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-emerald-500/20 flex items-start gap-4 shadow-xs hover:border-emerald-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">International Escrow Protection</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Milestone-based billing via Fiverr, Upwork, Wise, PayPal, or Stripe with 100% satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
