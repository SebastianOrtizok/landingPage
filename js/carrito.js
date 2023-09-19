
let carritoJSON = localStorage.getItem("carrito");
let carrito = JSON.parse(carritoJSON) || [];
chequeoCarrito()

function seccionesmicarrito(articulo) {
    // Creo un nuevo div con las clases y atributos necesarios
    let nuevoDiv = document.createElement("div");
    nuevoDiv.className = "col-12 col-md-4 mb-4";

    // Creo un div con clase "card h-100"
    let cardDiv = document.createElement("div");
    cardDiv.className = "card h-100";

    // Creo un enlace <a> dentro de la tarjeta
    let enlace = document.createElement("a");
    enlace.href = "#";

    // Creo una imagen <img> dentro del enlace
    let imagennew = document.createElement("img");
    imagennew.src = articulo.imagen; // Establece la URL de la imagen desde el artículo
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
    precio.textContent = articulo.precio;

    // Creo descripción del producto
    let description = document.createElement("p");
    description.className = "card-text descripcion";
    description.textContent = articulo.descripcion.substring(0, 50) + "..."; // Establece la descripción del artículo

    // Agrego los elementos a la estructura
    enlace.appendChild(imagennew);
    cardBodyDiv.appendChild(listaUl);
    listaUl.appendChild(star1);
    listaUl.appendChild(star2);
    listaUl.appendChild(star3);
    listaUl.appendChild(star4);
    listaUl.appendChild(star5);
    listaUl.appendChild(precio);
    cardBodyDiv.appendChild(description);
    cardDiv.appendChild(enlace);
    cardDiv.appendChild(cardBodyDiv);
    nuevoDiv.appendChild(cardDiv);

    // Agrego el nuevo contenedor al elemento padre
    let contenedorPadre = document.getElementById("padre");
    contenedorPadre.appendChild(nuevoDiv);
}
let total=0
// Agrego secciones para cada artículo en el carrito
carrito.forEach(function(articulo) {
    seccionesmicarrito(articulo);
    total+=parseFloat(articulo.precio.replace("Precio $", "").replace(",", ""));
    console.log(total)

});

//Calculo total acumulado
let contenedorAcumulado=document.createElement("h1");
contenedorAcumulado.className="precioTotal"
let contenedorPadre = document.getElementById("padre");
contenedorPadre.appendChild(contenedorAcumulado);

console.log(contenedorAcumulado)

const precioTotal=document.querySelector(".precioTotal")
precioTotal.textContent="El precio total de la compra es de $ " + total;

//chequeo si hay alguna compra almacenada en localStorage

function chequeoCarrito() {
    const estadoCarrito = document.getElementById("estadoCarrito");
    let compras = JSON.parse(localStorage.getItem("carrito"));
    estadoCarrito.textContent = Object.keys(compras).length;
    console.log(compras);
}


