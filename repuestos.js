function filtrarCategoria(categoria) {
    const productos = document.querySelectorAll('.producto');
    const botones = document.querySelectorAll('.subcategorias button');

    botones.forEach(b => b.classList.remove('active'));

    event.target.classList.add('active');

    productos.forEach(producto => {
        if (categoria === 'todos' || producto.dataset.categoria === categoria) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}


function cambiarPrecio(select) {
  const precio = select.value;
  const card = select.closest('.producto-card');
  const precioSpan = card.querySelector('.precio-actual');

  precioSpan.textContent = `$${Number(precio).toLocaleString()}`;
}

function agregarAlCarrito(nombre, boton) {
  const card = boton.closest('.producto-card');
  const select = card.querySelector('.marca-select');
  const precio: { valor: 35000, marca: "CHOHO" };
  const marca = select.options[select.selectedIndex].dataset.marca;

  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  carrito.push({
    nombre,
    marca,
    precio: Number(precio),
    cantidad: 1
  });

  localStorage.setItem('carrito', JSON.stringify(carrito));

  alert(`Agregado al carrito:\n${nombre}\nMarca: ${marca}`);
}
