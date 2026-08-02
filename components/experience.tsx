'use client';

import { experience } from '@/lib/portfolio-data';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <h2 className="inline-block font-display text-4xl md:text-5xl font-bold mb-12 animate-in bg-card border-2 border-foreground rounded-xl px-4 py-1 rotate-[-1deg] shadow-[4px_4px_0_0_hsl(var(--foreground))]">
          Experience & Education
        </h2>

        <div className="space-y-0 relative">
          {experience.map((item, index) => (
            <div
              key={item.id}
              className="flex gap-4 md:gap-8 pb-12 relative animate-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline line */}
              {index !== experience.length - 1 && (
                <div
                  className="absolute top-16 bottom-0 border-l-2 border-dashed border-foreground/40"
                  style={{ left: '36px', transform: 'translateX(-50%)' }}
                />
              )}

              {/* Timeline dot */}
              <div className="flex-shrink-0 relative z-10">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-foreground flex items-center justify-center shadow-[3px_3px_0_0_hsl(var(--foreground))] ${
                    item.type === 'experience' ? 'bg-secondary' : 'bg-accent'
                  }`}
                >
                  {item.type === 'experience' ? (
                    <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
                  ) : (
                    <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-accent-foreground" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="paper-card flex-1 p-5 mt-1">
                <p className="text-sm font-bold text-primary uppercase tracking-wide">
                  {item.year}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mt-1">
                  {item.role}
                </h3>
                <p className="text-lg text-muted-foreground font-medium">
                  {item.organization}
                </p>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
