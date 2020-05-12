'user strict'

// Switch
console.log("Switch");
var imprime = "";
var edad = 18;

switch(edad) {
    case 18:
        imprime = "Acabas de cumplir mayoría de edad";
    break;
    case 25:
        imprime = "Ya eres adulto";
    break;
    case 40:
        imprime = "Crisis de los cuarenta";
    break;
    case 75:
        imprime = "Eres ya un anciano.";
    break;
    default:
        imprime = "Tue edad es neutral";
    break;
};

console.log(imprime);