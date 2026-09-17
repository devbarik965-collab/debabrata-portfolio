import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Briefcase, 
  Mail, 
  Menu, 
  X, 
  ArrowUpRight, 
  FileText, 
  MapPin, 
  Phone
} from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'SEO & GEO', href: '#seo-geo' },
    { name: 'Paid Ads', href: '#paid-ads' },
    { name: 'UI/UX Design', href: '#web-design' },
    { name: 'UGC & Video', href: '#ugc-video' },
    { name: 'Client Work', href: '#client-work' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tools', href: '#tools' },
    { name: 'Experience', href: '#experience' },
    { name: 'Remote Roles', href: '#remote' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
          aria-label="Debabrata Barik Portfolio Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center font-heading font-bold text-white shadow-md shadow-cyan-500/10 group-hover:scale-105 transition-transform">
            DB
          </div>
          <div>
            <div className="font-heading font-bold text-slate-900 tracking-tight text-base sm:text-lg flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="truncate">Open to Remote Opportunities</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-cyan-700 hover:bg-slate-100 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            id="btn-quick-cv"
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors hover:border-slate-300 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-600" />
            <span>View CV Summary</span>
          </button>

          <a
            id="btn-nav-contact"
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold shadow-xs transition-all"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white text-slate-700 hover:text-slate-900 border border-slate-200 focus:outline-none shadow-xs"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="xl:hidden bg-white border-b border-slate-200 shadow-lg px-4 pt-3 pb-6 space-y-3 mt-3 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              Bhubaneswar, Odisha, India
            </span>
            <span className="text-emerald-600 flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Remote Ready
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 py-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-xs font-medium shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-600" />
              View CV Summary
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact Debabrata
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
