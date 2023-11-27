import { chequeoCarrito } from './funciones.js';
import { agregasecciones } from './funciones.js';


//* Función asincrónica para acceder a json 
async function cargarProductos() {
    chequeoCarrito();

    try {
        const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=ropa-deportiva");
        const json = await response.json();
        const articulos = json.results;
        let puntos = "";
        let display= "style='display: none'"

        console.log( articulos)
        
        articulos.map((articulo) => {
            const articuloElement = articulo.title;
            const imagenElement = articulo.thumbnail;
             const descripcionElement = articulo.descripcion;
             const precioElement = articulo.price;
             display;
             const cantidad=articulo.available_quantity;
             const elementoPadre = "padre";
             const id = articulo.id;
             const eliminarBtn = "btn btn-danger d-none eliminar";

            //***   Puntuación (estrellitas) */
            // let estrellitas = "";
            // for (let i = 0; i < 5; i++) {
            //     if (i < puntos.length) {
            //         estrellitas += "⭐";
            //     } else {
            //         estrellitas += "★";
            //     }
            // }

            // Llama a la función agregasecciones para generar contenido dinámico
            agregasecciones(imagenElement,precioElement,articuloElement,descripcionElement,display,cantidad,elementoPadre,id,eliminarBtn)
           //* POPUP abro el elemento seleccionado en una página nueva*/
     document.querySelectorAll(".imagen").forEach(function (enlace) {
                enlace.addEventListener("click", function () {
                    let valor = enlace.dataset.id;
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
                    let articuloEncontrado = articuloSeleccionado.find(item => item.id === valor);
                    console.log(articuloEncontrado)



    localStorage.setItem("articulopopup", JSON.stringify(articuloEncontrado));

                });

            });
            //** fin de popup
        });
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
