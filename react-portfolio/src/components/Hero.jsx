import Aurora from './Aurora';
import ShinyText from './ShinyText';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-aurora">
        <Aurora
          colorStops={['#00695C', '#00897B', '#26C6DA']}
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
      </div>

      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <ShinyText
            text="Heather Hallberg"
            color="rgba(255,255,255,0.9)"
            shineColor="#ffffff"
            speed={4}
            spread={100}
          />
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Software Development Student &nbsp;·&nbsp; Web &amp; Database Technologies &nbsp;·&nbsp; Seeking Entry-Level Opportunities
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </motion.div>
      </div>

      <div className="hero-scroll-hint">
        <span />
      </div>
    </section>
  );
}
