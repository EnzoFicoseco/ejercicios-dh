let fs = require("fs");
let rutaJSON = "./bicicletas.json";
let bicicletasJSON = fs.readFileSync(rutaJSON, "utf-8");
let bicicletasArray = JSON.parse(bicicletasJSON);

module.exports = bicicletasArray;




