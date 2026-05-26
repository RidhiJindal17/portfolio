import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/RidhiJindal17" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ridhi-jindal-4835bb30b/" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/friends_like_four_clover/" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaEnvelope />, href: "mailto:ridhijindalgupta@gmail.com" },
  ];

  return (
    <footer className="relative bg-darkBg border-t border-white/5 pt-16 pb-8 z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-neonPurple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Bio */}
          <div className="space-y-4">
            <a href="#home" className="text-2xl font-space font-bold tracking-wider block">
              <span className="text-gradient">Ridhi</span> Jindal
            </a>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Creating digital experiences that combine innovative design with clean, high-performance code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-neonPink transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-neonPurple rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Connect */}
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-neonPurple hover:shadow-[0_0_15px_rgba(176,38,255,0.4)] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© {currentYear} Ridhi Jindal. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with <FaHeart className="text-neonPink animate-pulse" /> by Ridhi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
