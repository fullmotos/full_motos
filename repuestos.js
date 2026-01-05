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






function agregarMarca(nombre, marca, precio) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  const existe = carrito.find(
    item => item.nombre === nombre && item.marca === marca
  );

  if (existe) {
    existe.cantidad += 1;
  } else {
    carrito.push({
      nombre: nombre,
      marca: marca,
      precio: precio,
      cantidad: 1
    });
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarContadorCarrito();
}
