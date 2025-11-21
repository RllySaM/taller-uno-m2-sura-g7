let palabras = ["uno", "dos", "cuatro"];

console.log("Lista inicial:", palabras);

// 1
palabras.reverse();
console.log("Después de invertir:", palabras);

// 2
palabras.splice(0, 1, "tres");
console.log("Después de reemplazar cuatro por tres:", palabras);