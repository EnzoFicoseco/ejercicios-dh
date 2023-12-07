//Creo un Array con los perfiles para poner a prueba la función Math.random()
let perfiles = ["administrador", "Administrador", "ADMINISTRADOR", "asistente", "Asistente", "ASISTENTE", "invitado", "Invitado", "INVITADO", ""];

/* Math.floor redondea el número y Math.random tira un número aleatorio del 0 hasta el num que lo multipliquemos*/
let num = Math.floor(Math.random() * perfiles.length);

//Muestro por consola qué perfil me tocó para verificar
console.log(`Bienvenido! Usted tiene el perfil de ${perfiles[num]}.`);

let perfil = perfiles[num];

//Paso la variable a minúsculas
let perfilMinuscula = perfil.toLowerCase();

if(perfilMinuscula == "administrador"){
console.log("Usted tiene todos los privilegios de uso del sistema");
}else if (perfilMinuscula == "asistente"){
console.log("Usted sólo tiene permisos para registrar, modificar y consultar datos");
}else if (perfilMinuscula == "invitado"){
console.log("Usted solo tiene permisos de consultar datos");
}else if (perfilMinuscula == ""){
    console.log("Debes especificar el perfil del usuario");
}else{
    console.log("No entró a los if!!!")
}