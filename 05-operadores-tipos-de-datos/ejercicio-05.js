'user strict'

// Operadores

var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2; // Puedo usar - * / %

alert("El resultado de la operación es: "+operacion)

// Tipo de datos

var numero_entero = 44;
var cadena_texto = "Hola qué tal";
var verdadero_o_falso = true;


var numero_falso = "33.4";
console.log(numero_falso + 7); // Se concatena el 7 con el string pero no se suman. Arroja 33.47

console.log(Number(numero_falso)+ 7); // El método Number convierte el string "33" en número y lo suma con el 7. Arroja 40.4
console.log(parseInt(numero_falso)+ 7); // El método parseInt convierte el número a entero y suma 7.
console.log(parseFloat(numero_falso)+ 7); // Convierte el número a decimal y suma 7 (por ejemplo 40.4)
console.log(String(numero_falso)+ 4); // Convierte cualquier número a string (33.44)
console.log(typeof numero_falso); // Devuelve el tipo de dato de cualquier variable (string)
console.log(typeof numero_entero); // Devuelve el tipo de dato de cualquier variable (number)
console.log(typeof verdadero_o_falso); // Devuelve el tipo de dato de cualquier variable (boolean)


console.log(cadena_texto);
console.log(verdadero_o_falso); // Arroja "true" por consola
