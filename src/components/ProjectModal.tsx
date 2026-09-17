import React from 'react';
import { ProjectItem } from '../types';
import { 
  X, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  Info, 
  Calendar, 
  Tag, 
  Wrench,
  Building,
  Image as ImageIcon
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-card"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-project-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 pr-10">
          <span className="px-2.5 py-1 rounded-md text-xs font-mono-code font-semibold bg-amber-50 text-amber-800 border border-amber-200">
            {project.projectTypeLabel}
          </span>
          <span className="px-2.5 py-1 rounded-md text-xs font-mono-code font-medium bg-cyan-50 text-cyan-800 border border-cyan-200">
            {project.categoryBadge}
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[#F8FAFC] text-slate-700 border border-slate-200">
            <Building className="w-3.5 h-3.5 text-slate-500" />
            {project.industry}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
            {project.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Visual Mockup & Screenshot Area (Clearly labeled Placeholder) */}
        <div className="rounded-xl bg-[#F8FAFC] border border-slate-200 p-5 overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs text-slate-500 mb-4">
            <span className="flex items-center gap-1.5 text-cyan-800 font-mono-code font-medium">
              <ImageIcon className="w-3.5 h-3.5 text-cyan-700" />
              Strategic Blueprint Slot ({project.projectTypeLabel})
            </span>
            <span className="text-[11px] font-mono-code text-slate-500">
              ID: {project.id}
            </span>
          </div>

          <div className="py-8 px-4 rounded-lg bg-white border border-dashed border-slate-300 flex flex-col items-center justify-center text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-700 shadow-xs">
              <Layers className="w-6 h-6" />
            </div>
            <div className="text-sm font-semibold text-slate-900">
              [ {project.projectTypeLabel} — Architecture &amp; Execution Mockup ]
            </div>
            <p className="text-xs text-slate-600 max-w-md">
              Demonstrates structural campaign setups, technical workflows, and design layouts without presenting unverified client metrics.
            </p>
          </div>
        </div>

        {/* Services Provided */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5 font-mono-code">
            <Tag className="w-3.5 h-3.5 text-cyan-700" />
            Services Provided
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.servicesProvided.map((serv, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs bg-[#F8FAFC] text-slate-700 border border-slate-200 font-medium"
              >
                {serv}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 font-mono-code">
            Execution Highlights &amp; Scope
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Used */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5 font-mono-code">
            <Wrench className="w-3.5 h-3.5 text-cyan-700" />
            Tools &amp; Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.toolsUsed.map((tool, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-[#F8FAFC] text-cyan-800 border border-slate-200 font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Results Section (Strict adherence to prompt: only verified results, or clear placeholder) */}
        <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs">
          <div className="flex items-center gap-1.5 text-slate-900 font-semibold mb-1">
            <Info className="w-4 h-4 text-cyan-700" />
            <span>Case Study Results &amp; Metrics Status</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            {project.resultsNote}
          </p>
        </div>

        {/* Modal Actions */}
        <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold transition-colors"
          >
            Close Overview
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            Inquire About Remote Role or Project
          </a>
        </div>
      </div>
    </div>
  );
};
