import logo from './static/Estee-Lauder-Logo.png';
import './App.css';
import * as React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div id="wrapper">
      <header id="header">
        <img src={logo} className="App-logo" alt="Home" width="70" height="70"/>
        <div class="inner">
								<h1>Hi, I'm Iris! </h1><br/> <h2>Your personal beauty assistant</h2> 
								<p> I'm here to help you through your beauty journey. </p>
								<button alt="Button to chat now"> Chat Now </button> 
							</div>
      </header>

   

      <footer id="footer">
				<p className="copyright"> The Estee Lauder Expereince: Your everyday personal assistant.</p>
			</footer>
      <script src="./static/jquery.min.js"></script>
      <script src="./static/browser.min.js"></script>
      <script src="./static/breakpoints.min.js"></script>
      <script src="./static/util.js"></script>
      <script src="./static/main.js"></script>
    </div>
    


  );
}


export default App;


