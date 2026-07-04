import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  href?: string;
  external?: boolean;
  download?: boolean | string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className = '', href, external, download, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2 text-button-md
      transition-all duration-200 ease-out
      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-canvas
      disabled:opacity-50 disabled:cursor-not-allowed
      active:scale-[0.98]
    `;

    const variants = {
      primary: `
        bg-primary text-on-primary rounded-sm
        hover:bg-primary-soft
        focus:ring-primary
      `,
      outline: `
        bg-canvas text-ink border border-hairline rounded-sm
        hover:border-body/30 hover:text-ink-strong
        focus:ring-primary
      `,
      ghost: `
        bg-transparent text-primary-soft rounded-sm
        hover:text-primary
        focus:ring-primary
      `,
      pill: `
        bg-canvas text-ink border border-hairline rounded-pill text-body-sm
        hover:border-body/30
        focus:ring-primary
      `,
    };

    const sizes = {
      sm: 'px-3 py-1.5',
      md: 'px-4 py-3',
      lg: 'px-6 py-4',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          download={download}
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
