import React from "react";
import { Link } from "react-router-dom";
import "./Exercises.css";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exerciseCard" to={`/exercise/${exercise.id}`}>
      <div className="exerciseCardInfo">
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          className="exerciseGif"
        />
        <div className="exerciseCardMuscles">
          <button className="exerciseCardButton">{exercise.bodyPart}</button>
          <button className="exerciseCardButton">{exercise.target}</button>
        </div>
      </div>
      <div className="exerciseCardName">{exercise.name}</div>
    </Link>
  );
};

export default ExerciseCard;
