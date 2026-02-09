import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectPage = location.pathname.startsWith('/projects/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.split('#')[1];
    if (isProjectPage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blur bg-[#0a0a0c]/80 border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">
              <Logo className="w-8 h-8" />
            </div>
            <span className="text-sm font-bold tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-purple-400 uppercase font-mono">
              MOHANAD
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {isProjectPage ? (
              <Link to="/" className="flex items-center text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
              </Link>
            ) : (
              navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </button>
              ))
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0c] border-b border-white/10 animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-3 py-4 text-base font-medium text-zinc-400 hover:text-purple-400 hover:bg-white/5 rounded-md transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;