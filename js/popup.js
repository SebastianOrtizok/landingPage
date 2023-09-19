
const articuloElement = document.getElementById("articulo");
const imagenElement = document.getElementById("imagen");
const descripcionElement = document.getElementById("descripcion");
const star1Element = document.getElementById("star1");
const star2Element = document.getElementById("star2");
const star3Element = document.getElementById("star3");
const star4Element = document.getElementById("star4");
const star5Element = document.getElementById("star5");
const precioElement = document.getElementById("precio")
//Obtengo el articulo de la localStorage
const obtengodato = localStorage.getItem("articulopopup");
const articulopopup = JSON.parse(obtengodato);

let id=articulopopup.id;
articuloElement.textContent = articulopopup.nombre;
descripcionElement.textContent=articulopopup.descripcion;
imagenElement.src = articulopopup.imagen;
star1Element.className = articulopopup.star1;
star2Element.className = articulopopup.star2;
star3Element.className = articulopopup.star3;
star4Element.className = articulopopup.star4;
star5Element.className = articulopopup.star5;
precioElement.textContent= "Precio $" + articulopopup.precio;


    // Agrego evento al boton para cerrar la ventana
document.getElementById("cerrarVentana").addEventListener("click", function() {
window.close();
    });



    //Carrito de compras agregar articulos al hacer click en agregar
    document.getElementById("comprar").addEventListener("click", function() {
        // Obtengo los datos del carrito de localStorage si existe
        let carritoJSON = localStorage.getItem("carrito");
        let carrito = JSON.parse(carritoJSON) || [];
        // Agrega el nuevo artículo al carrito
        let nuevoArticulo = {
            id: id, 
            nombre: articuloElement.textContent,
            descripcion: descripcionElement.textContent,
            precio: precioElement.textContent,
            imagen: imagenElement.src,
            star1: star1Element.className,
            star2: star2Element.className,
            star3: star3Element.className,
            star4: star4Element.className,
            star5: star5Element.className
        };
    
        carrito.push(nuevoArticulo);
    
        // Almaceno el carrito actualizado en LocalStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));
    });

    