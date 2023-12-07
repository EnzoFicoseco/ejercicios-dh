// 3. Dentro del archivo (app.js), crea una variable a la que se le asigne la ruta del archivo
// (mensaje.txt) y luego llama al módulo nativo de Node.js que te permita leer el
// contenido del archivo (mensaje.txt).
// 4. Una vez leído, muestra al usuario por la consola el contenido del mismo.

const fs = require('fs');

const mensaje = fs.readFileSync("mensaje.txt", "utf-8");

console.log(mensaje);