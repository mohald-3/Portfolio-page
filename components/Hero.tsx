import React from 'react';
import { Github, Linkedin, FileText, ChevronRight } from 'lucide-react';
import { profile } from '../data/profile';
import Logo from './Logo';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Logo Brand Mark */}
          <div className="relative group">
            <div className="absolute -inset-10 bg-purple-600/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_30px_rgba(139,92,246,0.4)]">
              <Logo className="w-32 h-32 md:w-40 md:h-40" />
            </div>
          </div>

          <div className="space-y-6 max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
              {profile.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-purple-500 font-mono tracking-[0.15em] uppercase">
              {profile.role}
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              {profile.summary}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button
              onClick={scrollToProjects}
              className="group flex items-center px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-purple-400/20"
            >
              View Projects
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-3">
              {profile.socials.map((social) => {
                const Icon = social.platform === 'GitHub' ? Github : 
                             social.platform === 'LinkedIn' ? Linkedin : 
                             social.platform === 'CV' ? FileText : null;
                if (!Icon) return null;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 hover:border-purple-500/30"
                    title={social.platform}
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