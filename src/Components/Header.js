import React from "react";
import logo from '../static/Estee-Lauder-Logo.png';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'
import { Modal, Box } from "@mui/material";
import ScanModal from "./ScanModal";
import ColorModal from "./ColorModal";
import ProductResultsModal from "./ProductResultsModal";

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
  padding: "0.6rem 1rem",
  fontSize: "0.8rem",
})

export default function Header(props) {
  const [hue, setHue] = React.useState(0.);
  const [saturation, setSaturation] = React.useState(0.);
  const [value, setValue] = React.useState(0.);

  var content;

  const hsl_colors = 'hsl('+hue+','+saturation+'%,'+value+'%)'
  if (window.location.pathname === "/Beauty/" || window.location.pathname === "/Beauty") {
  content = (
    <React.Fragment>
        <h1>Welcome to the Beauty Lab</h1>
        <p>Find out more about your product</p>
         <ScanModal {...props}/>
         <ProductResultsModal {...props}/>
    </React.Fragment>)
  }
  else if (window.location.pathname === "/App/" || window.location.pathname === "/App") {
    content = (
    <React.Fragment>
          <h1>Hi, I'm Iris! </h1><br/> <h2>Your personal beauty assistant</h2> 
          <p> I'm here to help you through your beauty journey. </p>
          <MainButton variant="contained" alt="Button to chat now"> Chat Now </MainButton> 
    </React.Fragment>)
  }
  else if (window.location.pathname === "/Color/" || window.location.pathname === "/Color") {
    content = (
      <React.Fragment>
      { !props.submitted ? 
            <React.Fragment>
                  <h1>Welcome to the Color Lab</h1>
                  <p> Take a selfie to get an accurate color match for makeup. </p>
                  <ColorModal
                    setHue = {setHue}
                    setSaturation = {setSaturation}
                    setValue = {setValue}
                    setSubmitted = {props.setSubmitted}
                  />  
            </React.Fragment> :

            <React.Fragment>
                <h1>Your Color Lab Results</h1>
                <p>Hue: {hue.toFixed(0)} Saturation: {saturation.toFixed(0)} Value: {value.toFixed(0)}</p>
                <Box sx={{minHeight: "4rem", minWidth: "8rem", bgcolor: hsl_colors}}/>
            </React.Fragment>
          }
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
          <li><NavButton onClick={() => {window.location.href="/Color"}}>Find Your Shades</NavButton ></li>
          <li class="is-middle"><NavButton onClick={() => {window.location.href="/Beauty"}}>Get Ready with Me</NavButton></li>
        </ul>
      </nav>
    </header>
  )
}