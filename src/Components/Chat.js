import React from "react";
import {
  Box,
  TextField,
  Button
} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';

export default function Chat() {
    var messages = [], 
    lastUserMessage = "", 
    botMessage = "", 
    botName = 'Iris', 
    talking = true;

    React.useEffect(() => {
        console.log('Load Success')
        botMessage = 'Welcome! I am Iris, your personal beauty assistant. Were you looking to shop for a new product or apply a product you already have?';
        messages.push(botMessage);
        document.getElementById("chatlog" + 1).classList.add('otherBubble')
        document.getElementById("chatlog" + 1).innerHTML = botMessage;
        document.getElementById("chatlog-box1").style.display = "flex";
        botMessage = ''
    })

    const chatbotResponse = () => {
      talking = true;
      botMessage = "I'm confused"; 

      if (lastUserMessage.includes('hi')) {
        botMessage = ['Hey there! Were you looking to shop or apply a product?']
      }

      if (lastUserMessage === 'name') {
        botMessage = 'My name is ' + botName;
      }

      if (lastUserMessage.includes('shop')) {
        botMessage = 'Perfect! What product were you looking for?';
      }

      if (lastUserMessage.includes('foundation')) {
        botMessage = 'Got it. Click on the "Upload Now" button below and I can help you find the right color for your skin.';
      }

      if (lastUserMessage.includes('done')) {
        botMessage = 'Okay I have analyzed your skin tone and I would recommend Clinque Foundation in the shade cardamom, would you like to add it to your cart?';
      }

      if (lastUserMessage.includes('yes')) {
        botMessage = 'Great, added that to your cart. Would you like to proceed to checkout? I can processs your order. Can you please confirm the last 4 digits of the credit card on file?';
      }

      if (lastUserMessage.includes('6024')) {
        botMessage = 'Great, is the correct shipping address 12345 Johnson ave #4B?';
      }

      if (lastUserMessage.includes('yep')) {
        botMessage = 'Awesome! Shall I place the order? Your total will be $73.22';
      }

      if (lastUserMessage.includes('place order')) {
        botMessage = 'Done! Your product will arrive in 3-5 business days. Once it arrives, feel free to come back here and I can walk you through how to use the product.';
      }

    }
    const newEntry = () => {

      if (document.getElementById("chatbox").value != "") {

        lastUserMessage = document.getElementById("chatbox").value;

        document.getElementById("chatbox").value = "";

        messages.push(lastUserMessage);
        Speech(lastUserMessage);

        chatbotResponse();

        messages.push(botMessage);
        Speech(botMessage);

        for (var i = 1; i < 6; i++) {

          if (messages[messages.length - i])

            document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];

          if (messages[messages.length - i])
            if (i == 2 || i == 4 || i == 6) {
              document.getElementById("chatlog" + i).classList.add('ownBubble');
              document.getElementById("chatlog-box" + i).style.display = "flex";
          }
          
          if (messages[messages.length - i])
            if (i == 1 || i == 3 || i == 5 || i == 7) {
              document.getElementById("chatlog" + i).classList.add('otherBubble');
              document.getElementById("chatlog-box" + i).style.display = "flex";
          }
        }
      }
    }
    const Speech = (say) => {
      if ('speechSynthesis' in window && talking) {
        var utterance = new SpeechSynthesisUtterance(say);
        // msg.voice = voices[10]; // Note: some voices don't support altering params
        // msg.voiceURI = 'native';
        // utterance.volume = 1; // 0 to 1
        // utterance.rate = 0.1; // 0.1 to 10
        // utterance.pitch = 1; //0 to 2
        // utterance.text = 'Hello World';
        // utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
      }
    }
    //clears the placeholder text ion the chatbox
    //this function is set to run when the users brings focus to the chatbox, by clicking on it
    const placeHolder = () => {
        const el = document.getElementById("chatbox")
        if (el)
            el.placeholder = "";
    }

    
    //if the key pressed is 'enter' runs the function newEntry()
    function keyPress(e) {
      var x = e || window.event;
      var key = (x.keyCode || x.which);
      if (key == 13 || key == 3) {
        //runs this function when enter is pressed
        newEntry();
      }
      if (key == 38) {
        console.log('hi')
          //document.getElementById("chatbox").value = lastUserMessage;
      }
    }

    //runs the keypress() function when a key is pressed
    document.onkeypress = keyPress;

    const style = {
        header:{display:"flex"},
        bubbleWrapper:{display:"none",padding:"5px 5px",justifyContent:"flex-end",flexDirection:"column",alignSelf:"flex-end",color:"rgb(0, 0, 0)",width:"100%"},
        inlineContainer:{display:"inline-flex"},
        inlineContainer_own:{flexDirection:"row-reverse"},
        inlineIcon:{width:"20px",objectFit:"contain"},
        ownBubble:{minWidth:"20px",maxWidth:"500px",padding:"14px 18px",margin:"6px 8px",bgcolor:"#e0e0e0",borderRadius:"16px 16px 0 16px",textAlign:"right"},
        otherBubble:{minWidth:"10px",maxWidth:"500px",padding:"14px 18px",margin:"6px 8px",bgcolor:"#9eafff",borderRadius:"16px 16px 16px 0"},
        own:{alignSelf:"flex-end"},other:{alignSelf:"flex-start"},
        span_own:{fontSize:"80px",color:"white"},span_other:{fontSize:"80px",color:"white"},
        chatbox:{height:"80px",width:"100%",bgcolor:"#1b1f22",font:"15px helvetica, sans-serif",color:"white",display:"flex",flexDirection:"column",overflow:"hidden",boxShadow:"0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)"},
        user_img:{display:"inline-block",borderRadius:"50%",height:"40px",width:"40px",background:"#2671ff",margin:"0 10px 10px 0"},
    }
    return (
        <Box >        
            <Box sx={style.bubbleWrapper} id="chatlog-box5">
                <Box sx={style.inlineContainer}>
                    <Box sx={style.otherBubble}>
                        <p id="chatlog5" className="">&nbsp;</p>
                    </Box>
                </Box>
            </Box>
            <Box sx={style.bubbleWrapper} id="chatlog-box4">
                <Box sx={style.inlineContainer, style.own}>
                    <Box sx={style.ownBubble}>
                        <p id="chatlog4" className="">&nbsp;</p>
                    </Box>
                </Box>
            </Box>
            <Box sx={style.bubbleWrapper} id="chatlog-box3">
                <Box sx={style.inlineContainer}>
                    <Box sx={style.otherBubble}>
                        <p id="chatlog3" className="">&nbsp;</p>
                    </Box>
                </Box>
            </Box>
            <Box sx={style.bubbleWrapper} id="chatlog-box2">
                <Box sx={style.inlineContainer, style.own}>
                    <Box sx={style.ownBubble}>
                        <p id="chatlog2" className="">&nbsp;</p>
                    </Box>
                </Box>
            </Box>
            <Box sx={style.bubbleWrapper} id="chatlog-box1">
                <Box sx={style.inlineContainer}>
                    <Box sx={style.otherBubble}>
                        <p id="chatlog1" className="">&nbsp;</p>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display:'flex'}} id="chatlog-box1">
            <TextField name="chat" id="chatbox" variant="outlined" label="Hi there! Type here to talk to me." placeholder="Hi there! Type here to talk to me." onFocus={placeHolder()} fullWidth>
            </TextField>
            <Button variant="contained"><UploadIcon/></Button>
            </Box>
        </Box>
    );
}