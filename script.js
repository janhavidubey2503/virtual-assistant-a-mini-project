let Btn= document.querySelector("#Btn")
let content= document.querySelector("#content")
let voice= document.querySelector("#Voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function WishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours < 12)
        {
        speak("good morning")
    }
    else if(hours>=12 && hours<16){
        speak("good afternoon")
    }else{
        speak("good evening")
    }
}
    
window.addEventListener('load',()=>{
    WishMe()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

Btn.addEventListener("click",()=>{
recognition.start()
Btn.style.display="none"
voice.style.display="block"
})


function takeCommand(message){
    if (message.includes("can you help me")||message.includes("hello")) {
        speak("yes hello , pleasure to hear you what can i help you")
        
    }
    else if(message.includes("who are you?")){
        speak("i am your virtual assistant created by janhavi dubey")
    }
    else if(message.includes("what's up grace")) 
    {
        speak("well i am fine whats about you")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube....")
        window.open("https://www.youtube.com/","_blank")
    }
else if(message.includes("open google")){
    speak("opening google....")
    window.open("https://www.google.com/","_blank")
}
else if(message.includes("open facebook")){
    speak("opening facebook....")
    window.open("https://www.facebook.com/","_blank")
}
else if(message.includes("open instagram")){
    speak("opening instagram....")
    window.open("https://www.instagram.com/","_blank")
}
else if(message.includes("open whatsapp")){
    speak("opening whatsapp....")
    window.open("https://web.whatsapp.com/","_blank")
}
else if(message.includes("open calculater")){
    speak("opening calculater....")
    window.open("calculator://","_blank")
}
else if(message.includes("what is time?")){
  
   let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
   speak(time)
}
else if(message.includes("what is date?")){
  
    let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
    speak(date)
 }
else{
    let finalText="this is result which i found on internet regarding" + message.replace("hey grace tell me "," ")||message.replace("grace"," ")
    speak(finalText)
    window.open(`https://www.google.com/search?q=${message.replace("hey grace tell me about "," ")||message.replace("grace"," ")  }`,"_blank") 
}
}
