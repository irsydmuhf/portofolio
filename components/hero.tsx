'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import { resumeUrl } from '@/lib/portfolio-data';

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-4xl w-full text-center space-y-8 animate-in mt-auto mb-auto">
        <span className="sticker bg-secondary rotate-[-3deg]">
          👋 Hi, I&apos;m Irsyad
        </span>

        <div className="space-y-3">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
            Irsyad Muhamad Firdaus
          </h1>
          <p className="inline-block text-2xl md:text-3xl font-display font-bold bg-accent text-accent-foreground px-4 py-1 rounded-xl border-2 border-foreground rotate-[-1deg] shadow-[4px_4px_0_0_hsl(var(--foreground))]">
            Data Analyst
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Turning data into actionable insights. I help businesses make informed decisions
          through data-driven analysis and visualization.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            onClick={() => handleScroll('projects')}
            className="bg-primary text-primary-foreground hover:bg-primary border-2 border-foreground rounded-xl shadow-[4px_4px_0_0_hsl(var(--foreground))] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform font-semibold"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-foreground text-foreground bg-card hover:bg-secondary rounded-xl shadow-[4px_4px_0_0_hsl(var(--foreground))] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform font-semibold"
            onClick={() => handleScroll('contact')}
          >
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-foreground text-foreground bg-secondary hover:bg-secondary/80 rounded-xl shadow-[4px_4px_0_0_hsl(var(--foreground))] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform font-semibold"
            asChild
          >
            <a href={resumeUrl} download target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-1" />
              Download CV
            </a>
          </Button>
        </div>

        <div className="pt-16">
          <button
            onClick={() => handleScroll('about')}
            className="mx-auto animate-bounce text-foreground hover:text-primary transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Scroll to content"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
