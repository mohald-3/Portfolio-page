
import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { profile } from '../data/profile';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Simulation)");
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
              <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
            </div>
            
            <p className="text-zinc-400 text-lg leading-relaxed">
              Open for technical consultations, backend architectural reviews, or senior engineering roles. Let's build something robust.
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
                    className="flex items-center gap-4 text-zinc-400 hover:text-white transition-all group"
                  >
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:border-purple-500/30 transition-all">
                      <Icon className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-zinc-500 uppercase">{social.platform}</span>
                      <span className="text-sm font-medium">{social.url.replace('mailto:', '').replace('https://', '')}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="bg-[#161618] border border-white/10 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase">Your Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all shadow-[0_10px_20px_-10px_rgba(139,92,246,0.3)] hover:shadow-none"
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
