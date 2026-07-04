import { contactLinks } from '../../data';
import { SectionWrapper, SectionHeader, DynamicIcon } from '../ui';

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeader
        title="Get in Touch"
        subtitle="Based in Hetauda, Nepal. Interested in working together? I'd love to hear from you."
      />

      <div className="max-w-6xl mx-auto px-4">
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
                    flex items-center gap-3 px-4 py-4 rounded-md w-full
                    bg-canvas border border-hairline
                    hover:border-body/30
                    transition-all duration-300
                    group
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
                    <div className="text-eyebrow-mono text-mute">
                      {link.label}
                    </div>
                    <div className="text-body-sm text-ink group-hover:text-primary transition-colors truncate">
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
