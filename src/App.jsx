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
          <div className="flex flex-col px-6 py-14 gap-40">
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
