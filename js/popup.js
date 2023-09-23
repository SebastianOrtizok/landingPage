import { agregasecciones } from './funciones.js'; 

//*******  POPUP */
//Obtengo el articulo de la localStorage
const obtengodato = localStorage.getItem("articulopopup");
const articulopopup = JSON.parse(obtengodato);


const articuloElement = articulopopup.nombre;
const descripcionElement=articulopopup.descripcion;
const imagenElement= articulopopup.imagen;
const star1Element = articulopopup.star1;
const star2Element = articulopopup.star2;
const star3Element = articulopopup.star3;
const star4Element = articulopopup.star4;
const star5Element = articulopopup.star5;
const precioElement= "Precio $" + articulopopup.precio;
const elementoPadre="Articulo";
const id=articulopopup.id;
const eliminarBtn= "btn btn-danger d-none eliminar";

agregasecciones(imagenElement,star1Element,star2Element,star3Element,star4Element,star5Element,precioElement,articuloElement,descripcionElement,elementoPadre,id,eliminarBtn);
const cardElement=document.querySelector(".col-md-4")
cardElement.className = "col-12 col-md-12 mb-4";
    // Agrego evento al boton para cerrar la ventana
document.getElementById("cerrarVentana").addEventListener("click", function() {
window.close();
    });


    document.getElementById("comprar").addEventListener("click", function() {
        // Obtengo los datos del carrito de localStorage si existe
        let carritoJSON = localStorage.getItem("carrito");
        let carrito = JSON.parse(carritoJSON) || [];
        // Agrega el nuevo artículo al carrito
        let nuevoArticulo = {
            idunique:generateUniqueId(),
            id: id, 
            nombre: articuloElement,
            descripcion: descripcionElement,
            precio: precioElement,
            imagen: imagenElement,
            star1: star1Element,
            star2: star2Element,
            star3: star3Element,
            star4: star4Element,
            star5: star5Element
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
        return '_' + Math.random().toString(36).substr(2, 9);
      }