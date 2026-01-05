let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let lista = document.getElementById("lista");
let total = 0;

carrito.forEach(p => {
    let div = document.createElement("div");
    div.innerHTML = `<p>${p.nombre} - $${p.precio}</p>`;
    lista.appendChild(div);
    total += p.precio;
});

document.getElementById("total").innerText = "Total: $" + total;

let mensaje = "Hola, quiero comprar:%0A";
carrito.forEach(p => {
    mensaje += `- ${p.nombre} $${p.precio}%0A`;
});
mensaje += `%0ATotal: $${total}`;

document.getElementById("whatsapp").href =
    "https://wa.me/573228275757?text=" + mensaje;
