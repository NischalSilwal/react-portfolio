import { experiences } from '../../data';
import type { Experience } from '../../data';
import { SectionWrapper, SectionHeader, Icon } from '../ui';

export function Experience() {
  const workExperiences = experiences.filter(exp => !exp.isEducation);
  const educationExperiences = experiences.filter(exp => exp.isEducation);

  return (
    <SectionWrapper id="experience">
      <SectionHeader
        title="Experience & Journey"
        subtitle="My professional career and educational background"
      />

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-sm bg-primary/10">
            <Icon name="briefcase" className="text-primary" />
          </div>
          <h3 className="text-display-sm text-ink-strong">
            Work Experience
          </h3>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-hairline" />

          <div className="space-y-8">
            {workExperiences.map((exp) => (
              <TimelineItem key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </div>

      {educationExperiences.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-sm bg-primary/10">
              <Icon name="academic" className="text-primary" />
            </div>
            <h3 className="text-display-sm text-ink-strong">
              Education
            </h3>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-hairline" />

            <div className="space-y-8">
              {educationExperiences.map((exp) => (
                <TimelineItem key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}

interface TimelineItemProps {
  experience: Experience;
}

function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative pl-16 md:pl-20">
      <div className="absolute left-6 md:left-8 top-8 w-3 h-3 -translate-x-1/2 rounded-full bg-primary ring-2 ring-canvas" />

      <div className="p-6 rounded-md bg-canvas border border-hairline transition-all duration-300 group hover:border-body/30">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h4 className="text-display-sm text-ink group-hover:text-primary transition-colors">
              {experience.role}
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-body text-body-md">
              <span className="text-body-md-strong text-primary">
                {experience.company}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-caption text-mute bg-canvas-soft px-3 py-1 rounded-pill whitespace-nowrap">
            <Icon name="calendar" size="sm" />
            <span>{experience.year}</span>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {experience.description.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-body text-body-sm leading-relaxed"
            >
              <Icon name="check" className="text-primary flex-shrink-0 mt-0.5" size="sm" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.techs.map((tech) => (
            <span
              key={tech.name}
              className="px-2 py-0.5 rounded-sm text-code bg-canvas-soft text-canvas-text-soft"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
