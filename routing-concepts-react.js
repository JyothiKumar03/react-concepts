/*
React routing allows you to create single-page applications with multiple components and URLs. Here's an explanation of React routing in points:

1 Routing:
-Routing is the process of determining which component to render based on the URL or user navigation.
-It enables navigation between different views or pages in a single-page application.

2 React Router:
-React Router is a popular routing library for React applications.
-It provides a set of components and utilities to handle routing in your application.

3 BrowserRouter:
-The BrowserRouter component is a wrapper component provided by React Router.
-It enables the use of routing features by listening to changes in the browser's URL.

4 Route:
-The Route component is used to define a mapping between a URL path and a component to render.
-It renders the specified component when the URL matches the defined path.

5 Link:
-The Link component is used to create clickable links that navigate between different routes in the application.
-It prevents a full page reload and updates the URL in the browser's address bar.
*/

//one can write the 4 components in component folder also
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Home() {
  return <h1>Home Component</h1>;
}

function AboutUs() {
  return <h1>About Us Component</h1>;
}

function ContactUs() {
  return <h1>Contact Us Component</h1>;
}

function PageNotFound() {
  return <h1>Page Not Found</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
