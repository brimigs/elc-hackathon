import React from "react";
import logo from '../static/Estee-Lauder-Logo.png';
import Button from '@mui/material/Button';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(theme => ({
  centralButton: {
    width: "10rem",
    height: "3rem",
    letterSpacing: "0.2rem"
  },
}))

export default function Header() {
  const classes = useStyles();

  var content;

  if (window.location.pathname === "/Beauty") {
  content = (
    <React.Fragment>
        <h1>Welcome to the Beauty Lab</h1>
        <Button className={classes.centralButton} variant="contained" alt="Button to scan a product"> Scan A Product </Button>                
    </React.Fragment>)
  }
  else if (window.location.pathname === "/App") {
    content = (
    <React.Fragment>
          <h1>Hi, I'm Iris! </h1><br/> <h2>Your personal beauty assistant</h2> 
          <p> I'm here to help you through your beauty journey. </p>
          <Button className={classes.centralButton} variant="contained" alt="Button to chat now"> Chat Now </Button> 
    </React.Fragment>)
  }
  else if (window.location.pathname === "/Color") {
    content = (
      <React.Fragment>
            <h1>Welcome to the Color Lab</h1>
            <p> Take a selfie to get an accurate color match for makeup. </p>
            <Button className={classes.centralButton} variant="contained" alt="Button to scan now"> Scan Now </Button>
      </React.Fragment>
    )
  }
  
  return (
    <header id="header">
      <a href='/App'>
        <img src={logo} className="App-logo" alt="Estee Lauder Logo" alt="Home" width="70" height="70"/>
      </a>
      <div className="content">
        <div className="inner">
          {content}
        </div>
      </div>
      <nav className = "use-middle">
        <ul>
          <li><Button>Get Ready with Me</Button></li>
          <li class="is-middle"><a href="/Color">Find Your Shades</a></li>
        </ul>
      </nav>
    </header>
  )
}