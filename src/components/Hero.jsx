import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/user_profile_v3.jpg';

const roles = [
  "AI/ML",
  "Full Stack Development",
  "Cybersecurity",
  "Agentic AI Engineering"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[currentRoleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          currentRole.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  // Floating particles generator
  const renderParticles = () => {
    return Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-white/20 backdrop-blur-sm gpu-accelerated"
        style={{
          boxShadow: `0 0 10px 2px ${i % 2 === 0 ? '#b026ff' : '#ff1493'}`,
        }}
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: Math.random() * 0.5 + 0.2,
        }}
        animate={{
          y: [null, Math.random() * -200],
          x: [null, Math.random() * 100 - 50],
          opacity: [null, 0.8, 0],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ));
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">
      {/* Particles layer */}
      <div className="absolute inset-0 pointer-events-none">
        {renderParticles()}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between w-full">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left z-20 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass mb-4 border border-neonPurple/50"
          >
            <span className="text-neonPink font-medium text-xs tracking-widest uppercase">
              AI Developer | Full Stack Developer | Cybersecurity Enthusiast
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-space font-bold leading-tight">
            Ridhi Jindal <br />
            <span className="text-gradient">Cybersecurity & AI Enthusiast</span>
          </h1>

          <div className="h-12 flex items-center justify-center lg:justify-start">
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              <span className="mr-2">Focusing on</span>
              <span className="text-white font-medium border-r-2 border-neonPink pr-2 animate-pulse">
                {currentText}
              </span>
            </h2>
          </div>

          <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed">
            B.Tech Computer Science & Engineering student at Parul University with a dual focus on cybersecurity and AI. Experienced in building full-stack AI-powered applications, security tooling, and intelligent systems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <motion.a
              href="/resume.pdf"
              download="Ridhi_Jindal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 bg-gradient-to-r from-neonPurple to-neonPink rounded-full font-semibold text-base hover:shadow-[0_0_25px_rgba(176,38,255,0.6)] transition-all duration-300 text-center flex-1 sm:flex-initial min-w-[160px]"
            >
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 glass border border-gray-600 hover:border-neonPurple rounded-full font-semibold text-base hover:text-neonPurple hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all duration-300 text-center flex-1 sm:flex-initial min-w-[160px]"
            >
              Contact Me
            </motion.a>

            <motion.a
              href="https://github.com/RidhiJindal17"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3.5 glass border border-gray-600 hover:border-white rounded-full font-semibold text-base hover:text-white transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-initial min-w-[140px]"
            >
              <FaGithub /> GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ridhi-jindal-4835bb30b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3.5 glass border border-gray-600 hover:border-neonBlue rounded-full font-semibold text-base hover:text-neonBlue transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-initial min-w-[140px]"
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
          </div>

        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 mt-16 lg:mt-0 flex justify-center items-center z-20 lg:translate-x-12 lg:-translate-y-10"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Animated glowing rings behind image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-neonPurple opacity-50 scale-110"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-neonPink opacity-40 scale-[1.2]"
            />

            {/* The Image itself */}
            <div className="absolute inset-0 rounded-full p-2 bg-gradient-to-tr from-neonPurple via-darkBg to-neonPink shadow-[0_0_30px_rgba(176,38,255,0.5)]">
              <img
                src={profileImg}
                alt="Ridhi Jindal"
                className="w-full h-full object-cover rounded-full filter contrast-125"
              />
            </div>

            {/* Name Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-24 left-1/2 -translate-x-1/2 whitespace-nowrap flex flex-col items-center gap-1"
            >
              <span className="text-3xl md:text-4xl font-space font-bold tracking-[0.2em] text-gradient drop-shadow-[0_0_15px_rgba(176,38,255,0.5)]">
                RIDHI JINDAL
              </span>
              <span className="text-[10px] md:text-xs font-space text-gray-400 tracking-[0.3em] font-light flex items-center gap-2">
                B.TECH <span className="text-neonPurple">•</span> SESSION 2023-2027
              </span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
