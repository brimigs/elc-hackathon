import React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Grow,
  Container,
  IconButton,
  Backdrop,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ProductCapture from "./ProductCamera"
import { styled } from '@mui/material/styles'
import clinque from '../static/clinque.jpeg'

const style = {
    mainBox: {
      position: 'absolute',
      top: '25%',
      left: '30%',
      transform: 'translate(-50%, -50%)',
      width: "40%",
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      minHeight: '20%',
      overflowY: 'scroll',
      borderRadius: 10,
      display: 'flex',
      flexDirection: "column",
      color: 'black'
    },
    heading: {
      minHeight: 50,
      display: 'flex',
      justifyContent: "flex-end",
    }
  };

export default function ProductResultsModal(props) {
    const {openProductResults, setOpenProductResults, imgSrc, setImgSrc} = props

    return (
      <div>        
        <Modal
          open={openProductResults}
          onClose={() => setOpenProductResults(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps = {{timeout: 500}}
        >
          <Grow in={openProductResults}>
          <Box sx={style.mainBox}>
            <Box sx={style.heading}>
                  <Box sx={{flex: 1}}>BEAUTY LAB</Box>
                  <IconButton aria-label="close" onClick={() => setOpenProductResults(false)}>
                      <CloseIcon />
                  </IconButton>
              </Box>

                <Box sx={{display:'flex',justifyContent: "center", marginBottom: '20px'}}>
                  <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item class="card" xs={1} sm={2} md={3}>
                      <img src={imgSrc} alt="Photo taken" width={250}/>
                    </Grid>
                    <Grid item class="card" xs={1} sm={2} md={3}>
                      <img src={clinque} width={250}></img>
                    </Grid>
                  </Grid>
                </Box>
                <p> This product is clinque foundation in shade cardamom. 
                    You can apply this product all over your face by using a moist beauty blender or a foundation brush. </p> 
            </Box>
          </Grow>
          
        </Modal>
      </div>
    );
}