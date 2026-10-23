import "./../css/Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Tailwind CSS", "jQuery"],
  },
  {
    title: "Backend & data",
    skills: ["Node.js", "Express.js", "MongoDB", "SQL"],
  },
  {
    title: "Tools",
    skills: ["GitHub"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">What I work with</span>
          <h2>Tools for bringing ideas to life.</h2>
          <p>
            The technologies I use to build and keep learning across the
            full-stack.
          </p>
        </div>

        <div className="skills-container">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-card" key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
