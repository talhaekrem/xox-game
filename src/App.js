import GameBox from "./components/GameBox";
import PlayersTurnArea from "./components/PlayersTurnArea";
import { GameProvider } from "./context/GameContext";
function App() {
  return (
    <div className="app">
      <h1 className="pb-3 fw-100">Tic-tac-toe</h1>
      <GameProvider>
        <GameBox />
        <PlayersTurnArea />
      </GameProvider>
    </div>
  );
}

export default App;
