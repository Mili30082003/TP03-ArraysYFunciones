let numero = prompt("Ingrese un número para ver su tabla de multiplicar:");


function tablaMultiplicar(numero) {
    let tabla = "<p>";
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        tabla += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
    tabla += "</p>";
    return tabla;
}

document.write("<h2>Tabla de Multiplicar del número " + numero + "</h2>");
document.write(tablaMultiplicar(numero));