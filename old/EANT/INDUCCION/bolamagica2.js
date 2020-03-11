let input = require("readline-sync")
intro()
hacerPregunta()
let numero = buscarNumero()
let respuesta = darRespuesta(numero)
mostrar (respuesta)



function intro( ) {
	console.log("bienvenido")
}

function hacerPregunta () {
	let respuesta = input.question ( "que queres saber?")
}

function buscarNumero () {
	let suerte = Math.floor (Math.random () * 5)
	return suerte

}


function darRespuesta (suerte) {

let respuesta = ""

	if( suerte == 0) {
 respuesta = "cuenta con ello!"
}
 else
if ( suerte == 1) {
	respuesta = "es posible.."
}
else 
if ( suerte == 2) {
	 respuesta = "tu suerte aún.. esta hechada"
}
 else 
if ( suerte == 3) {
	 respuesta = "mmm no es probable"
}

 else 
if ( suerte == 4) {
	respuesta = "ni en tus sueños!"
}
return respuesta
}
function mostrar (mensaje){
	console.log(mensaje)

}