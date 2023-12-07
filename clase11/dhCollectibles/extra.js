//2. Crear un array de números y asignarle un total de diez (10) valores numéricos.
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3. Crear variables que contengan los valores numéricos dispuestos en el array en la
// posición (0, 2 y 4) y con el resto de los valores numéricos crear un nuevo array. Utiliza
// los recursos aprendidos en esta clase: Destructuring y Spread operator.
let [uno,, tres,, cinco, ...resto] = nums;
console.log(uno);
console.log(tres);
console.log(cinco);
console.log(resto);

// 4. Crear un objeto literal para almacenar los datos de nuestra mascota, considerando
// los atributos:
// a. nombre
// b. tipo de mascota (Perro - Gato)
// c. color
// d. raza
let mascota = {
    nombre : "Ele",
    tipoDeMascota : "Gato",
    color : "amarillo y negro",
    raza : "siames",
}

// Haciendo uso de la desestructuración, crea una variable por cada una de las
// claves del objeto literal y al final mostrar al usuario:
//    Hola les presento a mi mascota su nombre es: Bony, es un hermoso Perro, de
//    color: Dorado y su raza es: Golden retriever.
let {nombre, tipoDeMascota, color, raza} = mascota;

console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipoDeMascota},
 de color: ${color} y su raza es: ${raza}.`);