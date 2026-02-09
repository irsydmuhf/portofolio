"use client";

import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/portfolio-data";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-in">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="flex justify-center animate-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative w-64 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center hover:from-primary/30 hover:to-accent/30 transition-colors duration-300">
                <Image
                  src="/profile.jpg"
                  alt="Irsyad Muhamad Firdaus - Data Analyst"
                  fill
                  className="object-cover"
                />
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
              <h3 className="text-xl font-semibold">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground border-border hover:bg-secondary/80"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
