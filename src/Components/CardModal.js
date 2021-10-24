import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Camera from '../Components/Camera';
import WebcamCapture from "./Camera"
import { styled } from '@mui/material/styles'
import foundation from '../static/foundation.webp'
import concealer from '../static/concealer.png'
import eyebrows from '../static/eyebrows.png'
import blush from '../static/Blush.png'
import bronzer from '../static/bronzer.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: '24',
    p: '4',
  };
  
  const MainButton = styled(Button)({
    fontSize: "0.9rem",
    letterSpacing: "0.22em",
    padding: "0.6rem 2rem",
    marginTop: "0.6rem",
  });

export default function CardModal() {
    // const [open, setColorOpen] = React.useState(false);
    // const handleColorOpen = () => setColorOpen(true);
    // const handleColorClose = () => setColorOpen(false);
  
    return (
      <div>
        {/* <MainButton variant="contained" alt="Button to scan a product" onClick={handleColorOpen}>Results</MainButton>
        <Modal
          open={open}
          onClose={handleColorClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}> */}
          <div class="inner">
                <h1>Your results:</h1>
            </div>
            <div class = "cards">

                <div class="card">
                <img src={foundation} alt="Estee Lauder Double Wear Stay-in-Place Foundation" style="width:100%"></img>
                <h4><b>Foundation</b></h4>
                <p>0N1 ALABASTER</p>
                </div>
                
                <div class="card">
                <img src={concealer}  alt="Double Wear Stay-in-Place Flawless Wear Concealer" style="width:100%"></img>
                <h4><b>Concealer</b></h4>
                <p>1C Light (COOL)</p>
                </div>
                
                <div class="card">
                <img src={eyebrows} alt="Brow Now Brow Defining Pencil" style="width:100%"></img>
                <h4><b>Eyebrows</b></h4>
                <p>Dark Brunette</p>
                </div>
                
                <div class="card">
                <img src={blush}  alt="Pure Color Envy Sculpting Blush" style="width:100%"></img>
                <h4><b>Blush</b></h4>
                <p>220 Pink Kiss</p>
                </div>
                
                <div class="card">
                <img src={bronzer} alt="Bronze Goddess Powder Bronzer" style="width:100%"></img>
                <h4><b>Bronzer</b></h4>
                <p>Light</p>
                </div>
                
            </div>
{/* 
          </Box>
        </Modal> */}
      </div>
    );
}