import logo from '../Estee-Lauder-Logo.png';
import React from "react";


export default function Beauty() {
  return (
    <div className="App">
    <header id="header">
      <img src={logo} className="App-logo" alt="Home" />
      <div class="inner">
          <h1>Welcome to the Beauty Lab</h1>
          <button alt="Button to scan a product"> Scan A Product </button>                
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


