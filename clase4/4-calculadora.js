let num1 = 27;
let num2 = 8;
//sumar, restar, multiplicar, dividir
let operacion = "sumar";

switch (operacion) {
    case 'sumar':
            console.log(`La suma entre los dos números ingresados es: ${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 'restar':
        console.log(`La resta entre los dos números ingresados es: ${num1} - ${num2} = ${num1 - num2}`);
        break;
    case 'multiplicar':
        console.log(`La multiplicación entre los dos números ingresados es: ${num1} * ${num2} = ${num1 * num2}`);
        break;
    case 'dividir':
        console.log(`La división entre los dos números ingresados es: ${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log(`Las operaciones aceptadas son: sumar-restar-multiplicar-dividir`);
}
