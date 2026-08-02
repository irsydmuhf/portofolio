"use client";

import { skills } from "@/lib/portfolio-data";
import { accentColor, cn } from "@/lib/utils";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="inline-block font-display text-4xl md:text-5xl font-bold mb-12 animate-in bg-secondary border-2 border-foreground rounded-xl px-4 py-1 rotate-[-1deg] shadow-[4px_4px_0_0_hsl(var(--foreground))]">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="flex justify-center animate-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 h-7 w-24 bg-secondary/80 border border-foreground/30 rotate-2 shadow-sm" />
              <div className="w-64 md:w-80 bg-card border-2 border-foreground rounded-lg p-3 pb-8 shadow-[6px_6px_0_0_hsl(var(--foreground))]">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                  <Image
                    src="/profile.jpg"
                    alt="Irsyad Muhamad Firdaus - Data Analyst"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center text-sm font-semibold mt-3 text-foreground">
                  that&apos;s me!
                </p>
              </div>
            </div>
          </div>
          <div
            className="space-y-6 animate-in"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in leveraging Google Sheets and Google Apps Script to
              streamline data workflows, automate reporting, and create
              actionable insights. I enjoy building efficient, scalable
              solutions that save time and help teams focus on decision-making
              rather than manual data tasks.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My experience includes creating custom scripts for data
              processing, automating dashboards, and integrating Google tools
              with other platforms. I also work with Looker to design
              interactive, user-friendly dashboards that help stakeholders
              understand and act on data effectively.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I continuously refine my skills in data automation, reporting, and
              visualization, always aiming for clarity, efficiency, and
              actionable insights. Curiosity and problem-solving drive my
              approach in every project I take on.
            </p>

            <div className="space-y-4 pt-6">
              <h3 className="font-display text-xl font-bold">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={cn(
                      "sticker text-foreground hover:-translate-y-0.5 transition-transform",
                      accentColor(index),
                      index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]",
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
