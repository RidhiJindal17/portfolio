import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import SmoothScroll from './components/SmoothScroll';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Home />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen text-white font-poppins selection:bg-neonPurple selection:text-white relative">
          <Loader />
          <CustomCursor />
          <ScrollToTop />
          <ThemeToggle />
          <Background />
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
