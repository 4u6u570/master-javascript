'use strict'

/*
Muestre todos los números divisores introducidos en un prompt
*/

var numero = parseInt(prompt("Mete un número", 1));

for (var i = 1; i <= numero; i++) {

    if (numero % i == 0) {
        console.log("Divisor: " + i);
    }
}