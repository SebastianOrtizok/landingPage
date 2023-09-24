function chequeoCarrito() {
    let compras = JSON.parse(localStorage.getItem("carrito"));
    if (compras === null || typeof compras !== 'object' || Object.keys(compras).length === 0){
        estadoCarrito.textContent = '0'
    } else {
        const estadoCarrito = document.getElementById("estadoCarrito");
        estadoCarrito.textContent = Object.keys(compras).length;
        console.log(compras);
    }
}
export { chequeoCarrito };



 function agregasecciones(articulo, parentElement) {
// Se hace esta funcion para generar las estrellas de manera random y no escribir tanto codigo del json 
    let startElement = '';
// las calificaciones de los productos ahora se hacen de manera random usando un ciclo y solo especificando dos propiedades
    for (let index = 0; index <= 5; index++) {
   if(Math.random() > .7){
    startElement +=  `<i class="${articulo.star5}"></i>`.repeat(5 -index);
    break;
}
   startElement += `<i class="${articulo.star1}"></i>`
}
    const html = `
<div class="card h-100 product-card">
        <img
            src="${articulo.imagen}"
            class="card-img-top imagen"
            alt="Imagen Artículo"
        />
    <div class="card-body">
        <ul class="list-unstyled d-flex justify-content-between">
            <li class="d-flex">
               ${startElement}
            </li>
            <li class="text-muted text-right">${articulo.precio}</li>
        </ul>
        <a
            href="articulo.html"
            class="h2 text-decoration-none text-dark"
        >${articulo.nombre}</a
        >
        <p class="card-text">${articulo.descripcion}</p>
        <button class="btn btn-dark">Buy</button>
        <button buy="true" data-id="${articulo.id}" type="eliminar" class="btn btn-danger d-none eliminar ">Eliminar artículo</button>
    </div>
</div>`;

//**Creo la estructura para inyectar el html */
const contenedorPadre = document.getElementById(`${parentElement}`);
// Creo un elemento DIV
const cardElement = document.createElement("div");
//El codigo generado lo asigno en cardElemnet y le aplico innerHTML
cardElement.innerHTML = html;
cardElement.className = "col-12 col-md-4 mb-4";
// Agrega el elemento al contenedor padre
contenedorPadre.appendChild(cardElement);

 }

 export {agregasecciones};