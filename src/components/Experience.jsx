import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode, FaCloud } from 'react-icons/fa';

const experienceData = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    organization: "TechNova Solutions",
    duration: "Jan 2024 - Present",
    description: "Building responsive web applications using React and Tailwind CSS. Collaborating with UI/UX designers to implement pixel-perfect designs.",
    icon: <FaBriefcase />,
    type: "internship"
  },
  {
    id: 2,
    title: "Attended Technex 2026 Hackathon",
    organization: "IIT (BHU), Varanasi",
    duration: "Feb 2026",
    description: "Participated in the Technex 2026 Hackathon organized at IIT (BHU), where I gained deep practical knowledge of frontend development, modern UI/UX design, project structuring, and real-world deployment workflows.",
    highlights: [
      "Frontend Development",
      "Responsive UI Design",
      "React & Modern Web Technologies",
      "Deployment & Hosting",
      "Team Collaboration",
      "Real-world Problem Solving"
    ],
    icon: <FaCode />,
    type: "hackathon"
  },
  {
    id: 3,
    title: "AWS Cloud Computing Session",
    organization: "Parul University",
    duration: "October 2026",
    description: "Attended a one-month AWS Cloud Computing training session where I gained practical knowledge of AWS services and cloud infrastructure concepts.",
    highlights: [
      "AWS S3 Bucket",
      "Cloud Storage",
      "Load Balancer Concepts",
      "Cloud Infrastructure Basics",
      "Deployment & Scalability",
      "Practical AWS Knowledge"
    ],
    icon: <FaCloud />,
    type: "training"
  },
  {
    id: 4,
    title: "B.Tech in Computer Science Engineering",
    organization: "Parul University (IEP – Quick Heal Technologies)",
    duration: "2023 - 2027",
    description: "Currently pursuing B.Tech in CSE with specialization in Industry Embedded Program (IEP) – Quick Heal Technologies. Building strong expertise in frontend development, cyber security, and modern technologies through academic learning and practical exposure.",
    icon: <FaGraduationCap />,
    type: "education"
  }
];

const ExperienceCard = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between mb-8 w-full ${isEven ? 'flex-row-reverse' : ''}`}>
      {/* Timeline Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-darkBg border-4 border-neonPurple flex items-center justify-center z-20 shadow-[0_0_15px_rgba(176,38,255,0.5)]">
        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className={`w-[45%] glass p-4 md:p-5 rounded-2xl border border-white/10 hover:border-neonPurple/50 transition-all duration-300 relative group`}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-neonPurple/10 text-neonPurple text-xl">
            {item.icon}
          </div>
          <div>
            <h3 className="text-base md:text-lg font-space font-bold text-white group-hover:text-neonPink transition-colors leading-tight">
              {item.title}
            </h3>
            <p className="text-neonPurple text-xs font-medium">{item.organization}</p>
          </div>
        </div>
        
        <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs mb-4">
          {item.duration}
        </span>

        <p className="text-gray-400 text-xs md:text-[13px] leading-relaxed mb-3">
          {item.description}
        </p>

        {item.highlights && (
          <div className="flex flex-wrap gap-2">
            {item.highlights.map((highlight, i) => (
              <span key={i} className="text-[10px] font-medium px-2 py-1 rounded-md bg-neonPurple/5 border border-neonPurple/20 text-neonPurple/80">
                {highlight}
              </span>
            ))}
          </div>
        )}

        {/* Hover Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-neonPurple/20 to-neonPink/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
      </motion.div>
      
      {/* Empty space for the other side */}
      <div className="w-[45%]" />
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonPurple to-neonPink mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neonPurple via-neonPink to-transparent opacity-20 z-10 rounded-full" />

          {/* Timeline Items */}
          <div className="relative">
            {experienceData.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
