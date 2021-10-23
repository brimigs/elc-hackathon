import logo from '../static/Estee-Lauder-Logo.png';
import React from "react";
// Might have to import the pages


export default function Color() {
  return (
    <div id="wrapper">
      <header id="header">
        <img src={logo} className="App-logo" alt="Estee Lauder Logo" />
       
							<div className="inner">
								<h1>Welcome to the Color Lab</h1>
                <p> Take a selfie to get an accurate color match for makeup. </p>
                <button> Scan Now </button>                       
        </div>        
      </header>


      


    <footer id="footer">
				<p className="copyright"> The Estee Lauder Expereince: Your everyday personal assistant.</p>
			</footer>

      <script src="../static/jquery.min.js"></script>
      <script src="../static/browser.min.js"></script>
      <script src="../static/breakpoints.min.js"></script>
      <script src="../static/util.js"></script>
      <script src="../static/main.js"></script>
  </div>
  );
}
