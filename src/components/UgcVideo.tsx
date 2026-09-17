import React, { useState, useEffect } from 'react';
import { 
  Video, 
  Sparkles, 
  Play, 
  Film, 
  Smartphone, 
  Wand2, 
  ExternalLink,
  X,
  Clapperboard,
  Layers,
  Info,
  SlidersHorizontal,
  Maximize2
} from 'lucide-react';

export interface UgcCreative {
  id: string;
  driveId: string;
  title: string;
  label: 'UGC Ad Creative' | 'UGC Ad Sample' | 'Promotional Video Sample' | 'Product Ad Creative';
  format: 'UGC Ad' | 'Promotional Video' | 'Product Ad';
  aspectRatio: '9:16 Vertical' | '16:9 Landscape';
  isVertical: boolean;
  platform: string;
  category: 'vertical' | 'landscape' | 'product' | 'promotional';
  thumbnail: string;
  description: string;
  tags: string[];
}

const UGC_CREATIVES: UgcCreative[] = [
  {
    id: 'baby-care',
    driveId: '1aqUXrMsnFjTpowyay30apPIsthNs9__m',
    title: 'Baby Care Skincare Routine',
    label: 'UGC Ad Creative',
    format: 'UGC Ad',
    aspectRatio: '9:16 Vertical',
    isVertical: true,
    platform: 'Instagram Reels / Meta',
    category: 'vertical',
    thumbnail: '/ugc-thumbnails/baby-care.jpg',
    description: 'Creator-style problem-solution vertical ad creative highlighting gentle baby care essentials with soft aesthetic lifestyle hooks.',
    tags: ['Vertical 9:16', 'UGC Problem-Agitate', 'Parenting / Care']
  },
  {
    id: 'coffee',
    driveId: '1zNO9J5o0aVKoLreriwBvri9XXWGRcQdU',
    title: 'Specialty Coffee Brew',
    label: 'UGC Ad Creative',
    format: 'Product Ad',
    aspectRatio: '9:16 Vertical',
    isVertical: true,
    platform: 'Instagram / Meta',
    category: 'product',
    thumbnail: '/ugc-thumbnails/coffee.jpg',
    description: 'Sensory-focused vertical product creative capturing fresh grind texture, espresso extraction, and dynamic typography callouts.',
    tags: ['Vertical 9:16', 'Product Highlight', 'Beverage / Food']
  },
  {
    id: 'dairy-milk',
    driveId: '1VogOzvA86DlYjXeOtAKBv7MAzZi67EeW',
    title: 'Dairy Milk Chocolate Indulgence',
    label: 'Promotional Video Sample',
    format: 'Promotional Video',
    aspectRatio: '9:16 Vertical',
    isVertical: true,
    platform: 'Meta / Instagram Reels',
    category: 'vertical',
    thumbnail: '/ugc-thumbnails/dairy-milk.jpg',
    description: 'Snack and confectionery vertical promotional reel pairing chocolate break sound cues with fast-paced social video cuts.',
    tags: ['Vertical 9:16', 'Snack Promo', 'Beat-Sync Cuts']
  },
  {
    id: 'fashion-1',
    driveId: '1tVQVJL4yBqp7Ik86x1fmDUPZ7K8FXfrS',
    title: 'Urban Streetwear Lookbook',
    label: 'UGC Ad Creative',
    format: 'UGC Ad',
    aspectRatio: '9:16 Vertical',
    isVertical: true,
    platform: 'Instagram Reels / Meta',
    category: 'vertical',
    thumbnail: '/ugc-thumbnails/fashion-1.jpg',
    description: 'Fast-paced outfit transition and apparel lookbook creative engineered to maximize initial 3-second feed retention.',
    tags: ['Vertical 9:16', 'Fashion Transitions', 'Social Native']
  },
  {
    id: 'herbalife',
    driveId: '1ZI0KnuhcSHqvyOhyLlt9_32MV4ERjm5k',
    title: 'Active Nutrition Daily Routine',
    label: 'UGC Ad Sample',
    format: 'UGC Ad',
    aspectRatio: '9:16 Vertical',
    isVertical: true,
    platform: 'Instagram / YouTube Shorts',
    category: 'vertical',
    thumbnail: '/ugc-thumbnails/herbalife.jpg',
    description: 'Authentic creator-led wellness and nutritional shake preparation sequence focusing on daily health habits.',
    tags: ['Vertical 9:16', 'Wellness UGC', 'Lifestyle Hook']
  },
  {
    id: 'kuhu-studio',
    driveId: '1hzFvRuXwkam4QMkRPFh8a_cvgIUfUqEa',
    title: 'Kuhu Photography Studio',
    label: 'Promotional Video Sample',
    format: 'Promotional Video',
    aspectRatio: '9:16 Vertical',
    isVertical: true,
    platform: 'Instagram / Meta',
    category: 'promotional',
    thumbnail: '/ugc-thumbnails/kuhu-studio.jpg',
    description: 'Creative studio portfolio showreel displaying lighting set design, model portrait captures, and post-production grade.',
    tags: ['Vertical 9:16', 'Studio Portfolio', 'Visual Arts']
  },
  {
    id: 'neha-salon',
    driveId: '1YOIB1cSZFYGIYGJLVdcL6qIc2mp8skOl',
    title: 'Neha Salon & Beauty Care',
    label: 'UGC Ad Creative',
    format: 'UGC Ad',
    aspectRatio: '9:16 Vertical',
    isVertical: true,
    platform: 'Instagram Reels / Meta',
    category: 'vertical',
    thumbnail: '/ugc-thumbnails/neha-salon.jpg',
    description: 'Local beauty salon makeover and skincare treatment showcase with client satisfaction cues and promotional booking offer.',
    tags: ['Vertical 9:16', 'Local Service', 'Transformation Hook']
  },
  {
    id: 'ruchi-masala',
    driveId: '1e28GuPlNAXw4BAkuyauo7rRYimkwWMZe',
    title: 'Ruchi Masala Kitchen Flavors',
    label: 'Product Ad Creative',
    format: 'Product Ad',
    aspectRatio: '9:16 Vertical',
    isVertical: true,
    platform: 'Instagram Reels / Meta',
    category: 'product',
    thumbnail: '/ugc-thumbnails/ruchi-masala.jpg',
    description: 'Rich culinary spice ad featuring sizzling cookware, traditional aroma cues, and colorful brand packaging accents.',
    tags: ['Vertical 9:16', 'Culinary Product', 'Food Ad']
  },
  {
    id: 'alishan',
    driveId: '1ObLPsi_gGHiF2DXSDpFNrLlF796YiVwE',
    title: 'Alishan Restaurant & Dining',
    label: 'Promotional Video Sample',
    format: 'Promotional Video',
    aspectRatio: '16:9 Landscape',
    isVertical: false,
    platform: 'Facebook / YouTube',
    category: 'landscape',
    thumbnail: '/ugc-thumbnails/alishan.jpg',
    description: 'Widescreen hospitality commercial detailing signature gourmet entrees, welcoming ambient dining spaces, and family seating.',
    tags: ['Landscape 16:9', 'Restaurant Promo', 'Hospitality']
  },
  {
    id: 'crispy-crave',
    driveId: '1lUIgnUl9CcHJrVkeP_icBlynn3tIG8U2',
    title: 'Crispy Crave Quick Bites',
    label: 'Product Ad Creative',
    format: 'Product Ad',
    aspectRatio: '16:9 Landscape',
    isVertical: false,
    platform: 'Facebook / Meta',
    category: 'product',
    thumbnail: '/ugc-thumbnails/crispy-crave.jpg',
    description: 'High-appetite fast-casual commercial emphasizing golden crunch, signature dipping sauces, and meal combo pricing.',
    tags: ['Landscape 16:9', 'Fast Food Commercial', 'Crunch Appeal']
  },
  {
    id: 'fashion-2',
    driveId: '1UXB5LGPFgxpjdIFoPDfG6hi3I3DJ2G8n',
    title: 'Modern Wardrobe Essentials',
    label: 'Promotional Video Sample',
    format: 'Promotional Video',
    aspectRatio: '16:9 Landscape',
    isVertical: false,
    platform: 'YouTube / Facebook',
    category: 'landscape',
    thumbnail: '/ugc-thumbnails/fashion-2.jpg',
    description: 'Landscape retail promotional edit showcasing coordinated seasonal apparel textures, colorways, and lifestyle aesthetics.',
    tags: ['Landscape 16:9', 'Fashion Commercial', 'Lookbook Edit']
  },
  {
    id: 'kfc',
    driveId: '17g_WQePmvAiQE_s2zthZktVu_W0oRPpk',
    title: 'Crispy Chicken Meal Promo',
    label: 'Promotional Video Sample',
    format: 'Product Ad',
    aspectRatio: '16:9 Landscape',
    isVertical: false,
    platform: 'Meta / YouTube',
    category: 'product',
    thumbnail: '/ugc-thumbnails/kfc.jpg',
    description: 'Commercial video piece focusing on crisp sound design, golden breading close-ups, and value meal offer messaging.',
    tags: ['Landscape 16:9', 'Food Commercial', 'Offer Messaging']
  },
  {
    id: 'radiance-english',
    driveId: '1ThlIckaCVCk1fgjSQlXLzYUIDDdpPnBZ',
    title: 'Radiance Foundation (English)',
    label: 'Promotional Video Sample',
    format: 'Promotional Video',
    aspectRatio: '16:9 Landscape',
    isVertical: false,
    platform: 'YouTube / Facebook',
    category: 'promotional',
    thumbnail: '/ugc-thumbnails/radiance-english.jpg',
    description: 'Institutional organization video explaining social impact, educational initiatives, and community development programs.',
    tags: ['Landscape 16:9', 'Institutional Promo', 'English Narration']
  },
  {
    id: 'radiance-odia',
    driveId: '1YtFIeN-EiXr7wOKKvNUoLOzzeH0ki_SD',
    title: 'Radiance Foundation (Odia)',
    label: 'Promotional Video Sample',
    format: 'Promotional Video',
    aspectRatio: '16:9 Landscape',
    isVertical: false,
    platform: 'Facebook / YouTube',
    category: 'promotional',
    thumbnail: '/ugc-thumbnails/radiance-odia.jpg',
    description: 'Regional language institutional campaign structured with localized voiceover narrative and grassroots community footage.',
    tags: ['Landscape 16:9', 'Institutional Promo', 'Regional Language']
  },
  {
    id: 'sampad-developer',
    driveId: '1Yef2ggMhkLQXRsACDOIkoqtqnHEvrYXq',
    title: 'Sampad Real Estate Properties',
    label: 'Promotional Video Sample',
    format: 'Promotional Video',
    aspectRatio: '16:9 Landscape',
    isVertical: false,
    platform: 'YouTube / Facebook',
    category: 'promotional',
    thumbnail: '/ugc-thumbnails/sampad-developer.jpg',
    description: 'Real estate architectural walkthrough video highlighting prime location benefits, construction floorplans, and modern amenities.',
    tags: ['Landscape 16:9', 'Real Estate Walkthrough', 'Property Tour']
  },
  {
    id: 'the-last-horizon',
    driveId: '1VQVv3oQr9H1MdHSX8dMxeTKG8jueWglz',
    title: 'The Last Horizon Cinematic Trailer',
    label: 'Promotional Video Sample',
    format: 'Promotional Video',
    aspectRatio: '16:9 Landscape',
    isVertical: false,
    platform: 'YouTube / Meta',
    category: 'landscape',
    thumbnail: '/ugc-thumbnails/the-last-horizon.jpg',
    description: 'Cinematic promotional concept featuring atmospheric grading, deliberate pacing, and narrative storytelling.',
    tags: ['Landscape 16:9', 'Cinematic Concept', 'Atmospheric Edit']
  }
];

export const UgcVideo: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'vertical' | 'landscape' | 'product' | 'promotional'>('all');
  const [selectedVideo, setSelectedVideo] = useState<UgcCreative | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedVideo]);

  const capabilities = [
    {
      title: 'UGC Ad Creation',
      desc: 'Authentic creator-style problem-agitate-solution videos that do not feel like traditional ads. Built for high-intent native feed consumption on Meta and TikTok.',
      icon: Smartphone
    },
    {
      title: 'Promotional Brand Videos',
      desc: 'High-impact value proposition overviews, brand explainers, and commercial announcements crafted with strong typography and sound design.',
      icon: Film
    },
    {
      title: 'Short-Form Video (Reels & Shorts)',
      desc: 'Fast-paced, hook-driven 15–45 second videos engineered to hold viewer retention through dynamic cuts and sound-off animated captions.',
      icon: Clapperboard
    },
    {
      title: 'AI-Assisted Video Production',
      desc: 'Accelerating creative output via Pictory.ai, Canva Video Suite, and generative scripting workflows without sacrificing bespoke visual quality.',
      icon: Wand2
    }
  ];

  const filteredCreatives = UGC_CREATIVES.filter((creative) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'vertical') return creative.isVertical;
    if (activeFilter === 'landscape') return !creative.isVertical;
    if (activeFilter === 'product') return creative.category === 'product' || creative.format === 'Product Ad';
    if (activeFilter === 'promotional') return creative.category === 'promotional' || creative.format === 'Promotional Video';
    return true;
  });

  return (
    <section id="ugc-video" className="py-20 bg-[#F8FAFC] border-b border-slate-200" aria-label="UGC and Video Creation Capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-medium mb-3">
            <Video className="w-3.5 h-3.5 text-cyan-700" />
            <span>Core Discipline 05 &bull; Video Creative Portfolio</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            UGC &amp; Promotional Video Ads
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            UGC-style advertising and promotional video creatives designed for social media campaigns, product promotion and performance marketing.
          </p>

          {/* Explicit Portfolio Note */}
          <div className="mt-4 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-2.5 text-xs text-slate-600">
            <Info className="w-4 h-4 text-cyan-700 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-900 font-medium">Selected Portfolio Note:</strong> Selected UGC and promotional video creatives from my portfolio. Some creatives are presented as samples or client work where applicable.
            </p>
          </div>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-cyan-500 shadow-xs transition-all"
              >
                <div className="p-2 w-fit rounded-lg bg-cyan-50 text-cyan-700 mb-3 shadow-xs">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-sm font-bold text-slate-900 mb-1.5">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* UGC Ad Portfolio Gallery Section */}
        <div>
          {/* Gallery Subheader & Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-cyan-700" />
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  Video Creative Showcase &amp; Gallery
                </h3>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Explore 16 verified social ad creatives, vertical UGC reels, and widescreen promotional samples.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === 'all'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                All Creatives ({UGC_CREATIVES.length})
              </button>
              <button
                onClick={() => setActiveFilter('vertical')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === 'vertical'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Vertical 9:16 ({UGC_CREATIVES.filter(c => c.isVertical).length})
              </button>
              <button
                onClick={() => setActiveFilter('landscape')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === 'landscape'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Landscape 16:9 ({UGC_CREATIVES.filter(c => !c.isVertical).length})
              </button>
              <button
                onClick={() => setActiveFilter('product')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === 'product'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Product Ads
              </button>
              <button
                onClick={() => setActiveFilter('promotional')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === 'promotional'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Promotional
              </button>
            </div>
          </div>

          {/* Responsive Gallery Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCreatives.map((creative) => (
              <div
                key={creative.id}
                className="group rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-cyan-500 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Thumbnail Stage */}
                <div 
                  className="relative overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setSelectedVideo(creative)}
                >
                  {/* Aspect Ratio Container */}
                  <div className={`relative w-full ${creative.isVertical ? 'aspect-[4/5] sm:aspect-[3/4]' : 'aspect-video'} overflow-hidden bg-slate-900 flex items-center justify-center`}>
                    <img
                      src={creative.thumbnail}
                      alt={`${creative.title} video thumbnail`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Fallback directly to Google Drive high-resolution thumbnail endpoint
                        e.currentTarget.src = `https://lh3.googleusercontent.com/d/${creative.driveId}`;
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Gradient Overlay for Readable Badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/40 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                      <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md text-slate-800 font-semibold shadow-xs">
                        {creative.aspectRatio}
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-900/85 backdrop-blur-md text-cyan-300 border border-cyan-800/40 shadow-xs">
                        {creative.label}
                      </span>
                    </div>

                    {/* Center Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-cyan-400 transition-all duration-200">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom Floating Bar */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 z-10 pointer-events-none">
                      <span className="font-mono-code text-[10px] px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm">
                        {creative.platform}
                      </span>
                      <span className="text-[11px] font-medium flex items-center gap-1 group-hover:text-cyan-300 transition-colors">
                        <span>Preview Video</span>
                        <Maximize2 className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header Row: Title & Format */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-heading text-base font-bold text-slate-900 leading-snug group-hover:text-cyan-800 transition-colors">
                        {creative.title}
                      </h4>
                      <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium border border-slate-200 flex-shrink-0">
                        {creative.format}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {creative.description}
                    </p>

                    {/* Creative Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-4">
                      {creative.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedVideo(creative)}
                      className="flex-1 py-2 px-3 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 border border-cyan-200 shadow-2xs"
                      aria-label={`View ${creative.title} video`}
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>View Video</span>
                    </button>

                    <a
                      href={`https://drive.google.com/file/d/${creative.driveId}/view`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
                      title="Open file in Google Drive"
                      aria-label={`Open ${creative.title} in Google Drive`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Workflow & Tools Banner */}
          <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-50 text-cyan-700 border border-cyan-100 flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="leading-relaxed">
                <strong className="text-slate-900 font-medium">Production Workflow:</strong> Creative briefs, hook formulation, and caption pacing developed with ChatGPT, edited and finished using Canva Video Suite, CapCut, and Pictory.ai.
              </p>
            </div>
            <span className="font-mono-code text-[11px] text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 w-fit">
              Formats: 9:16 Vertical &bull; 16:9 Widescreen &bull; Social Native
            </span>
          </div>

        </div>

      </div>

      {/* Video Modal / Lightbox */}
      {selectedVideo && (
        <div
          id="video-lightbox-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div
            className={`w-full ${selectedVideo.isVertical ? 'max-w-md' : 'max-w-3xl'} bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-cyan-50 text-cyan-800 border border-cyan-200 font-medium">
                    {selectedVideo.label}
                  </span>
                  <span className="text-[10px] font-mono-code text-slate-500">
                    {selectedVideo.aspectRatio}
                  </span>
                </div>
                <h3 id="video-modal-title" className="font-heading text-base font-bold text-slate-900 truncate">
                  {selectedVideo.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={`https://drive.google.com/file/d/${selectedVideo.driveId}/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1 text-xs font-medium"
                  title="Open in Google Drive"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Drive View</span>
                </a>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  aria-label="Close video player modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Player Frame */}
            <div className={`relative bg-black w-full ${selectedVideo.isVertical ? 'aspect-[9/14] sm:aspect-[9/15] max-h-[62vh]' : 'aspect-video max-h-[60vh]'} flex items-center justify-center overflow-hidden`}>
              <iframe
                src={`https://drive.google.com/file/d/${selectedVideo.driveId}/preview`}
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media; fullscreen"
                title={`${selectedVideo.title} video player`}
                loading="eager"
              />
            </div>

            {/* Modal Info Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">
                  Platform: <strong className="text-slate-900 font-medium">{selectedVideo.platform}</strong>
                </span>
                <span className="text-slate-600">
                  Format: <strong className="text-slate-900 font-medium">{selectedVideo.format}</strong>
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedVideo.description}
              </p>
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-200">
                <span>Verified asset from Debabrata Barik portfolio</span>
                <span>Press <kbd className="px-1 py-0.5 rounded bg-white border border-slate-300 font-mono-code text-[10px] text-slate-700">ESC</kbd> to close</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

