import GameBox from "./components/GameBox";
import PlayersTurnArea from "./components/PlayersTurnArea";
import { GameProvider } from "./context/GameContext";
function App() {
  return (
    <div className="app">
      <h1 className="fw-100">Tic-tac-toe</h1>
      <a
        rel="noreferrer"
        href="https://github.com/talhaekrem"
        target="_blank"
        className="githubLink"
      >
        <pre>My Github Profile</pre>
      </a>
      <GameProvider>
        <GameBox />
        <PlayersTurnArea />
      </GameProvider>
    </div>
  );
}

export default App;
