import React from 'react';
import { profile } from '../data/profile';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Experience</h2>
          <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
        </div>

        <div className="space-y-12 max-w-4xl">
          {profile.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l border-zinc-200 dark:border-white/10 group">
              {/* Timeline Dot */}
              <div className="absolute left-[-5.5px] top-2 w-[11px] h-[11px] rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-white/20 group-hover:border-purple-500 group-hover:bg-purple-500 transition-all duration-300 shadow-[0_0_0_4px_#fafafa] dark:shadow-[0_0_0_4px_#0a0a0c] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {exp.title}
                </h3>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest bg-zinc-100 dark:bg-white/5 px-2 py-1 rounded border border-zinc-200 dark:border-white/5 self-start md:self-center transition-colors">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-purple-600 dark:text-purple-400 font-bold mb-4 font-mono text-sm tracking-tight uppercase">
                {exp.company}
              </p>
              
              {exp.techLine && (
                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500 mb-4 leading-relaxed">
                  {exp.techLine}
                </p>
              )}

              {exp.groups ? (
                <div className="space-y-5 max-w-2xl">
                  {exp.groups.map((group) => (
                    <div key={group.heading}>
                      <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 font-mono">
                        {group.heading}
                      </h4>
                      <ul className="space-y-1.5">
                        {group.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-2 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                            <span className="text-purple-500 shrink-0 mt-[3px]">–</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg max-w-2xl">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;