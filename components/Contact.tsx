import React from 'react';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { profile } from '../data/profile';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-white/5 bg-zinc-50/50 dark:bg-white/[0.01]"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Let’s Connect
          </h2>
          <div className="w-12 h-1 bg-purple-600 rounded-full" />
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
          Open for fullstack roles, backend engineering, and technical collaboration.
          Feel free to reach out through any of the platforms below.
        </p>

        <div className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all group flex-1 min-w-[280px]">
          {profile.socials.map((social) => {
            const Icon =
              social.platform === 'Email' ? Mail :
              social.platform === 'GitHub' ? Github :
              social.platform === 'LinkedIn' ? Linkedin :
              social.platform === 'CV' ? FileText :
              null;

            if (!Icon) return null;

            return (
              <a
                key={social.platform}
                href={social.url}
                target={social.platform !== 'Email' ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all group"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 dark:bg-purple-900/20 border border-purple-500/20">
                  <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>

                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    {social.platform}
                  </span>
                  <span className="text-sm font-semibold text-zinc-900 dark:text-white break-all">
                    {social.url.replace('mailto:', '').replace('https://', '')}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
