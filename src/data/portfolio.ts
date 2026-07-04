import type { PersonalInfo, Skill, Experience, Project, ContactLink, NavLink } from './types';

export const personalInfo: PersonalInfo = {
  name: 'Nischal',
  surname: 'Silwal',
  title: 'Full Stack Engineer',
  description: `Full Stack Engineer with 3+ years building modern web & mobile apps. Specialised in React, Next.js, TypeScript, Flutter, & FastAPI — shipping clean, scalable, products from Hetauda, Nepal.`,
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
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'React Native' },
  { name: 'TypeScript' },
  { name: 'Tailwind CSS' },
  { name: 'Redux' },
  { name: 'GraphQL' },
  { name: 'Apollo Client' },
  { name: 'ASP.NET Core' },
  { name: 'Django' },
  { name: 'Node.js' },
  { name: 'PostgreSQL' },
  { name: 'SQL Server' },
  { name: 'Docker' },
  { name: 'JWT / OAuth' },
  { name: 'Clean Architecture' },
];

export const experiences: Experience[] = [
  {
    id: 0,
    year: 'Jun 2026 — Present',
    company: 'Avenir Tech Pvt Ltd.',
    role: 'Full Stack Developer',
    location: 'Hetauda, Nepal',
    description: [
      'Building B2B E-commerce for connecting hardware suppliers and retailers using Next.js',
      'Next.js and Tailwind CSS with Radix UI for responsive UI design',
      'FastAPI for strong backend functionality',
    ],
    techs: [
      { name: 'Next.js', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'React', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'TypeScript', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'Python', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'FastAPI', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'Flutter', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'Docker', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'REST API', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
    ],
  },
  {
    id: 1,
    year: 'May 2025 — May 2026',
    company: 'Truenary Solutions Pvt. Ltd.',
    role: 'Software Engineer',
    location: 'Hetauda, Nepal',
    description: [
      'Cross-platform monorepo — Next.js web + React Native Expo mobile with Tamagui',
      'Redux state + GraphQL/Apollo with real-time subscriptions',
      'JWT auth, Google OAuth, image compression & POS PDF generation',
    ],
    techs: [
      { name: 'React', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'Next.js', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'React Native', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'Redux', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'GraphQL', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'TypeScript', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
    ],
  },
  {
    id: 2,
    year: 'Jul 2023 — May 2025',
    company: 'Kutumba Tech Pvt. Ltd.',
    role: 'Full Stack Software Engineer',
    location: 'Remote',
    description: [
      'RESTful APIs with ASP.NET Core — Clean Architecture, CQRS, Repository Pattern',
      'JWT auth, Django integrations, PostgreSQL & Docker deployments',
      'Optimised React + Next.js + TypeScript frontend applications',
    ],
    techs: [
      { name: 'ASP.NET Core', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'Django', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'React', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'TypeScript', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'PostgreSQL', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
      { name: 'Docker', color: '#76ABAE', bgColor: 'rgba(118, 171, 174, 0.15)' },
    ],
  },
  {
    id: 3,
    year: 'Graduated 2023',
    company: 'Hetauda School of Management & Social Sciences',
    role: 'Bachelor of Computer Application (BCA) · Tribhuvan University',
    location: '',
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
    name: 'Hardware Hubz: B2B/B2C E-commerce Platform',
    description:
      'A dual-mode e-commerce platform connecting hardware suppliers and customers — enabling bulk B2B trading and direct B2C retail in one seamless marketplace.',
    features: [
      'Fully responsive UI engineered for seamless experience across all screen sizes',
      'Built reusable, composable component architecture to accelerate feature development',
      'Custom hooks with TanStack Query for centralized, cache-optimized API handling',
      'Role-based authentication & authorization for suppliers, customers, and admins',
      'Cloudflare CDN integration for fast, optimized image and video delivery',
      'Implemented rate limiting to safeguard APIs against abuse and ensure platform stability',
    ],
    techs: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Radix UI',
      'TanStack Query',
      'FastAPI',
      'Cloudflare CDN',
    ],
    icon: 'https://img.icons8.com/ios-glyphs/100/purchase-order.png',
    monochrome: true,
    links: {
      live: 'https://hardwarehubz.com/',
    },
  },
  {
    id: 4,
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
    id: 0,
    name: 'Library Management System',
    description:
      'Full-stack library application with Clean Architecture end-to-end — book management, lending workflows, and role-based user access.',
    features: [
      'JWT authentication with role-based authorisation',
      'SQL Server with stored procedures and optimised schema',
      'ASP.NET Core API with Clean Architecture and CQRS via MediatR',
      'High-performance CRUD using Dapper + T-SQL with query optimisation',
      'Repository Pattern on both API and MVC frontend layers',
      'Responsive MVC UI with dynamic book search and filtering',
    ],
    techs: [
      'ASP.NET Core',
      'SQL Server',
      'Dapper',
      'T-SQL',
      'CQRS',
      'MediatR',
      'Clean Architecture',
    ],
    icon: 'https://img.icons8.com/ios-filled/100/book-shelf.png',
    monochrome: true,
    links: {
      frontend: 'https://github.com/NischalSilwal/CleanArchitcture-lms-frontend',
      backend: 'https://github.com/NischalSilwal/CleanArchitcture-lms-API',
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
