import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactInfoCard = ({ icon, title, value, href }) => (
  <motion.a
    href={href}
    whileHover={{ y: -5 }}
    className="glass p-6 rounded-2xl border border-white/10 hover:border-neonPurple/50 transition-all duration-300 flex items-center gap-4 group"
  >
    <div className="p-4 rounded-xl bg-neonPurple/10 text-neonPurple text-2xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h4 className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">{title}</h4>
      <div className="text-white font-medium">{value}</div>
    </div>
  </motion.a>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    // Simulation of form submission
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear message after 2 seconds
      setTimeout(() => {
        setStatus('');
      }, 2000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neonPurple to-neonPink mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-space font-bold mb-8">Contact Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <ContactInfoCard 
                icon={<FaEnvelope />} 
                title="Email" 
                value="ridhijindalgupta@gmail.com" 
                href="mailto:ridhijindalgupta@gmail.com"
              />
              <ContactInfoCard 
                icon={<FaMapMarkerAlt />} 
                title="Location" 
                value={
                  <div className="flex flex-col gap-1">
                    <span className="text-white">Gandhinagar, Gujarat (Perm.)</span>
                    <span className="text-gray-400 text-sm italic">Vadodara, Gujarat (Current)</span>
                  </div>
                } 
                href="#"
              />
            </div>

            <div className="pt-8">
              <h4 className="text-white font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: <FaGithub />, href: "https://github.com/RidhiJindal17" },
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ridhi-jindal-4835bb30b/" },
                  { icon: <FaInstagram />, href: "https://www.instagram.com/friends_like_four_clover/" },
                  { icon: <FaTwitter />, href: "#" },
                  { icon: <FaEnvelope />, href: "mailto:ridhijindalgupta@gmail.com" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-xl text-gray-400 hover:text-neonPink hover:border-neonPink transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neonPurple transition-all text-white placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neonPurple transition-all text-white placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neonPurple transition-all text-white placeholder:text-gray-600 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-neonPurple to-neonPink text-white font-bold py-4 rounded-2xl shadow-lg shadow-neonPurple/20 flex items-center justify-center gap-2 group"
              >
                Send Message <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
              
              {status && (
                <p className={`text-center text-sm mt-4 ${status.includes('successfully') ? 'text-green-400' : 'text-gray-400'}`}>
                  {status}
                </p>
              )}
            </form>

            {/* Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-neonPurple/10 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
