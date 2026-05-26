import { motion } from 'framer-motion';

const stats = [
  { label: 'Certifications', value: '20+' },
  { label: 'Hands-on Projects', value: '10+' },
  { label: 'Major Projects', value: '3+' },
];

const Stats = () => {
  return (
    <section className="relative py-12 z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 flex flex-wrap items-center justify-around gap-8 md:gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-4xl md:text-5xl font-space font-bold text-gradient mb-2 drop-shadow-[0_0_15px_rgba(176,38,255,0.3)]">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
