var fecha_de_hoy = new Date()
var este_exacto_minuto = fecha_de_hoy.getMinutes()
//var minutos_impares = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]
//if (minutos_impares.includes(este_exacto_minuto)){
if (este_exacto_minuto%2 == 1){
	console.log ("este minuto es impar")
}else{
	console.log ("Este minuto es par")
}
