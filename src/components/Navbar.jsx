import { NavLink } from "react-router-dom";
import "./../css/Navbar.css";

function Navbar({ theme, onThemeChange }) {
  return (
    <nav className="navbar">
      <NavLink className="logo" to="/" aria-label="Dhruvirsinh Gohil home">
        DG<span>.</span>
      </NavLink>

      <ul className="navbar-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/skill">Skills</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <label className="theme-picker">
        <span>Theme</span>
        <select
          aria-label="Choose a portfolio color theme"
          value={theme}
          onChange={(event) => onThemeChange(event.target.value)}
        >
          <option value="forest">Forest</option>
          <option value="ocean">Ocean</option>
          <option value="violet">Violet</option>
          <option value="sunset">Sunset</option>
          <option value="light">Light</option>
        </select>
      </label>
    </nav>
  );
}

export default Navbar;
