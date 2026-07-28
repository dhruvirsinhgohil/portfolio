import "./../css/Projects.css";

function Projects() {

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Responsive personal portfolio built using React and CSS.",
      tech: "React, CSS",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://your-demo-link.com"
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "Online shopping website with product listing and cart.",
      tech: "React, Node.js, MongoDB",
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://your-demo-link.com"
    },
    {
      id: 3,
      title: "Student Management System",
      description: "CRUD application with authentication using MERN Stack.",
      tech: "Node.js, Express, MongoDB",
      github: "https://github.com/yourusername/student-management",
      demo: "https://your-demo-link.com"
    }
  ];

  return (
    <section className="projects" id="projects">

      <h2>My Projects</h2>

      <div className="project-container">

        {projects.map((project) => (

          <div className="project-card" key={project.id}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.tech}</span>

            <div className="project-btn">

              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;