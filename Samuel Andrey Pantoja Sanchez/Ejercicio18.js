let invitados = ["Carlos", "Beatriz", "David", "Ana"];

console.log("Lista inicial de invitados:", invitados);

// 1
invitados.sort();
console.log("Lista ordenada alfabéticamente:", invitados);

// 2
invitados.splice(1, 1);
console.log("Después de que Beatriz cancela:", invitados);