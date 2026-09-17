import React from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCES, EDUCATION_LIST, TARGET_ROLES, CORE_SKILLS } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, Linkedin, Download, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white text-slate-900 shadow-2xl p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky -top-6 -right-6 float-right z-20 flex items-center gap-2 mb-4 bg-white/95 p-1 rounded-lg">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-semibold shadow-xs transition-colors"
            title="Download CV as PDF (Print -> Save as PDF) or Print"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Download CV / Print CV</span>
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
            aria-label="Close CV Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Resume Document Body */}
        <div className="space-y-6 pt-2">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5">
            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-700 uppercase tracking-wide mt-0.5">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-xs text-slate-600 mt-1 font-medium">
              {PERSONAL_INFO.heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600 mt-3 pt-3 border-t border-slate-200">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.email}
              </span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-blue-700 hover:underline"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-700" />
                linkedin.com/in/debabrata-barik965
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Profile
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              Experienced Digital Marketing &amp; Creative Specialist with 5+ years of cross-disciplinary expertise spanning search engine optimization (SEO, GEO, AEO), high-intent paid advertising on Google and Meta, conversion-focused UI/UX web design, and high-impact UGC video creative production. Founder of a boutique digital agency with proven track record in digital strategy, qualified lead generation, and remote multi-market team delivery.
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Core Skills &amp; Competencies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-[11px] text-slate-800">
              {CORE_SKILLS.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-700 flex-shrink-0"></span>
                  <span className="truncate">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {WORK_EXPERIENCES.map((exp) => (
                <div key={exp.id} className="text-xs space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="font-bold text-slate-950 font-heading">
                      {exp.role} <span className="font-normal text-slate-600">— {exp.company}</span>
                    </span>
                    <span className="text-[11px] font-mono-code font-medium text-slate-600">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-700 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-600 pl-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education &amp; Professional Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.degree} className="p-2 rounded bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">{edu.degree}</div>
                  <div className="text-[11px] text-slate-600">{edu.institution} &bull; {edu.year}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Target Roles & Remote Eligibility */}
          <div className="border-t border-slate-200 pt-4 text-xs text-slate-600">
            <div className="font-semibold text-slate-900 mb-1">
              Availability: Open to Full-time Remote Roles &amp; Contracts (India, USA, UK, Canada, UAE, Singapore, Australia)
            </div>
            <p className="text-[11px]">
              Target Positions: Digital Marketing Specialist/Manager, Performance Marketer, SEO/GEO/AEO Specialist, UI/UX Web Designer, UGC Ad Creator.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
