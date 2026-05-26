import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';

const About = () => {
  const cards = [
    {
      id: 1,
      icon: <FaGraduationCap className="text-4xl text-neonPurple" />,
      title: "Education",
      description: "Currently pursuing B.Tech in Computer Science Engineering (specialization in IEP – Quick Heal Technologies) at Parul University. Building strong expertise in frontend development and cyber security.",
      delay: 0.2
    },
    {
      id: 2,
      icon: <FaCode className="text-4xl text-neonPink" />,
      title: "Passion",
      description: "Deeply passionate about crafting interactive user interfaces and exploring the intersection of design and clean code.",
      delay: 0.4
    },
    {
      id: 3,
      icon: <FaRocket className="text-4xl text-neonBlue" />,
      title: "Career Goals",
      description: "Aiming to become a versatile Frontend Developer who builds scalable, user-centric products that solve real-world problems.",
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
              Hello! I'm <span className="text-white font-semibold">Ridhi Jindal</span>, an aspiring web developer with an insatiable curiosity for modern technologies and a sharp eye for design.
            </p>
            <p>
              My journey into programming started with a simple fascination for how things work on the internet. Since then, I have immersed myself in learning frontend development, turning complex problems into beautiful, intuitive, and highly functional digital experiences. Alongside frontend development, I am deeply interested in cyber security and continuously explore modern security concepts, cloud technologies, and secure web practices.
            </p>
            <p>
              When I'm not coding, you can find me exploring new UI/UX trends, contributing to open-source, or experimenting with futuristic aesthetics. I believe that great design paired with flawless performance is the key to creating unforgettable products.
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
