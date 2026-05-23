import { useCallback } from 'react';
import { personalInfo } from '../../data';
import { Button, Icon } from '../ui';

export function Hero() {
  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 64;
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
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 dark:bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10 bg-mesh-pattern opacity-50 dark:opacity-30" />

      <div className="section-container">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-500 via-accent-500 to-primary-400 opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary-400 via-accent-400 to-primary-600">
                <div className="relative w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-44 rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40">
                  {personalInfo.avatar ? (
                    <img
                      src={personalInfo.avatar}
                      alt={`${personalInfo.name} ${personalInfo.surname}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl sm:text-5xl font-bold gradient-text select-none">
                        {personalInfo.name[0]}{personalInfo.surname[0]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name} {personalInfo.surname}</span>
            </h1>
          </div>

          <div>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6 font-medium">
              {personalInfo.title}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              {personalInfo.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
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
             <Button
               variant="outline"
               size="lg"
               href="/CV_Nischal_Silwal.pdf"
               download
             >
               <Icon name="download" size="md" />
               Download My CV
             </Button>
           </div>

          <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto">
            <StatCard
              value={personalInfo.stats.years}
              label={personalInfo.stats.yearsLabel}
            />
            <StatCard
              value={personalInfo.stats.companies}
              label={personalInfo.stats.companiesLabel}
            />
            <StatCard
              value={personalInfo.stats.techs}
              label={personalInfo.stats.techsLabel}
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <button
              onClick={() => scrollToSection('#skills')}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="Scroll to next section"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  value: string;
  label: string;
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300">
      <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
        {value}
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
        {label}
      </div>
    </div>
  );
}
