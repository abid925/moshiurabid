import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, CheckCircle2, Sparkles, Building2, Calendar } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const education = [
    {
      school: 'NSDA',
      title: 'Graphics Design Level 3',
      year: '2020 - 2021',
      badge: 'National Skill Standard',
      description: 'Comprehensive certification in visual communications, vector layout design, color theory, typography hierarchy, and professional pre-press production.',
      skills: ['Vector Design', 'Adobe Photoshop', 'Illustrator', 'Color Theory']
    },
    {
      school: 'UY LAB',
      title: 'Digital Marketing & Branding Course',
      year: '2021 - 2022',
      badge: 'Advanced Branding Certification',
      description: 'Specialized training in brand positioning, marketing campaign visual creation, audience targeting, conversion creatives, and digital content strategy.',
      skills: ['Brand Identity', 'Social Media Ads', 'Campaign Strategy', 'Visual Pacing']
    },
  ];

  const work = [
    {
      company: 'Fiverr',
      role: 'Freelance Graphics Designer',
      year: '2022 - 2026',
      badge: 'Top Rated Freelancer',
      badgeColor: 'emerald',
      description: 'Delivered high-tier graphic design and product photography services to 47+ global clients across the US, UK, Europe, and Asia. Maintained 5-star rating with fast turnarounds.',
      skills: ['Client Management', 'International Standards', 'Brand Systems', 'Product Retouching']
    },
    {
      company: 'Ayub Global IT',
      role: 'Graphics Designer',
      year: '2025 - 2026',
      badge: 'Corporate Lead',
      badgeColor: 'emerald',
      description: 'Led visual marketing assets, advertising campaign creatives, corporate brand collaterals, and high-impact digital packaging for enterprise technology initiatives.',
      skills: ['Corporate Branding', 'Campaign Design', 'Packaging Design', 'Team Collaboration']
    },
  ];

  return (
    <section id="resume" className="py-28 px-4 sm:px-6 relative bg-white/70">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-mono font-bold uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>VERIFIED PROFESSIONAL JOURNEY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 tracking-tight">
            My Education & <span className="text-gradient italic">Work Experience</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-4">
            Building expertise through accredited national institutions and continuous international client delivery.
          </p>
        </div>

        {/* 2-Column Split: Education & Work Experience */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl primary-gradient text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gradient">
                  Education
                </h3>
                <span className="text-xs font-mono text-gray-400">
                  // CERTIFICATIONS & SKILL TRAINING
                </span>
              </div>
            </div>

            <div className="space-y-6 relative pl-6 border-l-2 border-emerald-500/30">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="group relative p-6 rounded-3xl bg-white border border-emerald-500/20 shadow-md shadow-emerald-950/5 hover:border-emerald-500/50 hover:shadow-xl transition-all"
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute -left-[31px] top-7 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-mono font-bold">
                      {item.school}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3 text-emerald-600" />
                      <span>{item.year}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-emerald-600 mb-3">
                    {item.badge}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200 text-[10px] font-medium text-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Work Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gray-900 text-emerald-400 flex items-center justify-center shadow-md">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gradient">
                  Work Experience
                </h3>
                <span className="text-xs font-mono text-gray-400">
                  // CLIENTS & CORPORATE ROLES
                </span>
              </div>
            </div>

            <div className="space-y-6 relative pl-6 border-l-2 border-emerald-500/30">
              {work.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="group relative p-6 rounded-3xl bg-white border border-emerald-500/20 shadow-md shadow-emerald-950/5 hover:border-emerald-500/50 hover:shadow-xl transition-all"
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute -left-[31px] top-7 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-gray-900 text-white text-[11px] font-mono font-bold">
                        {item.company}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        {item.badge}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3 text-emerald-600" />
                      <span>{item.year}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">
                    {item.role}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-emerald-50/60 border border-emerald-200/60 text-[10px] font-medium text-emerald-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
