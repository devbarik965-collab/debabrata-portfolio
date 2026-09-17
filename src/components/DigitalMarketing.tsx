import React from 'react';
import { 
  Target, 
  Share2, 
  Users, 
  TrendingUp, 
  Search, 
  FileText, 
  Sliders, 
  CheckCircle,
  BarChart3,
  Layers
} from 'lucide-react';

export const DigitalMarketing: React.FC = () => {
  const marketingPillars = [
    {
      id: 'dm-strategy',
      title: 'Digital Marketing Strategy',
      badge: 'Core Competency',
      icon: Target,
      desc: 'Developing comprehensive multi-channel roadmaps tailored to client business models, buyer personas, market positioning, and growth goals.',
      deliverables: [
        'Full-funnel customer journey mapping',
        'Competitor digital footprint analysis',
        'Channel prioritization & budget allocation',
        'Unified KPIs and reporting architecture'
      ]
    },
    {
      id: 'dm-leadgen',
      title: 'Lead Generation',
      badge: 'Pipeline Growth',
      icon: Users,
      desc: 'Architecting high-intent inbound pipelines combining qualified organic search visibility, targeted paid outreach, and friction-reduced lead forms.',
      deliverables: [
        'High-converting lead capture form design',
        'B2B contact enrichment & list hygiene (Apollo/Hunter)',
        'Automated lead notification workflows (n8n/Make)',
        'MQL to SQL qualification criteria alignment'
      ]
    },
    {
      id: 'dm-performance',
      title: 'Performance Marketing',
      badge: 'Data Driven',
      icon: TrendingUp,
      desc: 'Deploying direct-response acquisition frameworks with disciplined CPA benchmarks, ROAS monitoring, and rigorous audience experimentation.',
      deliverables: [
        'Cost-per-acquisition (CPA) optimization',
        'Audience intent and demographic segmentation',
        'Conversion rate optimization (CRO) testing',
        'Cross-channel attribution and event tracking'
      ]
    },
    {
      id: 'dm-social',
      title: 'Social Media Marketing',
      badge: 'Audience Nurture',
      icon: Share2,
      desc: 'Building brand resonance and authentic engagement across Meta platforms (Instagram, Facebook) and LinkedIn to nurture qualified prospects.',
      deliverables: [
        'Content calendar strategy and theme planning',
        'Community engagement & brand messaging consistency',
        'Micro-content distribution across vertical video & carousels',
        'Social proof amplification & user review curation'
      ]
    },
    {
      id: 'dm-content',
      title: 'Content Marketing',
      badge: 'Organic Relevance',
      icon: FileText,
      desc: 'Creating authoritative informational assets that answer high-intent buyer questions, rank in search, and establish domain credibility.',
      deliverables: [
        'Topic cluster and pillar page architecture',
        'Solution-oriented blog articles and guides',
        'Social copywriting & video script development',
        'Content repurposing across multiple digital formats'
      ]
    },
    {
      id: 'dm-optimization',
      title: 'Campaign Optimization',
      badge: 'Continuous Iteration',
      icon: Sliders,
      desc: 'Conducting continuous post-launch diagnostics to eliminate ad waste, refine keyword bid strategies, and improve overall conversion velocity.',
      deliverables: [
        'Search term audit and negative keyword expansion',
        'Ad creative refresh cycles to mitigate ad fatigue',
        'Device, geographic, and day-parting bid adjustments',
        'Landing page A/B testing and layout refinement'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#F8FAFC] border-b border-slate-200" aria-label="Digital Marketing Capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-medium mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-cyan-700" />
            <span>Core Discipline 01</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Digital Marketing &amp; Strategy
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Full-lifecycle marketing execution designed to bridge top-of-funnel discovery with bottom-of-funnel revenue generation.
          </p>
        </div>

        {/* Strategic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-700 group-hover:bg-cyan-100 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono-code px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-900 uppercase tracking-wider block mb-2">
                    Key Execution Areas:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {item.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-700 flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
