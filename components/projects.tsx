'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { projects } from '@/lib/portfolio-data';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden flex flex-col group animate-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header with gradient */}
              <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors" />

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="space-y-4 mb-4 flex-1">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Problem</p>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Outcome</p>
                    <p className="text-sm text-muted-foreground">{project.outcome}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-primary/30 text-muted-foreground">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {project.caseStudyLink && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
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
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
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
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
                      asChild
                    >
                      <a href={project.githubLink}>
                        <Github className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
