import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Beauty from '../Pages/Beauty'
import Color from '../Pages/Color'
import App from '../App'
// Might have to import the pages


export default function ElcRouter() {
  return (
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
  );
}