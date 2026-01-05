let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let lista = document.getElementById("lista");
let total = 0;

function renderCarrito(){
    lista.innerHTML = "";
    total = 0.00;

    carrito.forEach((p, index) => {
        total += p.precio * p.cantidad;

        let div = document.createElement("div");
        div.className = "item-carrito";

        div.innerHTML = `
          <img src="${p.imagen}">
          <div class="info">
            <h4>${p.nombre}</h4>
            <p>$${p.precio}</p>
            <div class="cantidad">
              <button onclick="cambiarCantidad(${index}, -1)">−</button>
              <span>${p.cantidad}</span>
              <button onclick="cambiarCantidad(${index}, 1)">+</button>
            </div>
          </div>
          <button class="eliminar" onclick="eliminarProducto(${index})">✕</button>
        `;

        lista.appendChild(div);
    });

    document.getElementById("total").innerText = "Total: $" + total;
    actualizarWhatsApp();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cambiarCantidad(i, cambio){
    carrito[i].cantidad += cambio;
    if (carrito[i].cantidad <= 0) carrito.splice(i,1);
    renderCarrito();
}

function eliminarProducto(i){
    carrito.splice(i,1);
    renderCarrito();
}

function actualizarWhatsApp(){
    let mensaje = "Hola, quiero comprar:%0A";
    carrito.forEach(p => {
        mensaje += `- ${p.nombre} x${p.cantidad} $${p.precio * p.cantidad}%0A`;
    });
    mensaje += `%0ATotal: $${total}`;

    document.getElementById("whatsapp").href =
      "https://wa.me/573228275757?text=" + mensaje;
}

renderCarrito();


itemDiv.innerHTML = `
  <strong>${item.nombre}</strong><br>
  Marca: ${item.marca}<br>
  Precio: $${item.precio.toLocaleString()}<br>
  Cantidad: ${item.cantidad}
`;

localStorage.removeItem('carrito');
location.reload();
