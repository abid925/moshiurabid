/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LiveStudioClock } from './components/LiveStudioClock';
import { Hero } from './components/Hero';
import { ServicesBento } from './components/ServicesBento';
import { InteractiveBeforeAfter } from './components/InteractiveBeforeAfter';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { InteractivePricingOrders } from './components/InteractivePricingOrders';
import { MarketplaceHub } from './components/MarketplaceHub';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ClientReviews } from './components/ClientReviews';
import { Footer } from './components/Footer';
import { InteractiveDock } from './components/InteractiveDock';
import { InteractiveHireModal } from './components/InteractiveHireModal';

export default function App() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('Commercial Product Photography');
  const [packageTier, setPackageTier] = useState<string>('Pro Brand Growth');
  const [calculatedTotal, setCalculatedTotal] = useState<number | undefined>(undefined);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [inspectorMode, setInspectorMode] = useState<boolean>(false);
  const [activeAura, setActiveAura] = useState<string>('emerald');

  const handleOpenHireModal = (
    serviceTitle?: string,
    tier?: string,
    total?: number
  ) => {
    if (serviceTitle) setPreselectedService(serviceTitle);
    if (tier) setPackageTier(tier);
    if (total !== undefined) setCalculatedTotal(total);
    setIsHireModalOpen(true);
  };

  return (
    <div className={`font-sans antialiased text-gray-900 selection:bg-emerald-500/20 relative min-h-screen bg-slate-50/50 ${
      inspectorMode ? 'outline-dashed outline-1 outline-emerald-400' : ''
    }`}>
      {/* 2030 Studio Navigation */}
      <Navbar onOpenHireModal={() => handleOpenHireModal()} />

      {/* Global Live Availability & Timezone Strip */}
      <div className="pt-20">
        <LiveStudioClock />
      </div>

      {/* Main Experience Flow */}
      <main>
        {/* 1. Futuristic Hero */}
        <Hero 
          onOpenHireModal={() => handleOpenHireModal()} 
          inspectorMode={inspectorMode}
          activeAura={activeAura}
        />

        {/* 2. Core Creative Disciplines & Bento Showcase */}
        <ServicesBento 
          onOpenHireModal={(srv) => handleOpenHireModal(srv)}
          onSelectServiceForQuote={(srv) => handleOpenHireModal(srv)}
        />

        {/* 3. Interactive Before / After Retouching & Lighting Lab */}
        <InteractiveBeforeAfter />

        {/* 4. Massive Case Studies & Creative Showcase */}
        <InteractiveShowcase 
          onOpenHireModal={(srv) => handleOpenHireModal(srv)}
        />

        {/* 5. International Pricing, Packages & Custom Cost Calculator */}
        <InteractivePricingOrders 
          onOpenHireModal={(srv, tier, total) => handleOpenHireModal(srv, tier, total)}
          currency={currency}
          setCurrency={setCurrency}
        />

        {/* 6. International Marketplace & Trust Hub (Fiverr, Behance, Upwork) */}
        <MarketplaceHub 
          onOpenHireModal={() => handleOpenHireModal('Direct Enterprise Order', 'Elite Studio Suite', 580)}
        />

        {/* 7. Timeline & Verified Qualifications */}
        <ExperienceTimeline />

        {/* 8. Verified International Client Reviews (47+ 5-Star) */}
        <ClientReviews />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating 2030 Handheld Studio Controller (Feature in Hand) */}
      <InteractiveDock 
        onOpenHireModal={() => handleOpenHireModal()}
        inspectorMode={inspectorMode}
        setInspectorMode={setInspectorMode}
        activeAura={activeAura}
        setActiveAura={setActiveAura}
      />

      {/* Instant Project Proposal & Order Builder Modal */}
      <InteractiveHireModal 
        isOpen={isHireModalOpen} 
        onClose={() => setIsHireModalOpen(false)}
        preselectedService={preselectedService}
        packageTier={packageTier}
        calculatedTotal={calculatedTotal}
        currency={currency}
      />
    </div>
  );
}
