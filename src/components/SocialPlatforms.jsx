import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';

const platforms = [
  { name: 'GitHub', icon: <FaGithub />, color: '#ffffff', href: 'https://github.com/RidhiJindal17' },
  { name: 'LinkedIn', icon: <FaLinkedin />, color: '#0077B5', href: 'https://www.linkedin.com/in/ridhi-jindal-4835bb30b/' },
  { name: 'HackerRank', icon: <SiHackerrank />, color: '#2EC866', href: 'https://www.hackerrank.com/profile/ridhijindalgupta' },
  { name: 'LeetCode', icon: <SiLeetcode />, color: '#FFA116', href: 'https://leetcode.com/u/RidhiJindal/' },
];

const SocialPlatforms = () => {
  return (
    <section className="relative pt-20 pb-10 z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div 
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#1a1b26] flex items-center justify-center text-3xl transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/5 group-hover:border-white/20"
                style={{ color: platform.color }}
              >
                {platform.icon}
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                {platform.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialPlatforms;
