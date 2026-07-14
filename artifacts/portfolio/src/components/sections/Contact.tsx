import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const CONTACT_INFO = {
  email: 'aladeojebio@gmail.com',
  phone: '+234 701 927 2107',
  location: 'Lagos, Nigeria'
};

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 sm:px-12 md:px-24 bg-primary text-primary-foreground relative overflow-hidden rounded-t-[3rem] mt-12">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold mb-6 leading-tight">
            Let's collaborate
          </h2>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-md mx-auto md:mx-0">
            Whether you have a project in mind, want to discuss an idea, or simply say hello.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 w-full md:w-auto"
        >
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-6 p-6 rounded-3xl bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 group">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-primary-foreground/60 mb-1">Email</div>
              <div className="text-xl font-medium">{CONTACT_INFO.email}</div>
            </div>
          </a>

          <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-6 p-6 rounded-3xl bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 group">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-primary-foreground/60 mb-1">Phone</div>
              <div className="text-xl font-medium">{CONTACT_INFO.phone}</div>
            </div>
          </a>

          <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-primary-foreground/60 mb-1">Location</div>
              <div className="text-xl font-medium">{CONTACT_INFO.location}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}