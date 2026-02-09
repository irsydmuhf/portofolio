import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { DataVisualization } from '@/components/data-visualization';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <DataVisualization />
      <Contact />
      <Footer />
    </main>
  );
}
