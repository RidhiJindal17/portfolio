import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';

const About = () => {
  const cards = [
    {
      id: 1,
      icon: <FaGraduationCap className="text-4xl text-neonPurple" />,
      title: "Education",
      description: "Pursuing B.Tech CSE at Parul University under the Quick Heal IEP track. Specializing in secure software architectures.",
      delay: 0.2
    },
    {
      id: 2,
      icon: <FaCode className="text-4xl text-neonPink" />,
      title: "Full-Stack AI",
      description: "Developing robust full-stack applications integrating state-of-the-art generative models and complex OCR automation.",
      delay: 0.4
    },
    {
      id: 3,
      icon: <FaRocket className="text-4xl text-neonBlue" />,
      title: "Cybersecurity",
      description: "Deeply interested in threat analysis, VAPT, and network defense to safeguard modern digital ecosystems.",
      delay: 0.6
    }
  ];

  return (
    <section id="about" className="relative min-h-screen py-24 flex items-center justify-center z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonPurple to-neonPink mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Introduction Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Hello! I'm <span className="text-white font-semibold">Ridhi Jindal</span>, a B.Tech Computer Science & Engineering student at Parul University specializing in cybersecurity and AI. I bridge the gap between intelligent algorithmic performance and clean, secure software development.
            </p>
            <p>
              With a strong foundation in <span className="text-white font-semibold">AI & Full Stack Development</span>, I build applications that solve real-world problems. From parsing complex RFP documents to predicting climate trends, I leverage modern frameworks, natural language processing, and API design to create production-ready tools. My academic journey is enriched by the Industry Embedded Program (IEP) with <span className="text-white font-semibold">Quick Heal Technologies</span>, where I have obtained multiple certifications in systems, networks, and cloud security.
            </p>
            <p>
              I thrive on <span className="text-white font-semibold">innovation, problem-solving, and team collaboration</span>. Whether participating in hackathons, contributing to open-source, or analyzing security vulnerabilities, my goal is to design secure, efficient, and user-centric systems.
            </p>
          </motion.div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: card.delay }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className={`glass p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 relative group overflow-hidden ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${card.id === 1 ? 'from-neonPurple' : card.id === 2 ? 'from-neonPink' : 'from-neonBlue'} to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="mb-4 p-4 rounded-xl bg-darkBg/50 border border-white/5 inline-block group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-space font-semibold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
