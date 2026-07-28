import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route,Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<><Navbar /><Hero /> <About/> <Skills/> <Projects/> <Contact/> <Footer/> </>} />
      <Route path="/about" element={<><Navbar /><About /> <Footer/> </>} />
      <Route path="/skill" element={<><Navbar /><Skills /> <Footer/> </>} />
      <Route path="/projects" element={<><Navbar /><Projects /> <Footer/> </>} />
      <Route path="/contact" element={<><Navbar /><Contact/> <Footer/> </>} />

    </Routes>
    </>
  );
}

export default App;
