import React from 'react';
import { Github, Linkedin, FileText, ChevronRight } from 'lucide-react';
import { profile } from '../data/profile';
import Logo from './Logo';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Using only the first name as requested
  const firstName = profile.name.split(' ')[0].toUpperCase();

  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Brand Mark */}
          <div className="relative group">
            <div className="absolute -inset-8 bg-purple-600/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative transition-all duration-500 group-hover:scale-105">
              <Logo className="w-20 h-20 md:w-28 md:h-28" />
            </div>
          </div>

          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-none uppercase select-none">
              {firstName}
            </h1>
            <div className="h-1 w-12 bg-purple-600 mx-auto rounded-full"></div>
            
            <h2 className="text-lg md:text-xl font-bold text-zinc-500 font-mono tracking-[0.3em] uppercase pt-2">
              {profile.role}
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              {profile.summary}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <button
              onClick={scrollToProjects}
              className="group flex items-center px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-purple-400/20"
            >
              View Projects
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-4">
              {profile.socials.map((social) => {
                const Icon = social.platform === 'GitHub' ? Github : 
                             social.platform === 'LinkedIn' ? Linkedin : 
                             social.platform === 'CV' ? FileText : null;
                if (!Icon) return null;
                
                const isCV = social.platform === 'CV';
                
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target={isCV ? undefined : "_blank"}
                    rel={isCV ? undefined : "noopener noreferrer"}
                    download={isCV ? "Mohanad_Al-Daghestani_CV.pdf" : undefined}
                    className="p-4 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 hover:border-purple-500/30"
                    title={isCV ? "Download Resume" : social.platform}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;