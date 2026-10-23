import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import "./App.css";

const themes = ["forest", "ocean", "violet", "sunset", "light"];

function getSavedTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");
  return themes.includes(savedTheme) ? savedTheme : "forest";
}

// ======================================
// PAGE TRANSITION
// ======================================

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -40,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}


// ======================================
// CURTAIN WIPE
// ======================================

function CurtainTransition() {
  const curtains = Array.from({ length: 10 });

  return (
    <motion.div
      className="curtain-container"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {curtains.map((_, index) => (
        <motion.div
          key={index}
          className="curtain"
          variants={{
            initial: {
              scaleY: 1,
            },

            animate: {
              scaleY: 0,
            },

            exit: {
              scaleY: 1,
            },
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      ))}
    </motion.div>
  );
}


// ======================================
// APP
// ======================================

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(getSavedTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const renderNavbar = () => (
    <Navbar theme={theme} onThemeChange={setTheme} />
  );

  return (
    <>
      {/* Curtain Animation */}
      <AnimatePresence mode="wait">
        <CurtainTransition key={location.pathname} />
      </AnimatePresence>


      {/* Pages */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 0.35,
          }}
        >

          <Routes location={location}>

            {/* HOME */}
            <Route
              path="/"
              element={
                <>
                  {renderNavbar()}

                  <PageTransition>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                  </PageTransition>

                  <Footer />
                </>
              }
            />


            {/* ABOUT */}
            <Route
              path="/about"
              element={
                <>
                  {renderNavbar()}

                  <PageTransition>
                    <About />
                  </PageTransition>

                  <Footer />
                </>
              }
            />


            {/* SKILLS */}
            <Route
              path="/skill"
              element={
                <>
                  {renderNavbar()}

                  <PageTransition>
                    <Skills />
                  </PageTransition>

                  <Footer />
                </>
              }
            />


            {/* PROJECTS */}
            <Route
              path="/projects"
              element={
                <>
                  {renderNavbar()}

                  <PageTransition>
                    <Projects />
                  </PageTransition>

                  <Footer />
                </>
              }
            />


            {/* CONTACT */}
            <Route
              path="/contact"
              element={
                <>
                  {renderNavbar()}

                  <PageTransition>
                    <Contact />
                  </PageTransition>

                  <Footer />
                </>
              }
            />

          </Routes>

        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;