let sr = new webkitSpeechRecognition();
// El elemento del DOM en donde vamos a colocar lo escuchado
const $texto = document.querySelector("#texto");

sr.onresult = resultado => {
	let indiceUltimoElemento = resultado.results.length - 1;
	let textoEscuchado = resultado.results[indiceUltimoElemento][0].transcript;
	// Concatenamos el HTML
	$texto.innerHTML += "<br>" + textoEscuchado;
}

sr.onend = () => {
	// Simplemente iniciamos de nuevo ;)
	sr.start();
};
// Y lo iniciamos por primera vez ;)
sr.start();