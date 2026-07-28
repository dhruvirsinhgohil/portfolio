import "./../css/Footer.css";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaFacebook
} from "react-icons/fa";

function Footer() {

    return (

        <footer className="footer">

            <h2>Dhruvrajsinh Gohil</h2>

            <p>Full Stack Developer</p>

            <div className="social">

                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaFacebook />
                </a>

            </div>

            <p className="copyright">
                © 2026 Dhruvrajsinh Gohil. All Rights Reserved.
            </p>

        </footer>

    );

}

export default Footer;