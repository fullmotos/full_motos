let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const lista = document.getElementById("lista");
const totalEl = document.getElementById("total");
const whatsappBtn = document.getElementById("whatsapp");

function renderCarrito() {
    lista.innerHTML = "";
    let total = 0;
    let mensaje = "Hola, quiero comprar:%0A";

    if (carrito.length === 0) {
        lista.innerHTML = "<p>Tu carrito está vacío</p>";
        totalEl.textContent = "";
        whatsappBtn.style.display = "none";
        return;
    }

    carrito.forEach((item, index) => {
        const precio = Number(item.precio);
        const cantidad = Number(item.cantidad);

        const subtotal = precio * cantidad;
        total += subtotal;

        mensaje += `• ${item.nombre} x${cantidad} - $${subtotal}%0A`;

        const div = document.createElement("div");
        div.className = "item";

        div.innerHTML = `
            <img src="${item.imagen}">
            <div class="info">
                <strong>${item.nombre}</strong>
                <span>$${precio.toLocaleString("es-CO")}</span>
            </div>
            <div class="acciones">
                <button onclick="cambiarCantidad(${index}, -1)">−</button>
                <span>${cantidad}</span>
                <button onclick="cambiarCantidad(${index}, 1)">+</button>
                <button class="eliminar" onclick="eliminar(${index})">✕</button>
            </div>
        `;

        lista.appendChild(div);
    });

    totalEl.textContent = `Total: $${total.toLocaleString("es-CO")}`;
    whatsappBtn.href = `https://wa.me/573228275757?text=${mensaje}%0ATotal: $${total}`;
}

function cambiarCantidad(index, cambio) {
    carrito[index].cantidad += cambio;

    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }

    guardar();
}

function eliminar(index) {
    carrito.splice(index, 1);
    guardar();
}

function guardar() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
}

renderCarrito();
