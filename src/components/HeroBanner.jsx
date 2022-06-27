import React from "react";
import "./HeroBanner.css";
import { CgGym } from "react-icons/cg";

const HeroBanner = () => {
  return (
    <div className="herobannerContent">
      <div className="herobannerLeft">
        <div className="herobannerTitle">Fitness club</div>
        <div className="herobannerDescription">Sweat, smile and repeat.</div>
        <div className="herobannerInvitation">
          Check out the most effective exercises
        </div>
        <a href="#exercises" className="herobannerButton">
          {"Explore exercises"}
        </a>
      </div>
      <div className="herobannerRight">
        <div>
          <CgGym className="herobannerImg" />
        </div>
        <div className="herobannerWatermark">Just do it!</div>
      </div>
    </div>
  );
};

export default HeroBanner;
