export type ProjectCategory =
  | 'All'
  | 'Digital Marketing'
  | 'SEO'
  | 'GEO/AEO'
  | 'Website/UI/UX'
  | 'Google Ads'
  | 'Meta Ads'
  | 'UGC/Video';

export interface ProjectItem {
  id: string;
  name: string;
  category: ProjectCategory;
  categoryBadge: string;
  projectTypeLabel: 'Portfolio Demonstration' | 'Sample Project / Demonstration';
  industry: string;
  servicesProvided: string[];
  description: string;
  toolsUsed: string[];
  resultsNote: string;
  isVerifiedResult: boolean;
  aspectRatio?: string;
  placeholderType: 'web' | 'analytics' | 'ad' | 'video' | 'search';
  highlights: string[];
}

export interface RealClientProject {
  id: string;
  slug?: string;
  name: string;
  category: string;
  categoryBadge: string;
  industry: string;
  websiteUrl?: string;
  projectTypeLabel?: string;
  clientBusiness?: string;
  locationFocus?: string[];
  services: string[];
  description: string;
  myContribution: string[];
  recommendationsPlan?: string[];
  campaignEvidence: {
    summary: string;
    details: string[];
    performanceSnapshots?: {
      label: string;
      leads: string;
      costPerLead: string;
    }[];
    imageUrl: string;
    imageCaption: string;
  };
  verifiedMetricsNote?: string;
  toolsAndPlatforms: string[];
  targetRecruiterRoles: string[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'Full-time' | 'Agency Leadership' | 'Freelance / Contract' | 'Career Break';
  location?: string;
  isCareerBreak?: boolean;
  description: string;
  responsibilities: string[];
  skillsApplied: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface WebDesignProject {
  id: string;
  name: string;
  category: string;
  location?: string;
  statusBadge: 'Design Complete • Deployment Pending' | 'Frontend Preview • Deployment Pending';
  statusType: 'design-complete' | 'frontend-preview';
  description: string;
  thumbnailUrl: string;
  galleryImages: { url: string; caption: string; viewType: string }[];
  keyUiUxWork: string[];
  uiUxApproach: string;
  keySectionsDesigned: string[];
  responsiveDesign: string;
  ctaConversionElements: string[];
  uiUxSkills: string[];
  deploymentStatusNote: string;
  buildNotice?: string;
  noClaimsNotice: string;
  previewUrl?: string;
}

export interface ToolCategory {
  category: string;
  description: string;
  iconName: string;
  tools: {
    name: string;
    description: string;
    level?: string;
  }[];
}
