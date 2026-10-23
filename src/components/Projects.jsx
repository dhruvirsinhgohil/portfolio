import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./../css/Projects.css";

const projects = [
  {
    id: "portfolio",
    number: "01",
    title: "Portfolio Website",
    description: "A responsive personal portfolio built to introduce my work, skills, and projects.",
    tech: ["React", "CSS"],
    demo: "https://portfolio-qosvhsrhg-acme-4d36.vercel.app/",
  },
  {
    id: "food-ordering",
    number: "02",
    title: "Food Ordering Platform",
    description: "An online food ordering experience built with a full-stack workflow.",
    tech: ["React", "Node.js", "MongoDB", "Authentication"],
    demo: "https://foodiego-user.vercel.app/",
  },
  {
    id: "resume-builder",
    number: "03",
    title: "AI Resume Builder & Analyzer",
    description: "A resume builder and analyzer project integrating Gemini AI.",
    tech: ["Node.js", "Express", "MongoDB", "Gemini AI"],
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Selected work</span>
          <h2>Projects I&apos;ve been building.</h2>
          <p>A few projects where I&apos;ve put my skills into practice.</p>
        </div>

        <div className="project-container">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                {project.demo && (
                  <a
                    className="project-open"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                  >
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                  </a>
                )}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              {project.demo && (
                <a
                  className="project-link"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  View live project <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
