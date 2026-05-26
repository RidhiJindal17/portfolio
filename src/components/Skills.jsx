import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaLinux, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiSocketdotio,
  SiCplusplus
} from 'react-icons/si';

const skills = [
  { name: 'REACT', icon: <FaReact />, color: '#61DAFB' },
  { name: 'JAVASCRIPT', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'PYTHON', icon: <FaPython />, color: '#3776AB' },
  { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
  { name: 'NODE.JS', icon: <FaNodeJs />, color: '#339933' },
  { name: 'SOCKET.IO', icon: <SiSocketdotio />, color: '#ffffff' },
  { name: 'LINUX', icon: <FaLinux />, color: '#FCC624' },
  { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.2)"
      }}
      className="bg-[#1a1b26]/80 backdrop-blur-md p-10 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-6 transition-all duration-300 gpu-accelerated group cursor-default"
    >
      <div className="text-5xl group-hover:scale-110 transition-transform duration-300" style={{ color: skill.color }}>
        {skill.icon}
      </div>
      
      <h3 className="text-sm font-space font-bold text-gray-400 tracking-[0.2em] group-hover:text-white transition-colors">
        {skill.name}
      </h3>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 z-10 overflow-hidden">
      {/* Perspective Grid Background like the image */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute bottom-0 w-full h-[100%] bg-gradient-to-t from-neonPurple/5 to-transparent" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-4 tracking-wider">
            TECHNICAL <span className="text-gradient">SKILLS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neonPurple to-neonPink mx-auto rounded-full" />
        </motion.div>

        {/* Grid Layout - 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
