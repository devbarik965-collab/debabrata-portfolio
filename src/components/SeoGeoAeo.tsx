import React from 'react';
import { 
  Search, 
  Sparkles, 
  Bot, 
  Compass, 
  MapPin, 
  Code, 
  LineChart, 
  FileCheck2, 
  HelpCircle, 
  Info,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export const SeoGeoAeo: React.FC = () => {
  const seoCapabilities = [
    {
      title: 'Keyword Research & Search Intent',
      desc: 'Identifying transactional, commercial, and informational queries; clustering keywords by thematic intent rather than isolated volume.',
      icon: Search
    },
    {
      title: 'On-Page SEO & Content Architecture',
      desc: 'Optimizing semantic H1–H3 hierarchies, meta tags, descriptive alt text, schema microdata, and internal topical linking structures.',
      icon: FileCheck2
    },
    {
      title: 'Off-Page SEO & Authority Building',
      desc: 'Developing white-hat authority building frameworks, contextual citation management, and digital PR outreach roadmaps.',
      icon: Compass
    },
    {
      title: 'Local SEO & Google Business Profile',
      desc: 'Optimizing local business listings, geo-targeted landing pages, NAP consistency, and localized customer review workflows.',
      icon: MapPin
    }
  ];

  const modernSearchPillars = [
    {
      id: 'pillar-geo',
      badge: 'Modern AI Paradigm',
      title: 'Generative Engine Optimization (GEO)',
      subtitle: 'Optimizing for ChatGPT Search, Google Gemini & Perplexity',
      icon: Sparkles,
      desc: 'Modern search behavior has expanded from 10 blue links to generative AI synthesizers. GEO restructures website content so that LLM models can easily parse, cite, and attribute authoritative brand data.',
      techniques: [
        'Entity-First Content Modeling: Structuring content around verified entities recognized by Knowledge Graphs.',
        'Information Density & Synthesis: Creating high-signal data tables and concise factual summaries that AI synthesizers cite.',
        'Authoritative Sourcing & Quotes: Providing clear, citable points of view with transparent attribution.',
        'Semantic HTML & Machine Readability: Ensuring clean DOM structure free from rendering obstacles.'
      ]
    },
    {
      id: 'pillar-aeo',
      badge: 'Answer-First Search',
      title: 'Answer Engine Optimization (AEO)',
      subtitle: 'Capturing Featured Snippets & Direct AI Responses',
      icon: HelpCircle,
      desc: 'AEO focuses on providing immediate, unambiguous answers to specific user questions. Designed to win position-zero featured snippets and direct answers in voice search and conversational AI queries.',
      techniques: [
        'Direct-Answer Formatting: Providing 45–60 word definitive answer paragraphs immediately following H2/H3 question headers.',
        'FAQ & How-To Schema Deployment: Utilizing structured JSON-LD data to feed search engine rich results.',
        'Conversational Long-Tail Targeting: Targeting natural spoken-language queries and multi-turn inquiry paths.',
        'Step-by-Step Procedural Clarity: Creating clear, ordered lists and tables that search engines can feature directly.'
      ]
    }
  ];

  const toolStack = [
    {
      name: 'Google Search Console',
      role: 'Organic Health & Indexation',
      desc: 'Monitoring indexation status, sitemap submissions, mobile usability, search queries, impressions, and Core Web Vitals diagnostics.'
    },
    {
      name: 'Google Analytics (GA4)',
      role: 'User Behavior & Conversions',
      desc: 'Setting up custom conversion events, tracking user acquisition channels, engagement rates, session paths, and funnel drop-offs.'
    },
    {
      name: 'Google Tag Manager',
      role: 'Tag & Pixel Infrastructure',
      desc: 'Deploying tracking scripts, custom click triggers, form submission events, and third-party measurement without brittle code edits.'
    }
  ];

  return (
    <section id="seo-geo" className="py-20 bg-white border-b border-slate-200" aria-label="SEO, GEO, and AEO Capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-medium mb-3">
            <Search className="w-3.5 h-3.5 text-cyan-700" />
            <span>Core Discipline 02</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Search Engine, Generative &amp; Answer Optimization (SEO / GEO / AEO)
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A modernized approach to organic discoverability: connecting foundational search hygiene with next-generation AI answer engine readiness.
          </p>
        </div>

        {/* Professional Transparency Disclaimer (Mandate from user prompt) */}
        <div className="mb-10 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-cyan-700 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-900">Professional Accuracy Note:</span> Practical capabilities and strategic methodologies are detailed below based on documented industry best practices. Specific ranking positions, AI citation rates, or traffic volume multipliers are verified on a per-client basis and are not artificially claimed without audit-ready evidence.
          </div>
        </div>

        {/* Foundation: Classical & Technical SEO Grid */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 font-heading mb-4">
            Foundational &amp; Local SEO Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {seoCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-cyan-500 shadow-xs transition-all"
                >
                  <div className="p-2 w-fit rounded-lg bg-white border border-slate-200 text-cyan-700 mb-3 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-slate-900 mb-1.5">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Next-Gen Search Evolution: GEO & AEO (2 columns) */}
        <div className="mb-14">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 font-heading mb-4">
            Next-Generation AI Search Optimization
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {modernSearchPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  id={pillar.id}
                  className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-cyan-500 shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="inline-flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200 text-cyan-700 shadow-xs">
                        <Icon className="w-5 h-5" />
                        <span className="font-heading font-semibold text-xs text-slate-900">
                          {pillar.title}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono-code px-2.5 py-0.5 rounded bg-cyan-50 text-cyan-800 border border-cyan-200">
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="text-xs font-medium text-slate-700 mb-3">
                      {pillar.subtitle}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-[11px] font-semibold text-slate-900 uppercase tracking-wider mb-2.5">
                      Implementation Principles:
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {pillar.techniques.map((tech, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 flex-shrink-0 mt-0.5" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Analytics & Search Infrastructure Trio */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 font-heading mb-4">
            Measurement &amp; Tracking Infrastructure
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {toolStack.map((tool) => (
              <div
                key={tool.name}
                className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 shadow-xs"
              >
                <div className="text-xs font-mono-code text-cyan-700 mb-1 font-medium">
                  {tool.role}
                </div>
                <h4 className="font-heading text-base font-bold text-slate-900 mb-2">
                  {tool.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
