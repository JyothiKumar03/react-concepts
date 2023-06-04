/*
The useMemo hook is a built-in React hook that allows you to memoize the result of a function call and cache it for future use.
Here's an explanation of the useMemo hook in points:

1 Memoization:
-Memoization is a technique used to optimize expensive computations by caching the results and reusing them if the inputs are the same.
-It helps avoid unnecessary re-computation and improves the performance of your application.

2 useMemo Hook:
-The useMemo hook is used to memoize the result of a function call and cache it.
-It accepts two parameters: a function and an array of dependencies.
-The function parameter is the function whose result needs to be memoized.
-The dependencies array is an optional parameter that specifies the values that the function depends on. If any of the dependencies change, the function will be re-executed.

3 Caching:
-When the component renders, the useMemo hook checks if the dependencies in the array have changed.
-If the dependencies have not changed since the last render, the cached result of the function is returned.
-If the dependencies have changed, the function is re-executed, and the new result is cached for future use.

*/
import React, { useState, useMemo } from 'react';

function FactorialCalculator() {
  const [number, setNumber] = useState(0);

  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  const handleChange = (e) => {
    setNumber(Number(e.target.value));
  };

  return (
    <div>
      <label>
        Enter a number:
        <input type="number" value={number} onChange={handleChange} />
      </label>
      <p>Factorial: {factorial}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Factorial Calculator</h1>
      <FactorialCalculator />
    </div>
  );
}

export default App;
