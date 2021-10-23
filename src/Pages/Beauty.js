import logo from '../Estee-Lauder-Logo.png';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// import Color from './Color'
import ElcRouter from '../Components/Router';
// Might have to import the pages


export default function Beauty() {
  return (
    <div className="App">
    <header id="header">
      <img src={logo} className="App-logo" alt="Home" />
      <div class="inner">
          <h1>Welcome to the Beauty Lab</h1>
          <button alt="Button to scan a product"> Scan A Product </button>                
        </div>
      <ElcRouter/>
    
    </header>
    <footer id="footer">
				<p class="copyright"> The Estee Lauder Expereince: Your everyday personal assistant.</p>
			</footer>
      <script src="static/jquery.min"></script>
			<script src="static/browser.min"></script>
			<script src="static/breakpoints.min"></script>
			<script src="static/util"></script>
			<script src="static/main"></script>
  </div>
  );
}


