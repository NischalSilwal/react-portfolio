import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  href?: string;
  external?: boolean;
}

/**
 * Reusable Button component with multiple variants and sizes
 * Supports both button and anchor link modes
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className = '', href, external, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2 font-semibold rounded-xl
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900
      disabled:opacity-50 disabled:cursor-not-allowed
      active:scale-[0.98]
      hover:scale-[1.02]
    `;

    const variants = {
      primary: `
        bg-gradient-to-r from-primary-500 to-primary-600
        hover:from-primary-600 hover:to-primary-700
        text-white shadow-lg shadow-primary-500/25
        focus:ring-primary-500
        dark:shadow-primary-500/20
      `,
      secondary: `
        bg-gray-100 dark:bg-gray-800
        hover:bg-gray-200 dark:hover:bg-gray-700
        text-gray-900 dark:text-gray-100
        border border-gray-200 dark:border-gray-700
        focus:ring-gray-400
      `,
      ghost: `
        bg-transparent
        hover:bg-gray-100 dark:hover:bg-gray-800
        text-gray-700 dark:text-gray-300
        focus:ring-gray-400
      `,
      outline: `
        bg-transparent
        border-2 border-primary-500 dark:border-primary-400
        text-primary-600 dark:text-primary-400
        hover:bg-primary-50 dark:hover:bg-primary-900/20
        focus:ring-primary-500
      `,
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
