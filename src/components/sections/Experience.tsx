import { experiences } from '../../data';
import type { Experience } from '../../data';
import { SectionWrapper, SectionHeader, Icon } from '../ui';

/**
 * Experience/Journey section with timeline-based layout
 */
export function Experience() {
  // Separate work and education experiences
  const workExperiences = experiences.filter(exp => !exp.isEducation);
  const educationExperiences = experiences.filter(exp => exp.isEducation);

  return (
    <SectionWrapper id="experience">
      <SectionHeader
        title="Experience & Journey"
        subtitle="My professional career and educational background"
      />

      {/* Work Experience */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
            <Icon name="briefcase" className="text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Work Experience
          </h3>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300 dark:from-primary-400 dark:via-primary-500 dark:to-primary-600" />

          {/* Experience cards */}
          <div className="space-y-8">
            {workExperiences.map((exp, index) => (
              <TimelineItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      {educationExperiences.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent-100 dark:bg-accent-900/30">
              <Icon name="academic" className="text-accent-600 dark:text-accent-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Education
            </h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-accent-400 to-accent-300 dark:from-accent-400 dark:via-accent-500 dark:to-accent-600" />

            {/* Education cards */}
            <div className="space-y-8">
              {educationExperiences.map((exp, index) => (
                <TimelineItem key={exp.id} experience={exp} index={index} />
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
  index: number;
}

function TimelineItem({ experience, index }: TimelineItemProps) {
  const isEducation = experience.isEducation;
  const dotColor = isEducation
    ? 'bg-accent-500 dark:bg-accent-400'
    : 'bg-primary-500 dark:bg-primary-400';

  return (
    <div
      className="relative pl-16 md:pl-20"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Timeline dot */}
      <div
        className={`
          absolute left-4 md:left-6 top-8 w-4 h-4 rounded-full
          ${dotColor}
          ring-4 ring-white dark:ring-gray-950
          shadow-lg shadow-primary-500/20
        `}
      />

      {/* Card */}
      <div
        className="
          p-6 rounded-2xl
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-800
          hover:border-primary-300 dark:hover:border-primary-700
          hover:shadow-xl hover:shadow-primary-500/5
          transition-all duration-300
          group
        "
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {experience.role}
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {experience.company}
              </span>
              {experience.location && (
                <>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1 text-sm">
                    <Icon name="location" size="sm" />
                    {experience.location}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Date badge */}
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
            <Icon name="calendar" size="sm" />
            <span>{experience.year}</span>
          </div>
        </div>

        {/* Description bullets */}
        <ul className="space-y-2 mb-4">
          {experience.description.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
            >
              <Icon name="check" className="text-emerald-500 flex-shrink-0 mt-0.5" size="sm" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.techs.map((tech) => (
            <span
              key={tech.name}
              className="text-xs font-medium px-2.5 py-1 rounded-lg transition-transform hover:scale-105"
              style={{
                color: tech.color,
                backgroundColor: tech.bgColor,
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
