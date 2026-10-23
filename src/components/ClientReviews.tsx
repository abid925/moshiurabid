import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Sparkles, CheckCircle2, Globe2 } from 'lucide-react';

export const ClientReviews: React.FC = () => {
  const reviews = [
    {
      id: '1',
      name: 'Alexander Wright',
      role: 'Founder & E-Commerce Director',
      country: 'United States',
      avatar: 'https://picsum.photos/seed/alexander/100/100',
      rating: 5,
      comment: 'Moshiur elevated our product photography and e-commerce visual layouts beyond expectations. The lighting accuracy and retouched details resulted in an immediate lift in sales conversions.',
      project: 'Product Photography & Retouching'
    },
    {
      id: '2',
      name: 'Sophia Laurent',
      role: 'Brand Marketing Lead',
      country: 'France',
      avatar: 'https://picsum.photos/seed/sophia/100/100',
      rating: 5,
      comment: 'Super fast communication and pure vector mastery! Delivered our complete brand identity pack with Photoshop and Illustrator source files in pristine organization.',
      project: 'Brand Identity & Vector Graphics'
    },
    {
      id: '3',
      name: 'Marcus Tanaka',
      role: 'Creative Producer',
      country: 'Singapore',
      avatar: 'https://picsum.photos/seed/tanaka/100/100',
      rating: 5,
      comment: 'Worked with Moshiur on Fiverr for multiple digital marketing banners. High aesthetic discipline, reliable deadlines, and incredible creative vision.',
      project: 'Digital Marketing Campaigns'
    }
  ];

  return (
    <section id="reviews" className="py-28 px-4 sm:px-6 relative futuristic-grid">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-mono font-bold uppercase mb-4">
            <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>GLOBAL CLIENT SATISFACTION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 tracking-tight">
            Client <span className="text-gradient italic">Feedback</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-gray-700">
            <div className="flex text-emerald-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              ))}
            </div>
            <span>5.0 Star Average from 47+ Global Projects</span>
          </div>
        </div>

        {/* 3-Column Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="p-8 rounded-3xl bg-white border border-emerald-500/20 shadow-lg shadow-emerald-950/5 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/15 transition-all flex flex-col justify-between relative group"
            >
              <div className="absolute top-6 right-6 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex text-emerald-500 gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-500" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center gap-3.5">
                <img 
                  src={rev.avatar} 
                  alt={rev.name} 
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{rev.name}</h4>
                  <p className="text-[11px] text-emerald-700 font-medium">{rev.role} • {rev.country}</p>
                  <span className="text-[10px] font-mono text-gray-400 block mt-0.5">{rev.project}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
