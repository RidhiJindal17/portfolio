import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../data/projectsData';

const ProjectCard = ({ project, index }) => {
  // Support both key names: technologies (from projectsData) and tags (original backup)
  const techStack = project.technologies || project.tags || [];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative glass rounded-3xl overflow-hidden border border-white/10 hover:border-neonPink/50 transition-all duration-500"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map(tag => (
            <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-neonPurple/10 text-neonPurple border border-neonPurple/20">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-space font-bold text-white mb-3 group-hover:text-neonPink transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-space font-bold uppercase tracking-wider text-neonPink mb-2">Key Features</h4>
            <ul className="space-y-1.5">
              {project.features.map((feature, i) => (
                <li key={i} className="text-xs text-gray-300 flex items-start gap-1.5 leading-relaxed">
                  <span className="text-neonPurple mt-1">●</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-sm font-medium transition-all"
          >
            <FaGithub /> GitHub
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-neonPurple to-neonPink text-sm font-bold shadow-lg shadow-neonPurple/20"
          >
            <FaExternalLinkAlt /> Live Demo
          </motion.a>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-neonPurple/10 to-neonPink/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonPurple to-neonPink mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id || index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
