import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const skills = [
  'JavaScript', 'Python', 'HTML/CSS', 'Tailwind CSS',
  'Node.js', 'MongoDB', 'REST APIs', 'Pandas', 'NumPy',
  'Data Analysis', 'PHP', 'Kotlin', 'SQL', 'MySQL',
  'Docker', 'Jenkins', 'AWS (ECR / ECS / S3)', 'Git', 'Agile / Scrum',
];

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">About Me</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="about-text">
            Software development student with a background in administrative and technical support roles,
            currently completing a diploma and building practical experience through academic and personal
            projects. Comfortable working with web technologies, databases, and modern development tools,
            with a focus on problem-solving, learning quickly, and building reliable solutions. Experienced
            in regulated environments, cross-team collaboration, and adapting to new systems and workflows.
            Seeking an entry-level or student opportunity in technology or systems where I can contribute,
            continue learning, and grow professionally.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skill-tags">
              {skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="currently-learning">
            Currently deepening my knowledge in <strong>cloud infrastructure</strong> and <strong>React</strong>.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
