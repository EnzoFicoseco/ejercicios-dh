/*Crear una función encontrar el número, que reciba por parámetros un array de
números y un número. La función deberá evaluar si el número proporcionado existe o
no en el array. De existir debe devolver el mensaje “El número XX sí existe en el
array”. En el caso contrario debe mostrar el mensaje: “El valor solicitado no existe”.*/
let numeros = [1, 2, 3, 4, 5];
let aBuscar = 3;

function encontraElNumero (listado, buscado) {
    if (listado.includes(buscado)){
        return `El número ${buscado} sí existe en el array`;
    } else {
        return `El valor solicitado no existe`;
    }
}

console.log("Ejercicio 1");
console.log(encontraElNumero(numeros, aBuscar));


/*Crear una función Juego de trompito, que reciba dos parámetros:
a. El primero, un array con las siguientes cadenas de texto: “Toma 1” ,”Toma 2”,
“Pon 1”, “Pon 2”, “Todos ponen”, “Toma todo”
b. El segundo parámetro será la cantidad de vueltas del trompito comprendidas
entre 2 y 6.
La función tendrá como responsabilidad generar un número aleatorio comprendido
entre 0 y 5. En función del resultado obtenido, se le debe devolver al usuario alguno de
los mensajes suministrados por el trompito. Por ejemplo: “Toma todo”.
Pista: investigar sobre las funcionesMath.random() y Math.floor().*/

let accionesTrompito = ["Toma 1", "Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"];
let cantidadVueltas = 4;

function juegoDeTrompito(acciones, vueltas) {
    if (vueltas < 2 || vueltas > 6) {
        return "La cantidad de vueltas debe estar entre 2 y 6.";
    }

    let resultadoFinal = "";
    
    for (let i = 0; i < vueltas; i++) {
        let aleatorio = Math.floor(Math.random() * 6);
        let mensaje = acciones[aleatorio];
        resultadoFinal += `En la vuelta ${i + 1}: ${mensaje}\n`;
    }

    return resultadoFinal;
}
console.log("-------------------");
console.log("Ejercicio 2");
console.log(juegoDeTrompito(accionesTrompito, cantidadVueltas));

/*Crear una función sumatoria de pares e impares, que recibirá por parámetros un
array con diez valores numéricos. La función tendrá la responsabilidad de devolver al
usuario la sumatoria total de los números pares y de los números impares.
Pista: investigar sobre el operador módulo.*/

let ListadoNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumatoria(listadoNumeros) {
    let pares = 0;
    let impares = 0;

    for(let i = 0; i < listadoNumeros.length; i++)
    {
        if (listadoNumeros[i]%2 == 0){
            pares += parseInt(listadoNumeros[i],10);
        } else {
            impares += parseInt(listadoNumeros[i],10);
        }
    }

    return [`Pares = ${pares}`, `Impares = ${impares}`];
}

console.log("-------------------");
console.log("Ejercicio 3");
console.log(sumatoria(ListadoNumeros));