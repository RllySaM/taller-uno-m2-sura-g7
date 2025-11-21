let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];

console.log("Cola inicial:", colaImpresion);

// 1
colaImpresion.shift();
console.log("Después de imprimir el primer documento:", colaImpresion);

// 2
colaImpresion.push("doc4.txt");
console.log("Después de añadir 'doc4.txt':", colaImpresion);

// 3
colaImpresion.shift();
console.log("Después de imprimir el siguiente documento:", colaImpresion);