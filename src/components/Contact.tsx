import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  MessageSquare, 
  Clock, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Full-time Remote Opportunity',
    message: ''
  });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    // Direct mailto generation for seamless email dispatch
    const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.topic} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Debabrata,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}\n\nSent via Portfolio Website`
    );
    
    // Open default email client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200" aria-label="Contact Debabrata Barik">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-medium mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-700" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Whether you are hiring for an international or India-based remote role, exploring a strategic performance marketing engagement, or scheduling an interview, get in touch directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-100 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono-code text-slate-500">Direct Email</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-cyan-700 transition-colors block truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-100 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono-code text-slate-500">Phone &amp; WhatsApp</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phoneRaw}`}
                    className="text-sm font-bold text-slate-900 hover:text-cyan-700 transition-colors block"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                title="Copy phone to clipboard"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 text-[#0a66c2] border border-blue-100 flex-shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono-code text-slate-500">Professional Network</div>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-900 hover:text-cyan-700 transition-colors block"
                  >
                    debabrata-barik965
                  </a>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                aria-label="Open LinkedIn Profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Location & Availability Note */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <MapPin className="w-4 h-4 text-cyan-700" />
                <span>Bhubaneswar, Odisha, India</span>
              </div>
              <p className="leading-relaxed">
                {PERSONAL_INFO.availabilityDetails}
              </p>
              <div className="pt-2 flex items-center gap-2 text-emerald-700 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>Response Time: Typically within 12–24 business hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Simple Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md">
              
              <div className="mb-6">
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your requirements to initiate an email conversation directly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-base font-bold text-slate-900">
                    Email Client Triggered!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Your email client was opened with your message. If it did not launch automatically, please click below or email directly to{' '}
                    <strong className="text-slate-900">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Your Name / Recruiter Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="s.jenkins@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Topic Selector */}
                  <div>
                    <label htmlFor="contact-topic" className="block text-xs font-medium text-slate-700 mb-1.5">
                      Inquiry Subject / Topic
                    </label>
                    <select
                      id="contact-topic"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="Full-time Remote Opportunity">Full-time Remote Opportunity (India or International)</option>
                      <option value="Performance Marketing / Ads Management">Google / Meta Paid Ads Engagement</option>
                      <option value="SEO / GEO / AEO Strategy">SEO / GEO / AEO Search Optimization</option>
                      <option value="UI/UX Web Design Project">UI/UX & Landing Page Design</option>
                      <option value="UGC Video Ads Creation">UGC & Video Ad Creation</option>
                      <option value="Consulting / Freelance Contract">Strategic Consulting / Freelance Project</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-700 mb-1.5">
                      Message / Job Description Overview *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Share details about the position, company, timeline, or campaign objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="btn-submit-contact"
                    type="submit"
                    className="w-full py-3 px-5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
