import { WebDesignProject } from '../types';
import striveniiImg from '../assets/images/strivenii_salon_ui_1789565669258.jpg';
import nehaImg from '../assets/images/neha_academy_ui_1789565694926.jpg';
import alSabeelImg from '../assets/images/al_sabeel_ui_1789565718350.jpg';
import cottonwoodImg from '../assets/images/cottonwood_cafe_ui_1789565744424.jpg';

export const UI_UX_WEBSITE_PROJECTS: WebDesignProject[] = [
  {
    id: 'web-proj-1',
    name: 'Strivenii Hair & Beauty Salon',
    category: 'Salon Website Design',
    location: 'India',
    statusBadge: 'Design Complete • Deployment Pending',
    statusType: 'design-complete',
    description:
      'A premium, modern hair and beauty salon website concept designed with a clean luxury visual style, service-focused navigation, strong booking CTAs, responsive layout and professional salon branding.',
    thumbnailUrl: striveniiImg,
    galleryImages: [
      {
        url: striveniiImg,
        caption: 'Desktop Homepage Wireframe & Visual UI Layout (Hero, Services, Booking CTA)',
        viewType: 'Desktop View (1440px)'
      }
    ],
    keyUiUxWork: [
      'Homepage design',
      'Hero section',
      'Navigation structure',
      'Services presentation',
      'Bridal section',
      'Hair treatment section',
      'Gallery section',
      'Contact section',
      'Call Now CTA',
      'Book Appointment CTA',
      'Responsive frontend design'
    ],
    uiUxApproach:
      'Engineered an elevated, luxury salon customer journey that reduces friction between discovering specialized beauty treatments and scheduling appointments. Utilized high-contrast typography, warm neutral palette, clear service taxonomy, and persistent booking actions.',
    keySectionsDesigned: [
      'Editorial Hero section with luxury salon value proposition',
      'Categorized salon service modules (Hair Treatments, Color, Texture, Spa)',
      'Dedicated Bridal styling and occasion packages showcase',
      'Interactive visual portfolio & salon transformation gallery',
      'Direct consultation & location contact section'
    ],
    responsiveDesign:
      'Fully responsive fluid layout adapting across desktop widescreen (1440px), tablet viewports (768px–1024px), and handheld devices (390px) with thumb-friendly tap targets and sticky action triggers.',
    ctaConversionElements: [
      'Primary "Book Appointment" persistent action button',
      'Direct-dial "Call Now" emergency consultation trigger',
      'Quick service enquiry form with service selection dropdowns',
      'Location and operational hours instant view card'
    ],
    uiUxSkills: [
      'Responsive Web Design',
      'UI/UX Design',
      'Landing Page Design',
      'Conversion-Focused Layout',
      'Visual Hierarchy',
      'CTA Design',
      'Navigation Architecture',
      'Brand-Focused Design'
    ],
    deploymentStatusNote:
      'Frontend design and website experience are completed. Domain/server deployment is pending.',
    noClaimsNotice:
      'Design & frontend completed for portfolio demonstration. Does NOT claim SEO results, bookings, revenue, conversions or business growth.'
  },
  {
    id: 'web-proj-2',
    name: "The Neha's Salon & Academy",
    category: 'Salon & Beauty Academy Website Design',
    location: 'India',
    statusBadge: 'Design Complete • Deployment Pending',
    statusType: 'design-complete',
    description:
      'A premium salon and professional beauty academy website concept designed to communicate salon services and academy offerings through a modern, conversion-focused user experience.',
    thumbnailUrl: nehaImg,
    galleryImages: [
      {
        url: nehaImg,
        caption: 'Dual-Funnel Homepage Architecture (Salon Services & Beauty Academy Enrollment)',
        viewType: 'Desktop View (1440px)'
      }
    ],
    keyUiUxWork: [
      'Homepage',
      'Premium hero section',
      'Salon services presentation',
      'Bridal section',
      'Academy section',
      'Gallery',
      'Contact section',
      'Booking CTA',
      'Explore Services CTA',
      'Explore Academy CTA',
      'Responsive frontend design'
    ],
    uiUxApproach:
      'Crafted a dual-audience information architecture catering to both retail salon clients seeking premium care and prospective students exploring professional cosmetology/academy certifications. Distinct visual cards segment the experience without fragmenting brand cohesion.',
    keySectionsDesigned: [
      'Premium Hero with dual pathway navigation (Salon vs. Academy)',
      'Salon Services showcase featuring hair, skincare, and bridal studio',
      'Professional Beauty Academy curriculum, certification modules, and intake details',
      'Curated student work and salon client transformation gallery',
      'Integrated contact and appointment scheduling center'
    ],
    responsiveDesign:
      'Adaptive mobile-first layout prioritizing rapid access to phone consultations, course syllabus downloads, and appointment requests on mobile viewports.',
    ctaConversionElements: [
      'High-contrast "Book Appointment" retail client button',
      'Specialized "Explore Academy" student enrollment action',
      'Secondary "Explore Services" pricing & package walkthrough',
      'Direct inquiry form capturing user intent (client vs. student)'
    ],
    uiUxSkills: [
      'Responsive Web Design',
      'UI/UX Design',
      'Conversion-Focused Layout',
      'Navigation Architecture',
      'Visual Hierarchy',
      'CTA Design',
      'Mobile-First Thinking',
      'Modern Frontend Design'
    ],
    deploymentStatusNote:
      'Frontend design and website experience are completed. Domain/server deployment is pending.',
    noClaimsNotice:
      'Design & frontend completed for portfolio demonstration. Does NOT claim actual academy admissions, bookings, revenue, leads or business results.'
  },
  {
    id: 'web-proj-3',
    name: 'Al Sabeel Real Estate',
    category: 'Real Estate Website Design',
    location: 'Sharjah, UAE',
    statusBadge: 'Frontend Preview • Deployment Pending',
    statusType: 'frontend-preview',
    description:
      'A modern real estate website concept designed for property discovery, real estate services and lead-focused navigation in the Sharjah market.',
    thumbnailUrl: alSabeelImg,
    galleryImages: [
      {
        url: alSabeelImg,
        caption: 'Sharjah Luxury Property Discovery Portal (Search, Listings Grid, Agent Profiles)',
        viewType: 'Desktop View (1440px)'
      }
    ],
    keyUiUxWork: [
      'Real estate homepage',
      'Hero section',
      'Property-focused navigation',
      'Services section',
      'Properties section',
      'Portfolio section',
      'Gallery',
      'News section',
      'Agents section',
      'Contact section',
      'Sell Property CTA',
      'Explore Properties CTA',
      'Responsive frontend design'
    ],
    uiUxApproach:
      'Developed a clean, corporate UAE real estate visual framework emphasizing high-resolution property discovery, intuitive category filtering (Residential, Commercial, Off-Plan), verified agent credibility, and rapid seller inquiry generation.',
    keySectionsDesigned: [
      'Panoramic Hero banner with multi-filter property search bar',
      'Core Real Estate Services (Property Management, Valuations, Advisory)',
      'Featured Properties & Development Portfolio grid',
      'Interactive Property Gallery with specification chips',
      'Market Insights / UAE Real Estate News section',
      'Licensed Property Agents & Advisors showcase',
      'Multichannel Contact & Valuation Request module'
    ],
    responsiveDesign:
      'Desktop-optimized bento layout with full mobile responsiveness; search filters convert into an accessible drawer interface on smaller viewports.',
    ctaConversionElements: [
      'Primary "Explore Properties" direct catalog action',
      'High-intent "Sell Property" owner valuation hook',
      'Instant WhatsApp & phone agent inquiry buttons',
      'Interactive schedule a private viewing request form'
    ],
    uiUxSkills: [
      'Responsive Web Design',
      'UI/UX Design',
      'Landing Page Design',
      'Navigation Architecture',
      'Visual Hierarchy',
      'CTA Design',
      'Modern Frontend Design'
    ],
    deploymentStatusNote:
      'Frontend design and website experience are completed. Domain/server deployment is pending.',
    buildNotice:
      'The current build is a preview/development build (may display a "Frontend Preview Only / Wake up servers" message). Server & domain deployment is pending.',
    noClaimsNotice:
      'Design & frontend preview completed for portfolio demonstration. Does NOT claim actual property listings, property sales, leads, revenue or client results.'
  },
  {
    id: 'web-proj-4',
    name: 'Cottonwood Downtown Cafe',
    category: 'Cafe / Local Business Website Design',
    location: 'Cross Plains, Texas, USA',
    statusBadge: 'Frontend Preview • Deployment Pending',
    statusType: 'frontend-preview',
    description:
      'A modern local-business website concept designed for a coffee shop, with a community-focused brand presentation and clear visitor actions.',
    thumbnailUrl: cottonwoodImg,
    galleryImages: [
      {
        url: cottonwoodImg,
        caption: 'Artisanal Coffee Shop Web Experience (Story, Hours, Location Map, Menu Highlights)',
        viewType: 'Desktop View (1440px)'
      }
    ],
    keyUiUxWork: [
      'Homepage',
      'Hero section',
      'Brand presentation',
      'About section',
      'Mission section',
      'Visit section',
      'Contact section',
      'Get Directions CTA',
      'Call Cafe CTA',
      'Responsive frontend design'
    ],
    uiUxApproach:
      'Designed a warm, welcoming community-first digital presence for a local American downtown cafe. Focused on immediate access to operational hours, physical location, signature roast selections, and frictionless contact.',
    keySectionsDesigned: [
      'Atmospheric Hero section celebrating artisanal coffee and community heritage',
      'Brand Story & Local Founders About section',
      'Mission & Sourcing philosophy (ethical coffee beans and scratch baking)',
      'Visit Us & Hours breakdown with live open/closed indicator',
      'Direct map integration and local contact footer'
    ],
    responsiveDesign:
      'Mobile-first architecture tailored to on-the-go patrons looking for quick driving directions, click-to-call ordering, and today\'s cafe hours.',
    ctaConversionElements: [
      'Direct "Get Directions" Google Maps navigation link',
      'Prominent "Call Cafe" click-to-dial action',
      'Quick menu highlights & seasonal special badges',
      'Community newsletter & local event notices'
    ],
    uiUxSkills: [
      'Responsive Web Design',
      'UI/UX Design',
      'Brand-Focused Design',
      'Visual Hierarchy',
      'CTA Design',
      'Mobile-First Thinking',
      'Modern Frontend Design'
    ],
    deploymentStatusNote:
      'Frontend design and website experience are completed. Domain/server deployment is pending.',
    buildNotice:
      'The current build is a preview/development build (may display a "Frontend Preview Only / Wake up servers" message). Server & domain deployment is pending.',
    noClaimsNotice:
      'Design & frontend preview completed for portfolio demonstration. Does NOT claim actual cafe ownership, business results, customer growth, revenue or bookings.'
  }
];
