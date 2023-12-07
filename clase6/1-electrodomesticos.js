
//● Define un array que contenga un conjunto de seis (6) productos de electrodomésticos.
let electrodomesticos = ["microondas", "heladera", "lavarropas", "aire", "licuadora", "cafetera"];

//● Acceder de manera arbitraria a diferentes elementos del array. Recuerda mostrar por
//la consola los resultados.
console.log(electrodomesticos[0]);
console.log(electrodomesticos[1]);
console.log(electrodomesticos[2]);
console.log(electrodomesticos[3]);
console.log(electrodomesticos[4]);
console.log(electrodomesticos[5]);

console.log(`~~~~~~~~~~~~~~~~~~~~~`);

//● Extraer el primer elemento del array y agregarlo al final del mismo.
console.log(electrodomesticos);
let elemento = electrodomesticos.shift();
electrodomesticos.push(elemento);
console.log(electrodomesticos);

console.log(`~~~~~~~~~~~~~~~~~~~~~`);

//● Agregar al final del array dos (2) nuevos productos.
electrodomesticos.push("horno eléctrico");
electrodomesticos.push("tostadora");
console.log(electrodomesticos);

console.log(`~~~~~~~~~~~~~~~~~~~~~`);

//● Mostrar por la consola la cantidad de elementos que contiene el array.
console.log(electrodomesticos.length);

console.log(`~~~~~~~~~~~~~~~~~~~~~`);

/* ● Buscar un elemento del array y crear una condición responsable de establecer si
existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
“Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
no existe”.*/
console.log(electrodomesticos.includes("horno eléctrico") ?
 "Producto encontrado." : "El producto buscado no existe.")

console.log(`~~~~~~~~~~~~~~~~~~~~~`);

//● Unificar todos los elementos del array en una cadena de texto (string), separando los
//elementos por espacios en blanco.
let electrodomesticosString = electrodomesticos.join(" ");
console.log(electrodomesticosString);

console.log(`~~~~~~~~~~~~~~~~~~~~~`);

//● Determinar la cantidad de elementos que posee la cadena de texto obtenida.
console.log(electrodomesticosString.length);

console.log(`~~~~~~~~~~~~~~~~~~~~~`);

//● Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
//función adecuada para ello.
let electroStringFinal = electrodomesticosString.replace("heladera", "pava eléctrica");
console.log(electroStringFinal);

console.log(`~~~~~~~~~~~~~~~~~~~~~`);

//● Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
//de la cadena
let electroFinal = electroStringFinal.split(" ");
console.log(electroFinal);