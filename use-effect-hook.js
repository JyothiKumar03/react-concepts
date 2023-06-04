/*
1 useEffect Hook:
-The useEffect hook is a built-in React hook that allows you to perform side effects in functional components.
-Side effects include tasks such as data fetching, subscriptions, or manually interacting with the DOM.
-It is used to handle component lifecycle events, such as mounting, updating, and unmounting.

2 Basic Usage:
-The useEffect hook takes two parameters: a callback function and an optional array of dependencies.
-The callback function contains the code that should be executed as a side effect.
-The dependencies array specifies the values that the effect depends on. If any of the dependencies change, the effect is re-executed.

3 Mounting and Unmounting:
-When the component is mounted, the useEffect hook runs the callback function after the initial render.
-If the dependencies array is empty, the effect runs only once after the initial render.
-To handle cleanup tasks when the component is unmounted, the callback function can return a cleanup function.

It has usecases like data-fetching using API calls, sideEffects, Event Listeners, TIme intervals, dependency tracking etc
*/
//AXIOS API call
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
//FETCH API CALL
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

