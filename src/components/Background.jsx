import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-darkBg">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Premium Particles */}
      <ParticlesBackground />

      {/* Animated Glowing Blobs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] bg-neonPurple/20 rounded-full blur-[80px] md:blur-[120px] gpu-accelerated"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.05, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] bg-neonPink/20 rounded-full blur-[80px] md:blur-[120px] gpu-accelerated"
      />

      <motion.div
        animate={{
          x: [0, 60, -80, 0],
          y: [0, 100, -60, 0],
          scale: [1, 1.2, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] md:w-[35vw] md:h-[35vw] bg-neonBlue/20 rounded-full blur-[80px] md:blur-[120px] gpu-accelerated"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-darkBg/60 backdrop-blur-[1px]" />
    </div>
  );
};

export default Background;
