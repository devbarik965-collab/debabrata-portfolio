/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustExperienceStrip } from './components/TrustExperienceStrip';
import { About } from './components/About';
import { DigitalMarketing } from './components/DigitalMarketing';
import { SeoGeoAeo } from './components/SeoGeoAeo';
import { PaidAdvertising } from './components/PaidAdvertising';
import { WebDesign } from './components/WebDesign';
import { UgcVideo } from './components/UgcVideo';
import { SelectedClientWork } from './components/SelectedClientWork';
import { Projects } from './components/Projects';
import { Tools } from './components/Tools';
import { Experience } from './components/Experience';
import { RemoteReadiness } from './components/RemoteReadiness';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-body flex flex-col selection:bg-cyan-500/20 selection:text-cyan-900">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Content Sections in Strict Sequential Order */}
      <main className="flex-1">
        {/* 1. HOME / HERO */}
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* PROFESSIONAL TRUST & EXPERIENCE STRIP (Directly below Hero for international recruiters) */}
        <TrustExperienceStrip onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* 2. ABOUT ME */}
        <About />

        {/* 3. DIGITAL MARKETING */}
        <DigitalMarketing />

        {/* 4. SEO / GEO / AEO */}
        <SeoGeoAeo />

        {/* 5. PAID ADVERTISING */}
        <PaidAdvertising />

        {/* 6. UI/UX & WEB DESIGN */}
        <WebDesign />

        {/* 7. UGC & VIDEO */}
        <UgcVideo />

        {/* 8. REAL PROJECTS / SELECTED CLIENT WORK */}
        <SelectedClientWork />

        {/* 9. PROJECTS / CASE STUDY BLUEPRINTS */}
        <Projects />

        {/* 9. TOOLS & TECHNOLOGY */}
        <Tools />

        {/* 10. EXPERIENCE */}
        <Experience />

        {/* 11. REMOTE OPPORTUNITIES */}
        <RemoteReadiness />

        {/* 12. CONTACT */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter CV / Resume Snapshot Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

