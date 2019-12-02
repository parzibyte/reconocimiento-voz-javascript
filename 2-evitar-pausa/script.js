let sr = new webkitSpeechRecognition();
sr.onresult = resultado => {
	console.log(resultado);
}

sr.onend = () => {
	// Simplemente iniciamos de nuevo ;)
	sr.start();
};
// Y lo iniciamos por primera vez ;)
sr.start();