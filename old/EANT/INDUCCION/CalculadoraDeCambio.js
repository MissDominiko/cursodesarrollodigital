let input = require ('readline-sync')

let CompraVenta = input.question("Compra o Vende?")
let monto
if (CompraVenta == "compra") {
monto = input.question("Cuanto desea comprar?")
}
else if (CompraVenta == "venta"){
monto = input.question("Cuanto desea vender?")
}
let moneda = input.question("A que moneda?")




let total
if (CompraVenta == "compra"){
if (moneda == "dolar") {
	total = monto * 63
} else if (moneda == "euro") {
	total = monto * 70
} else if (moneda == "yen") {
	total = monto * 2
}
console.log("Total a pagar: $" + total)
}

else
if (CompraVenta == "venta"){

if (moneda == "dolar") {
	total = monto * 58
} else if (moneda == "euro") {
	total = monto * 65
} else if (moneda == "yen") {
	total = monto * 1.5
}
console.log("Total a recibir: $" + total)
}



