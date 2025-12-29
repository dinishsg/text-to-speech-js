var speech = new SpeechSynthesisUtterance(); //Built in constructor, WebSpeech API//

function speakText(){
    var textToSpeak = document.getElementById("textToSpeak").value;
            
    if(textToSpeak.trim() !==""){
        speech.text = textToSpeak; 
        speech.rate = 1;
        speech.volume = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech); //Predefined Method//
    }
    else{
        alert("Enter some text!");
    }
}