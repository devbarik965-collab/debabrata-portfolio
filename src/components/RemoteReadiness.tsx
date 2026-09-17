import React from 'react';
import { TARGET_ROLES, TARGET_MARKETS, PERSONAL_INFO } from '../data/portfolioData';
import { 
  Globe2, 
  CheckCircle2, 
  Clock, 
  Laptop, 
  FileText, 
  MessageSquare, 
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const RemoteReadiness: React.FC = () => {
  const remoteAdvantages = [
    {
      title: 'Time Zone Alignment',
      desc: 'Flexible scheduling with guaranteed overlap for daily standups, weekly sprints, and collaboration across US (EST/PST), UK (GMT), UAE (GST), APAC, and India.',
      icon: Clock
    },
    {
      title: 'Asynchronous Clarity',
      desc: 'Self-directed worker proficient in writing structured briefs, documentation, and clear async status updates that minimize meeting fatigue.',
      icon: FileText
    },
    {
      title: 'Remote Collaboration',
      desc: 'Comfortable working independently with distributed teams using structured communication, documentation and asynchronous workflows.',
      icon: Laptop
    },
    {
      title: 'Cross-Border Execution',
      desc: 'Experienced in remote team coordination, cross-functional stakeholder reporting, and operating with high ownership and autonomy.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="remote" className="py-20 bg-[#F8FAFC] border-b border-slate-200" aria-label="Remote Opportunities and Global Roles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Full-Time Remote Availability</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Remote Opportunities
          </h2>
          <p className="mt-4 text-base sm:text-lg font-medium text-slate-800 leading-relaxed border-l-2 border-emerald-600 pl-4 py-0.5">
            Actively seeking full-time remote opportunities in Digital Marketing, SEO/GEO/AEO, UI/UX Web Design and Creative Marketing.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 pl-4 leading-relaxed">
            (Contract and project-based consulting also available as secondary options for select strategic engagements.)
          </p>
        </div>

        {/* Target Markets Grid */}
        <div className="mb-14">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-700 font-heading mb-4 flex items-center gap-2 font-mono-code">
            <Globe2 className="w-4 h-4 text-cyan-700" />
            <span>Target Markets &amp; Geographic Eligibility</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TARGET_MARKETS.map((market) => (
              <div
                key={market.country}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs transition-all flex items-start gap-3"
              >
                <div className="text-2xl p-1 bg-[#F8FAFC] border border-slate-200 rounded-lg flex-shrink-0">
                  {market.flag}
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900">
                    {market.country}
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    {market.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Roles & Specializations */}
        <div className="mb-14">
          <div className="flex items-center justify-between gap-2 mb-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-700 font-heading font-mono-code">
              Eligible Target Roles ({TARGET_ROLES.length})
            </h3>
            <span className="text-xs text-cyan-800 font-mono-code font-medium">Full-Time Remote &bull; Contract</span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="flex flex-wrap gap-2.5">
              {TARGET_ROLES.map((role) => (
                <div
                  key={role}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 hover:border-cyan-500 hover:text-cyan-800 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 flex-shrink-0" />
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Remote Advantages / Recruiter FAQ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {remoteAdvantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs"
              >
                <div className="p-2 w-fit rounded-lg bg-cyan-50 text-cyan-700 border border-cyan-100 shadow-xs mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-heading text-sm font-bold text-slate-900 mb-1.5">
                  {adv.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
              Ready to Interview for Open Remote Positions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Available for technical marketing interviews, portfolio walkthroughs, and trial tasks. Notice period: Immediate to 2 weeks.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all whitespace-nowrap"
          >
            <span>Schedule Interview Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
