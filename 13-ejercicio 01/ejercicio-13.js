'use strict'

/*
Programa que pida dos números y que nos diga cuál es el mayor, el menor y si son iguales.
*/


var numero1 = parseInt(prompt("Introduce el primer número" , 0));
var numero2 = parseInt(prompt("Introduce el segundo número" , 0));

console.log(numero1, numero2);

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