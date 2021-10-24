import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container'
import Camera from '../Components/Camera';
import Grid from '@mui/material/Grid'
import cream from '../static/cream.jpg'
import clinque from '../static/clinque.jpeg'
import mac from '../static/MAC.jpeg'

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
  

export default function BeautyLabGrid(props) {  
    return (
      <React.Fragment>
            <div id="results">
                <h2>Browse products you own</h2>
            </div>
            <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item class="card" xs={1} sm={2} md={3}>
                <img src={cream} alt="Picture of Estee Lauder Night Cream" width={250}></img>
                <h4><b>Estee Lauder Night Cream</b></h4>
                <p>You can apply this to your whole face with your hands before bed or whenever your skin is feeling dry</p>
                </Grid>
                
                <Grid item class="card" xs={1} sm={2} md={3}>
                <img src={clinque}  alt="Picture of Clinque Foundation in Shade Cardamom" width={250}></img>
                <h4><b>Clinque Foundation (Shade Cardamom)</b></h4>
                <p>You can apply this to your whole face with a moist beauty blender or foundation brush and then follow up with a finishing powder</p>
                </Grid>
                
                <Grid item class="card" xs={1} sm={2} md={3}>
                <img src={mac} alt="Picture of Mac Blush in Shade Kiss" width={250}></img>
                <h4><b>Mac Blush (Shade Kiss)</b></h4>
                <p>You can apply this to to your check bones with a blush brush or with your index and pointer fingers</p>
                </Grid>
                
                
            </Grid>
          </React.Fragment>
    );
}