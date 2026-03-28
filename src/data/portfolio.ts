import type { PersonalInfo, Skill, Experience, Project, ContactLink, NavLink } from './types';
import profileImg from '../assets/images/nischalsilwal-profile.jpg';

export const personalInfo: PersonalInfo = {
  name: 'Nischal',
  surname: 'Silwal',
  title: 'Full Stack Engineer',
  tagline: 'Open to opportunities',
  description: `Frontend-focused Full Stack Engineer with 3+ years building modern web & mobile apps. Specialised in React, Next.js, TypeScript, React Native & .NET — shipping clean, scalable, fast products from Hetauda, Nepal.`,
  avatar: profileImg,
  email: 'nischalsilwalhtd@gmail.com',
  github: 'https://github.com/NischalSilwal',
  linkedin: 'https://linkedin.com/in/nischal-silwal',
  stats: {
    years: '3+',
    yearsLabel: 'Years',
    companies: '2',
    companiesLabel: 'Companies',
    techs: '10+',
    techsLabel: 'Techs',
  },
};

export const skills: Skill[] = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'React Native', icon: '📱' },
  { name: 'TypeScript', icon: '🟦' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Redux', icon: '🔁' },
  { name: 'GraphQL', icon: '🔷' },
  { name: 'Apollo Client', icon: '🚀' },
  { name: 'ASP.NET Core', icon: '🟣' },
  { name: 'Django', icon: '🐍' },
  { name: 'Node.js', icon: '🌿' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'SQL Server', icon: '🗄️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'JWT / OAuth', icon: '🔐' },
  { name: 'Clean Architecture', icon: '🏗️' },
];

export const experiences: Experience[] = [
  {
    id: 0,
    year: 'Jun 2025 — Present',
    company: 'Truenary Solutions Pvt. Ltd.',
    role: 'Software Engineer · Hetauda, Nepal',
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
    id: 1,
    year: 'Jul 2023 — May 2025',
    company: 'Kutumba Tech Pvt. Ltd.',
    role: 'Full Stack Software Engineer · Hetauda, Nepal',
    location: 'Hetauda, Nepal',
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
    id: 2,
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
    id: 0,
    name: 'Library Management System',
    description:
      'Full-stack library application with Clean Architecture end-to-end — book management, lending workflows, and role-based user access.',
    features: [
      'ASP.NET Core API with Clean Architecture and CQRS via MediatR',
      'High-performance CRUD using Dapper + T-SQL with query optimisation',
      'Repository Pattern on both API and MVC frontend layers',
      'JWT authentication with role-based authorisation',
      'SQL Server with stored procedures and optimised schema',
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
  {
    id: 1,
    name: 'Nyauli — SaaS Platform',
    description:
      'Cross-platform SaaS app in a Tamagui monorepo — Next.js for web, React Native Expo for mobile, sharing components and utilities across both.',
    features: [
      'Tamagui monorepo with shared UI for web & mobile',
      'Redux for complex client-side state management',
      'GraphQL + Apollo Client with real-time subscriptions',
      'JWT auth + Google OAuth with secure token storage',
      'Image compression, file handling & POS-compatible PDF generation',
      'Collaborated with cross-functional UI/UX and backend teams',
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
      live: 'https://business.dev.retack.ai',
    },
  },
  {
    id: 2,
    name: 'More on GitHub',
    description:
      'Exploring more open-source work, experiments & side projects — check my GitHub for the full collection.',
    features: [
      'API integrations & microservice experiments',
      'Frontend component libraries & demos',
      'Open source contributions',
    ],
    techs: ['GitHub', '@NischalSilwal'],
    icon: 'https://img.icons8.com/ios-filled/100/more.png',
    monochrome: true,
    links: {
      github: 'https://github.com/NischalSilwal',
    },
    isPlaceholder: false,
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
