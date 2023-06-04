import React, { useState } from "react";
//styling is optional, you can ignore this part of code
const countStyle = {
  App: {
    fontFamily: "sans-serif",
    textAlign: "center"
  },
  counterButton: {
    fontSize: 50,
    border: "1px solid black",
    padding: 5,
    width: 70,
    height: 70,
    cursor: "pointer"
  },
  counter: {
    fontSize: 50,
  }
};
//main logic for counter, style parameter is optional
const App = () => {
  const [counter, setCounter] = useState(0);//creating useState hook
  return (
    <div className="App" style={countStyle.App}>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
        className="counter-button"
        style={countStyle.counterButton}
      >
        +
      </button>
      <span className="counter" style={countStyle.counter}>
        {counter}
      </span>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
        className="counter-button"
        style={countStyle.counterButton}
      >
        -
      </button>
    </div>
  );
};
export default App;
