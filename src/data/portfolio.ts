import type { PersonalInfo, Skill, Experience, Project, ContactLink, NavLink } from './types';

export const personalInfo: PersonalInfo = {
  name: 'Nischal',
  surname: 'Silwal',
  title: 'Full Stack Engineer',
  description: `Full Stack Engineer with 3+ years of experience developing scalable, high-performance web and mobile applications using Next.js, TypeScript, FastAPI, and Node.js, flutter. I implement performance optimizations like Redis caching and CDN, mentor teams, and deliver robust, user-centric software on time.`,
  avatar: '/og-image.webp',
  email: 'nischalsilwalhtd@gmail.com',
  github: 'https://github.com/NischalSilwal',
  linkedin: 'https://linkedin.com/in/nischal-silwal',
  stats: {
    years: '3+',
    yearsLabel: 'Years',
    companies: '3',
    companiesLabel: 'Companies',
    techs: '10+',
    techsLabel: 'Techs',
  },
};

export const skills: Skill[] = [

  // Frontend
  { name: 'Next.js' },
  { name: 'React.js' },
  { name: 'Tailwind CSS' },
  { name: 'Redux Toolkit' },

  // UI Implementation
  { name: 'Pixel-perfect Figma-to-code' },
  { name: 'Responsive layouts' },

  // Backend & APIs
  { name: 'FastAPI' },
  { name: 'Express.js' },
  { name: 'RBAC' },

  // Database & Caching
  { name: 'PostgreSQL' },
  { name: 'MySQL' },
  { name: 'Redis' },
  { name: 'Query Optimization' },

  // Architecture
  { name: 'Clean Architecture' },
  { name: 'Feature-Sliced Design Architecture' },
  { name: 'Repository Pattern' },
];

export const experiences: Experience[] = [
  {
    id: 0,
    year: 'April 2025 — Present',
    company: 'Avenir Tech Pvt. Ltd.',
    role: 'Full Stack Software Developer',
    description: [
      'Develop and maintain production web and mobile applications end to end using Next.js, FastAPI, PostgreSQL, and Flutter.',
      'Improve application speed and reliability by implementing Cloudflare CDN, Redis caching, and API rate limiting.',
      'Lead a team of 2 developers and 1 designer: plan sprints, track progress, review code, and unblock technical issues.',
      'Translate Figma designs into pixel-perfect, responsive interfaces and coordinate with the designer to keep implementation consistent.',
      'Deploy and ship features on schedule using Docker and CI/CD pipelines.',
    ],
    techs: [
      { name: 'Next.js', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'React', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'TypeScript', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'FastAPI', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'PostgreSQL', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'Flutter', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'Redis', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'Cloudflare', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'Docker', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'CI/CD', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
    ],
  },
  {
    id: 1,
    year: 'Feb 2024 — April 2025',
    company: 'Truenary Solutions Pvt. Ltd.',
    role: 'Software Engineer',
    description: [
      'Built cross-platform web and mobile applications with Next.js, React Native, and TypeScript.',
      'Developed scalable backend services with Express.js.',
      'Implemented secure frontend with JWT and OAuth, theme, and managed application state with Redux.',
      'Added real-time features using WebSocket communication for live order updates.',
      'Built file handling and POS-compatible PDF generation to support order processing and receipt printing.',
    ],
    techs: [
      { name: 'Next.js', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'React Native', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'TypeScript', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'Express.js', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'Redux', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'WebSocket', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'JWT / OAuth', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
    ],
  },
  {
    id: 2,
    year: 'Jan 2023 — Feb 2024',
    company: 'Kutumba Tech Pvt. Ltd.',
    role: 'Associate Software Engineer',
    description: [
      "Developed RESTful APIs with ASP.NET Core for a Student Portfolio Management System serving 1,000+ students across their bachelor's program.",
      'Applied Clean Architecture, CQRS, and the Repository pattern to keep the codebase maintainable and testable.',
      'Secured the system with JWT authentication and role-based access.',
      'Built a responsive, optimized frontend with React.js, TypeScript, and Tailwind CSS.',
    ],
    techs: [
      { name: 'ASP.NET Core', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'Clean Architecture', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'CQRS', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'React', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'TypeScript', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'Tailwind CSS', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'JWT', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
    ],
  },
  {
    id: 3,
    year: 'Graduated 2024',
    company: 'Hetauda School of Management & Social Sciences',
    role: 'Bachelor of Computer Application (BCA) · Tribhuvan University',
    isEducation: true,
    description: [
      'Foundation in software engineering, algorithms, databases, and system design.',
      'Built academic projects and explored software development throughout the degree.',
    ],
    techs: [
      { name: 'Computer Science', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'BCA', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'T.U.', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: 'Kinyo: Order Management Software',
    description:
      'Cross-platform SaaS app in a Tamagui monorepo — Next.js for web, React Native Expo for mobile, sharing components and utilities across both.',
    features: [
      'JWT auth + Google OAuth with secure token storage',
      'Image compression, file handling & POS-compatible PDF generation',
      'Tamagui monorepo with shared UI for web & mobile',
      'Redux for complex client-side state management',
      'GraphQL + Apollo Client with real-time subscriptions',
      'Collaborated with cross-functional UI/UX and backend teams',
      'Role-based dashboards for admins, staff, and customers',
    ],
    techs: [
      'React',
      'Next.js',
      'React Native',
      'Tamagui',
      'Redux',
      'GraphQL',
      'Apollo',
      'Expo',
      'TypeScript',
    ],
    icon: 'https://img.icons8.com/ios-glyphs/100/purchase-order.png',
    monochrome: true,
    links: {
      live: 'https://www.kinyoapp.com/',
    },
  },
  {
    id: 2,
    name: 'BookSatau: Peer-to-Peer Book Marketplace',
    description:
      'Peer-to-peer marketplace for buying, selling, and exchanging books, with fast search, smooth browsing, and reliable production infrastructure.',
    features: [
      'Built a marketplace where users can buy, sell, and exchange books, covering both frontend and backend end to end',
      'Created reusable UI components with Radix UI and custom TanStack Query hooks for efficient REST API data fetching',
      'Improved page performance with lazy loading, skeleton loaders, image compression, and pagination',
      'Developed FastAPI REST APIs with rate limiting, Redis caching, and query optimization; managed schema changes with Alembic migrations',
      'Set up production monitoring with GlitchTip and deployed using Docker and CI/CD pipelines',
    ],
    techs: [
      'Next.js',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Firebase Cloud Messaging',
      'Docker',
    ],
    icon: 'https://img.icons8.com/ios-glyphs/100/books.png',
    monochrome: true,
    links: {
      live: 'https://booksatau.com/',
    },
  },
  {
    id: 3,
    name: 'Afno Site: Social Commerce & Bio-Link Storefronts for Nepal',
    description:
      'A social commerce platform empowering Nepali entrepreneurs to launch a fully functional online store in minutes — turning any Instagram, TikTok, or Facebook bio link into a complete storefront with zero commission.',
    features: [
      'Technical Lead — driving technical research and development to make the platform robust and scalable',
      'Architected the backend as a NestJS microservices monorepo for independent, scalable service deployment',
      'Optimized Flutter merchant app so sellers can run their entire store from a phone — no computer needed',
      'Built a responsive Next.js, React & TypeScript storefront for a smooth, fast buyer shopping experience',
      'Designed multi-tenant, role-based authentication to securely support thousands of independent shops',
      'Enabled customizable storefront themes so every seller\u2019s shop reflects their unique brand',
      'Focused on accessible, intuitive UX so anyone can sell online regardless of technical background',
    ],
    techs: [
      'React',
      'Next.js',
      'TypeScript',
      'Flutter',
      'NestJS',
      'Microservices',
      'Multi-Tenant Auth',
    ],
    icon: 'https://img.icons8.com/ios-glyphs/100/purchase-order.png',
    monochrome: true,
    links: {
      live: 'https://www.afnosite.com/',
    },
  },
  {
    id: 4,
    name: 'SafeLand: Education Consultancy Management System',
    description:
      'Education consultancy platform that streamlines student onboarding, eligibility checks, application tracking, and counseling workflows in one place.',
    features: [
      'Built a student management platform with role-based access control (RBAC) for admins, counselors, and staff',
      'Automated student eligibility checks and application progress tracking, replacing manual spreadsheet-based workflows',
      'Developed a Kanban task board and integrated Firebase Cloud Messaging (FCM) for real-time push notifications',
      'Deployed the full-stack application on a VPS with Docker and automated CI/CD pipelines',
    ],
    techs: [
      'Next.js',
      'FastAPI',
      'PostgreSQL',
      'Firebase Cloud Messaging',
      'Docker',
      'CI/CD',
    ],
    icon: 'https://img.icons8.com/ios-glyphs/100/graduation-cap.png',
    monochrome: true,
    links: {
      live: 'https://safeland.edu.np/',
    },
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'nischalsilwalhtd@gmail.com',
    href: 'mailto:nischalsilwalhtd@gmail.com',
    icon: 'https://img.icons8.com/ios-glyphs/30/new-post.png',
  },
  {
    label: 'LinkedIn',
    value: 'Nischal Silwal',
    href: 'https://www.linkedin.com/in/nischal-silwal-1ba8b2324/',
    icon: 'https://img.icons8.com/ios-filled/30/linkedin.png',
  },
  {
    label: 'GitHub',
    value: '@NischalSilwal',
    href: 'https://github.com/NischalSilwal',
    icon: 'https://img.icons8.com/ios-glyphs/30/github.png',
  },
  {
    label: 'WhatsApp',
    value: '9814235446',
    href: 'https://wa.me/9779814235446',
    icon: 'https://img.icons8.com/ios-glyphs/30/whatsapp.png',
  },
];

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Coding Journey', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
