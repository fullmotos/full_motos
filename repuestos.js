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

< !---------------------------------------------------------------------------------------- >


    function agregarAlCarrito(nombre, marca, precio) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  const existente = carrito.find(
    item => item.nombre === nombre && item.marca === marca
  );

  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({
      nombre,
      marca,
      precio,
      cantidad: 1
    });
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarContadorCarrito();
}
