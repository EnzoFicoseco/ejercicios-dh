

let autosImportados = require("./autos.js");

let concesionaria = {

    autos : autosImportados,

    buscarAuto : function(patente){

        let autoPorPatente = this.autos.find((auto) => auto.patente == patente)
        if(autoPorPatente !== undefined){
            return autoPorPatente;
        } else{
            return null;
        }
        
    },

    venderAuto : function(patente){
        let autoEncontrado = this.buscarAuto(patente);
        if(autoEncontrado !== null){
            autoEncontrado.vendido = true;
        }
        
        return autoEncontrado;
    },

    autosParaLaVenta : function(){

        let autosDisponibles = this.autos.filter((auto) => auto.vendido !== true);
        return autosDisponibles;

    },

    autosNuevos : function(){

        let autosAVender = this.autosParaLaVenta();
        let autosNuevos = autosAVender.filter((auto) => auto.km < 100);
        return autosNuevos;

    },

    listaDeVentas : function(){
        let autosVendidos = this.autos.filter((auto) => auto.vendido);
        return autosVendidos.map((auto) => auto.precio);
    },

    totalDeVentas : function(){
        
        return this.listaDeVentas().reduce((acum, precio) => acum += precio, 0);

    },

    puedeComprar : function(auto, persona){
        let totalCuota = auto.precio / auto.cuotas;

        if(persona.capacidadDePagoTotal > auto.precio && persona.capacidadDePagoEnCuotas > totalCuota){
            return true;
        } else{
            return false;
        }

    },

    autosQuePuedeComprar : function(persona){

        let autosAVender = this.autosParaLaVenta();
        let autosComprables = autosAVender.filter((auto) => this.puedeComprar(auto, persona));
        return autosComprables;

    }

}

console.log(concesionaria.autosQuePuedeComprar({
    nombre : "Juan",
    capacidadDePagoEnCuotas : 30000,
    capacidadDePagoTotal : 120000,
}));

// Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función
//  autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.

// La función debe de realizar los siguientes pasos:

// 1) Obtener los autos para la venta

// 2) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la
//  lista de autos para la venta del punto 1 con el paso 2?

// 3) Por cada uno de los autos debe de probar si la persona puede comprarlo,
//  ¿ya hay alguna funcionalidad que me permita hacer esto?.
