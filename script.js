let Btn = document.querySelector("#Btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#Voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-IN"; // fixed speech code
    window.speechSynthesis.speak(text_speak);
}

// Greeting function
function WishMe() {
    let hours = new Date().getHours();

    if (hours < 12) speak("Good morning! I am Grace, your virtual assistant.");
    else if (hours < 16) speak("Good afternoon! How can I assist you?");
    else speak("Good evening! I'm here to help.");
}

window.addEventListener('load', WishMe);

// Speech Recognition
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let transcript = event.results[event.resultIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

Btn.addEventListener("click", () => {
    recognition.start();
    Btn.style.display = "none";
    voice.style.display = "block";
});

// 🧠 MAIN COMMAND HANDLER
function takeCommand(message) {

    // Greeting
    if (message.includes("hello") || message.includes("hi grace")) {
        speak("Hello! How can I help you?");
    }

    // Who are you?
    else if (message.includes("who are you")) {
        speak("I am Grace, your virtual assistant created by Janhavi.");
    }

    // Time
    else if (message.includes("time")) {
        let time = new Date().toLocaleTimeString();
        speak("Current time is " + time);
    }

    // Date
    else if (message.includes("date")) {
        let date = new Date().toLocaleDateString();
        speak("Today's date is " + date);
    }

    // YouTube
    else if (message.includes("open youtube")) {
        speak("Opening YouTube");
        window.open("https://www.youtube.com/");
    }

    // YouTube Search
    else if (message.includes("search on youtube")) {
        let query = message.replace("search on youtube", "").trim();
        speak("Searching on YouTube");
        window.open(`https://www.youtube.com/results?search_query=${query}`);
    }

    // Google
    else if (message.includes("open google")) {
        speak("Opening Google");
        window.open("https://www.google.com/");
    }

    // Instagram
    else if (message.includes("open instagram")) {
        speak("Opening Instagram");
        window.open("https://www.instagram.com/");
    }

    // Maps
    else if (message.includes("open maps") || message.includes("location")) {
        speak("Opening Google Maps");
        window.open("https://www.google.com/maps/");
    }

    // Joke
    else if (message.includes("tell me a joke")) {
        speak("Why don't programmers like nature? Too many bugs!");
    }

    // Play music
    else if (message.includes("play music")) {
        speak("Playing music for you.");
        window.open("https://www.youtube.com/watch?v=2Vv-BfVoq4g");
    }

    // Wikipedia search
    else if (message.includes("wikipedia")) {
        let query = message.replace("wikipedia", "").trim();
        speak("Searching on Wikipedia");
        window.open(`https://en.wikipedia.org/wiki/${query}`);
    }

    // Fallback (Google Search)
    else {
        speak("Here is what I found on the internet.");
        window.open(`https://www.google.com/search?q=${message}`);
    }
}
