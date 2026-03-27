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
        <div
          className="
            p-8 md:p-10 rounded-3xl
            bg-gradient-to-br from-primary-500/5 to-accent-500/5
            dark:from-primary-500/10 dark:to-accent-500/10
            border border-gray-200 dark:border-gray-800
            text-center
          "
        >
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          {/* Email CTA */}
          {emailLink && (
            <a
              href={emailLink.href}
              className="
                inline-flex items-center gap-2 px-8 py-4 rounded-2xl
                bg-gradient-to-r from-primary-500 to-primary-600
                hover:from-primary-600 hover:to-primary-700
                text-white font-bold text-lg
                shadow-lg shadow-primary-500/25
                hover:shadow-xl hover:shadow-primary-500/30
                transition-all duration-300
                hover:scale-105
                active:scale-100
              "
            >
              <span className="text-xl">{emailLink.icon}</span>
              <span>Say Hello</span>
            </a>
          )}

          {/* Location */}
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
            <Icon name="location" size="sm" />
            <span>Hetauda, Nepal</span>
          </div>
        </div>

        {/* Contact links */}
        <div className="mt-10">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            Or find me on
          </p>

          <div className="flex items-center justify-center gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3 px-5 py-3 rounded-2xl
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
                  <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
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
