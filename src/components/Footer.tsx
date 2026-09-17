import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, Phone, Linkedin, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200 text-slate-600 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-200">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-heading font-bold text-white text-xs shadow-xs">
                DB
              </div>
              <span className="font-heading font-bold text-base text-slate-900">
                {PERSONAL_INFO.name}
              </span>
            </div>
            
            <p className="text-slate-600 text-xs max-w-md leading-relaxed">
              {PERSONAL_INFO.title} specializing in SEO, GEO, AEO, Google &amp; Meta Ads, UI/UX Web Design, and UGC Video Advertising. Dedicated to driving measurable growth for international and domestic remote teams.
            </p>

            <div className="flex items-center gap-2 text-slate-500 text-xs pt-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-700" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">
              Portfolio Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-cyan-700 transition-colors">About &amp; Credentials</a></li>
              <li><a href="#services" className="hover:text-cyan-700 transition-colors">Digital Marketing Strategy</a></li>
              <li><a href="#seo-geo" className="hover:text-cyan-700 transition-colors">SEO, GEO &amp; AEO</a></li>
              <li><a href="#paid-ads" className="hover:text-cyan-700 transition-colors">Paid Advertising (Google/Meta)</a></li>
              <li><a href="#web-design" className="hover:text-cyan-700 transition-colors">UI/UX &amp; Web Design</a></li>
              <li><a href="#ugc-video" className="hover:text-cyan-700 transition-colors">UGC &amp; Video Ads</a></li>
              <li><a href="#projects" className="hover:text-cyan-700 transition-colors">Projects &amp; Case Studies</a></li>
            </ul>
          </div>

          {/* Col 3: Career & Contact */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">
              Direct Inquiries
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-cyan-700 transition-colors truncate">
                  <Mail className="w-3.5 h-3.5 text-cyan-700 flex-shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${PERSONAL_INFO.phoneRaw}`} className="flex items-center gap-2 hover:text-cyan-700 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-cyan-700 flex-shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-700 transition-colors">
                  <Linkedin className="w-3.5 h-3.5 text-[#0a66c2] flex-shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Open to Remote Roles
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All professional rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">
              Crafted with verifiable standards &bull; No artificial metrics
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs transition-colors flex items-center gap-1 text-xs"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-700" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
