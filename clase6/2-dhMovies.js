/*
El Tech Leader de la empresa DH-Movies requiere conocer la estructura de datos del nuevo
proyecto, para ello debes tener presente lo siguiente:
*/


/* Crear una estructura para almacenar un conjunto de películas, tales como: ‘Turno de
día’, ‘30 noches con mi ex’, ‘Bestia’, ‘El monte’, ‘Top gun maverick',
‘Elvis’,‘Thor: amor y trueno’. */
let peliculas = ['Turno de día', '30 noches con mi ex', 'Bestia',
 'El monte', 'Top gun maverick', 'Elvis', 'Thor: amor y trueno'];
console.log(peliculas);

console.log('- - - - - - - - - - - - - - - - - - -');

/* Más tarde desde la producción indicaron que la película más vendida era: ‘Thor:
amor y trueno’. Por lo tanto, en la estructura creada querían ver primero dicha
película y con letras en mayúsculas. Para ello el tech leader, te solicita que crees
una función, la cual recibirá por parámetro la película indicada y deberá retornar la
misma pero en mayúscula. Para ello sería bueno que investigues sobre el método
.toUpperCase(). Con ese valor recibido, deberás colocarla primera en la estructura
creada. */
let peliculaAMayuscula = (pelicula) => {
    peliculas.pop();
    let peliMasVendida = pelicula.toUpperCase();
    peliculas.unshift(peliMasVendida);
}
peliculaAMayuscula('Thor: amor y trueno')
console.log(peliculas);

console.log('- - - - - - - - - - - - - - - - - - -');

/*  Debemos crear una cadena de texto
para las siguientes películas próximas a estrenar:
○ Counter-Strike
○ NOP
○ Vértigo
○ Nick
○ Avatar.
Nos piden crear una estructura parecida a la trabajada en el punto 2, teniendo en
cuenta que cada elemento debe estar separado por una coma.  */
let proximasPeliculas = 'Counter-Strike, NOP, Vértigo, Nick, Avatar';
console.log(proximasPeliculas);

console.log('- - - - - - - - - - - - - - - - - - -');

/* Una vez creada la estructura, una de las programadoras del equipo indica que la
primera película incorporada a la estructura no es una película sino un video juego.
Por tal motivo, te encomiendan la tarea de excluir dicho elemento de la estructura.  */
let proximasPeliculasArray = proximasPeliculas.split(',');
proximasPeliculasArray.shift();
console.log(proximasPeliculasArray);

console.log('- - - - - - - - - - - - - - - - - - -');

/* Finalmente, el Tech Leader te solicita crear una función que reciba por parámetro
ambas estructuras creadas y debe devolver un nueva nueva estructura con todas las
películas, para ello te recomendamos que investigues lo que hace el método
.concat(). */
let juntarPeliculas = (pelis1, pelis2) => {

    let todasLasPeliculas = pelis1.concat(pelis2);

    return todasLasPeliculas;

}
console.log(juntarPeliculas(peliculas, proximasPeliculasArray));



for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}