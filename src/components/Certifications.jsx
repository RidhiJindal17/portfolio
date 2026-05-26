import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { certificationsData } from '../data/certificationsData';

const CertificationCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-neonPurple/50 transition-all duration-300 relative group flex flex-col justify-between h-full"
  >
    <div>
      {/* Certificate Preview Image/Logo */}
      {cert.image && (
        <div className="relative h-44 overflow-hidden bg-slate-950/40 border-b border-white/5">
          <img 
            src={cert.image} 
            alt={cert.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-60" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-neonPurple/10 text-neonPurple text-xl">
            <FaCertificate />
          </div>
          <span className="text-gray-500 text-xs font-medium uppercase tracking-widest">{cert.date}</span>
        </div>
        
        <h3 className="text-xl font-space font-bold text-white mb-2 group-hover:text-neonPink transition-colors">
          {cert.title}
        </h3>
        
        <p className="text-neonPurple text-sm font-medium mb-3">
          {cert.issuer}
        </p>

        {/* Category & Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-neonPurple/10 text-neonPurple border border-neonPurple/20">
            {cert.category}
          </span>
          {cert.tags && cert.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 text-[10px] text-gray-400 bg-white/5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Footer - View Certificate Button */}
    <div className="p-6 pt-0 mt-auto">
      <motion.a
        href={cert.viewLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 5 }}
        className="inline-flex items-center gap-2 text-xs font-bold text-white/70 hover:text-white transition-colors cursor-pointer"
      >
        VIEW CERTIFICATE <FaExternalLinkAlt />
      </motion.a>
    </div>

    {/* Hover Glow Effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-neonPurple/10 to-neonPink/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
  </motion.div>
);

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonPurple to-neonPink mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <CertificationCard key={cert.id || index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
