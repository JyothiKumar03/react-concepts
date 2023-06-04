/*
useState Hook:

-The useState hook is a built-in hook in React that allows functional components to have state.
-It returns an array with two elements: the current state value and a function to update that state.
-The initial state value is passed as an argument to the useState hook during component initialization.
-The state value can be of any data type, such as a number, string, boolean, object, or an array.
-Whenever the state is updated using the update function, the component will re-render with the new state value.
-State updates are asynchronous and are batched together for better performance.
-Multiple state variables can be used in a single component by calling the useState hook multiple times.
*/

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
