import { useState } from "react";
import "./App.css";
import FirstPage from "./Component/FirstPage";
import PlayGame from "./Component/PlayGame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <div>
      {isGameStarted ? <PlayGame /> : <FirstPage toggle={toggleGamePlay} />}
      {/* <FirstPage /> */}
    </div>
  );
}

export default App;
