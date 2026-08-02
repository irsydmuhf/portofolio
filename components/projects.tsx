'use client';

import { Button } from '@/components/ui/button';
import { projects } from '@/lib/portfolio-data';
import { accentColor, cn } from '@/lib/utils';
import { ExternalLink, FileText, Github } from 'lucide-react';

const HEADER_COLORS = [
  'bg-primary',
  'bg-accent',
  'bg-secondary',
  'bg-[hsl(var(--chart-4))]',
  'bg-[hsl(var(--chart-5))]',
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="inline-block font-display text-4xl md:text-5xl font-bold mb-12 bg-secondary border-2 border-foreground rounded-xl px-4 py-1 rotate-[1deg] shadow-[4px_4px_0_0_hsl(var(--foreground))]">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                'paper-card overflow-hidden flex flex-col animate-in',
                index % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]',
                'hover:rotate-0',
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={cn('h-28 border-b-2 border-foreground', HEADER_COLORS[index % HEADER_COLORS.length])} />

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="space-y-4 mb-4 flex-1">
                  <div>
                    <p className="text-xs font-bold text-foreground uppercase mb-1 tracking-wide">Problem</p>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-foreground uppercase mb-1 tracking-wide">Outcome</p>
                    <p className="text-sm text-muted-foreground">{project.outcome}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={cn('sticker text-xs py-0.5', accentColor(techIndex))}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="sticker text-xs py-0.5 bg-muted">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {project.caseStudyLink && (
                    <Button
                      size="sm"
                      className="border-2 border-foreground bg-card text-foreground hover:bg-secondary rounded-lg shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform font-semibold"
                      asChild
                    >
                      <a href={project.caseStudyLink}>
                        Case Study
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  )}
                  {project.dashboardLink && (
                    <Button
                      size="sm"
                      className="border-2 border-foreground bg-card text-foreground hover:bg-secondary rounded-lg shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform font-semibold"
                      asChild
                    >
                      <a href={project.dashboardLink}>
                        Dashboard
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      size="sm"
                      className="border-2 border-foreground bg-card text-foreground hover:bg-secondary rounded-lg shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform font-semibold"
                      asChild
                    >
                      <a href={project.githubLink}>
                        <Github className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                  {project.fileLink && (
                    <Button
                      size="sm"
                      className="border-2 border-foreground bg-card text-foreground hover:bg-secondary rounded-lg shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform font-semibold"
                      asChild
                    >
                      <a href={project.fileLink}>
                        <FileText className="w-3 h-3 mr-1" />
                        SQL
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
