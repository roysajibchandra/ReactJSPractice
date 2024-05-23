import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="bg-slate-500 grid place-content-center h-screen">
      <h1 className="text-6xl text-yellow-300 font-bold my-6">Stop Watch</h1>
      <div className="text-2xl text-center font-medium mb-2">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="text-xl font-medium text-center">
        {running ? (
          <button
            className="text-red-500 mx-4 bg-slate-800 rounded-lg"
            onClick={() => {
              setRunning(false);
            }}
          >
            Stop
          </button>
        ) : (
          <button
            className="text-red-500 mx-4 bg-slate-800 rounded-lg"
            onClick={() => {
              setRunning(true);
            }}
          >
            Start
          </button>
        )}

        <button
          className="text-red-500 mx-4 bg-slate-800 rounded-lg"
          onClick={() => {
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
