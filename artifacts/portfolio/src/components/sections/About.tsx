import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 md:px-24 relative">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-8 md:p-16 rounded-[2rem] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />
          
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-8">About Me</h2>
          
          <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-foreground leading-relaxed">
            I am Aladeojebi Olaoluwa Patrick, a passionate Sustainability Advocate who believes in creating meaningful impact through sustainable practices, effective communication, and strong human relationships. Beyond sustainability, I enjoy cooking, continuous learning, and connecting with people from diverse backgrounds. I strive to inspire positive change while contributing to healthier communities and a better future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}