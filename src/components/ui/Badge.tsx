import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ children, variant = 'default', size = 'sm', className = '' }: BadgeProps) {
  const baseStyles = `
    inline-flex items-center gap-1 font-medium
    transition-all duration-200
  `;

  const variants = {
    default: `
      bg-canvas-soft text-ink border border-hairline rounded-pill
    `,
    primary: `
      bg-primary/10 text-primary border border-primary/30 rounded-pill
    `,
    success: `
      bg-emerald-900/20 text-emerald-400 border border-emerald-700/30 rounded-pill
    `,
    warning: `
      bg-amber-900/20 text-amber-400 border border-amber-700/30 rounded-pill
    `,
    outline: `
      bg-transparent text-body border border-hairline rounded-pill
    `,
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-caption',
    md: 'px-3 py-1 text-body-sm',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}
