import { useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';
import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 3, className = '', color = 'rgba(255,255,255,0.85)', shineColor = '#ffffff', spread = 120 }) => {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);
  const animationDuration = speed * 1000;

  useAnimationFrame(time => {
    if (disabled || isPaused) { lastTimeRef.current = null; return; }
    if (lastTimeRef.current === null) { lastTimeRef.current = time; return; }
    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;
    const cycleTime = elapsedRef.current % animationDuration;
    progress.set((cycleTime / animationDuration) * 100);
  });

  const backgroundPosition = useTransform(progress, p => `${150 - p * 2}% center`);

  const gradientStyle = {
    backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <motion.span
      className={`shiny-text ${className}`}
      style={{ ...gradientStyle, backgroundPosition }}
      onMouseEnter={useCallback(() => setIsPaused(true), [])}
      onMouseLeave={useCallback(() => setIsPaused(false), [])}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
