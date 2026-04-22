import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'CERTIFY \u2013 Certificate Verification System',
    description: 'A secure MERN-based system enabling universities to issue certificates and companies to verify authenticity in real-time. Includes role-based dashboards.',
    image: '/certify.png',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    category: 'MERN',
    liveUrl: 'https://certify-project-nu.vercel.app/',
    githubUrl: 'https://github.com/muhamed-shahid/certify-project',
  },
  {
    id: 2,
    title: 'Job Application Tracker',
    description: 'A MERN stack app to track job applications with real-time status updates. Features JWT authentication, CRUD operations, and status tracking.',
    image: '/job_tracker.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'MERN',
    liveUrl: 'https://job-tracker-q33anwyy8-muhamed-shahids-projects.vercel.app',
    githubUrl: 'https://github.com/muhamed-shahid/job-tracker',
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description: 'A responsive React-based portfolio showcasing projects, skills, and contact features. Modern, minimal UI with smooth animations.',
    image: '/portfolio.png',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'React',
    liveUrl: '#',
    githubUrl: '#',
  }
];

const categories = ['All', 'MERN', 'React'];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projectsData.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${filter === cat
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25 scale-105'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10 hover:scale-[1.02]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full hover:-translate-y-1.5"
                onClick={() => window.open(project.liveUrl, "_blank")}
                role="button"
                tabIndex={0}
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-dark-900/50">
                  <div className="flex items-center justify-between mb-4">
                    <Folder className="w-8 h-8 text-primary-400 opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="flex gap-3 text-slate-400 relative z-20">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-1" onClick={(e) => e.stopPropagation()}>
                        <span className="sr-only">GitHub</span>
                        <FaGithub className="w-5 h-5" />
                      </a>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors p-1" onClick={(e) => e.stopPropagation()}>
                        <span className="sr-only">Live Demo</span>
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow transition-colors duration-300 group-hover:text-slate-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs font-medium text-slate-500 bg-white/5 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
