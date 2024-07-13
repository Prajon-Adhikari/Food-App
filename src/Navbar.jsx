import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

function Navbar() {
  const [sideNavbar, setSideNavbar] = useState(false);

  function handleSideNavbar() {
    setSideNavbar(true);
  }

  function closeSideNavbar() {
    setSideNavbar(false);
  }

  useEffect(() => {
    const btnMenu = document.querySelector(".menu");
    const topNav = document.querySelector(".nav-elements");
    const sideNav = document.querySelector(".side-nav-elements");
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1100) {
        console.log("i");
        setSideNavbar(true);
      } else {
        setSideNavbar(false);
      }
    });
    if (sideNavbar) {
      topNav.style.display = "none";
      sideNav.style.display = "flex";
      btnMenu.style.display = "none";
    } else {
      topNav.style.display = "flex";
      sideNav.style.display = "none";
      btnMenu.style.display = "flex";
    }
  });

  return (
    <div>
      <nav className="nav-container">
        <p className="nav-msg">FoodApp</p>
        <div className="nav-elements">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/reservation">Reservation</Link>
        </div>
        <button className="menu" onClick={handleSideNavbar}>
          our menu
        </button>
      </nav>
      <div className="side-nav-container">
        <div className="side-nav-elements">
          <div className="side-nav">
            <FontAwesomeIcon
              icon={faXmark}
              className="cross-icon"
              onClick={closeSideNavbar}
            />
          </div>
          <div className="side-nav">
            <Link to="/">Home</Link>
          </div>
          <div className="side-nav">
            <Link to="/about">About Us</Link>
          </div>
          <div className="side-nav">
            <Link to="/services">Services</Link>
          </div>
          <div className="side-nav">
            <Link to="/teams">Teams</Link>
          </div>
          <div className="side-nav">
            <Link to="/reservation">Reservation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
