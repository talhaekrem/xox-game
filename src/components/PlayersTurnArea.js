import React from "react";
import { useGame } from "../context/GameContext";
import OSvg from "./OSvg";
import XSvg from "./XSvg";
function PlayersTurnArea() {
  const { playersTurn, winner, resetGame, score } = useGame();
  return (
    <div className="bottomBar">
      {winner ? (
        <div className="bottomFlex winnerInfo">
          {winner === "X" ? (
            <div className="d-flex">
              <div className="svgBox">
                <XSvg className="growAnimation" />
              </div>
              <h4 className="wonText xColor">KAZANDI</h4>
            </div>
          ) : winner === "O" ? (
            <div className="d-flex">
              <div className="svgBox">
                <OSvg className="growAnimation" />
              </div>
              <h4 className="wonText oColor">KAZANDI</h4>
            </div>
          ) : (
            <div className="d-flex">
              <div className="svgBox">
                <XSvg className="growAnimation" />
              </div>
              <div className="svgBox">
                <OSvg className="growAnimation" />
              </div>
              <h4 className="wonText">BERABERE</h4>
            </div>
          )}
          <button className="restartBtn" onClick={resetGame.reset}>
            Yeni Oyun
          </button>
        </div>
      ) : (
        <div className="bottomFlex playersNav">
          <h3>{score.x}</h3>
          <XSvg className={`XandO ${playersTurn ? "" : "lowOpacity"}`} />
          <OSvg className={`XandO ${playersTurn ? "lowOpacity" : ""}`} />
          <h3>{score.o}</h3>
        </div>
      )}
    </div>
  );
}

export default React.memo(PlayersTurnArea);
