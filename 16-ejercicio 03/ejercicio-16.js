'use strict'

/*
Hacer un programa que muestre todos los números entre dos números introducidos por el usuario
*/

var numero01 = parseInt(prompt("Introduce el primer número", 0));
var numero02 = parseInt(prompt("Introduce el segundo número", 0));

document.write("<h1>Del "+numero01+" al "+numero02+" están estos números:>/h1>")
for(var i = numero01; i <= numero02; i++){
    document.write(i+"<br/>");
}