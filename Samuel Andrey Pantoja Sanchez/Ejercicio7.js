let asientos = ["ocupado", "Libre", "Libre", "Libre", "ocupado"];

console.log("Estado inicial de asientos:", asientos);

// 1
asientos.fill("Reservado", 1, 4);
console.log("Después de reservar los asientos:", asientos);