import { motion } from 'framer-motion';
import { Leaf, UtensilsCrossed, Users, Globe2, BookOpen } from 'lucide-react';

const PASSIONS = [
  {
    title: "Sustainability",
    icon: Leaf,
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    title: "Cooking",
    icon: UtensilsCrossed,
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    title: "Community Development",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "Environmental Awareness",
    icon: Globe2,
    color: "text-teal-600",
    bg: "bg-teal-50"
  },
  {
    title: "Continuous Learning",
    icon: BookOpen,
    color: "text-indigo-500",
    bg: "bg-indigo-50"
  }
];

export function Passions() {
  return (
    <section id="passions" className="py-32 px-6 sm:px-12 md:px-24">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-4">What I'm Passionate About</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PASSIONS.map((passion, index) => {
            const Icon = passion.icon;
            return (
              <motion.div
                key={passion.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="glass-card p-8 rounded-3xl flex flex-col items-start gap-6 group hover:bg-white transition-colors duration-300"
              >
                <div className={`p-4 rounded-2xl ${passion.bg} ${passion.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-display font-medium text-foreground">
                  {passion.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}