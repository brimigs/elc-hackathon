import React from "react";
import logo from '../static/Estee-Lauder-Logo.png';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'
import { Modal } from "@mui/material";
import BasicModal from "./Modal";
import ColorModal from "./ColorModal";


const MainButton = styled(Button)({
  fontSize: "0.9rem",
  letterSpacing: "0.22em",
  padding: "0.6rem 2rem",
  marginTop: "0.6rem",
});

const NavButton = styled(MainButton)({
  margin: "0",
  width: "100%",
  height: "100%",
  padding: "0.6rem 1rem"
})

export default function Header() {
  var content;

  if (window.location.pathname === "/Beauty") {
  content = (
    <React.Fragment>
        <h1>Welcome to the Beauty Lab</h1>
         <BasicModal />   
    </React.Fragment>)
  }
  else if (window.location.pathname === "/App") {
    content = (
    <React.Fragment>
          <h1>Hi, I'm Iris! </h1><br/> <h2>Your personal beauty assistant</h2> 
          <p> I'm here to help you through your beauty journey. </p>
          <MainButton variant="contained" alt="Button to chat now"> Chat Now </MainButton> 
    </React.Fragment>)
  }
  else if (window.location.pathname === "/Color") {
    content = (
      <React.Fragment>
            <h1>Welcome to the Color Lab</h1>
            <p> Take a selfie to get an accurate color match for makeup. </p>
            <ColorModal />  
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
          <li><NavButton onClick={() => {window.location.href="/Beauty"}}>Get Ready with Me</NavButton></li>
          <li class="is-middle" ><NavButton onClick={() => {window.location.href="/Color"}}>Find Your Shades</NavButton ></li>
        </ul>
      </nav>
    </header>
  )
}