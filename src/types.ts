export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  img: string;
  badge?: string;
  highlights: string[];
  tools: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Graphics' | 'Photography' | 'Packaging' | 'Branding' | 'Marketing';
  categoryLabel: string;
  year: string;
  image: string;
  beforeImage?: string;
  deliverables: string[];
  description: string;
  challenge?: string;
  solution?: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  type: 'education' | 'experience';
  badge?: string;
  description?: string;
  skills?: string[];
}

export interface ClientReview {
  id: string;
  name: string;
  role: string;
  country: string;
  avatar: string;
  rating: number;
  comment: string;
  project: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  price: number;
  popular?: boolean;
  deliveryDays: string;
  revisions: string;
  description: string;
  features: string[];
  deliverables: string[];
  targetMarket: string;
}

export interface OrderBrief {
  service: string;
  packageTier: string;
  quantity: number;
  addons: string[];
  urgency: string;
  clientName: string;
  clientEmail: string;
  companyName?: string;
  briefDetails: string;
  currency: 'USD' | 'EUR' | 'GBP';
  totalEstimate: number;
}
