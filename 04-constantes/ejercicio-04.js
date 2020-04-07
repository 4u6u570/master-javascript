'user strict'

// Constantes
// Como una variable pero su valor no puede cambiar

var web = "https://linkeding.com";
const ip = "108.174.10.10";

web = "https://linkedin.com/in/augustosalazar";
//ip = "hola"; // >> Uncaught TypeError: Assignment to constant variable.

console.log(web, ip);