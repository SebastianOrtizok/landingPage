import { agregasecciones } from "./funciones.js";

//*******  POPUP */
//Obtengo el articulo de la localStorage
const obtengodato = localStorage.getItem("articulopopup");
const articulopopup = JSON.parse(obtengodato);

const articuloElement = articulopopup.title;
const descripcionElement = articulopopup.descripcion;
console.log(articuloElement)
const imagenElement = articulopopup.thumbnail;
// const puntos = articulopopup.puntuacion;
const precioElement = "Precio $" + articulopopup.price;
const elementoPadre = "Articulo";
const id = articulopopup.id;
const eliminarBtn = "btn btn-danger d-none eliminar";

let  estrellitasElement =""
// for (let i=0; i<5; i++){
//     if (i<puntos.length){
//         estrellitasElement+="⭐"
//     }else {
//         estrellitasElement+="★"
// }	
// }
// estrellitasElement=estrellitasElement.replace(/^"(.*)"$/, '$1');

agregasecciones(
	imagenElement,
	precioElement,
	articuloElement,
	descripcionElement,
	"style='display: none'",
	"",
	elementoPadre,
	id,
	eliminarBtn
);
const cardElement = document.querySelector(".col-md-4");
cardElement.className = "col-12 col-md-12 mb-4";
// Agrego evento al boton para cerrar la ventana
document.getElementById("cerrarVentana").addEventListener("click", function () {
	window.close();
});

// Accedo al boton comprar
let comprar=""
comprar=document.getElementById("comprar")
	// Obtengo los datos del carrito de localStorage si existe
	let carritoJSON = localStorage.getItem("carrito");
	let carrito = JSON.parse(carritoJSON) || [];
	// Agrega el nuevo artículo al carrito

	carrito.forEach(element => {
		if (element.id==articulopopup.id){
			comprar.disabled = true;
			comprar.textContent = 'Artículo ya seleccionado';
	}
		
	});
	comprar.addEventListener("click", function () {

	let nuevoArticulo = {
		idunique: generateUniqueId(),
		id: id,
		nombre: articuloElement,
		descripcion: descripcionElement,
		precio: precioElement,
		cantidad:1,
		imagen: imagenElement,
		puntuacion: estrellitasElement,

	};

	carrito.push(nuevoArticulo);

	// Almaceno el carrito actualizado en LocalStorage
	localStorage.setItem("carrito", JSON.stringify(carrito));
	alert("Está agregando " + articuloElement + " a su carrito de compras");

	//evento para informar a index.html que actualice el carrito de compras
	const event = new CustomEvent("itemAddedToCart");
	window.opener.dispatchEvent(event);
	window.close();
});

// genera id unicos para cada producto

function generateUniqueId() {
	return "_" + Math.random().toString(36).substr(2, 9);
}
