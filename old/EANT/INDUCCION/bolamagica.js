let input = require ("readline-sync")
console.log("bienvenido")
let respuesta = input.question ( "que queres saber?")
let suerte = Math.floor (Math.random () * 5)

if( suerte == 0) {
console.log("cuenta con ello!")
}
 else 
if ( suerte == 1) {
	console.log("es posible..")
}
 else 
if ( suerte == 2) {
	console.log("tu suerte aún.. no esta hechada")
}
 else 
if ( suerte == 3) {
	console.log("mmm no es probable")
}

 else 
if ( suerte == 4) {
	console.log("ni en tus sueños!")
}


console.log (suerte)


//////////////////////////////////7



let input = require ("readline-sync")
intro ()
hacerPregunta ()
let numero = buscarNumero ()
darRespuesta (numero)




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

	if( suerte == 0) {
console.log("cuenta con ello!")
}
 else |
if ( suerte == 1) {
	console.log("es posible..")
}
 else 
if ( suerte == 2) {
	console.log("tu suerte aún.. no esta hechada")
}
 else 
if ( suerte == 3) {
	console.log("mmm no es probable")
}

 else 
if ( suerte == 4) {
	console.log("ni en tus sueños!")
}
}