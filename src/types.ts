export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Spatial UI' | 'Temporal Systems' | 'Core Architecture' | 'Kinetic Design';
  metrics: { label: string; value: string }[];
  description: string;
  fullStory: string;
  technologies: string[];
  year: string;
  accentColor: string;
  featuredQuote: string;
}

export interface ValueProp {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  invertedAdvantage: string;
  traditionalFlaw: string;
  keyMetric: string;
  metricLabel: string;
  iconName: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  focus: string;
  avatar: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  role: string;
  rating: number;
  highlight: string;
}

export interface SectionMeta {
  id: string;
  index: number;
  title: string;
  shortName: string;
  altitude: string;
  badge: string;
}
