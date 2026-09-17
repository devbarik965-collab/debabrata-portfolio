import React from 'react';
import { WORK_EXPERIENCES } from '../data/portfolioData';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  PauseCircle,
  Award
} from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-200" aria-label="Work Experience Timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-700" />
            <span>Career Progression</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Work Experience Timeline
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Over 5 years of commercial marketing experience encompassing independent client projects, multi-year agency leadership as Founder &amp; CEO, and corporate execution.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {WORK_EXPERIENCES.map((exp) => {
            const isBreak = exp.isCareerBreak;
            const isAgencyFounder = exp.type === 'Agency Leadership';

            return (
              <div
                key={exp.id}
                id={`exp-${exp.id}`}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                    isBreak
                      ? 'bg-amber-100 border-amber-500'
                      : isAgencyFounder
                      ? 'bg-cyan-600 border-white shadow-md ring-4 ring-cyan-100'
                      : 'bg-white border-cyan-600'
                  }`}
                />

                {/* Experience Card */}
                <div
                  className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                    isBreak
                      ? 'bg-amber-50/60 border-amber-200 text-amber-900'
                      : isAgencyFounder
                      ? 'bg-white border-cyan-300 shadow-md ring-1 ring-cyan-200'
                      : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                  }`}
                >
                  {/* Top Bar / Metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-xs font-mono-code px-2.5 py-0.5 rounded border ${
                          isBreak
                            ? 'bg-amber-100 text-amber-800 border-amber-300'
                            : isAgencyFounder
                            ? 'bg-cyan-50 text-cyan-800 border-cyan-200 font-semibold'
                            : 'bg-[#F8FAFC] text-slate-700 border-slate-200'
                        }`}
                      >
                        {exp.period}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded bg-[#F8FAFC] text-slate-600 border border-slate-200">
                        {exp.type}
                      </span>
                    </div>

                    {exp.location && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Role and Company */}
                  <div className="mb-3">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                      {isBreak && <PauseCircle className="w-5 h-5 text-amber-600" />}
                      {isAgencyFounder && <Award className="w-5 h-5 text-cyan-600" />}
                      <span>{exp.role}</span>
                    </h3>
                    <div className="text-sm font-semibold text-cyan-800 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Responsibilities list */}
                  {exp.responsibilities.length > 0 && (
                    <div className="mb-4 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono-code">
                        {isBreak ? 'Context & Status:' : 'Core Responsibilities & Impact:'}
                      </div>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <CheckCircle2
                              className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                                isBreak ? 'text-amber-600' : 'text-cyan-700'
                              }`}
                            />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills Applied Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skillsApplied.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#F8FAFC] text-slate-700 border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
