import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-yellow-200 px-3 py-2 rounded-3xl">
            <button
              className="outline-dashed px-4 py-1 rounded-full shadow-lg text-black bg-red-600 outline-red-600"
              onClick={() => changeColor("red")}
            >
              Red
            </button>
            <button
              className="outline-dashed px-4 py-1 rounded-full shadow-lg text-black bg-green-600 outline-green-600"
              onClick={() => changeColor("green")}
            >
              Green
            </button>
            <button
              className="outline-dashed px-4 py-1 rounded-full shadow-lg text-black bg-yellow-600 outline-yellow-600"
              onClick={() => changeColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-dashed px-4 py-1 rounded-full shadow-lg text-black bg-orange-600 outline-red-600"
              onClick={() => changeColor("orange")}
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
