import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { profile } from '../data/profile';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Simulation)");
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-white/5 bg-zinc-50/50 dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Let's Connect</h2>
              <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
            </div>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              Open for technical consultations, backend architectural reviews, or fullstack engineering roles. Let's build something robust.
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

          <div className="bg-white dark:bg-[#161618] border border-zinc-200 dark:border-white/10 p-8 rounded-2xl shadow-sm dark:shadow-none">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Your Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-900/10 hover:shadow-none uppercase tracking-widest text-xs"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;