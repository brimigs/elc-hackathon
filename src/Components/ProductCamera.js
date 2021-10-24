import React from "react";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Loading from './Loading';
import Webcam from "react-webcam";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import LoopIcon from '@mui/icons-material/Loop';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import qs from 'qs';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const style = {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
}

const MainButton = styled(Button)({
  fontSize: "0.9rem",
  letterSpacing: "0.22em",
  padding: "0.6rem 2rem",
  marginTop: "0.6rem",
});

export default function  ProductCapture (props) {
    const { closeModal, openProductResults, setOpenProductResults, imgSrc, setImgSrc } = props
    const webcamRef = React.useRef(null);
    const [toggle, setToggle] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      setToggle(!toggle);
    }, [webcamRef, setImgSrc]);

    const submitImage = async (e) => {
      setLoading(true)
      await new Promise(resolve => setTimeout(() => { resolve() }, 1000))
      closeModal();
      setOpenProductResults(true);
      setLoading(false)
    }

    return (
      <React.Fragment>
        <Loading open={loading}/>
        { !toggle ? 
          <React.Fragment>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            <MainButton variant="contained" alt="Button to scan a product" onClick={capture}>Capture Photo</MainButton>
          </React.Fragment>
         :  
          <React.Fragment>
            <img src={imgSrc} alt="Photo taken"/>

            <Box sx={style}>
            <MainButton variant="contained" endIcon={<LoopIcon />} onClick={() => {setToggle(!toggle)}} alt="Submit photo">Take Again</MainButton>
            <MainButton variant="contained" endIcon={<SendIcon />} onClick={submitImage} alt="Submit photo">Submit</MainButton>
            </Box>
          </React.Fragment>
       }
      </React.Fragment>
    );
  };
  
