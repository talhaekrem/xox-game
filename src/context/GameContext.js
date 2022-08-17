import { useState, useContext, createContext, useMemo, useEffect } from "react";
import { reset } from "../consts";
import { paintBox } from "../helpers";
import { winnableStates } from "../consts";
import { findAllElementsIndex, removeHovers } from "../helpers";
const GameContext = createContext();
export const GameProvider = ({ children }) => {
  //true, X demek, false ise O
  const [playersTurn, setPlayersTurn] = useState(true);
  const [playersMoves, setPlayersMoves] = useState(reset);
  const [round, setRound] = useState(0);
  const [winner, setWinner] = useState("");
  const [matchedBoxes, setMatchedBoxes] = useState("");
  const [score, setScore] = useState({ x: 0, o: 0 });

  const clickedABox = useMemo(
    () => ({
      clicked: (selectedBox) => {
        setRound((prev) => prev + 1);
        let temp = [...playersMoves];
        temp.splice(selectedBox, 1, playersTurn ? "X" : "O");
        setPlayersMoves(temp);
        paintBox(selectedBox, playersTurn);
        setPlayersTurn((prev) => !prev);
      },
    }),
    [playersMoves, playersTurn]
  );
  const resetGame = useMemo(
    () => ({
      reset: () => {
        setScore((prev) =>
          winner === "X"
            ? { x: prev.x + 1, o: prev.o }
            : winner === "O"
            ? { x: prev.x, o: prev.o + 1 }
            : { x: prev.x, o: prev.o }
        );
        setPlayersTurn(true);
        setPlayersMoves(reset);
        setRound(0);
        setWinner("");
        setMatchedBoxes("");
        let boxes = [...document.getElementsByClassName("gameBoxItem")];
        boxes.forEach((element) => {
          element.className = "gameBoxItem xTurn";
          element.innerHTML = "";
        });
      },
    }),
    [winner]
  );

  const isWon = (allXs, allOs) => {
    let gameResult = "DRAW";
    let allXsStr = allXs.join("");
    let allOsStr = allOs.join("");
    let x = 0;
    while (x < allXs.length) {
      let selectedBox = allXs[x];
      if (winnableStates[selectedBox]) {
        let resultX = winnableStates[selectedBox].some((reg) => {
          let respX = allXsStr.match(new RegExp(`[${reg}]`, "g"));
          if (respX.length === 3) {
            setMatchedBoxes(respX);
            setWinner("X");
            return true;
          }
          return false;
        });
        if (resultX) {
          gameResult = "X";
          break;
        } else {
          x++;
        }
      } else {
        x++;
      }
    }

    let o = 0;
    while (o < allOs.length) {
      let selectedBox = allOs[o];
      if (winnableStates[selectedBox]) {
        let resultO = winnableStates[selectedBox].some((reg) => {
          let respO = allOsStr.match(new RegExp(`[${reg}]`, "g"));
          if (respO.length === 3) {
            setMatchedBoxes(respO);
            setWinner("O");
            return true;
          }
          return false;
        });
        if (resultO) {
          gameResult = "O";
          break;
        } else {
          o++;
        }
      } else {
        o++;
      }
    }
    return gameResult;
  };
  useEffect(() => {
    if (5 <= round && !playersMoves.includes("-")) {
      let allXs = findAllElementsIndex(playersMoves, "X");
      let allOs = findAllElementsIndex(playersMoves, "O");
      let result = isWon(allXs, allOs); //sorun var
      if (result === "X" || result === "O") {
        if (round !== 9) {
          let temp = [...playersMoves];
          let finishedGame = temp.join("").replaceAll("*", "-").split("");
          setPlayersMoves(finishedGame);
          removeHovers();
        }
      } else if (round === 9) {
        setWinner("DRAW");
      }
    }
  }, [playersMoves, round]);

  const values = {
    playersMoves,
    matchedBoxes,
    playersTurn,
    winner,
    resetGame,
    score,
    clickedABox,
  };

  //kutulardaki kırmızı veya mavi hover efekti için her sıra değiştinde çalışan effect
  useEffect(() => {
    let boxes = [...document.getElementsByClassName("gameBoxItem")];
    boxes.forEach((element) => {
      if (!element.classList.contains("selected")) {
        if (playersTurn) {
          element.classList.add("xTurn");
          element.classList.remove("oTurn");
        } else {
          element.classList.add("oTurn");
          element.classList.remove("xTurn");
        }
      } else {
        element.classList.remove("xTurn");
        element.classList.remove("oTurn");
      }
    });
  }, [playersTurn]);

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};

export const useGame = () => useContext(GameContext);
