import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Reusable Card component with hover effects and optional glow
 */
export function Card({
  children,
  className = '',
  hover = true,
  glow = false,
  padding = 'md',
}: CardProps) {
  const baseStyles = `
    relative overflow-hidden rounded-2xl
    bg-white dark:bg-gray-900
    border border-gray-200 dark:border-gray-800
    shadow-lg dark:shadow-gray-900/30
    transition-all duration-300
  `;

  const hoverStyles = hover
    ? `
        hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/5
        hover:-translate-y-1
        hover:border-primary-300 dark:hover:border-primary-700
      `
    : '';

  const glowStyles = glow
    ? `
        before:absolute before:inset-0
        before:bg-gradient-to-r before:from-primary-500/10 before:to-accent-500/10
        before:rounded-2xl before:blur-xl before:-z-10
        before:opacity-0 before:transition-opacity before:duration-300
        hover:before:opacity-100
      `
    : '';

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={`${baseStyles} ${hoverStyles} ${glowStyles} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export function CardTitle({ children, className = '', as: Tag = 'h3' }: CardTitleProps) {
  return (
    <Tag
      className={`text-xl font-bold text-gray-900 dark:text-white ${className}`}
    >
      {children}
    </Tag>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return (
    <p className={`text-gray-600 dark:text-gray-400 text-sm leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={className}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 ${className}`}>
      {children}
    </div>
  );
}
