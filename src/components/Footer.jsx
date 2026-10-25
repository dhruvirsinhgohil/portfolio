import "./../css/Footer.css";

import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

function Footer() {

    return (

        <footer className="footer">

            <h2>Dhruvirsinh Gohil</h2>

            <p>Full Stack Developer</p>

            <div className="social">

                <a
                    href="https://github.com/dhruvirsinhgohil"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://linkedin.com/in/dhruvirsinh-gohil-921b70318"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin />
                </a>

            </div>

            <p className="copyright">
                © 2026 Dhruvirsinh Gohil. All rights reserved.
            </p>

        </footer>

    );

}

export default Footer;