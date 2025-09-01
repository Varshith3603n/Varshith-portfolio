import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import developerAvatar from '@/assets/pic.jpg';

const education = [
  {
    degree: 'B.Tech CSE (AI & ML)',
    institution: 'B V Raju Institute of Technology',
    period: '2022 - 2026',
    cgpa: '8.81',
    icon: GraduationCap,
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Narayana Junior College',
    period: '2020 - 2022',
    cgpa: '9.85',
    icon: Award,
  },
  {
    degree: 'SSC',
    institution: 'The Legend High School',
    period: '2020',
    cgpa: '10.0',
    icon: Calendar,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient-cyber">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about leveraging AI and Machine Learning to solve real-world problems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Glowing Border */}
              <div className="absolute inset-0 bg-gradient-holographic rounded-2xl blur-xl opacity-50 animate-pulse-glow" />
              
              {/* Profile Card */}
              <Card className="glass-card relative overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={developerAvatar}
                      alt="Varshith Puppireddy - AI & ML Developer"
                      className="w-full h-96 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                </CardContent>
              </Card>
            </div>

          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold">Education Journey</h3>
              <p className="text-muted-foreground">
                Building a strong foundation in Computer Science and AI/ML
              </p>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="glass-card hover-float group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-neon flex items-center justify-center group-hover:scale-110 transition-transform">
                          <edu.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {edu.degree}
                          </h4>
                          <span className="text-primary font-semibold">
                            CGPA: {edu.cgpa}
                          </span>
                        </div>
                        <p className="text-muted-foreground font-medium mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {edu.period}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Timeline Line */}
                {index < education.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-6 bg-gradient-to-b from-primary to-transparent opacity-50" />
                )}
              </motion.div>
            ))}

            {/* Achievement Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card className="glass-card border-primary/30 glow-primary">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold mb-2 text-gradient-neon">
                    Academic Excellence
                  </h4>
                  <p className="text-muted-foreground">
                    Consistently maintaining high academic performance while actively 
                    participating in coding competitions and practical projects
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}