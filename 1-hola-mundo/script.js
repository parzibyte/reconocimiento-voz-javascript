let sr = new webkitSpeechRecognition();
sr.onresult = resultado => {
	console.log(resultado);
}

sr.start();