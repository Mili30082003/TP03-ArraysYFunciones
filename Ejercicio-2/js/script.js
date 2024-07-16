
let ciudades = [];
let ciudad;
while (ciudad = prompt("Introduce el nombre de una ciudad (o presiona cancelar para terminar):")) {
    ciudades.push(ciudad);
}


console.log("Ciudades:", ciudades);


document.write("Longitud del arreglo: " + ciudades.length + "<br>");


if (ciudades.length > 0) {
    document.write("Primera ciudad: " + ciudades[0] + "<br>");
}
if (ciudades.length > 2) {
    document.write("Tercera ciudad: " + ciudades[2] + "<br>");
}
if (ciudades.length > 0) {
    document.write("Última ciudad: " + ciudades[ciudades.length - 1] + "<br>");
}

ciudades.push("París");


if (ciudades.length > 1) {
    document.write("Ciudad en la segunda posición: " + ciudades[1] + "<br>");
}
if (ciudades.length > 1) {
    ciudades[1] = "Barcelona";
}

document.write("Ciudades después de modificaciones:", ciudades);

    

