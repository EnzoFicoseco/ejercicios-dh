
//● La velocidad debe estar comprendida entre 268 a 278 km/hr.
//● La altura debe estar comprendida entre 150 m a 300 m.

let velocidad = 267;
let altura = 150;

if (velocidad >= 268 && velocidad <=278) {
    
    console.log("Usted cuenta con la velocidad necesaria para aterrizar, a continuación verificaremos la altura");

    if (altura >= 150 && altura <= 300) {
        console.log("Perfecto! usted tiene permitido aterrizar");
    } else{
        console.log("No puede aterrizar, usted cuenta con la velocidad necesaria pero no con la altura");
    }

} else {
    console.log("Usted no cuenta con la velocidad adecuada, corrija dicho parámetro");
}