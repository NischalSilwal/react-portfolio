import { skills } from '../../data';
import { SectionWrapper, SectionHeader, SkillIcon } from '../ui';

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        title="Full Stack Skills & Technologies"
        subtitle="Core technologies I've mastered: React, Next.js, TypeScript, and .NET"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </SectionWrapper>
  );
}

interface SkillCardProps {
  skill: { name: string };
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="group relative p-5 rounded-md bg-canvas border border-hairline transition-all duration-300 cursor-default hover:border-body/30">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="group-hover:scale-110 transition-transform duration-300 text-ink">
          <SkillIcon name={skill.name} />
        </span>
        <span className="text-body-sm-strong text-ink">
          {skill.name}
        </span>
      </div>

      <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
