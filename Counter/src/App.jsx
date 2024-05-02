import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 15;

  const [counter, setCounter] = useState(16);
  const counterNum = () => {
    setCounter(counter + 1);
    // console.log(counter);
  };
  const removeNum = () => {
    setCounter(counter - 1);
    // console.log(counter);
  };
  return (
    <>
      <h1 className="welcome">Welcome Counter Practice...</h1>
      <h1 className="counter">Count the number : {counter}</h1>
      <button className="button1" onClick={counterNum}>
        Add Number one by one
      </button>{" "}
      <button className="button2" onClick={removeNum}>
        Remove Number one by one
      </button>
    </>
  );
}

export default App;
