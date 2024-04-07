console.log(document);

alert("Estás por entrar a la calculadora de los pingüinos");

let operacion = prompt("(+) para SUMAR, (-) para Restar, (*) para Multiplicar, (/) para Dividir");

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let resultado;

if (operacion === "+") {
    resultado = num1 + num2;
} else if (operacion === "-") {
    resultado = num1 - num2;
} else if (operacion === "*") {
    resultado = num1 * num2;
} else if (operacion === "/") {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        resultado = "Error: No se puede dividir por cero";
    }
} else {
    resultado = "Operación no válida";
}

console.log(resultado);
