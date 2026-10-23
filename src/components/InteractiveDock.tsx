import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Layers, 
  Eye, 
  Send, 
  Palette, 
  Cpu, 
  Check, 
  Sliders, 
  Compass, 
  Award,
  Zap,
  Flame,
  MessageSquare
} from 'lucide-react';
import { BehanceIcon } from './Icons';

interface InteractiveDockProps {
  onOpenHireModal: () => void;
  inspectorMode: boolean;
  setInspectorMode: (v: boolean) => void;
  activeAura: string;
  setActiveAura: (aura: string) => void;
}

export const InteractiveDock: React.FC<InteractiveDockProps> = ({
  onOpenHireModal,
  inspectorMode,
  setInspectorMode,
  activeAura,
  setActiveAura
}) => {
  const [showAuraMenu, setShowAuraMenu] = useState(false);

  const auras = [
    { id: 'emerald', name: 'Emerald Glow', color: '#10B981' },
    { id: 'neon', name: 'Lime Lumina', color: '#4ADE80' },
    { id: 'mint', name: 'Mint Aura', color: '#6EE7B7' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-lg">
      {/* Dynamic Floating Quick-Bar */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="glass-panel rounded-full p-2 shadow-2xl shadow-emerald-950/15 border border-emerald-500/25 flex items-center justify-between gap-1.5 sm:gap-3"
      >
        {/* Left Badge: Live Studio Status */}
        <div className="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <div className="relative flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute" />
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <span className="text-[11px] font-sans font-semibold tracking-tight text-emerald-900 hidden sm:inline">
            Active Studio
          </span>
        </div>

        {/* Center Interactive Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Inspector Mode Button */}
          <button
            onClick={() => setInspectorMode(!inspectorMode)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              inspectorMode
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/30'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            title="Toggle Visual Grid & Layer Inspector"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden xs:inline text-[11px]">
              {inspectorMode ? 'Grid On' : 'Inspect'}
            </span>
          </button>

          {/* Color Aura Picker Trigger */}
          <div className="relative">
            <button
              onClick={() => setShowAuraMenu(!showAuraMenu)}
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-emerald-600 transition-colors flex items-center justify-center cursor-pointer"
              title="Change Studio Ambient Lighting"
            >
              <Palette className="w-3.5 h-3.5" />
            </button>

            {/* Aura Dropdown Popover */}
            <AnimatePresence>
              {showAuraMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: -10, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 glass-panel rounded-2xl border border-emerald-500/25 shadow-xl flex flex-col gap-1.5 min-w-[150px]"
                >
                  <div className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-wider px-2 py-0.5">
                    Studio Lighting
                  </div>
                  {auras.map((aura) => (
                    <button
                      key={aura.id}
                      onClick={() => {
                        setActiveAura(aura.id);
                        setShowAuraMenu(false);
                      }}
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                        activeAura === aura.id
                          ? 'bg-emerald-500/15 text-emerald-800 font-bold'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-2.5 h-2.5 rounded-full" 
                          style={{ backgroundColor: aura.color }} 
                        />
                        <span>{aura.name}</span>
                      </div>
                      {activeAura === aura.id && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Behance Button */}
          <a
            href="https://www.behance.net/mshiurislamabid"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition-all flex items-center justify-center"
            title="Moshiur on Behance"
          >
            <BehanceIcon className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Right Super Action: Direct Hire / Estimate in Hand */}
        <button
          onClick={onOpenHireModal}
          className="primary-gradient text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs font-bold shadow-md shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Quick Quote</span>
        </button>
      </motion.div>
    </div>
  );
};
