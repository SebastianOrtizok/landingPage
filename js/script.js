window.articulopopup = "";

function agregasecciones() {
	// Creo un nuevo div con las clases y atributos necesarios
	let nuevoDiv = document.createElement("div");
	nuevoDiv.className = "col-12 col-md-4 mb-4";

	// Creo un div con clase "card h-100"
	let cardDiv = document.createElement("div");
	cardDiv.className = "card h-100";

	// Creo un enlace <a> dentro de la tarjeta
	let enlace = document.createElement("a");
	enlace.href = "articulo.html";

	// Creo una imagen <img> dentro del enlace
	let imagennew = document.createElement("img");
	imagennew.src = "ruta/de/la/imagen.jpg"; // Aquí debes establecer la URL de la imagen
	imagennew.className = "card-img-top imagen";
	imagennew.alt = "Imagén producto";

	// Crear un div con clase "card-body"
	let cardBodyDiv = document.createElement("div");
	cardBodyDiv.className = "card-body";

	// Creo una lista no ordenada <ul> dentro del card-body y le pongo la clase
	let listaUl = document.createElement("ul");
	listaUl.className = "list-unstyled d-flex justify-content-between";
	let star1 = document.createElement("li");
	star1.className = "star1";
	let star2 = document.createElement("li");
	star2.className = "star2";
	let star3 = document.createElement("li");
	star3.className = "star3";
	let star4 = document.createElement("li");
	star4.className = "star4";
	let star5 = document.createElement("li");
	star5.className = "star5";
	let precio = document.createElement("li");
	precio.className = "text-muted text-right precio";

	// Creo enlace a popup
	let enlace2 = document.createElement("a");
	enlace2.href = "articulo.html";
	enlace2.className = "h2 articulo text-decoration-none text-dark";
	enlace2.textContent = "el enlace";

	//Creo descripcion del producto
	let description = document.createElement("p");
	description.className = "card-text descripcion";
	description.textContent = "descripcion del producto";

	// Agrego los elementos a la estructura
	enlace.appendChild(imagennew);
	cardBodyDiv.appendChild(listaUl);
	listaUl.appendChild(star1);
	listaUl.appendChild(star2);
	listaUl.appendChild(star3);
	listaUl.appendChild(star4);
	listaUl.appendChild(star5);
	listaUl.appendChild(precio);
	cardBodyDiv.appendChild(enlace2);
	cardBodyDiv.appendChild(description);
	cardDiv.appendChild(enlace);
	cardDiv.appendChild(cardBodyDiv);
	nuevoDiv.appendChild(cardDiv);

	// Agrego el nuevo contenedor al elemento padre
	let contenedorPadre = document.getElementById("padre");
	contenedorPadre.appendChild(nuevoDiv);
}

// Realizo la solicitud fetch para cargar el archivo JSON
fetch("js/jproductos.json")
	.then(function (response) {
		return response.json(); // Convierte la respuesta a JSON
	})
	.then(function (json) {
		const articulos = json;
		for (let cont = 0; cont < articulos.length; cont++) {
			agregasecciones(); //creo tantas estructuras como articulos
		}
		const articuloElements = document.querySelectorAll(".articulo");
		const imagenElements = document.querySelectorAll(".imagen");
		const descripcionElements = document.querySelectorAll(".descripcion");
		const star1Elements = document.querySelectorAll(".star1");
		const star2Elements = document.querySelectorAll(".star2");
		const star3Elements = document.querySelectorAll(".star3");
		const star4Elements = document.querySelectorAll(".star4");
		const star5Elements = document.querySelectorAll(".star5");

		// Pongo los articulos en los elementos creados
		for (let i = 0; i < articulos.length; i++) {
			let articuloElement = articuloElements[i];
			let imagenElement = imagenElements[i];
			let star1Element = star1Elements[i];
			let star2Element = star2Elements[i];
			let star3Element = star3Elements[i];
			let star4Element = star4Elements[i];
			let star5Element = star5Elements[i];
			let descripcionElement = descripcionElements[i];

			articuloElement.textContent = articulos[i].nombre;
			imagenElement.src = articulos[i].imagen;
			star1Element.className = articulos[i].star1;
			star2Element.className = articulos[i].star2;
			star3Element.className = articulos[i].star3;
			star4Element.className = articulos[i].star4;
			star5Element.className = articulos[i].star5;
			// let id = articulos[i].id;
			descripcionElement.textContent = articulos[i].descripcion.substring(0, 50) + "..."; //pongo los primeros 20 caracteres de la descipcion
		}
		// Almacena los artículos en localStorage
		localStorage.setItem("Articulos", JSON.stringify(articulos));

		// Abrir pagina popup al hacer clic en el enlace
		document.querySelectorAll(".imagen").forEach(function (enlace, index) {
			enlace.addEventListener("click", function (event) {
				event.preventDefault(); // Evita la acción predeterminada del enlace
				// Abre una nueva ventana emergente con la página correspondiente
				const anchoPopup = window.innerWidth * 0.4;
				const altoPopup = window.innerHeight * 1;
				window.open(
					"articulo.html",
					"Popup",
					"width=" + anchoPopup + ",height=" + altoPopup
				);

				// Obtén los datos del artículo almacenados en localStorage
				let articuloSeleccionado = JSON.parse(
					localStorage.getItem("Articulos")
				);
				articuloSeleccionado.map(function (recorrer) {
					if (enlace.src.includes(recorrer.imagen)) {
						localStorage.setItem("articulopopup", JSON.stringify(recorrer));
					}
				});

				// popup.textContent = articulopopup
				// Muestro la descripción completa del artículo seleccionado en popup
				//
			});
		});

		//fin de popup

		// Llamada a la función para agregar las secciones

	})
	.catch(function (error) {
		console.error("Error al cargar el archivo JSON:", error);
	});

//chequeo si hay alguna compra almacenada en localStorage
const estadoCarrito = document.getElementById("estadoCarrito");
let compras = JSON.parse(localStorage.getItem("carrito"));

estadoCarrito.textContent = Object.keys(compras).length;
console.log(compras);


function chequeoCarrito() {
	const estadoCarrito = document.getElementById("estadoCarrito");
	let compras = JSON.parse(localStorage.getItem("carrito"));
	
	estadoCarrito.textContent = Object.keys(compras).length;
	console.log(compras);
}