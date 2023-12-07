let texto = "HolA amigO";
let edad = 22;
let salarioMensual = 200000;
let diasTrabajadosPorMes = 20;
let horasPorDia = 8;

let aMayuscula = texto => texto.toUpperCase();

let tipoDeDato = texto => typeof texto;

let edadPerruna = edad => edad * 7;

let valorHoraTrabajo = (salarioMensual, diasTrabajadosPorMes, horasPorDia) =>
 salarioMensual / diasTrabajadosPorMes / horasPorDia;

 console.log(aMayuscula(texto));
 console.log(tipoDeDato(texto));
 console.log(edadPerruna(edad));
 console.log(valorHoraTrabajo(salarioMensual, diasTrabajadosPorMes, horasPorDia));