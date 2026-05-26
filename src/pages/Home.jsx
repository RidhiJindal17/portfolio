import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';

import SectionDivider from '../components/SectionDivider';

const About = lazy(() => import('../components/About'));
const Skills = lazy(() => import('../components/Skills'));
const SocialPlatforms = lazy(() => import('../components/SocialPlatforms'));
const Projects = lazy(() => import('../components/Projects'));
const Certifications = lazy(() => import('../components/Certifications'));
const Stats = lazy(() => import('../components/Stats'));
const Experience = lazy(() => import('../components/Experience'));
const Contact = lazy(() => import('../components/Contact'));

const Home = () => {
  return (
    <div className="relative z-10">
      <div id="home">
        <Hero />
      </div>
      <Suspense fallback={<div className="h-20" />}>
        <SectionDivider inverted />
        <About />
        <SectionDivider />
        <SocialPlatforms />
        <SectionDivider inverted />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider inverted />
        <Certifications />
        <SectionDivider />
        <Stats />
        <SectionDivider inverted />
        <Experience />
        <SectionDivider />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
