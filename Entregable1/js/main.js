console.log("Mi primer script interactivo");
const nombre = prompt("¿Cuál es tu nombre?");
const anioNacimiento = parseInt(prompt("¿En qué año naciste?"));
const edad = 2026 - anioNacimiento;
const ciudad = prompt("¿En qué ciudad vives?");
const mensaje = "Hola " + nombre + ", tienes " + edad + " años y vives en " + ciudad + ".";
console.log(mensaje);

