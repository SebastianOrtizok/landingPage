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
		const articulos = json;
		for (let i = 0; i < articulos.length; i++) {
			const articuloElement = articulos[i].nombre;
			const imagenElement = articulos[i].imagen;
			const star1Element = articulos[i].star1;
			const star2Element = articulos[i].star2;
			const star3Element = articulos[i].star3;
			const star4Element = articulos[i].star4;
			const star5Element = articulos[i].star5;
			const descripcionElement =
			articulos[i].descripcion.substring(0, 50) + "...";
			const precioElement = "";
            const elementoPadre="padre";
			const id= articulos[i].id;
			const eliminarBtn="btn btn-danger d-none eliminar"
            agregasecciones(imagenElement,star1Element,star2Element,star3Element,star4Element,star5Element,precioElement,articuloElement,descripcionElement,elementoPadre,id,eliminarBtn)
			//Guardo en una variable el contenido generado dinámicamente


			//* POPUP abro el elemento seleccionado en una página nueva*/
			document.querySelectorAll(".imagen").forEach(function (enlace) {
				enlace.addEventListener("click", function () {
					// Abre una nueva ventana emergente con la página correspondiente
					const anchoPopup = window.innerWidth * 0.9;
					const altoPopup = window.innerHeight * 1;
					window.open(
						"articulo.html",
						"Popup",
						"width=" + anchoPopup + ",height=" + altoPopup
					);

					// Obtengo los datos del artículo almacenados en localStorage
					let articuloSeleccionado = JSON.parse(
						localStorage.getItem("Articulos")
					);
					articuloSeleccionado.map(function (recorrer) {
						if (enlace.src.includes(recorrer.imagen)) {
							localStorage.setItem("articulopopup", JSON.stringify(recorrer));
						}
					});
				});
				
			});
			//** fin de popup
		}
		// Almacena los artículos en localStorage
		localStorage.setItem("Articulos", JSON.stringify(articulos));
	})
	.catch(function (error) {
		console.error("Error al cargar los datos:", error);
	});

	window.addEventListener("itemAddedToCart", function(event) {
		chequeoCarrito();
	});