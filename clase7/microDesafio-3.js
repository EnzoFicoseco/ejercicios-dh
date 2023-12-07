//1. Crear una función que pida un valor por parámetro y muestre los 10 números
//  siguientes.

function numsSiguientes(num){

    for (let i = 0; i < 10; i++) {
        
        num += 1;
        console.log(num);
        
    }
    return '';
}

console.log(numsSiguientes(5));

//2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.

function deTresEnTres(){
    for (let i = 1; i < 58; i+=3) {
        console.log(i);
        
    }
}

console.log(deTresEnTres());

//3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el
//  100.

function sumatoria(){
let suma = 0;
    for (let i = 0; i <= 100; i++) {
        suma += i;
        console.log(suma);
        
    }

}

console.log(sumatoria());

// 4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
// de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
// las letras de la cadena de texto pero en MAYÚSCULA.
// Pista: Investigar el método .toUpperCase.

function bucles(string = 'practicando el uso de los ciclos o bucles'){

for (const letra of string) {
    console.log(letra.toUpperCase());
}

}

console.log(bucles());

// 5. Crear una función que reciba como parámetro un array de números positivos. Tendrá
// la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
// Pista: Investiga sobre el uso del operador módulo. Recordemos también que un
// número par es aquel que se puede dividir entre 2.

function soloPares(array = [2,5,6,8,9,11,12]) {

for (const elemento of array) {
    if(elemento % 2 == 0){
        console.log(elemento);
    }
}

}

console.log(soloPares());