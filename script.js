let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(nombre, precio){
  carrito.push({ nombre, precio });
  guardarCarrito();
  alert("Producto agregado al carrito");
}

function guardarCarrito(){
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito(){
  const tabla = document.getElementById("tablaCarrito");
  const totalSpan = document.getElementById("total");

  if(!tabla) return;

  tabla.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    total += item.precio;
    tabla.innerHTML += `
      <tr>
        <td>${item.nombre}</td>
        <td>$${item.precio.toLocaleString()}</td>
        <td>
          <button onclick="eliminarProducto(${index})">❌</button>
        </td>
      </tr>
    `;
  });

  totalSpan.textContent = total.toLocaleString();
}

function eliminarProducto(index){
  carrito.splice(index,1);
  guardarCarrito();
  cargarCarrito();
}

function finalizarCompra(){
  if(carrito.length === 0){
    alert("El carrito está vacío");
    return;
  }

  let mensaje = "🛒 *Pedido de repuestos*%0A%0A";
  let total = 0;

  carrito.forEach(item => {
    mensaje += `• ${item.nombre} - $${item.precio.toLocaleString()}%0A`;
    total += item.precio;
  });

  mensaje += `%0A*Total:* $${total.toLocaleString()}`;
  mensaje += "%0A📍 Envío: Interrapidísimo / Domicilio Cúcuta";

  const telefono = "573228275757";
  window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");

  localStorage.removeItem("carrito");
}

document.addEventListener("DOMContentLoaded", cargarCarrito);
