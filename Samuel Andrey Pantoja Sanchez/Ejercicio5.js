let fila = ["Ana", "Luis", "Carlos", "Maria"];

console.log("Fila inicial:", fila);

// 1
fila.splice(1, 1);
console.log("Después de que Luis se va:", fila);

// 2
fila.splice(1, 0, "Jorge");
console.log("Después de que Jorge se cuela:", fila);