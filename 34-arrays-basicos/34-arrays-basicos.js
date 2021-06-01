
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


lenguajes.forEach((elementosDelArrayLenguajes, indice)=> {
    document.write("<li>"+indice+" - "+elementosDelArrayLenguajes+"</li>");
});
*/

// El for in es una forma más elegante que el for común para iterar.  
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");


// Búsquedas

var precios = [10, 20, 50, 80, 12];

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

// Busca el Index del elemento, es decir, la posición en el array.
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");

// Some busca en el array si existe el elemento dado y arroja un booleano.
var busqueda = precios.some(precio => precio >= 20);
document.write(busqueda);
