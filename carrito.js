document.addEventListener("DOMContentLoaded", mostrarCarrito);

function mostrarCarrito() {
  const contenedor = document.getElementById("lista-carrito");
  const totalHTML = document.getElementById("total");

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  contenedor.innerHTML = "";
  let total = 0;

  carrito.forEach((producto, index) => {
    total += Number(item.precio) * item.cantidad;

    const item = document.createElement("div");
    item.className = "item-carrito";

    item.innerHTML = `
      <img src="${producto.imagen || 'fullmotos.jpeg'}" alt="">
      <div class="info">
        <h4>${producto.nombre}</h4>
        <p>$${producto.precio.toLocaleString()}</p>
      </div>
      <div class="cantidad">
        <button onclick="cambiarCantidad(${index}, -1)">−</button>
        <span>${producto.cantidad}</span>
        <button onclick="cambiarCantidad(${index}, 1)">+</button>
      </div>
      <button class="eliminar" onclick="eliminar(${index})">✕</button>
    `;

    contenedor.appendChild(item);
  });

  totalHTML.textContent = `$${total.toLocaleString()}`;
}

function cambiarCantidad(index, cambio) {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  carrito[index].cantidad += cambio;

  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function eliminar(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}
