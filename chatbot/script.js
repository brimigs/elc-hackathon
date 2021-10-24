
var messages = [], 
  lastUserMessage = "", 
  botMessage = "", 
  botName = 'Iris', 
  talking = false; 

//runs on load
window.onload = function() {
  console.log('Load Success')
  botMessage = 'Welcome! I am Iris, your personal beauty assistant. Were you looking to shop for a new product or apply a product you already have?';
  messages.push(botMessage);
  document.getElementById("chatlog" + 1).classList.add('otherBubble')
  document.getElementById("chatlog" + 1).innerHTML = botMessage;
  botMessage = ''
};

function chatbotResponse() {
  talking = false;
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

}

function newEntry() {

  if (document.getElementById("chatbox").value != "") {

    lastUserMessage = document.getElementById("chatbox").value;

    document.getElementById("chatbox").value = "";

    messages.push(lastUserMessage);

    chatbotResponse();

    messages.push(botMessage);

    for (var i = 1; i < 8; i++) {

      if (messages[messages.length - i])

        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];

      if (messages[messages.length - i])
        if (i == 2 || i == 4 || i == 6)
          document.getElementById("chatlog" + i).classList.add('ownBubble');
          document.getElementById("chatlog" + i).style.visibility = "visible";
      
      if (messages[messages.length - i])
        if (i == 1 || i == 3 || i == 5 || i == 7)
          document.getElementById("chatlog" + i).classList.add('otherBubble');
          document.getElementById("chatlog" + i).style.visibility = "visible";
    }
  }
}
























function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
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

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}