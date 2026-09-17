import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Briefcase, 
  Check, 
  Copy, 
  Linkedin, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Globe2,
  Phone,
  Search,
  BarChart3,
  Layers,
  Video,
  Award,
  FileText,
  Clock,
  Printer
} from 'lucide-react';

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const corePillars = [
    {
      title: 'SEO, GEO & AEO',
      subtitle: 'Modern AI & Organic Search',
      desc: 'Optimization for classic Google Search, plus Generative Engines (ChatGPT, Gemini, Perplexity) and Answer Engines.',
      icon: Search,
      href: '#seo-geo',
      accent: 'border-cyan-200 text-cyan-700 bg-cyan-50'
    },
    {
      title: 'Google & Meta Ads',
      subtitle: 'High-Intent Paid Acquisition',
      desc: 'Full-funnel campaign architectures across Google Search, PMax, Meta Feed, Reels, Custom & Lookalike Audiences.',
      icon: BarChart3,
      href: '#paid-ads',
      accent: 'border-blue-200 text-blue-700 bg-blue-50'
    },
    {
      title: 'UI/UX & Web Design',
      subtitle: 'Conversion-Engineered Pages',
      desc: 'Mobile-first responsive landing pages and website interfaces engineered to eliminate friction and elevate conversion rates.',
      icon: Layers,
      href: '#web-design',
      accent: 'border-emerald-200 text-emerald-700 bg-emerald-50'
    },
    {
      title: 'UGC & Video Ads',
      subtitle: 'Creative Asset Production',
      desc: 'Attention-grabbing short-form video ads (9:16 vertical Reels/Shorts), UGC pacing, and AI-assisted multimedia production.',
      icon: Video,
      href: '#ugc-video',
      accent: 'border-purple-200 text-purple-700 bg-purple-50'
    }
  ];

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-38 md:pb-24 overflow-hidden border-b border-slate-200 bg-[#F8FAFC]"
      aria-label="Introduction and Overview"
    >
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start max-w-5xl">
          
          {/* Status Badges Row */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span
              id="badge-remote"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open to Full-Time Remote Opportunities</span>
            </span>

            <span
              id="badge-contract-secondary"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium shadow-2xs"
            >
              <span>Contract / Project Work Secondary</span>
            </span>

            <span
              id="badge-experience"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-800 text-xs font-semibold shadow-2xs"
            >
              <Briefcase className="w-3.5 h-3.5 text-cyan-700" />
              <span>5+ Years Digital Marketing Experience</span>
            </span>

            <span
              id="badge-location"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs shadow-2xs"
            >
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{PERSONAL_INFO.location}</span>
            </span>
          </div>

          {/* Name & Professional Title */}
          <div className="space-y-1 mb-4">
            <div
              id="hero-person-name"
              className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-cyan-800"
            >
              Debabrata Barik
            </div>
            <h1
              id="hero-title"
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.12]"
            >
              Digital Marketing &amp; Creative Specialist
            </h1>
          </div>

          {/* Core Subtitle / Functional Positioning */}
          <p
            id="hero-subtitle"
            className="text-base sm:text-xl font-semibold text-slate-800 mb-5 leading-relaxed border-l-3 border-cyan-600 pl-4 py-0.5"
          >
            SEO | GEO | AEO | Google Ads | Meta Ads | UI/UX Web Design | UGC &amp; Video Ads
          </p>

          {/* Narrative positioning tailored for recruiters */}
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
            Over 5 years of commercial digital marketing experience combining search engine optimization (SEO, modern GEO &amp; AEO), paid media acquisition on Google Ads and Meta Ads, conversion-focused UI/UX web design, and high-impact UGC video ads. Experienced as an independent agency founder and remote specialist, bringing end-to-end autonomy, disciplined execution, and collaborative communication to international and India-based remote teams.
          </p>

          {/* 4 Core Pillars Grid (Directly within Hero for immediate recruiter scannability) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <a
                  key={pillar.title}
                  href={pillar.href}
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-500 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className={`p-2 rounded-xl border ${pillar.accent}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-700 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <div className="font-heading text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                      {pillar.title}
                    </div>
                    <div className="text-[11px] font-medium text-cyan-700 mb-1.5">
                      {pillar.subtitle}
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                      {pillar.desc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              id="hero-btn-view-work"
              href="#client-work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Client Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {onOpenResumeModal && (
              <>
                <button
                  id="hero-btn-cv-modal"
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm border border-slate-300 shadow-2xs hover:border-slate-400 transition-all active:scale-[0.98]"
                >
                  <FileText className="w-4 h-4 text-cyan-700" />
                  <span>View CV</span>
                </button>

                <button
                  id="hero-btn-cv-print"
                  onClick={() => {
                    onOpenResumeModal();
                    setTimeout(() => window.print(), 350);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-medium text-xs sm:text-sm border border-slate-300 shadow-2xs hover:border-slate-400 transition-all active:scale-[0.98]"
                  title="Print CV or save as PDF"
                >
                  <Printer className="w-4 h-4 text-slate-600" />
                  <span>Download CV / Print CV</span>
                </button>
              </>
            )}

            <a
              id="hero-btn-contact"
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-semibold text-xs sm:text-sm border border-slate-300 shadow-2xs hover:border-slate-400 transition-all active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 text-cyan-700" />
              <span>Contact Me</span>
            </a>

            <a
              id="hero-btn-linkedin"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-medium text-xs sm:text-sm border border-slate-300 shadow-2xs hover:border-slate-400 transition-all"
              aria-label="LinkedIn Profile of Debabrata Barik"
            >
              <Linkedin className="w-4 h-4 text-[#0a66c2]" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          {/* Direct Quick-Contact Strip for Hiring Managers */}
          <div
            id="recruiter-quick-contacts"
            className="w-full grid grid-cols-1 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-xs text-slate-700"
          >
            {/* Email item */}
            <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-[#F8FAFC] border border-slate-200/80">
              <div className="flex items-center gap-2 truncate">
                <Mail className="w-4 h-4 text-cyan-700 flex-shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-700 truncate font-medium">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone item */}
            <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-[#F8FAFC] border border-slate-200/80">
              <div className="flex items-center gap-2 truncate">
                <Phone className="w-4 h-4 text-cyan-700 flex-shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phoneRaw}`} className="hover:text-slate-900 truncate font-medium">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
                title="Copy phone to clipboard"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* WhatsApp direct */}
            <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-[#F8FAFC] border border-slate-200/80">
              <div className="flex items-center gap-2 truncate">
                <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
                <a
                  href="https://wa.me/918249312058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline truncate font-medium"
                >
                  WhatsApp: +91 82493 12058
                </a>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            </div>

            {/* Target markets overview */}
            <div className="flex items-center gap-2 p-2 rounded-lg bg-[#F8FAFC] border border-slate-200/80 text-slate-700">
              <Globe2 className="w-4 h-4 text-cyan-700 flex-shrink-0" />
              <span className="truncate">India &amp; Global Remote</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

