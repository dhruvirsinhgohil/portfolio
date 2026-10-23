import { Link } from "react-router-dom";
import { FaArrowDown, FaArrowRight, FaLocationDot } from "react-icons/fa6";
import resumeFile from "../assets/Dhruvirsinh Gohil Resume.pdf";
import profileImage from "../assets/picture.jpeg";
import "./../css/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="availability-dot" />
            Full-stack developer
          </p>

          <h1>
            Hello, I&apos;m
            <span>Dhruvirsinh Gohil.</span>
          </h1>

          <p className="hero-description">
            I build thoughtful, responsive web experiences with React and the
            MERN stack. Currently looking for an opportunity to learn, contribute,
            and grow.
          </p>

          <p className="hero-location">
            <FaLocationDot aria-hidden="true" />
            Gujarat, India
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={resumeFile}
              download="Dhruvirsinh-Gohil-Resume.pdf"
            >
              Download resume <FaArrowDown aria-hidden="true" />
            </a>
            <Link className="button button-secondary" to="/contact">
              Get in touch <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              className="hero-profile"
              src={profileImage}
              alt="Portrait of Dhruvirsinh Gohil"
            />
          </div>
          <div className="hero-image-note">
            <span className="note-line" />
            <span>Curious by nature. Developer by choice.</span>
          </div>
          <span className="hero-index" aria-hidden="true">01 / 05</span>
        </div>
      </div>

      <a className="hero-scroll" href="#about">
        Scroll to explore <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}

export default Hero;
