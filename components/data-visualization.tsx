'use client';

import { Card } from '@/components/ui/card';

export function DataVisualization() {
  const visualizations = [
    {
      id: '1',
      title: 'Lorem ipsum',
      insight: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      gradient: 'from-primary/30 to-accent/30',
    },
    {
      id: '2',
      title: 'Lorem ipsum',
      insight: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      gradient: 'from-primary/30 to-accent/30',
    },
    {
      id: '3',
      title: 'Lorem ipsum',
      insight: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      gradient: 'from-primary/30 to-accent/30',
    },
    {
      id: '4',
      title: 'Lorem ipsum',
      insight: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      gradient: 'from-primary/30 to-accent/30',
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Data Visualization Highlights</h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Sample dashboards and visualizations that showcase data insights and drive strategic decisions
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {visualizations.map((viz, index) => (
            <Card
              key={viz.id}
              className={`bg-gradient-to-br ${viz.gradient} border-border p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden relative animate-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background element */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-4">{viz.title}</h3>
                <p className="text-muted-foreground text-lg">{viz.insight}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-primary to-accent opacity-50" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
