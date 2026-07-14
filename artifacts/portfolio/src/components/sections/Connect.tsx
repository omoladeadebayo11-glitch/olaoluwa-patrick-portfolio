import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { SiInstagram, SiTiktok, SiX, SiFacebook } from 'react-icons/si';

const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://www.instagram.com/olaoluwa4t?igsh=ZWtoN2Z3ODVhbHgz', icon: SiInstagram, color: 'group-hover:text-[#E1306C]' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@kairo_s1?_r=1&_t=ZS-980wQTSsH3d', icon: SiTiktok, color: 'group-hover:text-black dark:group-hover:text-white' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/olaoluwa-aladeojebi-251342279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: Linkedin, color: 'group-hover:text-[#0A66C2]' },
  { name: 'X (Twitter)', url: 'https://x.com/AladeojebiP', icon: SiX, color: 'group-hover:text-black dark:group-hover:text-white' },
  { name: 'Facebook', url: 'https://www.facebook.com/share/1EXBjwVviL/', icon: SiFacebook, color: 'group-hover:text-[#1877F2]' },
];

export function Connect() {
  return (
    <section id="connect" className="py-24 px-6 sm:px-12 md:px-24">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">Find me across the digital ecosystem.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {SOCIAL_LINKS.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  type: "spring", stiffness: 200, damping: 15
                }}
                className="flex items-center gap-3 px-6 py-4 glass-card rounded-2xl group hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className={`w-5 h-5 text-muted-foreground transition-colors duration-300 ${link.color}`} />
                <span className="font-medium text-foreground">{link.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}