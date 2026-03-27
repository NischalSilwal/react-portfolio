import { type ReactNode, useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  registerSection?: (id: string, element: Element | null) => void;
}

/**
 * Wrapper component for sections with scroll-triggered animations
 */
export function SectionWrapper({
  id,
  children,
  className = '',
  containerClassName = '',
  registerSection,
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [refCallback, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    rootMargin: '-50px',
    freezeOnceVisible: true,
  });

  // Register section for active section tracking
  useEffect(() => {
    if (sectionRef.current && registerSection) {
      registerSection(id, sectionRef.current);
    }
  }, [id, registerSection]);

  // Combined ref callback
  const combinedRef = (el: HTMLElement | null) => {
    // Update the section ref
    sectionRef.current = el;
    // Call the intersection observer callback
    refCallback(el);
  };

  return (
    <section
      ref={combinedRef}
      id={id}
      data-section-id={id}
      className={`
        section-padding
        opacity-0 translate-y-8
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : ''}
        ${className}
      `}
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
    <div className={`mb-12 md:mb-16 ${alignClass} ${maxWidthClass} ${className}`}>
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
