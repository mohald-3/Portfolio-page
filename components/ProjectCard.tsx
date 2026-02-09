import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-[#161618] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <Link
            to={`/projects/${project.slug}`}
            className="p-2 text-zinc-400 hover:text-white bg-white/5 rounded-lg transition-all"
            title="View Details"
          >
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
        
        <p className="text-zinc-400 line-clamp-2 mb-6 text-sm leading-relaxed">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider font-mono bg-white/5 text-zinc-500 rounded border border-white/5"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[11px] font-mono text-zinc-600">+{project.tags.length - 4} more</span>
          )}
        </div>
      </div>

      <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 flex items-center gap-4">
        <Link
          to={`/projects/${project.slug}`}
          className="text-xs font-bold text-white uppercase tracking-widest hover:text-purple-400 transition-colors"
        >
          View Details
        </Link>
        <div className="flex-grow"></div>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;