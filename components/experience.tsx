'use client';

import { experience } from '@/lib/portfolio-data';
import { Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-in">
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
                  className="absolute top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"
                  style={{ left: '36px', transform: 'translateX(-50%)' }}
                />
              )}

              {/* Timeline dot */}
              <div className="flex-shrink-0 relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
                  {item.type === 'experience' ? (
                    <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  ) : (
                    <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2 md:pt-3">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                  {item.year}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1">
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
