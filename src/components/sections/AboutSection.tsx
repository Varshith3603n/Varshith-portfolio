import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import developerAvatar from '@/assets/pic.png';

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
              <Card className="glass-card relative overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={developerAvatar}
                      alt="Varshith Puppireddy - AI & ML Developer"
                      className="w-full h-96 object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                    
                    {/* Animated border effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 border-2 border-primary/50 rounded-lg">
                        <motion.div
                          className="absolute inset-0 border-2 border-primary rounded-lg"
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Name and designation at bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <h3 className="text-2xl font-bold mb-2">
                          <span className="bg-gradient-neon text-transparent bg-clip-text">
                            Varshith Puppireddy
                          </span>
                        </h3>
                        <p className="text-lg font-medium bg-gradient-neon text-transparent bg-clip-text">
                          AI & ML Developer
                        </p>
                      </div>
                    </div>
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
                <Card className="glass-card group cursor-pointer transform-gpu transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/25">
                  <CardContent className="p-6 relative overflow-hidden">
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 border border-primary/20 rounded-lg"
                      animate={{
                        scale: [1, 1.02, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    
                    <div className="flex items-start space-x-4 relative z-10">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <motion.div
                            animate={{
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <edu.icon className="h-6 w-6 text-primary-foreground" />
                          </motion.div>
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