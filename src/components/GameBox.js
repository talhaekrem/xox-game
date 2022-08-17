import React from "react";
import { useGame } from "../context/GameContext";
import MatchedLines from "./MatchedLines";
function GameBox() {
  const { playersMoves, clickedABox } = useGame();
  const handleClick = (selectedBox) => {
    if (playersMoves[selectedBox] === "*") {
      clickedABox.clicked(selectedBox);
    }
  };
  return (
    <div className="p-relative">
      <MatchedLines />
      <div className="gameBox">
        {[...Array(9)].map((e, index) => (
          <div
            key={index}
            className="gameBoxItem"
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(GameBox);
