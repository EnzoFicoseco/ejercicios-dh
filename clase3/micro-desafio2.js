let nombre = "Ramón";
let apellido = "Valdez";
let sueldoActual = 250000;
let porcentajeAumento = 20;

let calculoAumento = (sueldoActual * porcentajeAumento)/100;

let nuevoSueldo = calculoAumento + sueldoActual;

console.log(`
Hola querido ${nombre} ${apellido} 
En base a su sueldo actual:
$${sueldoActual}
Ud. ha recibido un aumento del ${porcentajeAumento}%:
$${calculoAumento}
y ahora su sueldo actual es de:
$${nuevoSueldo}
Hasta Luego!
`);