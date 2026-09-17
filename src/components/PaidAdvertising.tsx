import React, { useState } from 'react';
import { 
  BadgePercent, 
  Layers, 
  Users, 
  Sliders, 
  Filter, 
  MousePointerClick, 
  Target, 
  Smartphone, 
  Eye, 
  Check,
  Compass
} from 'lucide-react';

export const PaidAdvertising: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'google' | 'meta'>('google');

  const googleFormats = [
    {
      title: 'Google Search Ads',
      tag: 'High-Intent Demand Capture',
      desc: 'Intercepting active buyers at the exact moment of search. Granular keyword segmentation using exact and phrase match types, accompanied by comprehensive negative keyword hygiene.',
      features: [
        'Transactional keyword research & bid strategy alignment',
        'Responsive search ads with 15 headlines & 4 descriptions',
        'Structured extensions: sitelinks, callouts, and call extensions',
        'Search query report hygiene to eliminate irrelevant spend'
      ]
    },
    {
      title: 'Google Display Ads',
      tag: 'Targeted Brand Recall',
      desc: 'Cost-effective visual awareness and custom intent placement across Google Display Network websites, apps, and video inventory.',
      features: [
        'Custom intent audience builder based on competitor search terms',
        'Responsive display ad creative testing (images, copy, logos)',
        'Exclusion of poor-quality app categories and click-farm placements',
        'Frequency capping to avoid brand fatigue and ad budget burn'
      ]
    },
    {
      title: 'Performance Max (PMax)',
      tag: 'Multi-Channel Machine Learning',
      desc: 'Deploying asset groups across YouTube, Display, Search, Discover, Gmail, and Maps driven by first-party conversion data signals.',
      features: [
        'High-quality audience signal inputs (customer match lists, custom segments)',
        'Comprehensive asset group coverage with vertical video and copy variants',
        'URL expansion rules and brand exclusion lists',
        'Value-based smart bidding setup (tCPA and tROAS)'
      ]
    }
  ];

  const metaFormats = [
    {
      title: 'Facebook Ads',
      tag: 'Scalable Prospecting & Retargeting',
      desc: 'Targeting detailed interest, demographic, and behavioral clusters combined with 1st-party custom audiences and lookalike modeling.',
      features: [
        'Broad targeting & Advantage+ audience structure with strict creative hooks',
        'Custom audiences generated from website visits, video viewers & lead forms',
        'Lookalike models built from verified high-value customers',
        'Single image, carousel, and collection ad format testing'
      ]
    },
    {
      title: 'Instagram Ads (Feed, Stories & Reels)',
      tag: 'Visual & Vertical Mobile First',
      desc: 'Direct-response vertical video and aesthetic image ads engineered to blend naturally into Instagram user feeds, Stories, and Reels.',
      features: [
        'Vertical 9:16 video ads tailored for Reels and Stories consumption',
        'Interactive story stickers and swipe-up / tap conversion elements',
        'Native-looking influencer-style aesthetic to lower ad blindness',
        'Micro-copy captions focused on quick scannability'
      ]
    },
    {
      title: 'Audience Targeting & Lead Funnels',
      tag: 'Full-Funnel Lead Generation',
      desc: 'Deploying native Meta Instant Forms and frictionless mobile landing pages with automated webhook integration to client CRMs.',
      features: [
        'Meta on-platform instant lead forms with custom qualification questions',
        'Conditional logic to filter out low-intent unqualified leads',
        'Pixel event setup: Lead, CompleteRegistration, ViewContent, Purchase',
        'Direct CRM syncing via Zapier, Make, and n8n webhooks'
      ]
    }
  ];

  return (
    <section id="paid-ads" className="py-20 bg-[#F8FAFC] border-b border-slate-200" aria-label="Paid Advertising Capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-medium mb-3">
            <BadgePercent className="w-3.5 h-3.5 text-cyan-700" />
            <span>Core Discipline 03</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Paid Advertising (Google &amp; Meta Ads)
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Data-backed paid media management designed to minimize customer acquisition cost (CAC) while capturing verified transactional demand.
          </p>
        </div>

        {/* Platform Selector Tabs */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-slate-200 shadow-xs w-fit mb-8">
          <button
            onClick={() => setActiveTab('google')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'google'
                ? 'bg-cyan-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Google Ads Ecosystem
          </button>
          <button
            onClick={() => setActiveTab('meta')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'meta'
                ? 'bg-cyan-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Meta Ads (FB &amp; Instagram)
          </button>
        </div>

        {/* Active Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {(activeTab === 'google' ? googleFormats : metaFormats).map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-mono-code px-2.5 py-0.5 rounded bg-cyan-50 text-cyan-800 border border-cyan-200 mb-3">
                  {item.tag}
                </span>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-900 uppercase tracking-wider block mb-2">
                  Key Capabilities:
                </span>
                <ul className="space-y-2 text-xs text-slate-600">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-700 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Shared Optimization & Audience Targeting Methodology */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Sliders className="w-5 h-5 text-cyan-700" />
            <span>Disciplined Campaign Optimization &amp; Budget Governance</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-600">
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <span className="font-semibold text-slate-900 block mb-1">Audience Targeting</span>
              Combining search intent signals with behavior &amp; demographic overlays to prevent waste.
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <span className="font-semibold text-slate-900 block mb-1">Creative Testing</span>
              Deploying systematic hook and angle testing to identify top performers before scaling spend.
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <span className="font-semibold text-slate-900 block mb-1">Landing Page Synergy</span>
              Ensuring 1:1 message match between ad copy and destination page to maximize quality score.
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <span className="font-semibold text-slate-900 block mb-1">Attribution &amp; ROAS</span>
              Relying on server-side tracking and GA4 conversion signals to evaluate true business return.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
