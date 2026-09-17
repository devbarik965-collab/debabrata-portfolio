import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  Globe2, 
  CheckCircle2, 
  BarChart3, 
  ShieldCheck, 
  Clock, 
  Search, 
  Layers, 
  Video, 
  ExternalLink,
  FileText
} from 'lucide-react';

interface TrustExperienceStripProps {
  onOpenResumeModal: () => void;
}

export const TrustExperienceStrip: React.FC<TrustExperienceStripProps> = ({ onOpenResumeModal }) => {
  const trustPillars = [
    {
      icon: Briefcase,
      badge: 'Proven Tenure',
      title: '5+ Years Commercial Experience',
      desc: 'Proven track record spanning independent consulting, multi-year agency leadership, and in-house growth execution.',
      accent: 'border-cyan-200 text-cyan-700 bg-cyan-50'
    },
    {
      icon: Award,
      badge: 'Executive Leadership',
      title: 'Former Agency Founder & CEO',
      desc: 'Founded & managed Digital Expert Guru (2018–2022), directing end-to-end client discovery, ad budgets, and SEO roadmaps.',
      accent: 'border-blue-200 text-blue-700 bg-blue-50'
    },
    {
      icon: Layers,
      badge: 'Full-Funnel Hybrid',
      title: 'Search, Paid, Design & Video',
      desc: 'Rare multi-disciplinary ability: pairing technical SEO/GEO/AEO and Google/Meta Ads with high-converting UI/UX and UGC video.',
      accent: 'border-indigo-200 text-indigo-700 bg-indigo-50'
    },
    {
      icon: Globe2,
      badge: 'Global Remote',
      title: 'Remote Collaboration Ready',
      desc: 'Comfortable working independently with distributed teams using structured communication, documentation, and asynchronous workflows across US, UK, UAE & APAC.',
      accent: 'border-emerald-200 text-emerald-700 bg-emerald-50'
    },
    {
      icon: GraduationCap,
      badge: 'Academic Grounding',
      title: 'M.Com & BBA Business Degrees',
      desc: 'Master of Commerce (Utkal Univ) & Bachelor of Business Administration (Ravenshaw Univ) providing analytical rigor.',
      accent: 'border-purple-200 text-purple-700 bg-purple-50'
    },
    {
      icon: ShieldCheck,
      badge: 'Audit-Ready Rigor',
      title: 'Zero Guesswork or Fake Stats',
      desc: 'Committed to verified analytics tracking (GA4, GSC, GTM) and transparent methodology rather than fabricated metrics.',
      accent: 'border-amber-200 text-amber-700 bg-amber-50'
    }
  ];

  const quickJumpDisciplines = [
    { label: 'SEO, GEO & AEO', href: '#seo-geo', icon: Search, tag: 'Search Optimization' },
    { label: 'Google & Meta Ads', href: '#paid-ads', icon: BarChart3, tag: 'Paid Acquisition' },
    { label: 'UI/UX Web Design', href: '#web-design', icon: Layers, tag: 'Conversion Design' },
    { label: 'UGC & Video Ads', href: '#ugc-video', icon: Video, tag: 'Creative Production' },
    { label: 'Projects & Case Studies', href: '#projects', icon: Briefcase, tag: 'Verified Blueprints' },
  ];

  return (
    <section 
      id="recruiter-trust-strip" 
      className="relative bg-white border-b border-slate-200 py-12 md:py-16"
      aria-label="Professional Experience and Trust Indicators"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Recruiter Summary Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-700" />
              <span>Recruiter Overview &bull; Verified Experience Pillars</span>
            </div>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F172A] tracking-tight">
              Why Hire Debabrata Barik for Your Remote Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Transparent, verifiable background tailored for international hiring managers, talent scouts, and agency leaders seeking an autonomous digital marketing professional.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs font-semibold border border-slate-300 transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-700" />
              <span>Full CV Snapshot</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition-all shadow-xs"
            >
              <span>Schedule Interview</span>
            </a>
          </div>
        </div>

        {/* 6 Core Verifiable Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-cyan-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`p-2.5 rounded-xl border ${pillar.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono-code uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors leading-snug mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fast Discipline Navigation Bar for Recruiters */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <Clock className="w-4 h-4 text-cyan-700 flex-shrink-0" />
              <span>Direct Jump to Evaluation Disciplines:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {quickJumpDisciplines.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-cyan-700 border border-slate-200 shadow-xs text-xs font-medium transition-all"
                  >
                    <Icon className="w-3.5 h-3.5 text-cyan-700" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recruiter At-a-Glance Fact Strip */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
            <div className="text-[11px] font-mono-code text-slate-500 uppercase">Availability</div>
            <div className="text-xs sm:text-sm font-bold text-emerald-700 mt-0.5">Immediate – 2 Weeks</div>
          </div>
          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
            <div className="text-[11px] font-mono-code text-slate-500 uppercase">Work Model</div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">100% Full-time Remote / Contract</div>
          </div>
          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
            <div className="text-[11px] font-mono-code text-slate-500 uppercase">Timezone Coverage</div>
            <div className="text-xs sm:text-sm font-bold text-cyan-800 mt-0.5">US, UK, UAE, SG &amp; India Overlap</div>
          </div>
          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
            <div className="text-[11px] font-mono-code text-slate-500 uppercase">Client Confidentiality</div>
            <div className="text-xs sm:text-sm font-bold text-slate-700 mt-0.5">NDA Respecting &amp; Verified Data</div>
          </div>
        </div>

      </div>
    </section>
  );
};
