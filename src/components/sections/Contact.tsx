import { contactLinks } from '../../data';
import { SectionWrapper, SectionHeader, Icon } from '../ui';

/**
 * Contact section with clickable links
 */
export function Contact() {
  const emailLink = contactLinks.find(link => link.label === 'Email');

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        title="Get in Touch"
        subtitle="Interested in working together? I'd love to hear from you."
      />

      <div className="max-w-2xl mx-auto">
        {/* Main contact card */}
        {/* Contact links */}
        <div className="mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3 px-5 py-3 rounded-2xl w-full sm:w-auto
                  bg-white dark:bg-gray-900
                  border border-gray-200 dark:border-gray-800
                  hover:border-primary-300 dark:hover:border-primary-700
                  hover:shadow-lg hover:shadow-primary-500/10
                  transition-all duration-300
                  group
                  hover:-translate-y-1
                "
                aria-label={link.label}
              >
                <span className="text-xl">{link.icon}</span>
                <div className="text-left">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {link.label}
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors whitespace-nowrap">
                    {link.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Availability note */}
        <div className="mt-10 text-center">
          <div
            className="
              inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-emerald-100 dark:bg-emerald-900/30
              border border-emerald-200 dark:border-emerald-700
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              Open to opportunities
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
