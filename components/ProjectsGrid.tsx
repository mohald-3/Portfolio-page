import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsGrid: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                           project.summary.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !selectedTag || project.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [search, selectedTag]);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Featured Projects</h2>
              <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
            </div>

            {/* Search Input */}
            <div className="relative group w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400 transition-colors" />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all font-mono text-sm shadow-sm dark:shadow-none"
              />
            </div>
          </div>

          {/* Tag Filter List */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mr-2">Filter by Tech:</span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                selectedTag === null
                  ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-900/10'
                  : 'bg-white dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-white hover:border-purple-200 dark:hover:border-white/20'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-900/10'
                    : 'bg-white dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-white hover:border-purple-200 dark:hover:border-white/20'
                }`}
              >
                {tag}
              </button>
            ))}
            {(selectedTag || search) && (
              <button
                onClick={() => {
                  setSelectedTag(null);
                  setSearch('');
                }}
                className="ml-2 p-2 text-zinc-400 hover:text-red-500 transition-colors"
                title="Clear Filters"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-100 dark:bg-white/5 border border-dashed border-zinc-200 dark:border-white/10 rounded-2xl">
            <p className="text-zinc-400 dark:text-zinc-500 text-lg">No projects match your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;