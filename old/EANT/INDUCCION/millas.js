/*
let input= require(readline-sync)
 let millas = input. question ("Cuantas millas tenes?: ")

if (millas >= 2000) {
console.log("Vamos a Frankfurt :D")
} else if (millas >=500) {
	console.log ( "Vamos a Uruguay :D")
} else{
	console.log ("Nos quedas en casa :(")
}
*/

let input= require(readline-sync)
 let millas = input. question ("Cuantas millas tenes?: ")


if (millas >= 2000) {
	let vip = input.question ("sos vip?: ")
	if (vip == "si"){
		console.log ("Te vas a Tokio")
			}else{
console.log("Vamos a Frankfurt :D")
} else if (vip >=500) {
	console.log ( "vamos a uruguay")
} else{
	console.log ("Nos quedas en casa :(")
}

