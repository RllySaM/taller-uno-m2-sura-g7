let compras = ["Manzanas"];

console.log("Lista inicial:", compras);

// 1
compras.push("Leche", "Pan");
console.log("Después de push:", compras);

// 2.
compras.unshift("Huevos");
console.log("Después de unshift:", compras);

// 3
compras.splice(1, 1);
console.log("Después de eliminar Manzanas:", compras);

// Resultado final
console.log("Lista final:", compras);