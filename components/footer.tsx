'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-foreground bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">Irsyad Muhamad Firdaus</h3>
            <p className="text-muted-foreground text-sm">Data Analyst</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/irsydmuhf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-foreground bg-card hover:bg-secondary shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-colors"
              >
                <Github className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="https://linkedin.com/in/irsyadmuhf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-foreground bg-card hover:bg-secondary shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="mailto:irsyad.muhf@gmail.com"
                aria-label="Email"
                className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-foreground bg-card hover:bg-secondary shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-colors"
              >
                <Mail className="w-4 h-4 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-foreground/30 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Irsyad Muhamad Firdaus. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with data insights and thoughtful design.
          </p>
        </div>
      </div>
    </footer>
  );
}
