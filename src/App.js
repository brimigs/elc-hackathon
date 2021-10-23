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
        <img src={logo} className="App-logo" alt="Home" />
          <ElcRouter/>
      </header>

      <body> 
        <h1>Hi, I'm Iris!</h1> 
        <h2>Your personal beauty assistant</h2> 
        <button> Chat Now </button>
      </body>

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


