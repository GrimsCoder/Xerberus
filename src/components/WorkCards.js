import React, { useContext } from "react";
import { work } from "../data/constants";
import { GlobalContext } from "./GlobalContext";

const WorkCards = () => {
  const context = useContext(GlobalContext);

  return (
    <div className="cardContainer">
      {work.map(({ title, what, funding, output, image, workcard, id }) => (
        <div
          className={workcard}
          key={id}
          id={id}
          ref={
            id === 0
              ? context.refs0
              : id === 1
              ? context.refs1
              : id === 2
              ? context.refs2
              : id === 3
              ? context.refs3
              : null
          }
        >
          <div className="videoContainer">
            <img src={image} alt="" />
          </div>
          <div className="halfContainer">
            <div className="headerCard">
              <h2>{title}</h2>
            </div>
            <div className="cardInfo">{what}</div>
            <div className="hr" />
            <h2 className="text-white font-bold">OUTPUT</h2>
            <div className="cardInfo">{output}</div>
            <div className="hr" />
            <h2 className="text-white font-bold">FUNDING</h2>
            <div className="cardInfo">{funding}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCards;
