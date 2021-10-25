import React from "react";
import logo from '../static/Estee-Lauder-Logo.png';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'
import { Modal, Box, TextField } from "@mui/material";
import ScanModal from "./ScanModal";
import ColorModal from "./ColorModal";
import ProductResultsModal from "./ProductResultsModal";
import ChatModal from './ChatModal'

const MainButton = styled(Button)({
  fontSize: "0.9rem",
  letterSpacing: "0.22em",
  padding: "0.6rem 2rem",
  marginTop: "0.6rem",
});

const LogTextField = styled(TextField)({
  color: 'white',
})

export default function LoginComponent(props) {
  
  
  return (
    <header id="header">
      <a href='/App'>
        <img src={logo} className="App-logo" alt="Estee Lauder Logo" alt="Home" width="70" height="70"/>
      </a>
      <div className="content">
        <div className="inner">
          <h1>Welcome to Iris!</h1>
          <p>Please Log In</p>
          <LogTextField
            inputProps={{ sx: {color: '#fff'} }}
            inputLabelProps={{ style: {color: '#fff'}}}
            className="login"
            variant="outlined"
            label="Username"/>
          <LogTextField
            inputProps={{ sx: {color: '#fff'} }}
            inputLabelProps={{ style: {color: '#fff'}}}
            className="login"
            variant="outlined"
            label="Password"/>
          <MainButton>Log In</MainButton>
        </div>
      </div>
    </header>
  )
}