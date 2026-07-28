import "./../css/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">Dhruvirsinh Portfolio</h2>

      <ul>

        <li>
            <Link to="/">Home</Link>
        </li>

        <li> <Link to="/about">About</Link></li>

        <li> <Link to="/skill">skill</Link></li>

        <li><Link to="/projects">projects</Link></li>

        <li><Link to="/contact">contact</Link></li>

      </ul>

    </nav>
  );
}

export default Navbar;