import React, { useState } from 'react';
import { 
  Layout, 
  Smartphone, 
  Search, 
  MousePointer, 
  Zap, 
  Eye, 
  CheckCircle,
  Monitor,
  Sparkles,
  Clock,
  MapPin,
  Tag,
  AlertTriangle,
  FolderGit2,
  ArrowUpRight,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { UI_UX_WEBSITE_PROJECTS } from '../data/webDesignProjectsData';
import { WebDesignProject } from '../types';
import { WebDesignProjectModal } from './WebDesignProjectModal';

export const WebDesign: React.FC = () => {
  const [selectedWebProject, setSelectedWebProject] = useState<WebDesignProject | null>(null);

  const designPillars = [
    {
      title: 'UI/UX Web Design',
      desc: 'Intuitive information architecture, deliberate visual hierarchy, accessible contrast, and smooth micro-interactions that build visitor trust.',
      icon: Layout
    },
    {
      title: 'Conversion-Focused Landing Pages',
      desc: 'Single-minded page structures designed around direct calls-to-action (CTAs), social proof placement, and friction-reduced lead forms.',
      icon: MousePointer
    },
    {
      title: 'Mobile-First Responsiveness',
      desc: 'Engineered specifically for handheld touch interactions, thumb-friendly navigation zones, and adaptive screen densities.',
      icon: Smartphone
    },
    {
      title: 'SEO-Friendly Site Structure',
      desc: 'Semantic HTML markup, logical URL paths, clean DOM depth, fast rendering performance, and metadata optimization built from the ground up.',
      icon: Search
    }
  ];

  return (
    <section id="web-design" className="py-20 bg-white border-b border-slate-200" aria-label="UI UX and Web Design Capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-medium mb-3">
            <Layout className="w-3.5 h-3.5 text-cyan-700" />
            <span>Core Discipline 04</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            UI/UX &amp; Web Design
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Bridging aesthetics with performance: crafting high-converting, mobile-first websites and landing pages engineered to convert ad traffic into tangible leads.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {designPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-cyan-500 shadow-2xs transition-all"
              >
                <div className="p-2 w-fit rounded-lg bg-white border border-slate-200 text-cyan-700 mb-3 shadow-2xs">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-sm font-bold text-slate-900 mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* RECRUITER-FRIENDLY SECTION: UI/UX & Website Design Projects */}
        {/* ========================================================================= */}
        <div id="ui-ux-projects-showcase" className="mb-20">
          
          {/* Subsection Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold mb-2">
                <FolderGit2 className="w-3.5 h-3.5 text-cyan-700" />
                <span>Featured Design Portfolio</span>
              </div>
              <h3 className="font-heading text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                UI/UX &amp; Website Design Projects
              </h3>
              <p className="mt-2 text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
                Selected website design and frontend projects demonstrating responsive UI/UX, visual design, conversion-focused layouts and modern web experiences.
              </p>
            </div>

            <div className="flex-shrink-0">
              <span className="text-xs font-mono-code px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 block sm:inline-block">
                4 Projects &bull; Frontend Complete
              </span>
            </div>
          </div>

          {/* Mandatory Recruiter Notice Banner */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-sm mb-8 flex items-start gap-3 shadow-2xs">
            <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="leading-relaxed">
              <strong className="font-semibold text-amber-950">Important Notice for Recruiters:</strong> Some projects are presented as frontend preview/development builds and are not currently connected to a production domain or server. Frontend design and website experience are completed.
            </div>
          </div>

          {/* 4 Professional Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {UI_UX_WEBSITE_PROJECTS.map((project) => (
              <div
                key={project.id}
                id={`card-${project.id}`}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-cyan-500 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden"
              >
                {/* Simulated Browser Bar & Status Badge */}
                <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 font-mono-code text-[11px] text-slate-500 truncate max-w-[140px] sm:max-w-[200px]">
                      {project.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.preview
                    </span>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-mono-code px-2 py-0.5 rounded-full font-semibold border ${
                      project.statusType === 'frontend-preview'
                        ? 'bg-amber-50 text-amber-800 border-amber-200'
                        : 'bg-cyan-50 text-cyan-800 border-cyan-200'
                    }`}
                  >
                    <Clock className="w-2.5 h-2.5" />
                    <span>{project.statusBadge}</span>
                  </span>
                </div>

                {/* Screenshot / Thumbnail Container */}
                <div
                  className="relative aspect-[16/9] bg-slate-100 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedWebProject(project)}
                >
                  <img
                    src={project.thumbnailUrl}
                    alt={`${project.name} UI/UX Web Design Screenshot`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-semibold shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-cyan-700" />
                      <span>View Project Details</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Category & Location Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-2.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                        <Tag className="w-3 h-3 text-slate-400" />
                        <span>{project.category}</span>
                      </span>
                      {project.location && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{project.location}</span>
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h4 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                      {project.name}
                    </h4>

                    {/* Short Description */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* UI/UX Skills Highlighted Chips */}
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5 font-heading">
                      Key UI/UX Disciplines
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.uiUxSkills.slice(0, 4).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#F8FAFC] text-slate-600 border border-slate-200/80"
                        >
                          {skill}
                        </span>
                      ))}
                      {project.uiUxSkills.length > 4 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono-code text-slate-500 bg-slate-50 border border-slate-200/60">
                          +{project.uiUxSkills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Action & Integrity Strip */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="text-[11px] text-slate-500 truncate">
                      {project.statusBadge}
                    </span>

                    {/* View Project Button */}
                    <button
                      id={`btn-view-${project.id}`}
                      onClick={() => setSelectedWebProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-cyan-700 text-white text-xs font-semibold shadow-2xs transition-all active:scale-95 flex-shrink-0"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Project</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Integrity Assurance Strip */}
          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>
                <strong>Portfolio Design Standard:</strong> Frontend design and website experience are completed. Server and domain deployment are pending. No unverified business results, conversions, or revenue claimed.
              </span>
            </div>
            <span className="text-[11px] font-mono-code text-slate-500 flex-shrink-0">
              Honest • Interview-Ready
            </span>
          </div>
        </div>

        {/* Wireframe Architecture & Technical CRO Blueprint */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 font-heading">
                Web Layout Architecture &amp; CRO Wireframe Blueprint
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Structural wireframe discipline: desktop 1440px conversion hierarchy vs. mobile-first 390px thumb-zone interaction flow.
              </p>
            </div>
            <span className="text-[11px] font-mono-code px-2.5 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200 w-fit">
              Architecture Blueprint
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Desktop Mockup Blueprint */}
            <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xs flex flex-col">
              {/* Browser bar */}
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono-code text-[11px] text-slate-500">landing-page-wireframe.preview</span>
                </div>
                <span className="text-[11px] font-mono-code text-cyan-700 font-medium">Desktop View (1440px)</span>
              </div>

              {/* Wireframe / Canvas */}
              <div className="p-6 sm:p-8 bg-[#F8FAFC] flex-1 flex flex-col justify-between min-h-[300px]">
                {/* Simulated Wireframe Components */}
                <div className="space-y-4">
                  {/* Header Wireframe */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div className="h-4 w-24 bg-slate-300 rounded"></div>
                    <div className="flex gap-2">
                      <div className="h-3 w-12 bg-slate-200 rounded"></div>
                      <div className="h-3 w-12 bg-slate-200 rounded"></div>
                      <div className="h-5 w-20 bg-cyan-100 rounded"></div>
                    </div>
                  </div>

                  {/* Hero Wireframe */}
                  <div className="grid grid-cols-12 gap-4 pt-2">
                    <div className="col-span-7 space-y-2.5">
                      <div className="h-3 w-28 bg-cyan-200 rounded"></div>
                      <div className="h-6 w-full bg-slate-300 rounded"></div>
                      <div className="h-3 w-5/6 bg-slate-200 rounded"></div>
                      <div className="h-3 w-4/6 bg-slate-200 rounded"></div>
                      <div className="flex gap-2 pt-2">
                        <div className="h-7 w-28 bg-cyan-600 rounded-md"></div>
                        <div className="h-7 w-24 bg-slate-200 rounded-md"></div>
                      </div>
                    </div>
                    <div className="col-span-5 h-28 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-center p-2 text-center text-slate-500 text-[11px]">
                      [ High-Impact Hero Graphic ]
                    </div>
                  </div>

                  {/* Feature Strip Wireframe */}
                  <div className="grid grid-cols-3 gap-2 pt-3">
                    <div className="p-2.5 rounded bg-white border border-slate-200 shadow-2xs text-center">
                      <div className="h-2.5 w-12 mx-auto bg-slate-300 rounded mb-1"></div>
                      <div className="h-2 w-16 mx-auto bg-slate-200 rounded"></div>
                    </div>
                    <div className="p-2.5 rounded bg-white border border-slate-200 shadow-2xs text-center">
                      <div className="h-2.5 w-12 mx-auto bg-slate-300 rounded mb-1"></div>
                      <div className="h-2 w-16 mx-auto bg-slate-200 rounded"></div>
                    </div>
                    <div className="p-2.5 rounded bg-white border border-slate-200 shadow-2xs text-center">
                      <div className="h-2.5 w-12 mx-auto bg-slate-300 rounded mb-1"></div>
                      <div className="h-2 w-16 mx-auto bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Blueprint Notice */}
                <div className="mt-6 pt-4 border-t border-dashed border-slate-300 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 text-cyan-700 font-medium">
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Conversion-Focused Desktop Landing Page Structure</span>
                  </div>
                  <span className="font-mono-code text-[11px] text-slate-500">CRO Framework</span>
                </div>
              </div>
            </div>

            {/* Mobile-First Layout Blueprint */}
            <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xs flex flex-col">
              {/* Browser bar */}
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-cyan-700" />
                  <span className="font-mono-code text-[11px] text-slate-700">Mobile-First View (390px Viewport)</span>
                </div>
                <span className="text-[11px] font-mono-code text-emerald-700 font-medium">High-Converting CRO</span>
              </div>

              {/* Mobile Wireframe Simulation */}
              <div className="p-6 sm:p-8 bg-[#F8FAFC] flex-1 flex flex-col justify-between min-h-[300px]">
                <div className="max-w-xs mx-auto w-full p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-16 bg-slate-300 rounded"></div>
                    <div className="h-3 w-4 bg-slate-300 rounded"></div>
                  </div>
                  <div className="h-4 w-5/6 bg-cyan-100 rounded"></div>
                  <div className="h-2.5 w-full bg-slate-200 rounded"></div>
                  <div className="h-2.5 w-4/5 bg-slate-200 rounded"></div>
                  
                  {/* Lead form card in mobile view */}
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="h-2 w-20 bg-slate-400 rounded"></div>
                    <div className="h-6 w-full bg-white border border-slate-200 rounded"></div>
                    <div className="h-6 w-full bg-cyan-600 rounded flex items-center justify-center text-[10px] font-bold text-white">
                      Submit Lead Request
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-dashed border-slate-300 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 text-cyan-700 font-medium">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>One-Thumb Interaction Flow &amp; Sticky CTA</span>
                  </div>
                  <span className="font-mono-code text-[11px] text-slate-500">Mobile CRO</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      <WebDesignProjectModal
        project={selectedWebProject}
        onClose={() => setSelectedWebProject(null)}
      />
    </section>
  );
};
