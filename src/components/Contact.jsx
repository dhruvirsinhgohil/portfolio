import "./../css/Contact.css";

function Contact() {

  return (
    <section className="contact" id="contact">

      <h2>Contact Me</h2>

      <p>Feel free to contact me for any project or collaboration.</p>

      <form>

        <input
          type="text"
          placeholder="Enter Your Name"
          required
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          required
        />

        <input
          type="text"
          placeholder="Subject"
          required
        />

        <textarea
          rows="6"
          placeholder="Write Your Message..."
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );

}

export default Contact;