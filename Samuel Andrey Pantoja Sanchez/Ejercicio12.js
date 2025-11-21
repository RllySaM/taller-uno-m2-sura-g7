let commits = ["v1.0", "v1.1"];

console.log("Commits iniciales:", commits);

// 1
commits.push("v1.2");
console.log("Después de añadir v1.2:", commits);

// 2
commits.pop();
console.log("Después de deshacer v1.2:", commits);

// 3
commits.push("v1.2-corregido");
console.log("Después de añadir v1.2-corregido:", commits);