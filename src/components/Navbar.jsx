import React from "react";
import { Link } from "react-router-dom";
import { GiMuscleUp } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContent">
      <Link to="/" className="navbarLogo">
        <GiMuscleUp className="navbarIcon" />
      </Link>
      <div className="navbarLinks">
        <Link to="/" className="navbarLink">
          Home
        </Link>
        <a href="#exercises" className="navbarLink">
          Exercises
        </a>
      </div>
    </div>
  );
};

export default Navbar;
