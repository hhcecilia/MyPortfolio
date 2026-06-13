import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const skills = [
  'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Analysis',
  'SQL', 'MySQL', 'Jupyter Notebook', 'JavaScript', 'HTML/CSS',
  'Tailwind CSS', 'Node.js', 'MongoDB', 'REST APIs',
  'PHP', 'Docker', 'Jenkins', 'AWS (ECR / ECS / S3)', 'Git', 'Agile / Scrum',
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
            Data analyst with over seven years of experience in medical office environments, working directly
            with clinical systems including Accuro EMR, Sectra PACS, and Visage imaging. That background,
            managing patient records, supporting diagnostic workflows, and maintaining data accuracy under
            strict confidentiality requirements, gives me a grounded understanding of how healthcare data
            works in practice and what's at stake when it doesn't. Now focused on data analytics, bringing
            that domain knowledge together with technical skills in Python, SQL, and data visualization to
            find patterns, surface insights, and communicate findings clearly. Seeking an entry-level
            analytics role where healthcare context and data skills are both an asset.
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
            Currently deepening my knowledge in <strong>data analytics</strong> and <strong>cloud infrastructure</strong>.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
