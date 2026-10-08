const producto = "Laptop";
const precio = 2500000;
let stock = 7;

let cantidad;
let continuar = "si";
let respuestaValida; 
let total;   

while (continuar === "si") {

    cantidad = Number(prompt("¿Cuántas unidades deseas comprar?"));

    console.log("Producto:", producto);
    console.log("Cantidad:", cantidad);

    if (cantidad <= 0) {
    console.log("La cantidad debe ser mayor que 0");

} else if (cantidad > stock) {
    console.log("No hay suficiente stock");

} else {
    console.log("Compra permitida");

    total = cantidad * precio;

    console.log("Total a pagar:", total);

    stock = stock - cantidad;

    console.log("Stock restante:", stock);
}

   respuestaValida = "";

while (respuestaValida !== "si" && respuestaValida !== "no") {

    respuestaValida = prompt("¿Deseas realizar otra compra? Escribe si o no");

    if (respuestaValida === null) {
        break;
    }

    respuestaValida = respuestaValida.toLowerCase();

    if (respuestaValida !== "si" && respuestaValida !== "no") {
        console.log("Respuesta no válida. Debes escribir si o no.");
    }
}

if (respuestaValida === null) {
    break;
}

continuar = respuestaValida;
} 

