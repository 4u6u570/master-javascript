'use strict'

// Transformación de textos

var numero = 444;
var texto1 = "Bienvenidos al curso de JavaScript curso de victor Robles";
var texto2 = "es muy buen curso";

// var busqueda = texto1.IndexOf("curso"); // Cantidad de apariciones de un valor.

/*-----------------------------------------------------------*/

// var busqueda = texto1.lastIndexOf("curso"); // Última aparición de un valor.

/*-----------------------------------------------------------*/

// var busqueda = texto1.search("curso"); // Dónde aparece un valor.

/*-----------------------------------------------------------*/

//var busqueda = texto1.match("/curso/g"); 

/* Match es gual que search pero devuelve el resultado 
con un array. Se usó / / para expresiones regulares*/

/*-----------------------------------------------------------*/

// var busqueda = texto1.substr(15,5); 

/*Muestra unicamente una palabra con la cantidad de letras dado
como segundo argumento a partir del caracter 15 y de ahí solo retorna las 5 letras que encuentre.*/

/*-----------------------------------------------------------*/

// var busqueda = texto1.charAt(44); 

/* Retorna la letra ubicada desde el argumento */

/*-----------------------------------------------------------*/

// var busqueda = texto1.startsWith("Bienvenidos"); 

/* Busca al inicio del string si existe la palabra dada en el argumento y si existe, arroja un valor booleano (true o false) */

/*-----------------------------------------------------------*/

var busqueda = texto1.includes("JavaScript"); 

/* Indica si el valor dado en el argumento está incluido o no en el string y arroja valores booleanos. */

/*-----------------------------------------------------------*/
