let tareas = ["Revisar emails"];

console.log("Pila inicial:", tareas);

// 1
tareas.unshift("Llamar al cliente");
console.log("Después de añadir 'Llamar al cliente':", tareas);

// 2
tareas.unshift("Preparar reporte");
console.log("Después de añadir 'Preparar reporte':", tareas);

// 3
tareas.shift();
console.log("Después de completar 'Preparar reporte':", tareas);

// 4
tareas.shift();
console.log("Después de completar 'Llamar al cliente':", tareas);