function comprar(producto, precio){
  const telefono = "573000000000"; // CAMBIA TU NÚMERO
  const mensaje = `Hola, estoy interesado en ${producto} con precio ${precio}`;
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

function filtrarProductos(){
  const texto = document.getElementById("buscar").value.toLowerCase();
  const productos = document.querySelectorAll(".producto");

  productos.forEach(p => {
    const nombre = p.dataset.nombre;
    p.style.display = nombre.includes(texto) ? "block" : "none";
  });
}
