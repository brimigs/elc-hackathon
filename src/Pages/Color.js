import logo from '../Estee-Lauder-Logo.png';
import React from "react";


export default function Color() {
  return (
    <div id="wrapper">
      <header id="header">
        <img src={logo} className="App-logo" alt="Estee Lauder Logo" />
       
							<div class="inner">
								<h1>Welcome to the Color Lab</h1>
                <p> Take a selfie to get an accurate color match for makeup. </p>
                <button> Scan Now </button>
                               
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
