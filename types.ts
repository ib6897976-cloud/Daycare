
export interface SiteSettings {
  phone: string;
  email: string;
  address: string;
  hours: string;
  ctaText: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BioContent {
  heroHeadline: string;
  heroSubheadline: string;
  visionHeadline: string;
  visionText: string;
  aboutHeadline: string;
  aboutText: string;
  programsHeadline: string;
  programsSubheadline: string;
  programs: ProgramItem[];
}

export interface FeeItem {
  id: string;
  title: string;
  description: string;
  ageRange: string;
  price: string;
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
}

export interface AppData {
  settings: SiteSettings;
  bio: BioContent;
  fees: {
    title: string;
    description: string;
    items: FeeItem[];
    disclaimer: string;
  };
  testimonials: Testimonial[];
  images: {
    hero: string;
    bio: string;
    fees: string;
    about: string;
  };
}

export type Page = 'home' | 'fees' | 'reviews';
