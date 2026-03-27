import { skills } from '../../data';
import { SectionWrapper, SectionHeader } from '../ui';

/**
 * Skills section with grid layout and hover effects
 */
export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        title="Skills & Technologies"
        subtitle="Technologies I've been working with and mastered over the years"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

interface SkillCardProps {
  skill: { name: string; icon: string };
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <div
      className="
        group relative p-5 rounded-xl
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-800
        hover:border-primary-300 dark:hover:border-primary-700
        hover:shadow-lg hover:shadow-primary-500/10
        transition-all duration-300
        cursor-default
        hover:-translate-y-1
      "
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Icon and name */}
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </span>
        <span className="font-semibold text-gray-900 dark:text-white text-sm">
          {skill.name}
        </span>
      </div>

      {/* Accent line on hover */}
      <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
