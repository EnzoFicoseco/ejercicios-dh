/*Facturación - Cursos DH
El Tech Leader de nuestro equipo nos informa que debemos realizar un código que
permita calcular el monto a pagar por un alumno basándose en los cursos que
desea tomar en Digital House. Deberás seguir los siguientes pasos para lograr el
objetivo:*/
let nombre = "Enzo";
let apellido = "Ficoseco";

//a. Crear un array multidimensional que contenga los nombres de los cursos y su precio en pesos: .
let cursosPrecios = [["html5", 4000], ["css3", 5000], ["javascript", 10000], ["react", 7000], ["nodejs", 15000]];

//b. Crear un array que contenga los cursos que el alumno quiere tomar con DH. Deben estar escritos en MAYÚSCULAS y el alumno puede seleccionar entre .
let cursosTomados = ["CSS3", "JAVASCRIPT","REACT", "NODEJS", "HTML5"]; //["HTML5", "CSS3", "JAVASCRIPT", "REACT", "NODEJS"]

//c. Crear una función (Callback) que reciba como parámetros el array multidimensional de los cursos
//  y el otro array que indica los cursos que quiere hacer el alumno. La función tendrá la responsabilidad
//   de calcular y devolver el monto total a pagar por el alumno en función de los cursos que quiere realizar.
//    No olvides que en el array multidimensional los nombres de los cursos están escritos en letras minúsculas
//     y tienes que pasarlas a MAYÚSCULAS.
function aPagar(cursosPrecios, cursosTomados){
    let monto = 0;
    for(let i = 0; i < cursosTomados.length; i++) {
        for (let j = 0; j < cursosPrecios.length; j++) {
            if (cursosTomados[i] == cursosPrecios[j][0].toUpperCase()) {
                monto += cursosPrecios[j][1];
            }
        }
    }
    return monto;
}

//d. Crear otra función que reciba como parámetros el nombre y el apellido del alumno, el array multidimensional
//  de los cursos con sus respectivos precios y el array que contiene qué cursos quiere hacer el alumno.
//   Esta función tendrá la responsabilidad de retornar el nombre y el apellido del alumno y el monto total
//    a pagar en función de los cursos que quiere realizar.
const mensaje = (nombre, apellido, cursos, realizados, callback) => {
    let calcular = callback(cursos, realizados);
    
    console.log (`Estimado ${nombre} ${apellido}, en función de los cursos seleccionados:`);   
    for(let i = 0; i < realizados.length; i++) {
        console.log(`${i + 1}.- ${realizados[i]}`)
    }
    console.log(`El monto total a pagar es de: $${calcular}.`)
    console.log("Bienvenido a la gran aventura Digital House.")
}

//e. Una vez creado el programa, ejecutalo. Para verificar los resultados solicitados, invoca a la segunda función, asigna diferentes valores o argumentos y no olvides utilizar el console.log() para mostrar los resultados al usuario. Te compartimos un ejemplo:
mensaje(nombre, apellido, cursosPrecios, cursosTomados, aPagar);

