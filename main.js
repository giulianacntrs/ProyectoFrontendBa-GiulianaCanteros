const abrirCarrito = document.querySelector(".abrirCarrito");
const cerrarCarrito = document.querySelector(".cerrarCarrito");
const lista = document.querySelector(".lista");
const body = document.querySelector("body");
const total = document.querySelector(".total");
const cantidad = document.querySelector(".cantidad");

abrirCarrito.addEventListener("click", () => {
    body.classList.add("active")
})

cerrarCarrito.addEventListener("click", () => {
    body.classList.remove("active")
})

let productos = [
    {
        id: 1,
        nombre: "Lipsgloss Shine",
        imagen: "./img/productos/1.jpg",
        precio: 4500
    },

    {
        id: 2,
        nombre: "Lipstick XOXO",
        imagen: "./img/productos/2.jpg",
        precio: 3500
    },

    {
        id: 3,
        nombre: "Lipsgloss Diamond",
        imagen: "./img/productos/3.jpg",
        precio: 4000
    },

    {
        id: 4,
        nombre: "Lips balm Strawberry",
        imagen: "./img/productos/4.jpg",
        precio: 2500
    },
    {
        id: 5,
        nombre: "Lips scrum Cherry",
        imagen: "./img/productos/5.jpg",
        precio: 2000
    },
    {
        id: 6,
        nombre: "Mascarilla para Labios Lips",
        imagen: "./img/productos/6.jpg",
        precio: 5000
    }
]

let listaTienda = [];

const IniciarApp = () => {
    productos.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
      <img src="img/${value.images}">
      <div class="titulo">${value.nombre}</div>
      <div class="titulo">${value.nombre}</div>
      <button onClick="agregarAlCarrito(${key})">Agregar al carrito</button>
    `;
        lista.appendChild(newDiv);
    })
}
IniciarApp()

const agregarAlCarrito = (key) => {
    if (listaTienda[key] == null) {
        listaTienda[key] = JSON.parse(JSON.stringify(productos[key]));
        listaTienda[key].cantidad = 1

    }
    recargarCard();

    const recargarCard = () => {
        listaTienda.innerHTML = "";
        let contador = 0;
        let precioTotal = 0;

        listaTienda.forEach((value, key) => {
            precioTotal = precioTotal + value.precio;
            contador = contador + value.cantidad;

            if (value != null) {
                let newDiv = document.createElement("li");
                newDiv.innerHTML = ` 
            <div><img src = "imga/${value.imagen}"></div>
            <div class ="tituloCard">${value.nombre}</div>
            <div class ="precioCard">${value.precio.toLocaleString()}</div>

            <div> 
            <button class="botonCard" onclick ="cambiarCantidad(${key}) value="${value.cantidad - 1}"></button>
            </div>
            `
            listaTienda.appendChild(newDiv);
            }
            total.innerText = precioTotal.toLocaleString();
            cantidad.innerText = contador;

        })
    }
}

