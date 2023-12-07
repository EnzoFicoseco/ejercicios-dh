// Una vez creado el módulo anterior, crear un nuevo archivo (app.js). Piensa
// cómo hacer para lograr importar nuestro módulo (peliculas.js). Luego,
// utilizando lo que sabemos sobre ciclos o bucles, muestra al usuario un listado
// con el detalle de cada una de nuestras películas favoritas.

const movies = require("./peliculas.js");



    for (let i = 0; i < movies.length; i++) {
    
        console.log(movies[i]);
        
    }

//     const peliculas = require("./peliculas");

// for (let i = 0; i < peliculas.length; i++){
//     console.log(peliculas[i]);
// }


