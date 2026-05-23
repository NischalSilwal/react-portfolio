import { contactLinks } from '../../data';
import { SectionWrapper, SectionHeader, DynamicIcon } from '../ui';

/**
 * Contact section with clickable links
 */
export function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeader
        title="Get in Touch"
        subtitle="Based in Hetauda, Nepal. Interested in working together? I'd love to hear from you."
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Main contact card */}
        {/* Contact links */}
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
            {contactLinks.map((link) => {
              const isEmail = link.label === 'Email';
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  title={link.value}
                  className="
                    flex items-center gap-3 px-4 py-4 rounded-2xl w-full
                    bg-white dark:bg-gray-900
                    border border-gray-200 dark:border-gray-800
                    hover:border-primary-300 dark:hover:border-primary-700
                    hover:shadow-xl hover:shadow-primary-500/10
                    transition-all duration-300
                    group
                    hover:-translate-y-1
                  "
                  aria-label={link.label}
                >
                  <div className="flex-shrink-0">
                    <DynamicIcon
                      icon={link.icon}
                      size={30}
                      monochrome={true}
                    />
                  </div>
                  <div className="text-left overflow-hidden">
                    <div className="text-[0.7rem] uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
                      {link.label}
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate">
                      {isEmail ? (
                        <span>
                          {link.value.split('@')[0]}
                          <span className="hidden">obfuscate</span>
                          @
                          {link.value.split('@')[1]}
                        </span>
                      ) : (
                        link.value
                      )}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
