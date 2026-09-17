import React, { useState } from 'react';
import { ProjectCategory, ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Layers, 
  Building, 
  Check, 
  Info, 
  ExternalLink,
  Wrench,
  Search,
  Monitor,
  Eye
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Digital Marketing',
    'SEO',
    'GEO/AEO',
    'Website/UI/UX',
    'Google Ads',
    'Meta Ads',
    'UGC/Video'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200" aria-label="Projects and Case Studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-medium mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-700" />
            <span>Portfolio Grid</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Projects &amp; Case Study Blueprints
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Exploration of strategic frameworks, campaign architectures, and creative deliverables. Transparently labeled with verified methodology and audit-ready structures.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-600 text-white shadow-xs'
                  : 'bg-[#F8FAFC] text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Informational Banner */}
        <div className="mb-8 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs text-slate-600 flex items-center justify-between flex-wrap gap-2">
          <span className="flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-700 flex-shrink-0" />
            <span>Honest Craft Transparency: Results notes and screenshot frames are structured as placeholders pending client NDA release.</span>
          </span>
          <span className="font-mono-code text-[11px] text-slate-500">
            Showing {filteredProjects.length} of {PROJECTS_DATA.length} Projects
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`card-${project.id}`}
              className="rounded-2xl bg-white border border-slate-200 hover:border-cyan-500 transition-all flex flex-col justify-between group overflow-hidden shadow-xs hover:shadow-md"
            >
              <div>
                {/* Visual Mockup / Screenshot Frame (Clear Placeholder) */}
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer relative aspect-video bg-[#F8FAFC] p-4 border-b border-slate-200 flex flex-col justify-between group-hover:bg-slate-50 transition-colors"
                >
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white text-cyan-800 border border-slate-200 shadow-xs font-medium">
                      {project.categoryBadge}
                    </span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-medium">
                      {project.projectTypeLabel}
                    </span>
                  </div>

                  {/* Center graphic preview */}
                  <div className="text-center px-4">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-xs">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-semibold text-slate-800 line-clamp-1">
                      {project.name}
                    </div>
                  </div>

                  {/* Hover prompt */}
                  <div className="text-center text-[10px] text-cyan-700 font-mono-code flex items-center justify-center gap-1 font-medium">
                    <Eye className="w-3 h-3" />
                    <span>Click to inspect full architecture</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Industry tag */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate">{project.industry}</span>
                  </div>

                  {/* Name */}
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="font-heading text-base sm:text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors cursor-pointer leading-snug"
                  >
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Services Provided */}
                  <div className="pt-1">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono-code">
                      Services Provided:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.servicesProvided.map((serv, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[11px] bg-[#F8FAFC] text-slate-700 border border-slate-200"
                        >
                          {serv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Tools & Results Note */}
              <div className="p-5 sm:p-6 pt-0 space-y-3">
                {/* Tools */}
                <div className="flex items-center gap-1.5 overflow-hidden text-xs text-slate-500">
                  <Wrench className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <div className="truncate text-[11px] font-mono-code text-cyan-800 font-medium">
                    {project.toolsUsed.join(' • ')}
                  </div>
                </div>

                {/* Results Note Box */}
                <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200 text-[11px] text-slate-600 flex items-start gap-1.5">
                  <Info className="w-3 h-3 text-cyan-700 flex-shrink-0 mt-0.5" />
                  <span className="truncate">{project.resultsNote}</span>
                </div>

                {/* Inspect Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full mt-2 py-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold border border-slate-200 shadow-xs hover:border-cyan-500 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Inspect Project Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
