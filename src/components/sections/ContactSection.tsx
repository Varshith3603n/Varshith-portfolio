import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'puppireddyvarshith@gmail.com',
    href: 'mailto:puppireddyvarshith@gmail.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/MrVarshu',
    href: 'https://github.com/MrVarshu',
    color: 'from-gray-500 to-gray-700'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Varshith Puppireddy',
    href: 'https://linkedin.com/in/varshith-puppireddy-85a3a0259',
    color: 'from-blue-600 to-blue-800'
  }
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/MrVarshu', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/varshith-puppireddy-85a3a0259', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:puppireddyvarshith@gmail.com', label: 'Email' }
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    emailjs.init("C-1qpSJenGcjVGuNE"); // Replace this with your actual public key
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.target as HTMLFormElement;
    
    try {
      await emailjs.send(
        "service_6js4c74", // Replace with your EmailJS service ID
        "template_oufe6lh", // Replace with your EmailJS template ID
        {
          name: form.name.valueOf,
          email: form.email.value,
          subject: form.subject.value,
          message: form.message.value
        }
      );
      
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient-neon">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborations, or just have a tech conversation? 
            I'd love to hear from you!
          </p>
          
          {/* <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mt-8 max-w-2xl mx-auto">
            <p className="text-amber-600 dark:text-amber-400 text-sm text-center">
              📧 To enable contact form functionality, connect your project to Supabase for backend services.
            </p>
          </div> */}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient-cyber">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're a recruiter looking for fresh talent, a fellow developer 
                interested in collaboration, or someone who wants to discuss AI/ML projects, 
                I'm always open to meaningful conversations.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => window.open(info.href, '_blank')}
                >
                  <Card className="glass-card hover-glow-primary">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold group-hover:text-primary transition-colors">
                            {info.label}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="glass"
                      size="icon"
                      onClick={() => window.open(social.href, '_blank')}
                      className="hover-glow-primary"
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-primary/30 glow-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient-holographic">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="glass-card border-border focus:border-primary"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="glass-card border-border focus:border-primary"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="glass-card border-border focus:border-primary"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      rows={5}
                      className="glass-card border-border focus:border-primary resize-none"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>

                {/* Quick Contact Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-6 p-4 glass-card border border-primary/20"
                >
                  {submitStatus === 'success' ? (
                    <p className="text-sm text-green-500 text-center font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  ) : submitStatus === 'error' ? (
                    <p className="text-sm text-red-500 text-center font-medium">
                      Failed to send message. Please try again or contact me directly via email.
                    </p>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center">
                      <span className="text-primary font-medium">Quick Response:</span> I typically 
                      respond within 24 hours. For urgent matters, feel free to reach out directly 
                      via email or LinkedIn.
                    </p>
                  )}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-neon">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's turn ideas into reality with cutting-edge AI and full-stack solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => window.open('mailto:puppireddyvarshith@gmail.com', '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Button>
                <Button
                  variant="neon"
                  size="lg"
                  onClick={() => window.open('https://linkedin.com/in/varshith-puppireddy-85a3a0259', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}