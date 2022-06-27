import React from "react";
import "./BodyPart.css";
import { GiChestArmor } from "react-icons/gi";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <div
      className="bodyPartCard"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <GiChestArmor />
      {item}
    </div>
  );
};

export default BodyPart;
