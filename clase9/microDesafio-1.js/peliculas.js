// Este archivo será un
// módulo que contiene una lista con algunas de nuestras películas favoritas.
// Para eso nos recomiendan crear un array de objetos literales. No olvides
// que este archivo es un módulo propio y por tal motivo una vez que se crea...
// ¿cuál debería ser nuestra última línea de código?
// Por cada película se necesita conocer esta información:
// i. Identificador único de la película (id)
// ii. Calificación por parte de los usuarios (rating)
// iii. Premios (awards).
// iv. Duración de la película (length).
// v. Precio (price).
// vi. Género de la película (genre):
// 1. Acción
// 2. Animación
// 3. Aventuras
// 4. Comedia
// 5. Suspenso.

const movies = [
    {
        id: 1,
        rating: 4.5,
        awards: 5,
        length: 112,
        price: 1500,
        genre: 'Suspenso'
    },{
        id: 2,
        rating: 4,
        awards: 3,
        length: 117,
        price: 1450,
        genre: 'Aventuras'
    },{
        id: 3,
        rating: 3,
        awards: 1,
        length: 92,
        price: 1300,
        genre: 'Comedia'
    }
]

module.exports = movies;


