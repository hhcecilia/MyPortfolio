import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Projects.css';

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const projects = [
  {
    title: 'CI/CD Pipeline — React, Docker & AWS',
    image: '/images/cicd-pipeline.png',
    imageAlt: 'Jenkins Stage View showing successful CI/CD pipeline runs',
    description: 'Built a full end-to-end CI/CD pipeline for a containerized React application, automating the entire path from code commit to cloud deployment.',
    bullets: [
      'Build — compiled and bundled the React app inside a Docker container using Node.js.',
      'Test — ran automated unit tests as a required gate before any deployment.',
      'Push to ECR — built a Docker image and pushed it to AWS Elastic Container Registry.',
      'Deploy to S3 — synced the production build to an AWS S3 static hosting bucket.',
      'Deploy to ECS — updated the task definition and triggered a new deployment on an AWS ECS cluster.',
    ],
    tech: ['React', 'Docker', 'Jenkins', 'AWS ECR', 'AWS ECS', 'AWS S3', 'CI/CD'],
    link: 'https://github.com/hhcecilia/react-cicd26',
    linkLabel: 'GitHub',
  },
  {
    title: 'Bow Valley College Website Recreation',
    image: '/images/bowvexample.png',
    imageAlt: 'Bow Valley College Website',
    description: 'Recreated a multi-page college website as part of a software development course, focusing on clean UI, functional backend integration, and data handling.',
    role: 'Frontend and backend development.',
    bullets: [
      'Designed wireframes to plan layout and user flow.',
      'Built the frontend using HTML, Tailwind CSS, and JavaScript.',
      'Implemented backend functionality and validated API calls.',
      'Connected application data to MongoDB.',
      'Ensured end-to-end functionality between frontend, backend, and database.',
    ],
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'Node.js', 'MongoDB', 'REST APIs'],
    link: 'https://github.com/TyLandry/bow-course-registration---group-1/commits?author=hhcecilia',
    linkLabel: 'My Commits',
  },
  {
    title: 'Workplace Stress Analysis in Canada',
    image: '/images/dataScienceExample.png',
    imageAlt: 'Workplace Stress Analysis Visualization',
    description: 'Examined reported workplace stress across different age groups and genders in Canada using survey data to better understand which groups may be more vulnerable.',
    bullets: [
      'Cleaned and prepared raw survey data for analysis.',
      'Performed exploratory data analysis to identify trends.',
      'Created visualizations to compare stress levels across age groups and genders.',
      'Interpreted results and summarized key findings.',
      'Presented insights in a clear, non-technical format.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook', 'Data Analysis'],
    link: 'https://github.com/hhcecilia/workplace-stress-analysis',
    linkLabel: 'GitHub',
  },
  {
    title: 'Student Management System — PHP MVC',
    image: null,
    description: 'Developed a web application for managing student records using PHP and a structured MVC architecture, built as part of an Enterprise Computing course.',
    bullets: [
      'Designed and implemented a relational SQL database schema.',
      'Separated concerns using MVC — dedicated controllers, models, and views.',
      'Built CRUD functionality for creating, viewing, updating, and deleting student records.',
      'Applied enterprise application structure patterns including a config layer and routing via a front controller.',
    ],
    tech: ['PHP', 'MVC Architecture', 'MySQL', 'XAMPP', 'HTML/CSS'],
    link: 'https://github.com/hhcecilia/Assignment1HH',
    linkLabel: 'GitHub',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      className={`project-card${project.image ? '' : ' no-image'}`}
      style={{ flexDirection: isEven && project.image ? 'row-reverse' : 'row' }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
        </div>
      )}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">
          {project.description}
          {project.role && <><br /><br /><strong>My role:</strong> {project.role}</>}
          <br /><br />
          <strong>{project.role ? 'Key contributions:' : 'Key contributions:'}</strong>
          <br />
          {project.bullets.map((b, i) => (
            <span key={i}>• {b}<br /></span>
          ))}
        </p>
        <div className="project-tech">
          {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
        </div>
        <div className="project-links">
          <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
            <GitHubIcon /> {project.linkLabel}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          ref={ref}
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>
    </section>
  );
}
