import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Backend & Frameworks',
    skills: ['Java', 'Python', 'Flask', 'React.js', 'Node.js'],
    color: '#00ffff',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Databases',
    skills: ['MySQL'],
    color: '#a855f7',
    gradient: 'from-purple-500 to-violet-500'
  },
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python','C', 'SQL', 'HTML','CSS', 'JavaScript'],
    color: '#ec4899',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'VS Code', 'GitHub Copilot','Jupyter'],
    color: '#22d3ee',
    gradient: 'from-cyan-400 to-teal-400'
  },
  {
    title: 'AI & Machine Learning',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Neural Networks'],
    color: '#f59e0b',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Computer Science Fundamentals',
    skills: ['DSA', 'OOP', 'Computer Networks', 'Operating Systems', 'DBMS', 'System Design'],
    color: '#10b981',
    gradient: 'from-emerald-500 to-green-500'
  }
];

const featured3DSkills = [
  { name: 'Python', color: '#3776ab' },
  { name: 'Java', color: '#f89820' },
  { name: 'Machine Learning', color: '#ff6b6b' },
  { name: 'Deep Learning', color: '#4ecdc4' },
  { name: 'React', color: '#61dafb' },
  { name: 'Node.js', color: '#68a063' },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient-holographic">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building cutting-edge AI and web applications
          </p>
        </motion.div>

        {/* Featured Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featured3DSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-sm group-hover:shadow-glow-primary transition-all duration-300"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.name.slice(0, 2).toUpperCase()}
                </div>
                <p className="text-sm font-medium group-hover:text-primary transition-colors">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card group h-full relative transform-gpu transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
                <CardContent className="p-6 relative">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`} />
                  
                  {/* Category Header */}
                  <div className="relative mb-6">
                    <div className={`w-full h-1 bg-gradient-to-r ${category.gradient} rounded-full mb-4 group-hover:shadow-glow-primary transition-all duration-300`} />
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 rounded-full text-sm font-medium cursor-default relative group/skill"
                      >
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 opacity-50 group-hover/skill:opacity-100 transition-opacity duration-300" />
                        <span className="absolute inset-0 rounded-full border border-primary/20 group-hover/skill:border-primary/40 transition-colors duration-300" />
                        <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 group-hover/skill:from-primary group-hover/skill:to-primary/80 transition-all duration-300">
                          {skill}
                        </span>
                      </motion.span>
                    ))}
                  </div>

                  {/* Skill Count */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-primary">{category.skills.length}</span> technologies
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                Proficiency Highlights
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary-foreground">AI</span>
                  </div>
                  <h4 className="font-semibold">Artificial Intelligence</h4>
                  <p className="text-sm text-muted-foreground">
                    Machine Learning, Deep Learning, NLP
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-cyber rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary-foreground">FS</span>
                  </div>
                  <h4 className="font-semibold">Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground">
                    MERN Stack, React.js, Node.js
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-holographic rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary-foreground">CP</span>
                  </div>
                  <h4 className="font-semibold">Competitive Programming</h4>
                  <p className="text-sm text-muted-foreground">
                    600+ Problems Solved
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}