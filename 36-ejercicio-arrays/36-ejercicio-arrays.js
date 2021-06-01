
'use strict'

// Ejercicio Arrays

/* 

1. Pida 6 números por pantalla y los meta en un array.
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola.
3. Ordenarlo y mostrarlo.
4. Invertir su orden y mostrarlo.
5. Mostrar cuántos elementos tiene el array.
6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice.

*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
});
    document.write("</ul>");
}

// var numeros = new Array(6);
   var numeros = [];

   // Pide 6 números
for(var i = 0; i <= 5; i++){
    // numeros[i] = parseInt(prompt("Introduce un numero", 0));
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}
 // Mostrar en el cuerpo de la página
 mostrarArray(numeros);
// mOstrar array en la consola
console.log(numeros);

// Ordenar y mostrar

numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, 'ordenados')

// invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido');

// contar elementos
document.write("<h1> El array tiene: "+numeros.length+" elementos</h1>");

// Búsqueda
var busqueda = parseInt(prompt("Busca un número", 0));
var posicion = numeros.findIndex( numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<hr><h1>ENCONTRADO</h1>");
    document.write("<h1>Posición de la búsqueda: "+posicion+"</h1><hr>");
}else{
    document.write("<hr><h1>NO ENCONTRADO</h1><hr>");
}