import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaDocker, 
  FaShieldAlt, FaTerminal, FaNetworkWired, FaBrain, FaRegClock, 
  FaUsers, FaLightbulb, FaSync, FaBookOpen, FaCode
} from 'react-icons/fa';
import { 
  SiJavascript, SiCplusplus, SiMongodb, SiMysql, SiExpress, SiFastapi
} from 'react-icons/si';

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "Java", icon: <FaJava />, color: "#ED8B00" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "SQL", icon: <FaDatabase />, color: "#00758F" }
    ]
  },
  {
    category: "Frameworks & Development",
    skills: [
      { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
      { name: "REST APIs", icon: <FaCode />, color: "#b026ff" }
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "Vector DBs", icon: <FaBrain />, color: "#9B51E0" },
      { name: "Docker", icon: <FaDocker />, color: "#2496ED" }
    ]
  },
  {
    category: "Cybersecurity Tools",
    skills: [
      { name: "Kali Linux", icon: <FaTerminal />, color: "#33FF33" },
      { name: "Metasploit & OWASP", icon: <FaShieldAlt />, color: "#FF1493" },
      { name: "Wireshark & Network", icon: <FaNetworkWired />, color: "#0022ff" },
      { name: "VAPT Security", icon: <FaShieldAlt />, color: "#00D2FF" }
    ]
  },
  {
    category: "AI / Machine Learning",
    skills: [
      { name: "LangChain & Agents", icon: <FaBrain />, color: "#ff8c00" },
      { name: "NLP (spaCy, BERT)", icon: <FaBrain />, color: "#00ffcc" },
      { name: "LSTM & Forest ML", icon: <FaBrain />, color: "#ff00ff" },
      { name: "Semantic Search", icon: <FaBrain />, color: "#ccff00" }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", icon: <FaUsers />, color: "#00e1ff" },
      { name: "Time Management", icon: <FaRegClock />, color: "#ff4d4d" },
      { name: "Collaboration", icon: <FaUsers />, color: "#39ff14" },
      { name: "Problem Solving", icon: <FaLightbulb />, color: "#ffd700" },
      { name: "Adaptability", icon: <FaSync />, color: "#ff007f" },
      { name: "Fast Learner", icon: <FaBookOpen />, color: "#9d00ff" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            Technical & Soft <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonPurple to-neonPink mx-auto rounded-full" />
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((categoryData, catIdx) => (
            <motion.div
              key={categoryData.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-3xl border border-white/5 hover:border-neonPurple/30 transition-all duration-300 flex flex-col justify-between"
            >
              <h3 className="text-xl font-space font-bold text-white mb-6 tracking-wide border-b border-white/5 pb-3">
                {categoryData.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {categoryData.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-200"
                  >
                    <div className="text-xl flex-shrink-0" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <span className="text-[11px] font-semibold text-gray-300 uppercase tracking-wide truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
