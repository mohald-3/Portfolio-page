import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-white/5 bg-zinc-50/50 dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Contact</h2>
            <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
          </div>
          
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
            If you would like to discuss a development role, a technical problem, or a project, feel free to get in touch.
          </p>

          <div className="flex flex-col gap-4">
            {profile.socials.map((social) => {
              const Icon = social.platform === 'Email' ? Mail :
                           social.platform === 'GitHub' ? Github :
                           social.platform === 'LinkedIn' ? Linkedin : null;
              if (!Icon || social.platform === 'CV') return null;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-white transition-all group"
                >
                  <div className="p-3 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl group-hover:border-purple-500/30 transition-all shadow-sm dark:shadow-none">
                    <Icon className="w-5 h-5 text-purple-600 dark:text-purple-500" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase">{social.platform}</span>
                    <span className="text-sm font-semibold">{social.url.replace('mailto:', '').replace('https://', '')}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
