/*
useRef Hook:

-The useRef hook is used to create a mutable reference that persists across re-renders in a functional component.
-It returns a mutable ref object with a current property that can be used to store and access a value.
-Unlike state variables created with useState, changing the ref's current value does not trigger a re-render.
-The ref value can hold any mutable value, such as a DOM element reference, previous props or state values, or other mutable data.
-The current property can be accessed and updated using the .current property of the ref object.
*/
import React, { useRef, useEffect } from 'react';

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    // Access the input value using the ref
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Log Value</button>
    </div>
  );
}

export default App;
