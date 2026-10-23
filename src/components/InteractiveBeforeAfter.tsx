import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { Sliders, Sparkles, Camera, CheckCircle2, Zap, ArrowLeftRight, Eye, ShieldCheck } from 'lucide-react';
import { portfolioImages } from '../data/portfolioData';

export const InteractiveBeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(52);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 relative futuristic-grid bg-slate-950 text-white overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] bg-emerald-600/20 pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full blur-[120px] bg-teal-500/15 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Interactive Retouching & Lighting Lab</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              Before & <span className="text-gradient-vibrant italic">After Precision</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Drag the interactive slider below to inspect the transformation from raw unedited capture to commercial 8K e-commerce perfection.
            </p>
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="relative rounded-[2.5rem] p-3 sm:p-4 bg-slate-900/90 border border-emerald-500/25 shadow-2xl overflow-hidden">
          {/* Top Bar */}
          <div className="px-5 py-3 mb-3 rounded-2xl bg-black/50 border border-white/10 flex flex-wrap items-center justify-between text-xs text-gray-300 gap-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Commercial Retouch Comparison • 8K Ultra-HD</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>Color Profile: 32-Bit DCI-P3</span>
              <span>Lens: 90mm Macro f/2.8</span>
              <span>Studio Strobe Lighting</span>
            </div>
          </div>

          {/* Image Comparison Box */}
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[2rem] overflow-hidden select-none cursor-ew-resize bg-black border border-white/10"
          >
            {/* After Image (Right / Background Layer) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={portfolioImages.perfume}
                alt="After Professional Retouching"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold shadow-lg border border-emerald-400/40 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
                <span>After: Commercial Studio Master</span>
              </div>
            </div>

            {/* Before Image (Left / Clipped Overlay Layer) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full min-w-full">
                <img
                  src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1600&auto=format&fit=crop"
                  alt="Before Retouching - Raw Capture"
                  className="w-full h-full object-cover filter brightness-75 contrast-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-gray-900/90 backdrop-blur-md text-gray-300 text-xs font-bold shadow-lg border border-white/20 flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5 text-gray-400" />
                  <span>Before: Raw Unedited Capture</span>
                </div>
              </div>
            </div>

            {/* Divider Line with Draggable Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-emerald-400 shadow-[0_0_15px_#10b981] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full primary-gradient border-2 border-white text-white flex items-center justify-center shadow-2xl pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                <ArrowLeftRight className="w-5 h-5 drop-shadow" />
              </div>
            </div>
          </div>

          {/* Bottom Retouching Specs Checklist */}
          <div className="mt-4 p-5 rounded-2xl bg-black/40 border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-gray-300">Specular Reflection Cleansing</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-gray-300">Color Grading & Luminescence</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-gray-300">Macro Surface Dust & Blemish Polish</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-gray-300">High-Resolution E-Commerce Masks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
