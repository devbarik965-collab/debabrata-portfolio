export interface SeoCaseStudyData {
  title: string;
  cardTitle: string;
  metadataTitle: string;
  slug: string;
  projectType: string;
  category: string;
  badge: string;
  websiteUrl: string;
  shortDescription: string;
  projectOverview: {
    clientName: string;
    organizationType: string;
    summary: string;
    focus: string;
    curriculumAreas: string[];
  };
  businessAndSearchIntent: {
    targetAudience: string;
    audienceProfile: string[];
    intentBreakdown: {
      type: string;
      intentBadge: string;
      description: string;
      queries: string[];
    }[];
    intentAlignment: string;
  };
  seoStrategy: {
    overview: string;
    pillars: {
      title: string;
      focus: string;
      items: string[];
    }[];
  };
  onPageSeo: {
    overview: string;
    completedWork: {
      task: string;
      details: string;
    }[];
    recommendationsPlan: {
      task: string;
      details: string;
    }[];
  };
  technicalSeo: {
    overview: string;
    completedWork: {
      task: string;
      details: string;
    }[];
    recommendationsPlan: {
      task: string;
      details: string;
    }[];
  };
  localSeo: {
    overview: string;
    targetLocations: {
      city: string;
      role: string;
      status: string;
    }[];
    completedWork: string[];
    recommendationsPlan: string[];
  };
  geoAndAeo: {
    heading: string;
    explanation: string;
    methodology: string[];
    disclaimer: string;
  };
  keywordStrategy: {
    heading: string;
    explanation: string;
    disclaimer: string;
    keywordThemes: {
      theme: string;
      category: string;
      intent: string;
    }[];
  };
  implementationVsRecommendations: {
    completedWork: string[];
    recommendationsPlan: string[];
  };
  resultsAndMeasurement: {
    disclosureStatus: string;
    primaryStatement: string;
    complianceNote: string;
    governanceStandards: string[];
  };
}

export const DYNAMIC_SYSTEM_CASE_STUDY: SeoCaseStudyData = {
  title: 'Dynamic System India — SEO & Website Optimization',
  cardTitle: 'Dynamic System India',
  metadataTitle: 'Dynamic System India SEO & Website Optimization | Debabrata Barik',
  slug: 'dynamic-system-india-seo',
  projectType: 'Real Client Project',
  category: 'SEO / GEO / AEO / Website Optimization',
  badge: 'SEO • GEO • AEO • Local SEO',
  websiteUrl: 'https://www.dynamicsystemindia.in/',
  shortDescription:
    'SEO and website optimization project focused on improving content structure, search relevance, local search visibility and AI-search readiness for a technology training website.',
  projectOverview: {
    clientName: 'Dynamic System India',
    organizationType: 'Technology Training & Skill Development Organization',
    summary:
      'Dynamic System India is a technology training organization offering training and learning programs across areas such as Data Science, Data Analytics, AI, DevOps, Full Stack Development and related technology domains.',
    focus:
      "The project focused on improving the website's search visibility, content structure and SEO readiness for relevant course and location-based searches.",
    curriculumAreas: [
      'Data Science & Machine Learning',
      'Data Analytics & Business Intelligence',
      'Artificial Intelligence & Generative AI',
      'DevOps Engineering & Cloud Systems',
      'Full Stack Web Development',
      'Data Engineering & Advanced Analytics'
    ]
  },
  businessAndSearchIntent: {
    targetAudience:
      'College graduates, engineering students, career-switchers, and working professionals seeking industry-grade technical skills and practical internship experience in emerging technology domains.',
    audienceProfile: [
      'Students looking for certification and hands-on internship programs in Bhubaneswar, Odisha.',
      'Professionals seeking upskilling in Data Science, Artificial Intelligence, and DevOps.',
      'Learners seeking structured syllabus information, mentor guidance, and placement support.'
    ],
    intentBreakdown: [
      {
        type: 'Informational Intent',
        intentBadge: 'Curriculum & Research',
        description:
          'Prospective learners researching course content, technology stacks, tools taught, program duration, and syllabus depth.',
        queries: [
          'What is covered in Data Science training?',
          'DevOps tools syllabus and hands-on modules',
          'AI course curriculum for beginners'
        ]
      },
      {
        type: 'Commercial & Local Intent',
        intentBadge: 'Regional Training Search',
        description:
          'High-intent users looking for physical classroom or hybrid training centers in specific regional hubs.',
        queries: [
          'Data Science Course in Bhubaneswar',
          'DevOps Training in Bhubaneswar',
          'Best AI training institute near me'
        ]
      },
      {
        type: 'Navigational & Conversion Intent',
        intentBadge: 'Course Enrollment',
        description:
          'Users evaluating Dynamic System India programs for enrollment, fee details, and internship admissions.',
        queries: [
          'Dynamic System India course admission',
          'Dynamic System India syllabus download',
          'Dynamic System India contact and office location'
        ]
      }
    ],
    intentAlignment:
      'Structured each program landing page to satisfy informational queries through granular syllabus breakdowns while guiding qualified local searchers toward enrollment inquiries.'
  },
  seoStrategy: {
    overview:
      'A four-pillar optimization strategy designed to transform the website from a flat brochure into an intent-driven educational platform optimized for traditional search bots and modern answer engines.',
    pillars: [
      {
        title: 'Content Architecture & Depth',
        focus: 'Topic-Clustered Course Hubs',
        items: [
          'Created clear topical hierarchies for each discipline (Data Science, AI, DevOps, Web Development).',
          'Engineered search-friendly curriculum sections detailing tools, prerequisites, and learning outcomes.'
        ]
      },
      {
        title: 'Search-Engine Semantic Readiness',
        focus: 'Structured Metadata & Hierarchy',
        items: [
          'Standardized single H1 per course page and sequential H2/H3 module breakdowns.',
          'Formulated click-worthy, keyword-focused meta titles and meta descriptions with explicit location tags.'
        ]
      },
      {
        title: 'Multi-City Local Search Relevance',
        focus: 'Regional Market Visibility',
        items: [
          'Emphasized primary physical operations in Bhubaneswar, Odisha alongside outreach for Hyderabad and Bengaluru.',
          'Harmonized business address, contact details, and institutional NAP consistency.'
        ]
      },
      {
        title: 'Modern Generative Search Adaptation',
        focus: 'GEO & AEO Framework',
        items: [
          'Engineered clear question-and-answer content patterns suitable for entity recognition.',
          'Structured concise definition blocks and tool listings to support generative citation.'
        ]
      }
    ]
  },
  onPageSeo: {
    overview:
      'Comprehensive on-page review and content structuring across key syllabus and course landing pages.',
    completedWork: [
      {
        task: 'Meta Title Optimization',
        details:
          'Wrote optimized meta titles incorporating target discipline keywords, location relevance, and brand identifiers within 55–60 character thresholds.'
      },
      {
        task: 'Meta Description Optimization',
        details:
          'Crafted compelling, benefit-focused meta descriptions highlighting hands-on curriculum, internship access, and clear call-to-action.'
      },
      {
        task: 'Heading Structure Optimization',
        details:
          'Reorganized header hierarchy (H1 -> H2 -> H3) ensuring logical document outlining across technology tracks.'
      },
      {
        task: 'Course/Service Page Content Optimization',
        details:
          'Enhanced body copy with technical precision, curriculum breakdown, tools covered (Python, SQL, Docker, Kubernetes, AWS), and learning pathways.'
      },
      {
        task: 'Image ALT-Text Optimization',
        details:
          'Applied descriptive, context-rich alternative text to banners, course icons, and syllabus flowcharts.'
      },
      {
        task: 'Search-Friendly Content Structure',
        details:
          'Formatted lengthy paragraphs into scannable lists, module summaries, and key takeaways for improved user dwell time.'
      }
    ],
    recommendationsPlan: [
      {
        task: 'Content Refresh Schedule',
        details:
          'Quarterly review of syllabus content to reflect updated software libraries (e.g., GenAI models, latest DevOps tooling).'
      },
      {
        task: 'Student FAQ Expansion',
        details:
          'Creation of dedicated accordion FAQ sections on each course page to address specific student career inquiries.'
      }
    ]
  },
  technicalSeo: {
    overview:
      'Audited website crawlability, technical DOM organization, and Google Search Console indexing parameters.',
    completedWork: [
      {
        task: 'Website SEO Structure Review',
        details:
          'Evaluated site taxonomy, URL nomenclature, and document outline to eliminate crawl traps and redundant paths.'
      },
      {
        task: 'Technical SEO Review',
        details:
          'Assessed mobile responsiveness, viewport configurations, font loading performance, and clean HTML rendering.'
      },
      {
        task: 'Google Search Console Setup & Indexing Considerations',
        details:
          'Reviewed Search Console property setup, sitemap submission pathways, and index coverage parameters for core course URLs.'
      }
    ],
    recommendationsPlan: [
      {
        task: 'Structured Data / Schema Recommendations',
        details:
          'Recommended implementation of JSON-LD schemas including EducationalOrganization, Course schema (provider, courseMode, educationalCredentialAwarded), and FAQPage schema where applicable.'
      },
      {
        task: 'Internal Linking Recommendations',
        details:
          'Architected an internal linking plan connecting foundational courses (e.g., Python Basics) to advanced specializations (Data Science & AI) to distribute page equity.'
      }
    ]
  },
  localSeo: {
    overview:
      'Targeted local search presence addressing primary campus location in Odisha and tech student communities in major southern tech hubs.',
    targetLocations: [
      {
        city: 'Bhubaneswar, Odisha',
        role: 'Primary physical training center, classroom programs & student internship hub',
        status: 'Core Local Focus'
      },
      {
        city: 'Hyderabad',
        role: 'Regional tech ecosystem & student recruitment market',
        status: 'Secondary Outreach'
      },
      {
        city: 'Bengaluru',
        role: 'Technology corridor & placement connection point',
        status: 'Strategic Market'
      }
    ],
    completedWork: [
      'Location-focused content optimization highlighting Bhubaneswar institute presence.',
      'Business information consistency check (NAP: Name, Address, Phone) across key touchpoints.',
      'Local search intent optimization for "in Bhubaneswar" queries on key training pages.'
    ],
    recommendationsPlan: [
      'Development of dedicated regional landing pages tailored to specific city cohorts.',
      'Optimization and review of Google Business Profile attributes, reviews, and categories.'
    ]
  },
  geoAndAeo: {
    heading: 'GEO & AEO Optimization (Generative & Answer Engine Optimization)',
    explanation:
      'Website content was structured and reviewed to improve machine-readable clarity and answer-focused content for modern search experiences, including AI-assisted search engines and conversational query processing.',
    methodology: [
      'Direct Answer Formatting: Formulated definitive introductory sentences defining each technical course track and its industrial purpose.',
      'Entity-First Content Structure: Emphasized named technical entities (e.g., PyTorch, Scikit-Learn, CI/CD, Kubernetes, React) in structured lists rather than vague narrative prose.',
      'Modular Syllabus Summaries: Created atomic, self-contained curriculum summaries that search engine LLMs can parse and synthesize without losing context.',
      'Clear Topical Disambiguation: Distinguished between foundational training, advanced internship programs, and corporate skill development.'
    ],
    disclaimer:
      'Transparency Notice: Content was structured and reviewed to improve semantic clarity and direct answerability for modern search environments. No guaranteed visibility, ranking, or citation in Google AI Overviews, ChatGPT, Perplexity, or other AI search systems is claimed or implied.'
  },
  keywordStrategy: {
    heading: 'Target Keyword Areas (Thematic Intent Mapping)',
    explanation:
      'The following target keyword areas represent foundational keyword themes and search intent mapping used to guide on-page structure and syllabus content. These represent content focus themes, NOT guaranteed ranking claims.',
    disclaimer:
      'Professional Notice: Do not claim that these keywords currently rank unless verified with Search Console evidence. These keyword areas served strictly as content research benchmarks during optimization.',
    keywordThemes: [
      {
        theme: 'Data Science Course in Bhubaneswar',
        category: 'Data Science',
        intent: 'Local Commercial Intent'
      },
      {
        theme: 'Data Science Training in Bhubaneswar',
        category: 'Data Science',
        intent: 'Local Educational Intent'
      },
      {
        theme: 'Data Analytics Course in Bhubaneswar',
        category: 'Data Analytics',
        intent: 'Local Commercial Intent'
      },
      {
        theme: 'AI Course in Bhubaneswar',
        category: 'Artificial Intelligence',
        intent: 'Local Emerging Tech Intent'
      },
      {
        theme: 'DevOps Training in Bhubaneswar',
        category: 'DevOps & Cloud',
        intent: 'Local Infrastructure Intent'
      },
      {
        theme: 'Full Stack Development Course',
        category: 'Web Development',
        intent: 'Broad Educational Intent'
      },
      {
        theme: 'Data Science Training',
        category: 'Data Science',
        intent: 'Broad Informational Intent'
      },
      {
        theme: 'Data Analytics Training',
        category: 'Data Analytics',
        intent: 'Broad Informational Intent'
      },
      {
        theme: 'Artificial Intelligence Training',
        category: 'Artificial Intelligence',
        intent: 'Broad Informational Intent'
      }
    ]
  },
  implementationVsRecommendations: {
    completedWork: [
      'Website SEO structure review',
      'Keyword research and keyword mapping',
      'On-page SEO optimization',
      'Meta title optimization',
      'Meta description optimization',
      'Heading structure optimization (H1/H2/H3)',
      'Course/service page content optimization',
      'Image ALT-text optimization',
      'Local SEO optimization',
      'Location-focused content optimization',
      'Google Search Console setup/indexing considerations',
      'Technical SEO review',
      'GEO optimization',
      'AEO optimization',
      'Search-friendly content structure'
    ],
    recommendationsPlan: [
      'Internal linking recommendations across course hierarchies',
      'Structured data/schema recommendations (Course & Organization schema)',
      'Quarterly curriculum freshness content audit',
      'Dedicated city landing page expansion plan for Hyderabad and Bengaluru',
      'Interactive student FAQ schema implementation'
    ]
  },
  resultsAndMeasurement: {
    disclosureStatus: 'Non-Disclosed / Client Confidential',
    primaryStatement: 'Performance results are not publicly disclosed.',
    complianceNote:
      'SEO performance metrics are not displayed unless supported by verified analytics or Search Console data.',
    governanceStandards: [
      'No invented Google ranking positions or keyword ranks.',
      'No simulated organic traffic growth or traffic graphs.',
      'No unverified lead volumes, enrollment figures, or conversion percentages.',
      'No artificial revenue or ROI claims.',
      'Strict adherence to real portfolio deliverables, actual optimizations, and documented recommendations.'
    ]
  }
};
