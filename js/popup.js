const articuloElement = document.getElementById("articulo");
const imagenElement = document.getElementById("imagen");
const precioElement = document.getElementById("precio")
const descripcionElement = document.getElementById("descripcion");
const obtengodato = localStorage.getItem("articulopopup");
const articulopopup = JSON.parse(obtengodato);

articuloElement.textContent = articulopopup.nombre;
descripcionElement.textContent=articulopopup.descripcion;
imagenElement.src = articulopopup.imagen;
precioElement.textContent= "Precio $" + articulopopup.precio;


    // Agrego evento al boton para cerrar la ventana
document.getElementById("cerrarVentana").addEventListener("click", function() {
window.close();
    });


    //Carrito de compras guara articulo en localStorage
        // indico carrito lleno en página primcipal
    const carrito=document.getElementById("carrito");
    carrito.addEventListener("click",()=>{
        localStorage.setItem("carrito", JSON.stringify(articulopopup));
    });



