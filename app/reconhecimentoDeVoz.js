const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEvenlistener('result', onSpeak)

function onSpeak(e){
    console.log(e.results[0] [0].transcript)
}