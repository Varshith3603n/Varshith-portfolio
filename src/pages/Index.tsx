import { Navbar } from '@/components/ui/navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/ui/footer';

const Index = () => {
  return (

<div className="min-h-screen bg-background relative">
      {/* Dynamic background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0">
            {/* Primary orb */}
            <div className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/30 to-transparent opacity-20 blur-[120px] animate-glow-pulse" />
            
            {/* Secondary orb */}
            <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-l from-secondary/30 to-transparent opacity-20 blur-[120px] animate-glow-pulse delay-1000" />
            
            {/* Accent orb */}
            <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent/20 to-transparent opacity-20 blur-[100px] animate-glow-pulse delay-500" />
          </div>

          {/* Cyberpunk grid lines */}
          <div className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--primary)/0.2) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--primary)/0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              mask: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
            }}
          />

          {/* Diagonal laser lines */}
          <div className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `
                linear-gradient(45deg, hsl(var(--primary)/0.3) 10%, transparent 10%),
                linear-gradient(-45deg, hsl(var(--secondary)/0.3) 10%, transparent 10%)
              `,
              backgroundSize: '60px 60px',
              mask: 'radial-gradient(circle at 50% 50%, black, transparent 70%)'
            }}
          />

          {/* Hexagon pattern */}
          <div className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20V40L30 55L5 40V20L30 5Z' fill='none' stroke='%2300ffff' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
              mask: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
            }}
          />
        </div>

        {/* Scanline effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />

        {/* Color tint overlay */}
        <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

        {/* Vignette effect */}
        <div className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(0,0,0,0.4))'
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
