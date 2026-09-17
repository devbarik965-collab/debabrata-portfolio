import React from 'react';
import { PERSONAL_INFO, EDUCATION_LIST } from '../data/portfolioData';
import { 
  Award, 
  GraduationCap, 
  Target, 
  TrendingUp, 
  Layers, 
  Video, 
  Search, 
  Palette,
  CheckCircle2
} from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Performance & Paid Ads',
      desc: 'Deep execution across Google Search, Display, PMax, Meta Ads, and full-funnel lead generation.',
      icon: TrendingUp,
      color: 'text-cyan-700'
    },
    {
      title: 'Modern Search (SEO/GEO/AEO)',
      desc: 'Bridging classic technical SEO and entity optimization for AI search engines like ChatGPT & Gemini.',
      icon: Search,
      color: 'text-blue-700'
    },
    {
      title: 'UI/UX & Web Design',
      desc: 'Mobile-first landing page design and conversion rate optimization (CRO) built for measurable action.',
      icon: Layers,
      color: 'text-indigo-700'
    },
    {
      title: 'Creative Media & UGC Video',
      desc: 'Concept-to-cut video ads, short-form Reels, and AI-assisted production that arrest social scroll.',
      icon: Video,
      color: 'text-emerald-700'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200" aria-label="About Debabrata Barik">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-medium mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-700" />
            <span>Professional Profile</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            About Debabrata Barik
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A comprehensive profile crafted for recruiters, talent leaders, and hiring managers seeking an experienced growth and creative professional.
          </p>
        </div>

        {/* Two-column layout: Bio & Value vs Key Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Bio Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-heading text-lg font-semibold text-slate-900 flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-700" />
                <span>Executive Summary &amp; Professional Philosophy</span>
              </h3>
              
              <p className="text-slate-700 leading-relaxed">
                Debabrata Barik is an experienced <strong className="text-slate-900 font-semibold">Digital Marketing &amp; Creative Specialist</strong> with over 5 years of commercial growth experience. Combining a strong background as an agency founder (Digital Expert Guru) with focused remote expertise, he operates end-to-end across organic search visibility (SEO, GEO, AEO), paid ad acquisition (Google &amp; Meta Ads), high-converting UI/UX web design, and authentic UGC video ad creation.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm">
                Actively seeking full-time remote opportunities with international or India-based distributed teams. Brings analytical rigor, autonomous problem-solving, and clear asynchronous communication to growth and creative marketing roles.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>No exaggerated claims; focus on verified methodology and disciplined execution.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Experienced in remote cross-border collaboration and agile workflows.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Fluent in modern generative AI tools (ChatGPT, Gemini, Perplexity, Pictory).</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive background from commerce fundamentals to modern automation.</span>
                </div>
              </div>
            </div>

            {/* Quick Stats / Credibility Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                <div className="text-xl sm:text-2xl font-bold font-heading text-cyan-700">5+ Yrs</div>
                <div className="text-xs text-slate-500 mt-1">Digital Marketing</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                <div className="text-xl sm:text-2xl font-bold font-heading text-slate-900">Agency</div>
                <div className="text-xs text-slate-500 mt-1">Founder Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                <div className="text-xl sm:text-2xl font-bold font-heading text-emerald-700">360°</div>
                <div className="text-xs text-slate-500 mt-1">SEO + Ads + Design</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs text-center">
                <div className="text-xl sm:text-2xl font-bold font-heading text-blue-700">Remote</div>
                <div className="text-xs text-slate-500 mt-1">India &amp; International</div>
              </div>
            </div>
          </div>

          {/* Core Four Strategic Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Core Areas of Practical Expertise
            </h3>
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-cyan-500 shadow-xs transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-xs flex-shrink-0">
                      <Icon className={`w-5 h-5 ${pillar.color}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 font-heading">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Education & Academic Credentials */}
        <div id="education-sub-block" className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-cyan-700" />
            <h3 className="font-heading text-xl font-bold text-[#0F172A]">
              Academic Background &amp; Certified Programs
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EDUCATION_LIST.map((edu) => (
              <div
                key={edu.degree}
                className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono-code font-medium bg-white text-cyan-800 border border-slate-200 mb-2.5 shadow-xs">
                    {edu.year}
                  </div>
                  <h4 className="font-heading text-sm font-bold text-slate-900 leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-medium text-slate-700 mt-1">
                    {edu.institution}
                  </p>
                </div>
                {edu.description && (
                  <p className="text-[11px] text-slate-600 mt-3 pt-3 border-t border-slate-200 leading-normal">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
