import { chequeoCarrito } from './funciones.js'; 
import { agregasecciones } from './funciones.js'; 
chequeoCarrito();
// se declara un arreglo vacio para guardar el json y manipularlo 

// Realizo la solicitud fetch para cargar el archivo JSON
fetch("js/jproductos.json")
	.then(function (response) {
		return response.json(); // Convierte la respuesta a JSON
	})
	.then(function (json) {
		const articulos = json;
		json.forEach(articulo => {
			// Todo este codigo comentado se puede eliminar puesto que como unico parametro estamos
			// pasando el objedo del cilco presente y en la funcion lo desglosamos para hacer el codigo mas corto
	
            const elementoPadre="padre";
            agregasecciones(articulo, elementoPadre)
			//Guardo en una variable el contenido generado dinámicamente
			

			//* POPUP abro el elemento seleccionado en una página nueva*/
			document.querySelectorAll(".btn-dark").forEach(function (enlace) {
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
							localStorage.setItem("articulopopup", JSON.stringify(articulo));
						}
					});
				});
				
			});
			//** fin de popup
		})
		// Almacena los artículos en localStorage
		localStorage.setItem("Articulos", JSON.stringify(articulos));
	})
	.catch(function (error) {
		console.error("Error al cargar los datos:", error);
	});

	window.addEventListener("itemAddedToCart", function(event) {
		chequeoCarrito();
	});