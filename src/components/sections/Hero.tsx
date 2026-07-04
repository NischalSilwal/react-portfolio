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
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10"
    >
      <div className="section-container">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-64 h-44 rounded-md overflow-hidden border border-hairline">
              {personalInfo.avatar ? (
                <img
                  src={personalInfo.avatar}
                  alt={`${personalInfo.name} ${personalInfo.surname}`}
                  width={256}
                  height={176}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-5xl font-bold text-ink select-none">
                    {personalInfo.name[0]}{personalInfo.surname[0]}
                  </span>
                </div>
              )}
            </div>
          </div>

          <p className="text-eyebrow-mono text-primary mb-4">
            FULL STACK ENGINEER
          </p>

          <h1 className="text-display-xl text-ink-strong mb-4">
            Hi, I'm {personalInfo.name} {personalInfo.surname}
          </h1>

          <p className="text-body-lg text-body leading-relaxed max-w-3xl mx-auto mb-10">
            {personalInfo.description}
          </p>

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
              className="flex flex-col items-center gap-2 text-mute hover:text-primary transition-colors"
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
    <div className="p-6 rounded-md bg-canvas border border-hairline transition-colors duration-300 hover:border-body/30">
      <div className="text-display-md text-ink-strong mb-1">
        {value}
      </div>
      <div className="text-body-sm text-body font-medium">
        {label}
      </div>
    </div>
  );
}
