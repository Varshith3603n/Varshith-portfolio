import { motion } from 'framer-motion';
import { Award, Code, BookOpen, Database, Trophy, Target, Users, Briefcase, TrendingUp, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const achievements = [
  {
    icon: Code,
    title: '600+ Problems Solved',
    description: 'Across LeetCode, Codeforces, and HackerRank platforms',
    color: 'from-blue-500 to-cyan-500',
    value: '600+',
    category: 'Competitive Programming'
  },
  {
    icon: Trophy,
    title: 'AeroHack\'25 Finalist',
    description: 'Recognized for optimized Rubik\'s Cube solver algorithm',
    color: 'from-amber-500 to-orange-500',
    value: 'Finalist',
    category: 'Hackathon'
  },
  {
    icon: Users,
    title: '100+ Students Mentored',
    description: 'Conducted DSA workshops and coding sessions',
    color: 'from-green-500 to-emerald-500',
    value: '100+',
    category: 'Mentorship'
  }
];

const experiences = [
  {
    title: 'Summer of AI Intern',
    company: 'Swecha',
    period: '2024',
    description: 'Worked on AI/ML projects and contributed to open-source initiatives.',
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-500',
    link: 'https://drive.google.com/file/d/1Qw5C26IWYmx2e1JIkqWdgy35sTnFfvyo/view?usp=drive_link',
  },
  {
    title: 'Social Media Marketing Intern',
    company: 'Sharify Adverts',
    period: '2023',
    description: 'Developed marketing strategies and managed social media campaigns.',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
    link: 'https://drive.google.com/file/d/1TRxn8NSyMAtq0D6VbjYYOfusCRzvxjJz/view?usp=drive_link', 
  }
];

const certificates = [
  {
    title: 'Generative AI for Modern Leaders: Strategies for Success',
    issuer: 'Udemy',
    year: '2024',
    icon: Award,
    color: 'from-red-500 to-orange-500',
    link: 'https://drive.google.com/file/d/1jlkbaGM6smrouLUJWRYeIcbhUalEUgnC/view?usp=drive_link', 
  },
  {
    title: 'Tech Tussle – The Clash of Coders',
    issuer: 'Coding Bridge BVRIT',
    year: '2024',
    icon: Trophy,
    color: 'from-amber-500 to-orange-500',
    link: 'https://drive.google.com/file/d/1YKM8HNG-Ulv_UQjUT1zVzP0664bQheoQ/view?usp=sharing', 
  },
  {
    title: 'Adobe Hackathon Participation',
    issuer: 'Adobe',
    year: '2024',
    icon: Code,
    color: 'from-blue-500 to-purple-500',
    link: 'https://drive.google.com/file/d/1utfxvciYFiNDWf1pDJ2vEas-cMC35wd9/view?usp=drive_link',
  },
  {
    title: '5-day Frontend Development Workshop',
    issuer: 'TASK',
    year: '2024',
    icon: BookOpen,
    color: 'from-indigo-500 to-purple-500',
    link: 'https://drive.google.com/file/d/1ZVXWxHbC-910gEHpkmDAHTFS0IbAlEQU/view?usp=drive_link', 
  },
  {
    title: '3-day Oracle Database SQL Workshop',
    issuer: 'Oracle Academy',
    year: '2024',
    icon: Database,
    color: 'from-pink-500 to-rose-500',
    link: 'https://drive.google.com/file/d/1VYFRDb_RoBTWupR9xxme11u3FI40zgH7/view?usp=drive_link', 
  }
];


export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-gradient-cyber">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones that showcase dedication to learning and professional growth
          </p>
        </motion.div>

        {/* Key Achievements */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover-float group h-full">
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Value */}
                  <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                    {achievement.value}
                  </div>

                  {/* Category */}
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    {achievement.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Professional <span className="text-gradient-neon">Experience</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card 
                  className="glass-card group hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  onClick={() => window.open(exp.link, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <exp.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates & Training */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Certificates & <span className="text-gradient-holographic">Training</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="perspective-1000"
              >
                <Card 
                  className="glass-card group hover:border-primary/30 transition-all duration-300 h-full cursor-pointer"
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <cert.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-primary font-medium text-sm">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mb-2">{cert.year}</p>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors mx-auto" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="glass-card border-primary/30 glow-primary">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gradient-neon mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Internships</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient-cyber mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Certificates</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient-holographic mb-2">1</div>
                  <div className="text-sm text-muted-foreground">Hackathon Finalist</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient-neon mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Students Mentored</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}