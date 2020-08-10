'use strict'

// Funciones anónimas
// Es una función que no tiene nombre.

/* 
var pelicula = function(nombre){
        return "La película es: " + nombre;
}
*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
      var sumar = numero1 + numero2;

      sumaYmuestra(sumar);
      sumaPorDos(sumar);

      return sumar;
}

sumame(5, 7, dato => {
        console.log("La suma es:", dato)
},

dato => {
        console.log("La suma por dos es:", (dato*2));
});


/* 
console.log(
        sumame(4, 5)
        );
*/