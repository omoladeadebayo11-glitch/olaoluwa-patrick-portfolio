import { FloatingShapes } from '@/components/FloatingShapes';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { MissionVision } from '@/components/sections/MissionVision';
import { SoftSkills } from '@/components/sections/SoftSkills';
import { Passions } from '@/components/sections/Passions';
import { Connect } from '@/components/sections/Connect';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Portfolio() {
  return (
    <main className="w-full min-h-screen relative overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <FloatingShapes />
      <Hero />
      <About />
      <MissionVision />
      <SoftSkills />
      <Passions />
      <Connect />
      <Contact />
      <Footer />
    </main>
  );
}