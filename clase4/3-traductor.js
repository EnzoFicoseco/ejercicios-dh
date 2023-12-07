//Array de las distintas opciones que el usuario pudiera ingresar
let cosas = ["perro", "gato", "puerta", "ventana", "mesa", ""];

//El número aleatorio se guarda en la variable num
let num = Math.floor(Math.random() * cosas.length);

//Me creo una variable donde guardo la opción "que el usuario ingresó"
let cosa = cosas[num];

console.log(`
Usted ha ingresado ${cosa} y esa palabra en inglés es:
`);


switch(cosa){
    case "perro":
        console.log("dog");
        break;
        case "gato":
        console.log("cat");
        break;
        case "puerta":
        console.log("door");
        break;
        case "ventana":
        console.log("window");
        break;
        case "mesa":
        console.log("table");
        break;
        default:
            console.log("La palabra ingresada es incorrecta")
}