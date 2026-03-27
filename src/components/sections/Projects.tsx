import { projects } from '../../data';
import type { Project } from '../../data';
import { SectionWrapper, SectionHeader, Icon, DynamicIcon } from '../ui';

/**
 * Projects section with card-based layout
 */
export function Projects() {
  return (
    <SectionWrapper id="projects" className="pt-4 md:pt-8 lg:pt-10">
      <SectionHeader
        title="Featured Projects"
        subtitle="A selection of projects I've built, contributed to, or am currently working on"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isPlaceholder = project.isPlaceholder;

  return (
    <div
      className={`
        group relative p-6 rounded-2xl
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-800
        hover:border-primary-300 dark:hover:border-primary-700
        hover:shadow-xl hover:shadow-primary-500/5
        transition-all duration-300
        ${isPlaceholder ? 'border-dashed' : ''}
        hover:-translate-y-2
      `}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors duration-300">
          <DynamicIcon
            icon={project.icon}
            size={30}
            monochrome={project.monochrome}
          />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors text-lg">
            {project.name}
          </h4>
          {isPlaceholder && (
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
              Placeholder
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Features */}
      <ul className="space-y-1.5 mb-4">
        {project.features.slice(0, 3).map((feature, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
          >
            <Icon name="check" className="text-emerald-500 flex-shrink-0 mt-0.5" size="sm" />
            <span>{feature}</span>
          </li>
        ))}
        {project.features.length > 3 && (
          <li className="text-sm text-gray-500 dark:text-gray-500 pl-6">
            +{project.features.length - 3} more features
          </li>
        )}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techs.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="
              text-xs font-medium px-2 py-0.5 rounded-md
              bg-gray-100 dark:bg-gray-800
              text-gray-700 dark:text-gray-300
            "
          >
            {tech}
          </span>
        ))}
        {project.techs.length > 5 && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            +{project.techs.length - 5}
          </span>
        )}
      </div>

      {/* Links */}
      {project.links && (
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5 text-sm font-medium
                text-primary-600 dark:text-primary-400
                hover:text-primary-700 dark:hover:text-primary-300
                transition-colors
              "
            >
              <Icon name="external" size="sm" />
              <span>Live Demo</span>
            </a>
          )}
          {project.links.frontend && (
            <a
              href={project.links.frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5 text-sm font-medium
                text-gray-600 dark:text-gray-400
                hover:text-gray-900 dark:hover:text-white
                transition-colors
              "
            >
              <Icon name="github" size="sm" />
              <span>Frontend</span>
            </a>
          )}
          {project.links.backend && (
            <a
              href={project.links.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5 text-sm font-medium
                text-gray-600 dark:text-gray-400
                hover:text-gray-900 dark:hover:text-white
                transition-colors
              "
            >
              <Icon name="github" size="sm" />
              <span>Backend</span>
            </a>
          )}
          {project.links.github && !project.links.frontend && !project.links.backend && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5 text-sm font-medium
                text-gray-600 dark:text-gray-400
                hover:text-gray-900 dark:hover:text-white
                transition-colors
              "
            >
              <Icon name="github" size="sm" />
              <span>View GitHub</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
