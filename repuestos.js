document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn-agregar");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const producto = {
        nombre: boton.dataset.nombre,
        precio: Number(boton.dataset.precio),
        imagen: boton.dataset.imagen,
        cantidad: 1
      };

      agregarAlCarrito(producto);
    });
  });
});

function agregarAlCarrito(producto) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const existe = carrito.find(p => p.nombre === producto.nombre);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push(producto);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito 🛒");
}
