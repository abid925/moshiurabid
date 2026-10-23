import React, { useState, useEffect } from 'react';
import { Clock, Globe, Zap, Sparkles } from 'lucide-react';

export const LiveStudioClock: React.FC = () => {
  const [time, setTime] = useState<{
    dhaka: string;
    newYork: string;
    london: string;
    tokyo: string;
  }>({
    dhaka: '',
    newYork: '',
    london: '',
    tokyo: ''
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();

      const formatTime = (tz: string) => {
        return new Intl.DateTimeFormat('en-US', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(now);
      };

      setTime({
        dhaka: formatTime('Asia/Dhaka'),
        newYork: formatTime('America/New_York'),
        london: formatTime('Europe/London'),
        tokyo: formatTime('Asia/Tokyo')
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-900 text-white border-y border-emerald-500/20 py-2 px-4 text-xs select-none overflow-hidden shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Availability Badge */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="font-semibold text-emerald-400 tracking-wide text-[11px] sm:text-xs">
            Studio Status: Accepting International Projects (24h Express Turnaround)
          </span>
        </div>

        {/* Global Clocks */}
        <div className="hidden md:flex items-center gap-6 text-[11px] text-gray-300">
          <div className="flex items-center gap-1.5">
            <span className="text-gray-400">Dhaka (HQ):</span>
            <span className="text-emerald-300 font-bold">{time.dhaka || 'Loading...'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-gray-400">New York (EST):</span>
            <span className="text-white font-medium">{time.newYork || 'Loading...'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-gray-400">London (GMT):</span>
            <span className="text-white font-medium">{time.london || 'Loading...'}</span>
          </div>
        </div>

        {/* Direct Email */}
        <div className="text-[11px] text-gray-400 hidden lg:block">
          Direct Inquiries: <span className="text-emerald-400 font-semibold hover:underline">moshiurislamabid7682@gmail.com</span>
        </div>
      </div>
    </div>
  );
};
