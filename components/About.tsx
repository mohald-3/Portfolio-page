
import React from 'react';
import { profile } from '../data/profile';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 sticky top-24">
            <h2 className="text-3xl font-bold text-white mb-4">About</h2>
            <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
            <p className="mt-6 text-zinc-400 text-lg">
              Serious focus on reliability, performance, and engineering excellence.
            </p>
          </div>
          
          <div className="md:col-span-8">
            <div className="space-y-6">
              {profile.aboutBullets.map((bullet, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-purple-500/60 group-hover:text-purple-500 transition-colors" />
                  </div>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
