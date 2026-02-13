import React, { useEffect, useCallback, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  ShieldCheck, 
  Layers, 
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

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages = project?.gallery ?? [];

  useEffect(() => {
    if (!project) {
      navigate('/');
    } else {
      document.title = `${project.title} | Case Study`;
    }
  }, [project, navigate]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === 'Escape') setLightboxIndex(null);
    if (e.key === 'ArrowRight') {
      setLightboxIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : prev));
    }
    if (e.key === 'ArrowLeft') {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
    }
  }, [lightboxIndex, galleryImages.length]);

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
    <div className="min-h-screen pb-20 animate-in fade-in duration-500 bg-[#fafafa] dark:bg-[#0a0a0c] transition-colors duration-300">
      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-300"
          onClick={() => setLightboxIndex(null)}
        >
          <button className="absolute top-6 right-6 p-3 text-zinc-400 hover:text-white transition-colors z-[110]" onClick={() => setLightboxIndex(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="absolute inset-x-4 md:inset-x-10 flex justify-between items-center pointer-events-none z-[105]">
            <button className={`p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all pointer-events-auto ${lightboxIndex === 0 ? 'opacity-20' : 'opacity-100'}`} onClick={(e) => { e.stopPropagation(); if(lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1); }} disabled={lightboxIndex === 0}>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className={`p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all pointer-events-auto ${lightboxIndex === galleryImages.length - 1 ? 'opacity-20' : 'opacity-100'}`} onClick={(e) => { e.stopPropagation(); if(lightboxIndex < galleryImages.length - 1) setLightboxIndex(lightboxIndex + 1); }} disabled={lightboxIndex === galleryImages.length - 1}>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="relative flex items-center justify-center min-w-0 min-h-0 p-6">
            <img
              src={galleryImages[lightboxIndex]}
              alt=""
              className="block max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Hero Header */}
      <div className="relative pt-24 pb-32 px-6 lg:px-12 border-b border-zinc-200 dark:border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={project.thumbnail} alt="" className="w-full h-full object-cover opacity-5 dark:opacity-10 blur-xl scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fafafa] dark:via-[#0a0a0c] to-[#fafafa] dark:to-[#0a0a0c]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-12 group">
            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to projects
          </Link>

          <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-1 text-[9px] font-bold tracking-widest uppercase bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 rounded font-mono">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase leading-none">{project.title}</h1>
            <div className="h-1 w-12 bg-purple-600 rounded-full"></div>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">{project.summary}</p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              {project.repositories?.map((repo, idx) => (
                <a key={idx} href={repo.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-lg text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-white/10 transition-all font-bold text-xs uppercase tracking-widest font-mono">
                  <Github className="w-4 h-4" /> {repo.label}
                </a>
              )) || (project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-lg text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-white/10 transition-all font-bold text-xs uppercase tracking-widest font-mono">
                  <Github className="w-4 h-4" /> Source
                </a>
              ))}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-all font-bold text-xs uppercase tracking-widest shadow-xl shadow-purple-900/10 font-mono">
                  <ExternalLink className="w-4 h-4" /> Deployment
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 space-y-32">
  {/* Gallery Section */}
  {galleryImages.length > 0 && (
    <section className="grid md:grid-cols-12 gap-12 items-start">
      {/* Left rail */}
      <aside className="md:col-span-4 sticky top-24">
        <div className="inline-flex p-3 bg-purple-500/10 dark:bg-purple-900/20 rounded-xl border border-purple-500/20 mb-6">
          <ImageIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        </div>

        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Gallery</h2>
        <div className="w-12 h-1 bg-purple-600 rounded-full" />

        <div className="mt-8 flex items-center gap-3 text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
          <MousePointer2 className="w-3 h-3 animate-pulse" />
          Horizontal scroll
        </div>
      </aside>

      {/* Gallery rail */}
      <div className="md:col-span-8">
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 no-scrollbar -mx-4 px-4 h-[360px] md:h-[420px] items-center snap-x snap-mandatory"
        >
          {galleryImages.map((image, i) => (
            <button
              key={image}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="flex-none h-full w-[92vw] md:w-[650px] snap-start group cursor-zoom-in text-left"
              aria-label={`Open gallery image ${i + 1}`}
            >
              <figure className="h-full relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900 shadow-lg transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Blurred backdrop to avoid harsh letterboxing */}
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover blur-2xl scale-110 opacity-25"
                  loading="lazy"
                />

                {/* Foreground image (no crop) */}
                <img
                  src={image}
                  className="relative z-10 block h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  alt={`Gallery item ${i + 1}`}
                  loading="lazy"
                />

                <div className="absolute inset-0 z-20 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </figure>
            </button>
          ))}

          {/* Spacer so the last item can scroll fully into view */}
          <div className="flex-none w-24 h-full" />
        </div>
      </div>
    </section>
  )}

        {/* Project Overview Section */}
        <section className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 sticky top-24">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Project Overview</h2>
            <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
            <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-lg">Detailed context and technical background.</p>
          </div>
          <div className="md:col-span-8">
            <p className="text-zinc-700 dark:text-zinc-300 text-xl leading-relaxed whitespace-pre-wrap">{project.description}</p>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 sticky top-24">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Infrastructure</h2>
            <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
            <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-lg">Architectural decisions and stack integration.</p>
          </div>
          <div className="md:col-span-8">
            <div className="p-8 bg-zinc-100/50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/10 rounded-2xl">
              <Layers className="w-8 h-8 text-purple-600 dark:text-purple-500 mb-6" />
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-xl">{project.architecture.description}</p>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 sticky top-24">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Challenges</h2>
            <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
            <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-lg">Problem solving and engineering responses.</p>
          </div>
          <div className="md:col-span-8 space-y-12">
            {project.challenges.map((c, i) => (
              <div key={i} className="relative pl-8 border-l border-zinc-200 dark:border-white/10 group">
                <div className="absolute left-[-5.5px] top-2 w-[11px] h-[11px] rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-white/20 group-hover:border-purple-500 group-hover:bg-purple-500 transition-all duration-300"></div>
                <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 font-mono text-[9px] font-bold uppercase tracking-widest mb-2">
                  <ShieldCheck className="w-3 h-3" /> Challenge_{i + 1}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{c.problem}</h3>
                <div className="bg-white dark:bg-white/[0.02] border border-zinc-100 dark:border-white/5 p-6 rounded-xl">
                  <span className="text-zinc-400 dark:text-zinc-500 font-mono text-[9px] uppercase tracking-widest block mb-2">Solution</span>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">{c.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Return Button */}
        <div className="pt-24 border-t border-zinc-200 dark:border-white/5 text-center">
          <Link to="/" className="inline-flex items-center px-10 py-4 bg-zinc-900 dark:bg-zinc-800 text-white rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-xl group uppercase tracking-widest text-xs font-mono">
            <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" /> Return to project index
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;