import React, { useState, useEffect } from "react";
import "./App.css";

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar";
import Preloader from "./components/Preloader";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {load ? (
        <Preloader load={load} />
      ) : (
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          {/* 
            Responsive section spacing:
            - px-4 sm:px-6 md:px-10 → horizontal padding scales up
            - gap-20 sm:gap-28 md:gap-40 → vertical gap scales up
            - py-10 sm:py-14 → vertical padding
          */}
          <div className="flex flex-col px-4 py-10 gap-20 sm:px-6 sm:py-14 sm:gap-28 md:px-10 md:gap-36">
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
