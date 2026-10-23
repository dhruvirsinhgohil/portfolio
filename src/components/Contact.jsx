import { FaArrowRight } from "react-icons/fa6";
import "./../css/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact-layout">
        <div className="contact-intro">
          <span className="section-kicker">Let&apos;s connect</span>
          <h2>Have a project in mind?</h2>
          <p>
            I&apos;m open to internship opportunities, collaborations, and
            interesting conversations about web development.
          </p>
          <div className="contact-status">
            <span className="availability-dot" />
            Currently open to opportunities
          </div>
        </div>

        <form className="contact-form">
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Enter your name"
            autoComplete="name"
            required
          />

          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />

          <label htmlFor="contact-message">Your message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Tell me a little about what you have in mind..."
            required
          />

          <button type="submit">
            Send a message <FaArrowRight aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
