/*Promedio alumnos graduados por curso
2. El Tech Leader, nos ¡Felicita! por los avances realizados en el desafío anterior. Dado
que hemos mostrado bastante expertise, sube su exigencia y nos pide que ayudemos
a uno de los equipos de desarrollo. Necesitan un código que permita determinar el
promedio de alumnos egresados por curso. Para lograrlo debemos realizar lo
siguiente:*/

//a. Crear cuatro variables y asignar a cada una las siguientes cadenas de texto
let HTML = "30 45 25 34 18 23 16 50 72 70";
let CSS = "50 45 71 34 23 45 65 75 63 43 74 70";
let JAVASCRIPT = "70 65 58 45 23 57 34 17 72";
let NODEJS = "45 56 73 34 65 72 70 32";

//b. A cada una de las variables que contienen las cadenas de texto, habrá que convertirlas a arrays,
//  separando cada elemento por una coma
let graduadosHTML5 = HTML.split(" ");
let graduadosCSS3 = CSS.split(" ");
let graduadosJAVASCRIPT = JAVASCRIPT.split(" ");
let graduadosNODEJS = NODEJS.split(" ");

let eleccion = 3;

//c. Crear una función que reciba como parámetros los cuatro arrays de los alumnos graduados y un
//  número comprendido entre el 1 y el 4, donde: 1 = HTML5, 2 = CSS3, 3 = JAVASCRIPT, 4 = NODEJS. La
//   función tendrá la responsabilidad de calcular y devolver el promedio de graduados del curso indicado.
//    Si el parámetro del curso es un valor diferente del 1 al 4, deberá retornar un mensaje al usuario
//     indicando cuales son los valores asignados a cada curso.
const calcular = (html, css, javascript, nodejs, elegido) => {
    let acum = 0;
    let prom = 0;
    let gradudados = "";
    switch (elegido) {
        case 1: {
            for (let i = 0; i < html.length; i++) {
                acum += parseInt(html[i],10);
            }
            prom = html.length;
            gradudados = "GRADUADOS DE HTML5";
            break;
        }
        case 2: {
            for (let i = 0; i < css.length; i++) {
                acum += parseInt(css[i],10)
            }
            prom = css.length;
            gradudados = "GRADUADOS DE CSS3";
            break;
        }
        case 3: {
            for (let i = 0; i < javascript.length; i++) {
                acum += parseInt(javascript[i],10)
            }
            prom = javascript.length;
            gradudados = "GRADUADOS DE JAVASCRIPT";
            break;
        }
        case 4: {
            for (let i = 0; i < nodejs.length; i++) {
                acum += parseInt(nodejs[i],10)
            }
            prom = nodejs.length;
            gradudados = "GRADUADOS DE NODEJS";
            break;
        }
        default: {
           console.log(`El valor seleccionado es incorrecto, los posibles valores son
            1. HTML5
            2. CSS3
            3. JAVASCRIPT
            4. NODEJS`);
        }
    }
    return([acum, prom, gradudados]);
}

const mensaje = (graduadosHTML5, graduadosCSS3, graduadosJAVASCRIPT, graduadosNODEJS, eleccion, callback) => {
    let resultados = callback(graduadosHTML5, graduadosCSS3, graduadosJAVASCRIPT, graduadosNODEJS, eleccion);
    console.log(`Los ${resultados[2]} son en total ${resultados[0]}, distribuidos en ${resultados[1]} comisiones, siendo el promedio ${(resultados[0] / resultados[1]).toFixed(2)}`); //.toFixed(2) es para que me limite los decimales
};
 
 mensaje(graduadosHTML5, graduadosCSS3, graduadosJAVASCRIPT, graduadosNODEJS, eleccion, calcular);