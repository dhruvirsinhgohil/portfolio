import "./../css/About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">A little about me</span>
          <h2>Building with curiosity and care.</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              Hello! I&apos;m <strong>Dhruvirsinh Gohil</strong>, a developer from
              Gujarat, India, who enjoys turning ideas into useful web
              experiences.
            </p>
            <p>
              I work with HTML, CSS, JavaScript, and React, and I&apos;m growing
              my skills across the MERN stack. I care about responsive
              interfaces, clear interactions, and writing code that is easy to
              understand.
            </p>
            <p>
              I&apos;m currently looking for an internship where I can contribute
              to real projects, learn from a team, and keep improving as a
              full-stack developer.
            </p>
          </div>

          <div className="about-details">
            <div className="about-detail">
              <span>01</span>
              <div>
                <h3>Based in</h3>
                <p>Gujarat, India</p>
              </div>
            </div>
            <div className="about-detail">
              <span>02</span>
              <div>
                <h3>Focused on</h3>
                <p>Frontend &amp; MERN stack development</p>
              </div>
            </div>
            <div className="about-detail">
              <span>03</span>
              <div>
                <h3>Open to</h3>
                <p>Internships &amp; collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
