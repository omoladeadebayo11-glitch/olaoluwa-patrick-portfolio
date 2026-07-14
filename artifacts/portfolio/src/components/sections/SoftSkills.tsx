import { motion } from 'framer-motion';

const SKILLS = [
  "Excellent Communication Skills",
  "Interpersonal Skills",
  "Leadership",
  "Teamwork",
  "Problem Solving",
  "Critical Thinking",
  "Adaptability",
  "Time Management",
  "Emotional Intelligence",
  "Public Speaking"
];

export function SoftSkills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-12 md:px-24 bg-white/30 backdrop-blur-md border-y border-white/40">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">Soft Skills</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="px-6 py-4 bg-white border border-gray-100 shadow-sm rounded-2xl text-foreground font-medium hover:shadow-md hover:border-primary/20 transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}