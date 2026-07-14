import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';
import profilePhoto from '@/assets/profile.jpg';

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-20 pb-16 px-6 sm:px-12 md:px-24"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-10 group"
        >
          {/* Decorative ring */}
          <div className="absolute inset-[-8px] rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-xl flex items-center justify-center overflow-hidden">
            <img
              src={profilePhoto}
              alt="Aladeojebi Olaoluwa Patrick"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm font-medium text-primary">
            <Leaf className="w-4 h-4" />
            <span>Sustainability Advocate & Content Creator</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold tracking-tight text-foreground mb-6 leading-[1.1]"
        >
          Aladeojebi Olaoluwa <span className="text-primary block sm:inline">Patrick</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-12"
        >
          Passionate about sustainability, people, communication, and creating positive impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
          >
            Contact Me
          </a>
          <a 
            href="#about" 
            className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-sm text-foreground border border-black/5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white hover:shadow-md transition-all group"
          >
            View Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}