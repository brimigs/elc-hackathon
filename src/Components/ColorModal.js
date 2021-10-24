import React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Grow,
  Container,
  IconButton
} from '@mui/material';
import Camera from '../Components/Camera';
import CloseIcon from '@mui/icons-material/Close';
import WebcamCapture from "./Camera"
import { styled } from '@mui/material/styles'

const style = {
    mainBox: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 700,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      minHeight: '65%',
      overflowY: 'scroll',
      borderRadius: 10,
      display: 'flex',
      flexDirection: "column",
    },
    heading: {
      minHeight: 50,
      display: 'flex',
      justifyContent: "flex-end"
    }
  };
  
  const MainButton = styled(Button)({
    fontSize: "0.9rem",
    letterSpacing: "0.22em",
    padding: "0.6rem 2rem",
    marginTop: "0.6rem",
  });


export default function ColorModal() {
    const [open, setColorOpen] = React.useState(false);
    const handleColorOpen = () => setColorOpen(true);
    const handleColorClose = () => setColorOpen(false);
  
    return (
      <div>
        <MainButton variant="contained" alt="Button to scan a product" onClick={handleColorOpen}>Scan Face</MainButton>
        <Modal
          open={open}
          onClose={handleColorClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style.mainBox}>
            <Box sx={style.heading}>
                <IconButton aria-label="close" onClick={handleColorClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <WebcamCapture />
            
          </Box>
        </Modal>
      </div>
    );
}