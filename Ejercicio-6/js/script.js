let lado1  = prompt("Ingresar Numero");
let lado2  = prompt("Ingresar Numero");

function area_perimetro() {
    let perimetro = 2*(lado1 + lado2);
    return perimetro;
}
let resultado = area_perimetro();
document.write (resultado);