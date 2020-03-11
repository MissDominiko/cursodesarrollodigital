//modulos 

let express = require  ("express")

let fs = require ("fs")


let Adivinapp =require ("./lib/motor.adivinapp")

let server = express ()

server.listen (80)

// en la variable interfaces que busque la carpeta interfaces
let interfaces = express.static ("interfaces")

let encode = express.urlencoded() 

server.use (interfaces)
server.use (encode) 





///se define metodo de escucha . para hacer el pedido
server.get ("/", saludar)

server.post ("/respuesta", function (request, response) {

	let laPregunta = request.body.pregunta
	let laRespuesta = Adivinapp.adivinar ()

	fs.readFile ("interfaces/interfaz_output.html", function (error, archivo) {

		let plantilla = archivo.toString ()
		plantilla = plantilla.replace("{{PREGUNTA}}", laPregunta)
		plantilla = plantilla.replace ("{{RESPUESTA}}", laRespuesta)
		response.end(plantilla)


	})

//response.write ("la pregunta fue:" + request.body.pregunta)
//response.end ("la respuesta es:" + Adivinapp.adivinar () )

})

function saludar (request, response) {

	response.write (" <h1> Hola...</h1>")

response.write ("<p>Bienvenidos al server de <b>Andrea</b> </p>")	

response.end ( "<a href= 'interfaz_input.html'> Ir a Adivinapp! </a>")

}






