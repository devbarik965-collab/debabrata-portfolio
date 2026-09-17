import React, { useState, useEffect } from 'react';
import { REAL_CLIENT_PROJECTS } from '../data/realProjectsData';
import { RealClientProject } from '../types';
import { ClientProjectModal } from './ClientProjectModal';
import { DynamicSystemCaseStudyModal } from './DynamicSystemCaseStudyModal';
import {
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Briefcase,
  Layers,
  Wrench,
  BarChart3,
  Image as ImageIcon,
  Sparkles,
  ArrowUpRight,
  Eye,
  FileCheck2,
  Users,
  AlertCircle,
  MapPin,
  Globe,
  BookOpen
} from 'lucide-react';

export const SelectedClientWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<RealClientProject | null>(null);
  const [modalTab, setModalTab] = useState<'overview' | 'evidence'>('overview');
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isDynamicCaseStudyOpen, setIsDynamicCaseStudyOpen] = useState<boolean>(false);

  useEffect(() => {
    if (window.location.hash === '#dynamic-system-india-seo') {
      setIsDynamicCaseStudyOpen(true);
    }
    const handleHashChange = () => {
      if (window.location.hash === '#dynamic-system-india-seo') {
        setIsDynamicCaseStudyOpen(true);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const filterOptions = [
    { label: 'All Real Projects', value: 'All', count: REAL_CLIENT_PROJECTS.length },
    {
      label: 'SEO & Web Optimization',
      value: 'SEO',
      count: REAL_CLIENT_PROJECTS.filter((p) => p.category.includes('SEO') || p.services.some((s) => s.includes('SEO'))).length
    },
    {
      label: 'Paid Ads & Lead Gen',
      value: 'Paid Ads',
      count: REAL_CLIENT_PROJECTS.filter((p) => p.category.includes('Paid Advertising') || p.services.some((s) => s.includes('Paid') || s.includes('Advertising'))).length
    },
    {
      label: 'Social Media & Events',
      value: 'Social Media',
      count: REAL_CLIENT_PROJECTS.filter((p) => p.category.includes('Social Media') || p.services.some((s) => s.includes('Social Media') || s.includes('Event'))).length
    },
    {
      label: 'Influencer & Content Campaigns',
      value: 'Influencer',
      count: REAL_CLIENT_PROJECTS.filter((p) => p.category.includes('Influencer') || p.services.some((s) => s.includes('Influencer') || s.includes('Content Concept'))).length
    }
  ];

  const filteredProjects = REAL_CLIENT_PROJECTS.filter((proj) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'SEO') {
      return (
        proj.category.includes('SEO') ||
        proj.services.some((s) => s.includes('SEO') || s.includes('Optimization'))
      );
    }
    if (activeFilter === 'Paid Ads') {
      return (
        proj.category.includes('Paid Advertising') ||
        proj.services.some((s) => s.includes('Paid') || s.includes('Advertising'))
      );
    }
    if (activeFilter === 'Social Media') {
      return (
        proj.category.includes('Social Media') ||
        proj.services.some((s) => s.includes('Social Media') || s.includes('Event'))
      );
    }
    if (activeFilter === 'Influencer') {
      return (
        proj.category.includes('Influencer') ||
        proj.services.some((s) => s.includes('Influencer') || s.includes('Content Concept'))
      );
    }
    return true;
  });

  const handleOpenModal = (project: RealClientProject, tab: 'overview' | 'evidence') => {
    setSelectedProject(project);
    setModalTab(tab);
  };

  return (
    <section
      id="client-work"
      className="py-20 sm:py-24 bg-white border-t border-b border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3.5 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Real Portfolio Projects &amp; Client Work</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight">
            Selected Client Work &amp; Real Projects
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Documented client campaigns, SEO optimization, and creative marketing deliverables from my existing portfolio. Demonstrating end-to-end execution across search engine optimization, paid advertising, lead generation, social media event promotion, and influencer marketing.
          </p>

          {/* Hiring Profiles Supported Tag Strip */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
            <span className="text-slate-500 font-mono-code mr-1">Relevant for hiring:</span>
            {[
              'SEO Specialist',
              'Digital Marketing Specialist',
              'Performance Marketing Specialist',
              'Social Media Manager',
              'Creative Marketing Specialist',
              'UGC / Video Roles'
            ].map((role, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200 font-medium"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterOptions.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                activeFilter === tab.value
                  ? 'bg-cyan-600 text-white shadow-xs'
                  : 'bg-[#F8FAFC] hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded font-mono-code ${
                  activeFilter === tab.value
                    ? 'bg-cyan-700 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`card-${project.slug || project.id}`}
              className="bg-white rounded-2xl border border-slate-200 hover:border-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col overflow-hidden group"
            >
              {/* Project Card Header & Badges */}
              <div className="p-5 sm:p-6 border-b border-slate-100 bg-[#F8FAFC]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-800">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                      Real Client Project
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono-code font-medium bg-cyan-50 text-cyan-800 border border-cyan-200">
                      {project.categoryBadge}
                    </span>
                  </div>
                  <span className="text-xs font-mono-code text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200 shadow-xs">
                    {project.industry}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-2 group-hover:text-cyan-700 transition-colors">
                  {project.name}
                </h3>

                {/* Location Focus if available */}
                {project.locationFocus && (
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-cyan-700 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-800 font-medium">Location Focus:</strong>{' '}
                      {project.locationFocus.join(', ')}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Visual / Screenshot Evidence Frame */}
              <div
                onClick={() => {
                  if (project.slug === 'dynamic-system-india-seo') {
                    setIsDynamicCaseStudyOpen(true);
                  } else {
                    handleOpenModal(project, 'evidence');
                  }
                }}
                className="relative aspect-video w-full bg-slate-100 overflow-hidden border-b border-slate-200 cursor-pointer"
              >
                <img
                  src={project.campaignEvidence.imageUrl}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                {/* Top overlay badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[11px] font-mono-code text-cyan-900 border border-slate-200 shadow-xs font-medium">
                    <ImageIcon className="w-3 h-3 text-cyan-700" />
                    Portfolio Creative Asset
                  </span>
                </div>

                {/* Bottom overlay caption */}
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-800 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs truncate">
                  {project.campaignEvidence.imageCaption}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                {/* 1. Description */}
                <div>
                  <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5 font-mono-code">
                    Project Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* 2. Services Chips */}
                <div>
                  <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono-code">
                    Services
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.services.map((srv, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#F8FAFC] text-slate-800 border border-slate-200"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. My Contribution Section */}
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2 mb-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>My Contribution (Completed Work):</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {project.myContribution.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-1.5 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3.5. Recommendations Plan (if applicable) */}
                {project.recommendationsPlan && (
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
                    <h4 className="text-xs font-bold text-amber-900 flex items-center gap-2 mb-2.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                      <span>SEO Recommendations / Optimization Plan:</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {project.recommendationsPlan.map((rec, rIdx) => (
                        <li
                          key={rIdx}
                          className="text-xs text-amber-900/90 flex items-start gap-2 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 flex-shrink-0"></span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 4. Campaign Evidence Section */}
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2 mb-2">
                    <FileCheck2 className="w-3.5 h-3.5 text-cyan-700 flex-shrink-0" />
                    <span>Campaign &amp; Optimization Evidence:</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                    {project.campaignEvidence.summary}
                  </p>

                  {/* If project has documented performance snapshots (Action Plus Shoes) */}
                  {project.campaignEvidence.performanceSnapshots && (
                    <div className="mt-3 pt-3 border-t border-slate-200">
                      <div className="text-[11px] font-mono-code text-cyan-800 mb-2 flex items-center gap-1.5 font-medium">
                        <BarChart3 className="w-3.5 h-3.5 text-cyan-700" />
                        <span>Documented Performance Snapshots from Portfolio:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.campaignEvidence.performanceSnapshots.map((snap, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between gap-2 shadow-xs"
                          >
                            <span className="text-xs font-bold text-slate-900">
                              {snap.leads}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[11px] font-mono-code font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                              {snap.costPerLead}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Verified note or disclosure */}
                  {project.verifiedMetricsNote && (
                    <div className="mt-2 text-[11px] text-slate-500 flex items-start gap-1.5 pt-2 border-t border-slate-200">
                      <AlertCircle className="w-3.5 h-3.5 text-cyan-700 flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-600">{project.verifiedMetricsNote}</span>
                    </div>
                  )}
                </div>

                {/* 5. Tools / Platforms Used */}
                <div>
                  <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono-code">
                    Tools &amp; Platforms
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.toolsAndPlatforms.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-[#F8FAFC] text-slate-700 border border-slate-200 flex items-center gap-1"
                      >
                        <Wrench className="w-3 h-3 text-cyan-700" />
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: "Visit Website" (if available), "View Project" and "View Evidence" */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap sm:flex-nowrap items-center gap-2.5">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300 shadow-2xs transition-all flex items-center justify-center gap-1.5 flex-1 sm:flex-none"
                    >
                      <Globe className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Visit Website</span>
                      <ExternalLink className="w-3 h-3 text-emerald-700" />
                    </a>
                  )}

                  {project.slug === 'dynamic-system-india-seo' ? (
                    <button
                      onClick={() => setIsDynamicCaseStudyOpen(true)}
                      className="flex-1 py-2.5 px-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-1.5 group/btn"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-cyan-100" />
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleOpenModal(project, 'overview')}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold border border-slate-200 shadow-xs transition-all flex items-center justify-center gap-1.5 group/btn"
                      >
                        <span>View Project</span>
                        <Eye className="w-3.5 h-3.5 text-cyan-700 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>

                      <button
                        onClick={() => handleOpenModal(project, 'evidence')}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>View Evidence</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section Mandatory Disclaimer Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            &ldquo;Selected client/project work shown for portfolio and professional demonstration. Performance figures are presented from available campaign records and screenshots.&rdquo;
          </p>
        </div>
      </div>

      {/* Project Detail & Evidence Modal */}
      <ClientProjectModal
        project={selectedProject}
        initialTab={modalTab}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      {/* Dedicated 11-Part SEO Case Study Modal for Dynamic System India */}
      <DynamicSystemCaseStudyModal
        isOpen={isDynamicCaseStudyOpen}
        onClose={() => setIsDynamicCaseStudyOpen(false)}
      />
    </section>
  );
};
