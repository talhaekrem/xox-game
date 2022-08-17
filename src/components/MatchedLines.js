import React from "react";
import { svgLines } from "../consts";
import { useGame } from "../context/GameContext";
function MatchedLines() {
  const { matchedBoxes: lines } = useGame();
  const drawing = `line${lines[0]}${lines[2]}`;
  return (
    <div className={`matchedLinesBox ${lines === "" ? "d-none": ""}`}>
      <svg
        id="testss"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          strokeWidth="8"
          className="linePath"
          strokeLinecap="round"
          x1={svgLines[drawing]?.x1}
          y1={svgLines[drawing]?.y1}
          x2={svgLines[drawing]?.x2}
          y2={svgLines[drawing]?.y2}
          stroke="rgba(0,0,0,0.75)"
        />
      </svg>
    </div>
  );
}

export default React.memo(MatchedLines);
