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



 function agregasecciones(imagenElement,star1Element,star2Element,star3Element,star4Element,star5Element,precioElement,articuloElement,descripcionElement,elementoPadre,id,eliminar) {

const html = `
<div class="card h-100">
        <img
            src="${imagenElement}"
            class="card-img-top imagen"
            alt="Imagen Artículo"
        />
    <div class="card-body">
        <ul class="list-unstyled d-flex justify-content-between">
            <li>
                <i class="${star1Element}"></i>
                <i class="${star2Element}"></i>
                <i class="${star3Element}"></i>
                <i class="${star4Element}"></i>
                <i class="${star5Element}"></i>
            </li>
            <li class="text-muted text-right">${precioElement}</li>
        </ul>
        <a
            href="articulo.html"
            class="h2 text-decoration-none text-dark articuloName"
        >${articuloElement}</a
        >
        <p class="card-text">${descripcionElement}</p>
        <button data-id="${id}" type="eliminar" class="${eliminar} ">Eliminar artículo</button>
    </div>
</div>`;

//**Creo la estructura para inyectar el html */
const contenedorPadre = document.getElementById(`${elementoPadre}`);
// Creo un elemento DIV
const cardElement = document.createElement("div");
//El codigo generado lo asigno en cardElemnet y le aplico innerHTML
cardElement.innerHTML = html;
cardElement.className = "col-12 col-md-4 mb-4";
// Agrega el elemento al contenedor padre
contenedorPadre.appendChild(cardElement);

 }

 export {agregasecciones};