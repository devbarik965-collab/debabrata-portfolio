import React, { useState } from 'react';
import { WebDesignProject } from '../types';
import {
  X,
  MapPin,
  Tag,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Monitor,
  Smartphone,
  MousePointer,
  Sparkles,
  Layout,
  ExternalLink,
  ShieldCheck,
  Eye,
  Layers
} from 'lucide-react';

interface WebDesignProjectModalProps {
  project: WebDesignProject | null;
  onClose: () => void;
}

export const WebDesignProjectModal: React.FC<WebDesignProjectModalProps> = ({
  project,
  onClose
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  return (
    <div
      id="web-design-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="web-design-modal-card"
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl p-5 sm:p-8 space-y-6 text-slate-700 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-web-modal"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            {/* Status Badge */}
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                project.statusType === 'frontend-preview'
                  ? 'bg-amber-50 text-amber-800 border-amber-200'
                  : 'bg-cyan-50 text-cyan-800 border-cyan-200'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{project.statusBadge}</span>
            </span>

            {/* Category */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium">
              <Tag className="w-3 h-3 text-slate-500" />
              <span>{project.category}</span>
            </span>

            {/* Location */}
            {project.location && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>{project.location}</span>
              </span>
            )}
          </div>

          <h2 className="font-heading text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {project.name}
          </h2>
        </div>

        {/* Deployment Status Callout Banner */}
        <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-200/80 flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-start gap-2.5">
            <div className="p-1 rounded bg-cyan-600 text-white mt-0.5 flex-shrink-0">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="font-bold text-cyan-950 font-heading">
                Deployment Status
              </p>
              <p className="text-cyan-900 mt-0.5 leading-relaxed">
                {project.deploymentStatusNote}
              </p>
              {project.buildNotice && (
                <p className="text-amber-800 font-medium mt-1.5 flex items-center gap-1.5 bg-amber-50 p-2 rounded border border-amber-200">
                  <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 text-amber-600" />
                  <span>{project.buildNotice}</span>
                </p>
              )}
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 text-xs font-mono-code flex-shrink-0 h-fit">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-700" />
            <span>Design Verified</span>
          </span>
        </div>

        {/* Project Screenshots Gallery */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-cyan-700" />
              <span>Project Screenshots &amp; Visual Layout</span>
            </h3>
            <span className="text-[11px] font-mono-code text-slate-500">
              {project.galleryImages[activeImageIndex]?.viewType || 'Desktop View'}
            </span>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
            <div className="px-3 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                <span className="ml-2 font-mono-code text-[11px] text-slate-500">
                  preview/{project.id}.frontend.screen
                </span>
              </div>
              <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white border border-slate-200 text-cyan-800 font-medium">
                {project.statusBadge}
              </span>
            </div>

            <div className="relative bg-slate-900/5 aspect-video flex items-center justify-center overflow-hidden group">
              <img
                src={project.galleryImages[activeImageIndex]?.url || project.thumbnailUrl}
                alt={`${project.name} UI Screenshot`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </div>

          <p className="text-xs text-slate-500 italic text-center">
            {project.galleryImages[activeImageIndex]?.caption || 'Full desktop interface design layout'}
          </p>
        </div>

        {/* Overview & UI/UX Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* Overview */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-2">
            <h4 className="font-heading text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <Layout className="w-4 h-4 text-cyan-700" />
              <span>Overview</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* UI/UX Approach */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-2">
            <h4 className="font-heading text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-700" />
              <span>UI/UX Approach</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {project.uiUxApproach}
            </p>
          </div>
        </div>

        {/* Key Sections Designed & CTA / Conversion Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Key Sections Designed */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 space-y-3 shadow-2xs">
            <h4 className="font-heading text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <Monitor className="w-4 h-4 text-cyan-700" />
              <span>Key Sections Designed</span>
            </h4>
            <ul className="space-y-1.5">
              {project.keySectionsDesigned.map((section, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{section}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA / Conversion Elements */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 space-y-3 shadow-2xs">
            <h4 className="font-heading text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <MousePointer className="w-4 h-4 text-cyan-700" />
              <span>CTA / Conversion Elements</span>
            </h4>
            <ul className="space-y-1.5">
              {project.ctaConversionElements.map((cta, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-1.5 flex-shrink-0" />
                  <span>{cta}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Responsive Design & UI/UX Skills */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-4">
          <div>
            <h4 className="font-heading text-sm font-bold text-slate-900 flex items-center gap-1.5 mb-1.5">
              <Smartphone className="w-4 h-4 text-cyan-700" />
              <span>Responsive Design</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {project.responsiveDesign}
            </p>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2 font-heading">
              UI/UX Disciplines Highlighted
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.uiUxSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white text-slate-700 border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Accuracy & Integrity Disclaimer */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-slate-800">Portfolio Integrity Notice:</strong> {project.noClaimsNotice}
          </p>
        </div>

        {/* Modal Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
          <span className="text-xs text-slate-500">
            Debabrata Barik &bull; UI/UX &amp; Web Design Portfolio
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
