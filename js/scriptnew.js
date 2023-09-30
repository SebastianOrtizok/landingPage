import { chequeoCarrito } from './funciones.js';
import { agregasecciones } from './funciones.js';


//* Función asincrónica para acceder a json 
async function cargarProductos() {
    chequeoCarrito();

    try {
        const response = await fetch("js/jproductos.json");
        const json = await response.json();
        const articulos = json;
        let puntos = "";

        for (let i = 0; i < articulos.length; i++) {
            const articuloElement = articulos[i].nombre;
            const imagenElement = articulos[i].imagen;
            puntos = articulos[i].puntuacion;
            const descripcionElement = articulos[i].descripcion.substring(0, 50) + "...";
            const precioElement = "";
            const elementoPadre = "padre";
            const id = articulos[i].id;
            const eliminarBtn = "btn btn-danger d-none eliminar";

            //***   Puntuación (estrellitas) */
            let estrellitas = "";
            for (let i = 0; i < 5; i++) {
                if (i < puntos.length) {
                    estrellitas += "⭐";
                } else {
                    estrellitas += "★";
                }
            }

            // Llama a la función agregasecciones para generar contenido dinámico
            agregasecciones(imagenElement, estrellitas, precioElement, articuloElement, descripcionElement, elementoPadre, id, eliminarBtn);

           //* POPUP abro el elemento seleccionado en una página nueva*/
            document.querySelectorAll(".imagen").forEach(function (enlace) {
                enlace.addEventListener("click", function () {
                    // Abre una nueva ventana emergente con la página correspondiente
                    const anchoPopup = window.innerWidth * 0.5;
                    const altoPopup = window.innerHeight * 1;
                    window.open(
                        "articulo.html",
                        "Popup",
                        "width=" + anchoPopup + ",height=" + altoPopup
                    );

                    // Obtiene los datos del artículo almacenados en localStorage
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
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

// Llama a la función cargarProductos
cargarProductos();

// Agrega un evento que escucha cuando se añade un elemento al carrito
window.addEventListener("itemAddedToCart", function (event) {
    chequeoCarrito();
});

// Buscador
let buscar = document.getElementById("search");
buscar.addEventListener("click", () => {
    let wordSearch = document.getElementById("inputMobileSearch");
    wordSearch = wordSearch.value.trim().toUpperCase();

    const articulos = document.querySelectorAll(".articuloName");
    articulos.forEach((articulo) => {
        const nombreArticuloTexto = articulo.textContent.trim().toUpperCase();
        if (nombreArticuloTexto.includes(wordSearch)) {
            articulo.parentElement.scrollIntoView({ behavior: "smooth" });
            console.log(wordSearch + "=" + articulo.textContent)
        }
    });
});
