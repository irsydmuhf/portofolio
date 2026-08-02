'use client';

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { cn } from '@/lib/utils';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  XAxis,
  YAxis,
} from 'recharts';

const hourlyDemand = [
  { hour: '0', weekday: 40, weekend: 55 },
  { hour: '2', weekday: 15, weekend: 25 },
  { hour: '4', weekday: 8, weekend: 8 },
  { hour: '6', weekday: 95, weekend: 20 },
  { hour: '8', weekday: 410, weekend: 90 },
  { hour: '10', weekday: 150, weekend: 230 },
  { hour: '12', weekday: 180, weekend: 310 },
  { hour: '14', weekday: 180, weekend: 330 },
  { hour: '16', weekday: 290, weekend: 295 },
  { hour: '18', weekday: 420, weekend: 200 },
  { hour: '20', weekday: 180, weekend: 130 },
  { hour: '22', weekday: 100, weekend: 90 },
];

const seasonalDemand = [
  { season: 'Winter', registered: 2100, casual: 504 },
  { season: 'Spring', registered: 3900, casual: 1092 },
  { season: 'Summer', registered: 4300, casual: 1344 },
  { season: 'Fall', registered: 4600, casual: 1165 },
];

const temperatureTrend = [
  { temp: '0°C', rentals: 900 },
  { temp: '8°C', rentals: 1900 },
  { temp: '16°C', rentals: 3100 },
  { temp: '24°C', rentals: 4400 },
  { temp: '30°C', rentals: 5300 },
  { temp: '36°C', rentals: 4600 },
];

const hourlyConfig = {
  weekday: { label: 'Weekday', color: 'hsl(var(--chart-1))' },
  weekend: { label: 'Weekend', color: 'hsl(var(--chart-3))' },
} satisfies ChartConfig;

const seasonalConfig = {
  registered: { label: 'Registered', color: 'hsl(var(--chart-1))' },
  casual: { label: 'Casual', color: 'hsl(var(--chart-2))' },
} satisfies ChartConfig;

const temperatureConfig = {
  rentals: { label: 'Rentals', color: 'hsl(var(--chart-5))' },
} satisfies ChartConfig;

const visualizations = [
  {
    id: '1',
    title: 'Weekday Commutes vs. Weekend Leisure',
    insight:
      'Weekdays show sharp double peaks at 08:00 and 18:00 (commuting), while weekends spread into one broad midday hump — two very different rider behaviors on the same fleet.',
    render: () => (
      <ChartContainer config={hourlyConfig} className="h-[240px] w-full">
        <LineChart data={hourlyDemand}>
          <CartesianGrid vertical={false} strokeOpacity={0.2} />
          <XAxis dataKey="hour" tickLine={false} axisLine={false} fontSize={12} />
          <YAxis hide />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            type="monotone"
            dataKey="weekday"
            stroke="var(--color-weekday)"
            strokeWidth={3}
            dot={{ fill: 'var(--color-weekday)', stroke: 'hsl(var(--foreground))', strokeWidth: 1, r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="weekend"
            stroke="var(--color-weekend)"
            strokeWidth={3}
            strokeDasharray="6 4"
            dot={{ fill: 'var(--color-weekend)', stroke: 'hsl(var(--foreground))', strokeWidth: 1, r: 4 }}
          />
        </LineChart>
      </ChartContainer>
    ),
  },
  {
    id: '2',
    title: 'Registered Riders Drive Seasonal Growth',
    insight:
      'Registered (subscriber) rentals grow steadily every season and stay the majority share, while casual rentals nearly triple from Winter to Summer — a sign leisure riders are weather-sensitive, commuters aren\'t.',
    render: () => (
      <ChartContainer config={seasonalConfig} className="h-[240px] w-full">
        <BarChart data={seasonalDemand}>
          <CartesianGrid vertical={false} strokeOpacity={0.2} />
          <XAxis dataKey="season" tickLine={false} axisLine={false} fontSize={12} />
          <YAxis hide />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="registered" stackId="a" fill="var(--color-registered)" stroke="hsl(var(--foreground))" strokeWidth={1.5} radius={[0, 0, 4, 4]} />
          <Bar dataKey="casual" stackId="a" fill="var(--color-casual)" stroke="hsl(var(--foreground))" strokeWidth={1.5} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
    ),
  },
  {
    id: '3',
    title: 'The Sweet Spot: ~30°C',
    insight:
      'Rentals climb steadily with temperature and peak around 30°C, then dip — likely too hot to ride comfortably. That threshold is a useful signal for demand forecasting.',
    render: () => (
      <ChartContainer config={temperatureConfig} className="h-[240px] w-full">
        <AreaChart data={temperatureTrend}>
          <defs>
            <linearGradient id="tempFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-rentals)" stopOpacity={0.7} />
              <stop offset="95%" stopColor="var(--color-rentals)" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeOpacity={0.2} />
          <XAxis dataKey="temp" tickLine={false} axisLine={false} fontSize={12} />
          <YAxis hide />
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <ReferenceLine x="30°C" stroke="hsl(var(--foreground))" strokeDasharray="4 4" strokeOpacity={0.6} />
          <Area
            type="monotone"
            dataKey="rentals"
            stroke="var(--color-rentals)"
            strokeWidth={3}
            fill="url(#tempFill)"
            dot={{ fill: 'var(--color-rentals)', stroke: 'hsl(var(--foreground))', strokeWidth: 1, r: 4 }}
          />
        </AreaChart>
      </ChartContainer>
    ),
  },
];

export function DataVisualization() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="inline-block font-display text-4xl md:text-5xl font-bold mb-4 bg-accent text-accent-foreground border-2 border-foreground rounded-xl px-4 py-1 rotate-[1deg] shadow-[4px_4px_0_0_hsl(var(--foreground))]">
          Data Visualization Highlights
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mt-6">
          Key demand-driver insights from{' '}
          <span className="text-foreground font-semibold">
            Ride the Trend: Exploring Bike Rentals
          </span>{' '}
          — a summary view of the full analysis.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {visualizations.map((viz, index) => (
            <div
              key={viz.id}
              className={cn(
                'paper-card p-6 animate-in',
                index % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]',
                'hover:rotate-0',
                index === 2 ? 'md:col-span-2' : '',
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {viz.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {viz.insight}
              </p>
              {viz.render()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
