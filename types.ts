
export interface Profile {
  name: string;
  role: string;
  summary: string;
  aboutBullets: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
  socials: {
    platform: 'GitHub' | 'LinkedIn' | 'Email' | 'CV';
    url: string;
  }[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  thumbnail: string;
  gallery?: string[]; // Added for extra project screenshots/placeholders
  tags: string[];
  highlights: string[];
  architecture: {
    image: string;
    description: string;
  };
  challenges: {
    problem: string;
    solution: string;
  }[];
  lessons: string[];
  githubUrl?: string;
  repositories?: { label: string; url: string }[];
  liveUrl?: string;
}