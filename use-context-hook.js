/*
The useContext hook is a built-in React hook that allows components to access and consume values from a context object created by the createContext function.
Here's an explanation of the useContext hook in detail:

1 Context:
-Context is a feature introduced in React to share data between components without having to pass props through every level of the component tree.
-It provides a way to share state or values that are meant to be accessed by multiple components.

2 createContext:
-The createContext function is used to create a context object. It returns an object with two properties: Provider and Consumer.
-The Provider component is used to wrap the components that need access to the context value.
-The Consumer component is the older way of consuming context values and is not commonly used with the useContext hook.

3 useContext Hook:
-The useContext hook is used within a functional component to access the current value of a context object.
-It accepts a context object as a parameter, returned by createContext, and returns the current value of that context.
-It allows components to consume context values without wrapping them in a Consumer component.
*/

import React, { useContext } from 'react';

// Create a context object
const MyContext = React.createContext();

// Component that provides the context value
function ParentComponent() {
  const contextValue = 'Hello, useContext!';
  return (
    <MyContext.Provider value={contextValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

// Component that consumes the context value
function ChildComponent() {
  const contextValue = useContext(MyContext);
  return <h1>{contextValue}</h1>;
}

function App() {
  return (
    <div>
      <ParentComponent />
    </div>
  );
}

export default App;
