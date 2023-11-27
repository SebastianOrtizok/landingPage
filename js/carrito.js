import { chequeoCarrito } from "./funciones.js";
import { agregasecciones } from "./funciones.js";

chequeoCarrito();

let total = 0;
// Obtener el carrito de la local storage
let carritoJSON = localStorage.getItem("carrito");
let carrito = JSON.parse(carritoJSON) || [];


// Agrego secciones para cada artículo en el carrito
carrito.forEach(function (articulo) {
	
	console.log( articulo.precio)
	let display="agregar o quitar"
	const elementoPadre = "total";
	let eliminarBtn = "btn btn-danger eliminar";
	agregasecciones(
		articulo.imagen,
		articulo.precio,
		articulo.nombre,
		"",
		display,
		articulo.cantidad,
		elementoPadre,
		articulo.idunique,
		eliminarBtn,
	);

	total+=(articulo.precio.replace("Precio $", "").replace("," , "")) * articulo.cantidad ;
	// total += parseFloat(articulo.precio * articulo.cantidad)
});


// Agregar quitar cantidad de articulos
let agregarQuitarArticulosCarrito = document.querySelectorAll(".agregar");
agregarQuitarArticulosCarrito.forEach((elemento) => {
	elemento.addEventListener("click", (e) => {
		const idAgregarQuitar = elemento.getAttribute("data-id");
		// Obtengo los datos del articulo para modificar la cantidad
		carrito.forEach((element,index) => {
			if (element.idunique==idAgregarQuitar){
				if (elemento.innerHTML=="⬆") {
					carrito[index].cantidad+=1
					// Almaceno el carrito actualizado en LocalStorage
					localStorage.setItem("carrito", JSON.stringify(carrito));
					alert("Está agregando otro artículo a su carrito de compras");
					location.reload();
				} else if (elemento.innerHTML=="⬇") {
					carrito[index].cantidad-=1
					if (carrito[index].cantidad==0){
						 eliminarArticuloDelCarrito(idAgregarQuitar)
					}
					// Almaceno el carrito actualizado en LocalStorage
					localStorage.setItem("carrito", JSON.stringify(carrito));
					alert("Está quitando un artículo de su carrito de compras");
					location.reload();
				}
			}

		})
	});
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
