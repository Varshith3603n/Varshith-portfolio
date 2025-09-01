import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code, Rocket } from 'lucide-react';
import { Button } from './button';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' }
];

const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/MrVarshu', 
    label: 'GitHub',
    color: 'hover:text-gray-400'
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com/in/varshith-puppireddy-85a3a0259', 
    label: 'LinkedIn',
    color: 'hover:text-blue-400'
  },
  { 
    icon: Mail, 
    href: 'mailto:puppireddyvarshith@gmail.com', 
    label: 'Email',
    color: 'hover:text-green-400'
  }
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-background to-muted/20 border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary))_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <h3 className="text-3xl font-bold">
                  <span className="text-gradient-neon">Varshith Puppireddy</span>
                </h3>
              </motion.div>

              {/* Tagline */}
              <p className="text-lg text-muted-foreground max-w-md">
                AI & ML Developer crafting intelligent solutions for tomorrow's challenges
              </p>

              {/* Quick Stats */}
              <div className="flex space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">600+</div>
                  <div className="text-xs text-muted-foreground">Problems Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-xs text-muted-foreground">Students Mentored</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">Major Projects</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Open to opportunities, collaborations, and tech conversations
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="glass"
                      size="icon"
                      onClick={() => window.open(social.href, '_blank')}
                      className={`hover-glow-primary ${social.color}`}
                    >
                      <social.icon className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>

              {/* Contact CTA */}
              <Button
                variant="neon"
                size="sm"
                onClick={() => window.open('mailto:puppireddyvarshith@gmail.com', '_blank')}
                className="w-full"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© 2025 Varshith Puppireddy</span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>Back to Top</span>
            <Rocket className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>

      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </footer>
  );
}