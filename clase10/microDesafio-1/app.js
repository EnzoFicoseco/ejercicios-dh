let dhBici = {
    bicicletas : require("./datosBici"),
    // a. Crear una funcionalidad (buscarBici) que reciba por parámetro el (id) de
    // la bicicleta y devuelva la bici que corresponde. En caso de no
    // encontrarla, deberá retornar null. Estamos optimizando nuestro código,
    // por lo que deberíamos utilizar el método filter.
    buscarBici : function(id){
        let biciEncontrada = this.bicicletas.filter((bicicleta) => bicicleta.id == id);
        return (biciEncontrada.length > 0 ? biciEncontrada[0] : null);
    },
    // b. Crear una funcionalidad de (venderBici) que reciba el (id). En caso de
    // encontrar la bicicleta, debe asignarle el estado de vendida (si) y retornar
    // todos los datos de la bicicleta. En el caso de no encontrar la bicicleta,
    // debe retornar al usuario: “Bicicleta no encontrada”. Puedes aprovechar
    // la función (buscarBici).
    venderBici : function(id){
        let bici = this.buscarBici(id);
        return (bici ? (bici.vendida = "si", bici) : "Bicicleta no encontrada");
    },
    // c. Crear la funcionalidad (biciParaLaVenta). Tendrá la responsabilidad de
    // devolver todas aquellas bicicletas que aún no estén vendidas. Recuerda
    // que estamos optimizando nuestro código, por lo que deberíamos utilizar
    // el método filter.    
    biciParaLaVenta : function(){
        let bicisDisponibles = this.bicicletas.filter((bicicleta) => bicicleta.vendida == "no");
        return bicisDisponibles;
    },
    // d. Finalmente el Tech Leader nos felicita por todo el trabajo y nos pide un
    // último esfuerzo. Tenemos que desarrollar una funcionalidad
    // (totalDeVentas) que retorne la suma del valor de todas las ventas
    // realizadas. Se recomienda utilizar la función reduce.
    totalDeVentas : function(){
        let total = this.bicicletas.reduce((acum, bici) => (bici.vendida == "si" ? (acum += bici.precio) : acum), 0);
        return total;
    },
    // 1. Crear una función (aumentoBici) que reciba por parámetro el porcentaje de
    // aumento. Tendrá la responsabilidad de devolver el listado de todas las bicicletas con
    // el aumento que reciba por parámetro. Estamos optimizando nuestro código, por lo
    // cual, deberíamos utilizar el método map.
    aumentoBici : function(porcentajeAumento){
        let aumento = porcentajeAumento * this.bicicletas.precio / 100;
        let nuevoPrecio = this.bicicletas.map((bici) => bici.precio == bici.precio + aumento)
            
    }


};

//console.log(dhBici.buscarBici(2));
//console.log(dhBici.venderBici(2));
//console.log(dhBici.biciParaLaVenta());
//console.log(dhBici.totalDeVentas());
console.log(dhBici.aumentoBici(10));



