import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      onAnimationComplete={() => {
        document.body.style.overflow = 'auto';
        const loader = document.getElementById('preloader');
        if (loader) loader.style.display = 'none';
      }}
      id="preloader"
      className="fixed inset-0 z-[100] bg-[#0a0a0c] flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Rings */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-neonPurple rounded-full opacity-30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 border border-neonPink rounded-full opacity-40"
          />
          
          {/* Logo Text */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="z-10"
          >
            <span className="text-5xl md:text-6xl font-space font-bold tracking-tighter text-gradient drop-shadow-[0_0_20px_rgba(176,38,255,0.6)]">
              RJ
            </span>
          </motion.div>
        </div>

        {/* Loading Bar/Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-s tracking-[0.5em] uppercase font-light">
            You're Entering My Universe!😇
          </span>
          <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-neonPurple to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
