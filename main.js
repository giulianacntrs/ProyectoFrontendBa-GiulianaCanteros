document.addEventListener('DOMContentLoaded', () => {
    const lista = document.querySelector(".lista");

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
})

