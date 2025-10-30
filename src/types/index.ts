export type Language = 'en' | 'pt' | 'de';

export interface TherapyService {
  id: string;
  title: string;
  description: string;
  link: string;
  detailedContent?: {
    overview: string;
    [key: string]: string | string[] | Record<string, string>;
  };
}

export interface OverviewItem {
  title: string;
  description: string;
  quote?: string;
  author?: string;
  fullDescription?: string;
  slug?: string;
  heroImage?: string;
}

export interface TimelineItem {
  id: number;
  location: string;
  period: string;
  company: string;
  position: string;
  description: string;
}

export interface Experience {
  company: string;
  position: string;
  description: string;
}

export interface Country {
  id: number;
  country: string;
  location: string;
  period: string;
  flag: string;
  isActive: boolean;
  experiences: Experience[];
}

export interface Content {
  hero: {
    tagline: string;
    title: string;
    description: string;
    cta: {
      whatsapp: string;
      email: string;
      schedule: string;
    };
  };
  overview: {
    items: OverviewItem[];
  };
  products: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    name: string;
    description: string;
    experience: string;
    personalNote?: string;
    timeline?: TimelineItem[];
    countries?: Country[];
  };
  therapyServices: TherapyService[];
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
  };
  multilingualism: {
    title: string;
    subtitle: string;
    description: string;
    questions: string[];
  };
  pageContent: {
    [slug: string]: {
      hero: {
        tagline: string;
        title: string;
        description: string;
        backgroundImage: string;
      };
      content: string;
    };
  };
}

export interface SiteContent {
  [key: string]: Content;
} 