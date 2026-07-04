import { useRef, useState, useCallback, useEffect } from 'react';
import { projects } from '../../data';
import type { Project } from '../../data';
import { SectionWrapper, SectionHeader, Icon, DynamicIcon } from '../ui';

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    const observer = new ResizeObserver(checkScroll);
    observer.observe(el);
    return () => observer.disconnect();
  }, [checkScroll]);

  return (
    <SectionWrapper id="projects" className="pt-4 md:pt-8 lg:pt-10">
      <SectionHeader
        title="React & Full Stack Projects"
        subtitle="A selection of modern web and mobile applications I've built using React, Next.js, and .NET"
      />

      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="grid gap-6 md:flex md:overflow-x-auto md:snap-x md:snap-mandatory scrollbar-thin"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <div className="hidden md:flex items-center justify-center gap-3 mt-6">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="p-2 rounded-md border border-hairline bg-canvas text-ink hover:border-body/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll left"
          >
            <Icon name="arrowLeft" size="sm" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="p-2 rounded-md border border-hairline bg-canvas text-ink hover:border-body/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll right"
          >
            <Icon name="arrowRight" size="sm" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const isPlaceholder = project.isPlaceholder;

  return (
    <div
      className={`
        group relative p-6 rounded-md
        bg-canvas border border-hairline
        transition-all duration-300
        ${isPlaceholder ? 'border-dashed' : ''}
        hover:border-body/30
        md:basis-[45%] md:grow-0 md:shrink-0 md:snap-start
      `}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-sm bg-canvas-soft">
          <DynamicIcon
            icon={project.icon}
            size={30}
            monochrome={project.monochrome}
          />
        </div>
        <div className="flex-1">
          <h4 className="text-display-sm text-ink group-hover:text-primary transition-colors">
            {project.name}
          </h4>
          {isPlaceholder && (
            <span className="text-caption text-mute mt-1 block">
              Placeholder
            </span>
          )}
        </div>
      </div>

      <p className="text-body-sm text-body leading-relaxed mb-4">
        {project.description}
      </p>

      <ul className="space-y-1.5 mb-4">
        {project.features.slice(0, 3).map((feature, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-body-sm text-body"
          >
            <Icon name="check" className="text-primary flex-shrink-0 mt-0.5" size="sm" />
            <span>{feature}</span>
          </li>
        ))}
        {project.features.length > 3 && (
          <li className="text-body-sm text-mute pl-6">
            +{project.features.length - 3} more features
          </li>
        )}
      </ul>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techs.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-sm text-code bg-canvas-soft text-canvas-text-soft"
          >
            {tech}
          </span>
        ))}
        {project.techs.length > 5 && (
          <span className="text-caption text-mute">
            +{project.techs.length - 5}
          </span>
        )}
      </div>

      {project.links && (
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-hairline">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-body-sm-strong text-primary hover:text-primary-soft transition-colors"
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
              className="flex items-center gap-1.5 text-body-sm-strong text-body hover:text-ink transition-colors"
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
              className="flex items-center gap-1.5 text-body-sm-strong text-body hover:text-ink transition-colors"
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
              className="flex items-center gap-1.5 text-body-sm-strong text-body hover:text-ink transition-colors"
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
