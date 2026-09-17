import React, { useEffect, useState } from 'react';
import { DYNAMIC_SYSTEM_CASE_STUDY } from '../data/dynamicSystemCaseStudyData';
import dynamicSystemImg from '../assets/images/dynamic_system_seo_1789563156236.jpg';
import {
  X,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  MapPin,
  Globe,
  Search,
  Bot,
  FileCode,
  LayoutGrid,
  FileText,
  Target,
  BarChart,
  Layers,
  ArrowRight,
  BookOpen,
  Eye,
  Building2,
  ListChecks,
  Compass,
  Cpu
} from 'lucide-react';

interface DynamicSystemCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DynamicSystemCaseStudyModal: React.FC<DynamicSystemCaseStudyModalProps> = ({
  isOpen,
  onClose
}) => {
  const data = DYNAMIC_SYSTEM_CASE_STUDY;
  const [activeNavSection, setActiveNavSection] = useState<string>('sec-overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const scrollToSection = (id: string) => {
    setActiveNavSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isOpen) return null;

  const navItems = [
    { id: 'sec-overview', label: '1. Overview' },
    { id: 'sec-intent', label: '2. Search Intent' },
    { id: 'sec-strategy', label: '3. Strategy' },
    { id: 'sec-onpage', label: '4. On-Page SEO' },
    { id: 'sec-technical', label: '5. Technical SEO' },
    { id: 'sec-local', label: '6. Local SEO' },
    { id: 'sec-geo-aeo', label: '7. GEO & AEO' },
    { id: 'sec-keywords', label: '8. Keyword Themes' },
    { id: 'sec-implementation', label: '9. Implementation vs Plan' },
    { id: 'sec-results', label: '10. Results & Standards' },
    { id: 'sec-website', label: '11. Website Link' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <header className="p-5 sm:p-6 border-b border-slate-200 bg-[#F8FAFC] flex-shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  {data.projectType}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono-code font-medium bg-cyan-50 text-cyan-800 border border-cyan-200">
                  {data.category}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono-code text-slate-600 bg-white border border-slate-200">
                  {data.badge}
                </span>
              </div>

              <h2
                id="case-study-title"
                className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight"
              >
                {data.title}
              </h2>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={data.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                title="Visit Client Website"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Visit Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Jump Navigation Bar */}
          <nav
            aria-label="Case Study Section Navigation"
            className="flex items-center gap-1.5 mt-4 pt-3 border-t border-slate-200 overflow-x-auto pb-1 scrollbar-thin"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1 ${
                  activeNavSection === item.id
                    ? 'bg-cyan-600 text-white shadow-2xs font-semibold'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </header>

        {/* Scrollable Case Study Body */}
        <main className="p-5 sm:p-7 md:p-8 overflow-y-auto space-y-10 flex-1 text-slate-700 bg-white">
          {/* SECTION 1: PROJECT OVERVIEW */}
          <section id="sec-overview" className="space-y-4 scroll-mt-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Building2 className="w-5 h-5 text-cyan-700" />
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                1. Project Overview
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-2">
                  <div className="text-xs font-mono-code uppercase text-cyan-800 font-semibold tracking-wider">
                    Client &amp; Organization
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    {data.projectOverview.clientName}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {data.projectOverview.summary}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-cyan-50/50 border border-cyan-200 space-y-2">
                  <div className="text-xs font-mono-code uppercase text-cyan-900 font-semibold tracking-wider flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-cyan-700" />
                    <span>Project Mandate &amp; Focus</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {data.projectOverview.focus}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono-code">
                    Core Technology Curriculum Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.projectOverview.curriculumAreas.map((curr, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-md text-xs font-medium bg-[#F8FAFC] text-slate-700 border border-slate-200"
                      >
                        {curr}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Thumbnail Card */}
              <div className="lg:col-span-5 rounded-xl overflow-hidden border border-slate-200 bg-[#F8FAFC] shadow-xs">
                <div className="relative aspect-video w-full bg-slate-100">
                  <img
                    src={dynamicSystemImg}
                    alt="Dynamic System India — SEO & Website Optimization Presentation Asset"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-white/95 backdrop-blur-sm border border-slate-200 text-[10px] font-mono-code text-cyan-800 font-bold">
                    Portfolio Creative Asset
                  </div>
                </div>
                <div className="p-3 bg-[#F8FAFC] border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span>Dynamic System India Brand Overview</span>
                  <span className="text-emerald-700 font-mono-code text-[11px] font-semibold">
                    Verified Work
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: BUSINESS & SEARCH INTENT */}
          <section id="sec-intent" className="space-y-4 scroll-mt-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Compass className="w-5 h-5 text-cyan-700" />
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                2. Business &amp; Search Intent
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <h4 className="text-xs font-mono-code text-slate-500 uppercase tracking-wider font-semibold">
                Target Audience Profile
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {data.businessAndSearchIntent.targetAudience}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                {data.businessAndSearchIntent.audienceProfile.map((aud, i) => (
                  <li
                    key={i}
                    className="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-600 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intent Breakdown Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.businessAndSearchIntent.intentBreakdown.map((intent, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-cyan-300 shadow-2xs transition-all space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{intent.type}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono-code font-semibold bg-cyan-50 text-cyan-800 border border-cyan-200">
                      {intent.intentBadge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {intent.description}
                  </p>
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-mono-code text-slate-500 mb-1">
                      Query Examples:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700 font-mono-code">
                      {intent.queries.map((q, qIdx) => (
                        <li key={qIdx} className="flex items-center gap-1.5 text-[11px]">
                          <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                          <span>&ldquo;{q}&rdquo;</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-600 italic bg-[#F8FAFC] p-3 rounded-lg border border-slate-200">
              <strong>Intent Strategy:</strong> {data.businessAndSearchIntent.intentAlignment}
            </p>
          </section>

          {/* SECTION 3: SEO STRATEGY */}
          <section id="sec-strategy" className="space-y-4 scroll-mt-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Layers className="w-5 h-5 text-cyan-700" />
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                3. SEO Strategy
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {data.seoStrategy.overview}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.seoStrategy.pillars.map((pillar, pIdx) => (
                <div
                  key={pIdx}
                  className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-2 hover:border-cyan-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">{pillar.title}</h4>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white text-cyan-800 border border-slate-200 font-medium">
                      {pillar.focus}
                    </span>
                  </div>
                  <ul className="space-y-1.5 pt-2">
                    {pillar.items.map((it, itIdx) => (
                      <li key={itIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: ON-PAGE SEO */}
          <section id="sec-onpage" className="space-y-4 scroll-mt-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <FileText className="w-5 h-5 text-cyan-700" />
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                4. On-Page SEO
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {data.onPageSeo.overview}
            </p>

            {/* Completed On-Page Work */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase font-mono-code">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Completed Work (Implemented)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.onPageSeo.completedWork.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1"
                  >
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>{item.task}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* On-Page Recommendations Plan */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase font-mono-code">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>SEO Recommendation / Optimization Plan</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.onPageSeo.recommendationsPlan.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200 space-y-1"
                  >
                    <div className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span>{item.task}</span>
                    </div>
                    <p className="text-xs text-amber-900/80 leading-relaxed">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5: TECHNICAL SEO */}
          <section id="sec-technical" className="space-y-4 scroll-mt-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <FileCode className="w-5 h-5 text-cyan-700" />
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                5. Technical SEO
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {data.technicalSeo.overview}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Completed Technical SEO */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase font-mono-code">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Completed Technical Work</span>
                </div>
                <div className="space-y-2.5">
                  {data.technicalSeo.completedWork.map((item, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white border border-slate-200">
                      <div className="text-xs font-bold text-slate-900">{item.task}</div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Technical Plan */}
              <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase font-mono-code">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>SEO Recommendation / Optimization Plan</span>
                </div>
                <div className="space-y-2.5">
                  {data.technicalSeo.recommendationsPlan.map((item, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white border border-amber-200">
                      <div className="text-xs font-bold text-amber-950">{item.task}</div>
                      <p className="text-xs text-amber-900/80 mt-1 leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: LOCAL SEO FOCUS */}
          <section id="sec-local" className="space-y-4 scroll-mt-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <MapPin className="w-5 h-5 text-cyan-700" />
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                6. Local SEO Focus
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {data.localSeo.overview}
            </p>

            {/* Target Locations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {data.localSeo.targetLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-700" />
                      {loc.city}
                    </span>
                    <span className="text-[10px] font-mono-code font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {loc.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{loc.role}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-emerald-800 uppercase font-mono-code flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Implemented Local SEO</span>
                </div>
                <ul className="space-y-1.5">
                  {data.localSeo.completedWork.map((it, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 space-y-2">
                <div className="text-xs font-bold text-amber-900 uppercase font-mono-code flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Local SEO Recommendations</span>
                </div>
                <ul className="space-y-1.5">
                  {data.localSeo.recommendationsPlan.map((it, i) => (
                    <li key={i} className="text-xs text-amber-900/80 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 7: GEO & AEO OPTIMIZATION */}
          <section id="sec-geo-aeo" className="space-y-4 scroll-mt-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Bot className="w-5 h-5 text-cyan-700" />
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                7. GEO &amp; AEO Optimization
              </h3>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-cyan-50/60 border border-cyan-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-cyan-900 uppercase">
                <Cpu className="w-4 h-4 text-cyan-700" />
                <span>Generative Engine &amp; Answer Engine Optimization Framework</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {data.geoAndAeo.explanation}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.geoAndAeo.methodology.map((meth, mIdx) => (
                <div
                  key={mIdx}
                  className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs text-slate-700 leading-relaxed flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>{meth}</span>
                </div>
              ))}
            </div>

            {/* Transparency Disclaimer */}
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">{data.geoAndAeo.disclaimer}</span>
            </div>
          </section>

          {/* SECTION 8: KEYWORD STRATEGY */}
          <section id="sec-keywords" className="space-y-4 scroll-mt-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Search className="w-5 h-5 text-cyan-700" />
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                8. Target Keyword Areas (Thematic Intent Mapping)
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {data.keywordStrategy.explanation}
            </p>

            <div className="p-3 rounded-lg bg-[#F8FAFC] border border-slate-200 text-xs text-slate-600 italic">
              <strong>Professional Standard:</strong> {data.keywordStrategy.disclaimer}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {data.keywordStrategy.keywordThemes.map((kw, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-cyan-300 transition-colors space-y-1.5"
                >
                  <div className="text-xs font-bold text-slate-900 font-mono-code">
                    &ldquo;{kw.theme}&rdquo;
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono-code">
                    <span className="text-slate-500">{kw.category}</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-50 text-cyan-800 border border-cyan-200 font-medium">
                      {kw.intent}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 9: IMPLEMENTATION VS RECOMMENDATIONS */}
          <section id="sec-implementation" className="space-y-4 scroll-mt-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <ListChecks className="w-5 h-5 text-cyan-700" />
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                9. Implementation vs. Recommendations Roadmap
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Completed Work Box */}
              <div className="p-5 rounded-xl bg-emerald-50/40 border border-emerald-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-emerald-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Completed Work (Implemented)</span>
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono-code font-bold bg-emerald-100 text-emerald-800">
                    {data.implementationVsRecommendations.completedWork.length} Items
                  </span>
                </div>
                <ul className="space-y-2">
                  {data.implementationVsRecommendations.completedWork.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommendations Plan Box */}
              <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-amber-950 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>SEO Recommendation / Optimization Plan</span>
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono-code font-bold bg-amber-100 text-amber-800">
                    {data.implementationVsRecommendations.recommendationsPlan.length} Roadmap Points
                  </span>
                </div>
                <p className="text-xs text-amber-900/80 leading-relaxed">
                  The following items represent strategic advisory deliverables for ongoing maintenance:
                </p>
                <ul className="space-y-2">
                  {data.implementationVsRecommendations.recommendationsPlan.map((item, idx) => (
                    <li key={idx} className="text-xs text-amber-950 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 10: RESULTS & MEASUREMENT */}
          <section id="sec-results" className="space-y-4 scroll-mt-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <BarChart className="w-5 h-5 text-cyan-700" />
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                10. Results &amp; Measurement
              </h3>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center space-y-2">
              <div className="text-xs font-mono-code uppercase tracking-wider text-slate-500 font-semibold">
                Client Disclosure Status
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-900">
                &ldquo;{data.resultsAndMeasurement.primaryStatement}&rdquo;
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                {data.resultsAndMeasurement.complianceNote}
              </p>
            </div>

            {/* Governance Standards */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2.5">
              <div className="text-xs font-bold text-slate-900 font-mono-code uppercase tracking-wider">
                Professional Verification Standards
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                {data.resultsAndMeasurement.governanceStandards.map((std, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-700 mt-0.5 flex-shrink-0" />
                    <span>{std}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* SECTION 11: WEBSITE LINK */}
          <section id="sec-website" className="space-y-4 scroll-mt-6 pt-2">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Globe className="w-5 h-5 text-cyan-700" />
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                11. Live Client Website
              </h3>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-xs">
              <div className="space-y-1">
                <div className="text-xs font-mono-code uppercase text-slate-500 font-semibold">
                  Official Client Web Property
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900">
                  Dynamic System India
                </div>
                <div className="text-xs text-cyan-800 font-mono-code">
                  {data.websiteUrl}
                </div>
              </div>

              <a
                href={data.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs w-full sm:w-auto"
              >
                <Globe className="w-4 h-4" />
                <span>Visit Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>
        </main>

        {/* Modal Footer */}
        <footer className="p-4 sm:p-5 border-t border-slate-200 bg-[#F8FAFC] flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="text-xs text-slate-500 font-mono-code">
            Slug: dynamic-system-india-seo • Real Client Project
          </div>
          <div className="flex items-center gap-2">
            <a
              href={data.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-700" />
              <span>Visit Website</span>
              <ExternalLink className="w-3 h-3 text-emerald-700" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold transition-colors"
            >
              Close Case Study
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5"
            >
              <span>Inquire About Experience</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
