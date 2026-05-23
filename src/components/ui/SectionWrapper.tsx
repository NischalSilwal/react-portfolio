import { type ReactNode, useRef, useEffect } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  registerSection?: (id: string, element: Element | null) => void;
}

export function SectionWrapper({
  id,
  children,
  className = '',
  containerClassName = '',
  registerSection,
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current && registerSection) {
      registerSection(id, sectionRef.current);
    }
  }, [id, registerSection]);

  return (
    <section
      ref={sectionRef}
      id={id}
      data-section-id={id}
      className={`section-padding ${className}`}
    >
      <div className={`section-container ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ title, subtitle, align = 'center', className = '' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const maxWidthClass = align === 'center' ? 'max-w-3xl mx-auto' : '';

  return (
    <div className={`mb-8 md:mb-12 ${alignClass} ${maxWidthClass} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
