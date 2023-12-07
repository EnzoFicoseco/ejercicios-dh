

const totalToPay = (
    tipoHamburguesa,
    jamon,
    queso,
    salsaTomate,
    mayonesa,
    mostaza,
    tomate,
    lechuga,
    cebolla
) => {

    let toPay = 0;

    switch (tipoHamburguesa) {
        case
            "carne a la parrilla":
            toPay = 1800;
            break;
        case "pollo":
            toPay = 1500;
            break;
        case "vegetariana":
            toPay =
                1200;
            break;
        default:
            toPay = "El tipo de hamburguesa no es válido"
    }

    // Ingredientes
    toPay += jamon ? 30 : 0
    toPay += queso ? 25 : 0
    toPay += salsaTomate ? 5 : 0
    toPay += mayonesa ? 5 : 0
    toPay += mostaza ? 5 : 0
    toPay += tomate ? 15 : 0
    toPay += lechuga ? 15 : 0
    toPay += cebolla ? 10 : 0
    
return toPay;

}

function message(
    name,
    lastname,
    tipoHamburguesa,
    jamon,
    queso,
    salsaTomate,
    mayonesa,
    mostaza,
    tomate,
    lechuga,
    cebolla,
    callback){
const shouldPay = callback(
    tipoHamburguesa,
    jamon,
    queso,
    salsaTomate,
    mayonesa,
    mostaza,
    tomate,
    lechuga,
    cebolla
)

return `${name} ${lastname} el total a pagar es de $${shouldPay}`

}

const userPurchase = message(
    'Enzo',
    'Ficoseco',
    'carne a la parrilla',
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    totalToPay
)

console.log(message());