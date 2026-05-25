import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { SectionContainer } from '../layout/SectionContainer';
import type { ProjectItem, ProjectsCopy } from '../../types/portfolio';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  copy: ProjectsCopy;
}

export function ProjectsSection({ projects, copy }: ProjectsSectionProps) {
  return (
    <SectionContainer
      id="projetos"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="text-ink"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.url}
            whileHover={{ y: -5 }}
            className="flex min-h-[260px] flex-col justify-between rounded-[1.5rem] border border-slate-200 bg-white p-6 text-ink shadow-soft"
          >
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex rounded-2xl bg-ink p-3 text-white">
                  <Github className="h-5 w-5" />
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${copy.repositoryLabel}: ${project.name}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-sand text-ink transition hover:border-cyan/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-2xl font-semibold">{project.name}</h3>
                <p className="text-sm leading-6 text-slate-600">{project.description}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={`${project.name}-${tag}`}
                  className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionContainer>
  );
}
