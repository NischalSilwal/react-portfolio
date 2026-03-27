import { useCallback } from 'react';
import { personalInfo } from '../../data';
import { Button, Icon } from '../ui';

interface HeroProps {
  isVisible: boolean;
}

/**
 * Hero section with name, title, tagline, CTA buttons, and animated stats
 */
export function Hero({ isVisible }: HeroProps) {
  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 dark:bg-accent-500/10 rounded-full blur-3xl animate-float animation-delay-500" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-mesh-pattern opacity-50 dark:opacity-30" />

      <div className="section-container">
        <div className="max-w-5xl mx-auto text-center">
          {/* Availability badge */}
          <div
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-emerald-100 dark:bg-emerald-900/30
              border border-emerald-200 dark:border-emerald-700
              mb-8
              transition-all duration-700 delay-100
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              {personalInfo.tagline}
            </span>
          </div>

          {/* Name and Title */}
          <div
            className={`
              transition-all duration-700 delay-200
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name} {personalInfo.surname}</span>
            </h1>
          </div>

          <div
            className={`
              transition-all duration-700 delay-300
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6 font-medium">
              {personalInfo.title}
            </p>
          </div>

          {/* Description */}
          <div
            className={`
              max-w-3xl mx-auto
              transition-all duration-700 delay-400
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              {personalInfo.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`
              flex flex-wrap items-center justify-center gap-4 mb-16
              transition-all duration-700 delay-500
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              <Icon name="email" size="md" />
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={personalInfo.github}
              external
            >
              <Icon name="github" size="md" />
              View GitHub
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`
              grid grid-cols-3 gap-6 md:gap-8
              max-w-2xl mx-auto
              transition-all duration-700 delay-600
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <StatCard
              value={personalInfo.stats.years}
              label={personalInfo.stats.yearsLabel}
              isVisible={isVisible}
              delay={700}
            />
            <StatCard
              value={personalInfo.stats.companies}
              label={personalInfo.stats.companiesLabel}
              isVisible={isVisible}
              delay={800}
            />
            <StatCard
              value={personalInfo.stats.techs}
              label={personalInfo.stats.techsLabel}
              isVisible={isVisible}
              delay={900}
            />
          </div>

          {/* Scroll indicator */}
          <div
            className={`
              absolute bottom-8 left-1/2 -translate-x-1/2
              transition-all duration-700 delay-1000
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <button
              onClick={() => scrollToSection('#skills')}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="Scroll to next section"
            >
              {/* <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
              </div> */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  isVisible: boolean;
  delay: number;
}

function StatCard({ value, label, isVisible, delay }: StatCardProps) {
  return (
    <div
      className={`
        p-6 rounded-2xl
        bg-white/60 dark:bg-gray-900/60
        backdrop-blur-sm
        border border-gray-200/50 dark:border-gray-800/50
        hover:border-primary-300 dark:hover:border-primary-700
        hover:shadow-lg hover:shadow-primary-500/5
        transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
        {isVisible ? value : '0'}
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
        {label}
      </div>
    </div>
  );
}
