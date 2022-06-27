import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import "./Detail.css";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="detailInfo">
      <img src={gifUrl} alt={name} loading="Lazy" className="detailImage" />
      <div className="detailText">
        <div className="detailTitle">{name}</div>
        <div className="detailDescription">
          Exercises keep you strong. {name} {` `} is one of the best exercises
          to target your {target}. It will help you improve your mood and gain
          energy.
        </div>
        <div className="detailIcons">
          {extraDetail.map((item) => (
            <div className="detailIcon" key={item.name}>
              <button className="detailIconButton">
                <img src={item.icon} alt={bodyPart} className="detailIconImg" />
              </button>
              <div className="detailIconName">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
