import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * Reusable Badge component for displaying labels and tags
 */
export function Badge({ children, variant = 'default', size = 'sm', className = '' }: BadgeProps) {
  const baseStyles = `
    inline-flex items-center gap-1 font-medium rounded-full
    transition-all duration-200
  `;

  const variants = {
    default: `
      bg-gray-100 dark:bg-gray-800
      text-gray-700 dark:text-gray-300
      border border-gray-200 dark:border-gray-700
    `,
    primary: `
      bg-primary-100 dark:bg-primary-900/30
      text-primary-700 dark:text-primary-300
      border border-primary-200 dark:border-primary-700
    `,
    success: `
      bg-emerald-100 dark:bg-emerald-900/30
      text-emerald-700 dark:text-emerald-300
      border border-emerald-200 dark:border-emerald-700
    `,
    warning: `
      bg-amber-100 dark:bg-amber-900/30
      text-amber-700 dark:text-amber-300
      border border-amber-200 dark:border-amber-700
    `,
    outline: `
      bg-transparent
      text-gray-600 dark:text-gray-400
      border border-gray-300 dark:border-gray-600
    `,
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}
