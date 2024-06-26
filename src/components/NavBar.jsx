import React, { useState } from "react";
import "./Styles.css";
import HAMBURGER_ICON from "../assests/hamburger_icon.jpg";
import CANCEL_ICON from "../assests/cancel_icon.jpg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="nav-title">Shashidhara B C</div>
        <div style={{ minWidth: "40%" }}>
          <ul
            id="navbar"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Work</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamberger-nav">
        <div className="nav-title">Shashidhara B C</div>
        <div className="hamberger-menu">
          <img
            src={isOpen ? CANCEL_ICON : HAMBURGER_ICON}
            alt="Logo"
            width={35}
            height={35}
            onClick={toggleMenu}
          />
          {isOpen && (
            <div className="menu-links">
              <ul>
                <li>
                  <a href="#about" onClick={toggleMenu}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" onClick={toggleMenu}>
                    Work
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={toggleMenu}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={toggleMenu}>
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
