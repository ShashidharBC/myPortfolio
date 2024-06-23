import React, { useState } from "react";
import "./Styles.css";
import HAMBURGER_ICON from "../assests/hamburger_icon.jpg";
import CANCEL_ICON from "../assests/cancel_icon.jpg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    return <></>;
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
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contact Me</a>
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
          />
          <div className="menu-links">
            <li>
              <a href="/" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="/" onClick={toggleMenu}>
                Work
              </a>
            </li>
            <li>
              <a href="/" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="/" onClick={toggleMenu}>
                Contact Me
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
