import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white dark:bg-[#161618] border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col">
      {/* Thumbnail Container */}
      <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 dark:opacity-60 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-[#161618] via-transparent to-transparent"></div>
        
        {/* Quick Link Overlay */}
        <div className="absolute top-4 right-4">
          <Link
            to={`/projects/${project.slug}`}
            className="p-3 text-zinc-900 dark:text-white bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-xl border border-zinc-200 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-lg"
            title="View Details"
          >
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-4">
          {project.title}
        </h3>
        
        <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-6 text-sm leading-relaxed">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider font-mono bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-500 rounded border border-zinc-200 dark:border-white/5"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600">+{project.tags.length - 3}</span>
          )}
        </div>
      </div>

      <div className="px-6 py-4 bg-zinc-50/50 dark:bg-white/[0.02] border-t border-zinc-200 dark:border-white/5 flex items-center gap-4">
        <Link
          to={`/projects/${project.slug}`}
          className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          View Details
        </Link>
        <div className="flex-grow"></div>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;