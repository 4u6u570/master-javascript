'use strict'

/*
Programa que pida dos números y que nos diga cuál es el mayor, el menor y si son iguales.
PLUS: Si los números no son un número o son menores o iguales a cero, nos los vuelva a pedir.
*/


var numero1 = parseInt(prompt("Introduce el primer número" , 0));
var numero2 = parseInt(prompt("Introduce el segundo número" , 0));

// PLUS:
while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt("Introduce el primer número" , 0));
    var numero2 = parseInt(prompt("Introduce el segundo número" , 0));
}

if(numero1 == numero2){
    alert("Los números son iguales");
}else if(numero1 > numero2){
    alert("El número mayor es: " + numero1);
    alert("El número menor es: " + numero2);
}else if(numero2 > numero1){
    alert("El número mayor es: " + numero2);
    alert("El número menor es: " + numero1);
}else{
    alert("Introduce números correctos.")
}