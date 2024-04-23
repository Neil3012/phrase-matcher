var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

var phrases = [
  'I love to sing because it\'s fun',
  'where are you going',
  'can I call you tomorrow',
  'why did you talk while I was talking',
  'she enjoys reading books and playing games',
  'where are you going',
  'have a great day',
  'she sells seashells on the seashore'
];

var phrasePara = document.querySelector('.phrase');
var resultPara = document.querySelector('.result');
var diagnosticPara = document.querySelector('.output');

var testBtn = document.querySelector('button');

function randomPhrase() {
  var number = Math.floor(Math.random() * phrases.length);
  return phrases[number];
}

function testSpeech() {
  testBtn.disabled = true;
  testBtn.textContent = 'Test in progress';

  var phrase = randomPhrase();
  // To ensure case consistency while checking with the returned output text
  phrase = phrase.toLowerCase();
  phrasePara.textContent = phrase;
  resultPara.textContent = 'Right or wrong?';
  resultPara.style.background = 'rgba(0,0,0,0.2)';
  diagnosticPara.textContent =  resultPara ;

  var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + phrase + ';';
 
}

testBtn.addEventListener('click', testSpeech);

// For iOS, add an event listener to start speech recognition on button click
if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
  testBtn.addEventListener('touchstart', testSpeech);
}
