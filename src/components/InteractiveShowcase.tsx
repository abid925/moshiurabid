import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Sparkles, 
  Eye, 
  Layers, 
  Filter,
  CheckCircle2,
  X,
  Zap,
  Camera,
  PenTool,
  Sliders
} from 'lucide-react';
import { BehanceIcon } from './Icons';
import { showcaseProjects } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface InteractiveShowcaseProps {
  onOpenHireModal: (serviceName?: string) => void;
}

export const InteractiveShowcase: React.FC<InteractiveShowcaseProps> = ({ onOpenHireModal }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Photography' | 'Graphics' | 'Branding' | 'Packaging'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeFilter === 'All' 
    ? showcaseProjects 
    : showcaseProjects.filter(p => p.category === activeFilter);

  return (
    <section id="showcase" className="py-28 px-4 sm:px-6 relative futuristic-grid bg-white/70">
      <div className="max-w-7xl mx-auto">
        {/* Header & Filter Pill Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Eye className="w-3.5 h-3.5 text-emerald-600" />
              <span>Commercial Client Case Studies</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 tracking-tight">
              Featured <span className="text-gradient italic">Work & Case Studies</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl">
              Engineered with pixel precision in Adobe Photoshop, Illustrator, Lightroom, and high-end studio strobe setups.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 glass-panel rounded-2xl border border-emerald-500/20 shadow-sm">
            {(['All', 'Photography', 'Branding', 'Packaging', 'Graphics'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'primary-gradient text-white shadow-md shadow-emerald-500/30'
                    : 'text-gray-600 hover:text-emerald-700 hover:bg-gray-100'
                }`}
              >
                {cat === 'All' ? 'All Works' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-[2.2rem] bg-white border border-emerald-500/20 overflow-hidden shadow-lg shadow-emerald-950/5 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/15 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Showcase Container */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden bg-gray-100 cursor-pointer" 
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-emerald-500/30 text-emerald-900 text-xs font-mono font-bold shadow-md">
                      {project.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 text-emerald-300 text-[10px] font-mono backdrop-blur-sm border border-white/10">
                      {project.year}
                    </span>
                  </div>

                  {/* Quick Inspect Button on Hover */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/95 text-gray-900 flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 hover:scale-110 transition-all cursor-pointer"
                    title="Open Full Case Study"
                  >
                    <Eye className="w-5 h-5 text-emerald-700" />
                  </button>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="text-xs font-mono text-emerald-300 font-bold mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>CLIENT: {project.client}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold leading-snug group-hover:text-emerald-200 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom Details Bar */}
                <div className="p-6 bg-white flex flex-col gap-4">
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span 
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-emerald-50/60 border border-emerald-200/60 text-[10px] font-medium text-emerald-800"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 cursor-pointer"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Behance Showcase CTA Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-[2.5rem] primary-gradient text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-emerald-600/30">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-inner">
              <BehanceIcon className="w-9 h-9" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold">Need Vector Formats or 8K Studio Shoots?</h3>
              <p className="text-white/90 text-sm mt-1 max-w-xl">
                Explore 50+ international case studies, dielines, and client reviews on Moshiur's Behance profile.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.behance.net/mshiurislamabid"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-emerald-900 font-bold text-sm hover:bg-gray-100 hover:scale-105 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>Explore Behance Showcase</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Case Study Full Inspector Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative w-full max-w-4xl rounded-[2.5rem] bg-white border border-emerald-500/30 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/80">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                    {selectedProject.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    // YEAR: {selectedProject.year}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                {/* Full-width High-Res Image View */}
                <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-gray-100 border border-black/5 shadow-md">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-1">
                    {selectedProject.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-700 font-bold uppercase mb-4">
                    CLIENT: {selectedProject.client}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Challenge & Solution Grid */}
                  {(selectedProject.challenge || selectedProject.solution) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {selectedProject.challenge && (
                        <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80">
                          <h4 className="text-xs font-mono font-bold uppercase text-amber-900 mb-1">
                            The Creative Challenge
                          </h4>
                          <p className="text-xs text-amber-950/80 leading-relaxed">
                            {selectedProject.challenge}
                          </p>
                        </div>
                      )}

                      {selectedProject.solution && (
                        <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
                          <h4 className="text-xs font-mono font-bold uppercase text-emerald-900 mb-1">
                            The Engineered Solution
                          </h4>
                          <p className="text-xs text-emerald-950/80 leading-relaxed">
                            {selectedProject.solution}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Deliverables Checklist */}
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase text-gray-700 mb-3">
                      Delivered Assets:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {selectedProject.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modal Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        onOpenHireModal(selectedProject.title);
                      }}
                      className="primary-gradient text-white px-8 py-3 rounded-full font-bold text-xs shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Zap className="w-4 h-4" />
                      <span>Order Similar Project</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
