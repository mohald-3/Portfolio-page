import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <Logo className="w-full h-full opacity-80" />
          </div>
          <span className="text-sm font-mono text-zinc-500">&copy; {new Date().getFullYear()} Mohanad Al-Daghestani. Engineering Excellence.</span>
        </div>
        
        {/* Secondary links removed as requested */}
      </div>
    </footer>
  );
};

export default Footer;