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
import Chat from './Chat'

const style = {
    mainBox: {
      position: 'absolute',
      top: '10%',
      left: '30%',
      transform: 'translate(-50%, -50%)',
      width: "40%",
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      minHeight: '40%',
      maxHeight: '70%',
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

const MainButton = styled(Button)({
    fontSize: "0.9rem",
    letterSpacing: "0.22em",
    padding: "0.6rem 2rem",
    marginTop: "0.6rem",
  });

export default function ChatModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div>        
        <MainButton variant="contained" alt="Button to start chat" onClick={handleOpen}>Start Chat</MainButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps = {{timeout: 500}}
        >
          <Grow in={open}>
          <Box sx={style.mainBox}>
            <Box sx={style.heading}>
                  <Box sx={{flex: 1}}>I'm Your Personal Beauty Assistant, Iris! &#128075;</Box>
                  <IconButton aria-label="close" onClick={handleClose}>
                      <CloseIcon />
                  </IconButton>
              </Box>
              <Chat />
                
            </Box>
          </Grow>
          
        </Modal>
      </div>
    );
}