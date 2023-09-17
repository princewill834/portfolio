import React, { useState } from "react";
import "./Navbar.scss";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark navbar-1">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          Kelechi
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i
            className="fa-solid fa-bars fa-beat"
            style={{
              color: "#6eeca7",
              fontSize: "1.5em",
            }}
          ></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <HashLink smooth to="/#" className="nav-link " style={{color : "#333333"}} >
                Home
              </HashLink>
            </li>
            <li className="nav-item mx-3">
              <HashLink smooth to="/#about" className="nav-link"  style={{color : "#333333"}}>
                About
              </HashLink>
            </li>
            <li className="nav-item mx-3">
              <HashLink smooth to="/#services" className="nav-link" style={{color : "#333333"}}>
                Services
              </HashLink>
            </li>

            <li className="nav-item mx-3">
              <HashLink smooth to="/#projects" className="nav-link" style={{color : "#333333"}}>
                Projects
              </HashLink>
            </li>
            <li className="nav-item mx-3">
              <HashLink smooth to="/#contact" className="nav-link" style={{color : "#333333"}}>
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
