'use strict'

// Transformación de textos

var numero = 444;
var texto1 = "bienvenidos al curso de JavaScript de victor Robles";
var texto2 = "es muy buen curso";

var dato = numero.toString(); // Convierte números -int- a texto.
    dato = texto1.toUpperCase(); // Muestra texto en mayúsculas
    dato = texto1.toLowerCase(); // Muestra texto en minúsculas

// console.log(typeof dato); // typeoff te dice qué tipo de valor se ingresó (string, number)
// console.log(dato); 

//---------------------------------------------------
// CALCULAR LONGITUD

var nombre = "Augusto César Salazar";
// console.log(nombre.length);

//---------------------------------------------------
// CONCATENAR - UNIR TEXTOS

// var textoTotal = texto1 + "" + texto2;
   var textoTotal = texto1.concat(""+texto2)
console.log(textoTotal);