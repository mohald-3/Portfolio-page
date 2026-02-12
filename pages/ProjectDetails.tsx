import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  Info, 
  Layers, 
  BookOpen, 
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MousePointer2
} from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Combine thumbnail and gallery for unified browsing
  const allImages = project ? [project.thumbnail, ...(project.gallery || [])] : [];

  useEffect(() => {
    if (!project) {
      navigate('/');
    } else {
      document.title = `${project.title} | Project Details`;
    }
  }, [project, navigate]);

  // Handle Keyboard Navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null) return;

    if (e.key === 'Escape') setLightboxIndex(null);
    if (e.key === 'ArrowRight') {
      setLightboxIndex((prev) => (prev !== null && prev < allImages.length - 1 ? prev + 1 : prev));
    }
    if (e.key === 'ArrowLeft') {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
    }
  }, [lightboxIndex, allImages.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown, lightboxIndex]);

  if (!project) return null;

  return (
    <div className="min-h-screen pb-20 animate-in fade-in duration-500 bg-[#0a0a0c]">
      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-300"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 p-3 text-zinc-400 hover:text-white transition-colors z-[110]"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Controls */}
          <div className="absolute inset-x-4 md:inset-x-10 flex justify-between items-center pointer-events-none z-[105]">
            <button 
              className={`p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all pointer-events-auto ${lightboxIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
              onClick={(e) => { e.stopPropagation(); if(lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1); }}
              disabled={lightboxIndex === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              className={`p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all pointer-events-auto ${lightboxIndex === allImages.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
              onClick={(e) => { e.stopPropagation(); if(lightboxIndex < allImages.length - 1) setLightboxIndex(lightboxIndex + 1); }}
              disabled={lightboxIndex === allImages.length - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image View */}
          <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center">
            <img 
              src={allImages[lightboxIndex]} 
              alt={`Gallery view ${lightboxIndex + 1}`} 
              className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-6 text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">
              File {lightboxIndex + 1} of {allImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Hero Area */}
      <div className="relative pt-12 pb-32 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.thumbnail} 
            alt="" 
            className="w-full h-full object-cover opacity-20 blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/80 via-[#0a0a0c] to-[#0a0a0c]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-purple-400 transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Engineering
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-1 text-[10px] font-bold tracking-widest uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded font-mono">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              {project.repositories ? (
                project.repositories.map((repo, idx) => (
                  <a
                    key={idx}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 transition-all font-semibold"
                  >
                    <Github className="w-5 h-5" /> {repo.label}
                  </a>
                ))
              ) : project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 transition-all font-semibold"
                >
                  <Github className="w-5 h-5" /> Source Code
                </a>
              )}
              
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-all font-semibold shadow-lg shadow-purple-900/20"
                >
                  <ExternalLink className="w-5 h-5" /> View Deployment
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        {/* Overview & Main Preview */}
        <section className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="inline-flex p-3 bg-purple-900/20 rounded-xl border border-purple-500/20">
                <Info className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-mono">Project Brief</h2>
              <div className="h-px w-12 bg-purple-500/50"></div>
            </div>
          </div>
          <div className="md:col-span-8 space-y-8">
            <div 
              className="relative group cursor-zoom-in rounded-3xl overflow-hidden border border-white/10 ring-1 ring-white/5"
              onClick={() => setLightboxIndex(0)}
            >
              <img src={project.thumbnail} alt={project.title} className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                  <Maximize2 className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed whitespace-pre-wrap">
              {project.description}
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="inline-flex p-3 bg-purple-900/20 rounded-xl border border-purple-500/20">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-mono">Key Features</h2>
              <div className="h-px w-12 bg-purple-500/50"></div>
            </div>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-4">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl text-zinc-300 hover:bg-white/[0.07] transition-colors group">
                  <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform"></div>
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Visual Walkthrough / Horizontal Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="space-y-8">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <div className="space-y-4">
                  <div className="inline-flex p-3 bg-purple-900/20 rounded-xl border border-purple-500/20">
                    <ImageIcon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider font-mono">Gallery</h2>
                  <div className="h-px w-12 bg-purple-500/50"></div>
                  <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono uppercase tracking-widest pt-2">
                    <MousePointer2 className="w-3 h-3" /> Drag to explore
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="relative group/gallery">
              <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-8 snap-x mandatory no-scrollbar px-4 sm:px-0"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {project.gallery.map((image, i) => (
                  <div 
                    key={i} 
                    className="flex-none w-[85%] md:w-[70%] lg:w-[60%] snap-center"
                  >
                    <div 
                      className="relative group cursor-zoom-in rounded-3xl overflow-hidden border border-white/10 bg-[#161618] ring-1 ring-white/5 transition-all duration-500 hover:border-purple-500/30"
                      onClick={() => setLightboxIndex(i + 1)}
                    >
                      {/* Image container with adaptive max-height */}
                      <div className="relative overflow-hidden flex items-center justify-center bg-zinc-900/50">
                        <img 
                          src={image} 
                          alt={`${project.title} Preview ${i + 1}`} 
                          className="w-full h-auto max-h-[70vh] object-contain transition-transform duration-700 group-hover:scale-[1.02] opacity-90 group-hover:opacity-100 shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                            <Maximize2 className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Indicators Overlay (Optional Desktop Hints) */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:group-hover/gallery:flex">
                 <button 
                  onClick={() => scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
                  className="p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-purple-600 transition-colors"
                 >
                   <ChevronLeft className="w-6 h-6" />
                 </button>
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:group-hover/gallery:flex">
                 <button 
                  onClick={() => scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
                  className="p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-purple-600 transition-colors"
                 >
                   <ChevronRight className="w-6 h-6" />
                 </button>
              </div>
            </div>
          </section>
        )}

        {/* Architecture */}
        <section className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="inline-flex p-3 bg-purple-900/20 rounded-xl border border-purple-500/20">
                <Layers className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-mono">Architecture</h2>
              <div className="h-px w-12 bg-purple-500/50"></div>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="p-8 bg-purple-600/5 border border-purple-500/20 rounded-3xl">
              <p className="text-zinc-300 leading-relaxed text-lg italic">
                {project.architecture.description}
              </p>
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="inline-flex p-3 bg-purple-900/20 rounded-xl border border-purple-500/20">
                <ShieldCheck className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-mono">Challenges</h2>
              <div className="h-px w-12 bg-purple-500/50"></div>
            </div>
          </div>
          <div className="md:col-span-8 space-y-8">
            {project.challenges.map((c, i) => (
              <div key={i} className="space-y-5 p-8 bg-[#161618] border border-white/10 rounded-3xl hover:border-purple-500/30 transition-all">
                <div>
                  <h4 className="text-purple-400 font-bold text-xs uppercase tracking-[0.2em] mb-3 font-mono">The Problem</h4>
                  <p className="text-white text-lg font-medium leading-tight">{c.problem}</p>
                </div>
                <div className="h-px w-full bg-white/5"></div>
                <div>
                  <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-[0.2em] mb-3 font-mono">Solution</h4>
                  <p className="text-zinc-400 leading-relaxed">{c.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="inline-flex p-3 bg-purple-900/20 rounded-xl border border-purple-500/20">
                <BookOpen className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-mono">Retrospective</h2>
              <div className="h-px w-12 bg-purple-500/50"></div>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="flex flex-wrap gap-4">
              {project.lessons.map((lesson, i) => (
                <div key={i} className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-zinc-300 text-sm hover:border-purple-500/20 transition-all">
                  {lesson}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="pt-24 border-t border-white/5 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center px-10 py-5 bg-[#161618] hover:bg-[#1c1c1f] text-white rounded-2xl font-bold transition-all border border-white/10 hover:border-purple-500/30 group"
          >
            <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" /> Return to Engineering HQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;