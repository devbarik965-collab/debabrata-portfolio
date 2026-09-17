import React, { useEffect, useState } from 'react';
import { RealClientProject } from '../types';
import {
  X,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Briefcase,
  Layers,
  Wrench,
  BarChart3,
  Image as ImageIcon,
  Tag,
  AlertCircle,
  FileCheck2,
  Users,
  MapPin,
  Globe,
  Sparkles
} from 'lucide-react';

interface ClientProjectModalProps {
  project: RealClientProject | null;
  initialTab?: 'overview' | 'evidence';
  isOpen: boolean;
  onClose: () => void;
}

export const ClientProjectModal: React.FC<ClientProjectModalProps> = ({
  project,
  initialTab = 'overview',
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'evidence'>('overview');

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab, project]);

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

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="client-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-[#F8FAFC] flex-shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  Real Client Project
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono-code font-medium bg-cyan-50 text-cyan-800 border border-cyan-200">
                  {project.categoryBadge}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs text-slate-600 bg-white border border-slate-200 shadow-xs">
                  {project.industry}
                </span>
              </div>

              {/* Title */}
              <h3 id="client-modal-title" className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {project.name}
              </h3>

              {/* Location focus if present */}
              {project.locationFocus && (
                <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-cyan-700 flex-shrink-0" />
                  <span>
                    <strong className="text-slate-800 font-medium">Location Focus:</strong>{' '}
                    {project.locationFocus.join(' • ')}
                  </span>
                </div>
              )}
            </div>

            {/* Actions: Visit Website & Close Button */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold transition-colors flex items-center gap-1.5 shadow-2xs"
                  title="Visit Client Website"
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="hidden sm:inline">Visit Website</span>
                  <ExternalLink className="w-3 h-3 text-emerald-700" />
                </a>
              )}

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Close Project Detail Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-200">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-cyan-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Overview &amp; Contribution</span>
            </button>

            <button
              onClick={() => setActiveTab('evidence')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'evidence'
                  ? 'bg-cyan-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Project Evidence &amp; Visuals</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-600 text-sm bg-white">
          {activeTab === 'overview' ? (
            <>
              {/* Image Preview & Description */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-6 rounded-xl overflow-hidden border border-slate-200 bg-[#F8FAFC] shadow-xs">
                  <div className="relative aspect-video w-full bg-slate-100 flex items-center justify-center">
                    <img
                      src={project.campaignEvidence.imageUrl}
                      alt={project.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-white/95 backdrop-blur-sm border border-slate-200 text-[10px] font-mono-code text-cyan-800 font-medium">
                      Portfolio Asset
                    </div>
                  </div>
                  <div className="p-3 bg-[#F8FAFC] border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                    <span>{project.campaignEvidence.imageCaption}</span>
                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-700 hover:text-cyan-900 font-medium flex items-center gap-1 text-[11px]"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-1.5 font-mono-code">
                      Project Description
                    </h4>
                    <p className="text-slate-700 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono-code">
                      Target Recruiter Roles
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.targetRecruiterRoles.map((role, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#F8FAFC] text-slate-700 border border-slate-200 flex items-center gap-1"
                        >
                          <Users className="w-3 h-3 text-cyan-700" />
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono-code">
                      Services Provided
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.services.map((srv, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-50 text-cyan-800 border border-cyan-200"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* My Contribution Section */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>My Contribution (Completed Work)</span>
                </h4>
                <ul className="space-y-2.5">
                  {project.myContribution.map((contrib, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">{contrib}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SEO Recommendations / Optimization Plan if available */}
              {project.recommendationsPlan && (
                <div className="p-4 sm:p-5 rounded-xl bg-amber-50/70 border border-amber-200">
                  <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-amber-700" />
                    <span>SEO Recommendations / Optimization Plan</span>
                  </h4>
                  <p className="text-xs text-amber-900/80 mb-3 leading-relaxed">
                    The following strategic initiatives and architectural recommendations were developed as an actionable roadmap for ongoing technical enhancement:
                  </p>
                  <ul className="space-y-2.5">
                    {project.recommendationsPlan.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-950">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Performance Snapshots Preview (if available) */}
              {project.campaignEvidence.performanceSnapshots && (
                <div className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-cyan-700" />
                      <span>Documented Performance Snapshots from Portfolio</span>
                    </h4>
                    <span className="text-[11px] font-mono-code text-slate-500">
                      Meta Ads Records
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.campaignEvidence.performanceSnapshots.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 hover:border-cyan-500 shadow-xs transition-colors"
                      >
                        <div>
                          <div className="text-[11px] font-mono-code text-slate-500">
                            {item.label}
                          </div>
                          <div className="text-base font-bold text-slate-900 mt-0.5">
                            {item.leads}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold font-mono-code bg-emerald-50 text-emerald-800 border border-emerald-200">
                            {item.costPerLead}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Metrics / Disclosure Note */}
              {project.verifiedMetricsNote && (
                <div className="flex items-start gap-2.5 text-xs text-slate-600 bg-[#F8FAFC] p-3 rounded-xl border border-slate-200">
                  <AlertCircle className="w-4 h-4 text-cyan-700 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-slate-800 font-medium">Performance Note:</strong> {project.verifiedMetricsNote}
                  </span>
                </div>
              )}

              {/* Tools & Platforms */}
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono-code">
                  Tools &amp; Platforms Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.toolsAndPlatforms.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#F8FAFC] text-slate-700 border border-slate-200 flex items-center gap-1.5"
                    >
                      <Wrench className="w-3 h-3 text-cyan-700" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* EVIDENCE & VISUALS TAB */
            <div className="space-y-6">
              {/* Evidence Overview Banner */}
              <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-200">
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-900 font-mono-code">
                  <ShieldCheck className="w-4 h-4 text-cyan-700" />
                  Verified Portfolio Evidence
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {project.campaignEvidence.summary}
                </p>
              </div>

              {/* High-Resolution Project Visual */}
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                <div className="p-3 bg-[#F8FAFC] border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1.5 text-cyan-800 font-mono-code font-semibold">
                    <ImageIcon className="w-3.5 h-3.5 text-cyan-700" />
                    Portfolio Visual Evidence
                  </span>
                  <span className="font-mono-code text-[11px] text-slate-500">
                    {project.name}
                  </span>
                </div>
                <div className="relative aspect-video w-full bg-slate-100 flex items-center justify-center">
                  <img
                    src={project.campaignEvidence.imageUrl}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3.5 bg-[#F8FAFC] border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span>{project.campaignEvidence.imageCaption}</span>
                  <span className="text-emerald-700 text-[11px] font-mono-code font-semibold">Verified Asset</span>
                </div>
              </div>

              {/* If Website is available */}
              {project.websiteUrl && (
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-emerald-950">
                  <div>
                    <div className="font-bold text-sm text-emerald-900">Live Client Website</div>
                    <div className="text-emerald-800/90 font-mono-code mt-0.5">{project.websiteUrl}</div>
                  </div>
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs w-fit"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* If Performance Snapshots exist (Action Plus Shoes) */}
              {project.campaignEvidence.performanceSnapshots && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-cyan-700" />
                      <span>Documented Campaign Snapshots</span>
                    </h4>
                    <span className="text-xs text-slate-500 font-mono-code">
                      4 Documented Batches
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.campaignEvidence.performanceSnapshots.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between gap-4"
                      >
                        <div>
                          <span className="text-[11px] font-mono-code text-cyan-800 uppercase tracking-wide font-medium">
                            {item.label}
                          </span>
                          <div className="text-lg font-bold text-slate-900 mt-1">
                            {item.leads}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] text-slate-500 mb-1">CPL</div>
                          <span className="px-3 py-1 rounded-md text-xs font-bold font-mono-code bg-emerald-50 text-emerald-800 border border-emerald-200">
                            {item.costPerLead}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg bg-[#F8FAFC] border border-slate-200 text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">Presentation Note:</strong> Performance figures are presented as individual documented campaign snapshots from the portfolio records rather than a single aggregated campaign. No unverified ROAS or speculative statistics are computed.
                  </div>
                </div>
              )}

              {/* Evidence Checklist */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5 font-mono-code">
                  Documented Evidence Points
                </h4>
                <ul className="space-y-2">
                  {project.campaignEvidence.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-[#F8FAFC] flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="text-xs text-slate-500">
            Selected client work shown for portfolio and professional demonstration.
          </div>
          <div className="flex items-center gap-2">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-700" />
                <span>Visit Website</span>
                <ExternalLink className="w-3 h-3 text-emerald-700" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold transition-colors"
            >
              Close
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
        </div>
      </div>
    </div>
  );
};
