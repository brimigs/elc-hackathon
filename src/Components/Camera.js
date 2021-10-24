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
import Stack from '@mui/material/Stack';
import axios from 'axios';
import qs from 'qs';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const MainButton = styled(Button)({
  fontSize: "0.9rem",
  letterSpacing: "0.22em",
  padding: "0.6rem 2rem",
  marginTop: "0.6rem",
});

export default function  WebcamCapture  () {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const [toggle, setToggle] = React.useState(false);
    const [loading, setLoading] = React.useState(false)

    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      setToggle(!toggle);
    }, [webcamRef, setImgSrc]);

    const submitImage = async (e) => {
      setLoading(true)
      let formData = new FormData();
      formData.append("picture", imgSrc)
      await axios.post('/api/skinTone/', formData, {
        headers: {"Content-Type": "multipart/form-data"}
      }).then((response) => {
      }, (error) => {
      })
      setLoading(false)
    }

    return (
      <React.Fragment>
        <Loading open={loading}/>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <MainButton variant="contained" alt="Button to scan a product" onClick={capture}>Capture photo</MainButton>
        {imgSrc && (
          // <Button>Delete</Button>
          // <Button >Send</Button>
          <img
            src={imgSrc}
          />
          
          
        )
        // && <Button>Delete</Button>
        // && 
        // <Button >a</Button>
}
           {toggle && <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} onClick={submitImage}>
            Send
          </Button>
        </Stack>}
      </React.Fragment>
    );
  };
  
