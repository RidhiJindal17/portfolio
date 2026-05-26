import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="fixed bottom-8 right-8 z-[60] w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-2xl shadow-2xl transition-all duration-500 overflow-hidden group"
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            y: isDarkMode ? 0 : 40,
            opacity: isDarkMode ? 1 : 0
          }}
          className="absolute text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]"
        >
          <FiSun />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            y: isDarkMode ? -40 : 0,
            opacity: isDarkMode ? 0 : 1
          }}
          className="absolute text-neonPurple drop-shadow-[0_0_10px_rgba(176,38,255,0.5)]"
        >
          <FiMoon />
        </motion.div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-neonPurple/10 to-neonPink/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  );
};

export default ThemeToggle;
