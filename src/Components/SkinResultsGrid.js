import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container'
import Camera from '../Components/Camera';
import Grid from '@mui/material/Grid'
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

export default function SkinResultsGrid(props) {
    const { submitted } = props
  
    return (
      <React.Fragment>
        {submitted && <React.Fragment>
            <div id="results">
                <h2>Find the perfect product for you</h2>
            </div>
            <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item class="card" xs={1} sm={2} md={3}>
                <img src={foundation} alt="Estee Lauder Double Wear Stay-in-Place Foundation" width={250}></img>
                <h4><b>Foundation</b></h4>
                <p>0N1 ALABASTER</p>
                </Grid>
                
                <Grid item class="card" xs={1} sm={2} md={3}>
                <img src={concealer}  alt="Double Wear Stay-in-Place Flawless Wear Concealer" width={250}></img>
                <h4><b>Concealer</b></h4>
                <p>1C Light (COOL)</p>
                </Grid>
                
                <Grid item class="card" xs={1} sm={2} md={3}>
                <img src={eyebrows} alt="Brow Now Brow Defining Pencil" width={250}></img>
                <h4><b>Eyebrows</b></h4>
                <p>Dark Brunette</p>
                </Grid>
                
                <Grid item class="card" xs={1} sm={2} md={3}>
                <img src={blush}  alt="Pure Color Envy Sculpting Blush" width={250}></img>
                <h4><b>Blush</b></h4>
                <p>220 Pink Kiss</p>
                </Grid>
                
                <Grid item class="card" xs={1} sm={2} md={3}>
                <img src={bronzer} alt="Bronze Goddess Powder Bronzer" width={250}></img>
                <h4><b>Bronzer</b></h4>
                <p>Light</p>
                </Grid>
                
            </Grid>
            </React.Fragment>}
          </React.Fragment>
    );
}