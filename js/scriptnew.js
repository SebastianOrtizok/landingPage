import { chequeoCarrito } from './funciones.js'; 
import { agregasecciones } from './funciones.js'; 
chequeoCarrito();
// se declara un arreglo vacio para guardar el json y manipularlo 
const articulos = []

// Realizo la solicitud fetch para cargar el archivo JSON
fetch("js/jproductos.json")
	.then(function (response) {
		return response.json(); // Convierte la respuesta a JSON
	})
	.then(function (json) {
		
	})
	.catch(function (error) {
		console.error("Error al cargar los datos:", error);
	});

	window.addEventListener("itemAddedToCart", function(event) {
		chequeoCarrito();
	});


	//**Buscador */
	let buscar= document.getElementById("search");
	buscar.addEventListener("click" , () =>{
		let wordSerch = document.getElementById("inputMobileSearch");
		wordSerch=wordSerch.value.trim().toUpperCase();

		const articulos=document.querySelectorAll(".articuloName");
		articulos.forEach((articulo)=> {
			const nombreArticuloTexto = articulo.textContent.trim().toUpperCase();
			if (nombreArticuloTexto.includes(wordSerch)){
				articulo.parentElement.scrollIntoView({ behavior: "smooth" });
				console.log(wordSerch + "=" + articulo.textContent)
			} 

		})

	})