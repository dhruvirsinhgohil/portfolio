import "./../css/Skills.css";

function Skills() {

    const skills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "React JS",
        "GitHub"
       
    ];

    return (

        <section id="skills" className="skills">

            <h2>My Skills</h2>

            <div className="skills-container">

                {
                    skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            {skill}
                        </div>
                    ))
                }

            </div>

        </section>

    );

}

export default Skills;