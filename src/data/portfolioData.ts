import perfumeImg from '../assets/images/luxury_perfume_shoot_1787203138381.jpg';
import brandingImg from '../assets/images/branding_mockup_suite_1787203150348.jpg';
import beverageImg from '../assets/images/beverage_can_retouch_1787203164168.jpg';
import packagingImg from '../assets/images/cyber_packaging_box_1787203176181.jpg';
import studioBannerImg from '../assets/images/studio_workspace_banner_1787203191136.jpg';
import { ProjectItem, PricingPackage, ClientReview } from '../types';

export const portfolioImages = {
  perfume: perfumeImg,
  branding: brandingImg,
  beverage: beverageImg,
  packaging: packagingImg,
  studioBanner: studioBannerImg,
  profile: "https://i.ibb.co.com/8D0zQg8d/markup-1000002382.jpg",
  photoshopLayout: "https://i.ibb.co.com/60rngWWc/photoshop-layout.jpg",
  digitalMarketing: "https://media.licdn.com/dms/image/v2/D4D12AQE2_RGugVu2eg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1679805150652?e=2147483647&v=beta&t=sdhV5ssg2DsFXXXHCqfXxQSk5TFnn6-qvm7yhw_pllw"
};

export const showcaseProjects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'AURA NECTAR — Luxury Fragrance Product Shoot',
    client: 'Parfums d’Or (Paris / New York)',
    category: 'Photography',
    categoryLabel: 'Product Photography',
    year: '2026',
    image: perfumeImg,
    beforeImage: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop',
    deliverables: ['8K Commercial Studio Shoot', 'Specular Highlight Balancing', 'Macro Droplet Detail', 'E-Commerce White-Background Cutouts'],
    description: 'High-end studio commercial product photography for an artisanal luxury perfume line. Engineered custom acrylic reflection staging, softbox rim diffusion, and macro droplet texturing to produce conversion-focused hero assets.',
    challenge: 'Managing harsh bottle reflections while preserving warm amber liquid luminescence across dark backgrounds.',
    solution: 'Triple-diffused polarizers with precision linear softboxes and 32-bit floating point color grading in Adobe Lightroom.',
    tags: ['Commercial Studio', 'Luxury Fragrance', 'Color Grading', 'Photoshop Camera RAW'],
    featured: true
  },
  {
    id: 'proj-2',
    title: 'NEXUS BOTANICALS — High-Impact Beverage Commercial',
    client: 'Nexus Drink Co. (London / Berlin)',
    category: 'Photography',
    categoryLabel: 'Product Photography & Retouch',
    year: '2026',
    image: beverageImg,
    beforeImage: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop',
    deliverables: ['Dynamic Splash Motion Capture', 'Matte Finish Retouching', 'Social Media Story Ad Set', 'Print-Ready Billboard Files'],
    description: 'Dynamic commercial shoot featuring 1/8000s high-speed flash splash synchronization, fresh botanical garnish styling, and crystal ice refraction.',
    challenge: 'Capturing dynamic fluid motion without losing sharp brand typography on the matte black can surface.',
    solution: 'Multi-strobe sync with optical triggers and multi-layer compositing in Adobe Photoshop.',
    tags: ['High-Speed Splash', 'Beverage Shoot', 'Photoshop Composite', 'Social Campaign'],
    featured: true
  },
  {
    id: 'proj-3',
    title: 'QUANTUM ARCHITECTS — Corporate Visual Identity & Suite',
    client: 'Quantum Studio (Singapore / Sydney)',
    category: 'Branding',
    categoryLabel: 'Branding & Identity',
    year: '2025 - 2026',
    image: brandingImg,
    deliverables: ['Vector Logo Master System', 'Embossed Stationery & Business Cards', 'Comprehensive Brand Guidelines', 'Custom Typography Pairing'],
    description: 'Complete brand redesign for an international architectural firm. Crafted geometric vector insignia, corporate stationery, gold foil business cards, and modular brand guidelines.',
    challenge: 'Creating a timeless modernist identity that communicates both mathematical precision and human warmth.',
    solution: 'Custom golden-ratio vector mark paired with elegant tactile print finishes and digital design token systems.',
    tags: ['Brand Guidelines', 'Adobe Illustrator', 'Vector Art', 'Stationery Mockup'],
    featured: true
  },
  {
    id: 'proj-4',
    title: 'CYBER-CORE V2 — Futuristic Tech Packaging System',
    client: 'HyperSound Audio Labs (Tokyo / San Francisco)',
    category: 'Packaging',
    categoryLabel: 'Packaging & 3D Mockup',
    year: '2026',
    image: packagingImg,
    deliverables: ['Dieline Vector Engineering', 'Holographic Foil Layering', 'Retail Shelf 3D Renders', 'Spot UV & Emboss Plates'],
    description: 'Next-generation luxury audio packaging box featuring matte emerald polymer finish, metallic hot-stamping, and structural dieline engineering for global retail.',
    challenge: 'Ensuring color precision (Pantone spot inks) between digital 3D visualization and industrial print production.',
    solution: 'Created calibrated CMYK + Spot UV separation layers in Adobe Illustrator with factory-ready PDF/X-1a files.',
    tags: ['Packaging Design', 'Dieline Master', 'Spot UV & Foil', 'Print Production'],
    featured: true
  },
  {
    id: 'proj-5',
    title: 'ADOBE PHOTOSHOP — Master Layer Compositions & Retouch',
    client: 'Global Advertising Agency Network',
    category: 'Graphics',
    categoryLabel: 'Graphics & Layouts',
    year: '2024 - 2026',
    image: portfolioImages.photoshopLayout,
    deliverables: ['Layered PSD Files with Smart Objects', 'Multi-Layer Masking', 'Non-Destructive Color Adjustments', 'Vector Shape Assets'],
    description: 'Advanced Photoshop manipulation, complex multi-exposure blending, and typography layout systems crafted for international billboard and digital advertising campaigns.',
    tags: ['Photoshop Master', 'Layered PSD', 'Smart Objects', 'Complex Masking'],
    featured: false
  },
  {
    id: 'proj-6',
    title: 'GROWTH MATRIX — High-Conversion Digital Marketing Ads',
    client: 'E-Commerce Tech Brands',
    category: 'Marketing',
    categoryLabel: 'Digital Marketing & Ads',
    year: '2025 - 2026',
    image: portfolioImages.digitalMarketing,
    deliverables: ['Facebook & Instagram Ad Creatives', 'Google Display Network Banners', 'A/B Testing Variants', 'Landing Page Hero Graphics'],
    description: 'Conversion-optimized visual creative sets designed to boost ROAS (Return on Ad Spend) and click-through rates across paid advertising funnels.',
    tags: ['Ad Campaigns', 'Conversion Creatives', 'Social Media Ads', 'A/B Test Design'],
    featured: false
  }
];

export const pricingPackages: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter Launch',
    badge: 'IDEAL FOR STARTUPS',
    price: 95,
    popular: false,
    deliveryDays: '2 - 3 Days',
    revisions: '3 Rounds',
    description: 'Perfect for new businesses needing a crisp logo, social kit, or professional product photo retouching.',
    features: [
      '1 Primary Vector Logo OR 3 High-End Product Photos',
      'High-Resolution JPEG, PNG (Transparent) & WebP',
      'Source Files Included (.PSD / .AI)',
      'Basic Social Media Profile Kit',
      'Commercial Usage Rights License'
    ],
    deliverables: ['High-Res Formats', 'Vector Source File', 'Commercial License'],
    targetMarket: 'Small Businesses & Indie Creators'
  },
  {
    id: 'pro',
    name: 'Pro Brand Growth',
    badge: 'MOST POPULAR // BEST VALUE',
    price: 240,
    popular: true,
    deliveryDays: '4 - 5 Days',
    revisions: 'Unlimited Revisions',
    description: 'Comprehensive creative suite designed to establish an unforgettable visual authority and drive international orders.',
    features: [
      'Complete Brand Identity System (Logo + Variations)',
      '8 Commercial Product Shoots / Premium Retouching',
      'Print-Ready Packaging or Marketing Collaterals',
      'Full Editable Adobe Suite Source Files (.PSD, .AI, .INDD)',
      'Social Media Ad Templates (10 Formats)',
      'Brand Guidelines PDF Book (Colors, Fonts, Grid)',
      'Priority 24/7 Dedicated Communication'
    ],
    deliverables: ['Complete Master Source Files', 'Brand Guidelines Book', 'Social Ad Bundle', 'Full Commercial License'],
    targetMarket: 'Growing Brands & E-Commerce Stores'
  },
  {
    id: 'enterprise',
    name: 'Elite Studio Suite',
    badge: 'GLOBAL ENTERPRISE',
    price: 580,
    popular: false,
    deliveryDays: '7 - 10 Days',
    revisions: 'VIP Unlimited',
    description: 'End-to-end creative powerhouse including custom product photography, complete visual identity, packaging dielines, and marketing campaigns.',
    features: [
      'Full E-Commerce Product Photography Catalog (20+ Retouched Shots)',
      'Advanced Multi-Component Packaging & Dielines with Foil Specs',
      'Omnichannel Advertising Campaign Creative Suite',
      'Custom 3D Product Mockup Visualizations',
      'Complete Layered Source Assets + Raw Camera Files',
      '1-on-1 Creative Direction Video Consultations',
      'Lifetime Asset Archive & Free Minor Updates'
    ],
    deliverables: ['Complete Brand Ecosystem', 'RAW Photo Studio Masters', 'Industrial Print Dielines', 'Full Copyright Transfer'],
    targetMarket: 'International Enterprises & Agencies'
  }
];

export const marketplaceStats = [
  { label: 'Completed Orders', value: '180+', sub: 'Across International Platforms' },
  { label: 'Client Rating', value: '5.0 / 5.0', sub: 'From 47+ Verified Reviews' },
  { label: 'On-Time Delivery', value: '99.8%', sub: 'Fast & Reliable Execution' },
  { label: 'Countries Served', value: '24+', sub: 'US, UK, EU, UAE, Singapore & more' }
];

export const internationalMarketplaces = [
  {
    name: 'Fiverr Pro / Top Rated',
    role: 'Freelance Graphics Designer & Product Photographer',
    badge: 'Level 2 / Top Rated',
    rating: '5.0 ★ (120+ reviews)',
    url: 'https://www.fiverr.com',
    iconText: 'fi'
  },
  {
    name: 'Behance Portfolio',
    role: 'Verified Visual Design Showcase',
    badge: 'Curated Works',
    rating: '50k+ Impressions',
    url: 'https://www.behance.net/mshiurislamabid',
    iconText: 'Bē'
  },
  {
    name: 'Creative Market & Upwork',
    role: 'Direct Contract & Design Assets',
    badge: 'Escrow Protected',
    rating: '100% Job Success',
    url: 'https://www.linkedin.com/in/moshiur-ali-abid-66362b343',
    iconText: 'Up'
  }
];
