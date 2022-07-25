import React, { useContext } from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import { VisibilityContext, ScrollMenu } from "react-horizontal-scrolling-menu";
import ExerciseCard from "./ExerciseCard";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <button onClick={() => scrollPrev("smooth")} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </button>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <button onClick={() => scrollNext("smooth")} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </button>
  );
};
const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, isBodyPart }) => {
  return (
    <div className="container">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            {isBodyPart ? (
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciseCard item={item} />
            )}{" "}
          </Box>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default HorizontalScrollbar;
