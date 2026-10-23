import React, { useState } from 'react';
import { Mail, Linkedin, ArrowUp, Sparkles, Globe, MapPin, Download, Loader2, Check } from 'lucide-react';
import { BehanceIcon } from './Icons';
import { downloadProjectZip } from '../utils/downloadZip';

export const Footer: React.FC = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-28 px-4 sm:px-6 bg-white border-t border-emerald-500/15 futuristic-grid">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 mb-16">
          {/* Left Brand Identity */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden p-[2px] primary-gradient shadow-md shadow-emerald-500/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img 
                    src="https://i.ibb.co.com/8D0zQg8d/markup-1000002382.jpg" 
                    alt="Moshiur" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <span className="font-signature italic font-bold text-3xl text-gray-900 tracking-tight">
                Moshiur
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Commercial Graphics Designer & Product Photographer delivering high-impact brand identities, luxury packaging, and 8K commercial product imagery for international clients.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/80">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Dhaka, Bangladesh • Worldwide Remote Delivery</span>
            </div>
          </div>

          {/* Social Nodes & Direct Contact */}
          <div className="flex flex-col items-center lg:items-end">
            <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-4">
              Connect Directly
            </h4>
            <div className="flex gap-3 mb-6">
              {[
                { 
                  Icon: BehanceIcon, 
                  href: "https://www.behance.net/mshiurislamabid", 
                  label: "Behance",
                  primary: true
                },
                { 
                  Icon: Linkedin, 
                  href: "https://www.linkedin.com/in/moshiur-ali-abid-66362b343", 
                  label: "LinkedIn" 
                },
                { 
                  Icon: Mail, 
                  href: "mailto:moshiurislamabid7682@gmail.com", 
                  label: "Email" 
                }
              ].map(({ Icon, href, label, primary }, idx) => (
                <a 
                  key={idx} 
                  href={href} 
                  target={href.startsWith('mailto') ? undefined : "_blank"}
                  rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all ${
                    primary 
                      ? 'border-emerald-500/30 bg-emerald-50 text-emerald-800 hover:primary-gradient hover:text-white shadow-sm'
                      : 'border-gray-200 hover:border-emerald-500 hover:text-emerald-600 text-gray-700 bg-white'
                  }`}
                  title={label}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-emerald-700 transition-colors p-2 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Verification */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Moshiur. All rights reserved.
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button 
              onClick={handleDownloadZip}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all cursor-pointer disabled:opacity-75"
            >
              {downloading ? (
                <Loader2 className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
              ) : downloadSuccess ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Download className="w-3.5 h-3.5 text-emerald-400" />
              )}
              <span>{downloading ? 'Packing Project...' : downloadSuccess ? 'Downloaded!' : 'Download Project ZIP'}</span>
            </button>
            <span>•</span>
            <span className="text-emerald-700 font-semibold">Verified Pro Portfolio</span>
            <span>•</span>
            <span>47+ Global Client Reviews</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
