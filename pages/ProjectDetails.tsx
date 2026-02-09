import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, ShieldCheck, Zap, Info, Layers, BookOpen } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    if (!project) {
      navigate('/');
    } else {
      document.title = `${project.title} | Technical Preview`;
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="min-h-screen pb-20 animate-in fade-in duration-500 bg-[#0a0a0c]">
      {/* Header Area */}
      <div className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#121214]">
        <div className="max-w-4xl mx-auto">
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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
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
        {/* Overview */}
        <section className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="inline-flex p-3 bg-purple-900/20 rounded-xl border border-purple-500/20">
                <Info className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-mono">Technical Brief</h2>
              <div className="h-px w-12 bg-purple-500/50"></div>
            </div>
          </div>
          <div className="md:col-span-8">
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
          <div className="md:col-span-8 space-y-8">
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-[#161618] relative group ring-1 ring-white/5">
              <img 
                src={project.architecture.image} 
                alt={`${project.title} Architecture Visual`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
            <div className="p-6 bg-purple-600/5 border border-purple-500/20 rounded-2xl">
              <p className="text-zinc-400 leading-relaxed italic text-sm md:text-base">
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
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-mono">Critical Bottlenecks</h2>
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
                  <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-[0.2em] mb-3 font-mono">Engineering Response</h4>
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
