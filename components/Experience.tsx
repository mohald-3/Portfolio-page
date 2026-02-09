import React from 'react';
import { profile } from '../data/profile';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Now matches the max-width and alignment of other sections */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>
          <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
        </div>

        {/* Timeline List - Adjusted max-width of content for better readability while keeping alignment */}
        <div className="space-y-12 max-w-4xl">
          {profile.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l border-white/10 group">
              {/* Timeline Dot */}
              <div className="absolute left-[-5.5px] top-2 w-[11px] h-[11px] rounded-full bg-zinc-900 border-2 border-white/20 group-hover:border-purple-500 group-hover:bg-purple-500 transition-all duration-300 shadow-[0_0_0_4px_rgba(10,10,12,1)] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {exp.title}
                </h3>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded border border-white/5 self-start md:self-center">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-purple-500/80 font-semibold mb-4 font-mono text-sm tracking-tight">
                {exp.company}
              </p>
              
              <p className="text-zinc-400 leading-relaxed text-lg max-w-2xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;