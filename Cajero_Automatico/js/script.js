let saldo = 1000;
let lista_transacciones = [];

function mostrarMenu() {
    return prompt(
        "Menú de opciones:\n" +
        "1. Ver saldo de la cuenta\n" +
        "2. Ingresar dinero\n" +
        "3. Retirar dinero\n" +
        "4. Ver últimas transacciones\n" +
        "5. Salir\n" +
        "Seleccione una opción:"
    );
}

function Cajero_Automatico() {
    let salir = false;
    while (!salir) {
        let opcion = mostrarMenu();

        switch (opcion) {
            case "1":
                alert("Saldo actual: $" + saldo);
                break;
            case "2":
                let ingreso = parseFloat(prompt("Ingrese la cantidad de dinero a ingresar:"));
                if (ingreso > 0) {
                    saldo += ingreso;
                    lista_transacciones.push("Ingreso de $" + ingreso);
                    alert("Dinero ingresado exitosamente. Nuevo saldo: $" + saldo);
                } else {
                    alert("Cantidad no válida.");
                }
                break;
            case "3":
                let retiro = parseFloat(prompt("Ingrese la cantidad de dinero a retirar:"));
                if (retiro > 0 && retiro <= saldo) {
                    saldo -= retiro;
                    lista_transacciones.push("Retiro de $" + retiro);
                    alert("Dinero retirado exitosamente. Nuevo saldo: $" + saldo);
                } else {
                    alert("Cantidad no válida o saldo insuficiente.");
                }
                break;
            case "4":
                if (lista_transacciones.length === 0) {
                    alert("No hay transacciones recientes.");
                } else {
                    alert("Últimas transacciones:\n" + lista_transacciones.join("\n"));
                }
                break;
            case "5":
                alert("Gracias por usar el cajero automático. Hasta luego.");
                salir = true;
                break;
            default:
                alert("Opción no válida. Por favor, seleccione una opción del 1 al 5.");
                break;
        }
    }
}


Cajero_Automatico();
