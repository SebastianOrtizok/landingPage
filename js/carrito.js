import { chequeoCarrito } from "./funciones.js";
import { agregasecciones } from "./funciones.js";

chequeoCarrito();

let total = 0;

// Obtener el carrito de la local storage
let carritoJSON = localStorage.getItem("carrito");
let carrito = JSON.parse(carritoJSON) || [];

// Agrego secciones para cada artículo en el carrito
carrito.forEach(function (articulo) {
	const elementoPadre = "total";
	let eliminarBtn = "btn btn-danger eliminar";
	agregasecciones(
		articulo.imagen,
		articulo.puntuacion,
		articulo.precio,
		articulo.nombre,
		"",
		elementoPadre,
		articulo.idunique,
		eliminarBtn
	);

	total += parseFloat(articulo.precio.replace("Precio $", "").replace(",", ""));
	console.log(total);
});

// Elimino articulo
let eliminarArticulo = document.querySelectorAll(".eliminar");

eliminarArticulo.forEach((element) => {
	element.addEventListener("click", (e) => {
		const idArticuloAEliminar = element.getAttribute("data-id");
		idArticuloAEliminar;
		eliminarArticuloDelCarrito(idArticuloAEliminar);
	});
});

// Eliminar artículo del carrito en localStorage
function eliminarArticuloDelCarrito(idArticuloAEliminar) {
	carrito.forEach(function (articulo) {
		carrito = carrito.filter(
			(articulo) => articulo.idunique !== idArticuloAEliminar
		);
		console.log(
			typeof articulo.idunique +
				"  " +
				articulo.idunique +
				" " +
				typeof idArticuloAEliminar +
				idArticuloAEliminar
		);
	});
	// Actualizar el carrito en localStorage sin el artículo eliminado
	localStorage.setItem("carrito", JSON.stringify(carrito));
	location.reload();
}

//Calculo total acumulado
let contenedorAcumulado = document.createElement("h1");
contenedorAcumulado.className = "precioTotal";
let contenedorPadre = document.getElementById("total");
contenedorPadre.appendChild(contenedorAcumulado);

console.log(contenedorAcumulado);

const precioTotal = document.querySelector(".precioTotal");
precioTotal.textContent = "El precio total de la compra es de $ " + total;
