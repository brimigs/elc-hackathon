import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Color from './Pages/Color'
import Beauty from './Pages/Beauty'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/App">Home</Link>
          </li>
          <li>
            <Link to="/Beauty">Get Ready with Me</Link>
          </li>
          <li>
            <Link to="/Color">Find Your Shades</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/App">
            <App />
          </Route>
          <Route exact path="/Beauty">
            <Beauty />
          </Route>
          <Route exact path="/Color">
            <Color />
          </Route>
        </Switch>
      </div>
    </Router>
    <script src="./static/jquery.min.js"></script>
    <script src="./static/browser.min.js"></script>
    <script src="./static/breakpoints.min.js"></script>
    <script src="./static/util.js"></script>
    <script src="./static/main.js"></script>
  </React.StrictMode>,
  document.getElementById('react-nav')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
