let codigos = ["A-10", "C-30", "B-20", "D-40"];

console.log("Lista inicial de códigos:", codigos);

// 1
codigos.sort();
console.log("Después de ordenar alfabéticamente:", codigos);

// 2
codigos.splice(2, 1);
console.log("Después de eliminar C-30:", codigos);

// 3
codigos.unshift("X-99");
console.log("Después de añadir X-99 al inicio:", codigos);

// 4
codigos.reverse();
console.log("Lista final después de invertir:", codigos);