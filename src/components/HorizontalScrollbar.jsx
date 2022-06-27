import React, { useContext } from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ExerciseCard from "./ExerciseCard";

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return <AiOutlineRight onClick={() => scrollNext()} />;
};
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return <AiOutlineLeft onClick={() => scrollPrev()} />;
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow}>
      {data.map((item) => (
        <div
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}>
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </div>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
