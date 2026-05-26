import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  };

  return (
    <div className="hidden lg:block fixed inset-0 pointer-events-none z-[100]">
      {/* Main Bubble */}
      <motion.div
        variants={variants}
        animate="default"
        transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 0.5 }}
        className="w-8 h-8 rounded-full border-2 border-neonPurple/30 bg-neonPurple/5 backdrop-blur-[2px] shadow-[0_0_20px_rgba(176,38,255,0.2)]"
      />
      
      {/* Small inner bubble */}
      <motion.div
        variants={variants}
        animate="default"
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.2 }}
        className="absolute w-4 h-4 rounded-full bg-white/40 blur-[1px]"
        style={{ left: 10, top: 10 }}
      />

      {/* Trailing small bubble 1 */}
      <motion.div
        variants={variants}
        animate="default"
        transition={{ type: 'spring', damping: 30, stiffness: 100, mass: 0.8 }}
        className="absolute w-3 h-3 rounded-full bg-neonPink/20"
        style={{ left: -10, top: -10 }}
      />

      {/* Trailing small bubble 2 */}
      <motion.div
        variants={variants}
        animate="default"
        transition={{ type: 'spring', damping: 40, stiffness: 80, mass: 1 }}
        className="absolute w-2 h-2 rounded-full bg-neonBlue/20"
        style={{ left: 20, top: 20 }}
      />
    </div>
  );
};

export default CustomCursor;
