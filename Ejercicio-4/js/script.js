let num = prompt ("Ingresar numero");
function numero_par_impar(num) {
num = parseInt (num);

if (num % 2 === 0) {
    return "El numero es par";
} else {
    return "El numero es impar";
}
}
let resultado = numero_par_impar(num);
document.write(resultado);