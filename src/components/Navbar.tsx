import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowUpRight, Menu, X, Mail, Phone, ExternalLink, Download, Loader2, Check } from 'lucide-react';
import { downloadProjectZip } from '../utils/downloadZip';

interface NavbarProps {
  onOpenHireModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHireModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadZip = async () => {
    if (downloading) return;
    setDownloading(true);
    try {
      await downloadProjectZip();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (e) {
      console.error(e);
    } finally {
      setDownloading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Experience', href: '#resume' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-panel rounded-full px-5 py-2.5 flex items-center justify-between shadow-lg shadow-emerald-950/5 border border-emerald-500/20">
          {/* Logo & Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden p-[2px] primary-gradient shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img 
                  src="https://i.ibb.co.com/8D0zQg8d/markup-1000002382.jpg" 
                  alt="Moshiur" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 rounded-full border border-white/40" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-signature italic font-bold text-2xl tracking-tight text-gray-900 group-hover:text-emerald-600 transition-colors">
                  Moshiur
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <span className="text-[11px] font-sans font-medium tracking-wide text-emerald-700/90 -mt-1 hidden sm:block">
                Design & Photography Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-gray-100/60 p-1 rounded-full border border-black/5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-600 hover:text-emerald-700 hover:bg-white transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Status & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleDownloadZip}
              disabled={downloading}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer disabled:opacity-75"
              title="Download Entire Project as ZIP"
            >
              {downloading ? (
                <Loader2 className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
              ) : downloadSuccess ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Download className="w-3.5 h-3.5 text-emerald-400" />
              )}
              <span>{downloading ? 'Packing...' : downloadSuccess ? 'Ready!' : 'Project ZIP'}</span>
            </button>

            <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 text-xs font-semibold border border-emerald-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Projects</span>
            </div>

            <button
              onClick={onOpenHireModal}
              className="primary-gradient text-white px-5 py-2 rounded-full text-xs font-bold tracking-wide shadow-md shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="md:hidden mt-2 p-4 glass-panel rounded-2xl border border-emerald-500/20 shadow-xl flex flex-col gap-2"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-gray-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleDownloadZip();
                  }}
                  disabled={downloading}
                  className="w-full py-2.5 px-3 flex items-center justify-center gap-2 text-xs font-bold rounded-xl bg-slate-900 text-white hover:bg-slate-800 cursor-pointer disabled:opacity-75"
                >
                  {downloading ? (
                    <Loader2 className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
                  ) : downloadSuccess ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                  )}
                  <span>{downloading ? 'Preparing ZIP...' : 'Download Codebase ZIP'}</span>
                </button>
                <div className="flex gap-2">
                  <a
                    href="https://www.behance.net/mshiurislamabid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 text-center text-xs font-bold rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700"
                  >
                    Behance
                  </a>
                  <a
                    href="https://www.linkedin.com/in/moshiur-ali-abid-66362b343"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 text-center text-xs font-bold rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
