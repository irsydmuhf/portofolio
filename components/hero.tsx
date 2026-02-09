'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Wrapper untuk memastikan konten selalu di tengah vertikal */}
      <div className="max-w-4xl w-full text-center space-y-8 animate-in fade-in duration-1000 mt-auto mb-auto">
        {/* Judul dan subjudul */}
        <div className="space-y-3">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
            Irsyad Muhamad Firdaus
          </h1>
          <p className="text-2xl md:text-3xl font-light text-primary">
            Data Analyst
          </p>
        </div>

        {/* Deskripsi */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Turning data into actionable insights. I help businesses make informed decisions
          through data-driven analysis and visualization.
        </p>

        {/* Tombol */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            onClick={() => handleScroll('projects')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            onClick={() => handleScroll('contact')}
          >
            Contact Me
          </Button>
        </div>

        {/* Scroll down arrow */}
        <div className="pt-16">
          <button
            onClick={() => handleScroll('about')}
            className="mx-auto animate-bounce text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to content"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
