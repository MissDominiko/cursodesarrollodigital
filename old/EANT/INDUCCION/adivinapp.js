let input = require ('readline-sync')
let numrand = Math.Floor (Math.random()*5)
console.log(numrand)



let pregunta = input.question("ingresa tu pregunta?")

let respuesta

if( numrand== 0) {
console.log("cuenta con ello!")
}
 else 
if ( numrand== 1) {
	console.log("es posible..")
}
 else 
if ( numrand== 2) {
	console.log("tu suerte aún.. no esta heachada")
}
 else 
if ( numrand== 3) {
	console.log("mmm no es probable")
}

 else 
if ( numrand== 4) {
	console.log("ni en tus sueños!")
}



let input = require ("readline-sync")
console.log("bienvenido")
let respuesta = input.question ( "que queres saber?")
let suerte = Math.random ()
console.log (suerte)







/*math.round(Math.random()*10);
alert("Número aleatorio entre 0 y 10:"+aleatorio);}

("cuenta con ello!")
("es posible..")
("tu suerte aún.. no esta heachada")
("mmm no es probable")
("ni en tus sueños!")


console.log("")