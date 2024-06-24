import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      <Router>
        {load ? (
          <Preloader load={load} />
        ) : (
          <div className="App" id={load ? "no-scroll" : "scroll"}>
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route index element={<Home />} />
            </Routes>
            <Footer />
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
