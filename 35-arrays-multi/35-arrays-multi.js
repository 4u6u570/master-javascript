
'use strict'

// Arrays Multidimensionales

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

// Método para ordenar los elementos de un array por oden alfabético.

peliculas.sort();

// Método para invertir el orden de los elementos en un array.

peliculas.reverse()

var cine = [categorias, peliculas];

// document.write(cine[0][1]);
// document.write(cine[1][2]);

/* 
var elemento = "";

do{
    elemento = prompt("Introduce tu película");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

*/

// peliculas.pop();

var indice = peliculas.indexOf('Gran Torino');
if(indice > -1){
    peliculas.splice(indice, 1)
}

var peliculas_string = peliculas.join();

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);
//document.write(peliculas_string)
//document.write(peliculas);

