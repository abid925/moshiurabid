import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Sliders, 
  DollarSign, 
  FileText, 
  Layers, 
  Send,
  HelpCircle,
  TrendingUp,
  Globe2
} from 'lucide-react';
import { pricingPackages } from '../data/portfolioData';

interface InteractivePricingOrdersProps {
  onOpenHireModal: (serviceName?: string, packageTier?: string, calculatedTotal?: number) => void;
  currency: 'USD' | 'EUR' | 'GBP';
  setCurrency: (c: 'USD' | 'EUR' | 'GBP') => void;
}

export const InteractivePricingOrders: React.FC<InteractivePricingOrdersProps> = ({
  onOpenHireModal,
  currency,
  setCurrency
}) => {
  const [activeTab, setActiveTab] = useState<'packages' | 'calculator'>('packages');

  // Calculator State
  const [serviceType, setServiceType] = useState<string>('Product Photography & Retouching');
  const [assetCount, setAssetCount] = useState<number>(5);
  const [turnaround, setTurnaround] = useState<'standard' | 'priority' | 'express'>('standard');
  const [includeSourceFiles, setIncludeSourceFiles] = useState<boolean>(true);
  const [include3DMockup, setInclude3DMockup] = useState<boolean>(true);
  const [includeCopyrightTransfer, setIncludeCopyrightTransfer] = useState<boolean>(true);

  // Currency Conversion Multipliers & Symbols
  const currencyMap = {
    USD: { symbol: '$', rate: 1.0 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 },
  };

  const currentCurrency = currencyMap[currency];

  const formatPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * currentCurrency.rate);
    return `${currentCurrency.symbol}${converted}`;
  };

  // Dynamic Price Calculation
  const calculateCustomQuote = () => {
    let basePerAsset = 28;
    if (serviceType.includes('Branding') || serviceType.includes('Packaging')) {
      basePerAsset = 45;
    }

    let subtotal = basePerAsset * assetCount;

    // Addons
    if (includeSourceFiles) subtotal += 25;
    if (include3DMockup) subtotal += 40;
    if (includeCopyrightTransfer) subtotal += 30;

    // Turnaround Multiplier
    if (turnaround === 'priority') subtotal *= 1.25;
    if (turnaround === 'express') subtotal *= 1.5;

    return Math.round(subtotal);
  };

  const calculatedTotalUSD = calculateCustomQuote();

  const handleLaunchOrder = (packageName: string, priceUSD: number) => {
    onOpenHireModal(packageName, packageName, priceUSD);
  };

  return (
    <section id="pricing" className="py-28 px-4 sm:px-6 relative futuristic-grid bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header & Currency Switcher Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Transparent Rates & Estimates</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 tracking-tight">
              Order Packages & <span className="text-gradient italic">Live Pricing</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl">
              Transparent, international market-standard pricing with 100% commercial usage rights, full source files, and escrow protection.
            </p>
          </div>

          {/* Currency Switcher & Mode Tabs */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Switcher */}
            <div className="p-1 glass-panel rounded-2xl border border-emerald-500/20 flex gap-1 shadow-sm">
              <button
                onClick={() => setActiveTab('packages')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'packages'
                    ? 'primary-gradient text-white shadow-md'
                    : 'text-gray-600 hover:text-emerald-700'
                }`}
              >
                Fixed Packages
              </button>
              <button
                onClick={() => setActiveTab('calculator')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'calculator'
                    ? 'primary-gradient text-white shadow-md'
                    : 'text-gray-600 hover:text-emerald-700'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Custom Calculator</span>
              </button>
            </div>

            {/* Currency Pill Switcher */}
            <div className="p-1 bg-gray-100/80 rounded-2xl border border-black/5 flex gap-1">
              {(['USD', 'EUR', 'GBP'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    currency === curr
                      ? 'bg-white text-emerald-800 shadow-sm border border-emerald-500/20'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab 1: Fixed Packages */}
        {activeTab === 'packages' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {pricingPackages.map((pkg, idx) => (
              <div
                key={pkg.id}
                className={`relative rounded-[2.2rem] p-8 transition-all duration-500 flex flex-col justify-between ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-emerald-950 to-gray-900 text-white shadow-2xl shadow-emerald-950/30 border-2 border-emerald-400/50 scale-[1.02] lg:-translate-y-2'
                    : 'bg-white text-gray-900 border border-emerald-500/20 shadow-lg shadow-emerald-950/5 hover:border-emerald-500/50'
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="mb-4">
                    <span className={`px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                      pkg.popular
                        ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                        : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-serif font-bold">
                      {pkg.name}
                    </h3>
                  </div>

                  <p className={`text-xs mb-6 ${pkg.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                    {pkg.description}
                  </p>

                  {/* Price Tag */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight font-sans">
                        {formatPrice(pkg.price)}
                      </span>
                      <span className={`text-xs font-mono font-semibold ${pkg.popular ? 'text-emerald-300' : 'text-gray-500'}`}>
                        / project (USD ${pkg.price})
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-4 text-xs font-mono">
                      <div className="flex items-center gap-1.5">
                        <Clock className={`w-3.5 h-3.5 ${pkg.popular ? 'text-emerald-400' : 'text-emerald-600'}`} />
                        <span>{pkg.deliveryDays}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Sparkles className={`w-3.5 h-3.5 ${pkg.popular ? 'text-emerald-400' : 'text-emerald-600'}`} />
                        <span>{pkg.revisions}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                      pkg.popular ? 'text-emerald-300' : 'text-emerald-800'
                    }`}>
                      WHAT'S INCLUDED:
                    </div>
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          pkg.popular ? 'text-emerald-400' : 'text-emerald-600'
                        }`} />
                        <span className={pkg.popular ? 'text-gray-200' : 'text-gray-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <button
                  onClick={() => handleLaunchOrder(pkg.name, pkg.price)}
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                    pkg.popular
                      ? 'primary-gradient text-white shadow-emerald-500/40 hover:scale-[1.02]'
                      : 'border border-emerald-500/30 bg-emerald-50/70 hover:primary-gradient hover:text-white text-emerald-900'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  <span>Order {pkg.name} Package</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: Interactive Project Cost Calculator */}
        {activeTab === 'calculator' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-emerald-500/30 shadow-2xl shadow-emerald-950/10 grid grid-cols-1 lg:grid-cols-12 gap-10"
          >
            {/* Left Column: Interactive Sliders & Options (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md">
                  STEP 1: SELECT SERVICE DISCIPLINE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                  {[
                    'Product Photography & Retouching',
                    'Vector Graphics & Logo Design',
                    'Packaging Design & 3D Render',
                    'Digital Marketing Ad Campaign'
                  ].map((srv) => (
                    <button
                      key={srv}
                      onClick={() => setServiceType(srv)}
                      className={`p-3.5 rounded-2xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                        serviceType === srv
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold shadow-sm'
                          : 'border-gray-200 hover:border-emerald-300 text-gray-700 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{srv}</span>
                        {serviceType === srv && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Asset Count Slider */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold uppercase text-gray-700">
                    STEP 2: NUMBER OF DELIVERABLES / SHOTS
                  </span>
                  <span className="text-lg font-extrabold text-emerald-700 font-mono">
                    {assetCount} Assets
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={assetCount}
                  onChange={(e) => setAssetCount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-400 mt-2">
                  <span>1 Single Hero Asset</span>
                  <span>10 Medium Catalog</span>
                  <span>20 Full Enterprise Suite</span>
                </div>
              </div>

              {/* Turnaround Speed */}
              <div>
                <span className="text-xs font-mono font-bold uppercase text-gray-700 block mb-2">
                  STEP 3: TURNAROUND SPEED
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'standard', label: 'Standard', time: '4-5 Days', tag: 'Included' },
                    { id: 'priority', label: 'Priority', time: '48-72h', tag: '+25%' },
                    { id: 'express', label: '24h Express', time: 'Lightning', tag: '+50%' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTurnaround(t.id as any)}
                      className={`p-3 rounded-2xl text-center border transition-all cursor-pointer ${
                        turnaround === t.id
                          ? 'border-emerald-500 bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/25'
                          : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{t.label}</div>
                      <div className={`text-[10px] ${turnaround === t.id ? 'text-emerald-100' : 'text-gray-500'}`}>
                        {t.time} ({t.tag})
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Deliverable Add-ons */}
              <div>
                <span className="text-xs font-mono font-bold uppercase text-gray-700 block mb-2">
                  STEP 4: ESSENTIAL ADD-ONS
                </span>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200 cursor-pointer hover:border-emerald-400 transition-colors">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-800">
                      <input 
                        type="checkbox" 
                        checked={includeSourceFiles} 
                        onChange={(e) => setIncludeSourceFiles(e.target.checked)}
                        className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                      />
                      <span>Layered Adobe Source Files (.PSD, .AI, .INDD)</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-700">+$25</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200 cursor-pointer hover:border-emerald-400 transition-colors">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-800">
                      <input 
                        type="checkbox" 
                        checked={include3DMockup} 
                        onChange={(e) => setInclude3DMockup(e.target.checked)}
                        className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                      />
                      <span>Photorealistic 3D Mockup Visualizations</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-700">+$40</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200 cursor-pointer hover:border-emerald-400 transition-colors">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-800">
                      <input 
                        type="checkbox" 
                        checked={includeCopyrightTransfer} 
                        onChange={(e) => setIncludeCopyrightTransfer(e.target.checked)}
                        className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                      />
                      <span>Full Commercial Copyright Transfer Certificate</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-700">+$30</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column: Live Invoice & Instant Order Dispatch (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-7 rounded-3xl bg-gradient-to-b from-gray-900 to-emerald-950 text-white shadow-xl border border-emerald-500/30">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
                      ESTIMATED INVOICE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">
                    EST_INV#{Math.floor(1000 + Math.random() * 9000)}
                  </span>
                </div>

                <div className="space-y-3 text-xs mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Service:</span>
                    <span className="font-semibold text-white text-right max-w-[180px] truncate">{serviceType}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Assets Volume:</span>
                    <span className="font-semibold text-white">{assetCount} deliverables</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Turnaround:</span>
                    <span className="font-semibold text-white capitalize">{turnaround}</span>
                  </div>
                  {includeSourceFiles && (
                    <div className="flex justify-between text-emerald-300">
                      <span>+ Layered Source Files (.PSD/.AI)</span>
                      <span>+$25</span>
                    </div>
                  )}
                  {include3DMockup && (
                    <div className="flex justify-between text-emerald-300">
                      <span>+ 3D Mockup Visuals</span>
                      <span>+$40</span>
                    </div>
                  )}
                  {includeCopyrightTransfer && (
                    <div className="flex justify-between text-emerald-300">
                      <span>+ Copyright Transfer</span>
                      <span>+$30</span>
                    </div>
                  )}
                </div>

                {/* Total Display */}
                <div className="pt-4 border-t border-white/10 mb-6">
                  <div className="text-[11px] font-mono text-gray-400 mb-1">TOTAL ESTIMATE:</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {formatPrice(calculatedTotalUSD)}
                    </span>
                    <span className="text-xs font-mono text-emerald-400">
                      (USD ${calculatedTotalUSD})
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-2">
                    * 100% Satisfaction Guarantee. Escrow & milestone payments accepted.
                  </p>
                </div>
              </div>

              {/* Order Launch Button */}
              <button
                onClick={() => onOpenHireModal(serviceType, 'Custom Calculated Order', calculatedTotalUSD)}
                className="w-full py-4 px-6 rounded-2xl primary-gradient text-white font-bold text-sm shadow-xl shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Place Order with this Estimate</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
