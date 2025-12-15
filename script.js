let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio){
  carrito.push({ nombre, precio });
  total += precio;
  renderCarrito();
}

function renderCarrito(){
  const lista = document.getElementById("listaCarrito");
  const totalSpan = document.getElementById("total");

  lista.innerHTML = "";

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.nombre} - $${item.precio.toLocaleString()} 
      <button onclick="eliminarProducto(${index})">❌</button>`;
    lista.appendChild(li);
  });

  totalSpan.textContent = total.toLocaleString();
}

function eliminarProducto(index){
  total -= carrito[index].precio;
  carrito.splice(index,1);
  renderCarrito();
}

function finalizarCompra(){
  if(carrito.length === 0){
    alert("El carrito está vacío");
    return;
  }

  let mensaje = "🛒 *Pedido de repuestos*%0A%0A";

  carrito.forEach(item => {
    mensaje += `• ${item.nombre} - $${item.precio.toLocaleString()}%0A`;
  });

  mensaje += `%0A*Total:* $${total.toLocaleString()}%0A`;
  mensaje += "%0A📍 Envío: Interrapidísimo / Domicilio Cúcuta";

  const telefono = "573228275757"; // TU WHATSAPP
  const url = `https://wa.me/${telefono}?text=${mensaje}`;

  window.open(url, "_blank");
}
