let alquilerDeUnVehiculo = (tipoDeVehiculo, DiasDeAlquiler, sillaParaBebe) => {
    let montoAPagar = 0;
    let montoSilla = 1200;

      if(tipoDeVehiculo == "compacto"){
        montoAPagar = 14000;
    } else if(tipoDeVehiculo == "mediano"){
        montoAPagar = 17000;
    } else if(tipoDeVehiculo == "camioneta"){
        montoAPagar = 28000;
    }

    sillaParaBebe? (montoAPagar += montoSilla): ("")

    montoAPagar *= DiasDeAlquiler;

    if(sillaParaBebe){
    console.log(`Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado,
     considerando los ${DiasDeAlquiler} días utilizados y la silla para bebé,el monto total
      a pagar es de : $${montoAPagar}`)
    }else{
        console.log(`Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado,
         considerando los ${DiasDeAlquiler} días utilizados,el monto total a pagar es de : $${montoAPagar}`)
    }
}

alquilerDeUnVehiculo("camioneta", 2, true);
