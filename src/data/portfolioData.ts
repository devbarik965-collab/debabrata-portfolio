import { ProjectItem, WorkExperience, EducationItem, ToolCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Debabrata Barik',
  title: 'Digital Marketing & Creative Specialist',
  tagline: 'SEO | GEO | AEO | Google Ads | Meta Ads | UI/UX Web Design | UGC & Video Ads',
  heroSubtitle: 'SEO | GEO | AEO | Google Ads | Meta Ads | UI/UX Web Design | UGC & Video Ads',
  experienceYears: '5+ Years Digital Marketing Experience',
  availability: 'Open to Full-Time Remote Opportunities',
  email: 'devbarik965@gmail.com',
  phone: '+91 82493 12058',
  phoneRaw: '+918249312058',
  linkedin: 'https://www.linkedin.com/in/debabrata-barik965/',
  location: 'Bhubaneswar, Odisha, India',
  availabilityDetails: 'Actively seeking full-time remote opportunities in Digital Marketing, SEO/GEO/AEO, UI/UX Web Design and Creative Marketing. Available for distributed teams across India, USA, UK, Canada, Singapore, UAE, Australia, and global markets (contract/freelance considered as secondary).',
  aboutBio: `Digital Marketing & Creative Specialist with over 5 years of commercial experience spanning search engine optimization (including modern GEO & AEO search paradigms), high-intent paid advertising on Google Ads and Meta Ads, conversion-focused UI/UX web design, and UGC video creative production.

Having previously founded and managed an independent marketing agency (Digital Expert Guru, 2018–2022) as well as delivered corporate marketing projects, I bring a rare full-funnel capability: combining analytical performance marketing with conversion-focused creative design. I am actively seeking full-time remote opportunities with forward-thinking distributed teams.`
};

export const CORE_SKILLS = [
  'Digital Marketing Strategy',
  'SEO (Search Engine Optimization)',
  'GEO (Generative Engine Optimization)',
  'AEO (Answer Engine Optimization)',
  'Google Ads (Search, Display, PMax)',
  'Meta Ads (Facebook & Instagram)',
  'Social Media Marketing',
  'Content Marketing',
  'Lead Generation',
  'Performance Marketing',
  'Local SEO & GMB Optimization',
  'Keyword Research & Intent Mapping',
  'Google Search Console',
  'Google Analytics (GA4)',
  'Google Tag Manager',
  'UI/UX Web Design',
  'Website Design',
  'Landing Page Design',
  'UGC Ads Creation',
  'Promotional Video Creation',
  'Short-form Video Content',
  'AI-assisted Creative Production',
  'CRM Management',
  'Marketing Automation',
  'Project Management'
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    category: 'Marketing',
    description: 'Campaign distribution, paid media targeting, and outbound pipeline tools',
    iconName: 'Megaphone',
    tools: [
      { name: 'Google Ads', description: 'Search, Display, Performance Max, Intent bidding' },
      { name: 'Meta Ads Manager', description: 'Custom audiences, Lookalikes, creative testing' },
      { name: 'Mailchimp', description: 'Email marketing campaigns and audience segmentation' },
      { name: 'Apollo.io', description: 'B2B prospect intelligence & contact enrichment' },
      { name: 'LinkedIn Sales Navigator', description: 'Targeted account research & lead prospecting' },
      { name: 'Hunter.io', description: 'Domain search and email verification' }
    ]
  },
  {
    category: 'SEO & Analytics',
    description: 'Organic search measurement, site architecture diagnostics, and tracking',
    iconName: 'Search',
    tools: [
      { name: 'Google Search Console', description: 'Indexation tracking, query monitoring, crawl health' },
      { name: 'Google Analytics (GA4)', description: 'Funnel analytics, conversion events, attribution' },
      { name: 'Google Tag Manager', description: 'Custom event triggers, pixel deployment, container logic' }
    ]
  },
  {
    category: 'AI',
    description: 'Generative AI tools leveraged for copy ideation, content structuring, and workflow acceleration',
    iconName: 'Sparkles',
    tools: [
      { name: 'ChatGPT', description: 'Audience prompt engineering, copy drafts, strategy research' },
      { name: 'Google Gemini', description: 'Multimodal research, competitive insights, search analysis' },
      { name: 'Perplexity AI', description: 'Real-time citation research, source-backed trend discovery' },
      { name: 'Emergent', description: 'AI-driven rapid exploration and workflow experimentation' }
    ]
  },
  {
    category: 'Creative',
    description: 'Visual identity, commercial video ads, and engaging multimedia assets',
    iconName: 'Palette',
    tools: [
      { name: 'Canva', description: 'High-converting ad creatives, social graphics, brand kits' },
      { name: 'Pictory.ai', description: 'AI-assisted short-form video creation and caption editing' }
    ]
  },
  {
    category: 'Automation',
    description: 'Workflow orchestration connecting lead forms, webhooks, and communication channels',
    iconName: 'Cpu',
    tools: [
      { name: 'n8n', description: 'Self-hosted and cloud node-based marketing workflow automation' },
      { name: 'Make.com', description: 'Scenario integrations across CRMs, spreadsheets, and alerts' }
    ]
  },
  {
    category: 'Productivity',
    description: 'Cross-functional collaboration, scheduling, and remote project workflows',
    iconName: 'CheckCircle2',
    tools: [
      { name: 'Calendly', description: 'Automated consultation and meeting scheduling' },
      { name: 'Google Docs', description: 'Collaborative strategy decks, briefs, and client reports' },
      { name: 'Google Meet', description: 'Remote standups, client presentations, and screen shares' }
    ]
  }
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 'exp-1',
    role: 'Freelance Digital Marketing Specialist',
    company: 'Local Market Project',
    period: '2024 – Present',
    type: 'Freelance / Contract',
    location: 'Bhubaneswar, India / Remote',
    description: 'Providing freelance digital marketing consultancy, market research, and lead generation planning for local market businesses and commercial projects.',
    responsibilities: [
      'Consulted on digital marketing planning, target audience definition, and brand outreach.',
      'Conducted local competitor research and market positioning analysis.',
      'Advised local businesses on improving digital visibility and customer inquiry handling.',
      'Formulated practical recommendations to enhance local marketing performance.'
    ],
    skillsApplied: ['Digital Marketing Strategy', 'Lead Generation', 'Market Research', 'Client Consultation']
  },
  {
    id: 'exp-2',
    role: 'Career Break — Personal Reasons',
    company: 'Career Break',
    period: 'July 2022 – December 2023',
    type: 'Career Break',
    isCareerBreak: true,
    description: 'July 2022 – December 2023 — Career Break — Personal Reasons. Resumed professional freelance work in 2024.',
    responsibilities: [
      'Career break taken for personal reasons.',
      'Maintained industry awareness and tracked evolving trends across search and digital marketing.',
      'Resumed active professional freelance work in 2024.'
    ],
    skillsApplied: ['Industry Research', 'Professional Development']
  },
  {
    id: 'exp-3',
    role: 'Founder & CEO',
    company: 'Digital Expert Guru (Marketing & Advertising Agency)',
    period: 'January 2018 – June 2022',
    type: 'Agency Leadership',
    location: 'India',
    description: 'Founded and led an independent marketing and advertising agency delivering 360-degree digital solutions, SEO campaigns, paid advertising, and website design for varied SMB clients.',
    responsibilities: [
      'Spearheaded agency vision, client discovery, multi-channel campaign architectures, and end-to-end deliverables.',
      'Directed multi-client Google Search & Display ad campaigns and high-performing Meta ad accounts.',
      'Executed comprehensive on-page, off-page, and technical SEO roadmaps that established organic authority for agency clients.',
      'Collaborated directly with client stakeholders to design high-converting web experiences, landing pages, and marketing collateral.',
      'Supervised team workflows, client reporting, analytics dashboards, and campaign performance reviews.'
    ],
    skillsApplied: ['Agency Leadership', 'Digital Strategy', 'Google Ads', 'Meta Ads', 'SEO Architecture', 'Client Relationship Management']
  },
  {
    id: 'exp-4',
    role: 'Digital Marketing Executive',
    company: 'CS Web Solution',
    period: 'July 2017 – January 2018',
    type: 'Full-time',
    location: 'Bhubaneswar, India',
    description: 'Managed search marketing execution, link acquisition research, on-page optimization, and paid ad support for IT and web service clients.',
    responsibilities: [
      'Conducted in-depth keyword research and competitor organic analysis for client web development and service accounts.',
      'Implemented on-page metadata, semantic structure, internal linking, and technical SEO hygiene.',
      'Monitored keyword positions, traffic trends, and crawl issues via Google Search Console and Google Analytics.',
      'Assisted in setting up paid search ad groups, ad copy creation, and landing page alignment.'
    ],
    skillsApplied: ['On-Page SEO', 'Keyword Research', 'Search Console', 'Google Analytics', 'Ad Copywriting']
  },
  {
    id: 'exp-5',
    role: 'Digital Marketing Executive',
    company: 'Z Transparency Technology Pvt. Ltd.',
    period: 'September 2016 – July 2017',
    type: 'Full-time',
    location: 'India',
    description: 'Responsible for social media campaign management, content curation, on-page optimization, and lead generation initiatives.',
    responsibilities: [
      'Created and scheduled engaging multi-platform social media campaigns to nurture audience engagement.',
      'Executed targeted lead generation campaigns leveraging organic social channels and paid promotion.',
      'Assisted in site content optimization, blog publishing, and metadata enhancements to support search discoverability.',
      'Analyzed campaign engagement metrics to refine subsequent content releases.'
    ],
    skillsApplied: ['Social Media Marketing', 'Lead Generation', 'Content Marketing', 'Digital Execution']
  },
  {
    id: 'exp-6',
    role: 'Marketing Executive',
    company: 'Keshav Industries',
    period: 'October 2013 – June 2016',
    type: 'Full-time',
    location: 'India',
    description: 'Executed foundational marketing operations, market research, brand collateral management, and distributor outreach.',
    responsibilities: [
      'Supported offline and burgeoning digital brand presence, promotional collateral, and market positioning.',
      'Conducted field and competitive research to identify regional market expansion opportunities.',
      'Liaised with partners, business clients, and internal teams to coordinate trade marketing activities.'
    ],
    skillsApplied: ['Market Research', 'Marketing Operations', 'Brand Communication', 'Client Outreach']
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'M.Com (Master of Commerce)',
    institution: 'Utkal University',
    year: '2017',
    description: 'Advanced studies in business finance, commercial operations, marketing management, and statistical analytics.'
  },
  {
    degree: 'BBA (Bachelor of Business Administration)',
    institution: 'Ravenshaw University',
    year: '2013',
    description: 'Foundational coursework in business strategy, consumer behavior, market economics, and enterprise management.'
  },
  {
    degree: 'PGDCA (Post Graduate Diploma in Computer Applications)',
    institution: 'ISPL, Cuttack',
    year: '2013',
    description: 'Technical curriculum covering computing fundamentals, database basics, web fundamentals, and software applications.'
  },
  {
    degree: 'IT-Tally Professional Program',
    institution: 'ICAI',
    year: '2013',
    description: 'Professional computing, accounting software workflows, and structured business data administration.'
  }
];

export const TARGET_ROLES = [
  'Digital Marketing Specialist',
  'Digital Marketing Manager',
  'Performance Marketing Specialist',
  'Growth Marketing Specialist',
  'Digital Marketing & Creative Specialist',
  'SEO Specialist',
  'SEO Strategist',
  'GEO/AEO Specialist',
  'UI/UX Designer',
  'Web Designer',
  'Landing Page Designer',
  'UGC Ad Creator',
  'Video Ad Creator',
  'Creative Marketing Specialist'
];

export const TARGET_MARKETS = [
  { country: 'India', flag: '🇮🇳', note: 'Domestic market & immediate full-time remote availability' },
  { country: 'USA', flag: '🇺🇸', note: 'EST / CST / PST remote team alignment & overlapping work hours' },
  { country: 'UK', flag: '🇬🇧', note: 'GMT timezone compatibility with strong daily collaboration overlap' },
  { country: 'Canada', flag: '🇨🇦', note: 'North American remote collaboration & overlapping working hours' },
  { country: 'Singapore', flag: '🇸🇬', note: 'SGT close timezone synergy with Indian Standard Time' },
  { country: 'UAE', flag: '🇦🇪', note: 'Gulf Standard Time (+1.5h IST) frictionless sync' },
  { country: 'Australia', flag: '🇦🇺', note: 'AEST / AWST regional remote collaboration' },
  { country: 'Global Remote', flag: '🌐', note: 'Async-first teams with clear documentation and KPI accountability' }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    name: 'Omnichannel Growth & Lead Generation Framework',
    category: 'Digital Marketing',
    categoryBadge: 'Digital Marketing',
    projectTypeLabel: 'Portfolio Demonstration',
    industry: 'Local Professional Services & SMBs',
    servicesProvided: ['Digital Marketing Strategy', 'Lead Generation', 'Funnel Optimization', 'Meta & Google Ads Sync'],
    description: 'A structured omnichannel digital acquisition roadmap designed to capture in-market local demand while building continuous branded retargeting touchpoints. Coordinates search intent with social proof.',
    toolsUsed: ['Google Ads', 'Meta Ads Manager', 'GA4', 'Canva', 'Make.com'],
    resultsNote: 'Portfolio Demonstration & Strategic Blueprint. Prepared to showcase methodology, channel coordination, and funnel architecture without claiming unverified client metrics.',
    isVerifiedResult: false,
    placeholderType: 'analytics',
    highlights: [
      'Multi-touch conversion tracking model configured with custom GTM event logic',
      'Integration framework connecting Google Search intent with Meta re-engagement',
      'Friction-reduced lead qualification questionnaire architecture'
    ]
  },
  {
    id: 'proj-2',
    name: 'Organic Search Architecture & Local SEO Strategy',
    category: 'SEO',
    categoryBadge: 'SEO',
    projectTypeLabel: 'Portfolio Demonstration',
    industry: 'Service Provider & Regional Business',
    servicesProvided: ['Technical SEO Audit', 'Keyword Intent Mapping', 'On-Page Optimization', 'Local Search Hygiene'],
    description: 'Structured site-wide search optimization blueprint targeting commercial search queries, localized citation consistency, schema markup deployment, and indexation hygiene in Google Search Console.',
    toolsUsed: ['Google Search Console', 'Google Analytics 4', 'Schema Generator', 'GTM'],
    resultsNote: 'Portfolio Demonstration & Strategic Blueprint. Demonstrates on-page optimization, semantic hierarchy, and local citation protocols without claiming unverified ranking figures.',
    isVerifiedResult: false,
    placeholderType: 'search',
    highlights: [
      'Structured JSON-LD LocalBusiness and Service schema architecture',
      'Optimized H1-H3 typographic semantic hierarchy and internal topical link flow',
      'Technical audit workflow addressing crawl anomalies and Core Web Vitals hygiene'
    ]
  },
  {
    id: 'proj-3',
    name: 'Generative & Answer Engine Optimization (GEO/AEO) Blueprint',
    category: 'GEO/AEO',
    categoryBadge: 'GEO / AEO',
    projectTypeLabel: 'Sample Project / Demonstration',
    industry: 'Technology & Digital Knowledge Base',
    servicesProvided: ['AEO Direct Answer Formatting', 'GEO Entity Graph Structuring', 'FAQ & How-To Schema', 'AI-Search Readiness'],
    description: 'Modern content modeling framework built for AI answer engines (ChatGPT Search, Perplexity, Google Gemini). Restructures long-form content into concise answer blocks, authoritative data tables, and structured entity clusters.',
    toolsUsed: ['ChatGPT', 'Perplexity AI', 'Google Search Console', 'Structured Data Validator'],
    resultsNote: 'Sample Project & Demonstration Framework. Illustrates modern generative engine optimization structures without claiming unverified AI citation numbers.',
    isVerifiedResult: false,
    placeholderType: 'search',
    highlights: [
      'Direct 45-60 word definitive answer summaries built for featured snippet and AI capture',
      'Entity-oriented semantic markup establishing topical domain authority',
      'Structured comparison matrices formatted for direct LLM synthesis'
    ]
  },
  {
    id: 'proj-4',
    name: 'High-Intent Paid Search & Performance Max Campaign Setup',
    category: 'Google Ads',
    categoryBadge: 'Google Ads',
    projectTypeLabel: 'Portfolio Demonstration',
    industry: 'B2B Services & E-commerce',
    servicesProvided: ['Keyword Match Type Strategy', 'Search Ad Copywriting', 'Negative Keyword Lists', 'PMax Asset Groups'],
    description: 'Comprehensive paid search infrastructure targeting transactional buyer intent. Employs segmented campaign structures, exact/phrase match groups, strict negative keyword exclusion, and audience signal layering.',
    toolsUsed: ['Google Ads', 'Google Tag Manager', 'GA4 Attribution', 'Google Sheets'],
    resultsNote: 'Portfolio Demonstration & Strategic Blueprint. Demonstrates granular ad group segmentation, copy variants, and negative list hygiene without disclosing unverified spend or ROAS.',
    isVerifiedResult: false,
    placeholderType: 'ad',
    highlights: [
      'Granular ad group segmentation ensuring tight 1:1 message match',
      'Bid strategy blueprint with value-based conversion action tracking',
      'Exclusionary placement audit protocol across Display and YouTube inventory'
    ]
  },
  {
    id: 'proj-5',
    name: 'Direct-Response Meta Ad Creative & Audience Testing Engine',
    category: 'Meta Ads',
    categoryBadge: 'Meta Ads',
    projectTypeLabel: 'Portfolio Demonstration',
    industry: 'Consumer Goods & Online Services',
    servicesProvided: ['Audience Persona Modeling', 'Creative Iteration Testing', 'Instagram Story & Reel Ads', 'Retargeting Funnels'],
    description: 'Performance-driven Meta ad framework deploying hook-and-hold video formats, lifestyle carousel layouts, and lookalike audience clusters structured to mitigate ad fatigue.',
    toolsUsed: ['Meta Ads Manager', 'Canva', 'Pictory.ai', 'Meta Pixel Helper'],
    resultsNote: 'Portfolio Demonstration & Creative Blueprint. Showcases audience segmentation models, creative testing methodology, and retargeting tiers without claiming unverified revenue metrics.',
    isVerifiedResult: false,
    placeholderType: 'ad',
    highlights: [
      'Structured creative testing matrix (hook variations, thumbnail tests, offer copy)',
      'Segmented middle- and bottom-of-funnel retargeting framework',
      'Vertical 9:16 mobile ad templates optimized for native feed retention'
    ]
  },
  {
    id: 'proj-6',
    name: 'Conversion-Focused Landing Page & Mobile-First Web Experience',
    category: 'Website/UI/UX',
    categoryBadge: 'UI/UX Web Design',
    projectTypeLabel: 'Sample Project / Demonstration',
    industry: 'Agency & Digital Product Consultancy',
    servicesProvided: ['UI/UX Wireframing', 'Responsive Web Design', 'Conversion Rate Optimization (CRO)', 'Page Speed Optimization'],
    description: 'Design demonstration of high-converting, mobile-responsive web pages prioritizing visual hierarchy, scannable typographic rhythm, fast load speeds, and intuitive call-to-action placement.',
    toolsUsed: ['UI/UX Design Tools', 'Responsive CSS', 'Canva Pro', 'PageSpeed Insights'],
    resultsNote: 'Sample Project & UI/UX Wireframe Demonstration. Displays layout hierarchy and mobile-first CRO principles without asserting unverified conversion rate percentages.',
    isVerifiedResult: false,
    placeholderType: 'web',
    highlights: [
      'Above-the-fold value proposition hierarchy with focused call-to-action zones',
      'Mobile-first layout engineered for one-thumb interaction and tap targets',
      'Accessible color contrast and clean semantic DOM markup'
    ]
  },
  {
    id: 'proj-7',
    name: 'High-Converting UGC Ad Production & Video Creative Pipeline',
    category: 'UGC/Video',
    categoryBadge: 'UGC & Video',
    projectTypeLabel: 'Sample Project / Demonstration',
    industry: 'Consumer Brands & Digital Services',
    servicesProvided: ['UGC Concept Scripting', 'AI-Assisted Video Assembly', 'Short-Form Video Production', 'Hook & Retention Optimization'],
    description: 'Authentic creator-style video ad framework tailored for TikTok, Instagram Reels, and YouTube Shorts. Combines relatable problem-solution storytelling with dynamic captions and AI-assisted pacing.',
    toolsUsed: ['Pictory.ai', 'Canva Video Suite', 'ChatGPT Scripting', 'CapCut / Mobile Editing'],
    resultsNote: 'Sample Project & Video Creative Demonstration. Video formats and creative mockups represent structural templates without claiming unverified view counts or CTR figures.',
    isVerifiedResult: false,
    placeholderType: 'video',
    highlights: [
      '3-second hook structure engineered to stop the scroll in mobile social feeds',
      'Dynamic text overlay and animated subtitles for sound-off viewing',
      'Multi-angle script variants (problem-agitate, product showcase, service explainer)'
    ]
  }
];
