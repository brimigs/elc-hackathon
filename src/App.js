import logo from './static/Estee-Lauder-Logo.png';
import Footer from './Components/Footer';
import Header from './Components/Header';
import * as React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// {if (window.location.href === "App") <AppHeader />}

function App() {
  return (
    <div id="wrapper">
      <Header />
      <Footer/>
    </div>
  );
}


export default App;


