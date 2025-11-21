let carrito = [];

console.log("Carrito inicial:", carrito);

// 1
carrito.push("Camisa", "Pantalón");
console.log("Después de añadir Camisa y Pantalón:", carrito);

// 2
carrito.unshift("Zapatos");
console.log("Después de añadir Zapatos al inicio:", carrito);

// 3
carrito.splice(1, 1);
console.log("Después de eliminar Camisa:", carrito);