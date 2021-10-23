import logo from './Estee-Lauder-Logo.png';
import './App.css';
import * as React from 'react';
import ElcRouter from './Components/Router';



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


export default App;


