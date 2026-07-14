import { motion, type Variants } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

export function MissionVision() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="mission-vision" className="py-24 px-6 sm:px-12 md:px-24">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          <motion.div variants={item} className="glass-card p-10 md:p-12 rounded-[2rem] group hover:-translate-y-2 transition-transform duration-500">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Target className="w-6 h-6 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To promote sustainable living, inspire positive environmental action, and use effective communication to influence meaningful change in individuals and communities.
            </p>
          </motion.div>

          <motion.div variants={item} className="glass-card p-10 md:p-12 rounded-[2rem] group hover:-translate-y-2 transition-transform duration-500">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
              <Lightbulb className="w-6 h-6 text-accent group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become a recognized sustainability professional dedicated to building a healthier, greener, and more sustainable future for generations to come.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}