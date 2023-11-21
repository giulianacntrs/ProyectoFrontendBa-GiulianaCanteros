document.addEventListener('DOMContentLoaded', () => {
    const lista = document.querySelector(".lista");
    const abrirCarrito = document.querySelector(".carrito");
    const cerrarCarrito = document.querySelector(".cerrarCarrito");
    const body = document.querySelector("body");
    const total = document.querySelector(".total");
    const cantidad = document.querySelector(".cantidad"); 
   
/*     abrirCarrito.addEventListener("click", () => {
      body.classList.add("active")
    });
   
    cerrarCarrito.addEventListener('click', () => {
      // Desactivar la interfaz
      carrito.style.display = 'none';
      // Desactivar el botón
      cerrarCarrito.disabled = true;
      navItem3.style.display = 'block';
    });
  */


let productos = [
    {
        id: 1,
        nombre: "Lipsgloss Shine",
        imagen: "1.jpg",
        precio: 4500
    },

    {
        id: 2,
        nombre: "Lipstick XOXO",
        imagen: "2.jpg",
        precio: 3500
    },

    {
        id: 3,
        nombre: "Lipsgloss Diamond",
        imagen: "3.png",
        precio: 4000
    },

    {
        id: 4,
        nombre: "Lips balm Strawberry",
        imagen: "4.png",
        precio: 2500
    },
    {
        id: 5,
        nombre: "Lips scrum Cherry",
        imagen: "5.png",
        precio: 2000
    },
    {
        id: 6,
        nombre: "Mascarilla para Labios Lips",
        imagen: "6.jpg",
        precio: 5000
    }
]

let listaCarrito = [];

/* TRAE LA LISTA DE LOS PRODUCTOS */
const IniciarApp = () => {
   productos.forEach((value, id) => {
       let newDiv = document.createElement("div");
       newDiv.classList.add("item");

       let tituloDiv = document.createElement("div");
       tituloDiv.classList.add("titulo");
       tituloDiv.textContent = value.nombre;

       let img = document.createElement("img");
       img.src = `img/productos/${value.imagen}`;

       let descripcionDiv = document.createElement("div");
       descripcionDiv.classList.add("descripcion");
       descripcionDiv.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

       let precioDiv = document.createElement("div");
       precioDiv.classList.add("precio");
       precioDiv.textContent = `$${value.precio}`;

       let button = document.createElement("button");
       button.textContent = "Agregar al carrito";
       button.addEventListener("click", () => agregarAlCarrito(id));

       newDiv.appendChild(tituloDiv);
       newDiv.appendChild(img);
       newDiv.appendChild(descripcionDiv);
       newDiv.appendChild(precioDiv);
       newDiv.appendChild(button);

       lista.appendChild(newDiv);
    })
}
IniciarApp();

const agregarAlCarrito = (id) => {
    // Si el producto ya está en el carrito, incrementa la cantidad
    let productoEnCarrito = listaCarrito.find(producto => producto.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        // Si el producto no está en el carrito, agrega el producto al carrito
        listaCarrito.push({ ...productos[id], cantidad: 1});
    }
    recargarCard(); 
 }
 
 const recargarCard = () => {
     listaCarrito = [];
        let contador = 0;
        let precioTotal = 0;
 
        listaCarrito.forEach((value, id) => {
            precioTotal = precioTotal + value.precio;
            contador = contador + value.cantidad;
 
            if (value != null) {
               let newDiv = document.createElement("li");
               newDiv.innerHTML = ` 
            <div><img src = "img/${value.imagen}"></div>
            <div class ="tituloCard">${value.nombre}</div>
            <div class ="precioCard">${value.precio.toLocaleString()}</div>
 
            <div> 
            <button class="botonCard" onclick ="cambiarCantidad(${id}) 
            value="${value.cantidad - 1}"></button>
            <div class= "contador">value="${value.cantidad}</div>
            <button class="botonCard" onclick ="cambiarCantidad(${id}) 
            value="${value.cantidad + 1}"></button>
            </div>
            `
            listaCarrito.appendChild(newDiv);
            }
            total.innerText = precioTotal.toLocaleString();
            cantidad.innerText = contador;
 
        })
    }
 
 const cambiarCantidad = (id, cantidad) => {
     if (cantidad == 0) {
         delete listaCarrito[id]
     }
     else{
         listaCarrito[id].cantidad = cantidad;
         listaCarrito[id].precio = cantidad * productos[id].precio
     }
 }
 
 recargarCard();
})

