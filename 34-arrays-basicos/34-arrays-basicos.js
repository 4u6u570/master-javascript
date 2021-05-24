
'use strict'

// Arrays, Arreglos, Matrices

var nombre = "Augusto Salazar";
var nombres = ["Augusto Salazar", "Juan López", "Manolo García", "José Martin", 52, true];

var lenguajes = new Array("PHP", "JS", "Go", "Java");
// var elemento = parseInt(prompt("Qué elemento del array quieres??", 0));

/*
(elemento) > nombres.length 
? alert("Introduce un número menor que "+nombres.length) 
: alert("El usuario seleccionado es: "+nombres[elemento]);
*/

// Recorrer arrays con loops

document.write("<h1>Lenguajes de programación del 2021</h1>");
document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
    document.write("</ul>");
*/

lenguajes.forEach((elementosDelArrayLenguajes, indice)=> {
    document.write("<li>"+indice+" - "+elementosDelArrayLenguajes+"</li>");
});

document.write("</ul>");

