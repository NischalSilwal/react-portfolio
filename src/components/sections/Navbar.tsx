import { useState, useEffect, useCallback } from 'react';
import { navLinks, personalInfo } from '../../data';
import { Button, Icon } from '../ui';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
    setIsMobileMenuOpen(false);
  }, []);

  const getSectionId = (href: string) => href.replace('#', '');

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled ? 'bg-canvas' : 'bg-transparent'}
      `}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="text-body-sm-strong text-ink hover:text-primary transition-colors"
          >
            {personalInfo.name} {personalInfo.surname}
            <span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`
                  px-3 py-2 rounded-sm text-body-sm
                  transition-all duration-200
                  ${activeSection === getSectionId(link.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-body hover:text-ink hover:bg-canvas-soft'
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href={personalInfo.github}
              external
              className="hidden md:flex"
            >
              <Icon name="github" size="sm" />
              GitHub
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-sm text-body hover:text-ink hover:bg-canvas-soft transition-colors"
              aria-label="Toggle menu"
            >
              <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size="lg" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`
          md:hidden fixed inset-0 top-16 bg-canvas
          transition-all duration-300 transform
          ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
        `}
      >
        <div className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
                className={`
                  px-4 py-3 rounded-sm text-body-md-strong
                  transition-all duration-200
                  ${activeSection === getSectionId(link.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-body hover:text-ink hover:bg-canvas-soft'
                  }
                `}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-4 pt-4 border-t border-hairline">
            <Button
              variant="primary"
              size="lg"
              href={personalInfo.github}
              external
              className="w-full justify-center"
            >
              <Icon name="github" size="md" />
              View GitHub
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
