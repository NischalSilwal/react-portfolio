// TypeScript interfaces for portfolio data

export interface Skill {
  name: string;
  icon: string;
}

export interface TechBadge {
  name: string;
  color: string;
  bgColor: string;
}

export interface Experience {
  id: number;
  year: string;
  company: string;
  role: string;
  location: string;
  description: string[];
  techs: TechBadge[];
  isEducation?: boolean;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  features: string[];
  techs: string[];
  icon: string;
  monochrome?: boolean;
  links?: {
    frontend?: string;
    backend?: string;
    live?: string;
    github?: string;
  };
  isPlaceholder?: boolean;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  surname: string;
  title: string;
  tagline: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  avatar?: string;
  stats: {
    years: string;
    yearsLabel: string;
    companies: string;
    companiesLabel: string;
    techs: string;
    techsLabel: string;
  };
}
