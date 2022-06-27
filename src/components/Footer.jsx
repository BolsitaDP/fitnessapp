import React from "react";
import { GiMuscleUp } from "react-icons/gi";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerAll">
      <div className="footerContent">
        <GiMuscleUp className="footerIcon" />
        <div className="footerInfo">
          Made by <span>Santiago Giraldo</span> based on{" "}
          <span>JavaScript Mastery</span>
           project.
        </div>
      </div>
    </div>
  );
};

export default Footer;
